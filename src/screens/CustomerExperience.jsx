import Image from 'next/image';
import Link from 'next/link';

const libraryItems = [
  'Owned products',
  'Purchase history',
  'Invoices',
  'Digital warranty cards',
  'Warranty activation & extension',
  'Product documents',
  'Serial & reference info',
  'Service history',
  'Manuals & care',
];

const preferenceItems = [
  'Wishlist',
  'Favourite brands',
  'Preferred item types',
  'Style preferences',
  'Colour palette',
  'Sizes & attributes',
  'Products owned',
  'Previously explored',
  'Favourite stores',
];

const relationshipItems = [
  ['Customers decide which stores appear', 'Only visited, selected or explicitly connected stores show up.'],
  ['Each store sees only permitted information', 'Visibility follows that single store relationship.'],
  ['Store activity stays with that store', 'Visits and communication remain linked to their source.'],
  ['Unrelated stores gain no access', 'No automatic exposure to other AXY locations.'],
  ['Manage or disconnect anytime', 'Store relationships are always in the customer’s hands.'],
  ['Internal retailer notes stay private', 'The customer never sees a store’s internal notes.'],
];

const visitItems = [
  'Stores visited',
  'Products viewed',
  'Liked or saved',
  'Recommendations',
  'Offers and quotations',
  'Appointment booking',
  'Contact salesperson',
  'Service intake',
  'Repair status',
  'Follow-up actions',
];

const lifecycleItems = [
  'Warranty activation',
  'Warranty extension',
  'Service request',
  'Repair status',
  'Estimate approval',
  'Service appointment',
  'Return / pickup status',
  'Manufacturer reminders',
];

const actionMaps = [
  ['Product saved', 'Salesperson sees renewed interest'],
  ['Inquiry sent', 'Ticket created with customer & product context'],
  ['Appointment booked', 'Team prepares products in advance'],
  ['Offer opened', 'Salesperson sees the opportunity is active'],
  ['Availability requested', 'Store responds or contacts the partner'],
  ['Service reminder accepted', 'Appointment enters the service workflow'],
];

const feedItems = [
  ['/images/for-brands/announcement-story.webp', 'New arrivals', 'Browse products of the Stardust collection', 'AXY Customer App announcement presenting a new product collection'],
  ['/images/for-brands/announcement-detail.webp', 'Elegance', 'Quick introduction to the Elegance line', 'AXY Customer App announcement showing the details of an elegance collection'],
  ['/images/for-brands/announcement-gift.webp', 'Store event', 'Visit us for a private showing of new autumn models', 'AXY Customer App announcement inviting customers to a special retail moment'],
];

function Eyebrow({ children, warm = false }) {
  return <p className={warm ? 'cax-eyebrow cax-eyebrow--warm' : 'cax-eyebrow'}>{children}</p>;
}

function EditorialList({ items, warm = false }) {
  return (
    <ul className={warm ? 'cax-editorial-list cax-editorial-list--warm' : 'cax-editorial-list'}>
      {items.map((item) => (
        <li key={item}>
          <span aria-hidden="true" className="cax-editorial-list__marker" />
          {item}
        </li>
      ))}
    </ul>
  );
}

function CheckList({ items, warm = false }) {
  return (
    <ul className={warm ? 'cax-checks cax-checks--warm' : 'cax-checks'}>
      {items.map((item) => (
        <li key={item}>
          <span aria-hidden="true">✓</span>
          {item}
        </li>
      ))}
    </ul>
  );
}

function Callout({ children, warm = false, dark = false }) {
  const modifier = dark ? ' cax-callout--dark' : warm ? ' cax-callout--warm' : '';
  return <div className={`cax-callout${modifier}`}>{children}</div>;
}

function NumberedList({ items, warm = false }) {
  return (
    <ol className={warm ? 'cax-numbered cax-numbered--warm' : 'cax-numbered'}>
      {items.map((item, index) => (
        <li key={item}>
          <span>{index + 1}</span>
          {item}
        </li>
      ))}
    </ol>
  );
}

function Process({ items, dark = false }) {
  return (
    <ol className={dark ? 'cax-process cax-process--dark' : 'cax-process'}>
      {items.map((item, index) => (
        <li key={item}>
          <span className="cax-process__number">{index + 1}</span>
          <strong>{item}</strong>
          {index < items.length - 1 ? <span aria-hidden="true" className="cax-process__arrow">→</span> : null}
        </li>
      ))}
    </ol>
  );
}

