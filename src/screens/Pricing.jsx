import React from 'react';
import Image from 'next/image';
import Link from '../i18n/LocalizedLink.jsx';
import { useLocalizedCopy } from '../i18n/I18nProvider.jsx';
import pricingCatalog from '../i18n/locales/pages/pricing.js';
import { AXY_APP_ROUTES, BILLING_READY, buildSubscriptionUrl } from '../config/billing.js';
import HubSpotBetaAccessFormEmbed from '../components/HubSpotBetaAccessFormEmbed.jsx';
import { buildPricingInquirySummary } from '../lib/pricingInquiry.js';

const C = { navy: '#1F2B4D', slate: '#32415C', teal: '#2C8C99', text: '#3A4358', muted: '#667085', border: '#E4E8EF', pale: '#F7F9FC' };
const label = { fontFamily: "'Roboto Mono',monospace", fontSize: '10.5px', letterSpacing: '.14em', color: C.teal, textTransform: 'uppercase', fontWeight: 700 };
const primary = { display: 'inline-flex', alignItems: 'center', justifyContent: 'center', minHeight: '46px', padding: '12px 20px', borderRadius: '10px', background: C.slate, color: '#fff', border: `1.5px solid ${C.slate}`, fontSize: '14px', fontWeight: 750 };
const outline = { ...primary, background: '#fff', color: C.slate };
const row = { display: 'flex', justifyContent: 'space-between', gap: '12px', color: '#C9D2E4', fontSize: '13px' };
const GENERATED_IMAGES = [
  ['braidedBracelet', '/images/pricing/ai-generated/braided-bracelet.jpg'],
  ['earrings', '/images/pricing/ai-generated/earrings.jpg'],
  ['engagementRing', '/images/pricing/ai-generated/engagement-ring.jpg'],
  ['pearlNecklace', '/images/pricing/ai-generated/pearl-necklace.jpg'],
  ['tennisBracelet', '/images/pricing/ai-generated/tennis-bracelet.jpg'],
  ['weddingRing', '/images/pricing/ai-generated/wedding-ring.jpg'],
  ['yellowGoldNecklace', '/images/pricing/ai-generated/yellow-gold-necklace.jpg'],
];

function format(template, values) {
  return template.replace(/\{([A-Za-z0-9_]+)\}/g, (match, key) => values[key] ?? match);
}

function Check({ children }) {
  return <div style={{ display: 'flex', alignItems: 'flex-start', gap: '9px', color: C.text, fontSize: '13.5px', lineHeight: 1.5 }}><span aria-hidden="true" style={{ color: C.teal, fontWeight: 900 }}>✓</span><span>{children}</span></div>;
}

function Quantity({ value, onDecrease, onIncrease, name, controls }) {
  const button = { width: '38px', height: '38px', border: `1px solid ${C.border}`, borderRadius: '9px', background: '#fff', color: C.navy, cursor: 'pointer', fontSize: '19px', fontWeight: 700 };
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
      <button type="button" onClick={onDecrease} aria-label={format(controls.decrease, { name })} style={button}>−</button>
      <span style={{ minWidth: '32px', textAlign: 'center', color: C.navy, fontSize: '17px', fontWeight: 800 }}>{value}</span>
      <button type="button" onClick={onIncrease} aria-label={format(controls.increase, { name })} style={button}>+</button>
    </div>
  );
}

function Module({ name, price, description, enabled, onToggle, controls }) {
  return (
    <div className="pr-option" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '18px', padding: '18px', border: `1px solid ${C.border}`, borderRadius: '13px', background: '#fff' }}>
      <div>
        <div style={{ color: C.navy, fontSize: '15px', fontWeight: 800 }}>{name} <span style={{ color: C.teal }}>€{price}{controls.perMonth}</span></div>
        <div style={{ marginTop: '4px', color: C.muted, fontSize: '12.5px', lineHeight: 1.5 }}>{description}</div>
      </div>
      <button type="button" onClick={onToggle} aria-pressed={enabled} style={{ flex: 'none', minWidth: '84px', padding: '9px 14px', borderRadius: '9px', border: `1.5px solid ${enabled ? C.teal : '#D8DEE8'}`, background: enabled ? C.teal : '#fff', color: enabled ? '#fff' : C.slate, cursor: 'pointer', fontSize: '12.5px', fontWeight: 750 }}>{enabled ? controls.included : controls.add}</button>
    </div>
  );
}

