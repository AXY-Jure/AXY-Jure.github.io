import React from 'react';
import { css } from '../lib/css.js';

export default function DemandIntelligence(v) {
  return (
    <>
      <div data-screen-label="Product Demand Intelligence">
        <div style={{ background: "linear-gradient(135deg,#1F2B4D,#32415C 62%,#2C6570)", padding: "66px 24px 58px" }}>
          <div style={{ maxWidth: "1080px", margin: "0 auto", display: "flex", gap: "44px", alignItems: "center", flexWrap: "wrap" }}>
            <div style={{ flex: "1.1", minWidth: "300px" }}>
              <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "10.5px", letterSpacing: ".13em", color: "#33D6A4", textTransform: "uppercase" }}>Use case · Product demand intelligence
              </div>
              <h1 style={{ fontSize: "36px", fontWeight: "800", color: "#fff", lineHeight: "1.13", margin: "14px 0 0" }}>Demand shows up long before the receipt.
              </h1>
              <p style={{ fontSize: "15px", color: "#C9D2E4", lineHeight: "1.6", margin: "16px 0 0", maxWidth: "540px" }}>Sales reports tell you what already happened. Interest signals — shown, wishlisted, requested, rejected — tell you what is about to. AXY structures both.
              </p>
              <div style={{ display: "flex", gap: "12px", marginTop: "22px", flexWrap: "wrap" }}>
                <a className="hv110" href="https://app.axy.net/onboarding" style={{ display: "inline-flex", padding: "13px 22px", background: "#fff", color: "#1F2B4D", borderRadius: "10px", fontSize: "14px", fontWeight: "700" }}>Create free account
                </a>
              </div>
            </div>
            <div style={{ flex: "1", minWidth: "300px" }}>
              <div style={{ border: "1.5px dashed rgba(255,255,255,.35)", borderRadius: "14px", background: "rgba(255,255,255,.06)", padding: "16px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "8.5px", fontWeight: "700", color: "#1F2B4D", background: "#7fd4de", borderRadius: "5px", padding: "3px 8px" }}>DASHBOARD
                  </span>
                  <span style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "9px", color: "#B9E8DC", letterSpacing: ".05em" }}>DEMAND VIEW
                  </span>
                </div>
                <div style={{ fontSize: "12.5px", color: "#DDE4F0", lineHeight: "1.55", marginTop: "9px" }}>Interest versus conversion per product; requested-but-unavailable list; aging stock with attention counts. Real screenshot required.
                </div>
                <div style={{ marginTop: "11px" }}>
                  <div style={{ position: "relative", height: "160px", borderRadius: "12px", background: "linear-gradient(160deg,#243250,#1C2740)", display: "flex", alignItems: "center", justifyContent: "center", gap: "14px", overflow: "hidden", padding: "14px" }}>
                    <div style={{ position: "relative", width: "320px", height: "140px", background: "#F7F8FA", border: "1px solid #D9DEE7", borderRadius: "10px", overflow: "hidden", boxShadow: "0 16px 32px rgba(31,43,77,.16)", display: "flex", flexDirection: "column" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "5px", padding: "6px 9px", background: "#1F2B4D" }}>
                        <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#4E5D80" }}></span>
                        <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#4E5D80" }}></span>
                        <span style={{ fontSize: "7.5px", fontWeight: "700", color: "#fff", marginLeft: "5px" }}>Demand · What should I buy?
                        </span>
                      </div>
                      <div style={{ flex: "1", padding: "7px", display: "flex", flexDirection: "column", gap: "4px" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "7px", background: "#fff", border: "1px solid #E7EAF0", borderRadius: "6px", padding: "5px 8px" }}>
                          <span style={{ width: "15px", height: "15px", border: "2px solid #3A465F", borderRadius: "50%", background: "#F8F6F2", flexShrink: "0" }}></span>
                          <span style={{ flex: "1", fontSize: "8px", fontWeight: "600", color: "#1F2B4D" }}>Meridian Steel
                          </span>
                          <span style={{ fontSize: "6.5px", color: "#667085" }}>Shown 8 · Req 3 · Stock 0
                          </span>
                          <span style={{ fontSize: "6.5px", fontWeight: "700", color: "#fff", background: "#2C8C99", borderRadius: "5px", padding: "2px 6px" }}>REORDER
                          </span>
                        </div>
                        <div style={{ display: "flex", alignItems: "center", gap: "7px", background: "#fff", border: "1px solid #E7EAF0", borderRadius: "6px", padding: "5px 8px" }}>
                          <span style={{ width: "15px", height: "15px", border: "2px solid #3A465F", borderRadius: "50%", background: "#F8F6F2", flexShrink: "0" }}></span>
                          <span style={{ flex: "1", fontSize: "8px", fontWeight: "600", color: "#1F2B4D" }}>Aria Quartz
                          </span>
                          <span style={{ fontSize: "6.5px", color: "#667085" }}>Low interest
                          </span>
                          <span style={{ fontSize: "6.5px", fontWeight: "700", color: "#fff", background: "#8A93A6", borderRadius: "5px", padding: "2px 6px" }}>NOT YET
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
        <div style={{ background: "#fff", padding: "64px 24px" }}>
          <div style={{ maxWidth: "1080px", margin: "0 auto" }}>
            <div style={{ maxWidth: "820px", margin: "0 auto", background: "#F9FAFB", borderLeft: "3px solid #2C8C99", borderRadius: "0 12px 12px 0", padding: "18px 22px" }}>
              <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "9px", color: "#1C6470", letterSpacing: ".08em" }}>DEFINITION
              </div>
              <p style={{ fontSize: "14.5px", color: "#1F2B4D", lineHeight: "1.65", margin: "8px 0 0" }}>
                <strong>Product demand intelligence is
                </strong>{' '}the use of structured in-store signals — presentations, wishlists, inquiries, rejections, availability gaps and outcomes — to understand what customers actually want, per store and across the network, before that demand is visible in sales alone.
              </p>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "7px", justifyContent: "center", marginTop: "20px", maxWidth: "760px", marginLeft: "auto", marginRight: "auto" }}>
              <span style={{ fontSize: "12px", color: "#1F2B4D", background: "#EFF7F8", border: "1px solid #C9E2E6", borderRadius: "8px", padding: "6px 12px" }}>Products shown
              </span>
              <span style={{ fontSize: "12px", color: "#1F2B4D", background: "#EFF7F8", border: "1px solid #C9E2E6", borderRadius: "8px", padding: "6px 12px" }}>Wishlists
              </span>
              <span style={{ fontSize: "12px", color: "#1F2B4D", background: "#EFF7F8", border: "1px solid #C9E2E6", borderRadius: "8px", padding: "6px 12px" }}>Inquiries
              </span>
              <span style={{ fontSize: "12px", color: "#1F2B4D", background: "#EFF7F8", border: "1px solid #C9E2E6", borderRadius: "8px", padding: "6px 12px" }}>Rejections
              </span>
              <span style={{ fontSize: "12px", color: "#1F2B4D", background: "#EFF7F8", border: "1px solid #C9E2E6", borderRadius: "8px", padding: "6px 12px" }}>Availability gaps
              </span>
              <span style={{ fontSize: "12px", color: "#1F2B4D", background: "#EFF7F8", border: "1px solid #C9E2E6", borderRadius: "8px", padding: "6px 12px" }}>Stock context
              </span>
              <span style={{ fontSize: "12px", color: "#1F2B4D", background: "#EFF7F8", border: "1px solid #C9E2E6", borderRadius: "8px", padding: "6px 12px" }}>Offers
              </span>
              <span style={{ fontSize: "12px", color: "#1F2B4D", background: "#EFF7F8", border: "1px solid #C9E2E6", borderRadius: "8px", padding: "6px 12px" }}>Purchases
              </span>
              <span style={{ fontSize: "12px", color: "#1F2B4D", background: "#EFF7F8", border: "1px solid #C9E2E6", borderRadius: "8px", padding: "6px 12px" }}>Customer App activity
              </span>
            </div>
          </div>
        </div>
        <div style={{ background: "#F9FAFB", padding: "64px 24px" }}>
          <div style={{ maxWidth: "1080px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", maxWidth: "660px", margin: "0 auto" }}>
              <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "10.5px", letterSpacing: ".13em", color: "#2C8C99", textTransform: "uppercase" }}>What you decide with it
              </div>
              <h2 style={{ fontSize: "27px", fontWeight: "800", lineHeight: "1.16", margin: "12px 0 0" }}>From signal to decision
              </h2>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: "14px", marginTop: "30px" }}>
              <div style={{ background: "#fff", border: "1px solid #E4E8EF", borderRadius: "14px", padding: "19px" }}>
                <div style={{ fontSize: "14.5px", fontWeight: "800", marginTop: "0px" }}>Buying and reorder
                </div>
                <p style={{ fontSize: "12.5px", color: "#667085", lineHeight: "1.55", margin: "7px 0 0" }}>Interest plus availability context — restock what draws attention, not just what sold last quarter.
                </p>
              </div>
              <div style={{ background: "#fff", border: "1px solid #E4E8EF", borderRadius: "14px", padding: "19px" }}>
                <div style={{ fontSize: "14.5px", fontWeight: "800", marginTop: "0px" }}>Attention and aging
                </div>
                <p style={{ fontSize: "12.5px", color: "#667085", lineHeight: "1.55", margin: "7px 0 0" }}>Shown-often-never-sold and never-shown-at-all — both are actionable.
                </p>
              </div>
              <div style={{ background: "#fff", border: "1px solid #E4E8EF", borderRadius: "14px", padding: "19px" }}>
                <div style={{ fontSize: "14.5px", fontWeight: "800", marginTop: "0px" }}>Store comparison
                </div>
                <p style={{ fontSize: "12.5px", color: "#667085", lineHeight: "1.55", margin: "7px 0 0" }}>Which locations create interest in which lines — and where follow-up converts.
                </p>
              </div>
              <div style={{ background: "#fff", border: "1px solid #E4E8EF", borderRadius: "14px", padding: "19px" }}>
                <div style={{ fontSize: "14.5px", fontWeight: "800", marginTop: "0px" }}>Approved brand insight
                </div>
                <p style={{ fontSize: "12.5px", color: "#667085", lineHeight: "1.55", margin: "7px 0 0" }}>Share aggregated trends with a manufacturer — only if and when you choose.
                </p>
                <div style={{ marginTop: "9px" }}>
                  <a href="/for-brands" style={{ fontSize: "13.5px", fontWeight: "700", color: "#2C8C99" }}>The brand side →
                  </a>
                </div>
              </div>
            </div>
            <div style={{ maxWidth: "760px", margin: "24px auto 0", background: "#fff", border: "1px solid #E6C9C4", borderRadius: "12px", padding: "16px 18px" }}>
              <div style={{ display: "flex", gap: "8px", alignItems: "flex-start" }}>
                <span style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "8.5px", fontWeight: "700", color: "#8a2f25", background: "#F6DDDA", borderRadius: "5px", padding: "3px 7px", flexShrink: "0" }}>HONESTY NOTE
                </span>
                <span style={{ fontSize: "12.5px", color: "#3a4358", lineHeight: "1.6" }}>Interest is a leading indicator, not a prediction. AXY shows you structured signals and their limits — it does not promise forecasting accuracy, and signal quality depends on capture consistency.
                </span>
              </div>
            </div>
            <div style={{ maxWidth: "760px", margin: "30px auto 0", display: "flex", flexDirection: "column", gap: "9px" }}>
              <details style={{ background: "#fff", border: "1px solid #E4E8EF", borderRadius: "12px", padding: "15px 18px" }}>
                <summary style={{ fontSize: "14px", fontWeight: "700", color: "#1F2B4D", display: "flex", justifyContent: "space-between", gap: "12px" }}>How is this different from sales analytics?
                  <span style={{ color: "#2C8C99" }}>+
                  </span>
                </summary>
                <p style={{ fontSize: "13.5px", color: "#667085", lineHeight: "1.6", margin: "10px 0 0" }}>Sales analytics counts outcomes. This adds the numerator you have been missing: everything customers considered — so you see demand you could have served.
                </p>
              </details>
              <details style={{ background: "#fff", border: "1px solid #E4E8EF", borderRadius: "12px", padding: "15px 18px" }}>
                <summary style={{ fontSize: "14px", fontWeight: "700", color: "#1F2B4D", display: "flex", justifyContent: "space-between", gap: "12px" }}>What exactly can a brand partner see?
                  <span style={{ color: "#2C8C99" }}>+
                  </span>
                </summary>
                <p style={{ fontSize: "13.5px", color: "#667085", lineHeight: "1.6", margin: "10px 0 0" }}>Only aggregated, product-level signals you explicitly approve. Never customers, visits or your margins.
                </p>
              </details>
            </div>
            <div style={{ textAlign: "center", marginTop: "30px", display: "flex", justifyContent: "center", gap: "12px", flexWrap: "wrap" }}>
              <a className="hv111" href="https://app.axy.net/onboarding" style={{ display: "inline-flex", padding: "13px 22px", background: "#fff", color: "#1F2B4D", borderRadius: "10px", fontSize: "14px", fontWeight: "700" }}>Create free account
              </a>
              <a className="hv112" href="/integrations" style={{ display: "inline-flex", padding: "13px 22px", border: "1.5px solid #32415C", color: "#32415C", borderRadius: "10px", fontSize: "14px", fontWeight: "600" }}>Permission model
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
