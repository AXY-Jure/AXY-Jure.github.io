import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const operatingModel = [
  ['01', 'Capture', 'Record visits, products shown, interest, inquiries and service activity during normal work.'],
  ['02', 'Continue', 'Turn activity into follow-ups, offers, appointments, warranty actions and customer updates.'],
  ['03', 'Understand', 'Use the shared context to see demand, conversion, performance and stock opportunities.'],
];

const products = [
  {
    className: 'hv27',
    title: 'Sales App',
    copy: 'Help sales teams capture, recommend and follow up during the customer journey.',
    image: '/images/product-bubbles/sales-app.webp',
    href: '/sales-app',
  },
  {
    className: 'hv28',
    title: 'Sales Catalogue',
    copy: 'Present products, compare options and check availability with the customer.',
    image: '/images/product-bubbles/sales-catalogue.webp',
    href: '/sales-app',
  },
  {
    className: 'hv29',
    title: 'Back Office',
    copy: 'Run products, orders, teams, reporting and operational workflows in one place.',
    image: '/images/product-bubbles/back-office.webp',
    href: '/back-office',
  },
  {
    className: 'hv30',
    title: 'Customer App',
    copy: 'Keep products, wishlists, warranties and service connected after the visit.',
    image: '/images/product-bubbles/customer-app.webp',
    href: '/customer-experience',
  },
  {
    className: 'hv31',
    title: 'Partner Network',
    copy: 'Coordinate catalogues, availability, orders and announcements with retail partners.',
    image: '/images/product-bubbles/partner-network.webp',
    href: '/for-brands',
  },
  {
    className: 'hv32',
    title: 'Alfred AI',
    copy: 'Surface relevant recommendations, priorities and next actions across the platform.',
    image: '/images/product-bubbles/alfred-ai.webp',
    href: '/how-it-works',
  },
];

const capabilities = [
  ['Sell better', 'Manage sales visits, customer context, product suggestions, follow-ups, offers and invoices.'],
  ['Run customer and team workflows', 'Organise customers, tasks, tickets, appointments, employee activity and next actions.'],
  ['Manage products and catalogues', 'Create or import product catalogues, specifications, images, variants and pricing information.'],
  ['Control stock, orders and transfers', 'Check availability, manage orders and reorders, transfer products and understand stock status.'],
  ['Stay connected with customers', 'Share products and announcements, receive inquiries and continue the relationship through the customer app.'],
  ['Manage service and warranties', 'Handle service requests, repair progress, warranty activations, extensions and customer documents.'],
  ['Work with partners', 'Exchange catalogues, orders, availability, announcements and warranty information through one network.'],
  ['Understand performance and demand', 'Analyse conversion, product interest, team performance, stock opportunities and market trends.'],
];

const paths = [
  ['/for-retailers', 'For retailers', 'Connect sales, products, stock, customers and management.'],
  ['/for-brands', 'For manufacturers and brands', 'Coordinate product information, retail partners, warranties and market insight.'],
  ['/sales-app', 'For sales teams', 'Sell with better context, recommendations and follow-up.'],
];

export default function Product() {
  return (
    <main className="product-clean" data-screen-label="Product Overview">
      <section className="product-clean__hero">
        <div className="product-clean__container product-clean__hero-grid">
          <div className="product-clean__hero-copy">
            <p className="product-clean__eyebrow">Product overview</p>
            <h1>One connected platform for modern retail.</h1>
            <p>AXY connects sales teams, product data, customers, operations and retail partners — so every part of the business works with the same context.</p>
            <div className="product-clean__actions">
              <Link className="product-clean__button product-clean__button--light" href="/how-it-works">Explore the platform</Link>
              <a className="product-clean__button product-clean__button--outline" href="https://app.axy.net/onboarding">Create free account</a>
            </div>
          </div>
          <div className="product-clean__hero-art" aria-label="AXY product surfaces">
            <Image src="/images/product-bubbles/sales-app.webp" alt="" width={1320} height={640} loading="eager" fetchPriority="high" />
            <Image src="/images/product-bubbles/back-office.webp" alt="" width={1320} height={640} loading="eager" />
            <Image src="/images/product-bubbles/customer-app.webp" alt="" width={1320} height={640} loading="eager" />
          </div>
        </div>
      </section>

      <section className="product-clean__section product-clean__section--soft">
        <div className="product-clean__container">
          <div className="product-clean__heading">
            <p className="product-clean__eyebrow">The operating model</p>
            <h2>Capture. Continue. Understand.</h2>
            <p>Every AXY workflow follows one connected logic: record what happens, keep the journey moving and turn activity into useful action.</p>
          </div>
          <div className="product-clean__model">
            {operatingModel.map(([number, title, copy]) => (
              <article key={number}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="product-clean__section">
        <div className="product-clean__container">
          <div className="product-clean__heading">
            <p className="product-clean__eyebrow">The products</p>
            <h2>Explore the AXY products.</h2>
            <p>Five connected surfaces and one assistant — each doing a specific job, sharing the same context.</p>
          </div>
          <div className="product-clean__cards">
            {products.map((product, index) => (
              <Link className={product.className} href={product.href} key={product.title}>
                <Image src={product.image} alt="" width={1320} height={640} loading={index === 0 ? 'eager' : 'lazy'} />
                <div>
                  <h3>{product.title}</h3>
                  <p>{product.copy}</p>
                  <span>Explore <span aria-hidden="true">→</span></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="product-clean__section product-clean__section--soft">
        <div className="product-clean__container">
          <div className="product-clean__heading">
            <p className="product-clean__eyebrow">Capability map</p>
            <h2>Everything AXY connects across your retail business.</h2>
            <p>From sales and customers to products, partners and performance — AXY brings the core retail workflows into one connected platform.</p>
          </div>
          <div className="product-clean__capabilities">
            {capabilities.map(([title, copy], index) => (
              <article key={title}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <div><h3>{title}</h3><p>{copy}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="product-clean__section">
        <div className="product-clean__container product-clean__integration">
          <div>
            <p className="product-clean__eyebrow">Standalone or connected</p>
            <h2>Use AXY as your platform — or connect it to the systems you already use.</h2>
            <p>AXY can run a smaller retailer as a complete platform, while larger companies connect existing ERP, CRM, e-commerce and product systems through APIs.</p>
            <Link className="product-clean__button product-clean__button--dark" href="/integrations">Explore integrations</Link>
          </div>
          <figure>
            <Image src="/images/for-retailers/systems-layer.png" alt="Existing retail systems connecting through AXY to sales teams, customers and partners" width={3240} height={1036} sizes="(max-width: 760px) 100vw, 54vw" />
          </figure>
        </div>
      </section>

      <section className="product-clean__section product-clean__section--dark">
        <div className="product-clean__container">
          <div className="product-clean__heading">
            <p className="product-clean__eyebrow">Where to next</p>
            <h2>Choose the path that fits you.</h2>
          </div>
          <div className="product-clean__paths">
            {paths.map(([href, title, copy]) => (
              <Link href={href} key={href}>
                <h3>{title}</h3>
                <p>{copy}</p>
                <span>Explore <span aria-hidden="true">→</span></span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
