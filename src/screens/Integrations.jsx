import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/integrations.module.css';

const SHARED_RECORDS = [
  {
    title: 'Products and variants',
    copy: 'Identifiers, descriptions, specifications, media, documents and supported price fields.',
  },
  {
    title: 'Stock and availability',
    copy: 'Approved location, quantity, availability and incoming-stock context from connected sources.',
  },
  {
    title: 'Orders and invoice references',
    copy: 'Structured commercial records, line items and statuses for the workflows included in the implementation.',
  },
  {
    title: 'Companies and business units',
    copy: 'Shared company identity, locations and partner relationships without exposing every internal record.',
  },
  {
    title: 'Customers where permitted',
    copy: 'Only the customer fields required for an approved purpose, under the agreed permission and consent model.',
  },
  {
    title: 'Partner permissions',
    copy: 'Who can publish, review, accept or receive each supported object and update.',
  },
];

const INTEGRATION_STEPS = [
  {
    number: '01',
    title: 'Connect',
    copy: 'Use an API, webhook, scheduled synchronisation, structured file or a scoped adapter.',
  },
  {
    number: '02',
    title: 'Map and validate',
    copy: 'Align identifiers, fields, formats and required values with the shared AXY model.',
  },
  {
    number: '03',
    title: 'Set authority and permissions',
    copy: 'Agree the source of truth, direction, frequency and access rules for each record.',
  },
  {
    number: '04',
    title: 'Reuse the standard',
    copy: 'Run supported catalogue, availability, order and partner workflows without inventing another partner format.',
  },
];

const EDGE_RULES = [
  {
    title: 'Your systems keep their role',
    copy: 'ERP, CRM, PIM, POS, accounting and commerce systems can remain authoritative inside each company.',
  },
  {
    title: 'AXY standardises the exchange',
    copy: 'The agreed cross-company records are mapped into consistent objects, identifiers and validation rules.',
  },
  {
    title: 'Specific logic stays at the edge',
    copy: 'Company-specific mappings and workflows can be handled in the connector or remain in the source system.',
  },
];

const ARCHITECTURE_SYSTEMS = [
  'ERP and accounting',
  'CRM and customer data',
  'PIM and catalogues',
  'POS and inventory',
  'Commerce platforms',
];

const ARCHITECTURE_NETWORK = [
  'Authorised retailers',
  'Brands and manufacturers',
  'AXY Back Office',
  'Sales and Customer Apps',
  'Approved analytics',
];

const FAQS = [
  {
    question: 'Can AXY connect to our ERP, CRM, PIM or POS?',
    answer: 'AXY is designed to connect to systems that provide a suitable API, webhook, structured feed or export. We confirm authentication, available fields, data quality, direction, frequency and permissions before defining the implementation.',
  },
  {
    question: 'Does AXY replace our existing systems?',
    answer: 'Not necessarily. Your ERP, CRM, PIM, POS, accounting or commerce platform can remain the internal source of truth. AXY becomes the shared operational reference for the approved information exchanged across supported retailer and brand workflows.',
  },
  {
    question: 'Does every partner need a separate integration?',
    answer: 'Each source still needs access, mapping, validation and permission setup. Once mapped to the AXY standard, supported partner exchanges can reuse the same shared model instead of creating a different point-to-point format for every relationship.',
  },
  {
    question: 'What does standardised mean in AXY?',
    answer: 'Shared objects such as products, variants, companies, business units, availability, orders and partner permissions follow common identifiers, fields and validation rules. Source-specific fields can be mapped at the integration edge without changing the core model for everyone.',
  },
  {
    question: 'How customisable is the integration?',
    answer: 'Mappings, connection methods and workflow rules can be scoped for the source system and business purpose. AXY does not create a separate core product model for every customer, because the common structure is what makes network exchange reusable.',
  },
  {
    question: 'How are product requests and monthly releases handled?',
    answer: 'Requests are reviewed for their value across the network. Approved improvements enter AXY’s monthly release cycle. A request is not an automatic commitment to build a customer-specific fork or to deliver every change within one month.',
  },
  {
    question: 'What if a source system has no suitable API?',
    answer: 'We can assess structured imports or exports, scheduled files, middleware or a scoped adapter. Feasibility depends on the source system, accessible data, security requirements and the agreed business purpose.',
  },
  {
    question: 'Do the logos on this page mean native connectors or partnerships?',
    answer: 'No. They identify representative platforms whose data can be assessed for mapping through the AXY API. A logo does not mean an off-the-shelf connector, certification, endorsement or partnership. Technical fit and scope are confirmed for each implementation.',
  },
];

