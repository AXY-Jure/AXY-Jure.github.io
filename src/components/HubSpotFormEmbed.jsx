'use client';

import React from 'react';
import { CONSENT_CHANGED_EVENT, currentPagePath, trackAnalyticsEvent } from '../lib/analytics.js';
import { createHubSpotFormLifecycleTracker, legacyHubSpotFormEventName } from '../lib/hubspot.js';

const FORM_SCRIPT_ID = 'axy-hubspot-forms-script';
const FORM_SCRIPT_SRC = 'https://js-eu1.hsforms.net/forms/embed/148359284.js';
const FORM_ID = '30aa0bca-d54a-4174-9901-ba6ee7119191';
const FORM_NAME = 'general_contact';
const LEAD_TYPE = 'general_contact';

function formParameters(extra = {}) {
  return {
    form_id: FORM_ID,
    form_name: FORM_NAME,
    lead_type: LEAD_TYPE,
    page_path: currentPagePath(),
    ...extra,
  };
}

function isCurrentFormEvent(event) {
  return event?.detail?.formId === FORM_ID;
}

function instanceKey(event) {
  const instanceId = event?.detail?.instanceId;
  return typeof instanceId === 'string' && instanceId ? instanceId : FORM_ID;
}

export default function HubSpotFormEmbed() {
  const frameRef = React.useRef(null);

  React.useEffect(() => {
    const frame = frameRef.current;
    if (!frame) return undefined;

    const state = {
      ready: false,
      visible: false,
      viewSent: false,
    };

    const lifecycle = createHubSpotFormLifecycleTracker((eventName, extra = {}) => (
      trackAnalyticsEvent(eventName, formParameters(extra))
    ));

    const sendFormView = () => {
      if (!state.ready || !state.visible || state.viewSent) return;
      state.viewSent = trackAnalyticsEvent('form_view', formParameters());
    };

    const markReady = () => {
      state.ready = true;
      sendFormView();
    };

    const handleReady = (event) => {
      if (isCurrentFormEvent(event)) markReady();
    };

    const handleNavigation = (direction) => (event) => {
      if (!isCurrentFormEvent(event)) return;
      lifecycle.navigate(direction, instanceKey(event));
    };

    const handleSuccess = (event) => {
      if (!isCurrentFormEvent(event)) return;
      lifecycle.success();
    };

    const handleFailure = (event) => {
      if (!isCurrentFormEvent(event)) return;
      lifecycle.failure();
    };

    const handleLegacyMessage = (event) => {
      const eventName = legacyHubSpotFormEventName(event, frame, FORM_ID);
      if (!eventName) return;

      if (eventName === 'onFormReady') {
        markReady();
      } else if (eventName === 'onFormSubmit') {
        lifecycle.start();
      } else if (eventName === 'onFormSubmitted') {
        lifecycle.success();
      }
    };

    const eventHandlers = [
      ['hs-form-event:on-ready', handleReady],
      ['hs-form-event:on-interaction:navigate:next', handleNavigation('next')],
      ['hs-form-event:on-interaction:navigate:previous', handleNavigation('previous')],
      ['hs-form-event:on-submission:success', handleSuccess],
      ['hs-form-event:on-submission:failed', handleFailure],
    ];

    for (const [name, handler] of eventHandlers) window.addEventListener(name, handler);
    window.addEventListener('message', handleLegacyMessage);
    window.addEventListener(CONSENT_CHANGED_EVENT, sendFormView);

    let visibilityObserver;
    if ('IntersectionObserver' in window) {
      visibilityObserver = new IntersectionObserver((entries) => {
        if (entries.some((entry) => entry.isIntersecting && entry.intersectionRatio >= 0.1)) {
          state.visible = true;
          sendFormView();
        }
      }, { threshold: [0.1] });
      visibilityObserver.observe(frame);
    } else {
      state.visible = true;
    }

    const renderObserver = new MutationObserver(() => {
      if (frame.querySelector('iframe, form')) markReady();
    });
    renderObserver.observe(frame, { childList: true, subtree: true });
    if (frame.querySelector('iframe, form')) markReady();

    if (!document.getElementById(FORM_SCRIPT_ID)) {
      const script = document.createElement('script');
      script.id = FORM_SCRIPT_ID;
      script.src = FORM_SCRIPT_SRC;
      script.defer = true;
      document.body.appendChild(script);
    }

    return () => {
      for (const [name, handler] of eventHandlers) window.removeEventListener(name, handler);
      window.removeEventListener('message', handleLegacyMessage);
      window.removeEventListener(CONSENT_CHANGED_EVENT, sendFormView);
      visibilityObserver?.disconnect();
      renderObserver.disconnect();
    };
  }, []);

  return (
    <div
      ref={frameRef}
      className="hs-form-frame"
      data-region="eu1"
      data-form-id={FORM_ID}
      data-portal-id="148359284"
      aria-label="Contact AXY form"
      style={{ minHeight: '560px' }}
    />
  );
}
