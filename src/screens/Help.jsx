import React from 'react';
import HubSpotSupportFormEmbed from '../components/HubSpotSupportFormEmbed.jsx';

const SUPPORT_TOPICS = [
  {
    title: 'Account & Access',
    description: 'Sign-in, account access, user permissions and workspace setup.',
  },
  {
    title: 'Products & Catalog',
    description: 'Products, categories, properties, catalogues and product information.',
  },
  {
    title: 'Sales & Customers',
    description: 'Sales visits, customer records, follow-up and connected selling workflows.',
  },
  {
    title: 'Orders, Transfers & Warranty',
    description: 'Orders, stock transfers, service requests and digital warranty workflows.',
  },
  {
    title: 'Billing & Subscription',
    description: 'Plans, billing questions, subscriptions and account administration.',
  },
  {
    title: 'Integrations & Other',
    description: 'Connected systems, APIs, technical questions or anything not listed above.',
  },
];

const labelStyle = {
  fontFamily: "'Roboto Mono',monospace",
  fontSize: '10.5px',
  fontWeight: '700',
  letterSpacing: '.13em',
  color: '#2C8C99',
  textTransform: 'uppercase',
};

export default function Help() {
  return (
    <main data-screen-label="Help Centre">
      <section style={{ background: 'linear-gradient(135deg,#F8FAFC 0%,#EFF7F8 58%,#FCF3EE 150%)', padding: '88px 24px 70px' }}>
        <div style={{ maxWidth: '790px', margin: '0 auto', textAlign: 'center' }}>
          <div style={labelStyle}>Help Centre</div>
          <h1 style={{ margin: '16px 0 0', color: '#1F2B4D', fontSize: 'clamp(38px,6vw,58px)', fontWeight: '850', letterSpacing: '-.04em', lineHeight: '1.05' }}>How can we help?</h1>
          <p style={{ maxWidth: '650px', margin: '18px auto 0', color: '#5B657C', fontSize: '16px', lineHeight: '1.7' }}>
            Find the right place for your question or send a request directly to the AXY Support Team.
          </p>
        </div>
      </section>

      <section aria-labelledby="support-topics-heading" style={{ background: '#fff', padding: '68px 24px 76px' }}>
        <div style={{ maxWidth: '1080px', margin: '0 auto' }}>
          <div style={{ maxWidth: '680px', margin: '0 auto', textAlign: 'center' }}>
            <div style={labelStyle}>Product support</div>
            <h2 id="support-topics-heading" style={{ margin: '12px 0 0', color: '#1F2B4D', fontSize: 'clamp(28px,4vw,38px)', fontWeight: '850', letterSpacing: '-.025em', lineHeight: '1.14' }}>Choose a support topic.</h2>
            <p style={{ margin: '13px auto 0', color: '#667085', fontSize: '14.5px', lineHeight: '1.65' }}>Every topic below takes you to the same secure Product Support form. Select the most accurate category in the form so our team can route your request correctly.</p>
          </div>

          <div className="help-topic-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,minmax(0,1fr))', gap: '14px', marginTop: '32px' }}>
            {SUPPORT_TOPICS.map((topic) => (
              <a
                key={topic.title}
                className="help-topic-card"
                href="#product-support"
                aria-label={`${topic.title}: go to the Product Support form`}
                style={{ display: 'flex', flexDirection: 'column', gap: '9px', minHeight: '150px', padding: '22px', border: '1px solid #E4E8EF', borderRadius: '15px', background: '#F9FAFB', color: '#1F2B4D', transition: 'border-color .18s, box-shadow .18s, transform .18s' }}
              >
                <span style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '12px', fontSize: '15px', fontWeight: '800', lineHeight: '1.35' }}>
                  {topic.title}
                  <span aria-hidden="true" style={{ color: '#2C8C99', fontSize: '18px', lineHeight: '1' }}>&darr;</span>
                </span>
                <span style={{ color: '#667085', fontSize: '13px', fontWeight: '500', lineHeight: '1.6' }}>{topic.description}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="product-support" aria-labelledby="product-support-heading" style={{ scrollMarginTop: '78px', background: '#F7F9FC', padding: '76px 24px 88px' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto' }}>
          <div style={{ maxWidth: '700px' }}>
            <div style={labelStyle}>Product Support request</div>
            <h2 id="product-support-heading" style={{ margin: '12px 0 0', color: '#1F2B4D', fontSize: 'clamp(30px,4vw,42px)', fontWeight: '850', letterSpacing: '-.03em', lineHeight: '1.12' }}>Contact AXY Support</h2>
            <p style={{ margin: '14px 0 0', color: '#5B657C', fontSize: '15px', lineHeight: '1.7' }}>Tell us what you need help with and provide enough information for our team to identify your account and investigate the issue.</p>
          </div>

          <aside aria-label="Security reminder" style={{ display: 'flex', gap: '12px', marginTop: '26px', padding: '16px 18px', border: '1px solid #E7D6C8', borderRadius: '12px', background: '#FCF3EE', color: '#5D493E', fontSize: '13px', lineHeight: '1.6' }}>
            <span aria-hidden="true" style={{ flex: 'none', fontWeight: '800' }}>!</span>
            <span><strong>Please protect sensitive information.</strong> Do not include passwords, access codes, payment-card details, or other sensitive credentials in your request.</span>
          </aside>

          <div className="axy-embed-card" style={{ marginTop: '24px', padding: 'clamp(22px,5vw,46px)', border: '1px solid #E4E8EF', borderRadius: '20px', background: '#fff', boxShadow: '0 22px 60px rgba(31,43,77,.08)' }}>
            <HubSpotSupportFormEmbed />
            <noscript>
              <p style={{ margin: '20px 0 0', color: '#667085', lineHeight: '1.6' }}>
                JavaScript is required to display the Product Support form. Please email{' '}
                <a href="mailto:support@axy.net" style={{ color: '#1F7A87', fontWeight: '700' }}>support@axy.net</a> instead.
              </p>
            </noscript>
          </div>

          <div style={{ marginTop: '24px', padding: '22px 24px', border: '1px solid #D7E9EB', borderRadius: '14px', background: '#EFF7F8' }}>
            <h3 style={{ margin: 0, color: '#1F2B4D', fontSize: '17px', fontWeight: '800' }}>Prefer email?</h3>
            <p style={{ margin: '9px 0 0', color: '#4D5A72', fontSize: '14px', lineHeight: '1.65' }}>
              You can also contact the AXY Support Team at{' '}
              <a href="mailto:support@axy.net" style={{ color: '#1F7A87', fontWeight: '750' }}>support@axy.net</a>.
            </p>
            <p style={{ margin: '9px 0 0', color: '#4D5A72', fontSize: '14px', lineHeight: '1.65' }}>If you already have an existing support conversation, reply to that email thread instead of opening a duplicate request.</p>
          </div>

          <p style={{ margin: '22px auto 0', color: '#667085', fontSize: '13px', lineHeight: '1.6', textAlign: 'center' }}>
            Looking for pricing, partnership or general information? Visit{' '}
            {/* eslint-disable-next-line @next/next/no-html-link-for-pages -- This static export uses full-document navigation between public routes. */}
            <a href="/contact" style={{ color: '#1F7A87', fontWeight: '700' }}>Contact AXY</a>.
          </p>
        </div>
      </section>
    </main>
  );
}
