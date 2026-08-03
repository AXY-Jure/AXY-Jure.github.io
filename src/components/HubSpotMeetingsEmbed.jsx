import React from 'react';

const MEETINGS_EMBED_URL = 'https://meetings-eu1.hubspot.com/jure-malalan/axy-tailored-walkthrough-30-minutes?embed=true';

export default function HubSpotMeetingsEmbed() {
  return (
    <iframe
      src={MEETINGS_EMBED_URL}
      title="Book an AXY walkthrough"
      loading="eager"
      style={{ display: 'block', width: '100%', minHeight: '720px', border: 0 }}
      allow="camera; microphone; fullscreen"
    />
  );
}
