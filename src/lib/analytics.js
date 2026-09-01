export const MEASUREMENT_ID = 'G-WTT8L3MJTV';
export const CONSENT_STORAGE_KEY = 'axy-analytics-consent-v1';
export const CONSENT_CHANGED_EVENT = 'axy:analytics-consent-changed';
export const WALKTHROUGH_PENDING_KEY = 'axy-walkthrough-pending-v1';
import { basePathForComparison, localizedPath, parseLocalizedPath } from '../i18n/paths.js';

const CONSENT_STATE_KEY = '__axyAnalyticsConsentState';
const SESSION_EVENT_PREFIX = 'axy-analytics-event-v1:';
const DEFAULT_DEDUPE_WINDOW_MS = 1500;
const WALKTHROUGH_PENDING_MAX_AGE_MS = 4 * 60 * 60 * 1000;

const PUBLIC_PAGE_PATHS = new Set([
  '/',
  '/about',
  '/article',
  '/back-office',
  '/book-a-walkthrough',
  '/contact',
  '/create-account',
  '/customer-experience',
  '/for-brands',
  '/for-retailers',
  '/help',
  '/how-it-works',
  '/integrations',
  '/legal',
  '/login',
  '/meeting-booked',
  '/pricing',
  '/product',
  '/request-access',
  '/resources',
  '/sales-app',
  '/use-cases/in-store-sales-capture',
  '/use-cases/product-demand-intelligence',
  '/use-cases/retail-clienteling',
  '/use-cases/retailer-brand-collaboration',
]);

const EVENT_SCHEMAS = Object.freeze({
  form_view: ['form_id', 'form_name', 'lead_type', 'page_path'],
  form_start: ['form_id', 'form_name', 'lead_type', 'page_path'],
  form_step: ['form_id', 'form_name', 'lead_type', 'step_name', 'step_number', 'step_direction', 'page_path'],
  generate_lead: ['form_id', 'form_name', 'lead_type', 'page_path'],
  form_error: ['form_id', 'form_name', 'lead_type', 'error_type', 'page_path'],
  create_account_click: ['cta_location', 'destination', 'page_path'],
  pricing_cta_click: ['cta_name', 'destination', 'page_path'],
  walkthrough_started: ['meeting_type', 'page_path'],
  walkthrough_booked: ['meeting_type', 'page_path'],
});

const REQUIRED_PARAMETERS = Object.freeze({
  form_view: ['form_id', 'form_name', 'lead_type', 'page_path'],
  form_start: ['form_id', 'form_name', 'lead_type', 'page_path'],
  form_step: ['form_id', 'form_name', 'lead_type', 'step_direction', 'page_path'],
  generate_lead: ['form_id', 'form_name', 'lead_type', 'page_path'],
  form_error: ['form_id', 'form_name', 'lead_type', 'error_type', 'page_path'],
  create_account_click: ['cta_location', 'destination', 'page_path'],
  pricing_cta_click: ['cta_name', 'destination', 'page_path'],
  walkthrough_started: ['meeting_type', 'page_path'],
  walkthrough_booked: ['meeting_type', 'page_path'],
});

const LEAD_TYPES = new Set(['free_access', 'general_contact', 'walkthrough', 'partnership', 'integration_inquiry']);
const MEETING_TYPES = new Set(['tailored_walkthrough']);
const STEP_DIRECTIONS = new Set(['next', 'previous']);
const ERROR_TYPES = new Set(['submission_failed', 'validation_failed']);
const SAFE_DESTINATION_HASHES = new Set(['#schedule', '#axy-pricing-builder']);
const ANALYTICS_HOSTS = new Set(['axy.net', 'www.axy.net']);
const CANONICAL_ANALYTICS_ORIGIN = 'https://axy.net';
const ATTRIBUTION_PARAMETERS = Object.freeze([
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_id',
  'utm_content',
  'utm_term',
]);
const ATTRIBUTION_VALUE_MAX_LENGTH = 64;
const ATTRIBUTION_VALUE_PATTERN = /^[A-Za-z0-9]+(?:[._-][A-Za-z0-9]+)*$/;
const recentEvents = new WeakMap();
const memorySessionEvents = new WeakMap();

