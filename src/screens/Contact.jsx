import React from 'react';
import HubSpotFormEmbed from '../components/HubSpotFormEmbed.jsx';

const CONTACT_FORM_LINK = 'https://2gbur8.share-eu1.hsforms.com/2MKoLytVKQXSZAbpu5xGRkQ';

export default function Contact() {
  return (
    <main className="axy-utility-page axy-contact-page">
      <section style={{ background: 'linear-gradient(135deg,#F8FAFC 0%,#EFF7F8 56%,#FCF3EE 150%)', padding: '88px 24px 64px' }}>
        <div style={{ maxWidth: '820px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: '10px', letterSpacing: '.12em', color: '#2C8C99', fontWeight: '700' }}>CONTACT AXY</div>
          <h1 style={{ margin: '16px auto 18px', maxWidth: '720px', fontSize: 'clamp(38px,6vw,62px)', lineHeight: '1.04', letterSpacing: '-.045em', color: '#1F2B4D' }}>Tell us how we can help.</h1>
          <p style={{ maxWidth: '670px', margin: '0 auto', fontSize: '17px', lineHeight: '1.7', color: '#5B657C' }}>Send us your question about AXY, pricing, partnerships or integrations. We’ll review it and guide you to the right next step.</p>
        </div>
      </section>

      <section style={{ padding: '64px 24px 84px', background: '#fff' }}>
        <div style={{ maxWidth: '820px', margin: '0 auto' }}>
          <div className="axy-embed-card" style={{ border: '1px solid #E4E8EF', borderRadius: '20px', padding: 'clamp(24px,5vw,48px)', background: '#fff', boxShadow: '0 22px 60px rgba(31,43,77,.08)' }}>
            <HubSpotFormEmbed />
            <noscript>
              <p style={{ margin: '20px 0 0', color: '#667085', lineHeight: '1.6' }}>
                JavaScript is required to display the form.{' '}
                <a href={CONTACT_FORM_LINK} style={{ color: '#1F7A87', fontWeight: '700' }}>Open the secure AXY contact form</a>.
              </p>
            </noscript>
          </div>
          <p style={{ margin: '20px auto 0', textAlign: 'center', color: '#667085', fontSize: '13px', lineHeight: '1.6' }}>
            If the form does not appear,{' '}
            <a href={CONTACT_FORM_LINK} target="_blank" rel="noreferrer" style={{ color: '#1F7A87', fontWeight: '700' }}>open it in a new window</a>.
          </p>
        </div>
      </section>
    </main>
  );
}
