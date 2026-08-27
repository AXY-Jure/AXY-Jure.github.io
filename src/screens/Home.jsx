import React, { useRef, useState } from 'react';
import Image from 'next/image';
import Link from '../i18n/LocalizedLink.jsx';
import { useLocalizedCopy } from '../i18n/I18nProvider.jsx';
import homeCatalog from '../i18n/locales/pages/home.js';

const stageMedia = [
  {
    image: '/images/home-clean/sales-context.webp',
    width: 1500,
    height: 1500,
  },
  {
    image: '/images/home-clean/post-visit.webp',
    width: 900,
    height: 1955,
    device: 'iphone',
  },
  {
    image: '/images/home-clean/mobile-analytics.webp',
    width: 900,
    height: 1955,
    device: 'iphone',
  },
];

const perspectiveConfig = [
  {
    image: '/images/home-clean/sales-context.webp',
    href: '/for-retailers',
  },
  {
    image: '/images/home-clean/brand-context.webp',
    href: '/for-brands',
  },
  {
    image: '/images/home-clean/customer-context.webp',
    href: '/customer-experience',
  },
];

const surfaceConfig = [
  ['/images/product-bubbles/sales-app.webp', '/sales-app'],
  ['/images/product-bubbles/sales-catalogue.webp', '/sales-app'],
  ['/images/product-bubbles/back-office.webp', '/back-office'],
  ['/images/product-bubbles/customer-app.webp', '/customer-experience'],
  ['/images/product-bubbles/partner-network.webp', '/for-brands'],
  ['/images/product-bubbles/alfred-ai.webp', '/how-it-works'],
];

const proofImages = [
  '/images/home-clean/retail-visit.webp',
  '/images/home-clean/customer-trying-item.webp',
  '/images/home-clean/products-on-table.webp',
  '/images/home-clean/salesperson-view.webp',
];

const startHrefs = ['https://app.axy.net/onboarding', '/book-a-walkthrough#schedule', '/book-a-walkthrough#schedule'];

function SmartLink({ href, className, children, ...props }) {
  if (href.startsWith('http')) {
    return <a href={href} className={className} {...props}>{children}</a>;
  }

  return <Link href={href} className={className} {...props}>{children}</Link>;
}

