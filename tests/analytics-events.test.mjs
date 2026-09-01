import assert from 'node:assert/strict';
import test from 'node:test';

import {
  WALKTHROUGH_PENDING_KEY,
  analyticsCollectionAllowedOnHost,
  clearWalkthroughPending,
  currentPagePath,
  hasWalkthroughPending,
  googleAnalyticsConfigParameters,
  googleConsentUpdateParameters,
  markWalkthroughPending,
  sanitizedAnalyticsPageContext,
  sanitizeAnalyticsParameters,
  setAnalyticsConsentState,
  trackAnalyticsEvent,
  trackWalkthroughBookedConfirmation,
} from '../src/lib/analytics.js';
import { createHubSpotFormLifecycleTracker, legacyHubSpotFormEventName } from '../src/lib/hubspot.js';

function createStorage(initialEntries = []) {
  const values = new Map(initialEntries);
  return {
    getItem(key) {
      return values.has(key) ? values.get(key) : null;
    },
    setItem(key, value) {
      values.set(key, String(value));
    },
    removeItem(key) {
      values.delete(key);
    },
  };
}

function createWindow({ gtag, sessionStorage = createStorage() } = {}) {
  return {
    location: {
      href: 'https://axy.net/pricing',
      origin: 'https://axy.net',
      pathname: '/pricing',
    },
    document: { referrer: '' },
    sessionStorage,
    gtag,
    CustomEvent: class CustomEvent {
      constructor(type, options) {
        this.type = type;
        this.detail = options?.detail;
      }
    },
    dispatchEvent() {},
  };
}

const validPricingEvent = {
  cta_name: 'request_beta_access',
  destination: '/request-access',
  page_path: '/pricing',
};

test('events remain blocked until analytics consent is accepted', () => {
  const calls = [];
  const target = createWindow({ gtag: (...args) => calls.push(args) });

  assert.equal(trackAnalyticsEvent('pricing_cta_click', validPricingEvent, { window: target }), false);
  setAnalyticsConsentState(false, target);
  assert.equal(trackAnalyticsEvent('pricing_cta_click', validPricingEvent, { window: target }), false);
  setAnalyticsConsentState(true, target);
  assert.equal(trackAnalyticsEvent('pricing_cta_click', validPricingEvent, { window: target }), true);
  assert.deepEqual(calls, [['event', 'pricing_cta_click', validPricingEvent]]);
});

test('missing or blocked gtag fails safely and does not consume a session-once event', () => {
  const target = createWindow();
  setAnalyticsConsentState(true, target);

  assert.equal(
    trackAnalyticsEvent('walkthrough_booked', { meeting_type: 'tailored_walkthrough', page_path: '/meeting-booked' }, {
      window: target,
      once: 'session',
      dedupeKey: 'walkthrough_booked',
    }),
    false,
  );

  target.gtag = () => {
    throw new Error('blocked by content blocker');
  };
  assert.equal(
    trackAnalyticsEvent('walkthrough_booked', { meeting_type: 'tailored_walkthrough', page_path: '/meeting-booked' }, {
      window: target,
      once: 'session',
      dedupeKey: 'walkthrough_booked',
    }),
    false,
  );

  const calls = [];
  target.gtag = (...args) => calls.push(args);
  assert.equal(
    trackAnalyticsEvent('walkthrough_booked', { meeting_type: 'tailored_walkthrough', page_path: '/meeting-booked' }, {
      window: target,
      once: 'session',
      dedupeKey: 'walkthrough_booked',
    }),
    true,
  );
  assert.equal(calls.length, 1);
});

test('the event allowlist drops PII and unknown fields and strips URL query strings', () => {
  const calls = [];
  const target = createWindow({ gtag: (...args) => calls.push(args) });
  setAnalyticsConsentState(true, target);

  assert.equal(
    trackAnalyticsEvent('create_account_click', {
      cta_location: 'pricing_hero',
      destination: '/request-access?email=jane%40example.com#invite-secret',
      page_path: '/pricing?email=jane%40example.com',
      email: 'jane@example.com',
      name: 'Jane Doe',
      message: 'Please call me',
      unknown_field: 'do-not-send',
    }, { window: target }),
    true,
  );

  assert.deepEqual(calls, [[
    'event',
    'create_account_click',
    {
      cta_location: 'pricing_hero',
      destination: '/request-access',
      page_path: '/pricing',
    },
  ]]);
});

