import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const valueSteps = [
  ['Salesperson activity', 'Visit, products shown, interest'],
  ['Customer continuation', 'Wishlist, offer, inquiry'],
  ['Sales opportunity', 'Owned follow-up, next action'],
  ['Product demand', 'Shown, requested, wishlisted'],
  ['Stock decision', 'Transfer, order, reorder'],
  ['Management insight', 'Conversion, demand, teams'],
];

const supplierCapabilities = [
  'Import full or selected manufacturer catalogues',
  'Receive images and product specifications',
  'Review product and price updates',
  'Request manufacturer availability',
  'Send orders and reorders',
  'Receive order confirmation',
  'Reuse approved brand announcements',
  'Manage warranty activations and extensions',
  'Keep partner information current',
];

const scaleOptions = [
  ['Independent retailer', 'Start with the core sales, customer, catalogue and follow-up tools - without a complex implementation.'],
  ['Multi-location retailer', 'Connect stores, stock, customers, teams and management visibility across locations.'],
  ['Larger retail group', 'Integrate existing systems and use AXY as the sales, customer and partner collaboration layer.'],
];

const outcomes = [
  'Fewer missed opportunities',
  'Faster answers during the sale',
  'Less repetitive administration',
  'Clearer visibility across every location',
];

const faqs = [
  ['Will my sales team actually use it?', 'AXY is designed for quick actions during normal store work. Salespeople receive customer context, tasks, product information and next-action suggestions directly inside the same mobile workspace.'],
  ['Can AXY work across multiple locations?', 'Yes. AXY can connect customers, teams, catalogues, stock and reporting across stores and business units, subject to each company\u2019s setup and permissions.'],
  ['Do we need to replace our existing systems?', 'No. AXY can work independently or connect to existing POS, ERP, CRM, inventory and analytics systems.'],
  ['Can brands see our customers?', 'Customer-level information is not automatically shared with manufacturers or unrelated partners. Information exchange follows the retailer\u2019s permissions and the agreed workflow.'],
  ['Can we start with only part of AXY?', 'Yes. Retailers can begin with the most relevant tools and expand users, locations, modules and integrations as their needs grow.'],
];

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
  return <a className={`fr-text-link ${className}`.trim()} href={href} {...props}>{children}<span aria-hidden="true">→</span></a>;
}