export default function Home() {
  const { home: copy } = useLocalizedCopy(homeCatalog);
  const [activeStage, setActiveStage] = useState(0);
  const stageRefs = useRef([]);

  const handleStageKeyDown = (event, index) => {
    let nextIndex;

    if (event.key === 'ArrowDown' || event.key === 'ArrowRight') nextIndex = (index + 1) % copy.operatingModel.stages.length;
    if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') nextIndex = (index + copy.operatingModel.stages.length - 1) % copy.operatingModel.stages.length;
    if (event.key === 'Home') nextIndex = 0;
    if (event.key === 'End') nextIndex = copy.operatingModel.stages.length - 1;

    if (nextIndex === undefined) return;
    event.preventDefault();
    setActiveStage(nextIndex);
    stageRefs.current[nextIndex]?.focus();
  };

  return (
    <main className="home-clean" data-screen-label="Homepage">
      <section className="home-clean__hero">
        <div className="home-clean__hero-copy">
          <p className="home-clean__eyebrow">{copy.hero.eyebrow}</p>
          <h1>{copy.hero.title[0]}<br />{copy.hero.title[1]}</h1>
          <p className="home-clean__lead">{copy.hero.lead}</p>
          <div className="home-clean__actions">
            <a className="home-clean__button home-clean__button--primary" href="https://app.axy.net/onboarding">{copy.hero.createAccount}</a>
            <Link className="home-clean__button home-clean__button--secondary" href="/book-a-walkthrough#schedule">{copy.hero.guidedSetup}</Link>
          </div>
          <p className="home-clean__login">{copy.hero.accountPrompt} <a href="https://app.axy.net/authentication">{copy.hero.logIn}</a></p>
        </div>
      </section>

      <section className="home-clean__video" aria-label={copy.video.sectionLabel}>
        <div className="home-clean__video-frame">
          <video aria-label={copy.video.videoLabel} controls playsInline preload="metadata" poster="/videos/axy-main-promo-poster.webp">
            <source src="/videos/axy-main-promo.mp4" type="video/mp4" />
            {copy.video.fallback}
          </video>
        </div>
      </section>

      <section className="home-clean__section home-clean__section--soft">
        <div className="home-clean__container">
          <div className="home-clean__split home-clean__split--problem">
            <div className="home-clean__copy">
              <p className="home-clean__eyebrow">{copy.problem.eyebrow}</p>
              <h2>{copy.problem.title}</h2>
              <p className="home-clean__intro">{copy.problem.body}</p>
              <Link className="home-clean__text-link" href="/use-cases/in-store-sales-capture">{copy.problem.link} <span aria-hidden="true">→</span></Link>
            </div>
            <figure className="home-clean__figure">
              <Image src="/images/home-clean/retail-visit.webp" alt={copy.problem.imageAlt} width={1800} height={1169} sizes="(max-width: 760px) 100vw, 52vw" />
            </figure>
          </div>
          <div className="home-clean__comparison">
            {copy.problem.columns.map(([title, items]) => (
              <div className="home-clean__comparison-column" key={title}>
                <h3>{title}</h3>
                <ul>{items.map((item) => <li key={item}>{item}</li>)}</ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="home-clean__section home-clean__section--dark">
        <div className="home-clean__container">
          <div className="home-clean__section-heading home-clean__section-heading--left">
            <p className="home-clean__eyebrow">{copy.operatingModel.eyebrow}</p>
            <h2>{copy.operatingModel.title}</h2>
            <p>{copy.operatingModel.body}</p>
          </div>
          <div className="home-clean__stage-layout">
            <div className="home-clean__stage-list" role="tablist" aria-label={copy.operatingModel.tabLabel} aria-orientation="vertical">
              {copy.operatingModel.stages.map(([number, title, body], index) => (
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
                  key={number}
                >
                  <span className="home-clean__stage-number">{number}</span>
                  <span className="home-clean__stage-copy">
                    <span className="home-clean__stage-title">{title}</span>
                    <span className="home-clean__stage-description">{body}</span>
                  </span>
                </button>
              ))}
            </div>
            <div className="home-clean__stage-visual">
              {stageMedia.map((stage, index) => (
                <figure
                  className="home-clean__figure home-clean__figure--dark home-clean__stage-media"
                  id={`home-stage-panel-${index}`}
                  role="tabpanel"
                  aria-labelledby={`home-stage-tab-${index}`}
                  hidden={activeStage !== index}
                  key={copy.operatingModel.stages[index][0]}
                >
                  {stage.device === 'iphone' ? (
                    <div className="home-clean__iphone-mockup">
                      <Image
                        className="home-clean__iphone-screen"
                        src={stage.image}
                        alt={copy.operatingModel.stages[index][3]}
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
                      alt={copy.operatingModel.stages[index][3]}
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
            <p className="home-clean__eyebrow">{copy.perspectives.eyebrow}</p>
            <h2>{copy.perspectives.title}</h2>
            <p>{copy.perspectives.body}</p>
          </div>
          <div className="home-clean__perspectives">
            {perspectiveConfig.map((perspective, index) => {
              const [label, title, body, note, alt, link] = copy.perspectives.items[index];
              return (
              <article className="home-clean__perspective" key={label}>
                <Image src={perspective.image} alt={alt} width={1500} height={1500} sizes="(max-width: 760px) 100vw, 33vw" />
                <div className="home-clean__perspective-copy">
                  <p className="home-clean__eyebrow">{label}</p>
                  <h3>{title}</h3>
                  <p>{body}</p>
                  <p className="home-clean__note">{note}</p>
                  <Link className="home-clean__text-link" href={perspective.href}>{link} <span aria-hidden="true">→</span></Link>
                </div>
              </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="home-clean__section home-clean__section--soft">
        <div className="home-clean__container">
          <div className="home-clean__section-heading">
            <p className="home-clean__eyebrow">{copy.products.eyebrow}</p>
            <h2>{copy.products.title}</h2>
            <p>{copy.products.body}</p>
          </div>
          <div className="home-clean__surface-grid">
            {surfaceConfig.map(([image, href], index) => {
              const [title, body] = copy.products.items[index];
              return (
              <Link className="home-clean__surface" href={href} key={title}>
                <Image src={image} alt="" width={1320} height={640} sizes="(max-width: 620px) 100vw, (max-width: 980px) 50vw, 33vw" />
                <div><h3>{title}</h3><p>{body}</p><span>{copy.products.explore} <span aria-hidden="true">→</span></span></div>
              </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="home-clean__section">
        <div className="home-clean__container home-clean__audience-grid">
          <div className="home-clean__audience-copy">
            <p className="home-clean__eyebrow">{copy.retailers.eyebrow}</p>
            <h2>{copy.retailers.title}</h2>
            <p>{copy.retailers.body}</p>
            <ul className="home-clean__editorial-list">{copy.retailers.features.map((item) => <li key={item}>{item}</li>)}</ul>
            <Link className="home-clean__button home-clean__button--primary" href="/for-retailers">{copy.retailers.link}</Link>
          </div>
          <figure className="home-clean__figure">
            <Image src="/images/home-clean/sales-context.webp" alt={copy.retailers.imageAlt} width={1500} height={1500} sizes="(max-width: 760px) 100vw, 50vw" />
          </figure>
        </div>
      </section>

      <section className="home-clean__section home-clean__section--navy">
        <div className="home-clean__container home-clean__audience-grid home-clean__audience-grid--reverse">
          <figure className="home-clean__figure home-clean__figure--dark">
            <Image src="/images/home-clean/brand-context.webp" alt={copy.brands.imageAlt} width={1500} height={1500} sizes="(max-width: 760px) 100vw, 50vw" />
          </figure>
          <div className="home-clean__audience-copy">
            <p className="home-clean__eyebrow">{copy.brands.eyebrow}</p>
            <h2>{copy.brands.title}</h2>
            <p>{copy.brands.body}</p>
            <ul className="home-clean__editorial-list home-clean__editorial-list--dark">{copy.brands.features.map((item) => <li key={item}>{item}</li>)}</ul>
            <Link className="home-clean__button home-clean__button--light" href="/for-brands">{copy.brands.link}</Link>
          </div>
        </div>
      </section>

      <section className="home-clean__section home-clean__section--soft">
        <div className="home-clean__container">
          <div className="home-clean__section-heading">
            <p className="home-clean__eyebrow">{copy.stack.eyebrow}</p>
            <h2>{copy.stack.title}</h2>
            <p>{copy.stack.body}</p>
          </div>
          <div className="home-clean__plain-columns">
            <div><h3>{copy.stack.ownershipTitle}</h3><p>{copy.stack.ownershipBody}</p></div>
            <div><h3>{copy.stack.approvalTitle}</h3><p>{copy.stack.approvalBody}</p></div>
          </div>
          <div className="home-clean__center-link"><Link className="home-clean__text-link" href="/integrations">{copy.stack.link} <span aria-hidden="true">→</span></Link></div>
        </div>
      </section>

      <section className="home-clean__section">
        <div className="home-clean__container">
          <div className="home-clean__section-heading">
            <p className="home-clean__eyebrow">{copy.trust.eyebrow}</p>
            <h2>{copy.trust.title}</h2>
            <p>{copy.trust.body}</p>
          </div>
          <div className="home-clean__proof-grid">
            {proofImages.map((src, index) => (
              <figure key={src}>
                <Image src={src} alt={copy.trust.imageAlts[index]} width={index === 0 ? 1800 : index === 1 ? 1336 : index === 2 ? 1600 : 1114} height={index === 0 ? 1169 : index === 1 ? 742 : index === 2 ? 860 : 1282} sizes="(max-width: 620px) 100vw, 50vw" />
              </figure>
            ))}
          </div>
          <div className="home-clean__center-link"><Link className="home-clean__text-link" href="/about">{copy.trust.link} <span aria-hidden="true">→</span></Link></div>
        </div>
      </section>

      <section className="home-clean__section home-clean__section--soft">
        <div className="home-clean__container">
          <div className="home-clean__section-heading"><p className="home-clean__eyebrow">{copy.gettingStarted.eyebrow}</p><h2>{copy.gettingStarted.title}</h2></div>
          <div className="home-clean__start-grid">
            {copy.gettingStarted.items.map(([label, title, body, cta], index) => (
              <article key={label}>
                <p className="home-clean__eyebrow">{label}</p><h3>{title}</h3><p>{body}</p>
                <SmartLink className="home-clean__text-link" href={startHrefs[index]}>{cta} <span aria-hidden="true">→</span></SmartLink>
              </article>
            ))}
          </div>
          <div className="home-clean__center-link"><Link className="home-clean__text-link" href="/pricing" data-analytics-event="pricing_cta_click" data-analytics-cta-name="view_pricing_home">{copy.gettingStarted.pricingLink} <span aria-hidden="true">→</span></Link></div>
        </div>
      </section>

      <section className="home-clean__final">
        <div>
          <h2>{copy.final.title}</h2>
          <p>{copy.final.body}</p>
          <div className="home-clean__actions">
            <a className="home-clean__button home-clean__button--light" href="https://app.axy.net/onboarding">{copy.final.createAccount}</a>
            <Link className="home-clean__button home-clean__button--outline-light" href="/book-a-walkthrough#schedule">{copy.final.guidedSetup}</Link>
            <Link className="home-clean__button home-clean__button--outline-light" href="/product">{copy.final.exploreProduct}</Link>
          </div>
          <p className="home-clean__login home-clean__login--light">{copy.final.accountPrompt} <a href="https://app.axy.net/authentication">{copy.final.logIn}</a></p>
        </div>
      </section>
    </main>
  );
}
