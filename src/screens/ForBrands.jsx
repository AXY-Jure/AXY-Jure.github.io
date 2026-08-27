import Image from 'next/image';
import LocalizedLink from '../i18n/LocalizedLink.jsx';
import { useLocalizedCopy } from '../i18n/I18nProvider.jsx';
import forBrandsCatalog from '../i18n/locales/pages/forBrands.js';

function Eyebrow({ number, children }) {
  return (
    <p className="fb-eyebrow">
      {number ? <span>{number}</span> : null}
      {children}
    </p>
  );
}

function SignalList({ items }) {
  return (
    <ul className="fb-signal-list">
      {items.map((item) => <li key={item}>{item}</li>)}
    </ul>
  );
}

function Callout({ children, className = '' }) {
  return <div className={`fb-callout ${className}`.trim()}>{children}</div>;
}

function TextLink({ href, children, className = '' }) {
  return (
    <LocalizedLink className={`fb-text-link ${className}`.trim()} href={href}>
      {children}<span aria-hidden="true">→</span>
    </LocalizedLink>
  );
}

export default function ForBrands() {
  const { forBrands: copy } = useLocalizedCopy(forBrandsCatalog);

  return (
    <main className="brands-page" data-screen-label="For Brands" data-analytics-location="for_brands">
      <section className="fb-hero" aria-labelledby="brands-title">
        <div className="fb-shell fb-grid fb-hero__grid">
          <div className="fb-hero__copy">
            <p className="fb-hero__eyebrow">{copy.hero.eyebrow}</p>
            <h1 id="brands-title">{copy.hero.title}</h1>
            <p className="fb-hero__lead">{copy.hero.lead}</p>
            <p>{copy.hero.body}</p>
            <div className="fb-actions">
              <LocalizedLink className="fb-button fb-button--light" href="/book-a-walkthrough#schedule">{copy.hero.assessment}</LocalizedLink>
            </div>
            <TextLink className="fb-text-link--light" href="/integrations">{copy.hero.integrations}</TextLink>
          </div>

          <figure className="fb-hero__visual">
            <Image
              src="/images/home-clean/customer-trying-item.webp"
              alt={copy.hero.imageAlt}
              width={1336}
              height={742}
              priority
              sizes="(max-width: 980px) 92vw, 54vw"
            />
            <figcaption>{copy.hero.caption}</figcaption>
          </figure>
        </div>
      </section>

      <section className="fb-section fb-section--soft" aria-labelledby="brand-value-title">
        <div className="fb-shell">
          <div className="fb-grid fb-insight-grid">
            <div className="fb-feature-copy">
              <Eyebrow number="01">{copy.value.eyebrow}</Eyebrow>
              <h2 id="brand-value-title">{copy.value.title}</h2>
              <p>{copy.value.body}</p>
              <Callout>{copy.value.callout}</Callout>
            </div>
            <div className="fb-clean-visual fb-insight-visual">
              <Image
                src="/images/for-brands/product-intelligence.webp"
                alt={copy.value.imageAlt}
                width={1800}
                height={1268}
                loading="lazy"
                sizes="(max-width: 980px) 92vw, 52vw"
              />
            </div>
          </div>

          <div className="fb-value-grid">
            {copy.value.pillars.map((item, index) => (
              <article key={item.title}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="fb-section" aria-labelledby="retailer-enablement-title">
        <div className="fb-shell fb-grid fb-feature-grid fb-product-grid">
          <div className="fb-product-visual" aria-hidden="true">
            <Image
              src="/images/back-office/product-record.webp"
              alt=""
              width={620}
              height={1156}
              loading="lazy"
              sizes="(max-width: 980px) 70vw, 30vw"
            />
          </div>
          <div className="fb-feature-copy">
            <Eyebrow number="02">{copy.enablement.eyebrow}</Eyebrow>
            <h2 id="retailer-enablement-title">{copy.enablement.title}</h2>
            <p>{copy.enablement.body}</p>
            <ul className="fb-editorial-list">
              {copy.enablement.items.map((item) => <li key={item}>{item}</li>)}
            </ul>
            <Callout>{copy.enablement.callout}</Callout>
            <TextLink href="/back-office">{copy.enablement.link}</TextLink>
          </div>
        </div>
      </section>

      <section className="fb-section fb-section--soft" aria-labelledby="availability-title">
        <div className="fb-shell fb-grid fb-feature-grid">
          <div className="fb-feature-copy">
            <Eyebrow number="03">{copy.availability.eyebrow}</Eyebrow>
            <h2 id="availability-title">{copy.availability.title}</h2>
            <p>{copy.availability.body}</p>
            <SignalList items={copy.availability.items} />
            <Callout>{copy.availability.callout}</Callout>
          </div>
          <div className="fb-orders-mockup" data-device-mockup="desktop">
            <div className="fb-orders-mockup__display">
              <span className="fb-orders-mockup__camera" aria-hidden="true" />
              <div className="fb-orders-mockup__screen">
                <Image
                  src="/images/back-office/orders.webp"
                  alt={copy.availability.imageAlt}
                  width={1400}
                  height={629}
                  loading="lazy"
                  sizes="(max-width: 980px) 92vw, 52vw"
                />
              </div>
              <span className="fb-orders-mockup__mark" aria-hidden="true">AXY</span>
            </div>
            <div className="fb-orders-mockup__stand" aria-hidden="true" />
          </div>
        </div>
      </section>

      <section className="fb-intelligence" aria-labelledby="intelligence-title">
        <div className="fb-shell">
          <Eyebrow number="04">{copy.intelligence.eyebrow}</Eyebrow>
          <h2 id="intelligence-title">{copy.intelligence.title}</h2>
          <p>{copy.intelligence.body}</p>
          <div className="fb-intelligence-grid">
            <div>
              <h3>{copy.intelligence.signalsTitle}</h3>
              <ul className="fb-dark-signals">
                {copy.intelligence.signals.map((item) => <li key={item}>{item}</li>)}
              </ul>
              <p className="fb-intelligence-note">{copy.intelligence.note}</p>
            </div>
            <div className="fb-decision-card">
              <h3>{copy.intelligence.decisionsTitle}</h3>
              <ul>{copy.intelligence.decisions.map((item) => <li key={item}>{item}</li>)}</ul>
            </div>
          </div>
        </div>
      </section>

      <section className="fb-section" aria-labelledby="control-title">
        <div className="fb-shell fb-grid fb-feature-grid">
          <div className="fb-clean-diagram fb-permission-diagram">
            <Image
              src="/images/for-brands/permission-model.webp"
              alt={copy.control.imageAlt}
              width={1600}
              height={895}
              loading="lazy"
              sizes="(max-width: 980px) 92vw, 52vw"
            />
          </div>
          <div className="fb-feature-copy">
            <Eyebrow number="05">{copy.control.eyebrow}</Eyebrow>
            <h2 id="control-title">{copy.control.title}</h2>
            <p>{copy.control.body}</p>
            <div className="fb-control-list">
              {copy.control.points.map((item) => (
                <article key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                </article>
              ))}
            </div>
            <div className="fb-control-integration">
              <h3>{copy.control.systemsTitle}</h3>
              <p>{copy.control.systemsBody}</p>
              <TextLink href="/integrations">{copy.control.integrations}</TextLink>
            </div>
          </div>
        </div>
      </section>

      <section className="fb-section fb-section--soft fb-faq" aria-labelledby="brand-faq-title">
        <div className="fb-shell fb-faq__inner">
          <Eyebrow>{copy.faq.eyebrow}</Eyebrow>
          <h2 id="brand-faq-title">{copy.faq.title}</h2>
          <div className="fb-faq__list">
            {copy.faq.items.map((item) => (
              <details key={item.question}>
                <summary>{item.question}<span aria-hidden="true">+</span></summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="fb-final-cta" aria-labelledby="brand-cta-title">
        <div className="fb-shell">
          <p className="fb-hero__eyebrow">{copy.final.eyebrow}</p>
          <h2 id="brand-cta-title">{copy.final.title}</h2>
          <p>{copy.final.body}</p>
          <div className="fb-actions fb-actions--center">
            <LocalizedLink className="fb-button fb-button--light" href="/book-a-walkthrough#schedule">{copy.final.assessment}</LocalizedLink>
          </div>
          <TextLink className="fb-text-link--light" href="/for-retailers">{copy.final.retailers}</TextLink>
        </div>
      </section>
    </main>
  );
}
