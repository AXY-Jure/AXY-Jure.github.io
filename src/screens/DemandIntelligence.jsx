import React from 'react';
import Link from '../i18n/LocalizedLink.jsx';
import { useLocalizedCopy } from '../i18n/I18nProvider.jsx';
import useCasesCatalog from '../i18n/locales/pages/useCases.js';

export default function DemandIntelligence() {
  const { demandIntelligence: copy } = useLocalizedCopy(useCasesCatalog);

  return (
    <>
      <div data-screen-label="Product Demand Intelligence">
        <div style={{ background: "linear-gradient(135deg,#1F2B4D,#32415C 62%,#2C6570)", padding: "66px 24px 58px" }}>
          <div style={{ maxWidth: "1080px", margin: "0 auto", display: "flex", gap: "44px", alignItems: "center", flexWrap: "wrap" }}>
            <div style={{ flex: "1.1", minWidth: "min(300px, 100%)" }}>
              <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "10.5px", letterSpacing: ".13em", color: "#33D6A4", textTransform: "uppercase" }}>{copy.hero.eyebrow}
              </div>
              <h1 style={{ fontSize: "36px", fontWeight: "800", color: "#fff", lineHeight: "1.13", margin: "14px 0 0" }}>{copy.hero.title}
              </h1>
              <p style={{ fontSize: "15px", color: "#C9D2E4", lineHeight: "1.6", margin: "16px 0 0", maxWidth: "540px" }}>{copy.hero.body}
              </p>
              <div style={{ display: "flex", gap: "12px", marginTop: "22px", flexWrap: "wrap" }}>
                <a className="hv110" href="https://app.axy.net/onboarding" style={{ display: "inline-flex", padding: "13px 22px", background: "#fff", color: "#1F2B4D", borderRadius: "10px", fontSize: "14px", fontWeight: "700" }}>{copy.hero.createAccount}
                </a>
              </div>
            </div>
            <div style={{ flex: "1", minWidth: "min(300px, 100%)" }}>
              <div style={{ border: "1.5px dashed rgba(255,255,255,.35)", borderRadius: "14px", background: "rgba(255,255,255,.06)", padding: "16px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "8.5px", fontWeight: "700", color: "#1F2B4D", background: "#7fd4de", borderRadius: "5px", padding: "3px 8px" }}>{copy.dashboard.badge}
                  </span>
                  <span style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "9px", color: "#B9E8DC", letterSpacing: ".05em" }}>{copy.dashboard.label}
                  </span>
                </div>
                <div style={{ fontSize: "12.5px", color: "#DDE4F0", lineHeight: "1.55", marginTop: "9px" }}>{copy.dashboard.description}
                </div>
                <div style={{ marginTop: "11px" }}>
                  <div style={{ position: "relative", height: "160px", borderRadius: "12px", background: "linear-gradient(160deg,#243250,#1C2740)", display: "flex", alignItems: "center", justifyContent: "center", gap: "14px", overflow: "hidden", padding: "14px" }}>
                    <div style={{ position: "relative", width: "min(320px, 100%)", height: "140px", background: "#F7F8FA", border: "1px solid #D9DEE7", borderRadius: "10px", overflow: "hidden", boxShadow: "0 16px 32px rgba(31,43,77,.16)", display: "flex", flexDirection: "column" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "5px", padding: "6px 9px", background: "#1F2B4D" }}>
                        <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#4E5D80" }}></span>
                        <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#4E5D80" }}></span>
                        <span style={{ fontSize: "7.5px", fontWeight: "700", color: "#fff", marginLeft: "5px" }}>{copy.dashboard.heading}
                        </span>
                      </div>
                      <div style={{ flex: "1", padding: "7px", display: "flex", flexDirection: "column", gap: "4px" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "7px", background: "#fff", border: "1px solid #E7EAF0", borderRadius: "6px", padding: "5px 8px" }}>
                          <span style={{ width: "15px", height: "15px", border: "2px solid #3A465F", borderRadius: "50%", background: "#F8F6F2", flexShrink: "0" }}></span>
                          <span style={{ flex: "1", fontSize: "8px", fontWeight: "600", color: "#1F2B4D" }}>{copy.dashboard.firstProduct}
                          </span>
                          <span style={{ fontSize: "6.5px", color: "#667085" }}>{copy.dashboard.firstStats}
                          </span>
                          <span style={{ fontSize: "6.5px", fontWeight: "700", color: "#fff", background: "#2C8C99", borderRadius: "5px", padding: "2px 6px" }}>{copy.dashboard.reorder}
                          </span>
                        </div>
                        <div style={{ display: "flex", alignItems: "center", gap: "7px", background: "#fff", border: "1px solid #E7EAF0", borderRadius: "6px", padding: "5px 8px" }}>
                          <span style={{ width: "15px", height: "15px", border: "2px solid #3A465F", borderRadius: "50%", background: "#F8F6F2", flexShrink: "0" }}></span>
                          <span style={{ flex: "1", fontSize: "8px", fontWeight: "600", color: "#1F2B4D" }}>{copy.dashboard.secondProduct}
                          </span>
                          <span style={{ fontSize: "6.5px", color: "#667085" }}>{copy.dashboard.secondStats}
                          </span>
                          <span style={{ fontSize: "6.5px", fontWeight: "700", color: "#fff", background: "#8A93A6", borderRadius: "5px", padding: "2px 6px" }}>{copy.dashboard.notYet}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="use-case-definition-section" style={{ background: "#fff", padding: "64px 24px" }}>
          <div style={{ maxWidth: "1080px", margin: "0 auto" }}>
            <div className="use-case-definition" style={{ maxWidth: "820px", margin: "0 auto", background: "#F9FAFB", borderLeft: "3px solid #2C8C99", borderRadius: "0 12px 12px 0", padding: "18px 22px" }}>
              <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "9px", color: "#1C6470", letterSpacing: ".08em" }}>{copy.definition.label}
              </div>
              <p style={{ fontSize: "14.5px", color: "#1F2B4D", lineHeight: "1.65", margin: "8px 0 0" }}>
                <strong>{copy.definition.lead}
                </strong>{' '}{copy.definition.body}
              </p>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "7px", justifyContent: "center", marginTop: "20px", maxWidth: "760px", marginLeft: "auto", marginRight: "auto" }}>
              {copy.definition.signals.map((signal) => (
                <span key={signal} style={{ fontSize: "12px", color: "#1F2B4D", background: "#EFF7F8", border: "1px solid #C9E2E6", borderRadius: "8px", padding: "6px 12px" }}>{signal}</span>
              ))}
            </div>
          </div>
        </div>
        <div style={{ background: "#F9FAFB", padding: "64px 24px" }}>
          <div style={{ maxWidth: "1080px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", maxWidth: "660px", margin: "0 auto" }}>
              <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "10.5px", letterSpacing: ".13em", color: "#2C8C99", textTransform: "uppercase" }}>{copy.decisions.eyebrow}
              </div>
              <h2 style={{ fontSize: "27px", fontWeight: "800", lineHeight: "1.16", margin: "12px 0 0" }}>{copy.decisions.title}
              </h2>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: "14px", marginTop: "30px" }}>
              {copy.decisions.cards.map((card) => (
                <div key={card.title} style={{ background: "#fff", border: "1px solid #E4E8EF", borderRadius: "14px", padding: "19px" }}>
                  <div style={{ fontSize: "14.5px", fontWeight: "800", marginTop: "0px" }}>{card.title}</div>
                  <p style={{ fontSize: "12.5px", color: "#667085", lineHeight: "1.55", margin: "7px 0 0" }}>{card.body}</p>
                  {card.link ? <div style={{ marginTop: "9px" }}><Link href="/for-brands" style={{ fontSize: "13.5px", fontWeight: "700", color: "#2C8C99" }}>{card.link} →</Link></div> : null}
                </div>
              ))}
            </div>
            <div style={{ maxWidth: "760px", margin: "24px auto 0", background: "#fff", border: "1px solid #E6C9C4", borderRadius: "12px", padding: "16px 18px" }}>
              <div style={{ display: "flex", gap: "8px", alignItems: "flex-start" }}>
                <span style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "8.5px", fontWeight: "700", color: "#8a2f25", background: "#F6DDDA", borderRadius: "5px", padding: "3px 7px", flexShrink: "0" }}>{copy.honesty.label}
                </span>
                <span style={{ fontSize: "12.5px", color: "#3a4358", lineHeight: "1.6" }}>{copy.honesty.body}
                </span>
              </div>
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
              <a className="hv111" href="https://app.axy.net/onboarding" style={{ display: "inline-flex", padding: "13px 22px", background: "#fff", color: "#1F2B4D", borderRadius: "10px", fontSize: "14px", fontWeight: "700" }}>{copy.final.createAccount}
              </a>
              <Link className="hv112" href="/integrations" style={{ display: "inline-flex", padding: "13px 22px", border: "1.5px solid #32415C", color: "#32415C", borderRadius: "10px", fontSize: "14px", fontWeight: "600" }}>{copy.final.permissions}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
