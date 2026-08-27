import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/back-office.module.css';

const MANAGEMENT_AREAS = [
  {
    number: '01',
    title: 'Products and catalogues',
    copy: 'Manage product hierarchy, variants, specifications, prices, images, documents and approved partner content.',
  },
  {
    number: '02',
    title: 'Commercial records',
    copy: 'Open the stock, order, invoice, customer or service record behind the overview.',
  },
  {
    number: '03',
    title: 'Business network',
    copy: 'Maintain company profiles, business units, locations, responsibilities and partner relationships.',
  },
  {
    number: '04',
    title: 'Media and analysis',
    copy: 'Prepare approved announcements and move from aggregate performance to the exact detail behind it.',
  },
];

const CATALOGUE_STEPS = [
  {
    title: 'Partner publishes',
    copy: 'A connected brand makes an approved catalogue or product update available to your company.',
  },
  {
    title: 'You review',
    copy: 'Select the products and changes that are relevant to your assortment and workflow.',
  },
  {
    title: 'AXY structures',
    copy: 'Supported fields map into the same product structure for identity, variants, media, prices and documents.',
  },
  {
    title: 'Your catalogue updates',
    copy: 'Accepted products and approved changes enter your database without rebuilding another partner spreadsheet.',
  },
];

const RECORD_GROUPS = [
  {
    title: 'Product database',
    copy: 'Products, categories, variants, identifiers, specifications, prices, images, video and documents.',
  },
  {
    title: 'Orders and invoices',
    copy: 'Order lines, partner confirmation, fulfilment, receipts, invoice references and status.',
  },
  {
    title: 'Stock and availability',
    copy: 'Location-level stock context, reservations, transfers, counts, incoming goods and availability requests.',
  },
  {
    title: 'Customers',
    copy: 'Authorised customer profiles connected to visits, interests, offers, invoices, service and follow-up.',
  },
  {
    title: 'Business units and profile',
    copy: 'Company and location details, teams, roles, responsibilities, services, opening hours and profile media.',
  },
  {
    title: 'Partners and communication',
    copy: 'Retailer, brand and distributor relationships, permissions, catalogues, media and announcements.',
  },
];

const ORDER_STEPS = [
  {
    number: '01',
    title: 'Review availability',
    copy: 'Check connected stock positions, reservations, transfers, count results and incoming products.',
  },
  {
    number: '02',
    title: 'Prepare the record',
    copy: 'Create an availability inquiry, order, reorder or transfer from the same product references.',
  },
  {
    number: '03',
    title: 'Coordinate fulfilment',
    copy: 'Follow partner confirmation, partial quantities, expected dates and received goods.',
  },
  {
    number: '04',
    title: 'Reconcile status',
    copy: 'Keep order lines, receipts, invoice references and relevant stock updates connected.',
  },
];

const SYSTEM_ROLES = [
  {
    term: 'CRM',
    description: 'Customer, company and relationship context.',
  },
  {
    term: 'ERP or accounting',
    description: 'Stock, orders, invoices and financial status.',
  },
  {
    term: 'PIM or commerce',
    description: 'Catalogue data, product media and publishing.',
  },
  {
    term: 'AXY Back Office',
    description: 'A shared management layer for supported records, permissions and partner workflows.',
  },
];

