'use client';

import React, { useCallback, useEffect, useState } from 'react';

const MEASUREMENT_ID = 'G-WTT8L3MJTV';
const CONSENT_STORAGE_KEY = 'axy-analytics-consent-v1';

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
  window[`ga-disable-${MEASUREMENT_ID}`] = false;

  if (document.querySelector(`script[data-axy-ga4="${MEASUREMENT_ID}"]`)) return;

  gtag('js', new Date());
  gtag('config', MEASUREMENT_ID, {
    anonymize_ip: true,
    cookie_flags: 'SameSite=Lax;Secure',
  });

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`;
  script.dataset.axyGa4 = MEASUREMENT_ID;
  document.head.appendChild(script);
}

function updateConsent(accepted) {
  window.gtag = window.gtag || gtag;
  window[`ga-disable-${MEASUREMENT_ID}`] = !accepted;

  window.gtag('consent', 'update', {
    analytics_storage: accepted ? 'granted' : 'denied',
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
  });

  if (accepted) {
    loadGoogleAnalytics();
  } else {
    clearAnalyticsCookies();
  }
}

export default function AnalyticsConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    window.gtag = window.gtag || gtag;

    let savedChoice = null;
    try {
      savedChoice = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    } catch (error) {
      savedChoice = null;
    }

    if (savedChoice === 'accepted') {
      updateConsent(true);
    } else if (savedChoice === 'rejected') {
      updateConsent(false);
    } else {
      setVisible(true);
    }

    const openSettings = () => setVisible(true);
    window.addEventListener('axy:open-cookie-settings', openSettings);
    return () => window.removeEventListener('axy:open-cookie-settings', openSettings);
  }, []);

  const saveChoice = useCallback((accepted) => {
    try {
      window.localStorage.setItem(CONSENT_STORAGE_KEY, accepted ? 'accepted' : 'rejected');
    } catch (error) {
      // Consent still applies for the current page when browser storage is unavailable.
    }
    updateConsent(accepted);
    setVisible(false);
  }, []);

  if (!visible) return null;

  return (
    <section className="axy-cookie-banner" role="dialog" aria-modal="false" aria-labelledby="axy-cookie-title" aria-describedby="axy-cookie-description">
      <div className="axy-cookie-copy">
        <div id="axy-cookie-title" className="axy-cookie-title">Your privacy choices</div>
        <p id="axy-cookie-description">
          We use optional Google Analytics cookies to understand how the AXY website is used. Analytics stays off unless you accept.{' '}
          <a href="/legal#cookies">Learn more</a>
        </p>
      </div>
      <div className="axy-cookie-actions">
        <button type="button" className="axy-cookie-reject" onClick={() => saveChoice(false)}>Reject optional</button>
        <button type="button" className="axy-cookie-accept" onClick={() => saveChoice(true)}>Accept analytics</button>
      </div>
    </section>
  );
}
