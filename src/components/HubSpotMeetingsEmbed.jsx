'use client';

import React from 'react';
import { useI18n } from '../i18n/I18nProvider.jsx';

const MEETINGS_EMBED_URL = 'https://meetings-eu1.hubspot.com/jure-malalan/axy-tailored-walkthrough-30-minutes?embed=true';

export default function HubSpotMeetingsEmbed() {
  const { t } = useI18n();

  return (
    <iframe
      src={MEETINGS_EMBED_URL}
      title={t('common.embeds.meetingsTitle')}
      loading="eager"
      style={{ display: 'block', width: '100%', minHeight: '720px', border: 0 }}
      allow="camera; microphone; fullscreen"
    />
  );
}