const FAQS = [
  {
    question: 'What can be managed in AXY Back Office?',
    answer: 'Back Office is designed to manage products and catalogues, stock context, orders, invoices, customers, business units, company profiles, partners, media, announcements and management analysis. The exact modules and editable fields depend on the configured workspace and source systems.',
  },
  {
    question: 'How do I add products from a partner?',
    answer: 'When a connected brand makes an approved catalogue available, your company can review and accept the relevant selection. Supported fields are organised into the AXY product structure according to the configured mapping and permissions.',
  },
  {
    question: 'Do I need a custom integration for every manufacturer?',
    answer: 'AXY is designed to provide a shared connection layer for supported partner workflows, reducing separate point-to-point work. Each partner and source system still requires available data, mapping, permissions and an agreed implementation scope.',
  },
  {
    question: 'Does Back Office replace our ERP, CRM, PIM or accounting system?',
    answer: 'Not necessarily. During setup, each record type is assigned an authoritative source. AXY can manage selected workflows directly or exchange approved data with the systems that remain the source of truth.',
  },
  {
    question: 'Does every update happen automatically?',
    answer: 'No. Product and partner updates can be reviewed before acceptance. Automatic synchronisation is used only when the integration, update rule and permission model have been deliberately configured.',
  },
  {
    question: 'Can a partner see our customers or internal records?',
    answer: 'Not by default. A partner receives only the fields and actions required for an approved workflow. Customer identities, internal notes, margins and commercial strategy remain private unless a deliberate permission says otherwise.',
  },
];