test('automatic GA page context preserves only validated allowlisted campaign parameters', () => {
  const target = createWindow();
  target.location.href = 'https://axy.net/pricing/?utm_source=linkedin&utm_medium=social&utm_campaign=vicenza_2026&email=jure%40example.com#secret';
  target.location.pathname = '/pricing/';

  assert.deepEqual(sanitizedAnalyticsPageContext(target), {
    page_location: 'https://axy.net/pricing?utm_source=linkedin&utm_medium=social&utm_campaign=vicenza_2026',
    page_referrer: '',
  });

  target.location.href = 'https://axy.net/pricing/?customer_id=12345';
  assert.equal(sanitizedAnalyticsPageContext(target).page_location, 'https://axy.net/pricing');

  target.location.href = 'https://axy.net/pricing/?utm_email=jure%40example.com';
  assert.equal(sanitizedAnalyticsPageContext(target).page_location, 'https://axy.net/pricing');

  target.location.pathname = '/private/jane@example.com';
  target.location.href = 'https://axy.net/private/jane@example.com?customer_id=12345#secret';
  assert.deepEqual(sanitizedAnalyticsPageContext(target), {
    page_location: 'https://axy.net/not-found',
    page_referrer: '',
  });
});

test('campaign attribution accepts all six exact keys in a fixed order and rejects unsafe values', () => {
  const target = createWindow();
  target.location.href = 'https://www.axy.net/pricing/?utm_term=clienteling&utm_content=hero-banner_1&utm_id=launch.42&utm_campaign=vicenza_2026&utm_medium=social&utm_source=linkedin&utm_email=jure%40example.com';

  assert.equal(
    sanitizedAnalyticsPageContext(target).page_location,
    'https://axy.net/pricing?utm_source=linkedin&utm_medium=social&utm_campaign=vicenza_2026&utm_id=launch.42&utm_content=hero-banner_1&utm_term=clienteling',
  );

  target.location.href = `https://axy.net/pricing/?utm_source=linkedin&utm_source=google&utm_medium=social+media&utm_campaign=jure%40example.com&utm_content=${'a'.repeat(65)}&utm_id=campaign-42`;
  assert.equal(
    sanitizedAnalyticsPageContext(target).page_location,
    'https://axy.net/pricing?utm_id=campaign-42',
  );
});

test('automatic GA page context retains only external referral origins', () => {
  const target = createWindow();

  target.document.referrer = 'https://www.google.com/search?q=axy';
  assert.equal(sanitizedAnalyticsPageContext(target).page_referrer, 'https://www.google.com/');

  target.document.referrer = 'https://www.linkedin.com/feed/update/123?tracking=abc#activity';
  assert.equal(sanitizedAnalyticsPageContext(target).page_referrer, 'https://www.linkedin.com/');

  for (const internalReferrer of [
    'https://axy.net/pricing/?anything=value',
    'https://www.axy.net/contact/#form',
    'https://app.axy.net/onboarding?invite=secret',
    'https://api.axy.net/private/customer/123',
  ]) {
    target.document.referrer = internalReferrer;
    assert.equal(sanitizedAnalyticsPageContext(target).page_referrer, '');
  }

  target.document.referrer = 'https://synthetic:fixture@external.example:8443/path/customer/123?email=jure%40example.com#secret';
  assert.equal(sanitizedAnalyticsPageContext(target).page_referrer, 'https://external.example/');

  target.document.referrer = 'http://news.example.com/article/123?visitor=456';
  assert.equal(sanitizedAnalyticsPageContext(target).page_referrer, 'http://news.example.com/');

  for (const invalidReferrer of ['mailto:jure@example.com', 'javascript:alert(1)', '/relative/path', 'not a url']) {
    target.document.referrer = invalidReferrer;
    assert.equal(sanitizedAnalyticsPageContext(target).page_referrer, '');
  }
});