function browserWindow(target) {
  if (target) return target;
  return typeof window === 'undefined' ? undefined : window;
}

function normalizePath(value, target) {
  try {
    const base = target?.location?.origin || 'https://axy.net';
    const pathname = new URL(String(value || '/'), base).pathname;
    const parsed = parseLocalizedPath(pathname);
    const normalized = parsed.basePath.length > 1 ? parsed.basePath.replace(/\/+$/, '') : '/';
    return PUBLIC_PAGE_PATHS.has(normalized) ? localizedPath(normalized, parsed.locale) : '/not-found';
  } catch {
    return '/not-found';
  }
}

function normalizeDestination(value, target) {
  if (typeof value !== 'string' || !value.trim()) return null;

  try {
    const base = target?.location?.href || 'https://axy.net/';
    const url = new URL(value, base);
    if (url.protocol !== 'https:' && url.protocol !== 'http:') return null;

    const path = url.pathname.length > 1 ? url.pathname.replace(/\/+$/, '') : '/';
    const safeHash = SAFE_DESTINATION_HASHES.has(url.hash) ? url.hash : '';
    const currentOrigin = target?.location?.origin || 'https://axy.net';
    return url.origin === currentOrigin ? `${path}${safeHash}` : `${url.origin}${path}`;
  } catch {
    return null;
  }
}

function normalizeToken(value, maxLength = 80) {
  if (typeof value !== 'string') return null;
  const token = value.trim();
  return token.length > 0 && token.length <= maxLength && /^[a-z0-9][a-z0-9_.:-]*$/i.test(token) ? token : null;
}

function sanitizeParameter(name, value, target) {
  if (name === 'page_path') return normalizePath(value, target);
  if (name === 'destination') return normalizeDestination(value, target);
  if (name === 'lead_type') return LEAD_TYPES.has(value) ? value : null;
  if (name === 'meeting_type') return MEETING_TYPES.has(value) ? value : null;
  if (name === 'step_direction') return STEP_DIRECTIONS.has(value) ? value : null;
  if (name === 'error_type') return ERROR_TYPES.has(value) ? value : null;
  if (name === 'step_number') {
    const number = Number(value);
    return Number.isInteger(number) && number > 0 && number <= 100 ? number : null;
  }
  return normalizeToken(value, name === 'form_id' ? 64 : 80);
}

export function sanitizeAnalyticsParameters(eventName, parameters = {}, target) {
  const allowedParameters = EVENT_SCHEMAS[eventName];
  if (!allowedParameters || !parameters || typeof parameters !== 'object') return null;

  const safeParameters = {};
  for (const name of allowedParameters) {
    if (parameters[name] === undefined || parameters[name] === null) continue;
    const value = sanitizeParameter(name, parameters[name], browserWindow(target));
    if (value !== null) safeParameters[name] = value;
  }

  if (eventName === 'form_step' && safeParameters.step_name === undefined && safeParameters.step_number === undefined) return null;
  if (REQUIRED_PARAMETERS[eventName].some((name) => safeParameters[name] === undefined)) return null;
  return safeParameters;
}

export function getAnalyticsConsentState(target) {
  const currentWindow = browserWindow(target);
  const state = currentWindow?.[CONSENT_STATE_KEY];
  return state === 'accepted' || state === 'rejected' ? state : 'unknown';
}

export function setAnalyticsConsentState(accepted, target) {
  const currentWindow = browserWindow(target);
  if (!currentWindow) return;

  const state = accepted ? 'accepted' : 'rejected';
  currentWindow[CONSENT_STATE_KEY] = state;
  if (!accepted) clearWalkthroughPending(currentWindow);

  try {
    const ConsentEvent = currentWindow.CustomEvent || CustomEvent;
    currentWindow.dispatchEvent(new ConsentEvent(CONSENT_CHANGED_EVENT, { detail: { state } }));
  } catch {
    // Consent remains applied even when this optional notification is unavailable.
  }
}