export default function BackOffice() {
  return (
    <main
      className={styles.page}
      data-screen-label="Back Office"
      data-analytics-location="back_office"
    >
      <section className={styles.hero} aria-labelledby="back-office-title">
        <div className={`${styles.inner} ${styles.heroGrid}`}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>AXY Back Office</p>
            <h1 id="back-office-title">Manage the business behind every sale.</h1>
            <p className={styles.heroLead}>
              AXY Back Office is the management hub for products, orders, invoices, stock, customers, business units and partner relationships. Connect the systems you already use, bring approved partner catalogues into one consistent structure and open the detail whenever you need it.
            </p>
            <div className={styles.heroActions}>
              <a className={styles.buttonPrimary} href="https://app.axy.net/onboarding">
                Create free account
              </a>
              <Link className={styles.buttonSecondary} href="/book-a-walkthrough#schedule">
                Get guided setup
              </Link>
            </div>
            <Link className={styles.textLink} href="/integrations">
              Explore AXY integrations <span aria-hidden="true">→</span>
            </Link>
          </div>

          <figure className={styles.heroFigure}>
            <Image
              src="/images/back-office/hero-management-hub.webp"
              alt="Desktop monitor showing an AXY Back Office management hub with products, orders, invoices, stock, customers, business units, partners, media and announcements."
              width={1536}
              height={1024}
              sizes="(max-width: 900px) 100vw, 58vw"
              priority
              fetchPriority="high"
            />
            <figcaption>Illustrative Back Office interface shown with fictional demonstration data.</figcaption>
          </figure>
        </div>
      </section>

      <section className={styles.questions} aria-labelledby="management-workspace-title">
        <div className={styles.inner}>
          <div className={styles.sectionIntro}>
            <p className={styles.eyebrow}>One management workspace</p>
            <h2 id="management-workspace-title">Every operational record stays in its business context.</h2>
            <p>
              Move from the overview to the exact product, order, invoice, stock location, customer, partner or business unit without reconstructing the record across tools.
            </p>
          </div>
          <ol className={styles.questionList}>
            {MANAGEMENT_AREAS.map((area) => (
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
            <p className={styles.eyebrow}>01 · Partner catalogues and products</p>
            <h2 id="partner-catalogue-title">Add an approved partner catalogue without rebuilding it in Excel.</h2>
            <p>
              When a connected brand makes a catalogue available to your company, review the relevant products and accept supported images, descriptions, specifications, variants, price fields and documents into the same AXY structure.
            </p>
            <ol className={styles.catalogueFlow}>
              {CATALOGUE_STEPS.map((step, index) => (
                <li key={step.title}>
                  <span className={styles.number}>0{index + 1}</span>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.copy}</p>
                  </div>
                </li>
              ))}
            </ol>
            <p className={styles.finePrint}>
              Catalogue availability, field coverage, mapping and update behaviour depend on the partner&apos;s published data and the configured workflow. Structured files can still support initial or exceptional imports.
            </p>
          </div>
          <figure className={styles.productFigure}>
            <Image
              src="/images/back-office/product-record.webp"
              alt="AXY product record showing a product reference, approved price, variants and availability across locations."
              width={768}
              height={1432}
              sizes="(max-width: 760px) 72vw, 390px"
              loading="lazy"
            />
            <figcaption>Supported partner data is organised into a consistent AXY product record.</figcaption>
          </figure>
        </div>
      </section>

      <section className={`${styles.feature} ${styles.mist}`} aria-labelledby="records-title">
        <div className={styles.inner}>
          <div className={styles.wideIntro}>
            <p className={styles.eyebrow}>02 · Records and organisation</p>
            <h2 id="records-title">Start with the overview. Open the record behind it.</h2>
            <p>
              Back Office gives authorised teams one administrative place to maintain the detail behind the business, while each record keeps its product, location, company and permission context.
            </p>
          </div>
          <div className={styles.recordGrid}>
            {RECORD_GROUPS.map((group, index) => (
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
            <p className={styles.eyebrow}>03 · Stock, orders and invoices</p>
            <h2 id="stock-order-title">Keep commercial records connected from availability to fulfilment.</h2>
            <p>
              Review location-level stock context, prepare structured orders and follow confirmation, fulfilment and invoice status from the same product and business relationship.
            </p>
          </div>

          <figure className={styles.orderFigure}>
            <Image
              src="/images/back-office/orders.webp"
              alt="AXY Back Office order workspace showing order stages, partner status and product-level confirmations."
              width={1400}
              height={629}
              sizes="(max-width: 1180px) 100vw, 1120px"
              loading="lazy"
            />
            <figcaption>Illustrative order data shown for demonstration.</figcaption>
          </figure>

          <ol className={styles.processList}>
            {ORDER_STEPS.map((step) => (
              <li key={step.number}>
                <span className={styles.number}>{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.copy}</p>
              </li>
            ))}
          </ol>
          <p className={styles.darkNote}>
            Stock, financial and invoice authority remains with the configured source systems and agreed workflow.
          </p>
        </div>
      </section>

      <section className={`${styles.feature} ${styles.mist}`} aria-labelledby="profile-content-title">
        <div className={`${styles.inner} ${styles.coordinationGrid}`}>
          <div className={styles.coordinationCopy}>
            <p className={styles.eyebrow}>04 · Profile, media and announcements</p>
            <h2 id="profile-content-title">Keep each business unit accurate. Publish from approved content.</h2>
            <p>
              Maintain company and location information, services, profile images, teams, roles and permissions in the same workspace. Then use the product, media and partner context already available to prepare announcements for supported AXY surfaces.
            </p>
            <ol className={styles.partnerFlow}>
              <li>
                <span className={styles.number}>01</span>
                <div>
                  <h3>Maintain the organisation</h3>
                  <p>Keep business units, locations, profile information, images and responsibilities current.</p>
                </div>
              </li>
              <li>
                <span className={styles.number}>02</span>
                <div>
                  <h3>Prepare approved content</h3>
                  <p>Select the relevant product, collection, media, partner and intended audience.</p>
                </div>
              </li>
              <li>
                <span className={styles.number}>03</span>
                <div>
                  <h3>Review and publish</h3>
                  <p>Publish only through enabled modules, permissions and consented customer communication.</p>
                </div>
              </li>
            </ol>
          </div>

          <div className={styles.permissionPanel}>
            <p className={styles.panelLabel}>Control stays with each company</p>
            <dl>
              <div>
                <dt>Company-private</dt>
                <dd>Customer identities, internal notes, margins, commercial strategy and other private records.</dd>
              </div>
              <div>
                <dt>Partner-approved</dt>
                <dd>Defined catalogue fields, availability requests, structured orders and permitted shared media.</dd>
              </div>
              <div>
                <dt>Customer-facing</dt>
                <dd>Content selected for an enabled customer surface and delivered according to permissions and consent.</dd>
              </div>
              <div>
                <dt>Aggregated insight</dt>
                <dd>Product and market signals where permissions, purpose and sample size allow.</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <section className={`${styles.feature} ${styles.warm}`} aria-labelledby="analysis-title">
        <div className={styles.inner}>
          <div className={styles.decisionIntro}>
            <div>
              <p className={styles.eyebrow}>05 · Management and analysis</p>
              <h2 id="analysis-title">Go from totals to the detail behind them.</h2>
            </div>
            <p>
              Filter connected product, stock, catalogue, order and activity data by period, product, partner or business unit, then open the relevant record. AXY provides context; a person determines the cause and action.
            </p>
          </div>

          <figure className={styles.performanceFigure}>
            <Image
              src="/images/back-office/performance.webp"
              alt="AXY Back Office product performance trend, journey funnel, channel mix and decline-reason views."
              width={2240}
              height={1173}
              sizes="(max-width: 1180px) 100vw, 1120px"
              loading="lazy"
            />
            <figcaption>Illustrative aggregate data shown for demonstration.</figcaption>
          </figure>

          <ul className={styles.decisionList}>
            <li>Which products, catalogues or price records need review?</li>
            <li>Which orders, invoices or partner requests remain unresolved?</li>
            <li>Which business units or locations need operational follow-up?</li>
            <li>Which customer or commercial workflows are stalled?</li>
          </ul>
          <p className={styles.analysisNote}>
            Results reflect the systems, fields and refresh schedule connected to the workspace.
          </p>
        </div>
      </section>

      <section className={styles.connect} aria-labelledby="connect-title">
        <div className={`${styles.inner} ${styles.connectGrid}`}>
          <div>
            <p className={styles.eyebrow}>06 · Connected systems</p>
            <h2 id="connect-title">Connect your systems once. Reduce separate partner integrations.</h2>
          </div>
          <div className={styles.connectCopy}>
            <p>
              Connect AXY Back Office to the relevant CRM, ERP, accounting, inventory, PIM or commerce system. AXY can then provide a common layer for supported catalogue, order, invoice, stock, customer and partner workflows.
            </p>
            <dl className={styles.systemList}>
              {SYSTEM_ROLES.map((system) => (
                <div key={system.term}>
                  <dt>{system.term}</dt>
                  <dd>{system.description}</dd>
                </div>
              ))}
            </dl>
            <p className={styles.finePrint}>
              The exact records, direction, frequency and automation depend on available APIs, mapping, ownership and the agreed implementation.
            </p>
            <Link className={styles.inlineLink} href="/integrations">
              Review the integration approach <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        <div className={`${styles.inner} ${styles.audienceGrid}`}>
          <article>
            <p className={styles.eyebrow}>For retailers</p>
            <h3>Manage assortments, locations, customers, stock, orders, invoices and partner catalogues.</h3>
            <Link className={styles.inlineLink} href="/for-retailers">
              Explore AXY for retailers <span aria-hidden="true">→</span>
            </Link>
          </article>
          <article>
            <p className={styles.eyebrow}>For brands</p>
            <h3>Manage approved product data, retail partners, catalogue distribution, orders and permitted insight.</h3>
            <Link className={styles.inlineLink} href="/for-brands">
              Explore AXY for brands <span aria-hidden="true">→</span>
            </Link>
          </article>
        </div>
      </section>

      <section className={styles.faq} aria-labelledby="back-office-questions-title">
        <div className={styles.faqInner}>
          <div className={styles.sectionIntro}>
            <p className={styles.eyebrow}>Questions</p>
            <h2 id="back-office-questions-title">Back Office, briefly answered.</h2>
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

      <section className={styles.finalCta} aria-labelledby="back-office-final-title">
        <div className={styles.finalInner}>
          <p className={styles.eyebrow}>Start with one management workflow</p>
          <h2 id="back-office-final-title">See Back Office around your products, business units, partners and systems.</h2>
          <p>
            Choose one operational area — catalogue, stock, orders, customer management or partner coordination — and map the records, roles and connections required.
          </p>
          <div className={styles.finalActions}>
            <a className={styles.buttonLight} href="https://app.axy.net/onboarding">
              Create free account
            </a>
            <Link className={styles.buttonOutlineLight} href="/book-a-walkthrough#schedule">
              Get guided setup
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
