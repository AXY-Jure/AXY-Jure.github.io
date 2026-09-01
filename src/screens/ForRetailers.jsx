import React from 'react';
import Image from 'next/image';
import Link from '../i18n/LocalizedLink.jsx';
import { useLocalizedCopy } from '../i18n/I18nProvider.jsx';
import forRetailersCatalog from '../i18n/locales/pages/forRetailers.js';

function Eyebrow({ number, children, warm = false }) {
  return (
    <div className={`fr-eyebrow${warm ? ' fr-eyebrow--warm' : ''}`}>
      {number ? <span>{number}</span> : null}
      {children}
    </div>
  );
}

function DetailList({ items, warm = false }) {
  return (
    <ul className={`fr-detail-list${warm ? ' fr-detail-list--warm' : ''}`}>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

function Callout({ children, warm = false }) {
  return <div className={`fr-callout${warm ? ' fr-callout--warm' : ''}`}>{children}</div>;
}

function TextLink({ href, children, className = '', ...props }) {
  return <Link className={`fr-text-link ${className}`.trim()} href={href} {...props}>{children}<span aria-hidden="true">→</span></Link>;
}

export default function ForRetailers() {
  const { forRetailers: copy } = useLocalizedCopy(forRetailersCatalog);

  return (
    <main className="retailers-page" data-screen-label="For Retailers">
      <section className="fr-hero">
        <div className="fr-shell fr-hero__grid">
          <div className="fr-hero__copy">
            <h1>{copy.hero.title[0]}<br />{copy.hero.title[1]}</h1>
            <p className="fr-hero__lead">{copy.hero.lead}</p>
            <p>{copy.hero.body}</p>
            <div className="fr-actions">
              <Link className="fr-button fr-button--primary" href="/book-a-walkthrough#schedule">{copy.hero.guidedSetup}</Link>
              <Link className="fr-button fr-button--secondary" href="/request-access">{copy.hero.createAccount}</Link>
            </div>
            <TextLink href="/sales-app">{copy.hero.salesApp}</TextLink>
          </div>
          <div className="fr-hero__visual">
            <Image src="/images/for-retailers/pre-sale-activity.webp" alt={copy.hero.imageAlt} width="1200" height="582" loading="eager" fetchPriority="high" decoding="async" />
          </div>
        </div>
      </section>

      <section className="fr-section fr-section--soft">
        <div className="fr-shell fr-grid fr-grid--problem">
          <div>
            <h2>{copy.problem.title}</h2>
            <p className="fr-accent-copy">{copy.problem.accent}</p>
            <p>{copy.problem.body}</p>
            <ul className="fr-problem-list">
              {copy.problem.items.map((item) => <li key={item}>{item}</li>)}
            </ul>
            <Callout>{copy.problem.callout}</Callout>
          </div>
          <div className="fr-problem-visual">
            <Image src="/images/for-retailers/pre-sale-activity.webp" alt={copy.problem.imageAlt} width="1200" height="582" loading="eager" decoding="async" />
          </div>
        </div>
      </section>

      <section className="fr-section">
        <div className="fr-shell fr-grid fr-feature-grid">
          <div className="fr-phone-stage">
            <Image className="fr-phone-image" src="/images/for-retailers/opportunity-phone.webp" alt={copy.opportunity.imageAlt} width="780" height="1688" loading="lazy" decoding="async" />
          </div>
          <div>
            <Eyebrow number="01">{copy.opportunity.eyebrow}</Eyebrow>
            <h2>{copy.opportunity.title}</h2>
            <p>{copy.opportunity.body}</p>
            <TextLink href="/sales-app">{copy.opportunity.link}</TextLink>
          </div>
        </div>
      </section>

      <section className="fr-section">
        <div className="fr-shell fr-grid fr-feature-grid fr-feature-grid--copy-first">
          <div>
            <Eyebrow number="02">{copy.dailyPlan.eyebrow}</Eyebrow>
            <h2>{copy.dailyPlan.title}</h2>
            <p>{copy.dailyPlan.body}</p>
            <Callout>{copy.dailyPlan.callout}</Callout>
            <TextLink href="/sales-app">{copy.dailyPlan.link}</TextLink>
          </div>
          <div className="fr-phone-stage">
            <Image className="fr-phone-image" src="/images/for-retailers/daily-plan-phone.webp" alt={copy.dailyPlan.imageAlt} width="780" height="1688" loading="lazy" decoding="async" />
          </div>
        </div>
      </section>

      <section className="fr-section">
        <div className="fr-shell fr-grid fr-feature-grid">
          <div className="fr-catalogue-stage">
            <Image className="fr-catalogue-stage__tablet" src="/images/for-retailers/catalogue-tablet.webp" alt={copy.engagement.imageAlt} width="1400" height="1072" loading="lazy" decoding="async" />
          </div>
          <div>
            <Eyebrow number="03">{copy.engagement.eyebrow}</Eyebrow>
            <h2>{copy.engagement.title}</h2>
            <p>{copy.engagement.body}</p>
            <DetailList items={copy.engagement.details} />
            <Callout>{copy.engagement.callout}</Callout>
            <TextLink href="/sales-app">{copy.engagement.link}</TextLink>
          </div>
        </div>
      </section>

      <section className="fr-section fr-stock-section">
        <div className="fr-shell fr-grid fr-feature-grid fr-feature-grid--copy-first">
          <div>
            <Eyebrow number="04">{copy.stock.eyebrow}</Eyebrow>
            <h2>{copy.stock.title}</h2>
            <p>{copy.stock.body}</p>
            <DetailList items={copy.stock.details} />
            <Callout>{copy.stock.callout}</Callout>
            <TextLink href="/use-cases/product-demand-intelligence">{copy.stock.link}</TextLink>
          </div>
          <div className="fr-stock-visual">
            <Image src="/images/for-retailers/stock-demand-monitor.webp" alt={copy.stock.imageAlt} width="1500" height="1097" loading="lazy" decoding="async" />
          </div>
        </div>
      </section>

      <section className="fr-section">
        <div className="fr-shell fr-grid fr-feature-grid">
          <div className="fr-metrics-visual">
            <Image src="/images/for-retailers/realtime-dashboard.webp" alt={copy.metrics.imageAlt} width="1400" height="1388" loading="lazy" decoding="async" />
          </div>
          <div>
            <Eyebrow number="05">{copy.metrics.eyebrow}</Eyebrow>
            <h2>{copy.metrics.title}</h2>
            <p>{copy.metrics.body}</p>
            <DetailList items={copy.metrics.details} />
            <Callout>{copy.metrics.callout}</Callout>
            <TextLink href="/back-office">{copy.metrics.link}</TextLink>
          </div>
        </div>
      </section>

      <section className="fr-value-band">
        <div className="fr-shell">
          <Eyebrow>{copy.value.eyebrow}</Eyebrow>
          <h2>{copy.value.title}</h2>
          <p>{copy.value.body}</p>
          <ol className="fr-value-flow">
            {copy.value.steps.map(([title, text], index) => (
              <li key={title}><span>{index + 1}</span><strong>{title}</strong><small>{text}</small></li>
            ))}
          </ol>
        </div>
      </section>

      <section className="fr-section fr-warm">
        <div className="fr-shell fr-grid fr-feature-grid fr-feature-grid--copy-first">
          <div>
            <h2>{copy.customer.title}</h2>
            <p>{copy.customer.body}</p>
            <DetailList warm items={copy.customer.details} />
            <Callout warm>{copy.customer.callout}</Callout>
            <TextLink className="fr-text-link--warm" href="/customer-experience">{copy.customer.link}</TextLink>
          </div>
          <div className="fr-customer-phones">
            <Image className="fr-customer-phones__home" src="/images/for-retailers/customer-home-phone.webp" alt={copy.customer.homeAlt} width="720" height="1479" loading="lazy" decoding="async" />
            <Image className="fr-customer-phones__service" src="/images/for-retailers/customer-service-phone.webp" alt={copy.customer.serviceAlt} width="720" height="1479" loading="lazy" decoding="async" />
          </div>
        </div>
      </section>

      <section className="fr-section">
        <div className="fr-shell fr-grid fr-feature-grid">
          <div className="fr-tablet-visual">
            <Image src="/images/for-retailers/catalogue-tablet.webp" alt={copy.suppliers.imageAlt} width="1400" height="1072" loading="lazy" decoding="async" />
          </div>
          <div>
            <h2>{copy.suppliers.title}</h2>
            <p>{copy.suppliers.body}</p>
            <ul className="fr-check-list">
              {copy.suppliers.capabilities.map((item) => <li key={item}>{item}</li>)}
            </ul>
            <Callout><strong>{copy.suppliers.calloutStrong}</strong> {copy.suppliers.callout}</Callout>
            <TextLink href="/back-office">{copy.suppliers.link}</TextLink>
          </div>
        </div>
      </section>

      <section className="fr-section fr-integration">
        <div className="fr-shell">
          <div className="fr-centered-heading">
            <h2>{copy.integration.title}</h2>
            <p>{copy.integration.body}</p>
          </div>
          <Image className="fr-integration__diagram" src="/images/for-retailers/systems-layer.png" alt={copy.integration.imageAlt} width="3240" height="1036" loading="lazy" decoding="async" />
          <div className="fr-integration__safeguards">
            {copy.integration.safeguards.map((item) => <span key={item}>{item}</span>)}
          </div>
          <TextLink href="/back-office">{copy.integration.link}</TextLink>
        </div>
      </section>

      <section className="fr-section fr-section--soft">
        <div className="fr-shell">
          <Eyebrow>{copy.scale.eyebrow}</Eyebrow>
          <h2>{copy.scale.title}</h2>
          <div className="fr-scale-grid">
            {copy.scale.options.map(([title, text], index) => (
              <article key={title}><span>{String(index + 1).padStart(2, '0')}</span><h3>{title}</h3><p>{text}</p></article>
            ))}
          </div>
        </div>
      </section>

      <section className="fr-section">
        <div className="fr-shell fr-retail-reality">
          <div>
            <Eyebrow>{copy.reality.eyebrow}</Eyebrow>
            <h2>{copy.reality.title}</h2>
          </div>
          <div>
            <p>{copy.reality.body}</p>
            <Callout>{copy.reality.callout}</Callout>
            <TextLink href="/sales-app">{copy.reality.link}</TextLink>
          </div>
        </div>
      </section>

      <section className="fr-section fr-section--soft fr-outcomes">
        <div className="fr-shell">
          <h2>{copy.outcomes.title}</h2>
          <div className="fr-outcome-grid">
            {copy.outcomes.items.map((outcome, index) => (
              <article key={outcome}><span>{String(index + 1).padStart(2, '0')}</span><strong>{outcome}</strong></article>
            ))}
          </div>
        </div>
      </section>

      <section className="fr-section fr-faq">
        <div className="fr-shell fr-faq__inner">
          <Eyebrow>{copy.faq.eyebrow}</Eyebrow>
          <h2>{copy.faq.title}</h2>
          <div className="fr-faq__list">
            {copy.faq.items.map(([question, answer]) => (
              <article key={question}><h3>{question}</h3><p>{answer}</p></article>
            ))}
            <article>
              <h3>{copy.faq.pricingQuestion}</h3>
              <p>{copy.faq.pricingBody}{' '}
                <Link href="/pricing" data-analytics-event="pricing_cta_click" data-analytics-cta-name="view_pricing_context">{copy.faq.pricingLink} →</Link>
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="fr-final-cta">
        <div className="fr-shell">
          <h2>{copy.final.title}</h2>
          <p>{copy.final.body}</p>
          <div className="fr-actions fr-actions--center">
            <Link className="fr-button fr-button--light" href="/book-a-walkthrough#schedule">{copy.final.guidedSetup}</Link>
            <Link className="fr-button fr-button--outline-light" href="/request-access">{copy.final.createAccount}</Link>
          </div>
          <Link className="fr-final-cta__pricing" href="/pricing" data-analytics-event="pricing_cta_click" data-analytics-cta-name="view_pricing_final">{copy.final.pricing} →</Link>
        </div>
      </section>
    </main>
  );
}