test('GA config keeps advertising features disabled and uses only sanitized page context', () => {
  const target = createWindow();
  target.location.href = 'https://axy.net/contact/?email=jane%40example.com';
  target.location.pathname = '/contact/';

  assert.deepEqual(googleAnalyticsConfigParameters(target), {
    anonymize_ip: true,
    cookie_flags: 'SameSite=Lax;Secure',
    allow_google_signals: false,
    allow_ad_personalization_signals: false,
    page_location: 'https://axy.net/contact',
    page_referrer: '',
  });

  assert.deepEqual(googleConsentUpdateParameters(true), {
    analytics_storage: 'granted',
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
  });
  assert.deepEqual(googleConsentUpdateParameters(false), {
    analytics_storage: 'denied',
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
  });
  assert.equal(analyticsCollectionAllowedOnHost('axy.net'), true);
  assert.equal(analyticsCollectionAllowedOnHost('www.axy.net'), true);
  assert.equal(analyticsCollectionAllowedOnHost('127.0.0.1'), false);
  assert.equal(analyticsCollectionAllowedOnHost('localhost'), false);
});

test('legacy HubSpot callbacks require the embedded form window and a trusted HubSpot origin', () => {
  const embeddedWindow = {};
  const frame = { querySelectorAll: () => [{ contentWindow: embeddedWindow }] };
  const submitted = {
    origin: 'https://js-eu1.hsforms.net',
    source: embeddedWindow,
    data: {
      type: 'hsFormCallback',
      eventName: 'onFormSubmitted',
      id: '30aa0bca-d54a-4174-9901-ba6ee7119191',
      data: [{ name: 'email', value: 'jane@example.com' }],
    },
  };

  assert.equal(legacyHubSpotFormEventName(submitted, frame, submitted.data.id), 'onFormSubmitted');
  assert.equal(legacyHubSpotFormEventName({ ...submitted, origin: 'https://attacker.example' }, frame, submitted.data.id), null);
  assert.equal(legacyHubSpotFormEventName({ ...submitted, source: {} }, frame, submitted.data.id), null);
  assert.equal(legacyHubSpotFormEventName(submitted, frame, 'another-form-id'), null);
});

test('HubSpot lifecycle tracking deduplicates success, separates failure, and never forwards field values', () => {
  const formParameters = {
    form_id: '30aa0bca-d54a-4174-9901-ba6ee7119191',
    form_name: 'general_contact',
    lead_type: 'general_contact',
    page_path: '/contact',
  };
  const calls = [];
  const target = createWindow({ gtag: (...args) => calls.push(args) });
  const lifecycle = createHubSpotFormLifecycleTracker((eventName, extra) => (
    trackAnalyticsEvent(eventName, { ...formParameters, ...extra }, { window: target })
  ));

  assert.equal(lifecycle.success(), false, 'unknown consent cannot create a lead event');
  setAnalyticsConsentState(true, target);
  assert.equal(lifecycle.failure(), true);
  const embeddedWindow = {};
  const frame = { querySelectorAll: () => [{ contentWindow: embeddedWindow }] };
  const legacySuccess = {
    origin: 'https://js-eu1.hsforms.net',
    source: embeddedWindow,
    data: {
      type: 'hsFormCallback',
      eventName: 'onFormSubmitted',
      id: formParameters.form_id,
      data: [
        { name: 'email', value: 'jane@example.com' },
        { name: 'firstname', value: 'Jane Doe' },
        { name: 'message', value: 'Please call me' },
      ],
    },
  };
  assert.equal(legacyHubSpotFormEventName(legacySuccess, frame, formParameters.form_id), 'onFormSubmitted');
  assert.equal(lifecycle.success(), true);
  assert.equal(lifecycle.success(), false, 'modern and legacy success signals share one lead guard');

  assert.deepEqual(calls.map(([type, eventName]) => [type, eventName]), [
    ['event', 'form_start'],
    ['event', 'form_error'],
    ['event', 'generate_lead'],
  ]);
  assert.equal(calls.filter(([, eventName]) => eventName === 'generate_lead').length, 1);
  assert.equal(calls.filter(([, eventName]) => eventName === 'form_error').length, 1);
  assert.doesNotMatch(JSON.stringify(calls), /jane@example\.com|Jane Doe|Please call me/);
});