export function analyticsConsentGranted(target) {
  return getAnalyticsConsentState(target) === 'accepted';
}

export function currentPagePath(target) {
  const currentWindow = browserWindow(target);
  return normalizePath(currentWindow?.location?.pathname || '/', currentWindow);
}

function isAxyOwnedHostname(hostname) {
  const normalized = String(hostname || '').toLowerCase().replace(/\.+$/, '');
  return normalized === 'axy.net' || normalized.endsWith('.axy.net');
}

function sanitizedAttributionQuery(target) {
  try {
    const currentUrl = new URL(target?.location?.href || CANONICAL_ANALYTICS_ORIGIN, CANONICAL_ANALYTICS_ORIGIN);
    if (!['http:', 'https:'].includes(currentUrl.protocol) || !isAxyOwnedHostname(currentUrl.hostname)) return '';

    const safeParameters = new URLSearchParams();
    for (const name of ATTRIBUTION_PARAMETERS) {
      const values = currentUrl.searchParams.getAll(name);
      if (
        values.length === 1
        && values[0].length <= ATTRIBUTION_VALUE_MAX_LENGTH
        && ATTRIBUTION_VALUE_PATTERN.test(values[0])
      ) {
        safeParameters.set(name, values[0]);
      }
    }

    const query = safeParameters.toString();
    return query ? `?${query}` : '';
  } catch {
    return '';
  }
}

function sanitizedExternalReferrer(target) {
  try {
    const rawReferrer = target?.document?.referrer;
    if (typeof rawReferrer !== 'string' || !rawReferrer) return '';

    const referrer = new URL(rawReferrer);
    if (referrer.protocol !== 'http:' && referrer.protocol !== 'https:') return '';

    const hostname = referrer.hostname.toLowerCase().replace(/\.+$/, '');
    if (!hostname || isAxyOwnedHostname(hostname)) return '';
    return `${referrer.protocol}//${hostname}/`;
  } catch {
    return '';
  }
}

export function sanitizedAnalyticsPageContext(target) {
  const currentWindow = browserWindow(target);

  return {
    page_location: `${CANONICAL_ANALYTICS_ORIGIN}${currentPagePath(currentWindow)}${sanitizedAttributionQuery(currentWindow)}`,
    page_referrer: sanitizedExternalReferrer(currentWindow),
  };
}

export function googleAnalyticsConfigParameters(target) {
  return {
    anonymize_ip: true,
    cookie_flags: 'SameSite=Lax;Secure',
    allow_google_signals: false,
    allow_ad_personalization_signals: false,
    ...sanitizedAnalyticsPageContext(target),
  };
}

export function googleConsentUpdateParameters(accepted) {
  return {
    analytics_storage: accepted ? 'granted' : 'denied',
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
  };
}

export function analyticsCollectionAllowedOnHost(hostname) {
  return ANALYTICS_HOSTS.has(String(hostname || '').toLowerCase());
}

function memoryEventsFor(target) {
  let events = memorySessionEvents.get(target);
  if (!events) {
    events = new Set();
    memorySessionEvents.set(target, events);
  }
  return events;
}

function alreadySentInSession(target, dedupeKey) {
  const storageKey = `${SESSION_EVENT_PREFIX}${dedupeKey}`;
  try {
    if (target.sessionStorage.getItem(storageKey) === 'sent') return true;
  } catch {
    // Fall back to page-memory deduplication when session storage is unavailable.
  }
  return memoryEventsFor(target).has(storageKey);
}

function markSentInSession(target, dedupeKey) {
  const storageKey = `${SESSION_EVENT_PREFIX}${dedupeKey}`;
  memoryEventsFor(target).add(storageKey);
  try {
    target.sessionStorage.setItem(storageKey, 'sent');
  } catch {
    // The in-memory marker still prevents duplicate emission on this page.
  }
}

