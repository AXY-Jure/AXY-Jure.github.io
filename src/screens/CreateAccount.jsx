import React from 'react';

export default function CreateAccount() {
  return (
    <main>
      <section style={{ background: '#F9FAFB', padding: '76px 24px 68px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: '10px', letterSpacing: '.13em', color: '#2C8C99', fontWeight: '700' }}>START FREE</div>
          <h1 style={{ fontSize: 'clamp(36px,5vw,54px)', fontWeight: '800', color: '#1F2B4D', margin: '14px 0 0', letterSpacing: '-.04em', lineHeight: '1.08' }}>Start with one workflow. Expand when it proves useful.</h1>
          <p style={{ fontSize: '16px', color: '#667085', lineHeight: '1.7', margin: '18px auto 0', maxWidth: '620px' }}>AXY Free is designed for a small retail team that wants to begin capturing store activity without committing to a larger setup.</p>
        </div>
      </section>
      <section style={{ padding: '64px 24px 76px', background: '#fff' }}>
        <div style={{ maxWidth: '880px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: '22px', alignItems: 'stretch' }}>
          <article style={{ border: '1.5px solid #2C8C99', borderRadius: '18px', padding: '30px', background: '#EFF7F8' }}>
            <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: '9px', letterSpacing: '.1em', color: '#2C8C99', fontWeight: '700' }}>AXY FREE</div>
            <h2 style={{ fontSize: '25px', color: '#1F2B4D', margin: '13px 0 8px' }}>Request free access</h2>
            <p style={{ color: '#5B657C', fontSize: '14px', lineHeight: '1.65', margin: 0 }}>Tell us your company name, location and main use case. We’ll confirm the appropriate setup path.</p>
            <ul style={{ color: '#3A4358', fontSize: '13px', lineHeight: '1.8', paddingLeft: '19px', margin: '18px 0 22px' }}><li>Start with one business unit</li><li>Capture products and customer activity</li><li>No payment required to request access</li></ul>
            <a className="hv207" href="mailto:info@axy.net?subject=AXY%20Free%20access%20request" style={{ display: 'inline-flex', padding: '13px 20px', background: '#32415C', color: '#fff', borderRadius: '10px', fontSize: '14px', fontWeight: '700' }}>Request free access</a>
          </article>
          <article style={{ border: '1px solid #E4E8EF', borderRadius: '18px', padding: '30px', background: '#fff' }}>
            <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: '9px', letterSpacing: '.1em', color: '#C17F59', fontWeight: '700' }}>LARGER OR SHARED SETUP</div>
            <h2 style={{ fontSize: '25px', color: '#1F2B4D', margin: '13px 0 8px' }}>Plan the right activation</h2>
            <p style={{ color: '#5B657C', fontSize: '14px', lineHeight: '1.65', margin: 0 }}>For multiple stores, brands, integrations or custom modules, a guided walkthrough will give you a clearer starting point.</p>
            <a href="/book-a-walkthrough#schedule" style={{ display: 'inline-flex', marginTop: '28px', padding: '13px 20px', border: '1.5px solid #32415C', color: '#32415C', borderRadius: '10px', fontSize: '14px', fontWeight: '700' }}>Get guided setup</a>
          </article>
        </div>
      </section>
    </main>
  );
}
