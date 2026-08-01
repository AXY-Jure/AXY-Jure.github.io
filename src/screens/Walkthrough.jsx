import React from 'react';

export default function Walkthrough() {
  const sessionItems = [
    ['01', 'Your current workflow', 'Where information is lost, repeated or delayed today.'],
    ['02', 'Relevant AXY surfaces', 'The Sales App, Back Office and customer experience in context.'],
    ['03', 'A realistic first step', 'Which workflow and team should be activated first.'],
    ['04', 'Questions and next steps', 'Data, integrations, permissions, setup and commercial fit.'],
  ];

  return (
    <main>
      <section style={{ background: 'linear-gradient(135deg,#1F2B4D 0%,#32415C 62%,#2C8C99 150%)', padding: '92px 24px 82px', color: '#fff' }}>
        <div style={{ maxWidth: '1040px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: '10px', letterSpacing: '.12em', color: '#9FEBD3', fontWeight: '700' }}>GUIDED AXY WALKTHROUGH</div>
          <h1 style={{ margin: '16px auto 18px', maxWidth: '760px', fontSize: 'clamp(38px,6vw,66px)', lineHeight: '1.04', letterSpacing: '-.045em' }}>See how AXY fits your retail ecosystem.</h1>
          <p style={{ maxWidth: '690px', margin: '0 auto', fontSize: '18px', lineHeight: '1.7', color: '#DCE4F1' }}>We’ll focus the session on your stores, brands, workflows and data—so you can see the most relevant AXY experience without a generic product tour.</p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', flexWrap: 'wrap', marginTop: '30px' }}>
            <a className="hv17" href="mailto:info@axy.net?subject=AXY%20guided%20walkthrough" style={{ display: 'inline-flex', padding: '14px 24px', borderRadius: '10px', background: '#fff', color: '#1F2B4D', fontSize: '14px', fontWeight: '800' }}>Request a walkthrough</a>
            <a href="/product" style={{ display: 'inline-flex', padding: '14px 24px', borderRadius: '10px', border: '1.5px solid rgba(255,255,255,.45)', color: '#fff', fontSize: '14px', fontWeight: '700' }}>Explore the platform first</a>
          </div>
        </div>
      </section>
      <section style={{ padding: '76px 24px', background: '#fff' }}>
        <div style={{ maxWidth: '1040px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 36px' }}>
            <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: '9px', letterSpacing: '.1em', color: '#2C8C99', fontWeight: '700' }}>A PRACTICAL WORKING SESSION</div>
            <h2 style={{ margin: '12px 0', fontSize: 'clamp(30px,4vw,44px)', lineHeight: '1.12', letterSpacing: '-.035em', color: '#1F2B4D' }}>Built around the decisions you need to make.</h2>
            <p style={{ margin: 0, color: '#667085', fontSize: '16px', lineHeight: '1.7' }}>Choose the perspective that is closest to your business. We’ll shape the walkthrough around it.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: '20px' }}>
            <article style={{ border: '1px solid #E4E8EF', borderRadius: '16px', padding: '28px', background: '#FCF3EE' }}>
              <h3 style={{ margin: '0 0 10px', color: '#1F2B4D', fontSize: '21px' }}>For retailers</h3>
              <p style={{ margin: 0, color: '#5B657C', lineHeight: '1.7', fontSize: '14px' }}>Follow one customer visit from product presentation and captured interest through follow-up, offer, sale and continued customer experience.</p>
            </article>
            <article style={{ border: '1px solid #D7E9EB', borderRadius: '16px', padding: '28px', background: '#EFF7F8' }}>
              <h3 style={{ margin: '0 0 10px', color: '#1F2B4D', fontSize: '21px' }}>For brands</h3>
              <p style={{ margin: 0, color: '#5B657C', lineHeight: '1.7', fontSize: '14px' }}>See how shared catalogues, orders, announcements, warranty workflows and permissioned market signals connect you with retail partners.</p>
            </article>
          </div>
          <div style={{ marginTop: '22px', border: '1px solid #E4E8EF', borderRadius: '16px', padding: '28px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(190px,1fr))', gap: '22px' }}>
            {sessionItems.map(([n, title, copy]) => <div key={n}><div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: '10px', fontWeight: '700', color: '#2C8C99' }}>{n}</div><h3 style={{ margin: '9px 0 7px', fontSize: '15px', color: '#1F2B4D' }}>{title}</h3><p style={{ margin: 0, fontSize: '13px', lineHeight: '1.6', color: '#667085' }}>{copy}</p></div>)}
          </div>
        </div>
      </section>
    </main>
  );
}
