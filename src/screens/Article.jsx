import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/article.module.css';

const TAKEAWAYS = [
  'Clienteling continues a relationship; it is not simply a contact record.',
  'Useful context is often created before a transaction appears in a system.',
  'Teams should capture only what improves the next customer interaction.',
  'A useful follow-up has a reason, an owner and a clear next date.',
];

const CONTENTS = [
  ['meaning', 'Beyond the customer record'],
  ['before-sale', 'The context before the sale'],
  ['next-action', 'Make the next action useful'],
  ['measure', 'Measure execution and outcomes'],
  ['framework', 'A practical starting framework'],
  ['axy-workflow', 'How AXY supports the workflow'],
  ['questions', 'Common questions'],
];

const JOURNEY = [
  ['01', 'Interest', 'A need, occasion or preference begins to take shape.'],
  ['02', 'Store visit', 'The team learns why the customer came in and what matters.'],
  ['03', 'Presentation', 'Products are shown, compared and discussed.'],
  ['04', 'Consideration', 'Interest, objections and unavailable requests become clear.'],
  ['05', 'Continuation', 'The right person follows up with the original context.'],
  ['06', 'Outcome', 'The opportunity may convert now, later or not at all.'],
];

const CAPTURE_MINIMUM = [
  ['The visit', 'A known customer or an anonymous store interaction, according to the configured workflow.'],
  ['Products', 'What was shown, compared, requested or unavailable.'],
  ['Meaningful response', 'The preference, question, objection or service need that changes what should happen next.'],
  ['Next action', 'What has been agreed—or why no follow-up is required.'],
  ['Ownership', 'The responsible person and a date when the action is time-sensitive.'],
];

const FOLLOW_UP_FIELDS = [
  ['Reason', 'Why the customer should be contacted'],
  ['Product context', 'What was discussed or requested'],
  ['Owner', 'Who is responsible for the next step'],
  ['Next date', 'When the action becomes relevant'],
  ['Desired outcome', 'What a useful next conversation should achieve'],
];

const MEASURES = [
  {
    title: 'Adoption',
    copy: 'Are store visits and relevant product interactions being captured consistently?',
  },
  {
    title: 'Execution',
    copy: 'Are due follow-ups completed, and do open opportunities have a clear owner?',
  },
  {
    title: 'Opportunity',
    copy: 'Which captured products, requests or unavailable items continue to generate interest?',
  },
  {
    title: 'Outcome',
    copy: 'Where connected data permits it, what progresses, converts, returns or remains unresolved?',
  },
];

const MISTAKES = [
  'Turning every store conversation into administration.',
  'Recording notes without a product, reason or owner.',
  'Treating message volume as proof of relationship quality.',
  'Collecting personal detail without a clear purpose or lawful basis.',
  'Judging employees from outcomes without considering opportunity context.',
];

const CHECKLIST = [
  'Define the few store moments worth recording.',
  'Agree which product and response fields are genuinely useful.',
  'Give every required follow-up a reason, owner and next date.',
  'Keep customer-specific continuation permission-aware.',
  'Review execution and outcomes together, not in isolation.',
];

const FAQS = [
  {
    question: 'Is clienteling only relevant in luxury retail?',
    answer: 'No. It is most visible in high-consideration and relationship-led retail, but the same principles help whenever advice, preferences, service and follow-up influence a purchase.',
  },
  {
    question: 'What is the difference between CRM and clienteling?',
    answer: 'CRM technology can support clienteling, but a customer record alone is not the practice. Clienteling combines the record with visit, product-interest, service and next-action context so a team can continue the relationship meaningfully.',
  },
  {
    question: 'Does every store visitor need to be identified?',
    answer: 'No. Stores can capture anonymous activity where appropriate. Customer-specific continuation requires identity, a clear purpose and the lawful basis or permission required by the retailer’s deployment and jurisdiction.',
  },
  {
    question: 'How should managers measure whether it works?',
    answer: 'Review adoption, follow-up execution and opportunity outcomes together. Conversion, return visits and products-presented-versus-sold require the relevant activity, identity and transaction data to be captured and connected.',
  },
];

const RELATED_PATHS = [
  {
    label: 'In-store sales capture',
    title: 'Capture useful activity without slowing the conversation.',
    href: '/use-cases/in-store-sales-capture',
  },
  {
    label: 'Product demand intelligence',
    title: 'Add captured interest and unmet requests to product decisions.',
    href: '/use-cases/product-demand-intelligence',
  },
  {
    label: 'How AXY works',
    title: 'See how capture, continuation and understanding share context.',
    href: '/how-it-works',
  },
];

