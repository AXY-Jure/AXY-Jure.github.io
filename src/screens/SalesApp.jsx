import Image from 'next/image';
import LocalizedLink from '../i18n/LocalizedLink.jsx';
import { useLocalizedCopy } from '../i18n/I18nProvider.jsx';
import salesAppCatalog from '../i18n/locales/pages/salesApp.js';
import styles from '../styles/sales-app.module.css';

function PhoneArtwork({ src, alt, height }) {
  return (
    <div className={styles.phone}>
      <div className={styles.phoneScreen}>
        <Image
          src={src}
          alt={alt}
          width={900}
          height={height}
          sizes="(max-width: 760px) 70vw, 310px"
          loading="lazy"
        />
      </div>
    </div>
  );
}

export default function SalesApp() {
  const { salesApp: copy } = useLocalizedCopy(salesAppCatalog);

  return (
    <main
      className={styles.page}
      data-screen-label="Sales App"
      data-analytics-location="sales_app"
    >
      <section className={styles.hero} aria-labelledby="sales-app-title">
        <div className={`${styles.inner} ${styles.heroGrid}`}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>{copy.hero.eyebrow}</p>
            <h1 id="sales-app-title">{copy.hero.title}</h1>
            <p className={styles.heroLead}>{copy.hero.lead}</p>
            <div className={styles.heroActions}>
              <LocalizedLink className={styles.buttonPrimary} href="/book-a-walkthrough#schedule">
                {copy.hero.guidedSetup}
              </LocalizedLink>
              <a className={styles.buttonSecondary} href="https://app.axy.net/onboarding">
                {copy.hero.createAccount}
              </a>
            </div>
            <LocalizedLink className={styles.textLink} href="/for-retailers">
              {copy.hero.retailers} <span aria-hidden="true">→</span>
            </LocalizedLink>
          </div>

          <figure className={styles.heroFigure}>
            <Image
              src="/images/sales-app/guided-conversation.webp"
              alt={copy.hero.imageAlt}
              width={1335}
              height={748}
              sizes="(max-width: 900px) 100vw, 54vw"
              priority
              fetchPriority="high"
            />
            <figcaption>{copy.hero.caption}</figcaption>
          </figure>
        </div>
      </section>

      <section className={styles.questions} aria-labelledby="three-questions-title">
        <div className={styles.inner}>
          <div className={styles.sectionIntro}>
            <p className={styles.eyebrow}>{copy.questions.eyebrow}</p>
            <h2 id="three-questions-title">{copy.questions.title}</h2>
            <p>{copy.questions.body}</p>
          </div>
          <ol className={styles.questionList}>
            {copy.questions.items.map((question) => (
              <li key={question.number}>
                <span className={styles.number}>{question.number}</span>
                <h3>{question.title}</h3>
                <p>{question.copy}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className={styles.feature} aria-labelledby="capture-title">
        <div className={`${styles.inner} ${styles.featureGrid} ${styles.mediaLeft}`}>
          <div className={styles.featureCopy}>
            <p className={styles.eyebrow}>{copy.capture.eyebrow}</p>
            <h2 id="capture-title">{copy.capture.title}</h2>
            <p>{copy.capture.body}</p>
            <ul className={styles.editorialList}>
              {copy.capture.items.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
          <figure className={styles.landscapeFigure}>
            <Image
              src="/images/sales-app/capture-scan.webp"
              alt={copy.capture.imageAlt}
              width={1330}
              height={751}
              sizes="(max-width: 900px) 100vw, 52vw"
              loading="lazy"
            />
            <figcaption>{copy.capture.caption}</figcaption>
          </figure>
        </div>
      </section>

      <section className={`${styles.feature} ${styles.dark}`} aria-labelledby="suggest-title">
        <div className={`${styles.inner} ${styles.featureGrid}`}>
          <div className={styles.featureCopy}>
            <p className={styles.eyebrow}>{copy.suggest.eyebrow}</p>
            <h2 id="suggest-title">{copy.suggest.title}</h2>
            <p>{copy.suggest.body}</p>
            <blockquote>
              <strong>{copy.suggest.quoteStrong}</strong>
              <span>{copy.suggest.quote}</span>
            </blockquote>
            <p className={styles.finePrint}>{copy.suggest.note}</p>
          </div>
          <figure className={styles.phoneFigure}>
            <PhoneArtwork
              src="/images/sales-app/suggested-product.webp"
              alt={copy.suggest.imageAlt}
              height={1948}
            />
            <figcaption>{copy.suggest.caption}</figcaption>
          </figure>
        </div>
      </section>

      <section className={`${styles.feature} ${styles.warm}`} aria-labelledby="action-title">
        <div className={`${styles.inner} ${styles.featureGrid} ${styles.mediaLeft}`}>
          <div className={styles.featureCopy}>
            <p className={styles.eyebrow}>{copy.action.eyebrow}</p>
            <h2 id="action-title">{copy.action.title}</h2>
            <p>{copy.action.body}</p>
            <ul className={styles.editorialList}>
              {copy.action.items.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
          <figure className={styles.uiFigure}>
            <Image
              src="/images/sales-app/next-action.webp"
              alt={copy.action.imageAlt}
              width={900}
              height={1067}
              sizes="(max-width: 900px) 100vw, 48vw"
              loading="lazy"
            />
            <figcaption>{copy.action.caption}</figcaption>
          </figure>
        </div>
      </section>

      <section className={styles.feature} aria-labelledby="availability-title">
        <div className={`${styles.inner} ${styles.featureGrid}`}>
          <div className={styles.featureCopy}>
            <p className={styles.eyebrow}>{copy.availability.eyebrow}</p>
            <h2 id="availability-title">{copy.availability.title}</h2>
            <p>{copy.availability.body}</p>
            <p className={styles.callout}>{copy.availability.callout}</p>
          </div>
          <figure className={styles.uiFigure}>
            <Image
              src="/images/sales-app/availability.webp"
              alt={copy.availability.imageAlt}
              width={1000}
              height={818}
              sizes="(max-width: 900px) 100vw, 48vw"
              loading="lazy"
            />
            <figcaption>{copy.availability.caption}</figcaption>
          </figure>
        </div>
      </section>

      <section className={`${styles.feature} ${styles.mist}`} aria-labelledby="analytics-title">
        <div className={`${styles.inner} ${styles.featureGrid} ${styles.mediaLeft}`}>
          <div className={styles.featureCopy}>
            <p className={styles.eyebrow}>{copy.analytics.eyebrow}</p>
            <h2 id="analytics-title">{copy.analytics.title}</h2>
            <p>{copy.analytics.body}</p>
            <ul className={styles.editorialList}>
              {copy.analytics.items.map((item) => <li key={item}>{item}</li>)}
            </ul>
            <p className={styles.finePrint}>{copy.analytics.note}</p>
          </div>
          <figure className={styles.phoneFigure}>
            <PhoneArtwork
              src="/images/sales-app/mobile-analytics.webp"
              alt={copy.analytics.imageAlt}
              height={1955}
            />
            <figcaption>{copy.analytics.caption}</figcaption>
          </figure>
        </div>
      </section>

      <section className={styles.faq} aria-labelledby="sales-app-questions-title">
        <div className={styles.faqInner}>
          <div className={styles.sectionIntro}>
            <p className={styles.eyebrow}>{copy.faq.eyebrow}</p>
            <h2 id="sales-app-questions-title">{copy.faq.title}</h2>
          </div>
          <div className={styles.faqList}>
            {copy.faq.items.map((item) => (
              <details key={item.question}>
                <summary>
                  <span>{item.question}</span>
                  <span className={styles.faqMark} aria-hidden="true">+</span>
                </summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.finalCta} aria-labelledby="sales-app-final-title">
        <div className={styles.finalInner}>
          <p className={styles.eyebrow}>{copy.final.eyebrow}</p>
          <h2 id="sales-app-final-title">{copy.final.title}</h2>
          <p>{copy.final.body}</p>
          <div className={styles.finalActions}>
            <a className={styles.buttonLight} href="https://app.axy.net/onboarding">{copy.final.createAccount}</a>
            <LocalizedLink
              className={styles.buttonOutlineLight}
              href="/pricing"
              data-analytics-event="pricing_cta_click"
              data-analytics-cta-name="view_pricing_sales_app"
            >
              {copy.final.pricing}
            </LocalizedLink>
          </div>
          <LocalizedLink className={styles.finalLink} href="/for-retailers">
            {copy.final.retailers} <span aria-hidden="true">→</span>
          </LocalizedLink>
        </div>
      </section>
    </main>
  );
}
