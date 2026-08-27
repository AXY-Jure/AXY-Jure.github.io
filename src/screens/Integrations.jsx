import Image from 'next/image';
import LocalizedLink from '../i18n/LocalizedLink.jsx';
import { useLocalizedCopy } from '../i18n/I18nProvider.jsx';
import integrationsCatalog from '../i18n/locales/pages/integrations.js';
import styles from '../styles/integrations.module.css';

function Architecture({ copy }) {
  return (
    <figure
      className={styles.architecture}
      aria-labelledby="integration-architecture-title"
      data-integration-architecture="shared-model"
    >
      <div className={styles.architectureHeader}>
        <p>{copy.eyebrow}</p>
        <strong id="integration-architecture-title">{copy.title}</strong>
      </div>

      <div className={styles.architectureFlow}>
        <section className={styles.architectureLane} aria-labelledby="integration-systems-title">
          <p id="integration-systems-title" className={styles.architectureLabel}>{copy.systemsLabel}</p>
          <ul data-architecture-side="systems">
            {copy.systems.map((system) => (
              <li key={system} data-architecture-node="system">
                <span aria-hidden="true" />
                {system}
              </li>
            ))}
          </ul>
        </section>

        <div className={styles.architectureConnector} aria-hidden="true">
          <span />
        </div>

        <div
          className={styles.architectureCore}
          role="group"
          aria-label={copy.coreAria}
        >
          <span className={styles.architectureMark}>AXY</span>
          <strong>{copy.coreTitle}</strong>
          <p>{copy.coreSteps}</p>
        </div>

        <div className={styles.architectureConnector} aria-hidden="true">
          <span />
        </div>

        <section className={`${styles.architectureLane} ${styles.architectureLaneNetwork}`} aria-labelledby="integration-network-title">
          <p id="integration-network-title" className={styles.architectureLabel}>{copy.networkLabel}</p>
          <ul data-architecture-side="network">
            {copy.network.map((destination) => (
              <li key={destination} data-architecture-node="network">
                <span aria-hidden="true" />
                {destination}
              </li>
            ))}
          </ul>
        </section>
      </div>

      <figcaption>
        <strong>{copy.captionTitle}</strong>
        <span>{copy.caption}</span>
      </figcaption>
    </figure>
  );
}

