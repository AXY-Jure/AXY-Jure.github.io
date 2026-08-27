import React, { useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const problemColumns = [
  {
    title: 'What systems record today',
    items: ['Stock levels', 'Customer records', 'Completed transactions', 'Invoices'],
  },
  {
    title: 'What AXY keeps in context',
    items: [
      'What was shown but not sold',
      'What was compared or rejected — and why',
      'What was requested but unavailable',
      'Who deserves a follow-up, by whom and when',
    ],
  },
];

const stages = [
  {
    number: '01',
    title: 'Capture the work as it happens',
    copy: 'Store visits, products shown, customer interest, tasks, inquiries and service intake are recorded during normal work — not typed up afterwards.',
    image: '/images/home-clean/sales-context.webp',
    alt: 'AXY Sales App customer context, daily tasks and follow-up workflow',
    width: 1500,
    height: 1500,
  },
  {
    number: '02',
    title: 'Keep the relationship moving',
    copy: 'Follow-ups, wishlists, offers, messages, warranty and service updates continue after the customer leaves the store.',
    image: '/images/home-clean/post-visit.webp',
    alt: 'AXY Customer App post-visit screen with viewed products, suggested products and options to get opinions or book another visit',
    width: 900,
    height: 1955,
    device: 'iphone',
  },
  {
    number: '03',
    title: 'Understand what the activity means',
    copy: 'The same context reveals demand, product performance and missed opportunities so teams can decide what to show, stock or order next.',
    image: '/images/home-clean/mobile-analytics.webp',
    alt: 'AXY Sales App mobile analytics showing sales, visits, offers, invoices and performance trends',
    width: 900,
    height: 1955,
    device: 'iphone',
  },
];

const perspectives = [
  {
    label: 'Retailer experience',
    title: 'The retailer sees the complete visit.',
    copy: 'The store keeps the visit, customer consent, products shown and the next follow-up together in its own workspace.',
    note: 'The retailer owns this data and decides what may be shared.',
    image: '/images/home-clean/sales-context.webp',
    alt: 'AXY Sales App customer, task and follow-up screens',
    href: '/for-retailers',
    link: 'Explore AXY for retailers',
  },
  {
    label: 'Manufacturer experience',
    title: 'Brands receive approved signals, not customer records.',
    copy: 'Product visibility, availability pressure and aggregated demand can be shared without exposing customer identities, retailer notes or commercial strategy.',
    note: 'Every partner controls its own information and permissions.',
    image: '/images/home-clean/brand-context.webp',
    alt: 'AXY Back Office company and retail partner view',
    href: '/for-brands',
    link: 'Explore AXY for brands',
  },
  {
    label: 'Customer experience',
    title: 'The customer keeps what mattered to them.',
    copy: 'Viewed products, wishlists, inquiries, warranties and service updates remain available through the stores the customer chooses.',
    note: 'Customers control their profile and personal information.',
    image: '/images/home-clean/customer-context.webp',
    alt: 'AXY Customer App store, product and announcement screens',
    href: '/customer-experience',
    link: 'Explore the customer experience',
  },
];

const surfaces = [
  ['Sales App', 'Capture visits, products and next actions on the sales floor.', '/images/product-bubbles/sales-app.webp', '/sales-app'],
  ['Sales Catalogue', 'Browse, compare and check product availability with customers.', '/images/product-bubbles/sales-catalogue.webp', '/sales-app'],
  ['Back Office', 'Manage products, operations, reporting and permissions.', '/images/product-bubbles/back-office.webp', '/back-office'],
  ['Customer App', 'Continue the relationship after every visit and purchase.', '/images/product-bubbles/customer-app.webp', '/customer-experience'],
  ['Partner Network', 'Coordinate catalogues, orders and announcements with brands.', '/images/product-bubbles/partner-network.webp', '/for-brands'],
  ['Alfred AI', 'Surface relevant priorities and next actions across the platform.', '/images/product-bubbles/alfred-ai.webp', '/how-it-works'],
];

const retailerFeatures = [
  'Import catalogues without rebuilding them',
  'See stock and availability across locations',
  'Turn real customer demand into structured orders',
  'Keep each customer’s product history connected',
  'Give managers a clear view of what needs attention',
];

const brandFeatures = [
  'Distribute catalogues, specifications and prices',
  'Coordinate orders and product availability',
  'Share brand content through authorised retailers',
  'Manage warranty activation and extensions',
  'Understand approved, aggregated market demand',
];

const proofImages = [
  ['/images/home-clean/retail-visit.webp', 'A customer and sales associate during a premium retail consultation'],
  ['/images/home-clean/customer-trying-item.webp', 'A customer trying a product during a store visit'],
  ['/images/home-clean/products-on-table.webp', 'Products presented together during a retail consultation'],
  ['/images/home-clean/salesperson-view.webp', 'A sales associate guiding a customer in store'],
];

const starts = [
  {
    label: 'Smaller retailer',
    title: 'Start free',
    copy: 'Create your account, set up one store and start capturing visits today — no call required.',
    href: 'https://app.axy.net/onboarding',
    cta: 'Create free account',
  },
  {
    label: 'Established retailer or group',
    title: 'Plan your setup',
    copy: 'Plan multi-store structure, roles, product data and workflows with our team around your business.',
    href: '/book-a-walkthrough#schedule',
    cta: 'Get guided setup',
  },
  {
    label: 'Brand or manufacturer',
    title: 'Book a walkthrough',
    copy: 'See how brands reach retailers, share product data and understand approved demand signals.',
    href: '/book-a-walkthrough#schedule',
    cta: 'Book a walkthrough',
  },
];

function SmartLink({ href, className, children, ...props }) {
  if (href.startsWith('http')) {
    return <a href={href} className={className} {...props}>{children}</a>;
  }

  return <Link href={href} className={className} {...props}>{children}</Link>;
}

export default function Home() {
  const [activeStage, setActiveStage] = useState(0);
  const stageRefs = useRef([]);

  const handleStageKeyDown = (event, index) => {
    let nextIndex;

    if (event.key === 'ArrowDown' || event.key === 'ArrowRight') nextIndex = (index + 1) % stages.length;
    if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') nextIndex = (index + stages.length - 1) % stages.length;
    if (event.key === 'Home') nextIndex = 0;
    if (event.key === 'End') nextIndex = stages.length - 1;

    if (nextIndex === undefined) return;
    event.preventDefault();
    setActiveStage(nextIndex);
    stageRefs.current[nextIndex]?.focus();
  };

  return (
    <main className="home-clean" data-screen-label="Homepage">
      <section className="home-clean__hero">
        <div className="home-clean__hero-copy">
          <p className="home-clean__eyebrow">Retail collaboration infrastructure</p>
          <h1>Sell better. Stock smarter.<br />Collaborate faster.</h1>
          <p className="home-clean__lead">AXY captures what happens in-store and turns it into better follow-up, product demand intelligence and connected retailer–brand workflows.</p>
          <div className="home-clean__actions">
            <a className="home-clean__button home-clean__button--primary" href="https://app.axy.net/onboarding">Create free account</a>
            <Link className="home-clean__button home-clean__button--secondary" href="/book-a-walkthrough#schedule">Get guided setup</Link>
          </div>
          <p className="home-clean__login">Already have an account? <a href="https://app.axy.net/authentication">Log in</a></p>
        </div>
      </section>

      <section className="home-clean__video" aria-label="AXY platform overview video">
        <div className="home-clean__video-frame">
          <video aria-label="AXY platform overview" controls playsInline preload="metadata" poster="/videos/axy-main-promo-poster.webp">
            <source src="/videos/axy-main-promo.mp4" type="video/mp4" />
            Your browser does not support HTML video.
          </video>
        </div>
      </section>

      <section className="home-clean__section home-clean__section--soft">
        <div className="home-clean__container">
          <div className="home-clean__split home-clean__split--problem">
            <div className="home-clean__copy">
              <p className="home-clean__eyebrow">The problem</p>
              <h2>Most of what happens in a store disappears by closing time.</h2>
              <p className="home-clean__intro">Your systems remember the sale. They often lose the context that led to it.</p>
              <Link className="home-clean__text-link" href="/use-cases/in-store-sales-capture">Read about in-store sales capture <span aria-hidden="true">→</span></Link>
            </div>
            <figure className="home-clean__figure">
              <Image src="/images/home-clean/retail-visit.webp" alt="A customer and sales associate during a premium retail consultation" width={1800} height={1169} sizes="(max-width: 760px) 100vw, 52vw" />
            </figure>
          </div>
          <div className="home-clean__comparison">
            {problemColumns.map((column) => (
              <div className="home-clean__comparison-column" key={column.title}>
                <h3>{column.title}</h3>
                <ul>{column.items.map((item) => <li key={item}>{item}</li>)}</ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="home-clean__section home-clean__section--dark">
        <div className="home-clean__container">
          <div className="home-clean__section-heading home-clean__section-heading--left">
            <p className="home-clean__eyebrow">The operating model</p>
            <h2>Capture. Continue. Understand.</h2>
            <p>Three connected stages, one shared context.</p>
          </div>
          <div className="home-clean__stage-layout">
            <div className="home-clean__stage-list" role="tablist" aria-label="AXY operating model stages" aria-orientation="vertical">
              {stages.map((stage, index) => (
                <button
                  className={`home-clean__stage${activeStage === index ? ' home-clean__stage--active' : ''}`}
                  type="button"
                  id={`home-stage-tab-${index}`}
                  role="tab"
                  aria-selected={activeStage === index}
                  aria-controls={`home-stage-panel-${index}`}
                  onClick={() => setActiveStage(index)}
                  onKeyDown={(event) => handleStageKeyDown(event, index)}
                  ref={(element) => { stageRefs.current[index] = element; }}
                  tabIndex={activeStage === index ? 0 : -1}
                  key={stage.number}
                >
                  <span className="home-clean__stage-number">{stage.number}</span>
                  <span className="home-clean__stage-copy">
                    <span className="home-clean__stage-title">{stage.title}</span>
                    <span className="home-clean__stage-description">{stage.copy}</span>
                  </span>
                </button>
              ))}
            </div>
            <div className="home-clean__stage-visual">
              {stages.map((stage, index) => (
                <figure
                  className="home-clean__figure home-clean__figure--dark home-clean__stage-media"
                  id={`home-stage-panel-${index}`}
                  role="tabpanel"
                  aria-labelledby={`home-stage-tab-${index}`}
                  hidden={activeStage !== index}
                  key={stage.number}
                >
                  {stage.device === 'iphone' ? (
                    <div className="home-clean__iphone-mockup">
                      <Image
                        className="home-clean__iphone-screen"
                        src={stage.image}
                        alt={stage.alt}
                        width={stage.width}
                        height={stage.height}
                        loading="lazy"
                        decoding="async"
                        sizes="(max-width: 760px) 70vw, 260px"
                      />
                    </div>
                  ) : (
                    <Image
                      className="home-clean__stage-art"
                      src={stage.image}
                      alt={stage.alt}
                      width={stage.width}
                      height={stage.height}
                      loading="eager"
                      fetchPriority="high"
                      decoding="async"
                      sizes="(max-width: 760px) 100vw, 48vw"
                    />
                  )}
                </figure>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="home-clean__section">
        <div className="home-clean__container">
          <div className="home-clean__section-heading">
            <p className="home-clean__eyebrow">One event, three views</p>
            <h2>See AXY from every side of the retail relationship.</h2>
            <p>A customer visit creates different, permission-controlled context for the retailer, the brand and the customer.</p>
          </div>
          <div className="home-clean__perspectives">
            {perspectives.map((perspective) => (
              <article className="home-clean__perspective" key={perspective.label}>
                <Image src={perspective.image} alt={perspective.alt} width={1500} height={1500} sizes="(max-width: 760px) 100vw, 33vw" />
                <div className="home-clean__perspective-copy">
                  <p className="home-clean__eyebrow">{perspective.label}</p>
                  <h3>{perspective.title}</h3>
                  <p>{perspective.copy}</p>
                  <p className="home-clean__note">{perspective.note}</p>
                  <Link className="home-clean__text-link" href={perspective.href}>{perspective.link} <span aria-hidden="true">→</span></Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="home-clean__section home-clean__section--soft">
        <div className="home-clean__container">
          <div className="home-clean__section-heading">
            <p className="home-clean__eyebrow">The products</p>
            <h2>Connected surfaces that share one context.</h2>
            <p>Each AXY product has a specific job. Together, they keep the customer, product and partner journey connected.</p>
          </div>
          <div className="home-clean__surface-grid">
            {surfaces.map(([title, copy, image, href]) => (
              <Link className="home-clean__surface" href={href} key={title}>
                <Image src={image} alt="" width={1320} height={640} sizes="(max-width: 620px) 100vw, (max-width: 980px) 50vw, 33vw" />
                <div><h3>{title}</h3><p>{copy}</p><span>Explore <span aria-hidden="true">→</span></span></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="home-clean__section">
        <div className="home-clean__container home-clean__audience-grid">
          <div className="home-clean__audience-copy">
            <p className="home-clean__eyebrow">For retailers</p>
            <h2>Your sales floor is only the beginning.</h2>
            <p>AXY connects customer conversations, product availability, operations and follow-up across every location.</p>
            <ul className="home-clean__editorial-list">{retailerFeatures.map((item) => <li key={item}>{item}</li>)}</ul>
            <Link className="home-clean__button home-clean__button--primary" href="/for-retailers">Explore AXY for retailers</Link>
          </div>
          <figure className="home-clean__figure">
            <Image src="/images/home-clean/sales-context.webp" alt="AXY Sales App workflow screens" width={1500} height={1500} sizes="(max-width: 760px) 100vw, 50vw" />
          </figure>
        </div>
      </section>

      <section className="home-clean__section home-clean__section--navy">
        <div className="home-clean__container home-clean__audience-grid home-clean__audience-grid--reverse">
          <figure className="home-clean__figure home-clean__figure--dark">
            <Image src="/images/home-clean/brand-context.webp" alt="AXY Back Office retail partner workspace" width={1500} height={1500} sizes="(max-width: 760px) 100vw, 50vw" />
          </figure>
          <div className="home-clean__audience-copy">
            <p className="home-clean__eyebrow">For manufacturers and brands</p>
            <h2>One connected network for every retail partner.</h2>
            <p>Distribute product information, coordinate commercial activity and understand market demand through a controlled collaboration platform.</p>
            <ul className="home-clean__editorial-list home-clean__editorial-list--dark">{brandFeatures.map((item) => <li key={item}>{item}</li>)}</ul>
            <Link className="home-clean__button home-clean__button--light" href="/for-brands">Explore AXY for brands</Link>
          </div>
        </div>
      </section>

      <section className="home-clean__section home-clean__section--soft">
        <div className="home-clean__container">
          <div className="home-clean__section-heading">
            <p className="home-clean__eyebrow">Fits your stack</p>
            <h2>Standalone first. Connected when you’re ready.</h2>
            <p>AXY can run on its own or connect your POS, ERP, CRM, inventory and messaging tools. Your existing systems stay where they are.</p>
          </div>
          <div className="home-clean__plain-columns">
            <div><h3>Who owns the data?</h3><p>Each business owns its own data. Retailers own store and customer activity. Brands own their product content. Customers control their personal information.</p></div>
            <div><h3>What requires approval?</h3><p>Any visibility between partners. Sharing is opt-in, and each retailer decides which signals a brand may see.</p></div>
          </div>
          <div className="home-clean__center-link"><Link className="home-clean__text-link" href="/integrations">See how integrations and permissions work <span aria-hidden="true">→</span></Link></div>
        </div>
      </section>

      <section className="home-clean__section">
        <div className="home-clean__container">
          <div className="home-clean__section-heading">
            <p className="home-clean__eyebrow">Why trust it</p>
            <h2>Built from real luxury retail operations.</h2>
            <p>AXY comes from years of running watch and jewellery sales floors — the visits, follow-ups, service desks and partner relationships.</p>
          </div>
          <div className="home-clean__proof-grid">
            {proofImages.map(([src, alt], index) => (
              <figure key={src}>
                <Image src={src} alt={alt} width={index === 0 ? 1800 : index === 1 ? 1336 : index === 2 ? 1600 : 1114} height={index === 0 ? 1169 : index === 1 ? 742 : index === 2 ? 860 : 1282} sizes="(max-width: 620px) 100vw, 50vw" />
              </figure>
            ))}
          </div>
          <div className="home-clean__center-link"><Link className="home-clean__text-link" href="/about">Read the AXY story <span aria-hidden="true">→</span></Link></div>
        </div>
      </section>

      <section className="home-clean__section home-clean__section--soft">
        <div className="home-clean__container">
          <div className="home-clean__section-heading"><p className="home-clean__eyebrow">Getting started</p><h2>Three ways in. One platform.</h2></div>
          <div className="home-clean__start-grid">
            {starts.map((start) => (
              <article key={start.label}>
                <p className="home-clean__eyebrow">{start.label}</p><h3>{start.title}</h3><p>{start.copy}</p>
                <SmartLink className="home-clean__text-link" href={start.href}>{start.cta} <span aria-hidden="true">→</span></SmartLink>
              </article>
            ))}
          </div>
          <div className="home-clean__center-link"><Link className="home-clean__text-link" href="/pricing" data-analytics-event="pricing_cta_click" data-analytics-cta-name="view_pricing_home">See pricing and what’s included <span aria-hidden="true">→</span></Link></div>
        </div>
      </section>

      <section className="home-clean__final">
        <div>
          <h2>Capture what happens in-store. Use it everywhere it matters.</h2>
          <p>See the platform around your own products, stores and partners — not a generic demo account.</p>
          <div className="home-clean__actions">
            <a className="home-clean__button home-clean__button--light" href="https://app.axy.net/onboarding">Create free account</a>
            <Link className="home-clean__button home-clean__button--outline-light" href="/book-a-walkthrough#schedule">Get guided setup</Link>
            <Link className="home-clean__button home-clean__button--outline-light" href="/product">Explore the product</Link>
          </div>
          <p className="home-clean__login home-clean__login--light">Already have an account? <a href="https://app.axy.net/authentication">Log in</a></p>
        </div>
      </section>
    </main>
  );
}
