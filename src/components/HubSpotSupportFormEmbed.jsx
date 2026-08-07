'use client';

import React from 'react';

const DEFAULT_PORTAL_ID = '148359284';
const DEFAULT_FORM_ID = '7108a1d1-9b04-49ed-84fc-b7c7123e0767';

export default function HubSpotSupportFormEmbed({
  portalId = DEFAULT_PORTAL_ID,
  formId = DEFAULT_FORM_ID,
  region = 'eu1',
}) {
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
      aria-label="AXY Product Support request form"
      style={{ minHeight: '980px' }}
    />
  );
}