export default function Integrations() {
  const copy = useLocalizedCopy(integrationsCatalog);

  return (
    <main className={styles.page} data-screen-label="Integrations" data-analytics-location="integrations">
      <section className={styles.hero} aria-labelledby="integrations-title">
        <div className={styles.inner}>
          <div className={styles.heroGrid}>
            <div className={styles.heroCopy}>
              <p className={styles.eyebrow}>{copy.hero.eyebrow}</p>
              <h1 id="integrations-title">{copy.hero.title}</h1>
              <p className={styles.heroLead}>{copy.hero.lead}</p>
              <p className={styles.heroQualifier}>{copy.hero.qualifier}</p>
              <div className={styles.heroActions}>
                <LocalizedLink className={styles.buttonLight} href="/book-a-walkthrough#schedule">
                  {copy.hero.primaryAction}
                </LocalizedLink>
                <LocalizedLink className={styles.buttonOutlineLight} href="/back-office">
                  {copy.hero.secondaryAction}
                </LocalizedLink>
              </div>
            </div>

            <Architecture copy={copy.architecture} />
          </div>
        </div>
      </section>

      <section className={styles.platforms} aria-labelledby="platforms-title">
        <div className={styles.inner}>
          <div className={styles.sectionIntro}>
            <p className={styles.eyebrow}>{copy.platforms.eyebrow}</p>
            <h2 id="platforms-title">{copy.platforms.title}</h2>
            <p>{copy.platforms.intro}</p>
          </div>

          <ul className={styles.logoGrid} aria-label={copy.platforms.aria}>
            <li className={styles.logoItem}>
              <Image
                src="/images/integrations/logos/salesforce.webp"
                alt="Salesforce"
                width={1080}
                height={744}
                sizes="(max-width: 700px) 72vw, 280px"
              />
              <p>{copy.platforms.examples[0]}</p>
            </li>
            <li className={styles.logoItem}>
              <div className={styles.dynamicsLogo}>
                <Image
                  src="/images/integrations/logos/microsoft-dynamics-365.svg"
                  alt=""
                  width={96}
                  height={96}
                />
                <span>Microsoft Dynamics 365</span>
              </div>
              <p>{copy.platforms.examples[1]}</p>
            </li>
            <li className={styles.logoItem}>
              <Image
                src="/images/integrations/logos/odoo.svg"
                alt="Odoo"
                width={919}
                height={495}
                sizes="(max-width: 700px) 72vw, 280px"
              />
              <p>{copy.platforms.examples[2]}</p>
            </li>
          </ul>

          <div className={styles.textExamples}>
            <p className={styles.textExamplesLabel}>{copy.platforms.otherLabel}</p>
            <p>{copy.platforms.otherSystems}</p>
          </div>

          <p className={styles.trademarkNote}>
            {copy.platforms.trademark}
          </p>
        </div>
      </section>

      <section className={styles.problem} aria-labelledby="problem-title">
        <div className={styles.inner}>
          <div className={styles.problemGrid}>
            <div className={styles.problemCopy}>
              <p className={styles.eyebrow}>{copy.problem.eyebrow}</p>
              <h2 id="problem-title">{copy.problem.title}</h2>
              <p>{copy.problem.intro}</p>
            </div>

            <div className={styles.comparison}>
              {copy.problem.comparisons.map((comparison) => (
                <article key={comparison.label}>
                  <p className={styles.comparisonNumber}>{comparison.label}</p>
                  <h3>{comparison.title}</h3>
                  <p>{comparison.copy}</p>
                </article>
              ))}
            </div>
          </div>
          <p className={styles.caveat}>{copy.problem.caveat}</p>
        </div>
      </section>

      <section className={styles.standard} aria-labelledby="standard-title">
        <div className={styles.inner}>
          <div className={styles.standardHeader}>
            <div>
              <p className={styles.eyebrow}>{copy.standard.eyebrow}</p>
              <h2 id="standard-title">{copy.standard.title}</h2>
            </div>
            <p>{copy.standard.intro}</p>
          </div>

          <div className={styles.recordList}>
            {copy.standard.records.map((record, index) => (
              <article key={record.title}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <div>
                  <h3>{record.title}</h3>
                  <p>{record.copy}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.process} aria-labelledby="process-title">
        <div className={styles.inner}>
          <div className={styles.sectionIntroDark}>
            <p className={styles.eyebrow}>{copy.process.eyebrow}</p>
            <h2 id="process-title">{copy.process.title}</h2>
            <p>{copy.process.intro}</p>
          </div>

          <ol className={styles.processList}>
            {copy.process.steps.map((step) => (
              <li key={step.number}>
                <span>{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.copy}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className={styles.flexibility} aria-labelledby="flexibility-title">
        <div className={styles.inner}>
          <div className={styles.flexibilityGrid}>
            <div>
              <p className={styles.eyebrow}>{copy.flexibility.eyebrow}</p>
              <h2 id="flexibility-title">{copy.flexibility.title}</h2>
              <p className={styles.flexibilityLead}>{copy.flexibility.lead}</p>
            </div>

            <div className={styles.edgeRules}>
              {copy.flexibility.rules.map((rule, index) => (
                <article key={rule.title}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <div>
                    <h3>{rule.title}</h3>
                    <p>{rule.copy}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <aside className={styles.releaseNote} aria-labelledby="release-title">
            <p className={styles.eyebrow}>{copy.flexibility.releaseEyebrow}</p>
            <h3 id="release-title">{copy.flexibility.releaseTitle}</h3>
            <p>{copy.flexibility.releaseBody}</p>
          </aside>
        </div>
      </section>

      <section className={styles.governance} aria-labelledby="governance-title">
        <div className={styles.inner}>
          <div className={styles.governanceGrid}>
            <div>
              <p className={styles.eyebrow}>{copy.governance.eyebrow}</p>
              <h2 id="governance-title">{copy.governance.title}</h2>
            </div>
            <div className={styles.governanceCopy}>
              <p>{copy.governance.body}</p>
              <dl>
                {copy.governance.facts.map(([term, description]) => (
                  <div key={term}>
                    <dt>{term}</dt>
                    <dd>{description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.faq} aria-labelledby="faq-title">
        <div className={styles.inner}>
          <div className={styles.faqGrid}>
            <div className={styles.faqIntro}>
              <p className={styles.eyebrow}>{copy.faq.eyebrow}</p>
              <h2 id="faq-title">{copy.faq.title}</h2>
              <p>{copy.faq.intro}</p>
            </div>
            <div className={styles.faqList}>
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
        </div>
      </section>

      <section className={styles.finalCta} aria-labelledby="integration-cta-title">
        <div className={styles.inner}>
          <p className={styles.eyebrow}>{copy.cta.eyebrow}</p>
          <h2 id="integration-cta-title">{copy.cta.title}</h2>
          <p>{copy.cta.body}</p>
          <div className={styles.finalActions}>
            <LocalizedLink className={styles.buttonLight} href="/book-a-walkthrough#schedule">
              {copy.cta.primaryAction}
            </LocalizedLink>
            <LocalizedLink className={styles.buttonOutlineLight} href="/contact">
              {copy.cta.secondaryAction}
            </LocalizedLink>
          </div>
          <nav className={styles.audienceLinks} aria-label={copy.cta.navAria}>
            <LocalizedLink href="/for-retailers">{copy.cta.retailers}</LocalizedLink>
            <LocalizedLink href="/for-brands">{copy.cta.brands}</LocalizedLink>
          </nav>
        </div>
      </section>
    </main>
  );
}
