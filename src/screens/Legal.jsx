import React from 'react';

export default function Legal() {
  return (
    <main style={{ background: '#fff', padding: '72px 24px', minHeight: '52vh' }}>
      <div style={{ maxWidth: '720px', margin: '0 auto' }}>
        <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: '10px', letterSpacing: '.1em', color: '#2C8C99', fontWeight: '700' }}>LEGAL INFORMATION</div>
        <h1 style={{ fontSize: '38px', fontWeight: '800', color: '#1F2B4D', margin: '14px 0 0', letterSpacing: '-.035em' }}>AXY legal documents</h1>
        <p style={{ fontSize: '16px', color: '#667085', lineHeight: '1.75', margin: '18px 0 0' }}>The Privacy Policy, Terms of Service, Cookie Policy and Data Processing information are under final legal review.</p>
        <section id="cookies" style={{ scrollMarginTop: '96px', marginTop: '26px', padding: '20px', background: '#F9FAFB', border: '1px solid #E4E8EF', borderRadius: '14px' }}>
          <h2 style={{ margin: 0, fontSize: '17px', color: '#1F2B4D' }}>Cookie choices on this website</h2>
          <p style={{ margin: '9px 0 0', fontSize: '13.5px', color: '#667085', lineHeight: '1.65' }}>AXY uses browser storage to remember your cookie choice. Google Analytics is optional and remains disabled unless you select “Accept analytics.” We do not enable advertising storage, advertising user data or advertising personalisation through this consent choice.</p>
          <button
            type="button"
            onClick={() => window.dispatchEvent(new Event('axy:open-cookie-settings'))}
            style={{ appearance: 'none', marginTop: '14px', padding: '9px 14px', background: '#fff', color: '#1F2B4D', border: '1px solid #C9D2E4', borderRadius: '8px', fontSize: '12.5px', fontWeight: '700', cursor: 'pointer' }}
          >Review cookie settings</button>
        </section>
        <div style={{ marginTop: '26px', padding: '20px', background: '#F9FAFB', border: '1px solid #E4E8EF', borderRadius: '14px' }}>
          <h2 style={{ margin: 0, fontSize: '17px', color: '#1F2B4D' }}>Questions about AXY and data protection?</h2>
          <p style={{ margin: '9px 0 0', fontSize: '13.5px', color: '#667085', lineHeight: '1.65' }}>Contact <a href="mailto:info@axy.net" style={{ color: '#2C8C99', fontWeight: '700' }}>info@axy.net</a>.</p>
        </div>
      </div>
    </main>
  );
}