test('CTA destinations retain only known non-personal fragments', () => {
  const target = createWindow();
  assert.deepEqual(
    sanitizeAnalyticsParameters('pricing_cta_click', {
      cta_name: 'view_pricing',
      destination: 'https://axy.net/contact/?email=jane%40example.com#jane-doe',
      page_path: '/pricing',
    }, target),
    {
      cta_name: 'view_pricing',
      destination: '/contact',
      page_path: '/pricing',
    },
  );

  assert.equal(
    sanitizeAnalyticsParameters('pricing_cta_click', {
      cta_name: 'calculate_plan',
      destination: '/pricing#axy-pricing-builder',
      page_path: '/pricing',
    }, target).destination,
    '/pricing#axy-pricing-builder',
  );
});

test('unknown events, missing required parameters, and invalid controlled values are rejected', () => {
  const calls = [];
  const target = createWindow({ gtag: (...args) => calls.push(args) });
  setAnalyticsConsentState(true, target);

  assert.equal(trackAnalyticsEvent('contact_submitted', validPricingEvent, { window: target }), false);
  assert.equal(trackAnalyticsEvent('pricing_cta_click', { cta_name: 'start_free', page_path: '/pricing' }, { window: target }), false);
  assert.equal(trackAnalyticsEvent('walkthrough_started', { meeting_type: 'sales_call', page_path: '/pricing' }, { window: target }), false);
  assert.equal(trackAnalyticsEvent('form_step', {
    form_id: '30aa0bca-d54a-4174-9901-ba6ee7119191',
    form_name: 'general_contact',
    lead_type: 'general_contact',
    step_direction: 'next',
    page_path: '/contact',
  }, { window: target }), false);
  assert.equal(calls.length, 0);
});

test('identical events are suppressed only inside the short duplicate window', () => {
  const originalNow = Date.now;
  let now = 10_000;
  Date.now = () => now;

  try {
    const calls = [];
    const target = createWindow({ gtag: (...args) => calls.push(args) });
    setAnalyticsConsentState(true, target);

    assert.equal(trackAnalyticsEvent('pricing_cta_click', validPricingEvent, { window: target }), true);
    now += 1_000;
    assert.equal(trackAnalyticsEvent('pricing_cta_click', validPricingEvent, { window: target }), false);
    now += 501;
    assert.equal(trackAnalyticsEvent('pricing_cta_click', validPricingEvent, { window: target }), true);
    assert.equal(calls.length, 2);
  } finally {
    Date.now = originalNow;
  }
});

test('session-once deduplication survives a page reload through session storage', () => {
  const sharedStorage = createStorage();
  const firstCalls = [];
  const firstWindow = createWindow({ gtag: (...args) => firstCalls.push(args), sessionStorage: sharedStorage });
  setAnalyticsConsentState(true, firstWindow);

  const parameters = { meeting_type: 'tailored_walkthrough', page_path: '/meeting-booked' };
  const options = { window: firstWindow, once: 'session', dedupeKey: 'walkthrough_booked' };
  assert.equal(trackAnalyticsEvent('walkthrough_booked', parameters, options), true);
  assert.equal(trackAnalyticsEvent('walkthrough_booked', parameters, options), false);

  const secondCalls = [];
  const secondWindow = createWindow({ gtag: (...args) => secondCalls.push(args), sessionStorage: sharedStorage });
  setAnalyticsConsentState(true, secondWindow);
  assert.equal(
    trackAnalyticsEvent('walkthrough_booked', parameters, {
      window: secondWindow,
      once: 'session',
      dedupeKey: 'walkthrough_booked',
    }),
    false,
  );
  assert.equal(firstCalls.length, 1);
  assert.equal(secondCalls.length, 0);
});