function recentlySent(target, fingerprint, dedupeWindowMs) {
  let events = recentEvents.get(target);
  if (!events) {
    events = new Map();
    recentEvents.set(target, events);
  }

  const now = Date.now();
  const lastSentAt = events.get(fingerprint) || 0;
  if (now - lastSentAt < dedupeWindowMs) return true;

  for (const [key, sentAt] of events) {
    if (now - sentAt > dedupeWindowMs * 4) events.delete(key);
  }
  return false;
}

function markRecentlySent(target, fingerprint) {
  recentEvents.get(target)?.set(fingerprint, Date.now());
}

export function trackAnalyticsEvent(eventName, parameters, options = {}) {
  const target = browserWindow(options.window);
  if (!target || !analyticsConsentGranted(target)) return false;

  const safeParameters = sanitizeAnalyticsParameters(eventName, parameters, target);
  if (!safeParameters) return false;

  const dedupeKey = normalizeToken(options.dedupeKey, 120);
  if (options.once === 'session' && (!dedupeKey || alreadySentInSession(target, dedupeKey))) return false;

  const fingerprint = `${eventName}:${JSON.stringify(safeParameters)}`;
  const dedupeWindowMs = Number.isFinite(options.dedupeWindowMs) ? Math.max(0, options.dedupeWindowMs) : DEFAULT_DEDUPE_WINDOW_MS;
  if (dedupeWindowMs > 0 && recentlySent(target, fingerprint, dedupeWindowMs)) return false;
  if (typeof target.gtag !== 'function') return false;

  try {
    target.gtag('event', eventName, safeParameters);
    markRecentlySent(target, fingerprint);
    if (options.once === 'session') markSentInSession(target, dedupeKey);
    return true;
  } catch {
    return false;
  }
}

export function markWalkthroughPending(target) {
  const currentWindow = browserWindow(target);
  if (!currentWindow || !analyticsConsentGranted(currentWindow)) return false;
  try {
    currentWindow.sessionStorage.setItem(WALKTHROUGH_PENDING_KEY, String(Date.now()));
    return true;
  } catch {
    // This non-identifying marker is optional and never leaves the browser.
    return false;
  }
}

export function hasWalkthroughPending(target) {
  const currentWindow = browserWindow(target);
  if (!currentWindow) return false;
  try {
    const markedAt = Number(currentWindow.sessionStorage.getItem(WALKTHROUGH_PENDING_KEY));
    if (!Number.isFinite(markedAt) || markedAt <= 0 || Date.now() - markedAt > WALKTHROUGH_PENDING_MAX_AGE_MS) {
      currentWindow.sessionStorage.removeItem(WALKTHROUGH_PENDING_KEY);
      return false;
    }
    return true;
  } catch {
    return false;
  }
}

export function clearWalkthroughPending(target) {
  const currentWindow = browserWindow(target);
  if (!currentWindow) return;
  try {
    currentWindow.sessionStorage.removeItem(WALKTHROUGH_PENDING_KEY);
  } catch {
    // No action is needed when browser storage is unavailable.
  }
}

export function trackWalkthroughBookedConfirmation(target) {
  const currentWindow = browserWindow(target);
  if (!currentWindow || basePathForComparison(currentPagePath(currentWindow)) !== '/meeting-booked' || !hasWalkthroughPending(currentWindow)) return false;

  const pagePath = currentPagePath(currentWindow);

  const sent = trackAnalyticsEvent(
    'walkthrough_booked',
    { meeting_type: 'tailored_walkthrough', page_path: pagePath },
    {
      window: currentWindow,
      once: 'session',
      dedupeKey: 'walkthrough_booked_tailored_walkthrough',
    },
  );

  if (sent) clearWalkthroughPending(currentWindow);
  return sent;
}
