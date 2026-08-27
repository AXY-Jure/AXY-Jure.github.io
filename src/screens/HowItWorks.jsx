import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/how-it-works.module.css';

const STAGES = [
  ['01', 'Capture', 'Useful activity enters AXY during normal work.'],
  ['02', 'Connect', 'Every action is linked to the context that gives it meaning.'],
  ['03', 'Act', 'AXY creates, routes or recommends the appropriate next step.'],
  ['04', 'Continue', 'The right participant continues from the same context.'],
  ['05', 'Understand', 'Connected activity becomes clearer business intelligence.'],
];

const FAQS = [
  ['What is AXY?', 'AXY is a connected retail context and workflow platform that links sales activity, customers, products, stock, business operations and approved partner workflows.'],
  ['How much additional work does AXY create for salespeople?', 'AXY is designed to capture useful context through quick actions inside the salesperson’s normal mobile workflow. The exact input depends on the workflow and company setup.'],
  ['Does AXY replace our POS, ERP or CRM?', 'Not necessarily. AXY can work independently for selected workflows or connect existing business systems as the retail sales, customer and partner-collaboration layer.'],
  ['Can AXY work before an integration is completed?', 'Yes. Retailers and brands can begin with structured imports and selected workflows before adding deeper system connections.'],
  ['What can brand partners see?', 'A brand sees only the workflow information or aggregated insight approved for that partner relationship. It does not automatically receive retailer customer databases, internal notes or protected commercial records.'],
  ['How does AXY keep company information separated?', 'Business-unit boundaries, partner permissions and workflow purposes determine which records remain private and which information may be exchanged.'],
  ['Can AXY work across multiple locations?', 'Yes. AXY is designed to connect activity, products, customers, teams and stock context across configured stores and business units.'],
];

