'use client';

import React from 'react';
import { CONSENT_CHANGED_EVENT, currentPagePath, trackAnalyticsEvent } from '../lib/analytics.js';
import { createHubSpotFormLifecycleTracker, legacyHubSpotFormEventName } from '../lib/hubspot.js';
import { useI18n } from '../i18n/I18nProvider.jsx';
import { HUBSPOT } from '../config/hubspot.js';

export default function HubSpotFormEmbed({
  portalId = HUBSPOT.portalId,
  region = HUBSPOT.region,
  formId = HUBSPOT.forms.contact,
  formName = 'general_contact',
  leadType = 'general_contact',
  ariaLabel,
  ariaLabelKey = 'common.embeds.contactFormLabel',
  minHeight = '560px',
  initialFieldValues,
}) {
  const frameRef = React.useRef(null);
  const appliedInitialValuesRef = React.useRef('');
  const { t } = useI18n();
  const initialFieldValuesKey = JSON.stringify(initialFieldValues || {});

  React.useEffect(() => {
    const frame = frameRef.current;
    if (!frame) return undefined;

    const state = {
      ready: false,
      visible: false,
      viewSent: false,
    };

    const formParameters = (extra = {}) => ({
      form_id: formId,
      form_name: formName,
      lead_type: leadType,
      page_path: currentPagePath(),
      ...extra,
    });
    const isCurrentFormEvent = (event) => event?.detail?.formId === formId;
    const instanceKey = (event) => {
      const instanceId = event?.detail?.instanceId;
      return typeof instanceId === 'string' && instanceId ? instanceId : formId;
    };

    const lifecycle = createHubSpotFormLifecycleTracker((eventName, extra = {}) => (
      trackAnalyticsEvent(eventName, formParameters(extra))
    ));

    const initialEntries = Object.entries(JSON.parse(initialFieldValuesKey));
    const currentFormInstance = () => {
      try {
        const forms = window.HubSpotFormsV4?.getForms?.();
        return Array.isArray(forms) ? forms.find((form) => form?.getFormId?.() === formId) : undefined;
      } catch {
        return undefined;
      }
    };
    const applyInitialFieldValues = (form) => {
      if (!form || initialEntries.length === 0 || appliedInitialValuesRef.current === initialFieldValuesKey) return;

      let valueApplied = false;
      for (const [fieldName, fieldValue] of initialEntries) {
        if (typeof fieldValue !== 'string') continue;
        try {
          form.setFieldValue(fieldName, fieldValue);
          valueApplied = true;
        } catch {
          // The form remains usable if a HubSpot field is renamed or unavailable.
        }
      }
      if (valueApplied) appliedInitialValuesRef.current = initialFieldValuesKey;
    };

    const sendFormView = () => {
      if (!state.ready || !state.visible || state.viewSent) return;
      state.viewSent = trackAnalyticsEvent('form_view', formParameters());
    };

    const markReady = () => {
      state.ready = true;
      sendFormView();
    };

    const handleReady = (event) => {
      if (!isCurrentFormEvent(event)) return;
      try {
        applyInitialFieldValues(window.HubSpotFormsV4?.getFormFromEvent?.(event));
      } catch {
        // Rendering and submission must not depend on optional prefilling.
      }
      markReady();
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
      const eventName = legacyHubSpotFormEventName(event, frame, formId);
      if (!eventName) return;

      if (eventName === 'onFormReady') {
        applyInitialFieldValues(currentFormInstance());
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
      if (frame.querySelector('iframe, form')) {
        applyInitialFieldValues(currentFormInstance());
        markReady();
      }
    });
    renderObserver.observe(frame, { childList: true, subtree: true });
    if (frame.querySelector('iframe, form')) {
      applyInitialFieldValues(currentFormInstance());
      markReady();
    }

    const scriptId = `axy-hubspot-forms-script-${portalId}-${region}`;
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = `https://js-${region}.hsforms.net/forms/embed/${portalId}.js`;
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
  }, [formId, formName, initialFieldValuesKey, leadType, portalId, region]);

  return (
    <div
      ref={frameRef}
      className="hs-form-frame"
      data-region={region}
      data-form-id={formId}
      data-portal-id={portalId}
      aria-label={ariaLabel || t(ariaLabelKey)}
      style={{ minHeight }}
    />
  );
}
