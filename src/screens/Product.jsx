import React from 'react';
import Image from 'next/image';
import Link from '../i18n/LocalizedLink.jsx';
import { useLocalizedCopy } from '../i18n/I18nProvider.jsx';
import productCatalog from '../i18n/locales/pages/product.js';

const productCards = [
  {
    className: 'hv27',
    image: '/images/product-bubbles/sales-app.webp',
    href: '/sales-app',
  },
  {
    className: 'hv28',
    image: '/images/product-bubbles/sales-catalogue.webp',
    href: '/sales-app',
  },
  {
    className: 'hv29',
    image: '/images/product-bubbles/back-office.webp',
    href: '/back-office',
  },
  {
    className: 'hv30',
    image: '/images/product-bubbles/customer-app.webp',
    href: '/customer-experience',
  },
  {
    className: 'hv31',
    image: '/images/product-bubbles/partner-network.webp',
    href: '/for-brands',
  },
  {
    className: 'hv32',
    image: '/images/product-bubbles/alfred-ai.webp',
    href: '/how-it-works',
  },
];

const pathHrefs = ['/for-retailers', '/for-brands', '/sales-app'];

export default function Product() {
  const { product: copy } = useLocalizedCopy(productCatalog);

  return (
    <main className="product-clean" data-screen-label="Product Overview">
      <section className="product-clean__hero">
        <div className="product-clean__container product-clean__hero-grid">
          <div className="product-clean__hero-copy">
            <p className="product-clean__eyebrow">{copy.hero.eyebrow}</p>
            <h1>{copy.hero.title}</h1>
            <p>{copy.hero.body}</p>
            <div className="product-clean__actions">
              <Link className="product-clean__button product-clean__button--light" href="/how-it-works">{copy.hero.explore}</Link>
              <a className="product-clean__button product-clean__button--outline" href="https://app.axy.net/onboarding">{copy.hero.createAccount}</a>
            </div>
          </div>
          <div className="product-clean__hero-art" aria-label={copy.hero.artLabel}>
            <Image src="/images/product-bubbles/sales-app.webp" alt="" width={1320} height={640} loading="eager" fetchPriority="high" />
            <Image src="/images/product-bubbles/back-office.webp" alt="" width={1320} height={640} loading="eager" />
            <Image src="/images/product-bubbles/customer-app.webp" alt="" width={1320} height={640} loading="eager" />
          </div>
        </div>
      </section>

      <section className="product-clean__section product-clean__section--soft">
        <div className="product-clean__container">
          <div className="product-clean__heading">
            <p className="product-clean__eyebrow">{copy.operatingModel.eyebrow}</p>
            <h2>{copy.operatingModel.title}</h2>
            <p>{copy.operatingModel.body}</p>
          </div>
          <div className="product-clean__model">
            {copy.operatingModel.steps.map(([number, title, body]) => (
              <article key={number}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="product-clean__section">
        <div className="product-clean__container">
          <div className="product-clean__heading">
            <p className="product-clean__eyebrow">{copy.productsSection.eyebrow}</p>
            <h2>{copy.productsSection.title}</h2>
            <p>{copy.productsSection.body}</p>
          </div>
          <div className="product-clean__cards">
            {productCards.map((product, index) => {
              const [title, body] = copy.productsSection.products[index];
              return (
              <Link className={product.className} href={product.href} key={title}>
                <Image src={product.image} alt="" width={1320} height={640} loading={index === 0 ? 'eager' : 'lazy'} />
                <div>
                  <h3>{title}</h3>
                  <p>{body}</p>
                  <span>{copy.productsSection.explore} <span aria-hidden="true">→</span></span>
                </div>
              </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="product-clean__section product-clean__section--soft">
        <div className="product-clean__container">
          <div className="product-clean__heading">
            <p className="product-clean__eyebrow">{copy.capabilityMap.eyebrow}</p>
            <h2>{copy.capabilityMap.title}</h2>
            <p>{copy.capabilityMap.body}</p>
          </div>
          <div className="product-clean__capabilities">
            {copy.capabilityMap.capabilities.map(([title, body], index) => (
              <article key={title}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <div><h3>{title}</h3><p>{body}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="product-clean__section">
        <div className="product-clean__container product-clean__integration">
          <div>
            <p className="product-clean__eyebrow">{copy.integrations.eyebrow}</p>
            <h2>{copy.integrations.title}</h2>
            <p>{copy.integrations.body}</p>
            <Link className="product-clean__button product-clean__button--dark" href="/integrations">{copy.integrations.cta}</Link>
          </div>
          <figure>
            <Image src="/images/for-retailers/systems-layer.png" alt={copy.integrations.imageAlt} width={3240} height={1036} sizes="(max-width: 760px) 100vw, 54vw" />
          </figure>
        </div>
      </section>

      <section className="product-clean__section product-clean__section--dark">
        <div className="product-clean__container">
          <div className="product-clean__heading">
            <p className="product-clean__eyebrow">{copy.paths.eyebrow}</p>
            <h2>{copy.paths.title}</h2>
          </div>
          <div className="product-clean__paths">
            {copy.paths.items.map(([title, body], index) => {
              const href = pathHrefs[index];
              return (
              <Link href={href} key={href}>
                <h3>{title}</h3>
                <p>{body}</p>
                <span>{copy.paths.explore} <span aria-hidden="true">→</span></span>
              </Link>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
