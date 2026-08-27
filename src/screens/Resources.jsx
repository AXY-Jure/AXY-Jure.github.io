import Image from 'next/image';
import LocalizedLink from '../i18n/LocalizedLink.jsx';
import { useLocalizedCopy } from '../i18n/I18nProvider.jsx';
import resourcesCatalog from '../i18n/locales/pages/resources.js';
import styles from '../styles/resources.module.css';

function ArrowLink({ href, children, light = false }) {
  return (
    <LocalizedLink className={`${styles.textLink} ${light ? styles.textLinkLight : ''}`.trim()} href={href}>
      {children} <span aria-hidden="true">→</span>
    </LocalizedLink>
  );
}

export default function Resources() {
  const copy = useLocalizedCopy(resourcesCatalog);

  return (
    <main className={styles.page} data-screen-label="Resources" data-analytics-location="resources">
      <section className={styles.hero} aria-labelledby="resources-title">
        <div className={`${styles.shell} ${styles.heroGrid}`}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>{copy.hero.eyebrow}</p>
            <h1 id="resources-title">{copy.hero.title}</h1>
            <p className={styles.heroLead}>{copy.hero.lead}</p>
            <div className={styles.actions}>
              <LocalizedLink className={styles.primaryButtonLight} href="#featured-guide">
                {copy.hero.browse}
              </LocalizedLink>
              <ArrowLink href="/how-it-works" light>{copy.hero.howItWorks}</ArrowLink>
            </div>
          </div>

          <figure className={styles.heroFigure}>
            <Image
              src="/images/home-clean/products-on-table.webp"
              alt={copy.hero.imageAlt}
              width={1600}
              height={860}
              sizes="(max-width: 900px) 100vw, 50vw"
              loading="eager"
              fetchPriority="high"
            />
            <figcaption>{copy.hero.imageCaption}</figcaption>
          </figure>
        </div>
      </section>

      <section className={styles.featured} id="featured-guide" aria-labelledby="featured-guide-title">
        <div className={`${styles.shell} ${styles.featuredGrid}`}>
          <figure className={styles.featuredFigure}>
            <Image
              src="/images/how-it-works/capture-scan.webp"
              alt={copy.guide.imageAlt}
              width={1330}
              height={751}
              sizes="(max-width: 900px) 100vw, 48vw"
              loading="lazy"
            />
            <figcaption>{copy.guide.imageCaption}</figcaption>
          </figure>

          <div className={styles.featuredCopy}>
            <p className={`${styles.eyebrow} ${styles.eyebrowDark}`}>{copy.guide.eyebrow}</p>
            <h2 id="featured-guide-title">{copy.guide.title}</h2>
            <p className={styles.featuredLead}>{copy.guide.lead}</p>
            <ul className={styles.takeaways}>
              {copy.guide.takeaways.map((takeaway) => <li key={takeaway}>{takeaway}</li>)}
            </ul>
            <p className={styles.guideMeta}>{copy.guide.meta}</p>
            <ArrowLink href="/article">{copy.guide.action}</ArrowLink>
          </div>
        </div>
      </section>

      <section className={styles.questions} aria-labelledby="resource-questions-title">
        <div className={styles.shell}>
          <div className={styles.sectionHeading}>
            <p className={`${styles.eyebrow} ${styles.eyebrowDark}`}>{copy.questionsSection.eyebrow}</p>
            <h2 id="resource-questions-title">{copy.questionsSection.title}</h2>
            <p>{copy.questionsSection.intro}</p>
          </div>

          <div className={styles.questionGrid}>
            {copy.questionsSection.items.map((question) => (
              <article className={styles.question} key={question.number}>
                <span className={styles.questionNumber} aria-hidden="true">{question.number}</span>
                <h3>{question.title}</h3>
                <p>{question.copy}</p>
                <ArrowLink href={question.href}>{question.link}</ArrowLink>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.perspectives} aria-labelledby="resource-perspectives-title">
        <div className={styles.shell}>
          <div className={styles.perspectiveIntro}>
            <p className={styles.eyebrow}>{copy.perspectives.eyebrow}</p>
            <h2 id="resource-perspectives-title">{copy.perspectives.title}</h2>
          </div>
          <div className={styles.perspectiveGrid}>
            {copy.perspectives.items.map((perspective) => (
              <article className={styles.perspective} key={perspective.label}>
                <p className={styles.perspectiveLabel}>{perspective.label}</p>
                <h3>{perspective.title}</h3>
                <p>{perspective.copy}</p>
                <ArrowLink href={perspective.href} light>{copy.perspectives.action}</ArrowLink>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.finalCta} aria-labelledby="resources-cta-title">
        <div className={`${styles.shell} ${styles.finalCtaInner}`}>
          <div>
            <p className={styles.eyebrow}>{copy.cta.eyebrow}</p>
            <h2 id="resources-cta-title">{copy.cta.title}</h2>
            <p>{copy.cta.body}</p>
          </div>
          <div className={styles.actions}>
            <LocalizedLink className={styles.primaryButtonLight} href="/product">{copy.cta.platform}</LocalizedLink>
            <LocalizedLink className={styles.secondaryButtonLight} href="/book-a-walkthrough#schedule">{copy.cta.walkthrough}</LocalizedLink>
          </div>
        </div>
      </section>
    </main>
  );
}
