import Image from 'next/image';
import LocalizedLink from '../i18n/LocalizedLink.jsx';
import { useLocalizedCopy } from '../i18n/I18nProvider.jsx';
import backOfficeCatalog from '../i18n/locales/pages/backOffice.js';
import styles from '../styles/back-office.module.css';

export default function BackOffice() {
  const { backOffice: copy } = useLocalizedCopy(backOfficeCatalog);

  return (
    <main
      className={styles.page}
      data-screen-label="Back Office"
      data-analytics-location="back_office"
    >
      <section className={styles.hero} aria-labelledby="back-office-title">
        <div className={`${styles.inner} ${styles.heroGrid}`}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>{copy.hero.eyebrow}</p>
            <h1 id="back-office-title">{copy.hero.title}</h1>
            <p className={styles.heroLead}>{copy.hero.lead}</p>
            <div className={styles.heroActions}>
              <a className={styles.buttonPrimary} href="https://app.axy.net/onboarding">
                {copy.hero.createAccount}
              </a>
              <LocalizedLink className={styles.buttonSecondary} href="/book-a-walkthrough#schedule">
                {copy.hero.guidedSetup}
              </LocalizedLink>
            </div>
            <LocalizedLink className={styles.textLink} href="/integrations">
              {copy.hero.integrations} <span aria-hidden="true">→</span>
            </LocalizedLink>
          </div>

          <figure className={styles.heroFigure}>
            <Image
              src="/images/back-office/hero-management-hub.webp"
              alt={copy.hero.imageAlt}
              width={1536}
              height={1024}
              sizes="(max-width: 900px) 100vw, 58vw"
              priority
              fetchPriority="high"
            />
            <figcaption>{copy.hero.caption}</figcaption>
          </figure>
        </div>
      </section>

      <section className={styles.questions} aria-labelledby="management-workspace-title">
        <div className={styles.inner}>
          <div className={styles.sectionIntro}>
            <p className={styles.eyebrow}>{copy.management.eyebrow}</p>
            <h2 id="management-workspace-title">{copy.management.title}</h2>
            <p>{copy.management.body}</p>
          </div>
          <ol className={styles.questionList}>
            {copy.management.areas.map((area) => (
              <li key={area.number}>
                <span className={styles.number}>{area.number}</span>
                <h3>{area.title}</h3>
                <p>{area.copy}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className={styles.feature} aria-labelledby="partner-catalogue-title">
        <div className={`${styles.inner} ${styles.featureGrid}`}>
          <div className={styles.featureCopy}>
            <p className={styles.eyebrow}>{copy.catalogue.eyebrow}</p>
            <h2 id="partner-catalogue-title">{copy.catalogue.title}</h2>
            <p>{copy.catalogue.body}</p>
            <ol className={styles.catalogueFlow}>
              {copy.catalogue.steps.map((step, index) => (
                <li key={step.title}>
                  <span className={styles.number}>0{index + 1}</span>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.copy}</p>
                  </div>
                </li>
              ))}
            </ol>
            <p className={styles.finePrint}>{copy.catalogue.note}</p>
          </div>
          <figure className={styles.productFigure}>
            <Image
              src="/images/back-office/product-record.webp"
              alt={copy.catalogue.imageAlt}
              width={768}
              height={1432}
              sizes="(max-width: 760px) 72vw, 390px"
              loading="lazy"
            />
            <figcaption>{copy.catalogue.caption}</figcaption>
          </figure>
        </div>
      </section>

      <section className={`${styles.feature} ${styles.mist}`} aria-labelledby="records-title">
        <div className={styles.inner}>
          <div className={styles.wideIntro}>
            <p className={styles.eyebrow}>{copy.records.eyebrow}</p>
            <h2 id="records-title">{copy.records.title}</h2>
            <p>{copy.records.body}</p>
          </div>
          <div className={styles.recordGrid}>
            {copy.records.groups.map((group, index) => (
              <article key={group.title}>
                <span className={styles.number}>0{index + 1}</span>
                <h3>{group.title}</h3>
                <p>{group.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.feature} ${styles.dark}`} aria-labelledby="stock-order-title">
        <div className={styles.inner}>
          <div className={styles.wideIntro}>
            <p className={styles.eyebrow}>{copy.orders.eyebrow}</p>
            <h2 id="stock-order-title">{copy.orders.title}</h2>
            <p>{copy.orders.body}</p>
          </div>

          <figure className={styles.orderFigure}>
            <Image
              src="/images/back-office/orders.webp"
              alt={copy.orders.imageAlt}
              width={1400}
              height={629}
              sizes="(max-width: 1180px) 100vw, 1120px"
              loading="lazy"
            />
            <figcaption>{copy.orders.caption}</figcaption>
          </figure>

          <ol className={styles.processList}>
            {copy.orders.steps.map((step) => (
              <li key={step.number}>
                <span className={styles.number}>{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.copy}</p>
              </li>
            ))}
          </ol>
          <p className={styles.darkNote}>{copy.orders.note}</p>
        </div>
      </section>

      <section className={`${styles.feature} ${styles.mist}`} aria-labelledby="profile-content-title">
        <div className={`${styles.inner} ${styles.coordinationGrid}`}>
          <div className={styles.coordinationCopy}>
            <p className={styles.eyebrow}>{copy.profile.eyebrow}</p>
            <h2 id="profile-content-title">{copy.profile.title}</h2>
            <p>{copy.profile.body}</p>
            <ol className={styles.partnerFlow}>
              {copy.profile.steps.map((step) => (
                <li key={step.number}>
                  <span className={styles.number}>{step.number}</span>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.copy}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className={styles.permissionPanel}>
            <p className={styles.panelLabel}>{copy.profile.panelLabel}</p>
            <dl>
              {copy.profile.permissions.map((permission) => (
                <div key={permission.term}>
                  <dt>{permission.term}</dt>
                  <dd>{permission.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className={`${styles.feature} ${styles.warm}`} aria-labelledby="analysis-title">
        <div className={styles.inner}>
          <div className={styles.decisionIntro}>
            <div>
              <p className={styles.eyebrow}>{copy.analysis.eyebrow}</p>
              <h2 id="analysis-title">{copy.analysis.title}</h2>
            </div>
            <p>{copy.analysis.body}</p>
          </div>

          <figure className={styles.performanceFigure}>
            <Image
              src="/images/back-office/performance.webp"
              alt={copy.analysis.imageAlt}
              width={2240}
              height={1173}
              sizes="(max-width: 1180px) 100vw, 1120px"
              loading="lazy"
            />
            <figcaption>{copy.analysis.caption}</figcaption>
          </figure>

          <ul className={styles.decisionList}>
            {copy.analysis.questions.map((question) => <li key={question}>{question}</li>)}
          </ul>
          <p className={styles.analysisNote}>{copy.analysis.note}</p>
        </div>
      </section>

      <section className={styles.connect} aria-labelledby="connect-title">
        <div className={`${styles.inner} ${styles.connectGrid}`}>
          <div>
            <p className={styles.eyebrow}>{copy.connect.eyebrow}</p>
            <h2 id="connect-title">{copy.connect.title}</h2>
          </div>
          <div className={styles.connectCopy}>
            <p>{copy.connect.body}</p>
            <dl className={styles.systemList}>
              {copy.connect.systems.map((system) => (
                <div key={system.term}>
                  <dt>{system.term}</dt>
                  <dd>{system.description}</dd>
                </div>
              ))}
            </dl>
            <p className={styles.finePrint}>{copy.connect.note}</p>
            <LocalizedLink className={styles.inlineLink} href="/integrations">
              {copy.connect.review} <span aria-hidden="true">→</span>
            </LocalizedLink>
          </div>
        </div>

        <div className={`${styles.inner} ${styles.audienceGrid}`}>
          <article>
            <p className={styles.eyebrow}>{copy.connect.retailersEyebrow}</p>
            <h3>{copy.connect.retailersTitle}</h3>
            <LocalizedLink className={styles.inlineLink} href="/for-retailers">
              {copy.connect.retailersLink} <span aria-hidden="true">→</span>
            </LocalizedLink>
          </article>
          <article>
            <p className={styles.eyebrow}>{copy.connect.brandsEyebrow}</p>
            <h3>{copy.connect.brandsTitle}</h3>
            <LocalizedLink className={styles.inlineLink} href="/for-brands">
              {copy.connect.brandsLink} <span aria-hidden="true">→</span>
            </LocalizedLink>
          </article>
        </div>
      </section>

      <section className={styles.faq} aria-labelledby="back-office-questions-title">
        <div className={styles.faqInner}>
          <div className={styles.sectionIntro}>
            <p className={styles.eyebrow}>{copy.faq.eyebrow}</p>
            <h2 id="back-office-questions-title">{copy.faq.title}</h2>
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

      <section className={styles.finalCta} aria-labelledby="back-office-final-title">
        <div className={styles.finalInner}>
          <p className={styles.eyebrow}>{copy.final.eyebrow}</p>
          <h2 id="back-office-final-title">{copy.final.title}</h2>
          <p>{copy.final.body}</p>
          <div className={styles.finalActions}>
            <a className={styles.buttonLight} href="https://app.axy.net/onboarding">
              {copy.final.createAccount}
            </a>
            <LocalizedLink className={styles.buttonOutlineLight} href="/book-a-walkthrough#schedule">
              {copy.final.guidedSetup}
            </LocalizedLink>
          </div>
        </div>
      </section>
    </main>
  );
}
