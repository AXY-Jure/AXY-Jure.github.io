import Image from 'next/image';
import Link from 'next/link';

const VALUE_PILLARS = [
  {
    title: 'See demand before it becomes another order',
    copy: 'Connect approved presentations, comparisons, wishlists, inquiries and unavailable requests to the same product record.',
  },
  {
    title: 'Make retailers easier to support',
    copy: 'Give connected partners current product information, approved content and a structured way to ask for availability.',
  },
  {
    title: 'Put stock where interest is building',
    copy: 'Use sell-through, stock and in-store interest together to identify products and markets that may need attention.',
  },
];

const RETAILER_ENABLEMENT = [
  'Structured product records, variants and documents',
  'Approved prices and retailer-specific assortments',
  'Product launches and customer-facing content',
  'Availability requests and structured orders',
  'Warranty, service and after-sales information',
];

const INTELLIGENCE_SIGNALS = [
  'Products shown',
  'Products compared',
  'Wishlists',
  'Inquiries',
  'Availability requests',
  'Requested unavailable',
  'Sell-through where connected',
  'Stock health',
];

const INTELLIGENCE_DECISIONS = [
  'Where might availability need attention?',
  'Which markets show growing product interest?',
  'Which products create interest but do not convert?',
  'Which collections need more retailer support?',
];

const CONTROL_POINTS = [
  {
    title: 'Retailer relationships remain protected',
    copy: 'Customer identities, internal notes, margins and commercial strategy are not automatically exposed to a brand.',
  },
  {
    title: 'Sharing follows the workflow',
    copy: 'Catalogue, availability, order, warranty and service fields move only where the configured purpose and permissions allow.',
  },
  {
    title: 'Broader insight can stay aggregated',
    copy: 'Market and product signals can be grouped or anonymised where permissions and sample size make that appropriate.',
  },
];

const FAQS = [
  {
    question: 'What can a brand learn from activity in stores?',
    answer: 'Where participating retailers capture and approve the relevant workflow, AXY can combine signals such as products shown, compared, wishlisted, requested or unavailable with connected stock and sell-through data. The exact view depends on available data, permissions and sample size.',
  },
  {
    question: 'Does AXY expose retailer customer data to brands?',
    answer: 'No—not by default. Retailer customer identities and internal records remain private unless a specific, permitted workflow requires defined fields to be shared. Broader product and market insight can use aggregated or anonymised signals.',
  },
  {
    question: 'How do brands keep retailer product information current?',
    answer: 'Brands can publish approved product records, collections, images, specifications, documents and commercial fields to connected authorised retailers. Retailers review and accept the products or updates relevant to their business unless an approved synchronisation rule has been configured.',
  },
  {
    question: 'Can AXY connect with an ERP, PIM or order system?',
    answer: 'Yes, where the source provides suitable access. AXY can use APIs, scheduled synchronisation, structured imports or a scoped adapter. The records, direction, frequency and automation are confirmed during implementation.',
  },
];

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
    <Link className={`fb-text-link ${className}`.trim()} href={href}>
      {children}<span aria-hidden="true">→</span>
    </Link>
  );
}