export default function ForRetailers() {
  return (
    <main className="retailers-page" data-screen-label="For Retailers">
      <section className="fr-hero">
        <div className="fr-shell fr-hero__grid">
          <div className="fr-hero__copy">
            <h1>Sell better.<br />Stock smarter.</h1>
            <p className="fr-hero__lead">See what your market wants.</p>
            <p>AXY connects your sales team, customers, products, stock and management - so opportunities move forward, customers receive better service, and every location works with the same context.</p>
            <div className="fr-actions">
              <Link className="fr-button fr-button--primary" href="/book-a-walkthrough#schedule">Get guided setup</Link>
              <a className="fr-button fr-button--secondary" href="https://app.axy.net/onboarding">Create free account</a>
            </div>
            <TextLink href="/sales-app">Explore the Sales App</TextLink>
          </div>
          <div className="fr-hero__visual">
            <Image src="/images/for-retailers/pre-sale-activity.webp" alt="AXY Sales App customer context and daily activity screens" width="1200" height="582" loading="eager" fetchPriority="high" decoding="async" />
          </div>
        </div>
      </section>

      <section className="fr-section fr-section--soft">
        <div className="fr-shell fr-grid fr-grid--problem">
          <div>
            <h2>Most retail systems only start once a transaction is made</h2>
            <p className="fr-accent-copy">AXY captures what happens before it as well.</p>
            <p>Retailers usually only know what was sold. They rarely have a clear view of what customers considered, requested, liked, could not find, or expected to hear more about later.</p>
            <ul className="fr-problem-list">
              <li>They miss the products that are shown, but never sold.</li>
              <li>They never see that customers are interested in unavailable items.</li>
              <li>Follow-ups depend exclusively on an individual’s memory.</li>
              <li>Demand signals never reach management or procurement.</li>
            </ul>
            <Callout>See demand before it becomes an invoice.</Callout>
          </div>
          <div className="fr-problem-visual">
            <Image src="/images/for-retailers/pre-sale-activity.webp" alt="AXY Sales App showing a customer conversation, products of interest and the salesperson's daily activity" width="1200" height="582" loading="eager" decoding="async" />
          </div>
        </div>
      </section>

      <section className="fr-section">
        <div className="fr-shell fr-grid fr-feature-grid">
          <div className="fr-phone-stage">
            <Image className="fr-phone-image" src="/images/for-retailers/opportunity-phone.webp" alt="AXY Sales App customer profile with open opportunities and follow-ups" width="780" height="1688" loading="lazy" decoding="async" />
          </div>
          <div>
            <Eyebrow number="01">Never miss anything</Eyebrow>
            <h2>Never lose a sales opportunity</h2>
            <p>Organise customer visits, inquiries, offers, tasks and follow-ups so every active opportunity has a clear owner and next action.</p>
            <TextLink href="/sales-app">Explore the Sales App</TextLink>
          </div>
        </div>
      </section>

      <section className="fr-section">
        <div className="fr-shell fr-grid fr-feature-grid fr-feature-grid--copy-first">
          <div>
            <Eyebrow number="02">Daily plan</Eyebrow>
            <h2>Give every salesperson a clear daily plan</h2>
            <p>The Sales App brings today’s tasks, appointments, messages, tickets and opportunities into one mobile workspace.</p>
            <Callout>Open the app and know exactly what needs attention.</Callout>
            <TextLink href="/sales-app">Explore the Sales App</TextLink>
          </div>
          <div className="fr-phone-stage">
            <Image className="fr-phone-image" src="/images/for-retailers/daily-plan-phone.webp" alt="AXY Sales App daily plan with tasks, appointments and messages" width="780" height="1688" loading="lazy" decoding="async" />
          </div>
        </div>
      </section>

      <section className="fr-section">
        <div className="fr-shell fr-grid fr-feature-grid">
          <div className="fr-catalogue-stage">
            <Image className="fr-catalogue-stage__tablet" src="/images/for-retailers/catalogue-tablet.webp" alt="AXY product catalogue showing watches, filters and product availability" width="1400" height="1072" loading="lazy" decoding="async" />
          </div>
          <div>
            <Eyebrow number="03">Customer engagement</Eyebrow>
            <h2>Find the product while the customer is present</h2>
            <p>Browse the full catalogue, check stock across locations and request availability directly from connected manufacturers - without leaving the conversation.</p>
            <DetailList items={['Current-store stock', 'Other-location stock', 'Alternatives', 'Manufacturer request', 'Estimated delivery', 'Comparison']} />
            <Callout>Give the customer an answer before they leave.</Callout>
            <TextLink href="/sales-app">Explore product availability</TextLink>
          </div>
        </div>
      </section>

      <section className="fr-section fr-stock-section">
        <div className="fr-shell fr-grid fr-feature-grid fr-feature-grid--copy-first">
          <div>
            <Eyebrow number="04">Stock smarter</Eyebrow>
            <h2>Stock using real customer demand</h2>
            <p>Use products shown, wishlists, inquiries, availability requests and sales activity to improve transfers, ordering and reordering decisions.</p>
            <DetailList items={['Shown not sold', 'Requested unavailable', 'Product interest', 'Current stock', 'Reorder suggestion', 'Transfer opportunity']} />
            <Callout>Use what customers wanted, not only what was sold.</Callout>
            <TextLink href="/use-cases/product-demand-intelligence">See product demand intelligence</TextLink>
          </div>
          <div className="fr-stock-visual">
            <Image src="/images/for-retailers/stock-demand-monitor.webp" alt="AXY Back Office reorder view displaying product demand and current stock" width="1500" height="1097" loading="lazy" decoding="async" />
          </div>
        </div>
      </section>

      <section className="fr-section">
        <div className="fr-shell fr-grid fr-feature-grid">
          <div className="fr-metrics-visual">
            <Image src="/images/for-retailers/realtime-dashboard.webp" alt="AXY Back Office dashboard with sales, conversion and performance metrics" width="1400" height="1388" loading="lazy" decoding="async" />
          </div>
          <div>
            <Eyebrow number="05">Real-time metrics</Eyebrow>
            <h2>Understanding the business in real time</h2>
            <p>Give owners and managers a clear view of sales, visits, conversion, follow-up discipline, product demand, teams, brands and locations.</p>
            <DetailList items={['Sales & visits', 'Conversion', 'Open opportunities', 'Brand performance', 'Employee performance', 'Store comparison']} />
            <Callout>Understand what is happening before the monthly report.</Callout>
            <TextLink href="/back-office">Explore the Back Office</TextLink>
          </div>
        </div>
      </section>

      <section className="fr-value-band">
        <div className="fr-shell">
          <Eyebrow>How the value connects</Eyebrow>
          <h2>One store interaction creates value across the whole business.</h2>
          <p>A small action during normal work should create value for the salesperson, the customer, the sales manager, the owner and the buying team.</p>
          <ol className="fr-value-flow">
            {valueSteps.map(([title, text], index) => (
              <li key={title}><span>{index + 1}</span><strong>{title}</strong><small>{text}</small></li>
            ))}
          </ol>
        </div>
      </section>

      <section className="fr-section fr-warm">
        <div className="fr-shell fr-grid fr-feature-grid fr-feature-grid--copy-first">
          <div>
            <h2>The relationship continues when the customer is ready</h2>
            <p>Customers can reopen the products they viewed, save favourites, review offers, access invoices and warranties, follow service activity and contact the store - without starting from zero.</p>
            <DetailList warm items={['Products viewed', 'Wishlist', 'Offers & Quotations', 'Inquiry', 'Appointment', 'Invoices', 'Warranty', 'Service status', 'Contact salesperson']} />
            <Callout warm>The Customer App shows only the stores the customer has visited, selected or connected with. Unrelated retailers do not automatically gain access or appear in the profile.</Callout>
            <TextLink className="fr-text-link--warm" href="/customer-experience">Explore the customer experience</TextLink>
          </div>
          <div className="fr-customer-phones">
            <Image className="fr-customer-phones__home" src="/images/for-retailers/customer-home-phone.webp" alt="AXY Customer App home with products, appointments and services" width="720" height="1479" loading="lazy" decoding="async" />
            <Image className="fr-customer-phones__service" src="/images/for-retailers/customer-service-phone.webp" alt="AXY Customer App product repair status and next actions" width="720" height="1479" loading="lazy" decoding="async" />
          </div>
        </div>
      </section>

      <section className="fr-section">
        <div className="fr-shell fr-grid fr-feature-grid">
          <div className="fr-tablet-visual">
            <Image src="/images/for-retailers/catalogue-tablet.webp" alt="AXY manufacturer catalogue on a tablet" width="1400" height="1072" loading="lazy" decoding="async" />
          </div>
          <div>
            <h2>Stop rebuilding supplier catalogues and chasing constant updates</h2>
            <p>Import approved manufacturer catalogues, receive product and price updates, request availability, exchange structured orders and reuse partner content - through one connected workflow.</p>
            <ul className="fr-check-list">
              {supplierCapabilities.map((item) => <li key={item}>{item}</li>)}
            </ul>
            <Callout><strong>Work more closely with partners,</strong> without giving them unrestricted access to your business or customers.</Callout>
            <TextLink href="/back-office">Explore the Back Office</TextLink>
          </div>
        </div>
      </section>

      <section className="fr-section fr-integration">
        <div className="fr-shell">
          <div className="fr-centered-heading">
            <h2>Use AXY independently, or connect the systems you already use</h2>
            <p>AXY supports smaller retailers as a connected retail platform, while larger organisations can seamlessly integrate their existing POS, ERP, CRM, inventory, e-commerce and analytics systems.</p>
          </div>
          <Image className="fr-integration__diagram" src="/images/for-retailers/systems-layer.png" alt="Existing inventory, POS, ERP, CRM, e-commerce and analytics systems connected through the AXY shared platform layer to the Customer App, partner network and Sales App" width="3240" height="1036" loading="lazy" decoding="async" />
          <div className="fr-integration__safeguards">
            <span>Businesses keep control of their records</span>
            <span>Partner visibility is permission-based</span>
            <span>Customer-level data is not shared automatically</span>
            <span>Aggregated insights without exposing raw data</span>
          </div>
          <TextLink href="/back-office">Explore the Back Office</TextLink>
        </div>
      </section>

      <section className="fr-section fr-section--soft">
        <div className="fr-shell">
          <Eyebrow>Start small. Scale across locations.</Eyebrow>
          <h2>One store or many - keep the same operating logic.</h2>
          <div className="fr-scale-grid">
            {scaleOptions.map(([title, text], index) => (
              <article key={title}><span>{String(index + 1).padStart(2, '0')}</span><h3>{title}</h3><p>{text}</p></article>
            ))}
          </div>
        </div>
      </section>

      <section className="fr-section">
        <div className="fr-shell fr-retail-reality">
          <div>
            <Eyebrow>Built from retail reality</Eyebrow>
            <h2>Designed around the work that actually takes place inside real stores</h2>
          </div>
          <div>
            <p>AXY was developed around real premium retail workflows: customer visits, product presentations, follow-ups, stock questions, service, warranties, orders and multi-location operations.</p>
            <Callout>Created and tested inside a real multi-location luxury retail environment.</Callout>
            <TextLink href="/sales-app">Explore the Sales App</TextLink>
          </div>
        </div>
      </section>

      <section className="fr-section fr-section--soft fr-outcomes">
        <div className="fr-shell">
          <h2>Sell better. Stock smarter. Stay connected.</h2>
          <div className="fr-outcome-grid">
            {outcomes.map((outcome, index) => (
              <article key={outcome}><span>{String(index + 1).padStart(2, '0')}</span><strong>{outcome}</strong></article>
            ))}
          </div>
        </div>
      </section>

      <section className="fr-section fr-faq">
        <div className="fr-shell fr-faq__inner">
          <Eyebrow>Questions retailers ask</Eyebrow>
          <h2>Clear answers for retail teams.</h2>
          <div className="fr-faq__list">
            {faqs.map(([question, answer]) => (
              <article key={question}><h3>{question}</h3><p>{answer}</p></article>
            ))}
            <article>
              <h3>What does it cost to start?</h3>
              <p>See the Pricing page and book guided setup - we map the right starting point for your business before anything is finalised.{' '}
                <Link href="/pricing" data-analytics-event="pricing_cta_click" data-analytics-cta-name="view_pricing_context">See pricing →</Link>
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="fr-final-cta">
        <div className="fr-shell">
          <h2>See how AXY would fit your retail business.</h2>
          <p>Review your sales workflow, product data, locations and current systems with our team. We will show where AXY can reduce missed opportunities and repeated work.</p>
          <div className="fr-actions fr-actions--center">
            <Link className="fr-button fr-button--light" href="/book-a-walkthrough#schedule">Get guided setup</Link>
            <a className="fr-button fr-button--outline-light" href="https://app.axy.net/onboarding">Create free account</a>
          </div>
          <Link className="fr-final-cta__pricing" href="/pricing" data-analytics-event="pricing_cta_click" data-analytics-cta-name="view_pricing_final">See pricing →</Link>
        </div>
      </section>
    </main>
  );
}
