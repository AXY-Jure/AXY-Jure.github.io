import Image from 'next/image';
import LocalizedLink from '../i18n/LocalizedLink.jsx';
import { useLocalizedCopy } from '../i18n/I18nProvider.jsx';
import articleCatalog from '../i18n/locales/pages/article.js';
import styles from '../styles/article.module.css';

function ArrowLink({ href, children, light = false }) {
  return (
    <LocalizedLink className={`${styles.textLink} ${light ? styles.textLinkLight : ''}`.trim()} href={href}>
      {children} <span aria-hidden="true">→</span>
    </LocalizedLink>
  );
}

function SectionHeading({ index, id, title, children }) {
  return (
    <header className={styles.sectionHeading}>
      <p className={styles.sectionIndex} aria-hidden="true">{index}</p>
      <h2 id={id}>{title}</h2>
      {children ? <p className={styles.sectionLead}>{children}</p> : null}
    </header>
  );
}

export default function Article() {
  const copy = useLocalizedCopy(articleCatalog);

  return (
    <main className={styles.page} data-screen-label="Article: Retail Clienteling" data-analytics-location="article">
      <article>
        <header className={styles.hero}>
          <div className={`${styles.shell} ${styles.heroGrid}`}>
            <div className={styles.heroCopy}>
              <nav className={styles.breadcrumbs} aria-label={copy.hero.breadcrumbAria}>
                <LocalizedLink href="/">{copy.hero.home}</LocalizedLink>
                <span aria-hidden="true">/</span>
                <LocalizedLink href="/resources">{copy.hero.resources}</LocalizedLink>
                <span aria-hidden="true">/</span>
                <span aria-current="page">{copy.hero.current}</span>
              </nav>

              <p className={styles.eyebrow}>{copy.hero.eyebrow}</p>
              <h1>{copy.hero.title}</h1>
              <p className={styles.heroLead}>{copy.hero.lead}</p>

              <div className={styles.byline}>
                <span className={styles.authorMark} aria-hidden="true">JM</span>
                <div>
                  <p className={styles.authorName}>Jure Malalan</p>
                  <p>{copy.hero.authorRole}</p>
                </div>
                <div className={styles.articleMeta}>
                  <time dateTime="2026-06-18">{copy.hero.published}</time>
                  <span aria-hidden="true">·</span>
                  <time dateTime="2026-07-14">{copy.hero.updated}</time>
                  <span aria-hidden="true">·</span>
                  <span>{copy.hero.readTime}</span>
                </div>
              </div>
            </div>

            <figure className={styles.heroFigure}>
              <Image
                src="/images/article/clienteling-context.webp"
                alt={copy.hero.imageAlt}
                width={1536}
                height={1024}
                sizes="(max-width: 900px) 100vw, 50vw"
                loading="eager"
                fetchPriority="high"
              />
              <figcaption>{copy.hero.imageCaption}</figcaption>
            </figure>

            <div className={styles.directAnswer}>
              <p className={styles.directLabel}>{copy.hero.directLabel}</p>
              <p>{copy.hero.directAnswer}</p>
            </div>
          </div>
        </header>

        <section className={styles.takeawaySection} aria-labelledby="article-takeaways-title">
          <div className={styles.shell}>
            <h2 className={styles.visuallyHidden} id="article-takeaways-title">{copy.takeawaysTitle}</h2>
            <ol className={styles.takeaways}>
              {copy.takeaways.map((takeaway, index) => (
                <li key={takeaway}>
                  <span aria-hidden="true">0{index + 1}</span>
                  <p>{takeaway}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <div className={`${styles.shell} ${styles.articleFrame}`}>
          <aside className={styles.tocRail}>
            <nav className={styles.toc} aria-labelledby="article-contents-title">
              <p className={styles.tocTitle} id="article-contents-title">{copy.contentsTitle}</p>
              <ol>
                {copy.contents.map(([id, label], index) => (
                  <li key={id}>
                    <a href={`#${id}`}>
                      <span aria-hidden="true">0{index + 1}</span>
                      {label}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          </aside>

          <div className={styles.articleBody}>
            <section className={styles.chapter} id="meaning" aria-labelledby="meaning-title">
              <SectionHeading index="01" id="meaning-title" title={copy.meaning.title}>
                {copy.meaning.lead}
              </SectionHeading>

              <p>{copy.meaning.body}</p>

              <div className={styles.comparison}>
                {copy.meaning.comparison.map((comparison, index) => (
                  <article className={index === 1 ? styles.comparisonEmphasis : undefined} key={comparison.label}>
                    <p className={styles.comparisonLabel}>{comparison.label}</p>
                    <h3>{comparison.title}</h3>
                    <ul>{comparison.items.map((item) => <li key={item}>{item}</li>)}</ul>
                  </article>
                ))}
              </div>

              <p className={styles.editorialNote}>{copy.meaning.note}</p>
            </section>

            <section className={styles.chapter} id="before-sale" aria-labelledby="before-sale-title">
              <SectionHeading index="02" id="before-sale-title" title={copy.beforeSale.title}>
                {copy.beforeSale.lead}
              </SectionHeading>

              <p>{copy.beforeSale.body}</p>

              <ol className={styles.journey} aria-label={copy.beforeSale.journeyAria}>
                {copy.beforeSale.journey.map(([number, title, itemCopy], index) => (
                  <li className={index > 0 && index < 5 ? styles.journeyContext : ''} key={number}>
                    <span>{number}</span>
                    <h3>{title}</h3>
                    <p>{itemCopy}</p>
                  </li>
                ))}
              </ol>

              <div className={styles.captureBlock}>
                <div>
                  <p className={styles.eyebrowDark}>{copy.beforeSale.captureEyebrow}</p>
                  <h3>{copy.beforeSale.captureTitle}</h3>
                  <p>{copy.beforeSale.captureBody}</p>
                </div>
                <ol className={styles.captureList}>
                  {copy.beforeSale.captureItems.map(([title, itemCopy], index) => (
                    <li key={title}>
                      <span aria-hidden="true">0{index + 1}</span>
                      <div>
                        <h4>{title}</h4>
                        <p>{itemCopy}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </section>

            <section className={styles.chapter} id="next-action" aria-labelledby="next-action-title">
              <SectionHeading index="03" id="next-action-title" title={copy.nextAction.title}>
                {copy.nextAction.lead}
              </SectionHeading>

              <blockquote className={styles.caseNote}>
                <p>{copy.nextAction.case}</p>
              </blockquote>

              <dl className={styles.followUpFields}>
                {copy.nextAction.fields.map(([term, description]) => (
                  <div key={term}>
                    <dt>{term}</dt>
                    <dd>{description}</dd>
                  </div>
                ))}
              </dl>

              <p className={styles.finePrint}>{copy.nextAction.note}</p>
            </section>

            <section className={styles.chapter} id="measure" aria-labelledby="measure-title">
              <SectionHeading index="04" id="measure-title" title={copy.measure.title}>
                {copy.measure.lead}
              </SectionHeading>

              <div className={styles.measureGrid}>
                {copy.measure.items.map((measure, index) => (
                  <article key={measure.title}>
                    <span aria-hidden="true">0{index + 1}</span>
                    <h3>{measure.title}</h3>
                    <p>{measure.copy}</p>
                  </article>
                ))}
              </div>

              <p>{copy.measure.body}</p>
              <p className={styles.finePrint}>{copy.measure.note}</p>
            </section>

            <section className={styles.chapter} id="framework" aria-labelledby="framework-title">
              <SectionHeading index="05" id="framework-title" title={copy.framework.title}>
                {copy.framework.lead}
              </SectionHeading>

              <div className={styles.frameworkGrid}>
                <article>
                  <p className={styles.frameworkLabel}>{copy.framework.mistakesLabel}</p>
                  <ol className={styles.mistakeList}>
                    {copy.framework.mistakes.map((mistake, index) => (
                      <li key={mistake}>
                        <span aria-hidden="true">0{index + 1}</span>
                        <p>{mistake}</p>
                      </li>
                    ))}
                  </ol>
                </article>
                <article className={styles.checklistPanel}>
                  <p className={styles.frameworkLabel}>{copy.framework.checklistLabel}</p>
                  <ul className={styles.checklist}>
                    {copy.framework.checklist.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                </article>
              </div>

              <p className={styles.finePrint}>{copy.framework.note}</p>
            </section>
          </div>
        </div>

        <section className={styles.axySection} id="axy-workflow" aria-labelledby="axy-workflow-title">
          <div className={styles.shell}>
            <div className={styles.axyIntro}>
              <p className={styles.eyebrow}>{copy.axy.eyebrow}</p>
              <h2 id="axy-workflow-title">{copy.axy.title}</h2>
              <p>{copy.axy.body}</p>
              <ArrowLink href="/sales-app" light>{copy.axy.action}</ArrowLink>
            </div>
            <ol className={styles.axySteps}>
              {copy.axy.steps.map(([title, body], index) => (
                <li key={title}>
                  <span aria-hidden="true">0{index + 1}</span>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className={styles.faqSection} id="questions" aria-labelledby="questions-title">
          <div className={`${styles.shell} ${styles.faqGrid}`}>
            <div className={styles.faqIntro}>
              <p className={`${styles.eyebrow} ${styles.eyebrowDark}`}>{copy.faq.eyebrow}</p>
              <h2 id="questions-title">{copy.faq.title}</h2>
            </div>
            <div className={styles.faqs}>
              {copy.faq.items.map((faq) => (
                <details key={faq.question}>
                  <summary>
                    {faq.question}
                    <span aria-hidden="true">+</span>
                  </summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.furtherReading} aria-labelledby="further-reading-title">
          <div className={styles.shell}>
            <div className={styles.furtherHeader}>
              <p className={`${styles.eyebrow} ${styles.eyebrowDark}`}>{copy.further.eyebrow}</p>
              <h2 id="further-reading-title">{copy.further.title}</h2>
              <p>{copy.further.body}</p>
            </div>
            <div className={styles.relatedGrid}>
              {copy.further.paths.map((path, index) => (
                <article key={path.href}>
                  <span aria-hidden="true">0{index + 1}</span>
                  <p className={styles.relatedLabel}>{path.label}</p>
                  <h3>{path.title}</h3>
                  <ArrowLink href={path.href}>{copy.further.action}</ArrowLink>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.authorSection} aria-labelledby="author-note-title">
          <div className={`${styles.shell} ${styles.authorInner}`}>
            <span className={styles.authorMarkLarge} aria-hidden="true">JM</span>
            <div>
              <p className={styles.authorKicker}>{copy.author.eyebrow}</p>
              <h2 id="author-note-title">Jure Malalan</h2>
              <p>{copy.author.body}</p>
            </div>
          </div>
        </section>

        <section className={styles.finalCta} aria-labelledby="article-cta-title">
          <div className={`${styles.shell} ${styles.finalCtaInner}`}>
            <div>
              <p className={styles.eyebrow}>{copy.cta.eyebrow}</p>
              <h2 id="article-cta-title">{copy.cta.title}</h2>
              <p>{copy.cta.body}</p>
            </div>
            <div className={styles.actions}>
              <LocalizedLink className={styles.primaryButtonLight} href="/book-a-walkthrough#schedule">{copy.cta.primary}</LocalizedLink>
              <LocalizedLink className={styles.secondaryButtonLight} href="/sales-app">{copy.cta.secondary}</LocalizedLink>
            </div>
          </div>
        </section>
      </article>
    </main>
  );
}
