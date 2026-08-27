import React from 'react';
import Link from '../i18n/LocalizedLink.jsx';
import { useLocalizedCopy } from '../i18n/I18nProvider.jsx';
import utilityCatalog from '../i18n/locales/pages/utility.js';

export default function NotFound() {
  const { notFound: copy } = useLocalizedCopy(utilityCatalog);
  return (
    <>
      <div data-screen-label="404">
        <div style={{ background: "#F9FAFB", padding: "90px 24px", minHeight: "55vh", textAlign: "center" }}>
          <div style={{ maxWidth: "520px", margin: "0 auto" }}>
            <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "11px", color: "#2C8C99", letterSpacing: ".13em" }}>404
            </div>
            <h1 style={{ fontSize: "30px", fontWeight: "800", color: "#1F2B4D", margin: "12px 0 0" }}>{copy.title}
            </h1>
            <p style={{ fontSize: "14px", color: "#667085", lineHeight: "1.6", margin: "12px 0 0" }}>{copy.body}
            </p>
            <div style={{ display: "flex", justifyContent: "center", gap: "16px", marginTop: "20px", flexWrap: "wrap" }}>
              <Link href="/" style={{ fontSize: "13.5px", fontWeight: "700", color: "#2C8C99" }}>{copy.home}</Link>
              <Link href="/product" style={{ fontSize: "13.5px", fontWeight: "700", color: "#2C8C99" }}>{copy.product}</Link>
              <Link href="/help" style={{ fontSize: "13.5px", fontWeight: "700", color: "#2C8C99" }}>{copy.help}</Link>
              <Link href="/book-a-walkthrough#schedule" style={{ fontSize: "13.5px", fontWeight: "700", color: "#2C8C99" }}>{copy.walkthrough}</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
