'use client';

import React from 'react';
import HubSpotFormEmbed from './HubSpotFormEmbed.jsx';
import { HUBSPOT } from '../config/hubspot.js';
import { useI18n } from '../i18n/I18nProvider.jsx';

export default function HubSpotBetaAccessFormEmbed({
  ariaLabel,
  formName = 'beta_access_request',
  initialFieldValues,
  leadType = 'free_access',
  minHeight = '820px',
}) {
  const { locale, t } = useI18n();
  const formId = HUBSPOT.forms.betaAccess[locale] || HUBSPOT.forms.betaAccess.en;

  return (
    <HubSpotFormEmbed
      key={formId}
      formId={formId}
      formName={formName}
      leadType={leadType}
      ariaLabel={ariaLabel || t('common.embeds.betaAccessFormLabel')}
      initialFieldValues={initialFieldValues}
      minHeight={minHeight}
    />
  );
}