function ArrowLink({ href, children, light = false }) {
  return (
    <Link className={`${styles.textLink} ${light ? styles.textLinkLight : ''}`.trim()} href={href}>
      {children} <span aria-hidden="true">→</span>
    </Link>
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
  return (
    <main className={styles.page} data-screen-label="Article: Retail Clienteling" data-analytics-location="article">
      <article>
        <header className={styles.hero}>
          <div className={`${styles.shell} ${styles.heroGrid}`}>
            <div className={styles.heroCopy}>
              <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
                <Link href="/">Home</Link>
                <span aria-hidden="true">/</span>
                <Link href="/resources">Resources</Link>
                <span aria-hidden="true">/</span>
                <span aria-current="page">Retail clienteling</span>
              </nav>

              <p className={styles.eyebrow}>Retail sales and clienteling</p>
              <h1>What is retail clienteling—and why CRM records are not enough?</h1>
              <p className={styles.heroLead}>
                Clienteling gives a sales team enough shared context to make the next conversation more relevant than the last—before, during and after a transaction.
              </p>

              <div className={styles.byline}>
                <span className={styles.authorMark} aria-hidden="true">JM</span>
                <div>
                  <p className={styles.authorName}>Jure Malalan</p>
                  <p>Founder of AXY and premium retail operator</p>
                </div>
                <div className={styles.articleMeta}>
                  <time dateTime="2026-06-18">Published 18 June 2026</time>
                  <span aria-hidden="true">·</span>
                  <time dateTime="2026-07-14">Updated 14 July 2026</time>
                  <span aria-hidden="true">·</span>
                  <span>7 min read</span>
                </div>
              </div>
            </div>

            <figure className={styles.heroFigure}>
              <Image
                src="/images/article/clienteling-context.webp"
                alt="A retail specialist presenting an unbranded watch while a customer considers it at the counter"
                width={1536}
                height={1024}
                sizes="(max-width: 900px) 100vw, 50vw"
                loading="eager"
                fetchPriority="high"
              />
              <figcaption>The transaction is one moment. The relationship is the context around it.</figcaption>
            </figure>

            <div className={styles.directAnswer}>
              <p className={styles.directLabel}>Direct answer</p>
              <p>
                Retail clienteling is the practice of using customer preferences, visit history, product interest and meaningful follow-up to build long-term store relationships. A CRM can store customer and transaction records; effective clienteling also preserves what happened during the visit, what mattered to the customer and what should happen next.
              </p>
            </div>
          </div>
        </header>

        <section className={styles.takeawaySection} aria-labelledby="article-takeaways-title">
          <div className={styles.shell}>
            <h2 className={styles.visuallyHidden} id="article-takeaways-title">Key takeaways</h2>
            <ol className={styles.takeaways}>
              {TAKEAWAYS.map((takeaway, index) => (
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
              <p className={styles.tocTitle} id="article-contents-title">In this article</p>
              <ol>
                {CONTENTS.map(([id, label], index) => (
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
              <SectionHeading index="01" id="meaning-title" title="Clienteling lives between the record and the relationship.">
                A customer record is useful. The living context around that record is what helps another person continue the relationship well.
              </SectionHeading>

              <p>
                In practice, clienteling combines human relationship-building with preferences, visit history, products discussed, purchase and service context, relevant communication and timely follow-up. It does not compete with CRM technology; it defines the work and information the technology needs to support.
              </p>

              <div className={styles.comparison}>
                <article>
                  <p className={styles.comparisonLabel}>A customer record</p>
                  <h3>Who the customer is and what has been recorded.</h3>
                  <ul>
                    <li>Contact and consent information</li>
                    <li>Purchase and service history</li>
                    <li>General notes and segments</li>
                    <li>Commercial or loyalty status</li>
                  </ul>
                </article>
                <article className={styles.comparisonEmphasis}>
                  <p className={styles.comparisonLabel}>Clienteling context</p>
                  <h3>Why the next conversation should happen and what it should continue.</h3>
                  <ul>
                    <li>Products shown, compared or requested</li>
                    <li>Preferences, questions and objections</li>
                    <li>Unavailable items and active opportunities</li>
                    <li>The agreed next action, owner and date</li>
                  </ul>
                </article>
              </div>

              <p className={styles.editorialNote}>
                Clienteling is not a contact list, a generic messaging programme or a loyalty scheme on its own. It is the discipline of carrying useful context from one interaction into the next.
              </p>
            </section>

            <section className={styles.chapter} id="before-sale" aria-labelledby="before-sale-title">
              <SectionHeading index="02" id="before-sale-title" title="The useful story often starts before the sale.">
                Transaction systems are designed to record what was bought. Relationship-led retail also needs selected context from the moments that made the outcome possible.
              </SectionHeading>

              <p>
                A customer may compare several products, ask for an unavailable variation, discuss an upcoming occasion and leave without buying. That visit can still create a real opportunity. Without a simple way to preserve the interaction, the next salesperson sees an empty transaction history instead of a continuing conversation.
              </p>

              <ol className={styles.journey} aria-label="Customer journey before and after a retail transaction">
                {JOURNEY.map(([number, title, copy], index) => (
                  <li className={index > 0 && index < 5 ? styles.journeyContext : ''} key={number}>
                    <span>{number}</span>
                    <h3>{title}</h3>
                    <p>{copy}</p>
                  </li>
                ))}
              </ol>

              <div className={styles.captureBlock}>
                <div>
                  <p className={styles.eyebrowDark}>Minimum useful capture</p>
                  <h3>Record enough to improve the next interaction—then stop.</h3>
                  <p>
                    The goal is not a detailed visit report. An effective workflow captures a small, structured set of facts while the work happens and leaves the salesperson present with the customer.
                  </p>
                </div>
                <ol className={styles.captureList}>
                  {CAPTURE_MINIMUM.map(([title, copy], index) => (
                    <li key={title}>
                      <span aria-hidden="true">0{index + 1}</span>
                      <div>
                        <h4>{title}</h4>
                        <p>{copy}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </section>

            <section className={styles.chapter} id="next-action" aria-labelledby="next-action-title">
              <SectionHeading index="03" id="next-action-title" title="A reminder is not a next action.">
                “Call the customer” provides too little context. A useful follow-up explains why the conversation matters and what the salesperson is trying to move forward.
              </SectionHeading>

              <blockquote className={styles.caseNote}>
                <p>
                  A customer likes a product but wants time to consider it. The salesperson records the product, the customer’s hesitation and an agreed follow-up date. When the action becomes due—or availability changes—the complete context is ready, not just a generic reminder.
                </p>
              </blockquote>

              <dl className={styles.followUpFields}>
                {FOLLOW_UP_FIELDS.map(([term, description]) => (
                  <div key={term}>
                    <dt>{term}</dt>
                    <dd>{description}</dd>
                  </div>
                ))}
              </dl>

              <p className={styles.finePrint}>
                Automation and suggestions depend on the configured workflow. Not every customer action should create a task; the principle is that when follow-up is due, the original context is available.
              </p>
            </section>

            <section className={styles.chapter} id="measure" aria-labelledby="measure-title">
              <SectionHeading index="04" id="measure-title" title="Measure execution and outcomes together.">
                A clienteling programme becomes useful when managers can see whether the workflow is being adopted, whether opportunities are being continued and what happened next.
              </SectionHeading>

              <div className={styles.measureGrid}>
                {MEASURES.map((measure, index) => (
                  <article key={measure.title}>
                    <span aria-hidden="true">0{index + 1}</span>
                    <h3>{measure.title}</h3>
                    <p>{measure.copy}</p>
                  </article>
                ))}
              </div>

              <p>
                These measures should be read together. A missed sale does not automatically mean poor execution, and a high message count does not prove a strong relationship. Opportunity mix, availability, staffing and customer intent all affect the outcome.
              </p>
              <p className={styles.finePrint}>
                Conversion, return activity and products-presented-versus-sold require the relevant store activity, identity and transaction data to be captured and connected. Captured product interest and unmet requests add context; they are not a complete demand forecast on their own.
              </p>
            </section>

            <section className={styles.chapter} id="framework" aria-labelledby="framework-title">
              <SectionHeading index="05" id="framework-title" title="Start small enough that teams will use it.">
                The most durable clienteling workflow is clear during a busy sales day, useful to the next person and disciplined about what should not be collected.
              </SectionHeading>

              <div className={styles.frameworkGrid}>
                <article>
                  <p className={styles.frameworkLabel}>Common mistakes</p>
                  <ol className={styles.mistakeList}>
                    {MISTAKES.map((mistake, index) => (
                      <li key={mistake}>
                        <span aria-hidden="true">0{index + 1}</span>
                        <p>{mistake}</p>
                      </li>
                    ))}
                  </ol>
                </article>
                <article className={styles.checklistPanel}>
                  <p className={styles.frameworkLabel}>Starting checklist</p>
                  <ul className={styles.checklist}>
                    {CHECKLIST.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                </article>
              </div>

              <p className={styles.finePrint}>
                Privacy rules, consent requirements and lawful bases vary by deployment and jurisdiction. Customer-specific continuation should follow the retailer’s configured policies and permissions.
              </p>
            </section>
          </div>
        </div>

        <section className={styles.axySection} id="axy-workflow" aria-labelledby="axy-workflow-title">
          <div className={styles.shell}>
            <div className={styles.axyIntro}>
              <p className={styles.eyebrow}>AXY in practice</p>
              <h2 id="axy-workflow-title">Keep the store visit, the next action and the outcome in one context.</h2>
              <p>
                AXY helps teams capture relevant product and customer activity during normal store work, continue the relationship after the visit and review connected opportunity signals without turning the conversation into administration.
              </p>
              <ArrowLink href="/sales-app" light>Explore the Sales App</ArrowLink>
            </div>
            <ol className={styles.axySteps}>
              <li>
                <span aria-hidden="true">01</span>
                <h3>Capture</h3>
                <p>Products, visit context and the meaningful customer response.</p>
              </li>
              <li>
                <span aria-hidden="true">02</span>
                <h3>Continue</h3>
                <p>A clear next action with the relevant person, reason and timing.</p>
              </li>
              <li>
                <span aria-hidden="true">03</span>
                <h3>Understand</h3>
                <p>Adoption, open opportunities and captured interest where data permits.</p>
              </li>
            </ol>
          </div>
        </section>

        <section className={styles.faqSection} id="questions" aria-labelledby="questions-title">
          <div className={`${styles.shell} ${styles.faqGrid}`}>
            <div className={styles.faqIntro}>
              <p className={`${styles.eyebrow} ${styles.eyebrowDark}`}>Common questions</p>
              <h2 id="questions-title">Retail clienteling, in practical terms.</h2>
            </div>
            <div className={styles.faqs}>
              {FAQS.map((faq) => (
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
              <p className={`${styles.eyebrow} ${styles.eyebrowDark}`}>Explore the topic</p>
              <h2 id="further-reading-title">Continue with a real workflow.</h2>
              <p>These are product and use-case pages—not additional published articles.</p>
            </div>
            <div className={styles.relatedGrid}>
              {RELATED_PATHS.map((path, index) => (
                <article key={path.href}>
                  <span aria-hidden="true">0{index + 1}</span>
                  <p className={styles.relatedLabel}>{path.label}</p>
                  <h3>{path.title}</h3>
                  <ArrowLink href={path.href}>Explore this workflow</ArrowLink>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.authorSection} aria-labelledby="author-note-title">
          <div className={`${styles.shell} ${styles.authorInner}`}>
            <span className={styles.authorMarkLarge} aria-hidden="true">JM</span>
            <div>
              <p className={styles.authorKicker}>About the author</p>
              <h2 id="author-note-title">Jure Malalan</h2>
              <p>
                Jure built AXY from day-to-day premium retail operations: store visits, product presentations, follow-up and multi-location coordination. He writes about connecting sales activity, customer relationships and product signals into practical workflows.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.finalCta} aria-labelledby="article-cta-title">
          <div className={`${styles.shell} ${styles.finalCtaInner}`}>
            <div>
              <p className={styles.eyebrow}>See it in daily work</p>
              <h2 id="article-cta-title">Turn clienteling principles into a usable retail workflow.</h2>
              <p>See how AXY preserves product and customer context, organises follow-up and helps managers understand open opportunities.</p>
            </div>
            <div className={styles.actions}>
              <Link className={styles.primaryButtonLight} href="/book-a-walkthrough#schedule">Book a walkthrough</Link>
              <Link className={styles.secondaryButtonLight} href="/sales-app">Explore the Sales App</Link>
            </div>
          </div>
        </section>
      </article>
    </main>
  );
}