const STARTING_POINTS = [
  ['01', 'Independent retailer', 'Set up the company, location, users and essential product information. Begin with sales visits, customer follow-ups or the Customer App.'],
  ['02', 'Multi-location retailer', 'Connect locations, teams, stock context and management visibility around one useful workflow.'],
  ['03', 'Brand or manufacturer', 'Connect a catalogue, invite selected retail partners and begin with product updates, availability, warranty or another controlled workflow.'],
];

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
  return (
    <main className={styles.page} data-screen-label="How AXY Works" data-analytics-location="how_it_works">
      <section className={styles.hero} aria-labelledby="how-hero-title">
        <div className={styles.heroInner}>
          <div className={styles.heroCopy}>
            <Eyebrow light>How AXY works</Eyebrow>
            <h1 id="how-hero-title">How AXY turns everyday retail activity into connected action.</h1>
            <p className={styles.heroLead}>AXY connects what happens in stores, customer journeys, Back Office workflows, partner relationships and existing systems—then gives each authorised participant the context needed to continue.</p>
            <div className={styles.heroActions}>
              <Link className={styles.buttonLight} href="/book-a-walkthrough#schedule">Get guided setup</Link>
              <Link className={styles.buttonGhost} href="/product">Explore the platform</Link>
            </div>
            <Link className={styles.textLinkLight} href="/for-retailers">See AXY for retailers <span aria-hidden="true">→</span></Link>
          </div>
          <figure className={styles.heroVisual}>
            <Image src="/images/how-it-works/hero-retail-guidance.webp" alt="A retail advisor presenting a product to a customer during an in-store consultation." width={1335} height={748} sizes="(max-width: 860px) 100vw, 58vw" priority />
            <figcaption>The in-store moment is where the connected workflow begins.</figcaption>
          </figure>
        </div>
      </section>

      <section className={styles.model} aria-labelledby="operating-model-title">
        <div className={styles.inner}>
          <div className={styles.modelIntro}>
            <Eyebrow>The operating model</Eyebrow>
            <h2 id="operating-model-title">One action gains context—and becomes useful across the business.</h2>
            <p>A salesperson, customer, manager or connected system performs an action. AXY links it to the relevant product, customer, employee, store, stock and partner context, then keeps the next step connected.</p>
          </div>
          <nav className={styles.stageNav} aria-label="How AXY works stages">
            <ol>
              {STAGES.map(([number, name], index) => (
                <li key={name}><a href={`#axy-how-s${index}`}><span>{number}</span><strong>{name}</strong></a></li>
              ))}
            </ol>
          </nav>
        </div>
      </section>

      <section id="axy-how-s0" className={`${styles.stage} ${styles.stageWhite}`} aria-labelledby="capture-title">
        <div className={`${styles.inner} ${styles.stageGrid}`}>
          <div className={styles.stageCopy}>
            <StageHeading id="capture-title" number="01" name="Capture" title="Useful activity enters AXY during normal work." copy="Information can come from employees, customers, Back Office, retail partners or connected systems. Capture happens as part of the workflow—not as a separate reporting exercise." />
            <ul className={styles.editorialList}>
              <li><strong>Sales App</strong><span>Visits, products presented, reactions, tasks and service intake.</span></li>
              <li><strong>Customer App</strong><span>Saved products, inquiries, appointments and service actions.</span></li>
              <li><strong>Back Office</strong><span>Catalogues, stock, orders, warranties and operational updates.</span></li>
              <li><strong>Partners and systems</strong><span>Approved updates, availability, orders and structured data.</span></li>
            </ul>
          </div>
          <figure className={styles.landscapeVisual}>
            <Image src="/images/how-it-works/capture-scan.webp" alt="A retail advisor scanning a product tag with the AXY Sales App." width={1330} height={751} sizes="(max-width: 860px) 100vw, 52vw" />
            <figcaption>Capture product and visit context while the work is happening.</figcaption>
          </figure>
        </div>
      </section>

      <section id="axy-how-s1" className={`${styles.stage} ${styles.stageMist}`} aria-labelledby="connect-title">
        <div className={`${styles.inner} ${styles.stageGrid} ${styles.stageReverse}`}>
          <div className={styles.stageCopy}>
            <StageHeading id="connect-title" number="02" name="Connect" title="Every action is connected to its full retail context." copy="AXY links the activity to the information required to understand what happened and what should happen next. The value is not the action alone—it is knowing what it belongs to." />
            <p className={styles.callout}>The same action can carry product, customer, employee, store, stock, visit and permission context without opening the complete record to everyone.</p>
          </div>
          <figure className={styles.contextFigure} aria-labelledby="context-caption">
            <div className={styles.contextOrigin}><span>One action</span><strong>A product is scanned during a customer visit</strong></div>
            <div className={styles.contextLine} aria-hidden="true" />
            <dl className={styles.contextNodes}>
              <div><dt>Product</dt><dd>Item and variant</dd></div>
              <div><dt>Relationship</dt><dd>Customer or anonymous visit</dd></div>
              <div><dt>People</dt><dd>Employee and responsible team</dd></div>
              <div><dt>Place</dt><dd>Store and business unit</dd></div>
              <div><dt>Availability</dt><dd>Local and approved partner stock</dd></div>
              <div><dt>Control</dt><dd>Purpose and permissions</dd></div>
            </dl>
            <figcaption id="context-caption">One action, connected to the context needed for the next decision.</figcaption>
          </figure>
        </div>
      </section>

      <section id="axy-how-s2" className={`${styles.stage} ${styles.stageWarm}`} aria-labelledby="act-title">
        <div className={`${styles.inner} ${styles.stageGrid}`}>
          <div className={styles.stageCopy}>
            <StageHeading id="act-title" number="03" name="Act" title="AXY creates, routes or recommends the next step." copy="According to the configured workflow, connected activity can create an operational action or help a person decide what should happen next." />
            <ul className={styles.editorialList}>
              <li><strong>Follow up</strong><span>Continue a customer conversation with the relevant products and visit context.</span></li>
              <li><strong>Resolve availability</strong><span>Request stock, prepare an alternative or coordinate an order.</span></li>
              <li><strong>Move the workflow</strong><span>Prepare an offer, review an update or continue service.</span></li>
            </ul>
            <p className={styles.humanNote}><strong>People stay in control.</strong> Alfred can suggest. It does not contact customers, approve commercial actions or share protected information on its own.</p>
          </div>
          <figure className={styles.phoneFigure}>
            <PhoneArtwork src="/images/how-it-works/act-suggestion.webp" alt="AXY Sales App recommendation showing an available product and the actions a salesperson can choose." width={900} height={1948} />
            <figcaption>The person responsible chooses whether and how to act.</figcaption>
          </figure>
        </div>
      </section>

      <section id="axy-how-s3" className={`${styles.stage} ${styles.stageWhite}`} aria-labelledby="continue-title">
        <div className={`${styles.inner} ${styles.stageGrid} ${styles.stageReverse}`}>
          <div className={styles.stageCopy}>
            <StageHeading id="continue-title" number="04" name="Continue" title="The right participant continues from the same context." copy="The customer, salesperson, manager or approved partner receives the part of the workflow relevant to them. They continue without rebuilding the story from the beginning." />
            <ol className={styles.continuationList}>
              <li><span>Salesperson</span> sees the next customer or operational action.</li>
              <li><span>Customer</span> keeps viewed products, inquiries, appointments and service in one place.</li>
              <li><span>Manager</span> sees the workflow and business context needed to support the team.</li>
              <li><span>Partner</span> receives only the approved request, response or update.</li>
            </ol>
          </div>
          <figure className={styles.landscapeVisual}>
            <Image src="/images/how-it-works/continue-customer.webp" alt="A customer continuing an in-store product journey in the AXY Customer App." width={1600} height={896} sizes="(max-width: 860px) 100vw, 52vw" />
            <figcaption>The relationship continues after the customer leaves the store.</figcaption>
          </figure>
        </div>
      </section>

      <section id="axy-how-s4" className={`${styles.stage} ${styles.stageDark}`} aria-labelledby="understand-title">
        <div className={`${styles.inner} ${styles.stageGrid}`}>
          <div className={styles.stageCopy}>
            <StageHeading id="understand-title" number="05" name="Understand" title="Connected activity becomes clearer business intelligence." copy="When activity carries context, teams can understand more than completed transactions. Approved signals help reveal demand, product visibility, stock pressure and missed opportunities." light />
            <ul className={`${styles.editorialList} ${styles.editorialListDark}`}>
              <li><strong>Demand</strong><span>What customers ask for, save, compare or cannot find.</span></li>
              <li><strong>Product performance</strong><span>What is presented, considered and converted.</span></li>
              <li><strong>Stock context</strong><span>Where interest and availability do not align.</span></li>
              <li><strong>Follow-through</strong><span>Where customer and operational workflows stop moving.</span></li>
            </ul>
            <p className={styles.darkFootnote}>Useful context for decisions—not a promise of perfect forecasting.</p>
          </div>
          <figure className={`${styles.phoneFigure} ${styles.phoneFigureDark}`}>
            <PhoneArtwork src="/images/home-clean/mobile-analytics.webp" alt="AXY mobile analytics showing aggregate sales, visits, offers and performance trends." width={900} height={1955} />
            <figcaption>Aggregate performance and workflow signals remain available on mobile.</figcaption>
          </figure>
        </div>
      </section>

      <section className={styles.caseStudy} aria-labelledby="case-study-title">
        <div className={styles.inner}>
          <div className={styles.caseStudyLead}>
            <div className={styles.caseStudyCopy}>
              <Eyebrow>One connected example</Eyebrow>
              <h2 id="case-study-title">A customer wants a product that is not currently available.</h2>
              <p>The interaction starts in the store, but the opportunity should not disappear when the customer leaves.</p>
            </div>
            <figure className={styles.caseStudyVisual}>
              <Image src="/images/how-it-works/customer-at-home.webp" alt="A customer checking her phone at home after an in-store visit." width={1600} height={892} sizes="(max-width: 900px) calc(100vw - 32px), 57vw" />
              <figcaption>One relationship continues across the store and the customer’s own time.</figcaption>
            </figure>
          </div>
          <ol className={styles.caseSteps}>
            <li><span>01</span><div><strong>Capture the interest</strong><p>The salesperson records the product, variant and customer response during the visit.</p></div></li>
            <li><span>02</span><div><strong>Connect availability</strong><p>AXY checks the relevant stock context or sends an approved availability request.</p></div></li>
            <li><span>03</span><div><strong>Keep the relationship moving</strong><p>The customer keeps the product in their store relationship while the team follows the request.</p></div></li>
            <li><span>04</span><div><strong>Respond with context</strong><p>The salesperson can follow up with availability, an alternative, an offer or the next appropriate action.</p></div></li>
            <li><span>05</span><div><strong>Learn from the outcome</strong><p>Management sees unmet demand; a partner receives only approved or aggregated context.</p></div></li>
          </ol>
        </div>
      </section>

      <section className={styles.permissions} aria-labelledby="permissions-title">
        <div className={styles.inner}>
          <div className={styles.permissionsIntro}>
            <Eyebrow>Permission-controlled by design</Eyebrow>
            <h2 id="permissions-title">Connection does not mean unrestricted access.</h2>
            <p>AXY connects the information needed for an approved purpose while company, retailer and customer records remain under the control of their owner.</p>
          </div>
          <div className={styles.permissionFlow}>
            <article><span>01</span><h3>Private context stays private</h3><p>Customer identities, internal notes, commercial terms and protected records are not automatically opened to another company.</p></article>
            <article><span>02</span><h3>The workflow defines what moves</h3><p>An availability request, catalogue update, order or warranty action carries only the fields required for that purpose.</p></article>
            <article><span>03</span><h3>Insight can be aggregated</h3><p>Approved activity can contribute to product and market intelligence without exposing identifiable customer or retailer records.</p></article>
          </div>
          <div className={styles.systemsRow}>
            <div><h3>Connect existing systems when the workflow needs it.</h3><p>AXY can begin independently, with structured imports, or connect POS, ERP, CRM, PIM, inventory and order systems over time.</p></div>
            <Link className={styles.textLink} href="/integrations">Explore integrations <span aria-hidden="true">→</span></Link>
          </div>
        </div>
      </section>

      <section className={styles.begin} aria-labelledby="begin-title">
        <div className={styles.inner}>
          <div className={styles.beginIntro}><Eyebrow>How to begin</Eyebrow><h2 id="begin-title">Start with one useful workflow. Expand when it creates value.</h2></div>
          <div className={styles.startingPoints}>
            {STARTING_POINTS.map(([number, title, copy]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p></article>)}
          </div>
          <p className={styles.beginNote}>Deeper POS, ERP, CRM, inventory or product-system connections can be added according to the business need.</p>
          <div className={styles.beginActions}>
            <Link className={styles.buttonDark} href="/book-a-walkthrough#schedule">Get guided setup</Link>
            <a className={styles.buttonOutline} href="https://app.axy.net/onboarding">Create free account</a>
          </div>
        </div>
      </section>

      <section className={styles.faq} aria-labelledby="faq-title">
        <div className={styles.faqInner}>
          <Eyebrow>How AXY works in practice</Eyebrow>
          <h2 id="faq-title">Clear answers before you begin.</h2>
          <div className={styles.faqList}>
            {FAQS.map(([question, answer]) => <details key={question}><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p></details>)}
          </div>
        </div>
      </section>

      <section className={styles.finalCta} aria-labelledby="final-cta-title">
        <div className={styles.finalInner}>
          <h2 id="final-cta-title">See how AXY would connect your first workflow.</h2>
          <p>Review your store activity, customer journey, product data, partner relationships and existing systems with our team. We will identify the first workflow worth connecting and explain what each participant will see.</p>
          <div className={styles.finalActions}>
            <Link className={styles.buttonLight} href="/book-a-walkthrough#schedule">Get guided setup</Link>
            <Link className={styles.buttonGhost} href="/product">Explore the full platform</Link>
          </div>
          <div className={styles.finalLinks}>
            <Link href="/for-retailers">See AXY for retailers</Link>
            <Link href="/for-brands">See AXY for brands</Link>
            <Link href="/integrations">Explore integrations</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
