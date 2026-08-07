/* eslint-disable @next/next/no-html-link-for-pages -- This static export relies on full-document navigation to refresh the custom route shell. */
import React from 'react';

export default function MeetingBooked() {
  return (
    <main>
      <section style={{ background: 'linear-gradient(135deg,#F8FAFC 0%,#EFF7F8 56%,#FCF3EE 150%)', padding: '104px 24px 96px', minHeight: '62vh', display: 'flex', alignItems: 'center' }}>
        <div style={{ width: '100%', maxWidth: '760px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ width: '64px', height: '64px', margin: '0 auto', borderRadius: '50%', background: '#2C8C99', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '30px', fontWeight: '800', boxShadow: '0 16px 34px rgba(44,140,153,.24)' }} aria-hidden="true">✓</div>
          <div style={{ marginTop: '24px', fontFamily: "'Roboto Mono',monospace", fontSize: '10px', letterSpacing: '.12em', color: '#2C8C99', fontWeight: '700' }}>WALKTHROUGH CONFIRMED</div>
          <h1 style={{ margin: '16px auto 18px', maxWidth: '700px', fontSize: 'clamp(38px,6vw,62px)', lineHeight: '1.04', letterSpacing: '-.045em', color: '#1F2B4D' }}>Your AXY walkthrough is booked.</h1>
          <p style={{ maxWidth: '630px', margin: '0 auto', fontSize: '17px', lineHeight: '1.7', color: '#5B657C' }}>Your confirmation includes the meeting details and options to reschedule or cancel. We look forward to learning about your retail ecosystem and showing you the most relevant AXY workflows.</p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', flexWrap: 'wrap', marginTop: '30px' }}>
            <a className="hv17" href="/product" style={{ display: 'inline-flex', padding: '14px 24px', borderRadius: '10px', background: '#1F2B4D', color: '#fff', fontSize: '14px', fontWeight: '800' }}>Explore the AXY platform</a>
            <a href="/" style={{ display: 'inline-flex', padding: '14px 24px', borderRadius: '10px', border: '1.5px solid #C8D1DE', color: '#1F2B4D', background: '#fff', fontSize: '14px', fontWeight: '700' }}>Return to the homepage</a>
          </div>
        </div>
      </section>
    </main>
  );
}
