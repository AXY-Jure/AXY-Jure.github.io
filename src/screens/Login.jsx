import React from 'react';

export default function Login() {
  return (
    <main style={{ background: '#F9FAFB', padding: '76px 24px', minHeight: '58vh' }}>
      <div style={{ maxWidth: '520px', margin: '0 auto', textAlign: 'center' }}>
        <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: '10px', letterSpacing: '.12em', color: '#2C8C99', fontWeight: '700' }}>AXY WORKSPACE</div>
        <h1 style={{ fontSize: '36px', fontWeight: '800', color: '#1F2B4D', margin: '14px 0 0', letterSpacing: '-.035em' }}>Log in to AXY</h1>
        <p style={{ fontSize: '15px', color: '#667085', lineHeight: '1.7', margin: '14px auto 0', maxWidth: '460px' }}>Existing customers access AXY through their secure workspace. Contact the AXY support team if you need help reaching the correct login destination.</p>
        <div style={{ background: '#fff', border: '1px solid #E4E8EF', borderRadius: '16px', padding: '28px', marginTop: '26px', boxShadow: '0 14px 36px rgba(31,43,77,.08)' }}>
          <h2 style={{ fontSize: '18px', color: '#1F2B4D', margin: 0 }}>Need access help?</h2>
          <p style={{ fontSize: '13px', color: '#667085', lineHeight: '1.65', margin: '10px 0 18px' }}>Contact the AXY support team and include your company name and work email.</p>
          <a className="hv207" href="mailto:support@axy.net?subject=AXY%20workspace%20access" style={{ display: 'inline-flex', justifyContent: 'center', padding: '13px 20px', background: '#32415C', color: '#fff', borderRadius: '10px', fontSize: '14px', fontWeight: '700' }}>Contact support</a>
          <div style={{ marginTop: '15px', fontSize: '12px', color: '#667085' }}>New to AXY? <a href="/create-account" style={{ color: '#2C8C99', fontWeight: '700' }}>Request free access</a></div>
        </div>
      </div>
    </main>
  );
}