function FutureButton({ href, children, light = false }) {
  const disabled = !BILLING_READY;
  return <a href={disabled ? undefined : href} aria-disabled={disabled ? 'true' : undefined} data-billing-ready={BILLING_READY ? 'true' : 'false'} onClick={disabled ? (event) => event.preventDefault() : undefined} style={{ ...(light ? outline : primary), width: '100%', cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? .58 : 1 }}>{children}</a>;
}

export default function Pricing({ pUsers, pUsersDec, pUsersInc, pBU, pBUDec, pBUInc, pLocations, pLocationsDec, pLocationsInc, pAddUsers, pAddUserCost, pAddBU, pAddBUCost, pAddLocations, pAddLocationCost, pAnnOn, pAnnToggle, pAnnCost, pMsgOn, pMsgToggle, pMsgCost, pTotalLabel, pScrollBuild, pFormOpen, pFormShown, pInquirySnapshot }) {
  const copy = useLocalizedCopy(pricingCatalog);
  const subscriptionUrl = buildSubscriptionUrl({ users: pUsers, businessUnits: pBU, locations: pLocations, announcements: pAnnOn, messaging: pMsgOn });
  const packs = [{ credits: 20, price: 20, unit: '€1.00' }, { credits: 50, price: 40, unit: '€0.80', popular: true }, { credits: 100, price: 70, unit: '€0.70' }];
  const localizedTotal = pTotalLabel.replace(/\/month$/, copy.calculator.monthSuffix);
  const inquiryMessage = pInquirySnapshot ? buildPricingInquirySummary(pInquirySnapshot, { ...copy.calculator.inquiry, monthSuffix: copy.calculator.monthSuffix }) : '';
  const generatedImageCopy = Object.fromEntries(copy.credits.gallery.items.map((item) => [item.key, item]));
  const selectedInquiryModules = pInquirySnapshot ? [
    pInquirySnapshot.modules?.announcements ? copy.calculator.announcements : null,
    pInquirySnapshot.modules?.messaging ? copy.calculator.messaging : null,
  ].filter(Boolean) : [];

  return <main data-screen-label="Pricing">
    <section style={{ position: 'relative', overflow: 'hidden', background: 'linear-gradient(135deg,#1F2B4D,#32415C 60%,#2C6570)', padding: '72px 24px 66px' }}>
      <div style={{ position: 'absolute', top: '-120px', right: '-70px', width: '440px', height: '340px', background: 'radial-gradient(circle,rgba(51,214,164,.15),transparent 70%)' }} />
      <div style={{ position: 'relative', maxWidth: '790px', margin: '0 auto', textAlign: 'center' }}>
        <div style={{ ...label, color: '#7FD4DE' }}>{copy.hero.eyebrow}</div>
        <h1 style={{ margin: '14px 0 0', color: '#fff', fontSize: 'clamp(36px,5vw,52px)', lineHeight: 1.08, letterSpacing: '-.035em', fontWeight: 850 }}>{copy.hero.title}</h1>
        <p style={{ maxWidth: '650px', margin: '18px auto 0', color: '#C9D2E4', fontSize: '16px', lineHeight: 1.65 }}>{copy.hero.body}</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '12px', marginTop: '28px' }}>
          <Link href="/request-access" data-analytics-cta-name="request_beta_hero" style={{ ...primary, background: '#fff', color: C.navy, borderColor: '#fff' }}>{copy.hero.start}</Link>
          <button type="button" onClick={pScrollBuild} data-analytics-event="pricing_cta_click" data-analytics-cta-name="calculate_plan" data-analytics-destination="/pricing#axy-pricing-builder" style={{ ...outline, background: 'transparent', color: '#fff', borderColor: 'rgba(255,255,255,.5)', cursor: 'pointer' }}>{copy.hero.calculate}</button>
          <a href={AXY_APP_ROUTES.authentication} style={{ display: 'inline-flex', alignItems: 'center', padding: '12px', color: '#fff', fontSize: '14px', fontWeight: 700, textDecoration: 'underline', textUnderlineOffset: '4px' }}>{copy.hero.login}</a>
        </div>
      </div>
    </section>

    <section style={{ padding: '68px 24px', background: '#fff' }}>
      <div style={{ maxWidth: '1080px', margin: '0 auto' }}>
        <div className="pr-cards" style={{ display: 'grid', gridTemplateColumns: 'minmax(0,.9fr) minmax(0,1.1fr)', gap: '22px', alignItems: 'stretch' }}>
          <article style={{ display: 'flex', flexDirection: 'column', padding: '28px', border: `1.5px solid ${C.teal}`, borderRadius: '18px', background: '#EFF7F8' }}>
            <div style={label}>{copy.plans.freeName}</div><div style={{ marginTop: '10px', color: C.navy, fontSize: '34px', fontWeight: 850 }}>€0</div>
            <p style={{ margin: '8px 0 20px', color: C.muted, fontSize: '13.5px', lineHeight: 1.6 }}>{copy.plans.freeBody}</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', flex: 1 }}>{copy.plans.freeItems.map((item) => <Check key={item}>{item}</Check>)}</div>
            <Link href="/request-access" data-analytics-cta-name="request_beta_plan" style={{ ...primary, marginTop: '24px' }}>{copy.plans.start}</Link>
          </article>
          <article style={{ display: 'flex', flexDirection: 'column', padding: '28px', border: `1px solid ${C.border}`, borderRadius: '18px', background: C.pale }}>
            <div style={label}>{copy.plans.buildEyebrow}</div><h2 style={{ margin: '11px 0 0', color: C.navy, fontSize: '27px', lineHeight: 1.2, fontWeight: 850 }}>{copy.plans.buildTitle}</h2>
            <p style={{ margin: '10px 0 20px', color: C.muted, fontSize: '13.5px', lineHeight: 1.6 }}>{copy.plans.buildBody}</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', flex: 1 }}>{copy.plans.buildItems.map((item) => <Check key={item}>{item}</Check>)}</div>
            <button type="button" onClick={pScrollBuild} data-analytics-event="pricing_cta_click" data-analytics-cta-name="open_calculator" data-analytics-destination="/pricing#axy-pricing-builder" style={{ ...outline, marginTop: '24px', cursor: 'pointer' }}>{copy.plans.openCalculator}</button>
          </article>
        </div>
      </div>
    </section>

    <section id="axy-pricing-builder" style={{ padding: '72px 24px', background: C.pale, scrollMarginTop: '78px' }}>
      <div style={{ maxWidth: '1080px', margin: '0 auto' }}>
        <div style={{ maxWidth: '690px' }}><div style={label}>{copy.calculator.eyebrow}</div><h2 style={{ margin: '12px 0 0', color: C.navy, fontSize: 'clamp(28px,4vw,38px)', lineHeight: 1.14, fontWeight: 850 }}>{copy.calculator.title}</h2><p style={{ margin: '13px 0 0', color: C.muted, fontSize: '14.5px', lineHeight: 1.65 }}>{copy.calculator.body}</p></div>
        <div className="pr-builder" style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1.22fr) minmax(320px,.78fr)', gap: '24px', marginTop: '30px', alignItems: 'start' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div className="pr-option" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '18px', padding: '18px', border: `1px solid ${C.border}`, borderRadius: '13px', background: '#fff' }}><div><div style={{ color: C.navy, fontSize: '15px', fontWeight: 800 }}>{copy.calculator.users}</div><div style={{ marginTop: '4px', color: C.muted, fontSize: '12.5px' }}>{copy.calculator.usersDescription}</div></div><Quantity value={pUsers} onDecrease={pUsersDec} onIncrease={pUsersInc} name={copy.calculator.usersControl} controls={copy.controls} /></div>
            <div className="pr-option" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '18px', padding: '18px', border: `1px solid ${C.border}`, borderRadius: '13px', background: '#fff' }}><div><div style={{ color: C.navy, fontSize: '15px', fontWeight: 800 }}>{copy.calculator.units}</div><div style={{ marginTop: '4px', color: C.muted, fontSize: '12.5px' }}>{copy.calculator.unitsDescription}</div></div><Quantity value={pBU} onDecrease={pBUDec} onIncrease={pBUInc} name={copy.calculator.unitsControl} controls={copy.controls} /></div>
            <div className="pr-option" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '18px', padding: '18px', border: `1px solid ${C.border}`, borderRadius: '13px', background: '#fff' }}><div><div style={{ color: C.navy, fontSize: '15px', fontWeight: 800 }}>{copy.calculator.locations}</div><div style={{ marginTop: '4px', color: C.muted, fontSize: '12.5px', lineHeight: 1.5 }}>{copy.calculator.locationsDescription}</div></div><Quantity value={pLocations} onDecrease={pLocationsDec} onIncrease={pLocationsInc} name={copy.calculator.locationsControl} controls={copy.controls} /></div>
            <Module name={copy.calculator.announcements} price="20" description={copy.calculator.announcementsDescription} enabled={pAnnOn} onToggle={pAnnToggle} controls={copy.controls} />
            <Module name={copy.calculator.messaging} price="19" description={copy.calculator.messagingDescription} enabled={pMsgOn} onToggle={pMsgToggle} controls={copy.controls} />
          </div>
          <aside style={{ position: 'sticky', top: '84px', padding: '24px', borderRadius: '17px', background: 'linear-gradient(145deg,#1F2B4D,#32415C)', boxShadow: '0 18px 46px rgba(31,43,77,.2)' }}>
            <div style={{ ...label, color: '#7FD4DE' }}>{copy.calculator.summary}</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '18px' }}>
              <div style={row}><span>{copy.calculator.twoUsers}</span><strong style={{ color: '#fff' }}>{copy.calculator.included}</strong></div><div style={row}><span>{copy.calculator.firstUnit}</span><strong style={{ color: '#fff' }}>{copy.calculator.included}</strong></div><div style={row}><span>{copy.calculator.firstLocation}</span><strong style={{ color: '#fff' }}>{copy.calculator.included}</strong></div>
              {pAddUsers > 0 && <div style={row}><span>{format(copy.calculator.additionalUsers, { count: pAddUsers })}</span><strong style={{ color: '#fff' }}>€{pAddUserCost}</strong></div>}{pAddBU > 0 && <div style={row}><span>{format(copy.calculator.additionalUnits, { count: pAddBU })}</span><strong style={{ color: '#fff' }}>€{pAddBUCost}</strong></div>}{pAddLocations > 0 && <div style={row}><span>{format(copy.calculator.additionalLocations, { count: pAddLocations })}</span><strong style={{ color: '#fff' }}>€{pAddLocationCost}</strong></div>}{pAnnOn && <div style={row}><span>{copy.calculator.announcements}</span><strong style={{ color: '#fff' }}>€{pAnnCost}</strong></div>}{pMsgOn && <div style={row}><span>{copy.calculator.messaging}</span><strong style={{ color: '#fff' }}>€{pMsgCost}</strong></div>}
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: '12px', marginTop: '20px', paddingTop: '18px', borderTop: '1px solid rgba(255,255,255,.17)' }}><span style={{ color: '#C9D2E4', fontSize: '13px' }}>{copy.calculator.monthlyTotal}</span><strong style={{ color: '#fff', fontSize: '30px', lineHeight: 1 }}>{localizedTotal}</strong></div>
            <p style={{ margin: '13px 0 0', color: '#9FB2D6', fontSize: '10.8px', lineHeight: 1.55 }}>{copy.calculator.vat}</p>
            {BILLING_READY && <div style={{ marginTop: '17px' }}><FutureButton href={subscriptionUrl}>{copy.calculator.checkout}</FutureButton></div>}
            <button type="button" onClick={pFormOpen} data-analytics-event="pricing_cta_click" data-analytics-cta-name="send_plan_inquiry" data-analytics-destination="/pricing#axy-pricing-request" style={{ ...primary, width: '100%', marginTop: '17px', background: '#fff', color: C.navy, borderColor: '#fff', cursor: 'pointer' }}>{copy.calculator.inquiry.cta}</button>
            <div style={{ marginTop: '9px', color: '#9FB2D6', fontSize: '10.5px', lineHeight: 1.5, textAlign: 'center' }}>{copy.calculator.inquiry.note}</div>
          </aside>
        </div>
        {pFormShown && pInquirySnapshot && <div id="axy-pricing-request" style={{ marginTop: '34px', padding: 'clamp(22px,4vw,36px)', border: `1px solid ${C.border}`, borderRadius: '20px', background: '#fff', scrollMarginTop: '82px', boxShadow: '0 18px 44px rgba(31,43,77,.08)' }}>
          <div style={{ maxWidth: '720px' }}><div style={label}>{copy.calculator.inquiry.eyebrow}</div><h3 style={{ margin: '10px 0 0', color: C.navy, fontSize: 'clamp(24px,3vw,32px)', lineHeight: 1.18, fontWeight: 850 }}>{copy.calculator.inquiry.title}</h3><p style={{ margin: '11px 0 0', color: C.muted, fontSize: '14px', lineHeight: 1.65 }}>{copy.calculator.inquiry.body}</p></div>
          <div className="pr-inquiry-grid" style={{ display: 'grid', gridTemplateColumns: 'minmax(260px,.72fr) minmax(0,1.28fr)', gap: '28px', marginTop: '26px', alignItems: 'start' }}>
            <aside style={{ padding: '22px', borderRadius: '15px', background: C.pale, border: `1px solid ${C.border}` }}>
              <div style={{ ...label, color: C.slate }}>{copy.calculator.inquiry.summary}</div>
              <dl style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) auto', gap: '12px 16px', margin: '18px 0 0', color: C.text, fontSize: '13px' }}>
                <dt>{copy.calculator.inquiry.users}</dt><dd style={{ margin: 0, color: C.navy, fontWeight: 800 }}>{pInquirySnapshot.users}</dd>
                <dt>{copy.calculator.inquiry.businessUnits}</dt><dd style={{ margin: 0, color: C.navy, fontWeight: 800 }}>{pInquirySnapshot.businessUnits}</dd>
                <dt>{copy.calculator.inquiry.locations}</dt><dd style={{ margin: 0, color: C.navy, fontWeight: 800 }}>{pInquirySnapshot.locations}</dd>
                <dt>{copy.calculator.inquiry.modules}</dt><dd style={{ margin: 0, maxWidth: '150px', color: C.navy, fontWeight: 800, textAlign: 'right' }}>{selectedInquiryModules.length ? selectedInquiryModules.join(', ') : copy.calculator.inquiry.noModules}</dd>
                <dt style={{ paddingTop: '12px', borderTop: `1px solid ${C.border}`, fontWeight: 750 }}>{copy.calculator.inquiry.estimatedTotal}</dt><dd style={{ margin: 0, paddingTop: '12px', borderTop: `1px solid ${C.border}`, color: C.navy, fontWeight: 850 }}>€{pInquirySnapshot.estimatedMonthlyTotal}{copy.calculator.monthSuffix}</dd>
              </dl>
            </aside>
            <div>
              <h4 style={{ margin: 0, color: C.navy, fontSize: '19px', fontWeight: 850 }}>{copy.calculator.inquiry.formHeading}</h4>
              <p style={{ margin: '7px 0 18px', color: C.muted, fontSize: '13px', lineHeight: 1.55 }}>{copy.calculator.inquiry.formBody}</p>
              <HubSpotBetaAccessFormEmbed formName="pricing_plan_inquiry" leadType="pricing_inquiry" ariaLabel={copy.calculator.inquiry.formHeading} initialFieldValues={{ '0-1/message': inquiryMessage }} minHeight="820px" />
            </div>
          </div>
        </div>}
      </div>
    </section>

    <section style={{ padding: '72px 24px', background: '#fff' }}>
      <div style={{ maxWidth: '1080px', margin: '0 auto' }}><div style={{ maxWidth: '700px' }}><div style={label}>{copy.credits.eyebrow}</div><h2 style={{ margin: '12px 0 0', color: C.navy, fontSize: 'clamp(28px,4vw,38px)', lineHeight: 1.14, fontWeight: 850 }}>{copy.credits.title}</h2><p style={{ margin: '13px 0 0', color: C.muted, fontSize: '14.5px', lineHeight: 1.65 }}>{copy.credits.body}</p></div>
        <div style={{ marginTop: '34px' }}>
          <div style={{ maxWidth: '700px' }}><div style={label}>{copy.credits.gallery.eyebrow}</div><h3 style={{ margin: '9px 0 0', color: C.navy, fontSize: '24px', lineHeight: 1.2, fontWeight: 850 }}>{copy.credits.gallery.title}</h3><p style={{ margin: '9px 0 0', color: C.muted, fontSize: '13.5px', lineHeight: 1.6 }}>{copy.credits.gallery.body}</p></div>
          <div className="pr-ai-gallery" aria-label={copy.credits.gallery.title} style={{ display: 'grid', gridAutoFlow: 'column', gridAutoColumns: 'minmax(185px,1fr)', gap: '14px', marginTop: '20px', paddingBottom: '10px', overflowX: 'auto', overscrollBehaviorInline: 'contain', scrollSnapType: 'inline mandatory' }}>
            {GENERATED_IMAGES.map(([key, src]) => {
              const item = generatedImageCopy[key];
              return <a key={key} href={src} target="_blank" rel="noreferrer" aria-label={`${copy.credits.gallery.view}: ${item.caption}`} style={{ minWidth: 0, overflow: 'hidden', border: `1px solid ${C.border}`, borderRadius: '15px', background: C.pale, color: C.navy, scrollSnapAlign: 'start' }}>
                <div style={{ position: 'relative', aspectRatio: '1', background: '#fff' }}><Image src={src} alt={item.alt} fill sizes="(max-width: 560px) 76vw, (max-width: 900px) 34vw, 205px" style={{ objectFit: 'contain' }} /></div>
                <div style={{ padding: '12px 13px', fontSize: '12.5px', fontWeight: 750 }}>{item.caption}<span aria-hidden="true" style={{ float: 'right', color: C.teal }}>↗</span></div>
              </a>;
            })}
          </div>
        </div>
        <div className="pr-packs" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,minmax(0,1fr))', gap: '16px', marginTop: '28px' }}>{packs.map((pack) => <article key={pack.credits} style={{ position: 'relative', display: 'flex', flexDirection: 'column', padding: '24px', border: `${pack.popular ? 1.5 : 1}px solid ${pack.popular ? C.teal : C.border}`, borderRadius: '16px', background: pack.popular ? '#EFF7F8' : C.pale }}>{pack.popular && <span style={{ position: 'absolute', top: '16px', right: '16px', padding: '4px 9px', borderRadius: '20px', background: C.teal, color: '#fff', fontSize: '9.5px', fontWeight: 800 }}>{copy.credits.popular}</span>}<div style={{ color: C.navy, fontSize: '18px', fontWeight: 850 }}>{format(copy.credits.package, { count: pack.credits })}</div><div style={{ marginTop: '12px', color: C.navy, fontSize: '32px', lineHeight: 1, fontWeight: 850 }}>€{pack.price}</div><div style={{ marginTop: '8px', color: C.muted, fontSize: '12.5px' }}>{format(copy.credits.perCredit, { price: pack.unit })}</div><div style={{ display: 'flex', flexDirection: 'column', gap: '8px', margin: '18px 0 20px', flex: 1 }}>{copy.credits.items.map((item) => <Check key={item}>{item}</Check>)}</div><FutureButton href={AXY_APP_ROUTES.billing} light>{copy.credits.buy}</FutureButton></article>)}</div>
      </div>
    </section>

    <section style={{ padding: '62px 24px', background: C.pale }}><div style={{ maxWidth: '760px', margin: '0 auto' }}><div style={{ textAlign: 'center' }}><div style={label}>{copy.faq.eyebrow}</div><h2 style={{ margin: '11px 0 0', color: C.navy, fontSize: '28px', fontWeight: 850 }}>{copy.faq.title}</h2></div><div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '25px' }}>{copy.faq.items.map(([question, answer]) => <details key={question} style={{ padding: '16px 18px', border: `1px solid ${C.border}`, borderRadius: '12px', background: '#fff' }}><summary style={{ color: C.navy, fontSize: '14px', fontWeight: 750, cursor: 'pointer' }}>{question}</summary><p style={{ margin: '10px 0 0', color: C.muted, fontSize: '13.5px', lineHeight: 1.65 }}>{answer}</p></details>)}</div></div></section>

    <section style={{ padding: '76px 24px', background: 'linear-gradient(135deg,#1F2B4D,#32415C 58%,#2C6570)', textAlign: 'center' }}><div style={{ maxWidth: '760px', margin: '0 auto' }}><h2 style={{ margin: 0, color: '#fff', fontSize: '31px', lineHeight: 1.15, fontWeight: 850 }}>{copy.cta.title}</h2><p style={{ margin: '14px auto 0', maxWidth: '590px', color: '#C9D2E4', fontSize: '14.5px', lineHeight: 1.65 }}>{copy.cta.body}</p><div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '12px', marginTop: '24px' }}><Link href="/request-access" data-analytics-cta-name="request_beta_final" style={{ ...primary, background: '#fff', color: C.navy, borderColor: '#fff' }}>{copy.cta.start}</Link><a href={AXY_APP_ROUTES.authentication} style={{ ...outline, background: 'transparent', color: '#fff', borderColor: 'rgba(255,255,255,.5)' }}>{copy.cta.login}</a></div></div></section>
  </main>;
}
