import React from 'react';
import Link from '../i18n/LocalizedLink.jsx';
import { useLocalizedCopy } from '../i18n/I18nProvider.jsx';
import useCasesCatalog from '../i18n/locales/pages/useCases.js';

export default function Collaboration() {
  const { collaboration: copy } = useLocalizedCopy(useCasesCatalog);

  return (
    <>
      <div data-screen-label="Retailer–Brand Collaboration">
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
                <Link className="hv113" href="/book-a-walkthrough#schedule" style={{ display: "inline-flex", padding: "13px 22px", background: "#32415C", color: "#fff", borderRadius: "10px", fontSize: "14px", fontWeight: "700" }}>{copy.hero.guidedSetup}
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div style={{ background: "#F9FAFB", padding: "64px 24px" }}>
          <div style={{ maxWidth: "1080px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", maxWidth: "720px", margin: "0 auto" }}>
              <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "10.5px", letterSpacing: ".13em", color: "#2C8C99", textTransform: "uppercase" }}>{copy.workflows.eyebrow}
              </div>
              <h2 style={{ fontSize: "27px", fontWeight: "800", lineHeight: "1.16", margin: "12px 0 0" }}>{copy.workflows.title}
              </h2>
              <p style={{ fontSize: "14.5px", color: "#667085", lineHeight: "1.6", margin: "13px 0 0" }}>{copy.workflows.body}
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: "14px", marginTop: "30px" }}>
              {copy.workflows.cards.map((card) => (
                <div key={card.title} style={{ background: "#fff", border: "1px solid #E4E8EF", borderRadius: "14px", padding: "19px" }}>
                  <div style={{ fontSize: "14.5px", fontWeight: "800", marginTop: "0px" }}>{card.title}</div>
                  <p style={{ fontSize: "12.5px", color: "#667085", lineHeight: "1.55", margin: "7px 0 0" }}>{card.body}{card.badge ? <>{' '}<span style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "8.5px", fontWeight: "700", color: "#8a5a12", background: "#F5E6C8", borderRadius: "7px", padding: "2px 8px" }}>{card.badge}</span></> : null}</p>
                  {card.link ? <div style={{ marginTop: "9px" }}><Link href="/use-cases/product-demand-intelligence" style={{ fontSize: "13.5px", fontWeight: "700", color: "#2C8C99" }}>{card.link} →</Link></div> : null}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div style={{ background: "#fff", padding: "64px 24px" }}>
          <div style={{ maxWidth: "1080px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto" }}>
              <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "10.5px", letterSpacing: ".13em", color: "#2C8C99", textTransform: "uppercase" }}>{copy.control.eyebrow}
              </div>
              <h2 style={{ fontSize: "27px", fontWeight: "800", lineHeight: "1.16", margin: "12px 0 0" }}>{copy.control.title}
              </h2>
              <p style={{ fontSize: "14.5px", color: "#667085", lineHeight: "1.6", margin: "13px 0 0" }}>{copy.control.body}
              </p>
            </div>
            <div style={{ maxWidth: "760px", margin: "22px auto 0" }}>
              <div style={{ border: "1.5px dashed #C9D4EC", borderRadius: "14px", background: "#F9FAFB", padding: "16px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "8.5px", fontWeight: "700", color: "#fff", background: "#32415C", borderRadius: "5px", padding: "3px 8px" }}>{copy.diagram.badge}
                  </span>
                  <span style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "9px", color: "#667085", letterSpacing: ".05em" }}>{copy.diagram.label}
                  </span>
                </div>
                <div style={{ fontSize: "12.5px", color: "#3a4358", lineHeight: "1.55", marginTop: "9px" }}>{copy.diagram.description}
                </div>
                <div style={{ marginTop: "11px" }}>
                  <div className="collaboration-workflow" style={{ position: "relative", height: "150px", borderRadius: "12px", background: "linear-gradient(160deg,#EFF2F6,#E4E9F0)", display: "flex", alignItems: "center", justifyContent: "center", gap: "14px", overflow: "hidden", padding: "14px" }}>
                    <div className="collaboration-workflow__row" style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                      <div style={{ textAlign: "center" }}>
                        <div style={{ width: "70px", height: "44px", background: "#fff", border: "1.5px solid #C9D4EC", borderRadius: "9px" }}></div>
                        <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "7px", color: "#4a5266", marginTop: "4px" }}>{copy.diagram.retailer}
                        </div>
                      </div>
                      <div style={{ width: "34px", height: "52px", border: "2px dashed #2C8C99", borderRadius: "9px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <span style={{ fontSize: "12px", color: "#2C8C99" }}>✓
                        </span>
                      </div>
                      <div style={{ textAlign: "center" }}>
                        <div style={{ width: "70px", height: "44px", background: "#EFF7F8", border: "1.5px solid #2C8C99", borderRadius: "9px" }}></div>
                        <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "7px", color: "#1C6470", marginTop: "4px" }}>{copy.diagram.signal}
                        </div>
                      </div>
                      <div className="collaboration-workflow__line" style={{ width: "26px", height: "2px", background: "#2C8C99" }}></div>
                      <div style={{ textAlign: "center" }}>
                        <div style={{ width: "70px", height: "44px", background: "#fff", border: "1.5px solid #C9D4EC", borderRadius: "9px" }}></div>
                        <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "7px", color: "#4a5266", marginTop: "4px" }}>{copy.diagram.brand}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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
              <Link className="hv114" href="/book-a-walkthrough#schedule" style={{ display: "inline-flex", padding: "13px 22px", background: "#32415C", color: "#fff", borderRadius: "10px", fontSize: "14px", fontWeight: "700" }}>{copy.final.guidedSetup}
              </Link>
              <Link className="hv115" href="/for-brands" style={{ display: "inline-flex", padding: "13px 22px", border: "1.5px solid #32415C", color: "#32415C", borderRadius: "10px", fontSize: "14px", fontWeight: "600" }}>{copy.final.brands}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
