import React from 'react';
import { css } from '../lib/css.js';

export default function Article(v) {
  return (
    <>
      <div data-screen-label="Article: Retail Clienteling">
        <div style={{ background: "linear-gradient(168deg,#FFFFFF,#F6F8FB)", padding: "44px 24px 34px" }}>
          <div style={{ maxWidth: "720px", margin: "0 auto" }}>
            <div style={{ fontSize: "12.5px", color: "#8a94a6", lineHeight: "1.7" }}>
              <a href="/" style={{ color: "#8a94a6", textDecoration: "none" }}>Home
              </a>{' '}&rsaquo;{' '}
              <a href="/resources" style={{ color: "#8a94a6", textDecoration: "none" }}>Resources
              </a>{' '}&rsaquo;{' '}
              <a href="/resources" style={{ color: "#8a94a6", textDecoration: "none" }}>Retail sales and clienteling
              </a>{' '}&rsaquo;{' '}
              <span style={{ color: "#2C8C99", fontWeight: "600" }}>What is retail clienteling?
              </span>
            </div>
            <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "10.5px", letterSpacing: ".14em", color: "#2C8C99", textTransform: "uppercase", marginTop: "22px" }}>Retail sales and clienteling
            </div>
            <h1 style={{ fontSize: "36px", fontWeight: "800", color: "#1F2B4D", lineHeight: "1.14", letterSpacing: "-.02em", margin: "12px 0 0" }}>What is retail clienteling&mdash;and why CRM records are not enough?
            </h1>
            <div style={{ background: "#fff", border: "1px solid #CFE7E6", borderLeft: "4px solid #2C8C99", borderRadius: "0 14px 14px 0", padding: "18px 22px", marginTop: "22px", boxShadow: "0 8px 22px rgba(31,43,77,.06)" }}>
              <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "9px", color: "#1C6470", letterSpacing: ".1em", textTransform: "uppercase" }}>Direct answer
              </div>
              <p style={{ fontSize: "15px", color: "#1F2B4D", lineHeight: "1.68", margin: "9px 0 0" }}>Retail clienteling is the practice of using customer preferences, visit history, product interest and meaningful follow-up to build long-term store relationships. A CRM can store customer records and transactions, but effective clienteling also requires the context created during store visits: what was presented, what mattered to the customer and what should happen next.
              </p>
            </div>
            <div style={{ display: "flex", gap: "14px", alignItems: "center", marginTop: "20px", flexWrap: "wrap" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "11px" }}>
                <div style={{ width: "42px", height: "42px", borderRadius: "50%", background: "linear-gradient(150deg,#32415C,#2C6570)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: "700", fontSize: "15px" }}>JM
                </div>
                <div>
                  <div style={{ fontSize: "13.5px", fontWeight: "700", color: "#1F2B4D" }}>Jure Malalan
                  </div>
                  <div style={{ fontSize: "12px", color: "#8a94a6" }}>Founder of AXY and premium retail operator
                  </div>
                </div>
              </div>
              <div style={{ width: "1px", height: "32px", background: "#E4E8EF" }}></div>
              <div style={{ fontSize: "12px", color: "#8a94a6", lineHeight: "1.5" }}>
                <div>Published 18 June 2026 &middot; Updated 14 July 2026
                </div>
                <div>12 min read
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ background: "#fff", padding: "28px 24px 0" }}>
          <div style={{ maxWidth: "720px", margin: "0 auto" }}>
            <div style={{ background: "linear-gradient(160deg,#F4F7FB,#EAF1F4)", border: "1px solid #E4E8EF", borderRadius: "18px", padding: "26px 22px" }}>
              <div className="art-hero-flow" style={{ display: "flex", alignItems: "center", gap: "10px", justifyContent: "space-between", flexWrap: "wrap" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <div style={{ background: "#fff", border: "1px solid #D9E0EC", borderRadius: "11px", padding: "12px 14px", boxShadow: "0 6px 16px rgba(31,43,77,.08)" }}>
                    <span style={{ fontSize: "12.5px", fontWeight: "700", color: "#1F2B4D", whiteSpace: "nowrap" }}>Customer profile
                    </span>
                  </div>
                  <span style={{ color: "#2C8C99", fontWeight: "700" }}>&rarr;
                  </span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <div style={{ background: "#fff", border: "1px solid #D9E0EC", borderRadius: "11px", padding: "12px 14px", boxShadow: "0 6px 16px rgba(31,43,77,.08)" }}>
                    <span style={{ fontSize: "12.5px", fontWeight: "700", color: "#1F2B4D", whiteSpace: "nowrap" }}>Store visit
                    </span>
                  </div>
                  <span style={{ color: "#2C8C99", fontWeight: "700" }}>&rarr;
                  </span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <div style={{ background: "#fff", border: "1px solid #D9E0EC", borderRadius: "11px", padding: "12px 14px", boxShadow: "0 6px 16px rgba(31,43,77,.08)" }}>
                    <span style={{ fontSize: "12.5px", fontWeight: "700", color: "#1F2B4D", whiteSpace: "nowrap" }}>Product interest
                    </span>
                  </div>
                  <span style={{ color: "#2C8C99", fontWeight: "700" }}>&rarr;
                  </span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <div style={{ background: "#fff", border: "1px solid #D9E0EC", borderRadius: "11px", padding: "12px 14px", boxShadow: "0 6px 16px rgba(31,43,77,.08)" }}>
                    <span style={{ fontSize: "12.5px", fontWeight: "700", color: "#1F2B4D", whiteSpace: "nowrap" }}>Follow-up
                    </span>
                  </div>
                  <span style={{ color: "#2C8C99", fontWeight: "700" }}>&rarr;
                  </span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <div style={{ background: "linear-gradient(150deg,#20304F,#121B34)", border: "1px solid transparent", borderRadius: "11px", padding: "12px 14px", boxShadow: "0 6px 16px rgba(31,43,77,.08)" }}>
                    <span style={{ fontSize: "12.5px", fontWeight: "700", color: "#fff", whiteSpace: "nowrap" }}>Long-term relationship
                    </span>
                  </div>
                </div>
              </div>
              <p style={{ fontSize: "12px", color: "#8a94a6", lineHeight: "1.55", margin: "16px 0 0", textAlign: "center" }}>Clienteling turns a one-time store visit into a continuing relationship &mdash; connecting who the customer is with what they looked at, what mattered and what should happen next.
              </p>
            </div>
          </div>
        </div>
        <div style={{ background: "#fff", padding: "34px 24px 0" }}>
          <div style={{ maxWidth: "720px", margin: "0 auto" }}>
            <div style={{ background: "#F9FAFB", border: "1px solid #E4E8EF", borderRadius: "16px", padding: "24px" }}>
              <div style={{ fontSize: "16px", fontWeight: "800", color: "#1F2B4D" }}>Key takeaways
              </div>
              <div className="art-takeaways" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginTop: "16px" }}>
                <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                  <span style={{ flexShrink: "0", width: "24px", height: "24px", borderRadius: "7px", background: "#EAF6F6", border: "1px solid #CDE7E6", color: "#1C6470", fontFamily: "'Roboto Mono',monospace", fontSize: "11px", fontWeight: "700", display: "flex", alignItems: "center", justifyContent: "center" }}>1
                  </span>
                  <span style={{ fontSize: "14px", color: "#1F2B4D", lineHeight: "1.55", fontWeight: "600" }}>Clienteling is a continuous customer relationship, not only a contact record.
                  </span>
                </div>
                <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                  <span style={{ flexShrink: "0", width: "24px", height: "24px", borderRadius: "7px", background: "#EAF6F6", border: "1px solid #CDE7E6", color: "#1C6470", fontFamily: "'Roboto Mono',monospace", fontSize: "11px", fontWeight: "700", display: "flex", alignItems: "center", justifyContent: "center" }}>2
                  </span>
                  <span style={{ fontSize: "14px", color: "#1F2B4D", lineHeight: "1.55", fontWeight: "600" }}>Much of the most valuable customer context is created before the transaction.
                  </span>
                </div>
                <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                  <span style={{ flexShrink: "0", width: "24px", height: "24px", borderRadius: "7px", background: "#EAF6F6", border: "1px solid #CDE7E6", color: "#1C6470", fontFamily: "'Roboto Mono',monospace", fontSize: "11px", fontWeight: "700", display: "flex", alignItems: "center", justifyContent: "center" }}>3
                  </span>
                  <span style={{ fontSize: "14px", color: "#1F2B4D", lineHeight: "1.55", fontWeight: "600" }}>Salespeople should record only the information required to improve the next interaction.
                  </span>
                </div>
                <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                  <span style={{ flexShrink: "0", width: "24px", height: "24px", borderRadius: "7px", background: "#EAF6F6", border: "1px solid #CDE7E6", color: "#1C6470", fontFamily: "'Roboto Mono',monospace", fontSize: "11px", fontWeight: "700", display: "flex", alignItems: "center", justifyContent: "center" }}>4
                  </span>
                  <span style={{ fontSize: "14px", color: "#1F2B4D", lineHeight: "1.55", fontWeight: "600" }}>A useful follow-up needs a reason, an owner and a clear next date.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ background: "#fff", padding: "26px 24px 0" }}>
          <div style={{ maxWidth: "720px", margin: "0 auto" }}>
            <div style={{ borderTop: "1px solid #E9EDF3", borderBottom: "1px solid #E9EDF3", padding: "18px 0" }}>
              <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "9.5px", letterSpacing: ".1em", color: "#9aa3b2", textTransform: "uppercase", marginBottom: "8px" }}>On this page
              </div>
              <div className="art-toc" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2px 24px" }}>
                <a className="hv176" href="#axy-art-1" style={{ display: "flex", gap: "10px", fontSize: "13.5px", color: "#42506e", textDecoration: "none", padding: "5px 0", lineHeight: "1.45" }}>
                  <span style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "11px", color: "#9aa3b2", flexShrink: "0" }}>01
                  </span>
                  <span>What retail clienteling actually means
                  </span>
                </a>
                <a className="hv177" href="#axy-art-2" style={{ display: "flex", gap: "10px", fontSize: "13.5px", color: "#42506e", textDecoration: "none", padding: "5px 0", lineHeight: "1.45" }}>
                  <span style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "11px", color: "#9aa3b2", flexShrink: "0" }}>02
                  </span>
                  <span>Why CRM records are not enough
                  </span>
                </a>
                <a className="hv178" href="#axy-art-3" style={{ display: "flex", gap: "10px", fontSize: "13.5px", color: "#42506e", textDecoration: "none", padding: "5px 0", lineHeight: "1.45" }}>
                  <span style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "11px", color: "#9aa3b2", flexShrink: "0" }}>03
                  </span>
                  <span>What happens before the transaction
                  </span>
                </a>
                <a className="hv179" href="#axy-art-4" style={{ display: "flex", gap: "10px", fontSize: "13.5px", color: "#42506e", textDecoration: "none", padding: "5px 0", lineHeight: "1.45" }}>
                  <span style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "11px", color: "#9aa3b2", flexShrink: "0" }}>04
                  </span>
                  <span>What sales teams should capture during a visit
                  </span>
                </a>
                <a className="hv180" href="#axy-art-5" style={{ display: "flex", gap: "10px", fontSize: "13.5px", color: "#42506e", textDecoration: "none", padding: "5px 0", lineHeight: "1.45" }}>
                  <span style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "11px", color: "#9aa3b2", flexShrink: "0" }}>05
                  </span>
                  <span>How to make customer follow-up reliable
                  </span>
                </a>
                <a className="hv181" href="#axy-art-6" style={{ display: "flex", gap: "10px", fontSize: "13.5px", color: "#42506e", textDecoration: "none", padding: "5px 0", lineHeight: "1.45" }}>
                  <span style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "11px", color: "#9aa3b2", flexShrink: "0" }}>06
                  </span>
                  <span>What retail managers should measure
                  </span>
                </a>
                <a className="hv182" href="#axy-art-7" style={{ display: "flex", gap: "10px", fontSize: "13.5px", color: "#42506e", textDecoration: "none", padding: "5px 0", lineHeight: "1.45" }}>
                  <span style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "11px", color: "#9aa3b2", flexShrink: "0" }}>07
                  </span>
                  <span>Common clienteling mistakes
                  </span>
                </a>
                <a className="hv183" href="#axy-art-8" style={{ display: "flex", gap: "10px", fontSize: "13.5px", color: "#42506e", textDecoration: "none", padding: "5px 0", lineHeight: "1.45" }}>
                  <span style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "11px", color: "#9aa3b2", flexShrink: "0" }}>08
                  </span>
                  <span>A practical clienteling checklist
                  </span>
                </a>
                <a className="hv184" href="#axy-art-9" style={{ display: "flex", gap: "10px", fontSize: "13.5px", color: "#42506e", textDecoration: "none", padding: "5px 0", lineHeight: "1.45" }}>
                  <span style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "11px", color: "#9aa3b2", flexShrink: "0" }}>09
                  </span>
                  <span>How AXY supports the workflow
                  </span>
                </a>
                <a className="hv185" href="#axy-art-10" style={{ display: "flex", gap: "10px", fontSize: "13.5px", color: "#42506e", textDecoration: "none", padding: "5px 0", lineHeight: "1.45" }}>
                  <span style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "11px", color: "#9aa3b2", flexShrink: "0" }}>10
                  </span>
                  <span>Frequently asked questions
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div id="axy-art-1" style={{ background: "#fff", padding: "34px 24px 0", scrollMarginTop: "72px" }}>
          <div style={{ maxWidth: "720px", margin: "0 auto" }}>
            <h2 style={{ fontSize: "25px", fontWeight: "800", color: "#1F2B4D", lineHeight: "1.22", letterSpacing: "-.01em" }}>What retail clienteling actually means
            </h2>
            <p style={{ fontSize: "15.5px", color: "#3a4358", lineHeight: "1.75", margin: "14px 0 0" }}>Clienteling is the discipline of building and continuing a personal customer relationship over time. It brings together the human side of selling and the practical context a salesperson needs to make each conversation more relevant than the last.
            </p>
            <p style={{ fontSize: "15.5px", color: "#3a4358", lineHeight: "1.75", margin: "14px 0 0" }}>In practice, clienteling combines human relationship-building, customer preferences, visit history, product interest, purchase history, relevant communication, timely follow-up and service or after-sales context.
            </p>
            <div style={{ fontSize: "14px", fontWeight: "800", color: "#1F2B4D", marginTop: "22px" }}>What clienteling is not
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "9px", marginTop: "16px" }}>
              <div style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                <span style={{ flexShrink: "0", width: "6px", height: "6px", borderRadius: "50%", background: "#B5764A", marginTop: "8px" }}></span>
                <span style={{ fontSize: "14.5px", color: "#3a4358", lineHeight: "1.6" }}>A customer contact list
                </span>
              </div>
              <div style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                <span style={{ flexShrink: "0", width: "6px", height: "6px", borderRadius: "50%", background: "#B5764A", marginTop: "8px" }}></span>
                <span style={{ fontSize: "14.5px", color: "#3a4358", lineHeight: "1.6" }}>Generic marketing messages
                </span>
              </div>
              <div style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                <span style={{ flexShrink: "0", width: "6px", height: "6px", borderRadius: "50%", background: "#B5764A", marginTop: "8px" }}></span>
                <span style={{ fontSize: "14.5px", color: "#3a4358", lineHeight: "1.6" }}>A loyalty programme on its own
                </span>
              </div>
              <div style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                <span style={{ flexShrink: "0", width: "6px", height: "6px", borderRadius: "50%", background: "#B5764A", marginTop: "8px" }}></span>
                <span style={{ fontSize: "14.5px", color: "#3a4358", lineHeight: "1.6" }}>Long, unstructured salesperson notes
                </span>
              </div>
              <div style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                <span style={{ flexShrink: "0", width: "6px", height: "6px", borderRadius: "50%", background: "#B5764A", marginTop: "8px" }}></span>
                <span style={{ fontSize: "14.5px", color: "#3a4358", lineHeight: "1.6" }}>Messaging every customer frequently
                </span>
              </div>
              <div style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                <span style={{ flexShrink: "0", width: "6px", height: "6px", borderRadius: "50%", background: "#B5764A", marginTop: "8px" }}></span>
                <span style={{ fontSize: "14.5px", color: "#3a4358", lineHeight: "1.6" }}>Collecting data without a useful next action
                </span>
              </div>
            </div>
            <div style={{ background: "#FBF6F1", border: "1px solid #F0E2D6", borderRadius: "14px", padding: "18px 20px", marginTop: "20px" }}>
              <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "9px", letterSpacing: ".1em", color: "#B5764A", textTransform: "uppercase" }}>Example
              </div>
              <p style={{ fontSize: "14.5px", color: "#5c4636", lineHeight: "1.65", margin: "9px 0 0" }}>A customer visits a jewellery store and compares two pieces but does not purchase. Effective clienteling preserves which pieces mattered, the reason for hesitation and the agreed next action &mdash; so the next conversation begins with context, not from zero.
              </p>
            </div>
          </div>
        </div>
        <div id="axy-art-2" style={{ background: "#fff", padding: "34px 24px 0", scrollMarginTop: "72px" }}>
          <div style={{ maxWidth: "720px", margin: "0 auto" }}>
            <h2 style={{ fontSize: "25px", fontWeight: "800", color: "#1F2B4D", lineHeight: "1.22", letterSpacing: "-.01em" }}>Why CRM records are not enough
            </h2>
            <p style={{ fontSize: "15.5px", color: "#3a4358", lineHeight: "1.75", margin: "14px 0 0" }}>A CRM record identifies the customer. Clienteling context helps the salesperson understand and continue the relationship. Both matter &mdash; they simply answer different questions.
            </p>
            <p style={{ fontSize: "15.5px", color: "#3a4358", lineHeight: "1.75", margin: "14px 0 0" }}>A traditional CRM commonly stores the name, email, phone number, purchase history, general notes and marketing consent. Clienteling also needs the products presented, products compared, likes and objections, wishlist, requested products, items that were unavailable, offer status, expected follow-up, warranty or service context and the next action.
            </p>
            <div className="art-cmp" style={{ display: "flex", gap: "14px", marginTop: "22px", flexWrap: "wrap" }}>
              <div style={{ flex: "1", minWidth: "230px", background: "#F9FAFB", border: "1px solid #E4E8EF", borderRadius: "14px", padding: "20px" }}>
                <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "9px", letterSpacing: ".1em", color: "#8a94a6", textTransform: "uppercase" }}>What a CRM captures
                </div>
                <div style={{ fontSize: "16px", fontWeight: "800", color: "#1F2B4D", marginTop: "6px" }}>Customer record
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginTop: "14px" }}>
                  <div style={{ display: "flex", gap: "8px", alignItems: "center", fontSize: "13px", color: "#3a4358" }}>
                    <span style={{ color: "#8a94a6" }}>&mdash;
                    </span>Identity
                  </div>
                  <div style={{ display: "flex", gap: "8px", alignItems: "center", fontSize: "13px", color: "#3a4358" }}>
                    <span style={{ color: "#8a94a6" }}>&mdash;
                    </span>Contact information
                  </div>
                  <div style={{ display: "flex", gap: "8px", alignItems: "center", fontSize: "13px", color: "#3a4358" }}>
                    <span style={{ color: "#8a94a6" }}>&mdash;
                    </span>Transactions
                  </div>
                  <div style={{ display: "flex", gap: "8px", alignItems: "center", fontSize: "13px", color: "#3a4358" }}>
                    <span style={{ color: "#8a94a6" }}>&mdash;
                    </span>General notes
                  </div>
                </div>
              </div>
              <div style={{ flex: "1", minWidth: "230px", background: "#EAF6F6", border: "1px solid #CDE7E6", borderRadius: "14px", padding: "20px" }}>
                <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "9px", letterSpacing: ".1em", color: "#1C6470", textTransform: "uppercase" }}>What the relationship needs
                </div>
                <div style={{ fontSize: "16px", fontWeight: "800", color: "#1F2B4D", marginTop: "6px" }}>Living clienteling context
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginTop: "14px" }}>
                  <div style={{ display: "flex", gap: "8px", alignItems: "center", fontSize: "13px", color: "#3a4358" }}>
                    <span style={{ color: "#1C6470" }}>&mdash;
                    </span>Visit history
                  </div>
                  <div style={{ display: "flex", gap: "8px", alignItems: "center", fontSize: "13px", color: "#3a4358" }}>
                    <span style={{ color: "#1C6470" }}>&mdash;
                    </span>Product interactions
                  </div>
                  <div style={{ display: "flex", gap: "8px", alignItems: "center", fontSize: "13px", color: "#3a4358" }}>
                    <span style={{ color: "#1C6470" }}>&mdash;
                    </span>Preferences
                  </div>
                  <div style={{ display: "flex", gap: "8px", alignItems: "center", fontSize: "13px", color: "#3a4358" }}>
                    <span style={{ color: "#1C6470" }}>&mdash;
                    </span>Opportunities
                  </div>
                  <div style={{ display: "flex", gap: "8px", alignItems: "center", fontSize: "13px", color: "#3a4358" }}>
                    <span style={{ color: "#1C6470" }}>&mdash;
                    </span>Follow-up
                  </div>
                  <div style={{ display: "flex", gap: "8px", alignItems: "center", fontSize: "13px", color: "#3a4358" }}>
                    <span style={{ color: "#1C6470" }}>&mdash;
                    </span>Service and lifecycle context
                  </div>
                </div>
              </div>
            </div>
            <p style={{ fontSize: "12.5px", color: "#8a94a6", lineHeight: "1.55", margin: "12px 0 0", textAlign: "center" }}>The CRM record explains who the customer is. Clienteling context explains what the relationship needs next.
            </p>
          </div>
        </div>
        <div id="axy-art-3" style={{ background: "#fff", padding: "34px 24px 0", scrollMarginTop: "72px" }}>
          <div style={{ maxWidth: "720px", margin: "0 auto" }}>
            <h2 style={{ fontSize: "25px", fontWeight: "800", color: "#1F2B4D", lineHeight: "1.22", letterSpacing: "-.01em" }}>The most valuable context often appears before the sale
            </h2>
            <p style={{ fontSize: "15.5px", color: "#3a4358", lineHeight: "1.75", margin: "14px 0 0" }}>Transaction systems reliably record the sale, invoice, payment and return. But much of the commercially useful activity happens earlier &mdash; and is rarely written down anywhere.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "9px", marginTop: "16px" }}>
              <div style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                <span style={{ flexShrink: "0", width: "6px", height: "6px", borderRadius: "50%", background: "#2C8C99", marginTop: "8px" }}></span>
                <span style={{ fontSize: "14.5px", color: "#3a4358", lineHeight: "1.6" }}>Product viewed
                </span>
              </div>
              <div style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                <span style={{ flexShrink: "0", width: "6px", height: "6px", borderRadius: "50%", background: "#2C8C99", marginTop: "8px" }}></span>
                <span style={{ fontSize: "14.5px", color: "#3a4358", lineHeight: "1.6" }}>Product presented
                </span>
              </div>
              <div style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                <span style={{ flexShrink: "0", width: "6px", height: "6px", borderRadius: "50%", background: "#2C8C99", marginTop: "8px" }}></span>
                <span style={{ fontSize: "14.5px", color: "#3a4358", lineHeight: "1.6" }}>Product compared
                </span>
              </div>
              <div style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                <span style={{ flexShrink: "0", width: "6px", height: "6px", borderRadius: "50%", background: "#2C8C99", marginTop: "8px" }}></span>
                <span style={{ fontSize: "14.5px", color: "#3a4358", lineHeight: "1.6" }}>Customer hesitation
                </span>
              </div>
              <div style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                <span style={{ flexShrink: "0", width: "6px", height: "6px", borderRadius: "50%", background: "#2C8C99", marginTop: "8px" }}></span>
                <span style={{ fontSize: "14.5px", color: "#3a4358", lineHeight: "1.6" }}>Requested item unavailable
                </span>
              </div>
              <div style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                <span style={{ flexShrink: "0", width: "6px", height: "6px", borderRadius: "50%", background: "#2C8C99", marginTop: "8px" }}></span>
                <span style={{ fontSize: "14.5px", color: "#3a4358", lineHeight: "1.6" }}>Wishlist addition
                </span>
              </div>
              <div style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                <span style={{ flexShrink: "0", width: "6px", height: "6px", borderRadius: "50%", background: "#2C8C99", marginTop: "8px" }}></span>
                <span style={{ fontSize: "14.5px", color: "#3a4358", lineHeight: "1.6" }}>Availability request
                </span>
              </div>
              <div style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                <span style={{ flexShrink: "0", width: "6px", height: "6px", borderRadius: "50%", background: "#2C8C99", marginTop: "8px" }}></span>
                <span style={{ fontSize: "14.5px", color: "#3a4358", lineHeight: "1.6" }}>Offer opened
                </span>
              </div>
              <div style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                <span style={{ flexShrink: "0", width: "6px", height: "6px", borderRadius: "50%", background: "#2C8C99", marginTop: "8px" }}></span>
                <span style={{ fontSize: "14.5px", color: "#3a4358", lineHeight: "1.6" }}>Appointment planned
                </span>
              </div>
              <div style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                <span style={{ flexShrink: "0", width: "6px", height: "6px", borderRadius: "50%", background: "#2C8C99", marginTop: "8px" }}></span>
                <span style={{ fontSize: "14.5px", color: "#3a4358", lineHeight: "1.6" }}>Follow-up agreed
                </span>
              </div>
            </div>
            <div style={{ background: "#F9FAFB", border: "1px solid #E4E8EF", borderRadius: "14px", padding: "20px", marginTop: "22px" }}>
              <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "9px", letterSpacing: ".1em", color: "#8a94a6", textTransform: "uppercase" }}>The journey before purchase
              </div>
              <div className="art-journey" style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap", marginTop: "14px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <div style={{ background: "#EEF1F7", border: "1px solid #D9E0EC", borderRadius: "9px", padding: "9px 11px", position: "relative" }}>
                    <span style={{ fontSize: "11.5px", fontWeight: "700", color: "#1F2B4D", whiteSpace: "nowrap" }}>Initial interest
                    </span>
                  </div>
                  <span style={{ color: "#2C8C99" }}>&rarr;
                  </span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <div style={{ background: "#fff", border: "1px solid #2C8C99", borderRadius: "9px", padding: "9px 11px", position: "relative" }}>
                    <span style={{ fontSize: "11.5px", fontWeight: "700", color: "#1F2B4D", whiteSpace: "nowrap" }}>Store visit
                    </span>
                    <span title="Often missed by transaction reporting" style={{ position: "absolute", top: "-7px", right: "-7px", width: "14px", height: "14px", borderRadius: "50%", background: "#B5764A", color: "#fff", fontSize: "8px", display: "flex", alignItems: "center", justifyContent: "center" }}>!
                    </span>
                  </div>
                  <span style={{ color: "#2C8C99" }}>&rarr;
                  </span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <div style={{ background: "#fff", border: "1px solid #2C8C99", borderRadius: "9px", padding: "9px 11px", position: "relative" }}>
                    <span style={{ fontSize: "11.5px", fontWeight: "700", color: "#1F2B4D", whiteSpace: "nowrap" }}>Product presentation
                    </span>
                    <span title="Often missed by transaction reporting" style={{ position: "absolute", top: "-7px", right: "-7px", width: "14px", height: "14px", borderRadius: "50%", background: "#B5764A", color: "#fff", fontSize: "8px", display: "flex", alignItems: "center", justifyContent: "center" }}>!
                    </span>
                  </div>
                  <span style={{ color: "#2C8C99" }}>&rarr;
                  </span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <div style={{ background: "#fff", border: "1px solid #2C8C99", borderRadius: "9px", padding: "9px 11px", position: "relative" }}>
                    <span style={{ fontSize: "11.5px", fontWeight: "700", color: "#1F2B4D", whiteSpace: "nowrap" }}>Consideration
                    </span>
                    <span title="Often missed by transaction reporting" style={{ position: "absolute", top: "-7px", right: "-7px", width: "14px", height: "14px", borderRadius: "50%", background: "#B5764A", color: "#fff", fontSize: "8px", display: "flex", alignItems: "center", justifyContent: "center" }}>!
                    </span>
                  </div>
                  <span style={{ color: "#2C8C99" }}>&rarr;
                  </span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <div style={{ background: "#fff", border: "1px solid #2C8C99", borderRadius: "9px", padding: "9px 11px", position: "relative" }}>
                    <span style={{ fontSize: "11.5px", fontWeight: "700", color: "#1F2B4D", whiteSpace: "nowrap" }}>Follow-up
                    </span>
                    <span title="Often missed by transaction reporting" style={{ position: "absolute", top: "-7px", right: "-7px", width: "14px", height: "14px", borderRadius: "50%", background: "#B5764A", color: "#fff", fontSize: "8px", display: "flex", alignItems: "center", justifyContent: "center" }}>!
                    </span>
                  </div>
                  <span style={{ color: "#2C8C99" }}>&rarr;
                  </span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <div style={{ background: "#EEF1F7", border: "1px solid #D9E0EC", borderRadius: "9px", padding: "9px 11px", position: "relative" }}>
                    <span style={{ fontSize: "11.5px", fontWeight: "700", color: "#1F2B4D", whiteSpace: "nowrap" }}>Purchase or future opportunity
                    </span>
                  </div>
                </div>
              </div>
              <p style={{ fontSize: "12px", color: "#8a94a6", lineHeight: "1.55", margin: "14px 0 0" }}>Stages marked{' '}
                <span style={{ color: "#B5764A", fontWeight: "700" }}>!
                </span>{' '}&mdash; store visit, presentation, consideration and follow-up &mdash; are the ones traditional transaction reporting usually misses.
              </p>
            </div>
            <div style={{ background: "#F1F8F8", border: "1px solid #CFE7E6", borderLeft: "4px solid #2C8C99", borderRadius: "0 12px 12px 0", padding: "16px 20px", marginTop: "22px" }}>
              <p style={{ fontSize: "14.5px", color: "#1F2B4D", lineHeight: "1.6", margin: "0", fontWeight: "600" }}>Retailers should understand not only what sold, but also what customers considered, requested and could not buy.
              </p>
            </div>
          </div>
        </div>
        <div id="axy-art-4" style={{ background: "#fff", padding: "34px 24px 0", scrollMarginTop: "72px" }}>
          <div style={{ maxWidth: "720px", margin: "0 auto" }}>
            <h2 style={{ fontSize: "25px", fontWeight: "800", color: "#1F2B4D", lineHeight: "1.22", letterSpacing: "-.01em" }}>Capture only what makes the next interaction better
            </h2>
            <p style={{ fontSize: "15.5px", color: "#3a4358", lineHeight: "1.75", margin: "14px 0 0" }}>The goal is not more data &mdash; it is the right minimum. A useful visit capture usually includes:
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "9px", marginTop: "16px" }}>
              <div style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                <span style={{ flexShrink: "0", width: "6px", height: "6px", borderRadius: "50%", background: "#2C8C99", marginTop: "8px" }}></span>
                <span style={{ fontSize: "14.5px", color: "#3a4358", lineHeight: "1.6" }}>Customer or anonymous visit
                </span>
              </div>
              <div style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                <span style={{ flexShrink: "0", width: "6px", height: "6px", borderRadius: "50%", background: "#2C8C99", marginTop: "8px" }}></span>
                <span style={{ fontSize: "14.5px", color: "#3a4358", lineHeight: "1.6" }}>Products presented
                </span>
              </div>
              <div style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                <span style={{ flexShrink: "0", width: "6px", height: "6px", borderRadius: "50%", background: "#2C8C99", marginTop: "8px" }}></span>
                <span style={{ fontSize: "14.5px", color: "#3a4358", lineHeight: "1.6" }}>Important reactions
                </span>
              </div>
              <div style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                <span style={{ flexShrink: "0", width: "6px", height: "6px", borderRadius: "50%", background: "#2C8C99", marginTop: "8px" }}></span>
                <span style={{ fontSize: "14.5px", color: "#3a4358", lineHeight: "1.6" }}>Products saved, requested or unavailable
                </span>
              </div>
              <div style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                <span style={{ flexShrink: "0", width: "6px", height: "6px", borderRadius: "50%", background: "#2C8C99", marginTop: "8px" }}></span>
                <span style={{ fontSize: "14.5px", color: "#3a4358", lineHeight: "1.6" }}>Next action
                </span>
              </div>
              <div style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                <span style={{ flexShrink: "0", width: "6px", height: "6px", borderRadius: "50%", background: "#2C8C99", marginTop: "8px" }}></span>
                <span style={{ fontSize: "14.5px", color: "#3a4358", lineHeight: "1.6" }}>Follow-up owner and date
                </span>
              </div>
            </div>
            <p style={{ fontSize: "15.5px", color: "#3a4358", lineHeight: "1.75", margin: "16px 0 0" }}>Unidentified visits can still provide product and store-level operational context, but customer-specific continuation requires an identified relationship and the relevant permissions.
            </p>
            <div style={{ fontSize: "14px", fontWeight: "800", color: "#1F2B4D", marginTop: "22px" }}>What should not be required
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "9px", marginTop: "16px" }}>
              <div style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                <span style={{ flexShrink: "0", width: "6px", height: "6px", borderRadius: "50%", background: "#B5764A", marginTop: "8px" }}></span>
                <span style={{ fontSize: "14.5px", color: "#3a4358", lineHeight: "1.6" }}>Long written visit reports
                </span>
              </div>
              <div style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                <span style={{ flexShrink: "0", width: "6px", height: "6px", borderRadius: "50%", background: "#B5764A", marginTop: "8px" }}></span>
                <span style={{ fontSize: "14.5px", color: "#3a4358", lineHeight: "1.6" }}>Re-entering information stored elsewhere
                </span>
              </div>
              <div style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                <span style={{ flexShrink: "0", width: "6px", height: "6px", borderRadius: "50%", background: "#B5764A", marginTop: "8px" }}></span>
                <span style={{ fontSize: "14.5px", color: "#3a4358", lineHeight: "1.6" }}>Excessive mandatory fields
                </span>
              </div>
              <div style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                <span style={{ flexShrink: "0", width: "6px", height: "6px", borderRadius: "50%", background: "#B5764A", marginTop: "8px" }}></span>
                <span style={{ fontSize: "14.5px", color: "#3a4358", lineHeight: "1.6" }}>Administrative actions with no value to the salesperson
                </span>
              </div>
              <div style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                <span style={{ flexShrink: "0", width: "6px", height: "6px", borderRadius: "50%", background: "#B5764A", marginTop: "8px" }}></span>
                <span style={{ fontSize: "14.5px", color: "#3a4358", lineHeight: "1.6" }}>Detailed typing during the customer conversation
                </span>
              </div>
            </div>
            <div style={{ background: "#F1F8F8", border: "1px solid #CFE7E6", borderLeft: "4px solid #2C8C99", borderRadius: "0 12px 12px 0", padding: "16px 20px", marginTop: "22px" }}>
              <p style={{ fontSize: "14.5px", color: "#1F2B4D", lineHeight: "1.6", margin: "0", fontWeight: "600" }}>The best clienteling workflow captures the minimum information required to make the next interaction more relevant.
              </p>
            </div>
          </div>
        </div>
        <div id="axy-art-5" style={{ background: "#fff", padding: "34px 24px 0", scrollMarginTop: "72px" }}>
          <div style={{ maxWidth: "720px", margin: "0 auto" }}>
            <h2 style={{ fontSize: "25px", fontWeight: "800", color: "#1F2B4D", lineHeight: "1.22", letterSpacing: "-.01em" }}>A reminder is not enough. Follow-up needs context.
            </h2>
            <p style={{ fontSize: "15.5px", color: "#3a4358", lineHeight: "1.75", margin: "14px 0 0" }}>A generic "call the customer" reminder rarely leads to a good conversation. A reliable follow-up carries the customer, the reason, the relevant product, the current opportunity, an owner, a due date, the desired outcome and the customer's latest action.
            </p>
            <div style={{ background: "#FBF6F1", border: "1px solid #F0E2D6", borderRadius: "14px", padding: "18px 20px", marginTop: "20px" }}>
              <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "9px", letterSpacing: ".1em", color: "#B5764A", textTransform: "uppercase" }}>Watch & jewellery example
              </div>
              <p style={{ fontSize: "14.5px", color: "#5c4636", lineHeight: "1.65", margin: "9px 0 0" }}>A customer likes a specific watch but wants to consider the purchase. The salesperson records the product, the customer’s hesitation and an agreed follow-up date. When the action becomes due &mdash; or availability changes &mdash; the salesperson sees the complete context rather than a generic reminder to call.
              </p>
            </div>
            <div style={{ background: "#F9FAFB", border: "1px solid #E4E8EF", borderRadius: "14px", padding: "20px", marginTop: "22px" }}>
              <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "9px", letterSpacing: ".1em", color: "#8a94a6", textTransform: "uppercase" }}>Follow-up with context
              </div>
              <div className="art-journey" style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap", marginTop: "14px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <div style={{ background: "#fff", border: "1px solid #D9E0EC", borderRadius: "9px", padding: "9px 11px" }}>
                    <span style={{ fontSize: "11.5px", fontWeight: "700", color: "#1F2B4D", whiteSpace: "nowrap" }}>Visit
                    </span>
                  </div>
                  <span style={{ color: "#2C8C99" }}>&rarr;
                  </span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <div style={{ background: "#fff", border: "1px solid #D9E0EC", borderRadius: "9px", padding: "9px 11px" }}>
                    <span style={{ fontSize: "11.5px", fontWeight: "700", color: "#1F2B4D", whiteSpace: "nowrap" }}>Product interest
                    </span>
                  </div>
                  <span style={{ color: "#2C8C99" }}>&rarr;
                  </span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <div style={{ background: "#fff", border: "1px solid #D9E0EC", borderRadius: "9px", padding: "9px 11px" }}>
                    <span style={{ fontSize: "11.5px", fontWeight: "700", color: "#1F2B4D", whiteSpace: "nowrap" }}>Follow-up created
                    </span>
                  </div>
                  <span style={{ color: "#2C8C99" }}>&rarr;
                  </span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <div style={{ background: "#fff", border: "1px solid #D9E0EC", borderRadius: "9px", padding: "9px 11px" }}>
                    <span style={{ fontSize: "11.5px", fontWeight: "700", color: "#1F2B4D", whiteSpace: "nowrap" }}>Reminder with context
                    </span>
                  </div>
                  <span style={{ color: "#2C8C99" }}>&rarr;
                  </span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <div style={{ background: "#fff", border: "1px solid #D9E0EC", borderRadius: "9px", padding: "9px 11px" }}>
                    <span style={{ fontSize: "11.5px", fontWeight: "700", color: "#1F2B4D", whiteSpace: "nowrap" }}>Customer response
                    </span>
                  </div>
                  <span style={{ color: "#2C8C99" }}>&rarr;
                  </span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <div style={{ background: "#fff", border: "1px solid #D9E0EC", borderRadius: "9px", padding: "9px 11px" }}>
                    <span style={{ fontSize: "11.5px", fontWeight: "700", color: "#1F2B4D", whiteSpace: "nowrap" }}>Next commercial action
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <p style={{ fontSize: "13px", color: "#8a94a6", lineHeight: "1.6", margin: "14px 0 0" }}>Automation and suggestions depend on the configured workflow. Not every customer action automatically creates a task &mdash; the point is that when follow-up is due, the context is already there.
            </p>
          </div>
        </div>
        <div id="axy-art-6" style={{ background: "#fff", padding: "34px 24px 0", scrollMarginTop: "72px" }}>
          <div style={{ maxWidth: "720px", margin: "0 auto" }}>
            <h2 style={{ fontSize: "25px", fontWeight: "800", color: "#1F2B4D", lineHeight: "1.22", letterSpacing: "-.01em" }}>Measure relationship execution&mdash;not only messages sent
            </h2>
            <p style={{ fontSize: "15.5px", color: "#3a4358", lineHeight: "1.75", margin: "14px 0 0" }}>Useful clienteling metrics describe whether the relationship is being worked, not just whether messages went out. Practical measures include:
            </p>
            <div className="art-metrics" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginTop: "18px" }}>
              <div style={{ background: "#F9FAFB", border: "1px solid #E4E8EF", borderRadius: "10px", padding: "11px 13px", fontSize: "13px", fontWeight: "600", color: "#1F2B4D" }}>Visits captured
              </div>
              <div style={{ background: "#F9FAFB", border: "1px solid #E4E8EF", borderRadius: "10px", padding: "11px 13px", fontSize: "13px", fontWeight: "600", color: "#1F2B4D" }}>Follow-ups created
              </div>
              <div style={{ background: "#F9FAFB", border: "1px solid #E4E8EF", borderRadius: "10px", padding: "11px 13px", fontSize: "13px", fontWeight: "600", color: "#1F2B4D" }}>Follow-ups completed
              </div>
              <div style={{ background: "#F9FAFB", border: "1px solid #E4E8EF", borderRadius: "10px", padding: "11px 13px", fontSize: "13px", fontWeight: "600", color: "#1F2B4D" }}>Opportunities without a next action
              </div>
              <div style={{ background: "#F9FAFB", border: "1px solid #E4E8EF", borderRadius: "10px", padding: "11px 13px", fontSize: "13px", fontWeight: "600", color: "#1F2B4D" }}>Visit-to-offer conversion
              </div>
              <div style={{ background: "#F9FAFB", border: "1px solid #E4E8EF", borderRadius: "10px", padding: "11px 13px", fontSize: "13px", fontWeight: "600", color: "#1F2B4D" }}>Visit-to-purchase conversion
              </div>
              <div style={{ background: "#F9FAFB", border: "1px solid #E4E8EF", borderRadius: "10px", padding: "11px 13px", fontSize: "13px", fontWeight: "600", color: "#1F2B4D" }}>Products presented versus sold
              </div>
              <div style={{ background: "#F9FAFB", border: "1px solid #E4E8EF", borderRadius: "10px", padding: "11px 13px", fontSize: "13px", fontWeight: "600", color: "#1F2B4D" }}>Products requested but unavailable
              </div>
              <div style={{ background: "#F9FAFB", border: "1px solid #E4E8EF", borderRadius: "10px", padding: "11px 13px", fontSize: "13px", fontWeight: "600", color: "#1F2B4D" }}>Customer return rate
              </div>
              <div style={{ background: "#F9FAFB", border: "1px solid #E4E8EF", borderRadius: "10px", padding: "11px 13px", fontSize: "13px", fontWeight: "600", color: "#1F2B4D" }}>Employee adoption
              </div>
              <div style={{ background: "#F9FAFB", border: "1px solid #E4E8EF", borderRadius: "10px", padding: "11px 13px", fontSize: "13px", fontWeight: "600", color: "#1F2B4D" }}>Response time to inquiries
              </div>
            </div>
            <p style={{ fontSize: "15.5px", color: "#3a4358", lineHeight: "1.75", margin: "18px 0 0" }}>These support coaching, workload planning, stock decisions, opportunity review and process improvement.
            </p>
            <div style={{ background: "#F1F8F8", border: "1px solid #CFE7E6", borderLeft: "4px solid #2C8C99", borderRadius: "0 12px 12px 0", padding: "16px 20px", marginTop: "22px" }}>
              <p style={{ fontSize: "14.5px", color: "#1F2B4D", lineHeight: "1.6", margin: "0", fontWeight: "600" }}>Metrics provide context for review. They should not be used to assign simple blame for a lost sale without considering product availability, customer intent and the wider interaction.
              </p>
            </div>
          </div>
        </div>
        <div id="axy-art-7" style={{ background: "#fff", padding: "34px 24px 0", scrollMarginTop: "72px" }}>
          <div style={{ maxWidth: "720px", margin: "0 auto" }}>
            <h2 style={{ fontSize: "25px", fontWeight: "800", color: "#1F2B4D", lineHeight: "1.22", letterSpacing: "-.01em" }}>Common clienteling mistakes
            </h2>
            <div style={{ marginTop: "12px" }}>
              <div style={{ display: "flex", gap: "16px", alignItems: "flex-start", padding: "18px 0", borderBottom: "1px solid #EEF1F5" }}>
                <span style={{ flexShrink: "0", fontFamily: "'Roboto Mono',monospace", fontSize: "13px", fontWeight: "700", color: "#B5764A", width: "26px" }}>01
                </span>
                <div>
                  <div style={{ fontSize: "15.5px", fontWeight: "800", color: "#1F2B4D" }}>Collecting information without creating a next action
                  </div>
                  <p style={{ fontSize: "14px", color: "#667085", lineHeight: "1.6", margin: "6px 0 0" }}>A complete customer profile has limited commercial value if no one knows what should happen next.
                  </p>
                </div>
              </div>
              <div style={{ display: "flex", gap: "16px", alignItems: "flex-start", padding: "18px 0", borderBottom: "1px solid #EEF1F5" }}>
                <span style={{ flexShrink: "0", fontFamily: "'Roboto Mono',monospace", fontSize: "13px", fontWeight: "700", color: "#B5764A", width: "26px" }}>02
                </span>
                <div>
                  <div style={{ fontSize: "15.5px", fontWeight: "800", color: "#1F2B4D" }}>Asking salespeople to record too much
                  </div>
                  <p style={{ fontSize: "14px", color: "#667085", lineHeight: "1.6", margin: "6px 0 0" }}>Heavy administrative requirements reduce adoption and damage the customer conversation.
                  </p>
                </div>
              </div>
              <div style={{ display: "flex", gap: "16px", alignItems: "flex-start", padding: "18px 0", borderBottom: "1px solid #EEF1F5" }}>
                <span style={{ flexShrink: "0", fontFamily: "'Roboto Mono',monospace", fontSize: "13px", fontWeight: "700", color: "#B5764A", width: "26px" }}>03
                </span>
                <div>
                  <div style={{ fontSize: "15.5px", fontWeight: "800", color: "#1F2B4D" }}>Treating every customer identically
                  </div>
                  <p style={{ fontSize: "14px", color: "#667085", lineHeight: "1.6", margin: "6px 0 0" }}>Relevant service depends on preferences, timing, relationship and purchase intent.
                  </p>
                </div>
              </div>
              <div style={{ display: "flex", gap: "16px", alignItems: "flex-start", padding: "18px 0", borderBottom: "1px solid #EEF1F5" }}>
                <span style={{ flexShrink: "0", fontFamily: "'Roboto Mono',monospace", fontSize: "13px", fontWeight: "700", color: "#B5764A", width: "26px" }}>04
                </span>
                <div>
                  <div style={{ fontSize: "15.5px", fontWeight: "800", color: "#1F2B4D" }}>Sending generic messages
                  </div>
                  <p style={{ fontSize: "14px", color: "#667085", lineHeight: "1.6", margin: "6px 0 0" }}>Frequent communication is not the same as meaningful follow-up.
                  </p>
                </div>
              </div>
              <div style={{ display: "flex", gap: "16px", alignItems: "flex-start", padding: "18px 0", borderBottom: "1px solid #EEF1F5" }}>
                <span style={{ flexShrink: "0", fontFamily: "'Roboto Mono',monospace", fontSize: "13px", fontWeight: "700", color: "#B5764A", width: "26px" }}>05
                </span>
                <div>
                  <div style={{ fontSize: "15.5px", fontWeight: "800", color: "#1F2B4D" }}>Separating product history from customer history
                  </div>
                  <p style={{ fontSize: "14px", color: "#667085", lineHeight: "1.6", margin: "6px 0 0" }}>The salesperson needs to know which products created interest and why.
                  </p>
                </div>
              </div>
              <div style={{ display: "flex", gap: "16px", alignItems: "flex-start", padding: "18px 0", borderBottom: "1px solid #EEF1F5" }}>
                <span style={{ flexShrink: "0", fontFamily: "'Roboto Mono',monospace", fontSize: "13px", fontWeight: "700", color: "#B5764A", width: "26px" }}>06
                </span>
                <div>
                  <div style={{ fontSize: "15.5px", fontWeight: "800", color: "#1F2B4D" }}>Measuring activity without outcomes
                  </div>
                  <p style={{ fontSize: "14px", color: "#667085", lineHeight: "1.6", margin: "6px 0 0" }}>Message volume and task count do not automatically indicate relationship quality.
                  </p>
                </div>
              </div>
              <div style={{ display: "flex", gap: "16px", alignItems: "flex-start", padding: "18px 0" }}>
                <span style={{ flexShrink: "0", fontFamily: "'Roboto Mono',monospace", fontSize: "13px", fontWeight: "700", color: "#B5764A", width: "26px" }}>07
                </span>
                <div>
                  <div style={{ fontSize: "15.5px", fontWeight: "800", color: "#1F2B4D" }}>Giving partners excessive access
                  </div>
                  <p style={{ fontSize: "14px", color: "#667085", lineHeight: "1.6", margin: "6px 0 0" }}>Retailer, customer and manufacturer relationships need clear ownership and purpose-based permissions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="axy-art-8" style={{ background: "#fff", padding: "34px 24px 0", scrollMarginTop: "72px" }}>
          <div style={{ maxWidth: "720px", margin: "0 auto" }}>
            <h2 style={{ fontSize: "25px", fontWeight: "800", color: "#1F2B4D", lineHeight: "1.22", letterSpacing: "-.01em" }}>A practical starting checklist
            </h2>
            <p style={{ fontSize: "15.5px", color: "#3a4358", lineHeight: "1.75", margin: "14px 0 0" }}>Use this as a starting point for introducing or improving clienteling in your stores.
            </p>
            <div style={{ background: "#F9FAFB", border: "1px solid #E4E8EF", borderRadius: "16px", padding: "20px 24px", marginTop: "20px" }}>
              <div style={{ display: "flex", gap: "12px", alignItems: "flex-start", padding: "11px 0", borderBottom: "1px solid #EEF1F5" }}>
                <span style={{ flexShrink: "0", width: "20px", height: "20px", borderRadius: "6px", border: "1.5px solid #2C8C99", background: "#fff", display: "flex", alignItems: "center", justifyContent: "center", color: "#2C8C99", fontSize: "11px", marginTop: "1px" }}>&check;
                </span>
                <span style={{ fontSize: "14.5px", color: "#3a4358", lineHeight: "1.55" }}>Define the customer context salespeople genuinely need.
                </span>
              </div>
              <div style={{ display: "flex", gap: "12px", alignItems: "flex-start", padding: "11px 0", borderBottom: "1px solid #EEF1F5" }}>
                <span style={{ flexShrink: "0", width: "20px", height: "20px", borderRadius: "6px", border: "1.5px solid #2C8C99", background: "#fff", display: "flex", alignItems: "center", justifyContent: "center", color: "#2C8C99", fontSize: "11px", marginTop: "1px" }}>&check;
                </span>
                <span style={{ fontSize: "14.5px", color: "#3a4358", lineHeight: "1.55" }}>Choose the five or six visit actions worth recording.
                </span>
              </div>
              <div style={{ display: "flex", gap: "12px", alignItems: "flex-start", padding: "11px 0", borderBottom: "1px solid #EEF1F5" }}>
                <span style={{ flexShrink: "0", width: "20px", height: "20px", borderRadius: "6px", border: "1.5px solid #2C8C99", background: "#fff", display: "flex", alignItems: "center", justifyContent: "center", color: "#2C8C99", fontSize: "11px", marginTop: "1px" }}>&check;
                </span>
                <span style={{ fontSize: "14.5px", color: "#3a4358", lineHeight: "1.55" }}>Give every active opportunity an owner.
                </span>
              </div>
              <div style={{ display: "flex", gap: "12px", alignItems: "flex-start", padding: "11px 0", borderBottom: "1px solid #EEF1F5" }}>
                <span style={{ flexShrink: "0", width: "20px", height: "20px", borderRadius: "6px", border: "1.5px solid #2C8C99", background: "#fff", display: "flex", alignItems: "center", justifyContent: "center", color: "#2C8C99", fontSize: "11px", marginTop: "1px" }}>&check;
                </span>
                <span style={{ fontSize: "14.5px", color: "#3a4358", lineHeight: "1.55" }}>Add a next date whenever follow-up is required.
                </span>
              </div>
              <div style={{ display: "flex", gap: "12px", alignItems: "flex-start", padding: "11px 0", borderBottom: "1px solid #EEF1F5" }}>
                <span style={{ flexShrink: "0", width: "20px", height: "20px", borderRadius: "6px", border: "1.5px solid #2C8C99", background: "#fff", display: "flex", alignItems: "center", justifyContent: "center", color: "#2C8C99", fontSize: "11px", marginTop: "1px" }}>&check;
                </span>
                <span style={{ fontSize: "14.5px", color: "#3a4358", lineHeight: "1.55" }}>Connect products to customer activity.
                </span>
              </div>
              <div style={{ display: "flex", gap: "12px", alignItems: "flex-start", padding: "11px 0", borderBottom: "1px solid #EEF1F5" }}>
                <span style={{ flexShrink: "0", width: "20px", height: "20px", borderRadius: "6px", border: "1.5px solid #2C8C99", background: "#fff", display: "flex", alignItems: "center", justifyContent: "center", color: "#2C8C99", fontSize: "11px", marginTop: "1px" }}>&check;
                </span>
                <span style={{ fontSize: "14.5px", color: "#3a4358", lineHeight: "1.55" }}>Make captured information immediately useful to salespeople.
                </span>
              </div>
              <div style={{ display: "flex", gap: "12px", alignItems: "flex-start", padding: "11px 0", borderBottom: "1px solid #EEF1F5" }}>
                <span style={{ flexShrink: "0", width: "20px", height: "20px", borderRadius: "6px", border: "1.5px solid #2C8C99", background: "#fff", display: "flex", alignItems: "center", justifyContent: "center", color: "#2C8C99", fontSize: "11px", marginTop: "1px" }}>&check;
                </span>
                <span style={{ fontSize: "14.5px", color: "#3a4358", lineHeight: "1.55" }}>Review opportunities and adoption regularly.
                </span>
              </div>
              <div style={{ display: "flex", gap: "12px", alignItems: "flex-start", padding: "11px 0", borderBottom: "1px solid #EEF1F5" }}>
                <span style={{ flexShrink: "0", width: "20px", height: "20px", borderRadius: "6px", border: "1.5px solid #2C8C99", background: "#fff", display: "flex", alignItems: "center", justifyContent: "center", color: "#2C8C99", fontSize: "11px", marginTop: "1px" }}>&check;
                </span>
                <span style={{ fontSize: "14.5px", color: "#3a4358", lineHeight: "1.55" }}>Keep customer and partner permissions explicit.
                </span>
              </div>
              <div style={{ display: "flex", gap: "12px", alignItems: "flex-start", padding: "11px 0", borderBottom: "1px solid #EEF1F5" }}>
                <span style={{ flexShrink: "0", width: "20px", height: "20px", borderRadius: "6px", border: "1.5px solid #2C8C99", background: "#fff", display: "flex", alignItems: "center", justifyContent: "center", color: "#2C8C99", fontSize: "11px", marginTop: "1px" }}>&check;
                </span>
                <span style={{ fontSize: "14.5px", color: "#3a4358", lineHeight: "1.55" }}>Measure outcomes, not only activity.
                </span>
              </div>
              <div style={{ display: "flex", gap: "12px", alignItems: "flex-start", padding: "11px 0", borderBottom: "1px solid #EEF1F5" }}>
                <span style={{ flexShrink: "0", width: "20px", height: "20px", borderRadius: "6px", border: "1.5px solid #2C8C99", background: "#fff", display: "flex", alignItems: "center", justifyContent: "center", color: "#2C8C99", fontSize: "11px", marginTop: "1px" }}>&check;
                </span>
                <span style={{ fontSize: "14.5px", color: "#3a4358", lineHeight: "1.55" }}>Improve the workflow based on employee feedback.
                </span>
              </div>
            </div>
          </div>
        </div>
        <div id="axy-art-9" style={{ background: "#F6F8FB", padding: "34px 24px 0", paddingBottom: "38px", scrollMarginTop: "72px", marginTop: "34px" }}>
          <div style={{ maxWidth: "720px", margin: "0 auto" }}>
            <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "10px", letterSpacing: ".13em", color: "#2C8C99", textTransform: "uppercase" }}>Putting the principles into practice
            </div>
            <h2 style={{ fontSize: "25px", fontWeight: "800", color: "#1F2B4D", lineHeight: "1.22", letterSpacing: "-.01em", marginTop: "11px" }}>How AXY supports connected retail clienteling
            </h2>
            <p style={{ fontSize: "15.5px", color: "#3a4358", lineHeight: "1.75", margin: "14px 0 0" }}>AXY helps sales teams capture products and customer activity during normal store work, continue the relationship after the visit and give managers clearer visibility into opportunities, follow-up and product demand.
            </p>
            <div className="art-axy" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "12px", marginTop: "22px" }}>
              <div style={{ background: "#fff", border: "1px solid #E4E8EF", borderRadius: "14px", padding: "18px" }}>
                <div style={{ fontSize: "14.5px", fontWeight: "800", color: "#1F2B4D" }}>During the visit
                </div>
                <p style={{ fontSize: "13px", color: "#667085", lineHeight: "1.6", margin: "8px 0 0" }}>Capture products presented, customer reactions and next actions through the Sales App.
                </p>
              </div>
              <div style={{ background: "#fff", border: "1px solid #E4E8EF", borderRadius: "14px", padding: "18px" }}>
                <div style={{ fontSize: "14.5px", fontWeight: "800", color: "#1F2B4D" }}>After the visit
                </div>
                <p style={{ fontSize: "13px", color: "#667085", lineHeight: "1.6", margin: "8px 0 0" }}>Keep relevant products, offers, invoices, warranties and service context connected through the customer relationship.
                </p>
              </div>
              <div style={{ background: "#fff", border: "1px solid #E4E8EF", borderRadius: "14px", padding: "18px" }}>
                <div style={{ fontSize: "14.5px", fontWeight: "800", color: "#1F2B4D" }}>For management
                </div>
                <p style={{ fontSize: "13px", color: "#667085", lineHeight: "1.6", margin: "8px 0 0" }}>Understand active opportunities, follow-up discipline, product interest and unmet demand.
                </p>
              </div>
            </div>
            <div style={{ display: "flex", gap: "12px", marginTop: "22px", flexWrap: "wrap", alignItems: "center" }}>
              <a className="hv186" href="/sales-app" style={{ display: "inline-flex", padding: "12px 20px", background: "#32415C", color: "#fff", borderRadius: "10px", fontSize: "14px", fontWeight: "700" }}>Explore the Sales App
              </a>{' '}
              <a className="hv187" href="/for-retailers" style={{ display: "inline-flex", padding: "12px 20px", border: "1.5px solid #32415C", color: "#32415C", borderRadius: "10px", fontSize: "14px", fontWeight: "600" }}>See AXY for retailers
              </a>{' '}
              <a href="/how-it-works" style={{ fontSize: "13px", fontWeight: "700", color: "#2C8C99" }}>Understand how AXY works &rarr;
              </a>
            </div>
          </div>
        </div>
        <div id="axy-art-10" style={{ background: "#fff", padding: "34px 24px 0", scrollMarginTop: "72px" }}>
          <div style={{ maxWidth: "720px", margin: "0 auto" }}>
            <h2 style={{ fontSize: "25px", fontWeight: "800", color: "#1F2B4D", lineHeight: "1.22", letterSpacing: "-.01em" }}>Retail clienteling questions
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginTop: "20px" }}>
              <div style={{ background: "#F9FAFB", border: "1px solid #E4E8EF", borderRadius: "12px", padding: "18px 20px" }}>
                <div style={{ fontSize: "15px", fontWeight: "800", color: "#1F2B4D" }}>Is clienteling only for luxury retail?
                </div>
                <p style={{ fontSize: "14px", color: "#667085", lineHeight: "1.65", margin: "9px 0 0" }}>No. Clienteling is most visible in high-consideration and relationship-led retail, but the principles can benefit any retailer where preferences, advice and follow-up influence the purchase.
                </p>
              </div>
              <div style={{ background: "#F9FAFB", border: "1px solid #E4E8EF", borderRadius: "12px", padding: "18px 20px" }}>
                <div style={{ fontSize: "15px", fontWeight: "800", color: "#1F2B4D" }}>What is the difference between CRM and clienteling?
                </div>
                <p style={{ fontSize: "14px", color: "#667085", lineHeight: "1.65", margin: "9px 0 0" }}>A CRM primarily stores customer and commercial records. Clienteling uses that information together with visit, product-interest and follow-up context to support the next customer interaction.
                </p>
              </div>
              <div style={{ background: "#F9FAFB", border: "1px solid #E4E8EF", borderRadius: "12px", padding: "18px 20px" }}>
                <div style={{ fontSize: "15px", fontWeight: "800", color: "#1F2B4D" }}>What should salespeople capture first?
                </div>
                <p style={{ fontSize: "14px", color: "#667085", lineHeight: "1.65", margin: "9px 0 0" }}>Start with the customer or anonymous visit, products presented, meaningful reactions and any agreed next action. Avoid introducing too many mandatory fields at once.
                </p>
              </div>
              <div style={{ background: "#F9FAFB", border: "1px solid #E4E8EF", borderRadius: "12px", padding: "18px 20px" }}>
                <div style={{ fontSize: "15px", fontWeight: "800", color: "#1F2B4D" }}>Does clienteling require customer identification?
                </div>
                <p style={{ fontSize: "14px", color: "#667085", lineHeight: "1.65", margin: "9px 0 0" }}>Not every store interaction must begin with an identified customer. Anonymous activity can still support product and operational insight, while customer-specific continuation requires an identified relationship and appropriate permissions.
                </p>
              </div>
              <div style={{ background: "#F9FAFB", border: "1px solid #E4E8EF", borderRadius: "12px", padding: "18px 20px" }}>
                <div style={{ fontSize: "15px", fontWeight: "800", color: "#1F2B4D" }}>How much additional work should clienteling create?
                </div>
                <p style={{ fontSize: "14px", color: "#667085", lineHeight: "1.65", margin: "9px 0 0" }}>The workflow should require only quick actions that improve the next interaction. Long visit reports and duplicate data entry usually reduce adoption.
                </p>
              </div>
              <div style={{ background: "#F9FAFB", border: "1px solid #E4E8EF", borderRadius: "12px", padding: "18px 20px" }}>
                <div style={{ fontSize: "15px", fontWeight: "800", color: "#1F2B4D" }}>How do retailers measure whether clienteling is working?
                </div>
                <p style={{ fontSize: "14px", color: "#667085", lineHeight: "1.65", margin: "9px 0 0" }}>Retailers can review follow-up completion, opportunity progression, conversion, customer return activity, products requested and salesperson adoption.
                </p>
              </div>
              <div style={{ background: "#F9FAFB", border: "1px solid #E4E8EF", borderRadius: "12px", padding: "18px 20px" }}>
                <div style={{ fontSize: "15px", fontWeight: "800", color: "#1F2B4D" }}>Can clienteling work across multiple stores?
                </div>
                <p style={{ fontSize: "14px", color: "#667085", lineHeight: "1.65", margin: "9px 0 0" }}>Yes. Customer, product, stock and opportunity context can be coordinated across configured locations while respecting business-unit and permission boundaries.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div style={{ background: "#fff", padding: "34px 24px 0" }}>
          <div style={{ maxWidth: "720px", margin: "0 auto" }}>
            <h2 style={{ fontSize: "25px", fontWeight: "800", color: "#1F2B4D", lineHeight: "1.22", letterSpacing: "-.01em" }}>Continue reading
            </h2>
            <div className="art-related" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "14px", marginTop: "20px" }}>
              <a className="hv188" href="/article" style={{ display: "flex", flexDirection: "column", background: "#fff", border: "1px solid #E4E8EF", borderRadius: "14px", overflow: "hidden", textDecoration: "none" }}>
                <div style={{ height: "7px", background: "linear-gradient(90deg,#32415C,#2C8C99)" }}></div>
                <div style={{ padding: "18px", display: "flex", flexDirection: "column", flex: "1" }}>
                  <span style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "9px", letterSpacing: ".1em", color: "#2C8C99", textTransform: "uppercase" }}>Sales &amp; clienteling
                  </span>
                  <div style={{ fontSize: "14.5px", fontWeight: "800", color: "#1F2B4D", lineHeight: "1.3", marginTop: "9px" }}>How to capture in-store customer interest without slowing the sales team
                  </div>
                  <p style={{ fontSize: "12.5px", color: "#667085", lineHeight: "1.55", margin: "8px 0 0", flex: "1" }}>A practical method for recording products shown, liked and requested inside a natural conversation.
                  </p>
                  <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "9px", letterSpacing: ".05em", color: "#8a94a6", textTransform: "uppercase", marginTop: "12px" }}>6 min read &middot; Updated Jun 2026
                  </div>
                  <div style={{ fontSize: "12.5px", fontWeight: "700", color: "#2C8C99", marginTop: "10px" }}>Read the guide &rarr;
                  </div>
                </div>
              </a>
              <a className="hv189" href="/article" style={{ display: "flex", flexDirection: "column", background: "#fff", border: "1px solid #E4E8EF", borderRadius: "14px", overflow: "hidden", textDecoration: "none" }}>
                <div style={{ height: "7px", background: "linear-gradient(90deg,#32415C,#2C8C99)" }}></div>
                <div style={{ padding: "18px", display: "flex", flexDirection: "column", flex: "1" }}>
                  <span style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "9px", letterSpacing: ".1em", color: "#2C8C99", textTransform: "uppercase" }}>Sales operations
                  </span>
                  <div style={{ fontSize: "14.5px", fontWeight: "800", color: "#1F2B4D", lineHeight: "1.3", marginTop: "9px" }}>How to create a retail follow-up process employees actually use
                  </div>
                  <p style={{ fontSize: "12.5px", color: "#667085", lineHeight: "1.55", margin: "8px 0 0", flex: "1" }}>Give follow-up a reason, an owner and a due date so opportunities stop slipping through.
                  </p>
                  <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "9px", letterSpacing: ".05em", color: "#8a94a6", textTransform: "uppercase", marginTop: "12px" }}>7 min read &middot; Updated Jun 2026
                  </div>
                  <div style={{ fontSize: "12.5px", fontWeight: "700", color: "#2C8C99", marginTop: "10px" }}>Read the guide &rarr;
                  </div>
                </div>
              </a>
              <a className="hv190" href="/article" style={{ display: "flex", flexDirection: "column", background: "#fff", border: "1px solid #E4E8EF", borderRadius: "14px", overflow: "hidden", textDecoration: "none" }}>
                <div style={{ height: "7px", background: "linear-gradient(90deg,#32415C,#2C8C99)" }}></div>
                <div style={{ padding: "18px", display: "flex", flexDirection: "column", flex: "1" }}>
                  <span style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "9px", letterSpacing: ".1em", color: "#2C8C99", textTransform: "uppercase" }}>Demand &amp; inventory
                  </span>
                  <div style={{ fontSize: "14.5px", fontWeight: "800", color: "#1F2B4D", lineHeight: "1.3", marginTop: "9px" }}>Products shown versus products sold: what management can learn
                  </div>
                  <p style={{ fontSize: "12.5px", color: "#667085", lineHeight: "1.55", margin: "8px 0 0", flex: "1" }}>How the gap between presentation and purchase guides better buying and stock decisions.
                  </p>
                  <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "9px", letterSpacing: ".05em", color: "#8a94a6", textTransform: "uppercase", marginTop: "12px" }}>8 min read &middot; Updated May 2026
                  </div>
                  <div style={{ fontSize: "12.5px", fontWeight: "700", color: "#2C8C99", marginTop: "10px" }}>Read the guide &rarr;
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div style={{ background: "#fff", padding: "34px 24px 0" }}>
          <div style={{ maxWidth: "720px", margin: "0 auto" }}>
            <div style={{ display: "flex", gap: "18px", alignItems: "flex-start", background: "#F9FAFB", border: "1px solid #E4E8EF", borderRadius: "16px", padding: "22px", flexWrap: "wrap" }}>
              <div style={{ width: "56px", height: "56px", borderRadius: "50%", background: "linear-gradient(150deg,#32415C,#2C6570)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: "700", fontSize: "19px", flexShrink: "0" }}>JM
              </div>
              <div style={{ flex: "1", minWidth: "220px" }}>
                <div style={{ fontSize: "15px", fontWeight: "800", color: "#1F2B4D" }}>Jure Malalan
                </div>
                <div style={{ fontSize: "12.5px", color: "#2C8C99", fontWeight: "600", marginTop: "2px" }}>Founder of AXY and premium retail operator
                </div>
                <p style={{ fontSize: "13.5px", color: "#667085", lineHeight: "1.6", margin: "10px 0 0" }}>Jure built AXY from day-to-day premium retail operations &mdash; store visits, product presentations, follow-up and multi-location coordination. He writes about connecting sales activity, customer relationships and product demand into one practical workflow.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div style={{ padding: "38px 24px 0" }}>
          <div style={{ maxWidth: "720px", margin: "0 auto" }}>
            <div style={{ position: "relative", overflow: "hidden", background: "linear-gradient(135deg,#1F2B4D,#32415C 58%,#2C6570)", borderRadius: "20px", padding: "40px 34px", textAlign: "center" }}>
              <div style={{ position: "absolute", bottom: "-90px", right: "-40px", width: "300px", height: "230px", background: "radial-gradient(circle,rgba(51,214,164,.14),transparent 70%)" }}></div>
              <div style={{ position: "relative" }}>
                <h2 style={{ fontSize: "24px", fontWeight: "800", color: "#fff", lineHeight: "1.2" }}>Turn clienteling principles into a daily retail workflow.
                </h2>
                <p style={{ fontSize: "14px", color: "#C9D2E4", lineHeight: "1.6", margin: "12px auto 0", maxWidth: "520px" }}>See how AXY helps sales teams preserve customer and product context, organise follow-up and give managers clearer visibility into opportunities.
                </p>
                <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap", marginTop: "22px" }}>
                  <a className="hv191" href="/sales-app" style={{ display: "inline-flex", padding: "13px 22px", background: "#fff", color: "#1F2B4D", borderRadius: "10px", fontSize: "14px", fontWeight: "700" }}>Explore the Sales App
                  </a>
                  <a className="hv192" href="/book-a-walkthrough" style={{ display: "inline-flex", padding: "13px 22px", border: "1.5px solid rgba(255,255,255,.5)", color: "#fff", borderRadius: "10px", fontSize: "14px", fontWeight: "600" }}>Get guided setup
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ height: "60px" }}></div>
      </div>
    </>
  );
}
