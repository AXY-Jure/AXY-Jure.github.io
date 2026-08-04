import React from 'react';
import { css } from '../lib/css.js';

export default function SalesCapture(v) {
  return (
    <>
      <div data-screen-label="In-Store Sales Capture">
        <div style={{ background: "#fff", padding: "66px 24px 58px" }}>
          <div style={{ maxWidth: "1080px", margin: "0 auto", display: "flex", gap: "44px", alignItems: "center", flexWrap: "wrap" }}>
            <div style={{ flex: "1.1", minWidth: "300px" }}>
              <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "10.5px", letterSpacing: ".13em", color: "#2C8C99", textTransform: "uppercase" }}>Use case · In-store sales capture
              </div>
              <h1 style={{ fontSize: "36px", fontWeight: "800", color: "#1F2B4D", lineHeight: "1.13", margin: "14px 0 0" }}>The sale is the last 5%. Capture the other 95%.
              </h1>
              <p style={{ fontSize: "15px", color: "#667085", lineHeight: "1.6", margin: "16px 0 0", maxWidth: "540px" }}>POS and ERP record what sold. AXY records what happened — who came in, what was shown, what almost sold and what should happen next.
              </p>
              <div style={{ display: "flex", gap: "12px", marginTop: "22px", flexWrap: "wrap" }}>
                <a className="hv107" href="https://app.axy.net/onboarding" style={{ display: "inline-flex", padding: "13px 22px", background: "#32415C", color: "#fff", borderRadius: "10px", fontSize: "14px", fontWeight: "700" }}>Create free account
                </a>
              </div>
            </div>
          </div>
        </div>
        <div style={{ background: "#F9FAFB", padding: "64px 24px" }}>
          <div style={{ maxWidth: "1080px", margin: "0 auto" }}>
            <div style={{ maxWidth: "820px", margin: "0 auto", background: "#F9FAFB", borderLeft: "3px solid #2C8C99", borderRadius: "0 12px 12px 0", padding: "18px 22px" }}>
              <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "9px", color: "#1C6470", letterSpacing: ".08em" }}>DEFINITION
              </div>
              <p style={{ fontSize: "14.5px", color: "#1F2B4D", lineHeight: "1.65", margin: "8px 0 0" }}>
                <strong>In-store sales capture is
                </strong>{' '}the structured recording of meaningful store activity before and around the transaction: visits, products presented, customer reactions, unavailable-product demand, inquiries and next steps — captured live, in seconds, by the people doing the selling.
              </p>
            </div>
            <div style={{ display: "flex", gap: "14px", marginTop: "24px", flexWrap: "wrap", maxWidth: "860px", marginLeft: "auto", marginRight: "auto" }}>
              <div style={{ flex: "1", minWidth: "250px", background: "#fff", border: "1px solid #E4E8EF", borderRadius: "14px", padding: "19px" }}>
                <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "9px", color: "#9aa3b2" }}>WHAT SYSTEMS RECORD
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "6px", marginTop: "10px", fontSize: "13px", color: "#667085" }}>
                  <span>Transactions
                  </span>
                  <span>Stock movements
                  </span>
                  <span>Invoices
                  </span>
                  <span>Customer master data
                  </span>
                </div>
              </div>
              <div style={{ flex: "1.2", minWidth: "250px", background: "#fff", border: "1.5px solid #2C8C99", borderRadius: "14px", padding: "19px" }}>
                <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "9px", color: "#1C6470" }}>WHAT AXY ADDS
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "6px", marginTop: "10px", fontSize: "13px", color: "#1F2B4D" }}>
                  <span>✓ Visits and presentations
                  </span>
                  <span>✓ Liked / compared / rejected
                  </span>
                  <span>✓ Requested but unavailable
                  </span>
                  <span>✓ Inquiries and offers
                  </span>
                  <span>✓ The agreed next step
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ background: "#fff", padding: "64px 24px" }}>
          <div style={{ maxWidth: "1080px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", maxWidth: "660px", margin: "0 auto" }}>
              <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "10.5px", letterSpacing: ".13em", color: "#2C8C99", textTransform: "uppercase" }}>How capture works
              </div>
              <h2 style={{ fontSize: "27px", fontWeight: "800", lineHeight: "1.16", margin: "12px 0 0" }}>Six moments, seconds each
              </h2>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(170px,1fr))", gap: "14px", marginTop: "30px" }}>
              <div style={{ background: "#fff", border: "1px solid #E4E8EF", borderRadius: "14px", padding: "19px" }}>
                <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "9px", color: "#2C8C99" }}>01
                </div>
                <div style={{ fontSize: "14.5px", fontWeight: "800", marginTop: "7px" }}>Begin the visit
                </div>
                <p style={{ fontSize: "12.5px", color: "#667085", lineHeight: "1.55", margin: "7px 0 0" }}>The container for everything that follows.
                </p>
              </div>
              <div style={{ background: "#fff", border: "1px solid #E4E8EF", borderRadius: "14px", padding: "19px" }}>
                <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "9px", color: "#2C8C99" }}>02
                </div>
                <div style={{ fontSize: "14.5px", fontWeight: "800", marginTop: "7px" }}>Products shown
                </div>
                <p style={{ fontSize: "12.5px", color: "#667085", lineHeight: "1.55", margin: "7px 0 0" }}>Every presentation logged by scan.
                </p>
              </div>
              <div style={{ background: "#fff", border: "1px solid #E4E8EF", borderRadius: "14px", padding: "19px" }}>
                <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "9px", color: "#2C8C99" }}>03
                </div>
                <div style={{ fontSize: "14.5px", fontWeight: "800", marginTop: "7px" }}>Reactions
                </div>
                <p style={{ fontSize: "12.5px", color: "#667085", lineHeight: "1.55", margin: "7px 0 0" }}>Liked, compared, rejected, wishlisted.
                </p>
              </div>
              <div style={{ background: "#fff", border: "1px solid #E4E8EF", borderRadius: "14px", padding: "19px" }}>
                <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "9px", color: "#2C8C99" }}>04
                </div>
                <div style={{ fontSize: "14.5px", fontWeight: "800", marginTop: "7px" }}>Unavailable demand
                </div>
                <p style={{ fontSize: "12.5px", color: "#667085", lineHeight: "1.55", margin: "7px 0 0" }}>Asked-for items you did not have — captured, not shrugged off.
                </p>
              </div>
              <div style={{ background: "#fff", border: "1px solid #E4E8EF", borderRadius: "14px", padding: "19px" }}>
                <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "9px", color: "#2C8C99" }}>05
                </div>
                <div style={{ fontSize: "14.5px", fontWeight: "800", marginTop: "7px" }}>Outcome
                </div>
                <p style={{ fontSize: "12.5px", color: "#667085", lineHeight: "1.55", margin: "7px 0 0" }}>Inquiry, offer, invoice — or an honest “not today”.
                </p>
              </div>
              <div style={{ background: "#fff", border: "1px solid #E4E8EF", borderRadius: "14px", padding: "19px" }}>
                <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "9px", color: "#2C8C99" }}>06
                </div>
                <div style={{ fontSize: "14.5px", fontWeight: "800", marginTop: "7px" }}>Next step
                </div>
                <p style={{ fontSize: "12.5px", color: "#667085", lineHeight: "1.55", margin: "7px 0 0" }}>A follow-up with an owner and a date.
                </p>
              </div>
            </div>
            <div style={{ maxWidth: "760px", margin: "22px auto 0" }}>
              <div style={{ background: "#F9FAFB", border: "1px solid #E4E8EF", borderRadius: "12px", padding: "16px 18px" }}>
                <div style={{ fontSize: "13.5px", fontWeight: "800" }}>The effort principle
                </div>
                <p style={{ fontSize: "12.5px", color: "#667085", lineHeight: "1.6", margin: "8px 0 0" }}>If a step takes more than a few seconds or interrupts the customer, it does not ship. Data quality comes from capture that feels like part of selling — never from forced forms.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div style={{ background: "#F9FAFB", padding: "64px 24px" }}>
          <div style={{ maxWidth: "1080px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto" }}>
              <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "10.5px", letterSpacing: ".13em", color: "#2C8C99", textTransform: "uppercase" }}>What it unlocks
              </div>
              <h2 style={{ fontSize: "27px", fontWeight: "800", lineHeight: "1.16", margin: "12px 0 0" }}>From captured activity to better decisions
              </h2>
              <p style={{ fontSize: "14.5px", color: "#667085", lineHeight: "1.6", margin: "13px 0 0" }}>Conversion by store and salesperson, product attention versus sales, demand for what you do not stock — the raw material for the demand intelligence use case.
              </p>
            </div>
            <div style={{ maxWidth: "760px", margin: "30px auto 0", display: "flex", flexDirection: "column", gap: "9px" }}>
              <details style={{ background: "#fff", border: "1px solid #E4E8EF", borderRadius: "12px", padding: "15px 18px" }}>
                <summary style={{ fontSize: "14px", fontWeight: "700", color: "#1F2B4D", display: "flex", justifyContent: "space-between", gap: "12px" }}>Will salespeople resist logging?
                  <span style={{ color: "#2C8C99" }}>+
                  </span>
                </summary>
                <p style={{ fontSize: "13.5px", color: "#667085", lineHeight: "1.6", margin: "10px 0 0" }}>They resist admin. Capture here is two taps mid-conversation, and gives them back their own follow-up list and results — the incentive is built in.
                </p>
              </details>
              <details style={{ background: "#fff", border: "1px solid #E4E8EF", borderRadius: "12px", padding: "15px 18px" }}>
                <summary style={{ fontSize: "14px", fontWeight: "700", color: "#1F2B4D", display: "flex", justifyContent: "space-between", gap: "12px" }}>What if a visit is missed?
                  <span style={{ color: "#2C8C99" }}>+
                  </span>
                </summary>
                <p style={{ fontSize: "13.5px", color: "#667085", lineHeight: "1.6", margin: "10px 0 0" }}>Signals degrade gracefully — partial capture still beats none. Manager views show capture consistency so coaching happens on facts.
                </p>
              </details>
            </div>
            <div style={{ textAlign: "center", marginTop: "30px", display: "flex", justifyContent: "center", gap: "12px", flexWrap: "wrap" }}>
              <a className="hv108" href="https://app.axy.net/onboarding" style={{ display: "inline-flex", padding: "13px 22px", background: "#32415C", color: "#fff", borderRadius: "10px", fontSize: "14px", fontWeight: "700" }}>Create free account
              </a>
              <a className="hv109" href="/use-cases/product-demand-intelligence" style={{ display: "inline-flex", padding: "13px 22px", border: "1.5px solid #32415C", color: "#32415C", borderRadius: "10px", fontSize: "14px", fontWeight: "600" }}>Demand intelligence
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
