import Image from 'next/image';
import LocalizedLink from '../i18n/LocalizedLink.jsx';
import { useLocalizedCopy } from '../i18n/I18nProvider.jsx';
import customerExperienceCatalog from '../i18n/locales/pages/customerExperience.js';

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
  const { customerExperience: copy } = useLocalizedCopy(customerExperienceCatalog);

  return (
    <main className="customer-app-page" data-screen-label="Customer Experience">
      <section className="cax-section cax-hero">
        <div className="cax-shell cax-hero__grid">
          <div className="cax-hero__copy">
            <Eyebrow warm>{copy.hero.eyebrow}</Eyebrow>
            <h1>{copy.hero.title}</h1>
            <p className="cax-lead cax-lead--warm">{copy.hero.lead}</p>
            <p>{copy.hero.body}</p>
            <div className="cax-actions">
              <LocalizedLink className="cax-button cax-button--warm" href="/book-a-walkthrough#schedule">{copy.hero.guidedSetup}</LocalizedLink>
              <LocalizedLink className="cax-button cax-button--outline-warm" href="/for-retailers">{copy.hero.retailers}</LocalizedLink>
            </div>
          </div>
          <div className="cax-hero__visual">
            <Image
              src="/images/customer-app/product-library-hand.webp"
              alt={copy.hero.imageAlt}
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
            <Eyebrow>{copy.library.eyebrow}</Eyebrow>
            <h2>{copy.library.title}</h2>
            <p>{copy.library.body}</p>
            <CheckList items={copy.library.items} />
            <Callout><strong>{copy.library.callout}</strong></Callout>
          </div>
          <div className="cax-library-visual">
            <Image className="cax-library-visual__record" src="/images/customer-app/product-library-phone.webp" alt={copy.library.recordAlt} width={900} height={2335} loading="lazy" sizes="(max-width: 900px) 52vw, 26vw" />
            <Image className="cax-library-visual__hand" src="/images/customer-app/product-library-hand.webp" alt={copy.library.handAlt} width={1200} height={1638} loading="eager" sizes="(max-width: 900px) 68vw, 34vw" />
          </div>
        </div>
      </section>

      <section className="cax-section cax-section--soft">
        <div className="cax-shell cax-feature cax-feature--media-left">
          <div className="cax-feature__copy">
            <Eyebrow>{copy.taste.eyebrow}</Eyebrow>
            <h2>{copy.taste.title}</h2>
            <p>{copy.taste.body}</p>
            <EditorialList items={copy.taste.items} />
            <Callout><strong>{copy.taste.callout}</strong></Callout>
          </div>
          <div className="cax-feature__media cax-feature__media--landscape">
            <Image src="/images/customer-app/taste-profile-phone.webp" alt={copy.taste.imageAlt} width={1500} height={1326} loading="lazy" sizes="(max-width: 900px) 90vw, 46vw" />
          </div>
        </div>
      </section>

      <section className="cax-section cax-section--warm">
        <div className="cax-shell cax-feature cax-feature--media-left">
          <div className="cax-feature__copy">
            <Eyebrow warm>{copy.relationship.eyebrow}</Eyebrow>
            <h2>{copy.relationship.title}</h2>
            <p>{copy.relationship.body}</p>
            <div className="cax-relationship-list">
              {copy.relationship.items.map((item) => (
                <div className="cax-relationship-item" key={item.title}>
                  <span aria-hidden="true">✓</span>
                  <div><strong>{item.title}</strong><small>{item.description}</small></div>
                </div>
              ))}
            </div>
            <Callout warm>{copy.relationship.callout} <strong>{copy.relationship.calloutStrong}</strong></Callout>
          </div>
          <div className="cax-feature__media cax-feature__media--phone">
            <Image src="/images/customer-app/connected-stores-phone.webp" alt={copy.relationship.imageAlt} width={900} height={1848} loading="lazy" sizes="(max-width: 900px) 65vw, 28vw" />
          </div>
        </div>
      </section>

      <section className="cax-section cax-section--cool cax-visit-section">
        <div className="cax-shell cax-feature">
          <div className="cax-feature__copy">
            <Eyebrow>{copy.visit.eyebrow}</Eyebrow>
            <h2>{copy.visit.title}</h2>
            <p>{copy.visit.body}</p>
            <EditorialList items={copy.visit.items} />
            <Callout><strong>{copy.visit.callout}</strong></Callout>
          </div>
          <div className="cax-feature__media cax-feature__media--continuity">
            <Image src="/images/customer-app/store-continuity.webp" alt={copy.visit.imageAlt} width={1400} height={1307} loading="lazy" sizes="(max-width: 900px) 100vw, 52vw" />
          </div>
        </div>
        <div className="cax-process-band">
          <div className="cax-shell"><Process items={copy.visit.process} /></div>
        </div>
      </section>

      <section className="cax-section cax-section--cool">
        <div className="cax-shell cax-journey-grid">
          <div className="cax-journey-copy">
            <Eyebrow>{copy.journey.eyebrow}</Eyebrow>
            <h2>{copy.journey.title}</h2>
            <p>{copy.journey.body}</p>
            <NumberedList items={copy.journey.steps} />
            <p className="cax-privacy-note">{copy.journey.privacy}</p>
          </div>
          <aside className="cax-journey-example">
            <Eyebrow warm>{copy.journey.exampleEyebrow}</Eyebrow>
            <blockquote>{copy.journey.quote}</blockquote>
            <p>{copy.journey.exampleBody}</p>
            <NumberedList warm items={copy.journey.exampleSteps} />
          </aside>
          <figure className="cax-journey-phone">
            <Image src="/images/customer-app/guided-catalogue-phone.webp" alt={copy.journey.imageAlt} width={1100} height={1765} loading="lazy" sizes="(max-width: 900px) 72vw, 30vw" />
            <figcaption className="cax-catalogue-caption">
              <span>{copy.journey.store}</span>
              <strong>{copy.journey.selection}</strong>
              <small>{copy.journey.filters}</small>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="cax-section cax-section--gift">
        <div className="cax-shell">
          <Eyebrow warm>{copy.gift.eyebrow}</Eyebrow>
          <h2>{copy.gift.title}</h2>
          <p>{copy.gift.body}</p>
          <div className="cax-gift-grid">
            <article className="cax-gift-card">
              <h3>{copy.gift.friendTitle}</h3>
              <p>{copy.gift.friendBody}</p>
              <NumberedList warm items={copy.gift.friendSteps} />
            </article>
            <article className="cax-gift-card">
              <h3>{copy.gift.groupTitle}</h3>
              <p>{copy.gift.groupBody}</p>
              <NumberedList warm items={copy.gift.groupSteps} />
            </article>
          </div>
          <Callout warm><strong>{copy.gift.callout}</strong></Callout>
        </div>
      </section>

      <section className="cax-section cax-section--soft">
        <div className="cax-shell cax-feature cax-feature--media-left cax-product-record">
          <div className="cax-feature__copy">
            <Eyebrow warm>{copy.discovery.eyebrow}</Eyebrow>
            <h2>{copy.discovery.title}</h2>
            <p>{copy.discovery.body}</p>
            <div className="cax-two-lists">
              <NumberedList warm items={copy.discovery.journey} />
              <CheckList items={copy.discovery.actions} warm />
            </div>
          </div>
          <div className="cax-product-record__visual">
            <div className="cax-product-record__backdrop" aria-hidden="true" />
            <Image src="/images/customer-app/product-library-phone.webp" alt={copy.discovery.imageAlt} width={900} height={2335} loading="lazy" sizes="(max-width: 900px) 58vw, 24vw" />
          </div>
        </div>
      </section>

      <section className="cax-section cax-section--feed">
        <div className="cax-shell cax-feed">
          <h2>{copy.feed.title}</h2>
          <p>{copy.feed.body}</p>
          <div className="cax-feed-cards">
            {copy.feed.cards.map((card) => (
              <figure className="cax-feed-item" key={card.title}>
                <Image src={card.src} alt={card.alt} width={500} height={1082} loading="lazy" sizes="(max-width: 700px) 78vw, 27vw" />
                <figcaption><strong>{card.title}</strong><span>{card.description}</span></figcaption>
              </figure>
            ))}
          </div>
          <CheckList items={copy.feed.items} warm />
          <p className="cax-feed__note">{copy.feed.note}<br />{copy.feed.noteSecond}</p>
        </div>
      </section>

      <section className="cax-section cax-section--cool cax-lifecycle">
        <div className="cax-shell">
          <Eyebrow warm>{copy.lifecycle.eyebrow}</Eyebrow>
          <h2>{copy.lifecycle.title}</h2>
          <p>{copy.lifecycle.body}</p>
          <Process items={copy.lifecycle.process} />
          <EditorialList items={copy.lifecycle.items} warm />
          <Callout warm><strong>{copy.lifecycle.callout}</strong></Callout>
        </div>
      </section>

      <section className="cax-section cax-section--dark">
        <div className="cax-shell">
          <Eyebrow>{copy.loop.eyebrow}</Eyebrow>
          <h2>{copy.loop.title}</h2>
          <p>{copy.loop.body}</p>
          <Process dark items={copy.loop.process} />
          <div className="cax-action-map">
            {copy.loop.maps.map((item) => (
              <div key={item.action}><strong>{item.action}</strong><span aria-hidden="true">→</span><small>{item.result}</small></div>
            ))}
          </div>
          <p className="cax-dark-note"><span aria-hidden="true" />{copy.loop.note}</p>
        </div>
      </section>

      <section className="cax-section cax-section--summary">
        <div className="cax-shell">
          <h2>{copy.summary.title}</h2>
          <div className="cax-summary-grid">
            {copy.summary.items.map((item) => (
              <article key={item.number}><span>{item.number}</span><h3>{item.title}</h3><p>{item.description}</p></article>
            ))}
          </div>
        </div>
      </section>

      <section className="cax-final-cta">
        <div className="cax-shell">
          <h2>{copy.final.title}</h2>
          <div className="cax-actions cax-actions--center">
            <LocalizedLink className="cax-button cax-button--light" href="/book-a-walkthrough#schedule">{copy.final.guidedSetup}</LocalizedLink>
            <LocalizedLink className="cax-button cax-button--outline-light" href="/for-retailers">{copy.final.retailers}</LocalizedLink>
          </div>
          <LocalizedLink className="cax-text-link" href="/sales-app">{copy.final.salesApp} →</LocalizedLink>
        </div>
      </section>
    </main>
  );
}
