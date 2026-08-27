import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/about.module.css';

const JOURNEY = [
  {
    number: '01',
    title: 'Capture',
    copy: 'Sales activity while it happens.',
    image: '/images/about/sales-app-customer-overview.webp',
    alt: 'AXY Sales App customer overview displayed on an iPhone',
  },
  {
    number: '02',
    title: 'Continue',
    copy: 'Customer context after the visit.',
    image: '/images/about/customer-app-home.webp',
    alt: 'AXY Customer App home screen displayed on an iPhone',
  },
  {
    number: '03',
    title: 'Understand',
    copy: 'Product and demand context for the next decision.',
    image: '/images/about/mobile-analytics.webp',
    alt: 'AXY mobile analytics displayed on an iPhone',
  },
];

const PRINCIPLES = [
  ['Retailer relationship first', 'AXY strengthens the retailer’s customer relationship. It never competes with it.'],
  ['Permission-based collaboration', 'Sharing between partners is explicit, scoped and reversible.'],
  ['Practical workflows', 'If a workflow slows the sales floor, it does not ship.'],
  ['Structured context', 'Activity becomes useful when teams can act on it.'],
];

export default function About() {
  return (
    <main className={styles.page} data-screen-label="About AXY">
      <section className={styles.hero} aria-labelledby="about-title">
        <div className={`${styles.inner} ${styles.heroGrid}`}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>About AXY</p>
            <h1 id="about-title">Built on the shop floor, not in a slide deck.</h1>
            <p className={styles.heroLead}>
              AXY connects the work happening in stores with the relationships and product decisions that follow.
            </p>
            <div className={styles.actions}>
              <Link className={styles.primaryButton} href="/book-a-walkthrough#schedule">
                Get guided setup
              </Link>
              <Link className={styles.textLinkLight} href="/how-it-works">
                See how AXY works <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>

          <div className={styles.heroMosaic}>
            <figure className={`${styles.heroFigure} ${styles.heroFigureMain}`}>
              <Image
                src="/images/about/vip-room.webp"
                alt="The private VIP room prepared for a customer visit"
                width={894}
                height={661}
                sizes="(max-width: 820px) 100vw, 48vw"
                loading="eager"
                fetchPriority="high"
              />
              <figcaption>The visit</figcaption>
            </figure>
            <figure className={styles.heroFigure}>
              <Image
                src="/images/about/customer-consultation.webp"
                alt="A retail specialist and customer considering jewellery together"
                width={720}
                height={900}
                sizes="(max-width: 620px) 100vw, 23vw"
                loading="eager"
              />
              <figcaption>The relationship</figcaption>
            </figure>
            <figure className={styles.heroFigure}>
              <Image
                src="/images/about/product-craft.webp"
                alt="A jeweller fitting a handcrafted ring at a workbench"
                width={720}
                height={900}
                sizes="(max-width: 620px) 100vw, 23vw"
                loading="eager"
              />
              <figcaption>The product</figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className={styles.journeySection} aria-labelledby="about-journey-title">
        <div className={styles.inner}>
          <div className={styles.sectionHeading}>
            <div>
              <p className={`${styles.eyebrow} ${styles.eyebrowDark}`}>The missing layer</p>
              <h2 id="about-journey-title">Retail remembers. Most systems do not.</h2>
            </div>
            <p>
              Store teams learn what customers want, what they compare and what gets in the way. AXY keeps that context
              connected instead of letting it disappear at closing time.
            </p>
          </div>

          <div className={styles.journeyGrid}>
            {JOURNEY.map((item) => (
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
            CRMs model pipelines. ERPs model stock. AXY connects the retail journey between them.
          </p>
        </div>
      </section>

      <section className={styles.principlesSection} aria-labelledby="about-principles-title">
        <div className={`${styles.inner} ${styles.principlesGrid}`}>
          <div className={styles.principlesIntro}>
            <p className={styles.eyebrow}>How we build</p>
            <h2 id="about-principles-title">Four practical rules.</h2>
            <p>Less ceremony. More context that helps the next person do the right thing.</p>
          </div>
          <ol className={styles.principlesList}>
            {PRINCIPLES.map(([title, copy], index) => (
              <li key={title}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{copy}</p>
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
              alt="Jure Malalan, founder of AXY"
              width={816}
              height={1088}
              sizes="(max-width: 820px) 88vw, 36vw"
              loading="lazy"
            />
            <figcaption>
              <span>Jure Malalan · Founder, AXY</span>
            </figcaption>
          </figure>

          <div className={styles.founderCopy}>
            <p className={`${styles.eyebrow} ${styles.eyebrowDark}`}>Founder</p>
            <h2 id="about-founder-title">First-hand retail experience, translated into software.</h2>
            <p>
              AXY is led by Jure Malalan. Years spent inside premium retail, service and brand relationships shaped a
              product built around the work teams actually do.
            </p>
            <dl className={styles.companyFacts}>
              <div>
                <dt>Company</dt>
                <dd>XY Sales d.o.o.</dd>
              </div>
              <div>
                <dt>Based in</dt>
                <dd>Zagreb, Croatia</dd>
              </div>
              <div>
                <dt>Product status</dt>
                <dd>Live, Beta and Planned — stated clearly</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <section className={styles.ctaSection} aria-labelledby="about-cta-title">
        <div className={`${styles.inner} ${styles.ctaInner}`}>
          <div>
            <p className={styles.eyebrow}>Start with one workflow</p>
            <h2 id="about-cta-title">See how AXY fits your retail network.</h2>
          </div>
          <div className={styles.actions}>
            <Link className={styles.primaryButton} href="/book-a-walkthrough#schedule">
              Get guided setup
            </Link>
            <Link className={styles.secondaryButton} href="/how-it-works">
              See how AXY works
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
