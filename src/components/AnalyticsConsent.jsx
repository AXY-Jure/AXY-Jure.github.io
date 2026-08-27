'use client';

import React, { useCallback, useEffect, useState } from 'react';
import {
  CONSENT_STORAGE_KEY,
  MEASUREMENT_ID,
  analyticsCollectionAllowedOnHost,
  googleAnalyticsConfigParameters,
  googleConsentUpdateParameters,
  setAnalyticsConsentState,
} from '../lib/analytics.js';
import { useI18n } from '../i18n/I18nProvider.jsx';

function gtag() {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(arguments);
}

function clearAnalyticsCookies() {
  const cookieNames = document.cookie
    .split(';')
    .map((cookie) => cookie.split('=')[0].trim())
    .filter((name) => name === '_ga' || name.startsWith('_ga_'));

  for (const name of cookieNames) {
    document.cookie = `${name}=; Max-Age=0; Path=/; SameSite=Lax`;
    document.cookie = `${name}=; Max-Age=0; Path=/; Domain=.axy.net; SameSite=Lax`;
  }
}

function loadGoogleAnalytics() {
  if (!analyticsCollectionAllowedOnHost(window.location.hostname)) return;
  window[`ga-disable-${MEASUREMENT_ID}`] = false;

  if (document.querySelector(`script[data-axy-ga4="${MEASUREMENT_ID}"]`)) return;

  gtag('js', new Date());
  gtag('config', MEASUREMENT_ID, googleAnalyticsConfigParameters());

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`;
  script.dataset.axyGa4 = MEASUREMENT_ID;
  document.head.appendChild(script);
}

function updateConsent(accepted) {
  window.gtag = window.gtag || gtag;
  window[`ga-disable-${MEASUREMENT_ID}`] = !accepted;

  window.gtag('consent', 'update', googleConsentUpdateParameters(accepted));

  if (accepted) {
    loadGoogleAnalytics();
  } else {
    clearAnalyticsCookies();
  }

  setAnalyticsConsentState(accepted);
}

export default function AnalyticsConsent() {
  const [visible, setVisible] = useState(false);
  const { t, hrefForLocale } = useI18n();

  useEffect(() => {
    window.gtag = window.gtag || gtag;

    let savedChoice = null;
    try {
      savedChoice = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    } catch {
      savedChoice = null;
    }

    let showFrame;
    if (savedChoice === 'accepted') {
      updateConsent(true);
    } else if (savedChoice === 'rejected') {
      updateConsent(false);
    } else {
      showFrame = window.requestAnimationFrame(() => setVisible(true));
    }

    const openSettings = () => setVisible(true);
    window.addEventListener('axy:open-cookie-settings', openSettings);
    return () => {
      if (showFrame) window.cancelAnimationFrame(showFrame);
      window.removeEventListener('axy:open-cookie-settings', openSettings);
    };
  }, []);

  const saveChoice = useCallback((accepted) => {
    try {
      window.localStorage.setItem(CONSENT_STORAGE_KEY, accepted ? 'accepted' : 'rejected');
    } catch {
      // Consent still applies for the current page when browser storage is unavailable.
    }
    updateConsent(accepted);
    setVisible(false);
  }, []);

  if (!visible) return null;

  return (
    <section className="axy-cookie-banner" role="dialog" aria-modal="false" aria-labelledby="axy-cookie-title" aria-describedby="axy-cookie-description">
      <div className="axy-cookie-copy">
        <div id="axy-cookie-title" className="axy-cookie-title">{t('common.consent.title')}</div>
        <p id="axy-cookie-description">
          {t('common.consent.description')}{' '}
          <a href={hrefForLocale('/legal#cookies-and-similar-technologies')}>{t('common.consent.learnMore')}</a>
        </p>
      </div>
      <div className="axy-cookie-actions">
        <button type="button" className="axy-cookie-reject" onClick={() => saveChoice(false)}>{t('common.consent.reject')}</button>
        <button type="button" className="axy-cookie-accept" onClick={() => saveChoice(true)}>{t('common.consent.accept')}</button>
      </div>
    </section>
  );
}