function Architecture() {
  return (
    <figure
      className={styles.architecture}
      aria-labelledby="integration-architecture-title"
      data-integration-architecture="shared-model"
    >
      <div className={styles.architectureHeader}>
        <p>One shared exchange model</p>
        <strong id="integration-architecture-title">Many systems. One agreed structure between companies.</strong>
      </div>

      <div className={styles.architectureFlow}>
        <section className={styles.architectureLane} aria-labelledby="integration-systems-title">
          <p id="integration-systems-title" className={styles.architectureLabel}>Your systems</p>
          <ul data-architecture-side="systems">
            {ARCHITECTURE_SYSTEMS.map((system) => (
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
          aria-label="AXY shared exchange model: mapping, validation and permissions"
        >
          <span className={styles.architectureMark}>AXY</span>
          <strong>Shared exchange model</strong>
          <p>Map · validate · govern</p>
        </div>

        <div className={styles.architectureConnector} aria-hidden="true">
          <span />
        </div>

        <section className={`${styles.architectureLane} ${styles.architectureLaneNetwork}`} aria-labelledby="integration-network-title">
          <p id="integration-network-title" className={styles.architectureLabel}>Connected network</p>
          <ul data-architecture-side="network">
            {ARCHITECTURE_NETWORK.map((destination) => (
              <li key={destination} data-architecture-node="network">
                <span aria-hidden="true" />
                {destination}
              </li>
            ))}
          </ul>
        </section>
      </div>

      <figcaption>
        <strong>Each source keeps its authority.</strong>
        <span>Only agreed records cross the shared layer, so supported partner workflows reuse one consistent structure.</span>
      </figcaption>
    </figure>
  );
}

export default function Integrations() {
  return (
    <main className={styles.page} data-screen-label="Integrations" data-analytics-location="integrations">
      <section className={styles.hero} aria-labelledby="integrations-title">
        <div className={styles.inner}>
          <div className={styles.heroGrid}>
            <div className={styles.heroCopy}>
              <p className={styles.eyebrow}>AXY integration layer</p>
              <h1 id="integrations-title">Connect once. Exchange through one standard.</h1>
              <p className={styles.heroLead}>
                Retailers and brands can keep the systems they already use. AXY maps approved products, stock, orders, invoice references, customers and partner records into one consistent structure, so supported workflows can move across the network without inventing a new format for every relationship.
              </p>
              <p className={styles.heroQualifier}>
                Your ERP, CRM, PIM, POS and accounting platforms can remain authoritative. AXY is the shared operational reference for the information exchanged between connected companies.
              </p>
              <div className={styles.heroActions}>
                <Link className={styles.buttonLight} href="/book-a-walkthrough#schedule">
                  Map your integration landscape
                </Link>
                <Link className={styles.buttonOutlineLight} href="/back-office">
                  Explore AXY Back Office
                </Link>
              </div>
            </div>

            <Architecture />
          </div>
        </div>
      </section>

      <section className={styles.platforms} aria-labelledby="platforms-title">
        <div className={styles.inner}>
          <div className={styles.sectionIntro}>
            <p className={styles.eyebrow}>Representative system landscape</p>
            <h2 id="platforms-title">Map the systems already running your business.</h2>
            <p>
              AXY is designed to work with platforms that expose suitable APIs, webhooks or structured data access. These are examples of systems whose data can be assessed and mapped—not a list of certified or prebuilt connectors.
            </p>
          </div>

          <ul className={styles.logoGrid} aria-label="Representative systems">
            <li className={styles.logoItem}>
              <Image
                src="/images/integrations/logos/salesforce.webp"
                alt="Salesforce"
                width={1080}
                height={744}
                sizes="(max-width: 700px) 72vw, 280px"
              />
              <p>CRM example</p>
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
              <p>ERP and CRM example</p>
            </li>
            <li className={styles.logoItem}>
              <Image
                src="/images/integrations/logos/odoo.svg"
                alt="Odoo"
                width={919}
                height={495}
                sizes="(max-width: 700px) 72vw, 280px"
              />
              <p>ERP and business-suite example</p>
            </li>
          </ul>

          <div className={styles.textExamples}>
            <p className={styles.textExamplesLabel}>Other systems assessed by capability</p>
            <p>SAP · Oracle NetSuite · Shopify · HubSpot · WooCommerce · POS · PIM · accounting · inventory · commerce</p>
          </div>

          <p className={styles.trademarkNote}>
            Examples only. Trademarks belong to their respective owners. Salesforce is a trademark of Salesforce, Inc. Logos do not imply endorsement, partnership, certification or an off-the-shelf connector. Technical fit, permissions, direction and scope are confirmed during implementation.
          </p>
        </div>
      </section>

      <section className={styles.problem} aria-labelledby="problem-title">
        <div className={styles.inner}>
          <div className={styles.problemGrid}>
            <div className={styles.problemCopy}>
              <p className={styles.eyebrow}>The point-to-point problem</p>
              <h2 id="problem-title">Stop rebuilding the same integration for every partner.</h2>
              <p>
                A direct retailer-to-brand connection creates another schema, export, API and maintenance path. Add more partners and the network becomes a collection of one-off mappings that all need to be maintained.
              </p>
            </div>

            <div className={styles.comparison}>
              <article>
                <p className={styles.comparisonNumber}>Without a shared standard</p>
                <h3>Every relationship starts again.</h3>
                <p>Each pair defines its own fields, file format, mapping, validation and update logic.</p>
              </article>
              <article>
                <p className={styles.comparisonNumber}>With the AXY model</p>
                <h3>Each organisation maps to a common structure.</h3>
                <p>Supported partner exchanges reuse the same governed objects and permission rules.</p>
              </article>
            </div>
          </div>
          <p className={styles.caveat}>Each source system still requires access, mapping, validation and permission setup. Standardisation reduces custom integration work; it does not eliminate implementation.</p>
        </div>
      </section>

      <section className={styles.standard} aria-labelledby="standard-title">
        <div className={styles.inner}>
          <div className={styles.standardHeader}>
            <div>
              <p className={styles.eyebrow}>The shared model</p>
              <h2 id="standard-title">One common format for the records the network needs.</h2>
            </div>
            <p>
              AXY organises supported fields into consistent objects. Companies keep private or business-specific data in their own systems and exchange only what the approved workflow requires.
            </p>
          </div>

          <div className={styles.recordList}>
            {SHARED_RECORDS.map((record, index) => (
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
            <p className={styles.eyebrow}>From source to shared workflow</p>
            <h2 id="process-title">Connect, govern and reuse.</h2>
            <p>
              The method may be a direct API, webhook, scheduled synchronisation, structured import or custom adapter. What matters is agreeing the model and control before data moves.
            </p>
          </div>

          <ol className={styles.processList}>
            {INTEGRATION_STEPS.map((step) => (
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
              <p className={styles.eyebrow}>How AXY stays interoperable</p>
              <h2 id="flexibility-title">Standard at the core. Flexible at the edge.</h2>
              <p className={styles.flexibilityLead}>
                AXY does not create a different core data model for every customer. That consistency is what lets retailers, brands and manufacturers exchange information through the same network.
              </p>
            </div>

            <div className={styles.edgeRules}>
              {EDGE_RULES.map((rule, index) => (
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
            <p className={styles.eyebrow}>Monthly product cycle</p>
            <h3 id="release-title">A shared product improves through shared needs.</h3>
            <p>
              Users can request additions or changes. We review requests for their value across the network, and approved improvements enter AXY’s monthly release cycle. A request is not an automatic commitment to build a customer-specific fork or to deliver every change within one month.
            </p>
          </aside>
        </div>
      </section>

      <section className={styles.governance} aria-labelledby="governance-title">
        <div className={styles.inner}>
          <div className={styles.governanceGrid}>
            <div>
              <p className={styles.eyebrow}>Ownership and control</p>
              <h2 id="governance-title">A shared source of truth does not mean shared ownership of everything.</h2>
            </div>
            <div className={styles.governanceCopy}>
              <p>
                The shared reference contains the records deliberately exchanged for an approved workflow. Internal forecasts, margins, notes, customer identities and other private data remain inside the company’s own environment unless a defined purpose, permission and consent model says otherwise.
              </p>
              <dl>
                <div>
                  <dt>Authority</dt>
                  <dd>Define which system owns each record and which updates it may accept.</dd>
                </div>
                <div>
                  <dt>Direction</dt>
                  <dd>Agree what moves in, what moves out and what remains private.</dd>
                </div>
                <div>
                  <dt>Frequency</dt>
                  <dd>Choose a suitable event, schedule or reviewed transfer for the source.</dd>
                </div>
                <div>
                  <dt>Monitoring</dt>
                  <dd>Validate mappings, handle errors and review changes as the source evolves.</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.faq} aria-labelledby="faq-title">
        <div className={styles.inner}>
          <div className={styles.faqGrid}>
            <div className={styles.faqIntro}>
              <p className={styles.eyebrow}>Integration questions</p>
              <h2 id="faq-title">What to confirm before connecting.</h2>
              <p>Every useful integration begins with a clear purpose, source of truth, field map and permission model.</p>
            </div>
            <div className={styles.faqList}>
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
        </div>
      </section>

      <section className={styles.finalCta} aria-labelledby="integration-cta-title">
        <div className={styles.inner}>
          <p className={styles.eyebrow}>Start with the landscape</p>
          <h2 id="integration-cta-title">Map the systems, records and partner flows that matter first.</h2>
          <p>
            We will review your current systems, API or export access, data ownership, partner relationships and the first shared workflow worth connecting.
          </p>
          <div className={styles.finalActions}>
            <Link className={styles.buttonLight} href="/book-a-walkthrough#schedule">
              Book an integration call
            </Link>
            <Link className={styles.buttonOutlineLight} href="/contact">
              Contact AXY
            </Link>
          </div>
          <nav className={styles.audienceLinks} aria-label="Integration audiences">
            <Link href="/for-retailers">See AXY for retailers →</Link>
            <Link href="/for-brands">See AXY for brands →</Link>
          </nav>
        </div>
      </section>
    </main>
  );
}
