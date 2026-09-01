import React from 'react';
import HubSpotBetaAccessFormEmbed from '../components/HubSpotBetaAccessFormEmbed.jsx';
import Link from '../i18n/LocalizedLink.jsx';
import { useLocalizedCopy } from '../i18n/I18nProvider.jsx';
import utilityCatalog from '../i18n/locales/pages/utility.js';
import styles from '../styles/request-access.module.css';

export default function RequestAccess() {
  const { requestAccess: copy } = useLocalizedCopy(utilityCatalog);

  return (
    <main className={styles.page} data-screen-label="Beta Access Request">
      <section className={styles.section}>
        <div className={styles.layout}>
          <div className={styles.intro}>
            <p className={styles.eyebrow}>{copy.eyebrow}</p>
            <h1>{copy.title}</h1>
            <p className={styles.lead}>{copy.lead}</p>
            <div className={styles.next}>
              <h2>{copy.nextTitle}</h2>
              <ol>
                {copy.nextItems.map((item, index) => (
                  <li key={item}>
                    <span aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
                    <p>{item}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          <div className={styles.formCard}>
            <div className={styles.formHeading}>
              <h2>{copy.formHeading}</h2>
              <p>{copy.formHint}</p>
            </div>
            <HubSpotBetaAccessFormEmbed />
            <p className={styles.privacy}>
              {copy.privacyBefore}{' '}
              <Link href="/legal#privacy-policy">{copy.privacyLink}</Link>
            </p>
            <p className={styles.fallback}>
              {copy.fallback}{' '}
              <a href="mailto:info@axy.net">info@axy.net</a>.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
