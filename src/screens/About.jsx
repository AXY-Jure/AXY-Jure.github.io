import Image from 'next/image';
import LocalizedLink from '../i18n/LocalizedLink.jsx';
import { useLocalizedCopy } from '../i18n/I18nProvider.jsx';
import aboutCatalog from '../i18n/locales/pages/about.js';
import styles from '../styles/about.module.css';

export default function About() {
  const copy = useLocalizedCopy(aboutCatalog);

  return (
    <main className={styles.page} data-screen-label="About AXY">
      <section className={styles.hero} aria-labelledby="about-title">
        <div className={`${styles.inner} ${styles.heroGrid}`}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>{copy.hero.eyebrow}</p>
            <h1 id="about-title">{copy.hero.title}</h1>
            <p className={styles.heroLead}>{copy.hero.lead}</p>
            <div className={styles.actions}>
              <LocalizedLink className={styles.primaryButton} href="/book-a-walkthrough#schedule">
                {copy.hero.primaryAction}
              </LocalizedLink>
              <LocalizedLink className={styles.textLinkLight} href="/how-it-works">
                {copy.hero.secondaryAction} <span aria-hidden="true">→</span>
              </LocalizedLink>
            </div>
          </div>

          <div className={styles.heroMosaic}>
            <figure className={`${styles.heroFigure} ${styles.heroFigureMain}`}>
              <Image
                src="/images/about/vip-room.webp"
                alt={copy.hero.figures.visit.alt}
                width={894}
                height={661}
                sizes="(max-width: 820px) 100vw, 48vw"
                loading="eager"
                fetchPriority="high"
              />
              <figcaption>{copy.hero.figures.visit.caption}</figcaption>
            </figure>
            <figure className={styles.heroFigure}>
              <Image
                src="/images/about/customer-consultation.webp"
                alt={copy.hero.figures.relationship.alt}
                width={720}
                height={900}
                sizes="(max-width: 620px) 100vw, 23vw"
                loading="eager"
              />
              <figcaption>{copy.hero.figures.relationship.caption}</figcaption>
            </figure>
            <figure className={styles.heroFigure}>
              <Image
                src="/images/about/product-craft.webp"
                alt={copy.hero.figures.product.alt}
                width={720}
                height={900}
                sizes="(max-width: 620px) 100vw, 23vw"
                loading="eager"
              />
              <figcaption>{copy.hero.figures.product.caption}</figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className={styles.journeySection} aria-labelledby="about-journey-title">
        <div className={styles.inner}>
          <div className={styles.sectionHeading}>
            <div>
              <p className={`${styles.eyebrow} ${styles.eyebrowDark}`}>{copy.journeySection.eyebrow}</p>
              <h2 id="about-journey-title">{copy.journeySection.title}</h2>
            </div>
            <p>{copy.journeySection.intro}</p>
          </div>

          <div className={styles.journeyGrid}>
            {copy.journeySection.journey.map((item) => (
              <figure className={styles.journeyFigure} key={item.title}>
                <div className={styles.journeyImage}>
                  <div className={styles.iphoneMockup} data-device-mockup="iphone">
                    <div className={styles.iphoneScreen}>
                      <Image
                        src={item.image}
                        alt={item.alt}
                        width={720}
                        height={1560}
                        sizes="(max-width: 680px) 48vw, (max-width: 980px) 25vw, 14rem"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
                <figcaption>
                  <span>{item.number}</span>
                  <strong>{item.title}</strong>
                  <small>{item.copy}</small>
                </figcaption>
              </figure>
            ))}
          </div>

          <p className={styles.pullQuote}>
            {copy.journeySection.quote}
          </p>
        </div>
      </section>

      <section className={styles.principlesSection} aria-labelledby="about-principles-title">
        <div className={`${styles.inner} ${styles.principlesGrid}`}>
          <div className={styles.principlesIntro}>
            <p className={styles.eyebrow}>{copy.principles.eyebrow}</p>
            <h2 id="about-principles-title">{copy.principles.title}</h2>
            <p>{copy.principles.intro}</p>
          </div>
          <ol className={styles.principlesList}>
            {copy.principles.items.map(([title, itemCopy], index) => (
              <li key={title}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{itemCopy}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className={styles.founderSection} aria-labelledby="about-founder-title">
        <div className={`${styles.inner} ${styles.founderGrid}`}>
          <figure className={styles.founderPortrait}>
            <Image
              src="/images/about/jure-malalan.webp"
              alt={copy.founder.imageAlt}
              width={816}
              height={1088}
              sizes="(max-width: 820px) 88vw, 36vw"
              loading="lazy"
            />
            <figcaption>
              <span>{copy.founder.imageCaption}</span>
            </figcaption>
          </figure>

          <div className={styles.founderCopy}>
            <p className={`${styles.eyebrow} ${styles.eyebrowDark}`}>{copy.founder.eyebrow}</p>
            <h2 id="about-founder-title">{copy.founder.title}</h2>
            <p>{copy.founder.body}</p>
            <dl className={styles.companyFacts}>
              {copy.founder.facts.map(([term, description]) => (
                <div key={term}>
                  <dt>{term}</dt>
                  <dd>{description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className={styles.ctaSection} aria-labelledby="about-cta-title">
        <div className={`${styles.inner} ${styles.ctaInner}`}>
          <div>
            <p className={styles.eyebrow}>{copy.cta.eyebrow}</p>
            <h2 id="about-cta-title">{copy.cta.title}</h2>
          </div>
          <div className={styles.actions}>
            <LocalizedLink className={styles.primaryButton} href="/book-a-walkthrough#schedule">
              {copy.cta.primaryAction}
            </LocalizedLink>
            <LocalizedLink className={styles.secondaryButton} href="/how-it-works">
              {copy.cta.secondaryAction}
            </LocalizedLink>
          </div>
        </div>
      </section>
    </main>
  );
}
