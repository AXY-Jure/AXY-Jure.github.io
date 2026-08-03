'use client';

import React from 'react';

const FORM_SCRIPT_ID = 'axy-hubspot-forms-script';
const FORM_SCRIPT_SRC = 'https://js-eu1.hsforms.net/forms/embed/148359284.js';

export default function HubSpotFormEmbed() {
  React.useEffect(() => {
    if (document.getElementById(FORM_SCRIPT_ID)) return;

    const script = document.createElement('script');
    script.id = FORM_SCRIPT_ID;
    script.src = FORM_SCRIPT_SRC;
    script.defer = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div
      className="hs-form-frame"
      data-region="eu1"
      data-form-id="30aa0bca-d54a-4174-9901-ba6ee7119191"
      data-portal-id="148359284"
      aria-label="Contact AXY form"
      style={{ minHeight: '560px' }}
    />
  );
}
