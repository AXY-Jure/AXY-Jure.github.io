'use client';

import React from 'react';
import {
  CONSENT_CHANGED_EVENT,
  currentPagePath,
  markWalkthroughPending,
  trackAnalyticsEvent,
  trackWalkthroughBookedConfirmation,
} from '../lib/analytics.js';
import { basePathForComparison } from '../i18n/paths.js';

const ONBOARDING_ORIGIN = 'https://app.axy.net';
const ONBOARDING_PATH = '/onboarding';
const WALKTHROUGH_PATH = '/book-a-walkthrough';
const MEETING_HOST = 'meetings-eu1.hubspot.com';
const MEETING_PATH = '/jure-malalan/axy-tailored-walkthrough-30-minutes';

function normalizedPath(pathname) {
  return pathname && pathname.length > 1 ? pathname.replace(/\/+$/, '') : '/';
}

function actionableElement(event) {
  const target = event.target;
  if (target?.closest) return target.closest('a,button,[data-analytics-event]');
  return target?.parentElement?.closest?.('a,button,[data-analytics-event]') || null;
}

function destinationFor(element) {
  return element.dataset.analyticsDestination || element.getAttribute('href') || '';
}

function urlFor(element) {
  const destination = destinationFor(element);
  if (!destination) return null;
  try {
    return new URL(destination, window.location.href);
  } catch {
    return null;
  }
}

function analyticsLocation(element) {
  const explicitLocation = element.closest('[data-analytics-location]')?.dataset.analyticsLocation;
  if (explicitLocation) return explicitLocation;

  const screenLabel = element.closest('main[data-screen-label]')?.dataset.screenLabel;
  if (screenLabel) return screenLabel.toLowerCase().replace(/[^a-z0-9]+/g, '_').replace(/^_|_$/g, '');

  const path = currentPagePath();
  return path === '/' ? 'home' : path.slice(1).replace(/[^a-z0-9]+/g, '_');
}

function isWalkthroughIntent(url) {
  if (!url) return false;
  const internalScheduler = url.origin === window.location.origin
    && basePathForComparison(url.pathname) === WALKTHROUGH_PATH
    && url.hash === '#schedule';
  const hostedScheduler = url.hostname === MEETING_HOST && normalizedPath(url.pathname) === MEETING_PATH;
  return internalScheduler || hostedScheduler;
}

function isOnboardingDestination(url) {
  return url?.origin === ONBOARDING_ORIGIN && normalizedPath(url.pathname) === ONBOARDING_PATH;
}

export default function AnalyticsRuntime() {
  React.useEffect(() => {
    const trackBookedConfirmation = () => {
      trackWalkthroughBookedConfirmation();
    };

    const handleClick = (event) => {
      if (event.defaultPrevented || (typeof event.button === 'number' && event.button > 0)) return;
      const element = actionableElement(event);
      if (!element || element.disabled || element.getAttribute('aria-disabled') === 'true') return;

      const url = urlFor(element);
      const pagePath = currentPagePath();

      if (isWalkthroughIntent(url)) {
        markWalkthroughPending();
        trackAnalyticsEvent('walkthrough_started', {
          meeting_type: 'tailored_walkthrough',
          page_path: pagePath,
        });
        return;
      }

      const explicitEvent = element.dataset.analyticsEvent;
      if (explicitEvent === 'pricing_cta_click') {
        trackAnalyticsEvent('pricing_cta_click', {
          cta_name: element.dataset.analyticsCtaName,
          destination: destinationFor(element),
          page_path: pagePath,
        });
        return;
      }

      if (!isOnboardingDestination(url)) return;

      if (basePathForComparison(pagePath) === '/pricing') {
        trackAnalyticsEvent('pricing_cta_click', {
          cta_name: element.dataset.analyticsCtaName || 'start_free',
          destination: destinationFor(element),
          page_path: pagePath,
        });
        return;
      }

      trackAnalyticsEvent('create_account_click', {
        cta_location: analyticsLocation(element),
        destination: destinationFor(element),
        page_path: pagePath,
      });
    };

    document.addEventListener('click', handleClick);
    window.addEventListener(CONSENT_CHANGED_EVENT, trackBookedConfirmation);
    trackBookedConfirmation();

    return () => {
      document.removeEventListener('click', handleClick);
      window.removeEventListener(CONSENT_CHANGED_EVENT, trackBookedConfirmation);
    };
  }, []);

  return null;
}
