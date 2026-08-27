import React from 'react';
import Link from '../i18n/LocalizedLink.jsx';
import { useLocalizedCopy } from '../i18n/I18nProvider.jsx';
import useCasesCatalog from '../i18n/locales/pages/useCases.js';

export default function SalesCapture() {
  const { salesCapture: copy } = useLocalizedCopy(useCasesCatalog);

  return (
    <>
      <div data-screen-label="In-Store Sales Capture">
        <div style={{ background: "#fff", padding: "66px 24px 58px" }}>
          <div style={{ maxWidth: "1080px", margin: "0 auto", display: "flex", gap: "44px", alignItems: "center", flexWrap: "wrap" }}>
            <div style={{ flex: "1.1", minWidth: "min(300px, 100%)" }}>
              <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "10.5px", letterSpacing: ".13em", color: "#2C8C99", textTransform: "uppercase" }}>{copy.hero.eyebrow}
              </div>
              <h1 style={{ fontSize: "36px", fontWeight: "800", color: "#1F2B4D", lineHeight: "1.13", margin: "14px 0 0" }}>{copy.hero.title}
              </h1>
              <p style={{ fontSize: "15px", color: "#667085", lineHeight: "1.6", margin: "16px 0 0", maxWidth: "540px" }}>{copy.hero.body}
              </p>
              <div style={{ display: "flex", gap: "12px", marginTop: "22px", flexWrap: "wrap" }}>
                <a className="hv107" href="https://app.axy.net/onboarding" style={{ display: "inline-flex", padding: "13px 22px", background: "#32415C", color: "#fff", borderRadius: "10px", fontSize: "14px", fontWeight: "700" }}>{copy.hero.createAccount}
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="use-case-definition-section" style={{ background: "#F9FAFB", padding: "64px 24px" }}>
          <div style={{ maxWidth: "1080px", margin: "0 auto" }}>
            <div className="use-case-definition" style={{ maxWidth: "820px", margin: "0 auto", background: "#F9FAFB", borderLeft: "3px solid #2C8C99", borderRadius: "0 12px 12px 0", padding: "18px 22px" }}>
              <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "9px", color: "#1C6470", letterSpacing: ".08em" }}>{copy.definition.label}
              </div>
              <p style={{ fontSize: "14.5px", color: "#1F2B4D", lineHeight: "1.65", margin: "8px 0 0" }}>
                <strong>{copy.definition.lead}
                </strong>{' '}{copy.definition.body}
              </p>
            </div>
            <div style={{ display: "flex", gap: "14px", marginTop: "24px", flexWrap: "wrap", maxWidth: "860px", marginLeft: "auto", marginRight: "auto" }}>
              <div style={{ flex: "1", minWidth: "250px", background: "#fff", border: "1px solid #E4E8EF", borderRadius: "14px", padding: "19px" }}>
                <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "9px", color: "#9aa3b2" }}>{copy.comparison.systemsLabel}
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "6px", marginTop: "10px", fontSize: "13px", color: "#667085" }}>
                  {copy.comparison.systems.map((item) => <span key={item}>{item}</span>)}
                </div>
              </div>
              <div style={{ flex: "1.2", minWidth: "250px", background: "#fff", border: "1.5px solid #2C8C99", borderRadius: "14px", padding: "19px" }}>
                <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "9px", color: "#1C6470" }}>{copy.comparison.axyLabel}
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "6px", marginTop: "10px", fontSize: "13px", color: "#1F2B4D" }}>
                  {copy.comparison.axy.map((item) => <span key={item}>✓ {item}</span>)}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ background: "#fff", padding: "64px 24px" }}>
          <div style={{ maxWidth: "1080px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", maxWidth: "660px", margin: "0 auto" }}>
              <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "10.5px", letterSpacing: ".13em", color: "#2C8C99", textTransform: "uppercase" }}>{copy.capture.eyebrow}
              </div>
              <h2 style={{ fontSize: "27px", fontWeight: "800", lineHeight: "1.16", margin: "12px 0 0" }}>{copy.capture.title}
              </h2>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(170px,1fr))", gap: "14px", marginTop: "30px" }}>
              {copy.capture.steps.map(([number, title, body]) => (
                <div key={number} style={{ background: "#fff", border: "1px solid #E4E8EF", borderRadius: "14px", padding: "19px" }}>
                  <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "9px", color: "#2C8C99" }}>{number}</div>
                  <div style={{ fontSize: "14.5px", fontWeight: "800", marginTop: "7px" }}>{title}</div>
                  <p style={{ fontSize: "12.5px", color: "#667085", lineHeight: "1.55", margin: "7px 0 0" }}>{body}</p>
                </div>
              ))}
            </div>
            <div style={{ maxWidth: "760px", margin: "22px auto 0" }}>
              <div style={{ background: "#F9FAFB", border: "1px solid #E4E8EF", borderRadius: "12px", padding: "16px 18px" }}>
                <div style={{ fontSize: "13.5px", fontWeight: "800" }}>{copy.capture.effortTitle}
                </div>
                <p style={{ fontSize: "12.5px", color: "#667085", lineHeight: "1.6", margin: "8px 0 0" }}>{copy.capture.effortBody}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div style={{ background: "#F9FAFB", padding: "64px 24px" }}>
          <div style={{ maxWidth: "1080px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto" }}>
              <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "10.5px", letterSpacing: ".13em", color: "#2C8C99", textTransform: "uppercase" }}>{copy.unlocks.eyebrow}
              </div>
              <h2 style={{ fontSize: "27px", fontWeight: "800", lineHeight: "1.16", margin: "12px 0 0" }}>{copy.unlocks.title}
              </h2>
              <p style={{ fontSize: "14.5px", color: "#667085", lineHeight: "1.6", margin: "13px 0 0" }}>{copy.unlocks.body}
              </p>
            </div>
            <div style={{ maxWidth: "760px", margin: "30px auto 0", display: "flex", flexDirection: "column", gap: "9px" }}>
              {copy.faq.map(([question, answer]) => (
                <details key={question} style={{ background: "#fff", border: "1px solid #E4E8EF", borderRadius: "12px", padding: "15px 18px" }}>
                  <summary style={{ fontSize: "14px", fontWeight: "700", color: "#1F2B4D", display: "flex", justifyContent: "space-between", gap: "12px" }}>{question}<span style={{ color: "#2C8C99" }}>+</span></summary>
                  <p style={{ fontSize: "13.5px", color: "#667085", lineHeight: "1.6", margin: "10px 0 0" }}>{answer}</p>
                </details>
              ))}
            </div>
            <div style={{ textAlign: "center", marginTop: "30px", display: "flex", justifyContent: "center", gap: "12px", flexWrap: "wrap" }}>
              <a className="hv108" href="https://app.axy.net/onboarding" style={{ display: "inline-flex", padding: "13px 22px", background: "#32415C", color: "#fff", borderRadius: "10px", fontSize: "14px", fontWeight: "700" }}>{copy.final.createAccount}
              </a>
              <Link className="hv109" href="/use-cases/product-demand-intelligence" style={{ display: "inline-flex", padding: "13px 22px", border: "1.5px solid #32415C", color: "#32415C", borderRadius: "10px", fontSize: "14px", fontWeight: "600" }}>{copy.final.demand}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