export default function CustomerExperience() {
  return (
    <main className="customer-app-page" data-screen-label="Customer Experience">
      <section className="cax-section cax-hero">
        <div className="cax-shell cax-hero__grid">
          <div className="cax-hero__copy">
            <Eyebrow warm>The customer’s app</Eyebrow>
            <h1>Everything you buy, love and explore, all in one place.</h1>
            <p className="cax-lead cax-lead--warm">One personal retail profile that follows the customer across the stores they choose.</p>
            <p>Give customers one app for their products, invoices, warranties, wishlists, store visits and favourite retailers — while keeping every retail relationship connected to the stores they choose.</p>
            <div className="cax-actions">
              <Link className="cax-button cax-button--warm" href="/book-a-walkthrough#schedule">Get guided setup</Link>
              <Link className="cax-button cax-button--outline-warm" href="/for-retailers">Explore AXY for retailers</Link>
            </div>
          </div>
          <div className="cax-hero__visual">
            <Image
              src="/images/customer-app/product-library-hand.webp"
              alt="AXY Customer App product library shown in a customer's hand"
              width={1200}
              height={1638}
              loading="eager"
              fetchPriority="high"
              sizes="(max-width: 900px) 100vw, 58vw"
            />
          </div>
        </div>
      </section>

      <section className="cax-section cax-section--cool">
        <div className="cax-shell cax-feature cax-feature--library">
          <div className="cax-feature__copy">
            <Eyebrow>Your products, organised</Eyebrow>
            <h2>Every purchase, invoice and warranty in one personal library</h2>
            <p>Customers keep products bought from connected stores together with their invoices, warranty information, service history and important documents.</p>
            <CheckList items={libraryItems} />
            <Callout><strong>No more searching through emails, paper receipts or separate store accounts.</strong></Callout>
          </div>
          <div className="cax-library-visual">
            <Image className="cax-library-visual__record" src="/images/customer-app/product-library-phone.webp" alt="AXY Customer App product record with ownership, warranty and documentation details" width={900} height={2335} loading="lazy" sizes="(max-width: 900px) 52vw, 26vw" />
            <Image className="cax-library-visual__hand" src="/images/customer-app/product-library-hand.webp" alt="Customer holding the AXY personal purchases library" width={1200} height={1638} loading="eager" sizes="(max-width: 900px) 68vw, 34vw" />
          </div>
        </div>
      </section>

      <section className="cax-section cax-section--soft">
        <div className="cax-shell cax-feature cax-feature--media-left">
          <div className="cax-feature__copy">
            <Eyebrow>A profile built around taste</Eyebrow>
            <h2>A profile that makes every experience more relevant</h2>
            <p>Wishlists, preferred item types, colours, styles, brands and previous interactions help AXY understand what the customer is looking for — built by simply reacting to products, not filling in a long form.</p>
            <EditorialList items={preferenceItems} />
            <Callout><strong>The customer sets preferences once and uses them across the store relationships they choose.</strong></Callout>
          </div>
          <div className="cax-feature__media cax-feature__media--landscape">
            <Image src="/images/customer-app/taste-profile-phone.webp" alt="AXY swipe-style product preference screen used to refine a customer’s taste profile" width={1500} height={1326} loading="lazy" sizes="(max-width: 900px) 90vw, 46vw" />
          </div>
        </div>
      </section>

      <section className="cax-section cax-section--warm">
        <div className="cax-shell cax-feature cax-feature--media-left">
          <div className="cax-feature__copy">
            <Eyebrow warm>The customer chooses the relationship</Eyebrow>
            <h2>Only connected stores become part of the customer’s experience</h2>
            <p>The app shows stores the customer has visited, selected or explicitly connected with. It never automatically promotes unrelated retailers or exposes the customer to every AXY location.</p>
            <div className="cax-relationship-list">
              {relationshipItems.map(([title, description]) => (
                <div className="cax-relationship-item" key={title}>
                  <span aria-hidden="true">✓</span>
                  <div><strong>{title}</strong><small>{description}</small></div>
                </div>
              ))}
            </div>
            <Callout warm>The customer owns the profile. Each retailer owns its relationship. <strong>AXY connects the experience underneath.</strong></Callout>
          </div>
          <div className="cax-feature__media cax-feature__media--phone">
            <Image src="/images/customer-app/connected-stores-phone.webp" alt="AXY Customer App profile showing connected stores, wishlist, purchases and service tickets" width={900} height={1848} loading="lazy" sizes="(max-width: 900px) 65vw, 28vw" />
          </div>
        </div>
      </section>

      <section className="cax-section cax-section--cool cax-visit-section">
        <div className="cax-shell cax-feature">
          <div className="cax-feature__copy">
            <Eyebrow>After the visit</Eyebrow>
            <h2>The store experience stays available after the customer leaves</h2>
            <p>After a sales or service visit, customers can reopen the complete context and continue when they are ready.</p>
            <EditorialList items={visitItems} />
            <Callout><strong>The customer never has to start the conversation from zero.</strong></Callout>
          </div>
          <div className="cax-feature__media cax-feature__media--continuity">
            <Image src="/images/customer-app/store-continuity.webp" alt="AXY Customer App repair journey beside a customer continuing the store relationship after leaving" width={1400} height={1307} loading="lazy" sizes="(max-width: 900px) 100vw, 52vw" />
          </div>
        </div>
        <div className="cax-process-band">
          <div className="cax-shell"><Process items={['Store visit', 'Products viewed', 'App recap', 'Customer action', 'Store receives context']} /></div>
        </div>
      </section>

      <section className="cax-section cax-section--cool">
        <div className="cax-shell cax-journey-grid">
          <div className="cax-journey-copy">
            <Eyebrow>Personalised store journeys</Eyebrow>
            <h2>A new store can feel relevant from the first minute</h2>
            <p>When a customer enters a new AXY-connected store, they can begin a guided journey based on the preferences in their profile — filtering that store’s real catalogue and available products.</p>
            <NumberedList items={['Enter store', 'Start a journey', 'Choose the goal', 'Catalogue is filtered', 'Explore relevant products']} />
            <p className="cax-privacy-note">AXY shares only the preference context required for the selected journey, and only with the customer’s permission.</p>
          </div>
          <aside className="cax-journey-example">
            <Eyebrow warm>Example journey</Eyebrow>
            <blockquote>“I’m shopping for myself”</blockquote>
            <p>Customer preferences are applied automatically.</p>
            <NumberedList warm items={['Scan store QR code', 'Choose shopping purpose', 'Select categories or intent', 'Apply personal preferences', 'Browse filtered catalogue', 'Save product, request a presentation or ask about availability']} />
          </aside>
          <figure className="cax-journey-phone">
            <Image src="/images/customer-app/guided-catalogue-phone.webp" alt="AXY Customer App catalogue filtered for a customer’s current store visit" width={1100} height={1765} loading="lazy" sizes="(max-width: 900px) 72vw, 30vw" />
            <figcaption className="cax-catalogue-caption">
              <span>Aurora Paris</span>
              <strong>Relevant selection</strong>
              <small>Rose gold · Rings · Under €15k · Minimal · In stock</small>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="cax-section cax-section--gift">
        <div className="cax-shell">
          <Eyebrow warm>Shopping for someone else</Eyebrow>
          <h2>Find the right gift without starting from guesswork.</h2>
          <p>Customers use privacy-safe preferences, shared wishlists and group input to make better gift decisions.</p>
          <div className="cax-gift-grid">
            <article className="cax-gift-card">
              <h3>Gift for a friend</h3>
              <p>Choose or invite a friend, then explore relevant products based on what they’ve chosen to share.</p>
              <NumberedList warm items={['Select recipient', 'Shared wishlist', 'Suggested gift products', 'Contact store or continue']} />
            </article>
            <article className="cax-gift-card">
              <h3>Group gift</h3>
              <p>Create a group, set a budget, suggest products, collect votes and coordinate together.</p>
              <NumberedList warm items={['Set group budget', 'Invite friends', 'Suggest & vote', 'Choose final product']} />
            </article>
          </div>
          <Callout warm><strong>A more personal gift journey, while keeping private purchase information protected.</strong></Callout>
        </div>
      </section>

      <section className="cax-section cax-section--soft">
        <div className="cax-shell cax-feature cax-feature--media-left cax-product-record">
          <div className="cax-feature__copy">
            <Eyebrow warm>Keep discovery moving</Eyebrow>
            <h2>Product information stays useful after the moment they were first seen</h2>
            <p>Customers save products, compare alternatives, share them with friends and return to the store when interest becomes action.</p>
            <div className="cax-two-lists">
              <NumberedList warm items={['Saw product in store', 'Saved to wishlist', 'Shared with a friend', 'Compared alternatives', 'Sent inquiry', 'Returned to store']} />
              <CheckList items={['Save to wishlist', 'Compare products', 'Share products', 'Get opinions', 'View similar', 'Personalised suggestions', 'Send inquiry', 'Ask about availability', 'Book a visit', 'Return to store context']} warm />
            </div>
          </div>
          <div className="cax-product-record__visual">
            <div className="cax-product-record__backdrop" aria-hidden="true" />
            <Image src="/images/customer-app/product-library-phone.webp" alt="AXY Customer App product record with product details and actions to continue the conversation" width={900} height={2335} loading="lazy" sizes="(max-width: 900px) 58vw, 24vw" />
          </div>
        </div>
      </section>

      <section className="cax-section cax-section--feed">
        <div className="cax-shell cax-feed">
          <h2>All the brands and stores the customer follows — in one relevant feed.</h2>
          <p>Product launches, collection stories, events, service reminders and store updates from the customer’s connected retail relationships.</p>
          <div className="cax-feed-cards">
            {feedItems.map(([src, title, description, alt]) => (
              <figure className="cax-feed-item" key={title}>
                <Image src={src} alt={alt} width={500} height={1082} loading="lazy" sizes="(max-width: 700px) 78vw, 27vw" />
                <figcaption><strong>{title}</strong><span>{description}</span></figcaption>
              </figure>
            ))}
          </div>
          <CheckList items={['Collection stories', 'Store events', 'Relevant offers', 'Warranty updates', 'Service reminders', 'Product availability', 'Appointment reminders', 'Post-visit messages']} warm />
          <p className="cax-feed__note">Relevant communication from trusted store relationships — not an open advertising feed.<br />Retailers control what they send; customers control their connections.</p>
        </div>
      </section>

      <section className="cax-section cax-section--cool cax-lifecycle">
        <div className="cax-shell">
          <Eyebrow warm>The relationship after purchase</Eyebrow>
          <h2>Products stay connected throughout their lifecycle.</h2>
          <p>Customers see warranty coverage, follow service progress, receive reminders and contact the store from the same product record.</p>
          <Process items={['Warranty activated', 'Service requested', 'Repair in progress', 'Ready for pickup']} />
          <EditorialList items={lifecycleItems} warm />
          <Callout warm><strong>After-sales becomes a useful reason to return — not a disconnected support process.</strong></Callout>
        </div>
      </section>

      <section className="cax-section cax-section--dark">
        <div className="cax-shell">
          <Eyebrow>The loop closes</Eyebrow>
          <h2>Customer actions become useful next steps for the store.</h2>
          <p>When a customer saves a product, opens an offer, sends an inquiry or books a visit, the connected retailer receives the action with the right context.</p>
          <Process dark items={['Customer interest', 'Store action', 'Relevant follow-up', 'Better next conversation']} />
          <div className="cax-action-map">
            {actionMaps.map(([action, result]) => (
              <div key={action}><strong>{action}</strong><span aria-hidden="true">→</span><small>{result}</small></div>
            ))}
          </div>
          <p className="cax-dark-note"><span aria-hidden="true" />Only actions permitted within that customer–store relationship are shared.</p>
        </div>
      </section>

      <section className="cax-section cax-section--summary">
        <div className="cax-shell">
          <h2>A stronger experience for the customer. A stronger relationship for the retailer.</h2>
          <div className="cax-summary-grid">
            {[
              ['01', 'All purchases & documents in one place', 'Products, invoices and warranties, organised.'],
              ['02', 'Every visit stays connected', 'The store experience continues after leaving.'],
              ['03', 'Discovery becomes personal', 'Preferences filter each store’s real catalogue.'],
              ['04', 'Customer interest becomes actionable', 'Actions reach the right store with context.'],
            ].map(([number, title, description]) => (
              <article key={number}><span>{number}</span><h3>{title}</h3><p>{description}</p></article>
            ))}
          </div>
        </div>
      </section>

      <section className="cax-final-cta">
        <div className="cax-shell">
          <h2>Give customers one place to continue every retail relationship.</h2>
          <div className="cax-actions cax-actions--center">
            <Link className="cax-button cax-button--light" href="/book-a-walkthrough#schedule">Get guided setup</Link>
            <Link className="cax-button cax-button--outline-light" href="/for-retailers">Explore AXY for retailers</Link>
          </div>
          <Link className="cax-text-link" href="/sales-app">See how it connects to the Sales App →</Link>
        </div>
      </section>
    </main>
  );
}