test('walkthrough pending marker requires consent, clears on rejection, and expires after four hours', () => {
  const originalNow = Date.now;
  let now = 20_000;
  Date.now = () => now;

  try {
    const storage = createStorage();
    const target = createWindow({ sessionStorage: storage });

    assert.equal(markWalkthroughPending(target), false, 'unknown consent cannot create analytics intent');
    setAnalyticsConsentState(false, target);
    assert.equal(markWalkthroughPending(target), false, 'rejected consent cannot create analytics intent');

    setAnalyticsConsentState(true, target);
    assert.equal(markWalkthroughPending(target), true);
    assert.equal(hasWalkthroughPending(target), true);
    setAnalyticsConsentState(false, target);
    assert.equal(hasWalkthroughPending(target), false, 'rejection or withdrawal clears analytics intent');

    setAnalyticsConsentState(true, target);
    assert.equal(markWalkthroughPending(target), true);
    clearWalkthroughPending(target);
    assert.equal(hasWalkthroughPending(target), false);

    assert.equal(markWalkthroughPending(target), true);
    now += (4 * 60 * 60 * 1000) + 1;
    assert.equal(hasWalkthroughPending(target), false);
    assert.equal(storage.getItem(WALKTHROUGH_PENDING_KEY), null);
  } finally {
    Date.now = originalNow;
  }
});

test('booking confirmation requires the route, pending intent, and consent, then consumes the marker', () => {
  const calls = [];
  const storage = createStorage();
  const target = createWindow({ gtag: (...args) => calls.push(args), sessionStorage: storage });
  target.location.href = 'https://axy.net/meeting-booked/';
  target.location.pathname = '/meeting-booked/';

  setAnalyticsConsentState(true, target);
  assert.equal(trackWalkthroughBookedConfirmation(target), false, 'a direct confirmation-page visit is not a booking');

  setAnalyticsConsentState(false, target);
  assert.equal(markWalkthroughPending(target), false, 'rejected consent cannot create a pending conversion');
  assert.equal(trackWalkthroughBookedConfirmation(target), false, 'rejected consent blocks the conversion');
  assert.equal(hasWalkthroughPending(target), false, 'rejected activity is not retained for later attribution');

  setAnalyticsConsentState(true, target);
  assert.equal(markWalkthroughPending(target), true);
  assert.equal(trackWalkthroughBookedConfirmation(target), true);
  assert.equal(hasWalkthroughPending(target), false);
  assert.deepEqual(calls, [[
    'event',
    'walkthrough_booked',
    { meeting_type: 'tailored_walkthrough', page_path: '/meeting-booked' },
  ]]);

  assert.equal(trackWalkthroughBookedConfirmation(target), false, 'a refresh cannot emit again');
});

test('localized public paths remain valid analytics paths and booking routes', () => {
  const calls = [];
  const target = createWindow({ gtag: (...args) => calls.push(args) });
  target.location.href = 'https://axy.net/de/pricing/';
  target.location.pathname = '/de/pricing/';
  assert.equal(currentPagePath(target), '/de/pricing');
  assert.equal(
    sanitizeAnalyticsParameters('pricing_cta_click', {
      cta_name: 'start_free',
      destination: '/de/pricing',
      page_path: '/de/pricing',
    }, target)?.page_path,
    '/de/pricing',
  );

  target.location.href = 'https://axy.net/fr/meeting-booked/';
  target.location.pathname = '/fr/meeting-booked/';
  setAnalyticsConsentState(true, target);
  assert.equal(markWalkthroughPending(target), true);
  assert.equal(trackWalkthroughBookedConfirmation(target), true);
  assert.deepEqual(calls.at(-1), [
    'event',
    'walkthrough_booked',
    { meeting_type: 'tailored_walkthrough', page_path: '/fr/meeting-booked' },
  ]);
});
