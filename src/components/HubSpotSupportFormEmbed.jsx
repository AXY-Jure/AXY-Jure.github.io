'use client';

import React from 'react';
import { useI18n } from '../i18n/I18nProvider.jsx';
import { HUBSPOT } from '../config/hubspot.js';

export default function HubSpotSupportFormEmbed({
  portalId = HUBSPOT.portalId,
  formId = HUBSPOT.forms.support,
  region = HUBSPOT.region,
}) {
  const { t } = useI18n();

  React.useEffect(() => {
    const scriptSrc = `https://js-${region}.hsforms.net/forms/embed/${portalId}.js`;
    if (Array.from(document.scripts).some((script) => script.src === scriptSrc)) return;

    const scriptId = `axy-hubspot-support-forms-script-${portalId}`;
    if (document.getElementById(scriptId)) return;

    const script = document.createElement('script');
    script.id = scriptId;
    script.src = scriptSrc;
    script.defer = true;
    document.body.appendChild(script);
  }, [portalId, region]);

  return (
    <div
      className="hs-form-frame"
      data-region={region}
      data-form-id={formId}
      data-portal-id={portalId}
      aria-label={t('common.embeds.supportFormLabel')}
      style={{ minHeight: '980px' }}
    />
  );
}
