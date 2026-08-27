import React from 'react';
import Link from '../i18n/LocalizedLink.jsx';
import { useLocalizedCopy } from '../i18n/I18nProvider.jsx';
import utilityCatalog from '../i18n/locales/pages/utility.js';

export default function MeetingBooked() {
  const { meetingBooked: copy } = useLocalizedCopy(utilityCatalog);
  return (
    <main className="axy-utility-page axy-meeting-booked-page">
      <section style={{ background: 'linear-gradient(135deg,#F8FAFC 0%,#EFF7F8 56%,#FCF3EE 150%)', padding: '104px 24px 96px', minHeight: '62vh', display: 'flex', alignItems: 'center' }}>
        <div style={{ width: '100%', maxWidth: '760px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ width: '64px', height: '64px', margin: '0 auto', borderRadius: '50%', background: '#2C8C99', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '30px', fontWeight: '800', boxShadow: '0 16px 34px rgba(44,140,153,.24)' }} aria-hidden="true">✓</div>
          <div style={{ marginTop: '24px', fontFamily: "'Roboto Mono',monospace", fontSize: '10px', letterSpacing: '.12em', color: '#2C8C99', fontWeight: '700' }}>{copy.eyebrow}</div>
          <h1 style={{ margin: '16px auto 18px', maxWidth: '700px', fontSize: 'clamp(38px,6vw,62px)', lineHeight: '1.04', letterSpacing: '-.045em', color: '#1F2B4D' }}>{copy.title}</h1>
          <p style={{ maxWidth: '630px', margin: '0 auto', fontSize: '17px', lineHeight: '1.7', color: '#5B657C' }}>{copy.body}</p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', flexWrap: 'wrap', marginTop: '30px' }}>
            <Link className="hv17" href="/product" style={{ display: 'inline-flex', padding: '14px 24px', borderRadius: '10px', background: '#1F2B4D', color: '#fff', fontSize: '14px', fontWeight: '800' }}>{copy.platform}</Link>
            <Link href="/" style={{ display: 'inline-flex', padding: '14px 24px', borderRadius: '10px', border: '1.5px solid #C8D1DE', color: '#1F2B4D', background: '#fff', fontSize: '14px', fontWeight: '700' }}>{copy.home}</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