export default function ForBrands() {
  return (
    <main className="brands-page" data-screen-label="For Brands" data-analytics-location="for_brands">
      <section className="fb-hero" aria-labelledby="brands-title">
        <div className="fb-shell fb-grid fb-hero__grid">
          <div className="fb-hero__copy">
            <p className="fb-hero__eyebrow">AXY for brands and manufacturers</p>
            <h1 id="brands-title">Know what happens after sell-in.</h1>
            <p className="fb-hero__lead">Turn approved in-store activity into clearer product, stock and retail decisions.</p>
            <p>
              AXY connects product data with the signals recorded by participating retailers—what was shown, compared, wishlisted, requested and sold—so brands can support stores better and understand where demand is building.
            </p>
            <div className="fb-actions">
              <Link className="fb-button fb-button--light" href="/book-a-walkthrough#schedule">Book a network assessment</Link>
            </div>
            <TextLink className="fb-text-link--light" href="/integrations">Explore the AXY integration layer</TextLink>
          </div>

          <figure className="fb-hero__visual">
            <Image
              src="/images/home-clean/customer-trying-item.webp"
              alt="A retail associate presenting a product to a customer in store"
              width={1336}
              height={742}
              priority
              sizes="(max-width: 980px) 92vw, 54vw"
            />
            <figcaption>The signal begins with a real customer interaction.</figcaption>
          </figure>
        </div>
      </section>

      <section className="fb-section fb-section--soft" aria-labelledby="brand-value-title">
        <div className="fb-shell">
          <div className="fb-grid fb-insight-grid">
            <div className="fb-feature-copy">
              <Eyebrow number="01">Beyond sell-in</Eyebrow>
              <h2 id="brand-value-title">A shipment shows what entered the channel. It does not show what customers wanted.</h2>
              <p>
                Between wholesale delivery and the final sale, useful product signals remain inside store visits, employee conversations and disconnected retailer systems. AXY helps connected retailers turn approved activity into structured context a brand can use.
              </p>
              <Callout>See more of what happens in store—without claiming access to every retailer or customer record.</Callout>
            </div>
            <div className="fb-clean-visual fb-insight-visual">
              <Image
                src="/images/for-brands/product-intelligence.webp"
                alt="AXY product-intelligence dashboard with commercial performance, demand and stock context"
                width={1800}
                height={1268}
                loading="lazy"
                sizes="(max-width: 980px) 92vw, 52vw"
              />
            </div>
          </div>

          <div className="fb-value-grid">
            {VALUE_PILLARS.map((item, index) => (
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
            <Eyebrow number="02">Retailer enablement</Eyebrow>
            <h2 id="retailer-enablement-title">Make every connected retailer easier to support.</h2>
            <p>
              Maintain a consistent product structure and give each authorised partner the information and workflows relevant to their business—without rebuilding another spreadsheet or catalogue package for every relationship.
            </p>
            <ul className="fb-editorial-list">
              {RETAILER_ENABLEMENT.map((item) => <li key={item}>{item}</li>)}
            </ul>
            <Callout>Publish approved information once. Let each retailer review what belongs in its own business.</Callout>
            <TextLink href="/back-office">Explore AXY Back Office</TextLink>
          </div>
        </div>
      </section>

      <section className="fb-section fb-section--soft" aria-labelledby="availability-title">
        <div className="fb-shell fb-grid fb-feature-grid">
          <div className="fb-feature-copy">
            <Eyebrow number="03">Availability and orders</Eyebrow>
            <h2 id="availability-title">Respond while product interest is still active.</h2>
            <p>
              Connect availability requests, stock pressure and structured orders to the same product references used by retailers. Brands can see where demand is forming and coordinate the next response with better context.
            </p>
            <SignalList items={['Availability requests', 'Available / unavailable', 'Requested quantity', 'Estimated delivery', 'Alternative product', 'Structured order status']} />
            <Callout>Use interest, sell-through and stock together to identify where availability may need attention.</Callout>
          </div>
          <div className="fb-orders-mockup" data-device-mockup="desktop">
            <div className="fb-orders-mockup__display">
              <span className="fb-orders-mockup__camera" aria-hidden="true" />
              <div className="fb-orders-mockup__screen">
                <Image
                  src="/images/back-office/orders.webp"
                  alt="AXY structured order workspace with stock, supply and order-status context"
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
          <Eyebrow number="04">Product intelligence</Eyebrow>
          <h2 id="intelligence-title">Turn store activity into clearer product decisions.</h2>
          <p>
            Combine approved in-store interest with connected sell-through and stock data to understand product visibility, unmet demand and market momentum. These are decision signals—not a promise of perfect forecasting.
          </p>
          <div className="fb-intelligence-grid">
            <div>
              <h3>Signals that can be combined</h3>
              <ul className="fb-dark-signals">
                {INTELLIGENCE_SIGNALS.map((item) => <li key={item}>{item}</li>)}
              </ul>
              <p className="fb-intelligence-note">Compare by market, collection, product, period or authorised retailer group where permissions and sample size allow.</p>
            </div>
            <div className="fb-decision-card">
              <h3>Questions it can support</h3>
              <ul>{INTELLIGENCE_DECISIONS.map((item) => <li key={item}>{item}</li>)}</ul>
            </div>
          </div>
        </div>
      </section>

      <section className="fb-section" aria-labelledby="control-title">
        <div className="fb-shell fb-grid fb-feature-grid">
          <div className="fb-clean-diagram fb-permission-diagram">
            <Image
              src="/images/for-brands/permission-model.webp"
              alt="Permission-controlled connection between a retailer and a brand"
              width={1600}
              height={895}
              loading="lazy"
              sizes="(max-width: 980px) 92vw, 52vw"
            />
          </div>
          <div className="fb-feature-copy">
            <Eyebrow number="05">Control</Eyebrow>
            <h2 id="control-title">Share the workflow—not the retailer&apos;s database.</h2>
            <p>
              AXY coordinates the information required for an approved workflow while each company maintains ownership of its customers, internal records and commercial strategy.
            </p>
            <div className="fb-control-list">
              {CONTROL_POINTS.map((item) => (
                <article key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                </article>
              ))}
            </div>
            <div className="fb-control-integration">
              <h3>Keep the systems you already use.</h3>
              <p>AXY can map supported product, availability, order, warranty and reporting workflows to an ERP, PIM or order system where suitable access is available.</p>
              <TextLink href="/integrations">Explore integrations</TextLink>
            </div>
          </div>
        </div>
      </section>

      <section className="fb-section fb-section--soft fb-faq" aria-labelledby="brand-faq-title">
        <div className="fb-shell fb-faq__inner">
          <Eyebrow>Questions from brands and manufacturers</Eyebrow>
          <h2 id="brand-faq-title">What commercial and technology teams usually ask.</h2>
          <div className="fb-faq__list">
            {FAQS.map((item) => (
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
          <p className="fb-hero__eyebrow">Your first connected workflow</p>
          <h2 id="brand-cta-title">See where better retail signals could change your next product decision.</h2>
          <p>
            Map the retailer network, product data and market question that matter first. We will explain what can connect, what remains private and how to begin with a controlled pilot.
          </p>
          <div className="fb-actions fb-actions--center">
            <Link className="fb-button fb-button--light" href="/book-a-walkthrough#schedule">Book a network assessment</Link>
          </div>
          <TextLink className="fb-text-link--light" href="/for-retailers">See how AXY helps retailers</TextLink>
        </div>
      </section>
    </main>
  );
}
