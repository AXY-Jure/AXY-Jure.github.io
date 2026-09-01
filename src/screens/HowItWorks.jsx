import Image from 'next/image';
import Link from '../i18n/LocalizedLink.jsx';
import { useLocalizedCopy } from '../i18n/I18nProvider.jsx';
import howItWorksCatalog from '../i18n/locales/pages/howItWorks.js';
import styles from '../styles/how-it-works.module.css';

function Eyebrow({ children, light = false }) {
  return <p className={`${styles.eyebrow} ${light ? styles.eyebrowLight : ''}`}>{children}</p>;
}

function StageHeading({ id, number, name, title, copy, light = false }) {
  return (
    <div className={`${styles.stageHeading} ${light ? styles.stageHeadingLight : ''}`}>
      <Eyebrow light={light}>{number} · {name}</Eyebrow>
      <h2 id={id}>{title}</h2>
      <p>{copy}</p>
    </div>
  );
}

function PhoneArtwork({ src, alt, width, height }) {
  return (
    <div className={styles.phone}>
      <Image src={src} alt={alt} width={width} height={height} sizes="(max-width: 760px) 66vw, 320px" className={styles.phoneScreen} />
    </div>
  );
}

export default function HowItWorks() {
  const { howItWorks: copy } = useLocalizedCopy(howItWorksCatalog);

  return (
    <main className={styles.page} data-screen-label="How AXY Works" data-analytics-location="how_it_works">
      <section className={styles.hero} aria-labelledby="how-hero-title">
        <div className={styles.heroInner}>
          <div className={styles.heroCopy}>
            <Eyebrow light>{copy.hero.eyebrow}</Eyebrow>
            <h1 id="how-hero-title">{copy.hero.title}</h1>
            <p className={styles.heroLead}>{copy.hero.lead}</p>
            <div className={styles.heroActions}>
              <Link className={styles.buttonLight} href="/book-a-walkthrough#schedule">{copy.hero.guidedSetup}</Link>
              <Link className={styles.buttonGhost} href="/product">{copy.hero.explorePlatform}</Link>
            </div>
            <Link className={styles.textLinkLight} href="/for-retailers">{copy.hero.retailersLink} <span aria-hidden="true">→</span></Link>
          </div>
          <figure className={styles.heroVisual}>
            <Image src="/images/how-it-works/hero-retail-guidance.webp" alt={copy.hero.imageAlt} width={1335} height={748} sizes="(max-width: 860px) 100vw, 58vw" priority />
            <figcaption>{copy.hero.caption}</figcaption>
          </figure>
        </div>
      </section>

      <section className={styles.model} aria-labelledby="operating-model-title">
        <div className={styles.inner}>
          <div className={styles.modelIntro}>
            <Eyebrow>{copy.model.eyebrow}</Eyebrow>
            <h2 id="operating-model-title">{copy.model.title}</h2>
            <p>{copy.model.body}</p>
          </div>
          <nav className={styles.stageNav} aria-label={copy.model.navLabel}>
            <ol>
              {copy.model.stages.map(([number, name], index) => (
                <li key={name}><a href={`#axy-how-s${index}`}><span>{number}</span><strong>{name}</strong></a></li>
              ))}
            </ol>
          </nav>
        </div>
      </section>

      <section id="axy-how-s0" className={`${styles.stage} ${styles.stageWhite}`} aria-labelledby="capture-title">
        <div className={`${styles.inner} ${styles.stageGrid}`}>
          <div className={styles.stageCopy}>
            <StageHeading id="capture-title" number="01" name={copy.capture.name} title={copy.capture.title} copy={copy.capture.body} />
            <ul className={styles.editorialList}>
              {copy.capture.items.map(([title, body]) => <li key={title}><strong>{title}</strong><span>{body}</span></li>)}
            </ul>
          </div>
          <figure className={styles.landscapeVisual}>
            <Image src="/images/how-it-works/capture-scan.webp" alt={copy.capture.imageAlt} width={1330} height={751} sizes="(max-width: 860px) 100vw, 52vw" />
            <figcaption>{copy.capture.caption}</figcaption>
          </figure>
        </div>
      </section>

      <section id="axy-how-s1" className={`${styles.stage} ${styles.stageMist}`} aria-labelledby="connect-title">
        <div className={`${styles.inner} ${styles.stageGrid} ${styles.stageReverse}`}>
          <div className={styles.stageCopy}>
            <StageHeading id="connect-title" number="02" name={copy.connect.name} title={copy.connect.title} copy={copy.connect.body} />
            <p className={styles.callout}>{copy.connect.callout}</p>
          </div>
          <figure className={styles.contextFigure} aria-labelledby="context-caption">
            <div className={styles.contextOrigin}><span>{copy.connect.originLabel}</span><strong>{copy.connect.origin}</strong></div>
            <div className={styles.contextLine} aria-hidden="true" />
            <dl className={styles.contextNodes}>
              {copy.connect.nodes.map(([term, detail]) => <div key={term}><dt>{term}</dt><dd>{detail}</dd></div>)}
            </dl>
            <figcaption id="context-caption">{copy.connect.caption}</figcaption>
          </figure>
        </div>
      </section>

      <section id="axy-how-s2" className={`${styles.stage} ${styles.stageWarm}`} aria-labelledby="act-title">
        <div className={`${styles.inner} ${styles.stageGrid}`}>
          <div className={styles.stageCopy}>
            <StageHeading id="act-title" number="03" name={copy.act.name} title={copy.act.title} copy={copy.act.body} />
            <ul className={styles.editorialList}>
              {copy.act.items.map(([title, body]) => <li key={title}><strong>{title}</strong><span>{body}</span></li>)}
            </ul>
            <p className={styles.humanNote}><strong>{copy.act.humanControl}</strong> {copy.act.humanNote}</p>
          </div>
          <figure className={styles.phoneFigure}>
            <PhoneArtwork src="/images/how-it-works/act-suggestion.webp" alt={copy.act.imageAlt} width={900} height={1948} />
            <figcaption>{copy.act.caption}</figcaption>
          </figure>
        </div>
      </section>

      <section id="axy-how-s3" className={`${styles.stage} ${styles.stageWhite}`} aria-labelledby="continue-title">
        <div className={`${styles.inner} ${styles.stageGrid} ${styles.stageReverse}`}>
          <div className={styles.stageCopy}>
            <StageHeading id="continue-title" number="04" name={copy.continue.name} title={copy.continue.title} copy={copy.continue.body} />
            <ol className={styles.continuationList}>
              {copy.continue.items.map(([title, body]) => <li key={title}><span>{title}</span> {body}</li>)}
            </ol>
          </div>
          <figure className={styles.landscapeVisual}>
            <Image src="/images/how-it-works/continue-customer.webp" alt={copy.continue.imageAlt} width={1600} height={896} sizes="(max-width: 860px) 100vw, 52vw" />
            <figcaption>{copy.continue.caption}</figcaption>
          </figure>
        </div>
      </section>

      <section id="axy-how-s4" className={`${styles.stage} ${styles.stageDark}`} aria-labelledby="understand-title">
        <div className={`${styles.inner} ${styles.stageGrid}`}>
          <div className={styles.stageCopy}>
            <StageHeading id="understand-title" number="05" name={copy.understand.name} title={copy.understand.title} copy={copy.understand.body} light />
            <ul className={`${styles.editorialList} ${styles.editorialListDark}`}>
              {copy.understand.items.map(([title, body]) => <li key={title}><strong>{title}</strong><span>{body}</span></li>)}
            </ul>
            <p className={styles.darkFootnote}>{copy.understand.note}</p>
          </div>
          <figure className={`${styles.phoneFigure} ${styles.phoneFigureDark}`}>
            <PhoneArtwork src="/images/home-clean/mobile-analytics.webp" alt={copy.understand.imageAlt} width={900} height={1955} />
            <figcaption>{copy.understand.caption}</figcaption>
          </figure>
        </div>
      </section>

      <section className={styles.caseStudy} aria-labelledby="case-study-title">
        <div className={styles.inner}>
          <div className={styles.caseStudyLead}>
            <div className={styles.caseStudyCopy}>
              <Eyebrow>{copy.example.eyebrow}</Eyebrow>
              <h2 id="case-study-title">{copy.example.title}</h2>
              <p>{copy.example.body}</p>
            </div>
            <figure className={styles.caseStudyVisual}>
              <Image src="/images/how-it-works/customer-at-home.webp" alt={copy.example.imageAlt} width={1600} height={892} sizes="(max-width: 900px) calc(100vw - 32px), 57vw" />
              <figcaption>{copy.example.caption}</figcaption>
            </figure>
          </div>
          <ol className={styles.caseSteps}>
            {copy.example.steps.map(([number, title, body]) => <li key={number}><span>{number}</span><div><strong>{title}</strong><p>{body}</p></div></li>)}
          </ol>
        </div>
      </section>

      <section className={styles.permissions} aria-labelledby="permissions-title">
        <div className={styles.inner}>
          <div className={styles.permissionsIntro}>
            <Eyebrow>{copy.permissions.eyebrow}</Eyebrow>
            <h2 id="permissions-title">{copy.permissions.title}</h2>
            <p>{copy.permissions.body}</p>
          </div>
          <div className={styles.permissionFlow}>
            {copy.permissions.items.map(([number, title, body]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{body}</p></article>)}
          </div>
          <div className={styles.systemsRow}>
            <div><h3>{copy.permissions.systemsTitle}</h3><p>{copy.permissions.systemsBody}</p></div>
            <Link className={styles.textLink} href="/integrations">{copy.permissions.integrationsLink} <span aria-hidden="true">→</span></Link>
          </div>
        </div>
      </section>

      <section className={styles.begin} aria-labelledby="begin-title">
        <div className={styles.inner}>
          <div className={styles.beginIntro}><Eyebrow>{copy.begin.eyebrow}</Eyebrow><h2 id="begin-title">{copy.begin.title}</h2></div>
          <div className={styles.startingPoints}>
            {copy.begin.points.map(([number, title, body]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{body}</p></article>)}
          </div>
          <p className={styles.beginNote}>{copy.begin.note}</p>
          <div className={styles.beginActions}>
            <Link className={styles.buttonDark} href="/book-a-walkthrough#schedule">{copy.begin.guidedSetup}</Link>
            <Link className={styles.buttonOutline} href="/request-access">{copy.begin.createAccount}</Link>
          </div>
        </div>
      </section>

      <section className={styles.faq} aria-labelledby="faq-title">
        <div className={styles.faqInner}>
          <Eyebrow>{copy.faq.eyebrow}</Eyebrow>
          <h2 id="faq-title">{copy.faq.title}</h2>
          <div className={styles.faqList}>
            {copy.faq.items.map(([question, answer]) => <details key={question}><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p></details>)}
          </div>
        </div>
      </section>

      <section className={styles.finalCta} aria-labelledby="final-cta-title">
        <div className={styles.finalInner}>
          <h2 id="final-cta-title">{copy.final.title}</h2>
          <p>{copy.final.body}</p>
          <div className={styles.finalActions}>
            <Link className={styles.buttonLight} href="/book-a-walkthrough#schedule">{copy.final.guidedSetup}</Link>
            <Link className={styles.buttonGhost} href="/product">{copy.final.platform}</Link>
          </div>
          <div className={styles.finalLinks}>
            <Link href="/for-retailers">{copy.final.retailers}</Link>
            <Link href="/for-brands">{copy.final.brands}</Link>
            <Link href="/integrations">{copy.final.integrations}</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
