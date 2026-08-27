import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/resources.module.css';

const GUIDE_TAKEAWAYS = [
  'What clienteling adds beyond a CRM record',
  'What to capture during a store visit',
  'How to give every opportunity a clear next action',
  'Which adoption and opportunity signals managers can review',
];

const QUESTIONS = [
  {
    number: '01',
    title: 'How do we capture product interest without slowing the sales team?',
    copy: 'Explore a practical workflow for recording products shown, customer responses and the next action during normal store work.',
    href: '/use-cases/in-store-sales-capture',
    link: 'Explore in-store sales capture',
  },
  {
    number: '02',
    title: 'How do we understand what customers wanted but did not buy?',
    copy: 'See how captured presentations, comparisons, wishlists and unavailable requests can add context to stock and product decisions.',
    href: '/use-cases/product-demand-intelligence',
    link: 'Explore product demand intelligence',
  },
  {
    number: '03',
    title: 'How can retailers and brands coordinate without exposing private data?',
    copy: 'Review the permission-controlled workflows that connect catalogue, availability, orders and after-sales activity.',
    href: '/use-cases/retailer-brand-collaboration',
    link: 'Explore retailer–brand collaboration',
  },
  {
    number: '04',
    title: 'How does AXY fit around the systems we already use?',
    copy: 'Learn how ERP, CRM, PIM, POS and commerce systems can connect through one shared integration layer.',
    href: '/integrations',
    link: 'Explore AXY integrations',
  },
];

const PERSPECTIVES = [
  {
    label: 'For retailers',
    title: 'Keep store activity, follow-up and stock context connected.',
    copy: 'See how AXY supports sales teams, managers and multi-location retail operations.',
    href: '/for-retailers',
  },
  {
    label: 'For brands and manufacturers',
    title: 'Understand approved store activity and support connected retailers.',
    copy: 'See how product information, availability and market signals move through the network.',
    href: '/for-brands',
  },
];

function ArrowLink({ href, children, light = false }) {
  return (
    <Link className={`${styles.textLink} ${light ? styles.textLinkLight : ''}`.trim()} href={href}>
      {children} <span aria-hidden="true">→</span>
    </Link>
  );
}

export default function Resources() {
  return (
    <main className={styles.page} data-screen-label="Resources" data-analytics-location="resources">
      <section className={styles.hero} aria-labelledby="resources-title">
        <div className={`${styles.shell} ${styles.heroGrid}`}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>AXY resources</p>
            <h1 id="resources-title">Practical guidance for the work behind better retail.</h1>
            <p className={styles.heroLead}>
              Learn how to preserve customer and product context, follow up consistently, understand early interest signals and coordinate work across retailers and brands.
            </p>
            <div className={styles.actions}>
              <Link className={styles.primaryButtonLight} href="#featured-guide">
                Browse the resources
              </Link>
              <ArrowLink href="/how-it-works" light>See how AXY works</ArrowLink>
            </div>
          </div>

          <figure className={styles.heroFigure}>
            <Image
              src="/images/home-clean/products-on-table.webp"
              alt="Selected products arranged on a presentation table during a retail visit"
              width={1600}
              height={860}
              sizes="(max-width: 900px) 100vw, 50vw"
              loading="eager"
              fetchPriority="high"
            />
            <figcaption>Product context starts before the transaction.</figcaption>
          </figure>
        </div>
      </section>

      <section className={styles.featured} id="featured-guide" aria-labelledby="featured-guide-title">
        <div className={`${styles.shell} ${styles.featuredGrid}`}>
          <figure className={styles.featuredFigure}>
            <Image
              src="/images/how-it-works/capture-scan.webp"
              alt="A retail specialist using a phone while presenting a product"
              width={1330}
              height={751}
              sizes="(max-width: 900px) 100vw, 48vw"
              loading="lazy"
            />
            <figcaption>Capture useful context during the work—not after it.</figcaption>
          </figure>

          <div className={styles.featuredCopy}>
            <p className={`${styles.eyebrow} ${styles.eyebrowDark}`}>Featured guide</p>
            <h2 id="featured-guide-title">Retail clienteling: from the store visit to the next action.</h2>
            <p className={styles.featuredLead}>
              A practical introduction to customer context, in-store activity, product interest and follow-up—and the measures managers can review without turning the visit into administration.
            </p>
            <ul className={styles.takeaways}>
              {GUIDE_TAKEAWAYS.map((takeaway) => <li key={takeaway}>{takeaway}</li>)}
            </ul>
            <p className={styles.guideMeta}>Jure Malalan · Updated 14 July 2026 · 7 min read</p>
            <ArrowLink href="/article">Read the full clienteling guide</ArrowLink>
          </div>
        </div>
      </section>

      <section className={styles.questions} aria-labelledby="resource-questions-title">
        <div className={styles.shell}>
          <div className={styles.sectionHeading}>
            <p className={`${styles.eyebrow} ${styles.eyebrowDark}`}>Explore by question</p>
            <h2 id="resource-questions-title">Choose the retail problem you are working on.</h2>
            <p>
              Start with the question closest to your current workflow. Each path explains the problem, the AXY approach and the information involved.
            </p>
          </div>

          <div className={styles.questionGrid}>
            {QUESTIONS.map((question) => (
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
            <p className={styles.eyebrow}>Choose your perspective</p>
            <h2 id="resource-perspectives-title">Start from your side of the retail network.</h2>
          </div>
          <div className={styles.perspectiveGrid}>
            {PERSPECTIVES.map((perspective) => (
              <article className={styles.perspective} key={perspective.label}>
                <p className={styles.perspectiveLabel}>{perspective.label}</p>
                <h3>{perspective.title}</h3>
                <p>{perspective.copy}</p>
                <ArrowLink href={perspective.href} light>Explore this perspective</ArrowLink>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.finalCta} aria-labelledby="resources-cta-title">
        <div className={`${styles.shell} ${styles.finalCtaInner}`}>
          <div>
            <p className={styles.eyebrow}>See the workflow</p>
            <h2 id="resources-cta-title">Want to see the work in context?</h2>
            <p>Explore the connected AXY surfaces or book a walkthrough focused on your stores, products and systems.</p>
          </div>
          <div className={styles.actions}>
            <Link className={styles.primaryButtonLight} href="/product">Explore the platform</Link>
            <Link className={styles.secondaryButtonLight} href="/book-a-walkthrough#schedule">Book a walkthrough</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
