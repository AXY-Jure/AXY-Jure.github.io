import React from 'react';
import HubSpotMeetingsEmbed from '../components/HubSpotMeetingsEmbed.jsx';
import Link from '../i18n/LocalizedLink.jsx';
import { useLocalizedCopy } from '../i18n/I18nProvider.jsx';
import serviceCatalog from '../i18n/locales/pages/service.js';

const MEETING_LINK = 'https://meetings-eu1.hubspot.com/jure-malalan/axy-tailored-walkthrough-30-minutes';

export default function Walkthrough() {
  const { walkthrough: copy } = useLocalizedCopy(serviceCatalog);
  const sessionItems = copy.items;

  return (
    <main className="axy-utility-page axy-walkthrough-page">
      <section style={{ background: 'linear-gradient(135deg,#1F2B4D 0%,#32415C 62%,#2C8C99 150%)', padding: '92px 24px 82px', color: '#fff' }}>
        <div style={{ maxWidth: '1040px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: '10px', letterSpacing: '.12em', color: '#9FEBD3', fontWeight: '700' }}>{copy.heroEyebrow}</div>
          <h1 style={{ margin: '16px auto 18px', maxWidth: '760px', fontSize: 'clamp(38px,6vw,66px)', lineHeight: '1.04', letterSpacing: '-.045em' }}>{copy.heroTitle}</h1>
          <p style={{ maxWidth: '690px', margin: '0 auto', fontSize: '18px', lineHeight: '1.7', color: '#DCE4F1' }}>{copy.heroBody}</p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', flexWrap: 'wrap', marginTop: '30px' }}>
            <a className="hv17" href="#schedule" style={{ display: 'inline-flex', padding: '14px 24px', borderRadius: '10px', background: '#fff', color: '#1F2B4D', fontSize: '14px', fontWeight: '800' }}>{copy.chooseTime}</a>
            <Link href="/product" style={{ display: 'inline-flex', padding: '14px 24px', borderRadius: '10px', border: '1.5px solid rgba(255,255,255,.45)', color: '#fff', fontSize: '14px', fontWeight: '700' }}>{copy.exploreFirst}</Link>
          </div>
        </div>
      </section>
      <section style={{ padding: '76px 24px', background: '#fff' }}>
        <div style={{ maxWidth: '1040px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 36px' }}>
            <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: '9px', letterSpacing: '.1em', color: '#2C8C99', fontWeight: '700' }}>{copy.sessionEyebrow}</div>
            <h2 style={{ margin: '12px 0', fontSize: 'clamp(30px,4vw,44px)', lineHeight: '1.12', letterSpacing: '-.035em', color: '#1F2B4D' }}>{copy.sessionTitle}</h2>
            <p style={{ margin: 0, color: '#667085', fontSize: '16px', lineHeight: '1.7' }}>{copy.sessionBody}</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(280px,100%),1fr))', gap: '20px' }}>
            <article style={{ border: '1px solid #E4E8EF', borderRadius: '16px', padding: '28px', background: '#FCF3EE' }}>
              <h3 style={{ margin: '0 0 10px', color: '#1F2B4D', fontSize: '21px' }}>{copy.retailerTitle}</h3>
              <p style={{ margin: 0, color: '#5B657C', lineHeight: '1.7', fontSize: '14px' }}>{copy.retailerBody}</p>
            </article>
            <article style={{ border: '1px solid #D7E9EB', borderRadius: '16px', padding: '28px', background: '#EFF7F8' }}>
              <h3 style={{ margin: '0 0 10px', color: '#1F2B4D', fontSize: '21px' }}>{copy.brandTitle}</h3>
              <p style={{ margin: 0, color: '#5B657C', lineHeight: '1.7', fontSize: '14px' }}>{copy.brandBody}</p>
            </article>
          </div>
          <div style={{ marginTop: '22px', border: '1px solid #E4E8EF', borderRadius: '16px', padding: '28px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(190px,1fr))', gap: '22px' }}>
            {sessionItems.map(([n, title, copy]) => <div key={n}><div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: '10px', fontWeight: '700', color: '#2C8C99' }}>{n}</div><h3 style={{ margin: '9px 0 7px', fontSize: '15px', color: '#1F2B4D' }}>{title}</h3><p style={{ margin: 0, fontSize: '13px', lineHeight: '1.6', color: '#667085' }}>{copy}</p></div>)}
          </div>
        </div>
      </section>
      <section style={{ padding: '76px 24px 88px', background: '#F8FAFC' }}>
        <div style={{ maxWidth: '1040px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 34px' }}>
            <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: '9px', letterSpacing: '.1em', color: '#2C8C99', fontWeight: '700' }}>{copy.selectEyebrow}</div>
            <h2 style={{ margin: '12px 0', fontSize: 'clamp(30px,4vw,44px)', lineHeight: '1.12', letterSpacing: '-.035em', color: '#1F2B4D' }}>{copy.selectTitle}</h2>
            <p style={{ margin: 0, color: '#667085', fontSize: '16px', lineHeight: '1.7' }}>{copy.selectBody}</p>
          </div>
          <div id="schedule" className="axy-schedule-card" style={{ border: '1px solid #E4E8EF', borderRadius: '20px', padding: 'clamp(12px,3vw,28px)', background: '#fff', boxShadow: '0 22px 60px rgba(31,43,77,.08)', overflow: 'hidden', scrollMarginTop: '76px' }}>
            <a className="axy-schedule-mobile-link" href={MEETING_LINK} target="_blank" rel="noreferrer">
              {copy.mobileSchedule}
            </a>
            <HubSpotMeetingsEmbed />
            <noscript>
              <p style={{ margin: '20px', color: '#667085', lineHeight: '1.6' }}>
                {copy.calendarRequired}{' '}
                <a href={MEETING_LINK} style={{ color: '#1F7A87', fontWeight: '700' }}>{copy.openSchedule}</a>.
              </p>
            </noscript>
          </div>
          <p style={{ margin: '20px auto 0', textAlign: 'center', color: '#667085', fontSize: '13px', lineHeight: '1.6' }}>
            {copy.calendarMissing}{' '}
            <a href={MEETING_LINK} target="_blank" rel="noreferrer" style={{ color: '#1F7A87', fontWeight: '700' }}>{copy.scheduleWindow}</a>.
          </p>
        </div>
      </section>
    </main>
  );
}
