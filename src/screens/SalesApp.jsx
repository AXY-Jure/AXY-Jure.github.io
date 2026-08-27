import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/sales-app.module.css';

const QUESTIONS = [
  {
    number: '01',
    title: 'Who needs attention?',
    copy: 'Tasks, requests, appointments and follow-ups come forward when action is due.',
  },
  {
    number: '02',
    title: 'What is relevant?',
    copy: 'The product, visit, customer preference and approved availability stay connected.',
  },
  {
    number: '03',
    title: 'What should happen next?',
    copy: 'Create a call, task, message, offer or availability request without rebuilding the story.',
  },
];

const FAQS = [
  {
    question: 'Does the Sales App work on any phone?',
    answer: 'It runs on standard iOS and Android devices your team already carries — no special hardware.',
  },
  {
    question: 'Is it only for tracking visits?',
    answer: 'No. It brings together the daily workspace, product catalogue, availability, customer context, follow-up and mobile analytics. Visit capture is one part of the workflow.',
  },
  {
    question: 'Does Alfred act or contact customers by itself?',
    answer: 'No. Alfred can suggest a relevant product or next step, but the salesperson reviews the context and decides what happens. Messages and actions remain under human control.',
  },
  {
    question: 'Can we begin before every system is integrated?',
    answer: 'Yes. AXY can begin with a selected team and workflow, then connect more catalogue, availability and operational data as the rollout expands.',
  },
];

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
  return (
    <main
      className={styles.page}
      data-screen-label="Sales App"
      data-analytics-location="sales_app"
    >
      <section className={styles.hero} aria-labelledby="sales-app-title">
        <div className={`${styles.inner} ${styles.heroGrid}`}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>AXY Sales App</p>
            <h1 id="sales-app-title">Know who to contact. What to suggest. What to do next.</h1>
            <p className={styles.heroLead}>
              AXY brings today&apos;s priorities, approved customer context, product information and next actions into one mobile workspace — before, during and after the visit.
            </p>
            <div className={styles.heroActions}>
              <Link className={styles.buttonPrimary} href="/book-a-walkthrough#schedule">
                Get guided setup
              </Link>
              <a className={styles.buttonSecondary} href="https://app.axy.net/onboarding">
                Create free account
              </a>
            </div>
            <Link className={styles.textLink} href="/for-retailers">
              Explore AXY for retailers <span aria-hidden="true">→</span>
            </Link>
          </div>

          <figure className={styles.heroFigure}>
            <Image
              src="/images/sales-app/guided-conversation.webp"
              alt="A retail salesperson presenting a product to a customer during an in-store consultation."
              width={1335}
              height={748}
              sizes="(max-width: 900px) 100vw, 54vw"
              priority
              fetchPriority="high"
            />
            <figcaption>The conversation stays human. AXY keeps the context ready.</figcaption>
          </figure>
        </div>
      </section>

      <section className={styles.questions} aria-labelledby="three-questions-title">
        <div className={styles.inner}>
          <div className={styles.sectionIntro}>
            <p className={styles.eyebrow}>A clearer sales day</p>
            <h2 id="three-questions-title">The Sales App answers three practical questions.</h2>
            <p>
              Instead of searching across notes, messages and separate product files, the salesperson can begin with the next useful decision.
            </p>
          </div>
          <ol className={styles.questionList}>
            {QUESTIONS.map((question) => (
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
            <p className={styles.eyebrow}>01 · Capture the visit</p>
            <h2 id="capture-title">Track the visit without stepping away from the customer.</h2>
            <p>
              Scan or find the product, record what was shown and keep the customer&apos;s response connected to the visit while the conversation is still happening.
            </p>
            <ul className={styles.editorialList}>
              <li>Scan a product tag or search the catalogue</li>
              <li>Record products shown and customer interest</li>
              <li>Carry the same context into follow-up</li>
            </ul>
          </div>
          <figure className={styles.landscapeFigure}>
            <Image
              src="/images/sales-app/capture-scan.webp"
              alt="A salesperson scanning a product tag with the AXY Sales App during a store visit."
              width={1330}
              height={751}
              sizes="(max-width: 900px) 100vw, 52vw"
              loading="lazy"
            />
            <figcaption>Product activity can be captured during normal selling work.</figcaption>
          </figure>
        </div>
      </section>

      <section className={`${styles.feature} ${styles.dark}`} aria-labelledby="suggest-title">
        <div className={`${styles.inner} ${styles.featureGrid}`}>
          <div className={styles.featureCopy}>
            <p className={styles.eyebrow}>02 · Suggest with context</p>
            <h2 id="suggest-title">Recommend with evidence, not memory.</h2>
            <p>
              AXY can surface a relevant product or follow-up using the approved activity and product information already available to the salesperson.
            </p>
            <blockquote>
              <strong>AXY proposes.</strong>
              <span>The salesperson reviews the context and decides.</span>
            </blockquote>
            <p className={styles.finePrint}>
              Suggestions do not contact customers, reserve products or send information without a person&apos;s approval.
            </p>
          </div>
          <figure className={styles.phoneFigure}>
            <PhoneArtwork
              src="/images/sales-app/suggested-product.webp"
              alt="AXY Sales App suggestion screen showing a recommended product and its availability."
              height={1948}
            />
            <figcaption>A grounded suggestion with product and availability context.</figcaption>
          </figure>
        </div>
      </section>

      <section className={`${styles.feature} ${styles.warm}`} aria-labelledby="action-title">
        <div className={`${styles.inner} ${styles.featureGrid} ${styles.mediaLeft}`}>
          <div className={styles.featureCopy}>
            <p className={styles.eyebrow}>03 · Take the next action</p>
            <h2 id="action-title">A useful insight ends with one clear next step.</h2>
            <p>
              Turn the context into a task, call, message, product offer or availability request. The next action stays connected to the relevant products and visit.
            </p>
            <ul className={styles.editorialList}>
              <li>Choose the action and responsible person</li>
              <li>Set timing and the required sub-tasks</li>
              <li>Follow the work through without duplicating notes</li>
            </ul>
          </div>
          <figure className={styles.uiFigure}>
            <Image
              src="/images/sales-app/next-action.webp"
              alt="AXY Sales App task setup showing a product offer, checklist and choice of task, message or call."
              width={900}
              height={1067}
              sizes="(max-width: 900px) 100vw, 48vw"
              loading="lazy"
            />
            <figcaption>Turn the decision into accountable work while the context is fresh.</figcaption>
          </figure>
        </div>
      </section>

      <section className={styles.feature} aria-labelledby="availability-title">
        <div className={`${styles.inner} ${styles.featureGrid}`}>
          <div className={styles.featureCopy}>
            <p className={styles.eyebrow}>04 · Check availability</p>
            <h2 id="availability-title">Answer availability before the conversation goes cold.</h2>
            <p>
              Review connected stock context or send an approved inquiry, then return with a clear answer or a relevant alternative from the same product record.
            </p>
            <p className={styles.callout}>
              Availability reflects the locations, systems and partner permissions connected to the workflow.
            </p>
          </div>
          <figure className={styles.uiFigure}>
            <Image
              src="/images/sales-app/availability.webp"
              alt="AXY Sales App availability panel showing selected store locations and an inquiry action."
              width={1000}
              height={818}
              sizes="(max-width: 900px) 100vw, 48vw"
              loading="lazy"
            />
            <figcaption>Product and availability context stay together.</figcaption>
          </figure>
        </div>
      </section>

      <section className={`${styles.feature} ${styles.mist}`} aria-labelledby="analytics-title">
        <div className={`${styles.inner} ${styles.featureGrid} ${styles.mediaLeft}`}>
          <div className={styles.featureCopy}>
            <p className={styles.eyebrow}>05 · Understand the outcome</p>
            <h2 id="analytics-title">See which sales work is moving forward.</h2>
            <p>
              Review aggregate sales, visits, offers, invoices and follow-up activity to understand where the team is active and where opportunities may be stalling.
            </p>
            <ul className={styles.editorialList}>
              <li>Compare activity across useful time periods</li>
              <li>Connect outcomes with the work that preceded them</li>
              <li>Support coaching and planning with clearer context</li>
            </ul>
            <p className={styles.finePrint}>Analytics supports review and prioritisation — not a promise of perfect forecasting.</p>
          </div>
          <figure className={styles.phoneFigure}>
            <PhoneArtwork
              src="/images/sales-app/mobile-analytics.webp"
              alt="AXY Sales App mobile analytics showing sales, visits, offers, invoices and performance trends."
              height={1955}
            />
            <figcaption>Aggregate activity helps teams understand what is changing.</figcaption>
          </figure>
        </div>
      </section>

      <section className={styles.faq} aria-labelledby="sales-app-questions-title">
        <div className={styles.faqInner}>
          <div className={styles.sectionIntro}>
            <p className={styles.eyebrow}>Questions</p>
            <h2 id="sales-app-questions-title">Sales App, briefly answered.</h2>
          </div>
          <div className={styles.faqList}>
            {FAQS.map((item) => (
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
          <p className={styles.eyebrow}>Bring the next step into focus</p>
          <h2 id="sales-app-final-title">Give the sales team clarity before, during and after every visit.</h2>
          <p>
            Start with one team and workflow, then expand the connected context as it creates value.
          </p>
          <div className={styles.finalActions}>
            <a className={styles.buttonLight} href="https://app.axy.net/onboarding">Create free account</a>
            <Link
              className={styles.buttonOutlineLight}
              href="/pricing"
              data-analytics-event="pricing_cta_click"
              data-analytics-cta-name="view_pricing_sales_app"
            >
              See pricing
            </Link>
          </div>
          <Link className={styles.finalLink} href="/for-retailers">
            Explore AXY for retailers <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
