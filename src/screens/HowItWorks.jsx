import React from 'react';
import { css } from '../lib/css.js';

export default function HowItWorks(v) {
  const { howGo0, howGo1, howGo2, howGo3, howGo4, howStep0Style, howStep1Style, howStep2Style, howStep3Style, howStep4Style } = v;
  return (
    <>
      <div data-screen-label="How AXY Works">
        <div style={{ position: "relative", overflow: "hidden", background: "linear-gradient(168deg,#FFFFFF,#F4F7FB)", padding: "70px 24px 60px" }}>
          <div style={{ position: "absolute", top: "-90px", right: "-70px", width: "440px", height: "340px", background: "radial-gradient(circle,rgba(44,140,153,.12),transparent 70%)" }}></div>
          <div style={{ position: "relative", maxWidth: "1120px", margin: "0 auto" }}>
            <div style={{ maxWidth: "720px" }}>
              <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "10.5px", letterSpacing: ".14em", color: "#2C8C99", textTransform: "uppercase" }}>How AXY works
              </div>
              <h1 style={{ fontSize: "38px", fontWeight: "800", color: "#1F2B4D", lineHeight: "1.12", letterSpacing: "-.018em", margin: "14px 0 0" }}>How AXY turns everyday retail activity into connected action.
              </h1>
              <p style={{ fontSize: "15px", color: "#667085", lineHeight: "1.6", margin: "16px 0 0", maxWidth: "620px" }}>AXY connects what happens in stores, customer journeys, Back Office workflows, partner relationships and existing systems&mdash;then gives each authorised participant the context needed to continue.
              </p>
              <div style={{ display: "flex", gap: "12px", marginTop: "24px", flexWrap: "wrap" }}>
                <a className="hv53" href="/book-a-walkthrough" style={{ display: "inline-flex", padding: "13px 22px", background: "#32415C", color: "#fff", borderRadius: "10px", fontSize: "14px", fontWeight: "700" }}>Get guided setup
                </a>{' '}
                <a className="hv54" href="/product" style={{ display: "inline-flex", padding: "13px 22px", border: "1.5px solid #32415C", color: "#32415C", borderRadius: "10px", fontSize: "14px", fontWeight: "600" }}>Explore the platform
                </a>
              </div>
              <div style={{ marginTop: "16px" }}>
                <a href="/for-retailers" style={{ fontSize: "13.5px", fontWeight: "700", color: "#2C8C99" }}>See AXY for retailers &rarr;
                </a>
              </div>
            </div>
            <div className="how-eco" style={{ display: "grid", gridTemplateColumns: "1fr 1.25fr 1fr", gap: "18px", alignItems: "stretch", marginTop: "40px" }}>
              <div style={{ background: "#fff", border: "1px solid #E4E8EF", borderRadius: "16px", padding: "18px" }}>
                <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "9px", letterSpacing: ".1em", color: "#8a94a6", textTransform: "uppercase" }}>Information entering AXY
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "7px", marginTop: "12px" }}>
                  <div style={{ fontSize: "12px", fontWeight: "600", color: "#3a4358", background: "#F7F9FC", border: "1px solid #E9EDF3", borderRadius: "8px", padding: "9px 11px" }}>Sales App
                  </div>
                  <div style={{ fontSize: "12px", fontWeight: "600", color: "#3a4358", background: "#F7F9FC", border: "1px solid #E9EDF3", borderRadius: "8px", padding: "9px 11px" }}>Customer App
                  </div>
                  <div style={{ fontSize: "12px", fontWeight: "600", color: "#3a4358", background: "#F7F9FC", border: "1px solid #E9EDF3", borderRadius: "8px", padding: "9px 11px" }}>Back Office
                  </div>
                  <div style={{ fontSize: "12px", fontWeight: "600", color: "#3a4358", background: "#F7F9FC", border: "1px solid #E9EDF3", borderRadius: "8px", padding: "9px 11px" }}>Retail &amp; brand partners
                  </div>
                  <div style={{ fontSize: "12px", fontWeight: "600", color: "#3a4358", background: "#F7F9FC", border: "1px solid #E9EDF3", borderRadius: "8px", padding: "9px 11px" }}>POS, ERP, CRM, inventory &amp; product systems
                  </div>
                </div>
              </div>
              <div style={{ position: "relative", border: "1.5px dashed #6FC0C8", borderRadius: "18px", padding: "16px", background: "linear-gradient(160deg,#20304F,#121B34)" }}>
                <div style={{ position: "absolute", top: "-11px", left: "50%", transform: "translateX(-50%)", whiteSpace: "nowrap", fontFamily: "'Roboto Mono',monospace", fontSize: "8.5px", fontWeight: "700", letterSpacing: ".06em", color: "#0F2E28", background: "#7fd4de", borderRadius: "20px", padding: "4px 12px" }}>APPROVED CONNECTIONS &middot; DEFINED PURPOSE &middot; CONTROLLED VISIBILITY
                </div>
                <div style={{ textAlign: "center", marginTop: "6px" }}>
                  <span style={{ fontSize: "15px", fontWeight: "800", color: "#fff" }}>AXY context &amp; workflow layer
                  </span>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", justifyContent: "center", marginTop: "12px" }}>
                  <span style={{ fontSize: "10.5px", fontWeight: "600", color: "#DDE4F0", background: "rgba(255,255,255,.09)", border: "1px solid rgba(255,255,255,.18)", borderRadius: "7px", padding: "5px 9px" }}>Product & variant context
                  </span>
                  <span style={{ fontSize: "10.5px", fontWeight: "600", color: "#DDE4F0", background: "rgba(255,255,255,.09)", border: "1px solid rgba(255,255,255,.18)", borderRadius: "7px", padding: "5px 9px" }}>Customer & consent context
                  </span>
                  <span style={{ fontSize: "10.5px", fontWeight: "600", color: "#DDE4F0", background: "rgba(255,255,255,.09)", border: "1px solid rgba(255,255,255,.18)", borderRadius: "7px", padding: "5px 9px" }}>Employee
                  </span>
                  <span style={{ fontSize: "10.5px", fontWeight: "600", color: "#DDE4F0", background: "rgba(255,255,255,.09)", border: "1px solid rgba(255,255,255,.18)", borderRadius: "7px", padding: "5px 9px" }}>Store & business unit
                  </span>
                  <span style={{ fontSize: "10.5px", fontWeight: "600", color: "#DDE4F0", background: "rgba(255,255,255,.09)", border: "1px solid rgba(255,255,255,.18)", borderRadius: "7px", padding: "5px 9px" }}>Stock & availability
                  </span>
                  <span style={{ fontSize: "10.5px", fontWeight: "600", color: "#DDE4F0", background: "rgba(255,255,255,.09)", border: "1px solid rgba(255,255,255,.18)", borderRadius: "7px", padding: "5px 9px" }}>Partner permissions
                  </span>
                  <span style={{ fontSize: "10.5px", fontWeight: "600", color: "#DDE4F0", background: "rgba(255,255,255,.09)", border: "1px solid rgba(255,255,255,.18)", borderRadius: "7px", padding: "5px 9px" }}>Workflow state
                  </span>
                  <span style={{ fontSize: "10.5px", fontWeight: "600", color: "#DDE4F0", background: "rgba(255,255,255,.09)", border: "1px solid rgba(255,255,255,.18)", borderRadius: "7px", padding: "5px 9px" }}>Alfred suggestions
                  </span>
                  <span style={{ fontSize: "10.5px", fontWeight: "600", color: "#DDE4F0", background: "rgba(255,255,255,.09)", border: "1px solid rgba(255,255,255,.18)", borderRadius: "7px", padding: "5px 9px" }}>Intelligence
                  </span>
                </div>
              </div>
              <div style={{ background: "#fff", border: "1px solid #CDE7E6", borderRadius: "16px", padding: "18px" }}>
                <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "9px", letterSpacing: ".1em", color: "#2C8C99", textTransform: "uppercase" }}>Useful outcomes
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "7px", marginTop: "12px" }}>
                  <div style={{ fontSize: "12px", fontWeight: "600", color: "#1C6470", background: "#EAF6F6", border: "1px solid #D3EAEA", borderRadius: "8px", padding: "9px 11px" }}>Next sales action
                  </div>
                  <div style={{ fontSize: "12px", fontWeight: "600", color: "#1C6470", background: "#EAF6F6", border: "1px solid #D3EAEA", borderRadius: "8px", padding: "9px 11px" }}>Customer continuation
                  </div>
                  <div style={{ fontSize: "12px", fontWeight: "600", color: "#1C6470", background: "#EAF6F6", border: "1px solid #D3EAEA", borderRadius: "8px", padding: "9px 11px" }}>Availability response
                  </div>
                  <div style={{ fontSize: "12px", fontWeight: "600", color: "#1C6470", background: "#EAF6F6", border: "1px solid #D3EAEA", borderRadius: "8px", padding: "9px 11px" }}>Offer or order
                  </div>
                  <div style={{ fontSize: "12px", fontWeight: "600", color: "#1C6470", background: "#EAF6F6", border: "1px solid #D3EAEA", borderRadius: "8px", padding: "9px 11px" }}>Warranty or service workflow
                  </div>
                  <div style={{ fontSize: "12px", fontWeight: "600", color: "#1C6470", background: "#EAF6F6", border: "1px solid #D3EAEA", borderRadius: "8px", padding: "9px 11px" }}>Management insight
                  </div>
                  <div style={{ fontSize: "12px", fontWeight: "600", color: "#1C6470", background: "#EAF6F6", border: "1px solid #D3EAEA", borderRadius: "8px", padding: "9px 11px" }}>Approved partner insight
                  </div>
                </div>
              </div>
            </div>
            <p style={{ fontSize: "12.5px", color: "#8a94a6", lineHeight: "1.6", margin: "16px auto 0", maxWidth: "900px", textAlign: "center" }}>Information enters from apps, partners and existing systems on the left. AXY connects it to product, customer, employee, store, stock and permission context in the middle. Each authorised participant receives only the relevant outcome on the right &mdash; never the complete record automatically.
            </p>
          </div>
        </div>
        <div style={{ background: "#F9FAFB", padding: "64px 24px" }}>
          <div style={{ maxWidth: "1080px", margin: "0 auto" }}>
            <div style={{ maxWidth: "680px" }}>
              <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "10.5px", letterSpacing: ".14em", color: "#2C8C99", textTransform: "uppercase" }}>The operating model
              </div>
              <h2 style={{ fontSize: "28px", fontWeight: "800", color: "#1F2B4D", lineHeight: "1.16", margin: "12px 0 0" }}>One action gains context&mdash;and becomes useful across the business.
              </h2>
              <p style={{ fontSize: "14.5px", color: "#667085", lineHeight: "1.62", margin: "13px 0 0" }}>A salesperson, customer, manager or connected system performs an action. AXY links that action to the relevant product, customer, employee, store, stock and partner context. It then creates or recommends the appropriate workflow, keeps authorised participants connected and adds the outcome to business intelligence.
              </p>
            </div>
            <div className="how-stepper" style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap", marginTop: "28px" }}>
              <button type="button" onClick={howGo0} style={css(howStep0Style)}>
                <span style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "10px", fontWeight: "700", opacity: ".7" }}>01
                </span>
                <span>Capture
                </span>
              </button>
              <span className="how-stepline" style={{ flex: "1", minWidth: "14px", height: "2px", background: "#D4DBE6" }}></span>
              <button type="button" onClick={howGo1} style={css(howStep1Style)}>
                <span style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "10px", fontWeight: "700", opacity: ".7" }}>02
                </span>
                <span>Connect
                </span>
              </button>
              <span className="how-stepline" style={{ flex: "1", minWidth: "14px", height: "2px", background: "#D4DBE6" }}></span>
              <button type="button" onClick={howGo2} style={css(howStep2Style)}>
                <span style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "10px", fontWeight: "700", opacity: ".7" }}>03
                </span>
                <span>Act
                </span>
              </button>
              <span className="how-stepline" style={{ flex: "1", minWidth: "14px", height: "2px", background: "#D4DBE6" }}></span>
              <button type="button" onClick={howGo3} style={css(howStep3Style)}>
                <span style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "10px", fontWeight: "700", opacity: ".7" }}>04
                </span>
                <span>Continue
                </span>
              </button>
              <span className="how-stepline" style={{ flex: "1", minWidth: "14px", height: "2px", background: "#D4DBE6" }}></span>
              <button type="button" onClick={howGo4} style={css(howStep4Style)}>
                <span style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "10px", fontWeight: "700", opacity: ".7" }}>05
                </span>
                <span>Understand
                </span>
              </button>
            </div>
            <p style={{ fontSize: "12px", color: "#9aa3b2", marginTop: "12px" }}>Five connected stages, wrapped by one control layer. Select a stage to jump to it.
            </p>
          </div>
        </div>
        <div id="axy-how-s0" style={{ background: "#fff", padding: "66px 24px", scrollMarginTop: "72px" }}>
          <div style={{ maxWidth: "1080px", margin: "0 auto" }}>
            <div style={{ maxWidth: "680px" }}>
              <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "10.5px", letterSpacing: ".14em", color: "#2C8C99", textTransform: "uppercase" }}>01 &middot; Capture
              </div>
              <h2 style={{ fontSize: "26px", fontWeight: "800", color: "#1F2B4D", lineHeight: "1.18", margin: "12px 0 0" }}>Useful activity enters AXY during normal work.
              </h2>
              <p style={{ fontSize: "14px", color: "#667085", lineHeight: "1.6", margin: "12px 0 0" }}>Information can come from employees, customers, Back Office, retail partners or connected systems. The method may be a quick action, structured import, synchronisation or approved partner workflow.
              </p>
            </div>
            <div className="how-inputs" style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: "12px", marginTop: "28px" }}>
              <div style={{ background: "#fff", border: "1px solid #E4E8EF", borderRadius: "13px", padding: "18px" }}>
                <div style={{ width: "34px", height: "34px", borderRadius: "9px", background: "#EFF7F8", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg viewBox="0 0 20 20" width="17" height="17" fill="none" stroke="#2C8C99" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 3h6l1 3H6zM5 6h10v13a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1z"></path>
                  </svg>
                </div>
                <div style={{ fontSize: "14px", fontWeight: "800", color: "#1F2B4D", marginTop: "11px" }}>Sales App
                </div>
                <p style={{ fontSize: "12.5px", color: "#667085", lineHeight: "1.55", margin: "6px 0 0" }}>Visits, products presented, customer reactions, tasks, offers, availability requests and service intake.
                </p>
              </div>
              <div style={{ background: "#fff", border: "1px solid #E4E8EF", borderRadius: "13px", padding: "18px" }}>
                <div style={{ width: "34px", height: "34px", borderRadius: "9px", background: "#EFF7F8", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg viewBox="0 0 20 20" width="17" height="17" fill="none" stroke="#2C8C99" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 3h8a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zM9 17h2"></path>
                  </svg>
                </div>
                <div style={{ fontSize: "14px", fontWeight: "800", color: "#1F2B4D", marginTop: "11px" }}>Customer App
                </div>
                <p style={{ fontSize: "12.5px", color: "#667085", lineHeight: "1.55", margin: "6px 0 0" }}>Saved products, inquiries, appointments, offer activity and service actions.
                </p>
              </div>
              <div style={{ background: "#fff", border: "1px solid #E4E8EF", borderRadius: "13px", padding: "18px" }}>
                <div style={{ width: "34px", height: "34px", borderRadius: "9px", background: "#EFF7F8", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg viewBox="0 0 20 20" width="17" height="17" fill="none" stroke="#2C8C99" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 5h14v10H3zM3 17h14"></path>
                  </svg>
                </div>
                <div style={{ fontSize: "14px", fontWeight: "800", color: "#1F2B4D", marginTop: "11px" }}>Back Office
                </div>
                <p style={{ fontSize: "12.5px", color: "#667085", lineHeight: "1.55", margin: "6px 0 0" }}>Catalogues, stock, orders, warranties, announcements and operational updates.
                </p>
              </div>
              <div style={{ background: "#fff", border: "1px solid #E4E8EF", borderRadius: "13px", padding: "18px" }}>
                <div style={{ width: "34px", height: "34px", borderRadius: "9px", background: "#EFF7F8", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg viewBox="0 0 20 20" width="17" height="17" fill="none" stroke="#2C8C99" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zM13 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zM3 16c0-2.2 1.8-4 4-4M17 16c0-2.2-1.8-4-4-4"></path>
                  </svg>
                </div>
                <div style={{ fontSize: "14px", fontWeight: "800", color: "#1F2B4D", marginTop: "11px" }}>Partners
                </div>
                <p style={{ fontSize: "12.5px", color: "#667085", lineHeight: "1.55", margin: "6px 0 0" }}>Catalogue updates, availability responses, order confirmations and warranty actions.
                </p>
              </div>
              <div style={{ background: "#fff", border: "1px solid #E4E8EF", borderRadius: "13px", padding: "18px" }}>
                <div style={{ width: "34px", height: "34px", borderRadius: "9px", background: "#EFF7F8", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg viewBox="0 0 20 20" width="17" height="17" fill="none" stroke="#2C8C99" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 5h12v4H4zM4 11h12v4H4zM7 7h.01M7 13h.01"></path>
                  </svg>
                </div>
                <div style={{ fontSize: "14px", fontWeight: "800", color: "#1F2B4D", marginTop: "11px" }}>Existing systems
                </div>
                <p style={{ fontSize: "12.5px", color: "#667085", lineHeight: "1.55", margin: "6px 0 0" }}>Product, inventory, transaction, customer and order information.
                </p>
              </div>
            </div>
            <div style={{ display: "flex", gap: "10px", alignItems: "flex-start", marginTop: "20px", background: "#F9FAFB", border: "1px solid #E4E8EF", borderLeft: "3px solid #2C8C99", borderRadius: "0 12px 12px 0", padding: "13px 16px" }}>
              <span style={{ fontSize: "13.5px", color: "#1F2B4D", lineHeight: "1.5", fontWeight: "600" }}>Capture happens as part of normal work &mdash; not as a separate reporting exercise.
              </span>
            </div>
          </div>
        </div>
        <div id="axy-how-s1" style={{ background: "#F9FAFB", padding: "66px 24px", scrollMarginTop: "72px" }}>
          <div style={{ maxWidth: "1080px", margin: "0 auto" }}>
            <div style={{ maxWidth: "680px" }}>
              <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "10.5px", letterSpacing: ".14em", color: "#2C8C99", textTransform: "uppercase" }}>02 &middot; Connect
              </div>
              <h2 style={{ fontSize: "26px", fontWeight: "800", color: "#1F2B4D", lineHeight: "1.18", margin: "12px 0 0" }}>Every action is connected to its full retail context.
              </h2>
              <p style={{ fontSize: "14px", color: "#667085", lineHeight: "1.6", margin: "12px 0 0" }}>AXY links the activity to the information required to understand what happened and what should happen next.
              </p>
            </div>
            <div className="how-connect" style={{ display: "grid", gridTemplateColumns: "0.9fr 1.1fr", gap: "24px", alignItems: "center", marginTop: "28px" }}>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <div style={{ textAlign: "center" }}>
                  <div style={{ width: "120px", height: "120px", borderRadius: "20px", background: "linear-gradient(160deg,#20304F,#121B34)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", margin: "0 auto", boxShadow: "0 20px 44px rgba(31,43,77,.24)" }}>
                    <span style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "9px", color: "#7fd4de" }}>ONE
                    </span>
                    <span style={{ fontSize: "15px", fontWeight: "800", color: "#fff" }}>Action
                    </span>
                  </div>
                  <p style={{ fontSize: "11.5px", color: "#8a94a6", margin: "14px auto 0", maxWidth: "200px", lineHeight: "1.5" }}>connects outward to every relevant context node
                  </p>
                </div>
              </div>
              <div className="how-ctx" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "9px" }}>
                <div style={{ background: "#fff", border: "1px solid #D9E0EC", borderRadius: "11px", padding: "12px 14px", fontSize: "12.5px", fontWeight: "700", color: "#1F2B4D", display: "flex", alignItems: "center", gap: "9px", boxShadow: "0 4px 12px rgba(31,43,77,.05)" }}>
                  <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#2C8C99", flexShrink: "0" }}></span>Product & variant
                </div>
                <div style={{ background: "#fff", border: "1px solid #D9E0EC", borderRadius: "11px", padding: "12px 14px", fontSize: "12.5px", fontWeight: "700", color: "#1F2B4D", display: "flex", alignItems: "center", gap: "9px", boxShadow: "0 4px 12px rgba(31,43,77,.05)" }}>
                  <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#2C8C99", flexShrink: "0" }}></span>Customer or anonymous visit
                </div>
                <div style={{ background: "#fff", border: "1px solid #D9E0EC", borderRadius: "11px", padding: "12px 14px", fontSize: "12.5px", fontWeight: "700", color: "#1F2B4D", display: "flex", alignItems: "center", gap: "9px", boxShadow: "0 4px 12px rgba(31,43,77,.05)" }}>
                  <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#2C8C99", flexShrink: "0" }}></span>Employee
                </div>
                <div style={{ background: "#fff", border: "1px solid #D9E0EC", borderRadius: "11px", padding: "12px 14px", fontSize: "12.5px", fontWeight: "700", color: "#1F2B4D", display: "flex", alignItems: "center", gap: "9px", boxShadow: "0 4px 12px rgba(31,43,77,.05)" }}>
                  <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#2C8C99", flexShrink: "0" }}></span>Store & business unit
                </div>
                <div style={{ background: "#fff", border: "1px solid #D9E0EC", borderRadius: "11px", padding: "12px 14px", fontSize: "12.5px", fontWeight: "700", color: "#1F2B4D", display: "flex", alignItems: "center", gap: "9px", boxShadow: "0 4px 12px rgba(31,43,77,.05)" }}>
                  <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#2C8C99", flexShrink: "0" }}></span>Stock & availability
                </div>
                <div style={{ background: "#fff", border: "1px solid #D9E0EC", borderRadius: "11px", padding: "12px 14px", fontSize: "12.5px", fontWeight: "700", color: "#1F2B4D", display: "flex", alignItems: "center", gap: "9px", boxShadow: "0 4px 12px rgba(31,43,77,.05)" }}>
                  <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#2C8C99", flexShrink: "0" }}></span>Visit, ticket or workflow
                </div>
                <div style={{ background: "#fff", border: "1px solid #D9E0EC", borderRadius: "11px", padding: "12px 14px", fontSize: "12.5px", fontWeight: "700", color: "#1F2B4D", display: "flex", alignItems: "center", gap: "9px", boxShadow: "0 4px 12px rgba(31,43,77,.05)" }}>
                  <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#2C8C99", flexShrink: "0" }}></span>Authorised partner
                </div>
              </div>
            </div>
            <div style={{ display: "flex", gap: "10px", alignItems: "flex-start", marginTop: "20px", background: "#fff", border: "1px solid #E4E8EF", borderLeft: "3px solid #2C8C99", borderRadius: "0 12px 12px 0", padding: "13px 16px" }}>
              <span style={{ fontSize: "13.5px", color: "#1F2B4D", lineHeight: "1.5", fontWeight: "600" }}>The value is not the action alone. The value is knowing which product, customer, store, employee and opportunity it belongs to.
              </span>
            </div>
          </div>
        </div>
        <div id="axy-how-s2" style={{ background: "#fff", padding: "66px 24px", scrollMarginTop: "72px" }}>
          <div style={{ maxWidth: "1080px", margin: "0 auto" }}>
            <div style={{ maxWidth: "680px" }}>
              <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "10.5px", letterSpacing: ".14em", color: "#2C8C99", textTransform: "uppercase" }}>03 &middot; Act
              </div>
              <h2 style={{ fontSize: "26px", fontWeight: "800", color: "#1F2B4D", lineHeight: "1.18", margin: "12px 0 0" }}>AXY creates, routes or recommends the next step.
              </h2>
              <p style={{ fontSize: "14px", color: "#667085", lineHeight: "1.6", margin: "12px 0 0" }}>According to the configured workflow, connected activity can create an operational action or help a person decide what should happen next.
              </p>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "24px" }}>
              <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "12px", fontWeight: "600", borderRadius: "8px", padding: "6px 11px", color: "#3a4358", background: "#F4F6FA", border: "1px solid #E4EAF1" }}>
                <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "currentColor", opacity: ".6" }}></span>Follow up with a customer
              </span>
              <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "12px", fontWeight: "600", borderRadius: "8px", padding: "6px 11px", color: "#3a4358", background: "#F4F6FA", border: "1px solid #E4EAF1" }}>
                <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "currentColor", opacity: ".6" }}></span>Respond to an inquiry
              </span>
              <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "12px", fontWeight: "600", borderRadius: "8px", padding: "6px 11px", color: "#3a4358", background: "#F4F6FA", border: "1px solid #E4EAF1" }}>
                <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "currentColor", opacity: ".6" }}></span>Request product availability
              </span>
              <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "12px", fontWeight: "600", borderRadius: "8px", padding: "6px 11px", color: "#3a4358", background: "#F4F6FA", border: "1px solid #E4EAF1" }}>
                <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "currentColor", opacity: ".6" }}></span>Prepare an offer
              </span>
              <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "12px", fontWeight: "600", borderRadius: "8px", padding: "6px 11px", color: "#3a4358", background: "#F4F6FA", border: "1px solid #E4EAF1" }}>
                <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "currentColor", opacity: ".6" }}></span>Reserve or order a product
              </span>
              <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "12px", fontWeight: "600", borderRadius: "8px", padding: "6px 11px", color: "#3a4358", background: "#F4F6FA", border: "1px solid #E4EAF1" }}>
                <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "currentColor", opacity: ".6" }}></span>Review a catalogue update
              </span>
              <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "12px", fontWeight: "600", borderRadius: "8px", padding: "6px 11px", color: "#3a4358", background: "#F4F6FA", border: "1px solid #E4EAF1" }}>
                <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "currentColor", opacity: ".6" }}></span>Activate a warranty
              </span>
              <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "12px", fontWeight: "600", borderRadius: "8px", padding: "6px 11px", color: "#3a4358", background: "#F4F6FA", border: "1px solid #E4EAF1" }}>
                <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "currentColor", opacity: ".6" }}></span>Continue a service case
              </span>
              <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "12px", fontWeight: "600", borderRadius: "8px", padding: "6px 11px", color: "#3a4358", background: "#F4F6FA", border: "1px solid #E4EAF1" }}>
                <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "currentColor", opacity: ".6" }}></span>Review a stock or demand signal
              </span>
            </div>
            <div className="how-alfred" style={{ display: "grid", gridTemplateColumns: "1.15fr 0.85fr", gap: "20px", marginTop: "24px", alignItems: "stretch" }}>
              <div style={{ background: "linear-gradient(160deg,#20304F,#121B34)", borderRadius: "16px", padding: "22px", color: "#fff" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "9px" }}>
                  <span style={{ width: "30px", height: "30px", borderRadius: "9px", background: "rgba(127,212,222,.16)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg viewBox="0 0 20 20" width="16" height="16" fill="none" stroke="#7fd4de" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M10 3v3M10 14v3M3 10h3M14 10h3M6 6l2 2M14 6l-2 2"></path>
                      <circle cx="10" cy="10" r="2.5"></circle>
                    </svg>
                  </span>
                  <div>
                    <div style={{ fontSize: "14px", fontWeight: "800" }}>Alfred
                    </div>
                    <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "8.5px", color: "#7fd4de", letterSpacing: ".05em" }}>QUIET ASSISTANT
                    </div>
                  </div>
                </div>
                <p style={{ fontSize: "12.5px", color: "#B9C2D8", lineHeight: "1.55", margin: "12px 0 14px" }}>Alfred can quietly suggest &mdash; a person always decides.
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: "7px" }}>
                  <div style={{ display: "flex", gap: "8px", alignItems: "center", fontSize: "12.5px", color: "#DDE4F0", background: "rgba(255,255,255,.06)", border: "1px solid rgba(255,255,255,.13)", borderRadius: "9px", padding: "9px 12px" }}>
                    <span style={{ color: "#7fd4de" }}>&rarr;
                    </span>Who requires attention
                  </div>
                  <div style={{ display: "flex", gap: "8px", alignItems: "center", fontSize: "12.5px", color: "#DDE4F0", background: "rgba(255,255,255,.06)", border: "1px solid rgba(255,255,255,.13)", borderRadius: "9px", padding: "9px 12px" }}>
                    <span style={{ color: "#7fd4de" }}>&rarr;
                    </span>Why the opportunity matters
                  </div>
                  <div style={{ display: "flex", gap: "8px", alignItems: "center", fontSize: "12.5px", color: "#DDE4F0", background: "rgba(255,255,255,.06)", border: "1px solid rgba(255,255,255,.13)", borderRadius: "9px", padding: "9px 12px" }}>
                    <span style={{ color: "#7fd4de" }}>&rarr;
                    </span>Which product may be relevant
                  </div>
                  <div style={{ display: "flex", gap: "8px", alignItems: "center", fontSize: "12.5px", color: "#DDE4F0", background: "rgba(255,255,255,.06)", border: "1px solid rgba(255,255,255,.13)", borderRadius: "9px", padding: "9px 12px" }}>
                    <span style={{ color: "#7fd4de" }}>&rarr;
                    </span>What next action should be considered
                  </div>
                </div>
              </div>
              <div style={{ background: "#F9FAFB", border: "1px solid #E4E8EF", borderRadius: "16px", padding: "20px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <div style={{ fontSize: "14px", fontWeight: "800", color: "#1F2B4D" }}>People stay in control
                </div>
                <p style={{ fontSize: "12.5px", color: "#667085", lineHeight: "1.6", margin: "9px 0 0" }}>People remain in control of customer communication, commercial decisions and partner approvals. Alfred prepares and recommends; it does not contact customers, approve orders or share data on its own.
                </p>
                <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", marginTop: "20px", background: "rgba(44,140,153,.07)", border: "1px dashed #9AD0D3", borderRadius: "9px", padding: "8px 13px" }}>
                  <svg viewBox="0 0 20 20" width="14" height="14" fill="none" stroke="#2C8C99" strokeWidth="1.6">
                    <path d="M10 2.5l5.5 2.2v4c0 3.4-2.3 6.3-5.5 7.5C6.8 15 4.5 12.1 4.5 8.7v-4z" strokeLinejoin="round"></path>
                  </svg>
                  <span style={{ fontSize: "11.5px", fontWeight: "600", color: "#1C6470" }}>Subject to approved connections &amp; defined purpose
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="axy-how-s3" style={{ background: "#FBF6F1", padding: "66px 24px", scrollMarginTop: "72px" }}>
          <div style={{ maxWidth: "1080px", margin: "0 auto" }}>
            <div style={{ maxWidth: "680px" }}>
              <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "10.5px", letterSpacing: ".14em", color: "#B5764A", textTransform: "uppercase" }}>04 &middot; Continue
              </div>
              <h2 style={{ fontSize: "26px", fontWeight: "800", color: "#1F2B4D", lineHeight: "1.18", margin: "12px 0 0" }}>The right participant continues from the same context.
              </h2>
              <p style={{ fontSize: "14px", color: "#7a6152", lineHeight: "1.6", margin: "12px 0 0" }}>The salesperson, customer, manager or authorised partner sees only the information and action relevant to their role and relationship.
              </p>
            </div>
            <div className="how-views" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "12px", marginTop: "28px" }}>
              <div style={{ background: "#fff", border: "1px solid #E4E8EF", borderRadius: "14px", padding: "20px", borderTop: "3px solid #2C8C99" }}>
                <div style={{ display: "inline-flex", alignItems: "center", gap: "7px", fontSize: "12.5px", fontWeight: "800", color: "#2C8C99", background: "#EAF6F6", borderRadius: "8px", padding: "5px 11px" }}>Salesperson
                </div>
                <p style={{ fontSize: "13px", color: "#3a4358", lineHeight: "1.6", margin: "12px 0 0" }}>Customer context, products discussed, open opportunity and next action.
                </p>
              </div>
              <div style={{ background: "#fff", border: "1px solid #E4E8EF", borderRadius: "14px", padding: "20px", borderTop: "3px solid #B5764A" }}>
                <div style={{ display: "inline-flex", alignItems: "center", gap: "7px", fontSize: "12.5px", fontWeight: "800", color: "#B5764A", background: "#FBF3ED", borderRadius: "8px", padding: "5px 11px" }}>Customer
                </div>
                <p style={{ fontSize: "13px", color: "#3a4358", lineHeight: "1.6", margin: "12px 0 0" }}>Visit recap, products, wishlist, offer, invoice, warranty or service status.
                </p>
              </div>
              <div style={{ background: "#fff", border: "1px solid #E4E8EF", borderRadius: "14px", padding: "20px", borderTop: "3px solid #32415C" }}>
                <div style={{ display: "inline-flex", alignItems: "center", gap: "7px", fontSize: "12.5px", fontWeight: "800", color: "#32415C", background: "#EEF1F7", borderRadius: "8px", padding: "5px 11px" }}>Manager or owner
                </div>
                <p style={{ fontSize: "13px", color: "#3a4358", lineHeight: "1.6", margin: "12px 0 0" }}>Opportunity status, follow-up discipline, stock requirement and performance context.
                </p>
              </div>
              <div style={{ background: "#fff", border: "1px solid #E4E8EF", borderRadius: "14px", padding: "20px", borderTop: "3px solid #1C6470" }}>
                <div style={{ display: "inline-flex", alignItems: "center", gap: "7px", fontSize: "12.5px", fontWeight: "800", color: "#1C6470", background: "#E7F3F3", borderRadius: "8px", padding: "5px 11px" }}>Brand or manufacturer
                </div>
                <p style={{ fontSize: "13px", color: "#3a4358", lineHeight: "1.6", margin: "12px 0 0" }}>Approved catalogue, availability, order or warranty context — and only the permitted aggregated insight.
                </p>
              </div>
            </div>
            <div style={{ display: "flex", gap: "10px", alignItems: "flex-start", marginTop: "20px", background: "#fff", border: "1px solid #F0DDD2", borderLeft: "3px solid #C98B63", borderRadius: "0 12px 12px 0", padding: "13px 16px" }}>
              <span style={{ fontSize: "13.5px", color: "#1F2B4D", lineHeight: "1.5", fontWeight: "600" }}>One connected process. Different authorised views.
              </span>
            </div>
          </div>
        </div>
        <div id="axy-how-s4" style={{ background: "#1F2B4D", padding: "66px 24px", scrollMarginTop: "72px" }}>
          <div style={{ maxWidth: "1080px", margin: "0 auto" }}>
            <div style={{ maxWidth: "680px" }}>
              <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "10.5px", letterSpacing: ".14em", color: "#7fd4de", textTransform: "uppercase" }}>05 &middot; Understand
              </div>
              <h2 style={{ fontSize: "26px", fontWeight: "800", color: "#fff", lineHeight: "1.18", margin: "12px 0 0" }}>Connected activity becomes clearer business intelligence.
              </h2>
              <p style={{ fontSize: "14px", color: "#B9C2D8", lineHeight: "1.6", margin: "12px 0 0" }}>AXY combines permitted operational activity to help retailers and authorised partners understand opportunities, demand and execution.
              </p>
            </div>
            <div className="how-understand" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px", marginTop: "28px" }}>
              <div>
                <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "9px", letterSpacing: ".1em", color: "#7fd4de", textTransform: "uppercase" }}>Retailer outcomes
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "7px", marginTop: "12px" }}>
                  <div style={{ fontSize: "13px", fontWeight: "600", color: "#fff", background: "rgba(255,255,255,.06)", border: "1px solid rgba(255,255,255,.14)", borderRadius: "9px", padding: "11px 13px" }}>Customer opportunities
                  </div>
                  <div style={{ fontSize: "13px", fontWeight: "600", color: "#fff", background: "rgba(255,255,255,.06)", border: "1px solid rgba(255,255,255,.14)", borderRadius: "9px", padding: "11px 13px" }}>Product interest
                  </div>
                  <div style={{ fontSize: "13px", fontWeight: "600", color: "#fff", background: "rgba(255,255,255,.06)", border: "1px solid rgba(255,255,255,.14)", borderRadius: "9px", padding: "11px 13px" }}>Availability pressure
                  </div>
                  <div style={{ fontSize: "13px", fontWeight: "600", color: "#fff", background: "rgba(255,255,255,.06)", border: "1px solid rgba(255,255,255,.14)", borderRadius: "9px", padding: "11px 13px" }}>Stock and reorder attention
                  </div>
                  <div style={{ fontSize: "13px", fontWeight: "600", color: "#fff", background: "rgba(255,255,255,.06)", border: "1px solid rgba(255,255,255,.14)", borderRadius: "9px", padding: "11px 13px" }}>Store, team and follow-up performance
                  </div>
                </div>
              </div>
              <div>
                <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "9px", letterSpacing: ".1em", color: "#7fd4de", textTransform: "uppercase" }}>Approved manufacturer insight
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "7px", marginTop: "12px" }}>
                  <span style={{ fontSize: "12px", fontWeight: "600", color: "#CFE0FF", background: "rgba(127,212,222,.1)", border: "1px solid rgba(127,212,222,.24)", borderRadius: "8px", padding: "7px 11px" }}>Aggregated product interest
                  </span>
                  <span style={{ fontSize: "12px", fontWeight: "600", color: "#CFE0FF", background: "rgba(127,212,222,.1)", border: "1px solid rgba(127,212,222,.24)", borderRadius: "8px", padding: "7px 11px" }}>Availability-request volume
                  </span>
                  <span style={{ fontSize: "12px", fontWeight: "600", color: "#CFE0FF", background: "rgba(127,212,222,.1)", border: "1px solid rgba(127,212,222,.24)", borderRadius: "8px", padding: "7px 11px" }}>Warranty activations
                  </span>
                  <span style={{ fontSize: "12px", fontWeight: "600", color: "#CFE0FF", background: "rgba(127,212,222,.1)", border: "1px solid rgba(127,212,222,.24)", borderRadius: "8px", padding: "7px 11px" }}>Product visibility
                  </span>
                  <span style={{ fontSize: "12px", fontWeight: "600", color: "#CFE0FF", background: "rgba(127,212,222,.1)", border: "1px solid rgba(127,212,222,.24)", borderRadius: "8px", padding: "7px 11px" }}>Market momentum
                  </span>
                </div>
                <div style={{ background: "rgba(255,255,255,.05)", border: "1px solid rgba(255,255,255,.14)", borderRadius: "12px", padding: "14px", marginTop: "14px" }}>
                  <div style={{ fontSize: "12px", fontWeight: "700", color: "#fff" }}>Careful wording
                  </div>
                  <p style={{ fontSize: "11.5px", color: "#9fb0cc", lineHeight: "1.55", margin: "7px 0 0" }}>AXY describes a{' '}
                    <strong style={{ color: "#DDE4F0" }}>supporting signal
                    </strong>, a{' '}
                    <strong style={{ color: "#DDE4F0" }}>likely explanation
                    </strong>, a{' '}
                    <strong style={{ color: "#DDE4F0" }}>pattern requiring review
                    </strong>{' '}or an{' '}
                    <strong style={{ color: "#DDE4F0" }}>opportunity requiring attention
                    </strong>{' '}&mdash; not absolute causation.
                  </p>
                </div>
              </div>
            </div>
            <div style={{ background: "rgba(255,255,255,.05)", border: "1px solid rgba(255,255,255,.14)", borderRadius: "12px", padding: "16px 18px", marginTop: "20px" }}>
              <p style={{ fontSize: "13px", color: "#DDE4F0", lineHeight: "1.6", margin: "0" }}>For example, AXY can help investigate whether a product is underperforming because it is rarely presented, unavailable, or generating weak customer interest.
              </p>
            </div>
          </div>
        </div>
        <div style={{ background: "#fff", padding: "70px 24px" }}>
          <div style={{ maxWidth: "1080px", margin: "0 auto" }}>
            <div style={{ maxWidth: "680px" }}>
              <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "10.5px", letterSpacing: ".14em", color: "#2C8C99", textTransform: "uppercase" }}>Control at every step
              </div>
              <h2 style={{ fontSize: "28px", fontWeight: "800", color: "#1F2B4D", lineHeight: "1.16", margin: "12px 0 0" }}>Connection does not mean unrestricted access.
              </h2>
              <p style={{ fontSize: "14.5px", color: "#667085", lineHeight: "1.6", margin: "13px 0 0", maxWidth: "640px" }}>Nothing is shared without an approved connection and configured purpose. Companies, business units and customers retain control over the information used in each workflow.
              </p>
            </div>
            <div className="how-perm" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginTop: "28px" }}>
              <div style={{ background: "#F4F6FA", border: "1px solid #E4E8EF", borderRadius: "14px", padding: "18px 20px", borderLeft: "4px solid #8a94a6" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "9px" }}>
                  <span style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "10px", fontWeight: "700", color: "#8a94a6" }}>01
                  </span>
                  <div style={{ fontSize: "14px", fontWeight: "800", color: "#1F2B4D" }}>Private company information
                  </div>
                </div>
                <p style={{ fontSize: "12.5px", color: "#667085", lineHeight: "1.55", margin: "8px 0 0" }}>Internal records, commercial strategy, margins, employee activity and unrelated partner information remain private.
                </p>
              </div>
              <div style={{ background: "#EAF6F6", border: "1px solid #E4E8EF", borderRadius: "14px", padding: "18px 20px", borderLeft: "4px solid #2C8C99" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "9px" }}>
                  <span style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "10px", fontWeight: "700", color: "#2C8C99" }}>02
                  </span>
                  <div style={{ fontSize: "14px", fontWeight: "800", color: "#1F2B4D" }}>Approved workflow information
                  </div>
                </div>
                <p style={{ fontSize: "12.5px", color: "#667085", lineHeight: "1.55", margin: "8px 0 0" }}>Specific catalogue, availability, order, warranty or service information is used for the agreed process.
                </p>
              </div>
              <div style={{ background: "#FBF3ED", border: "1px solid #E4E8EF", borderRadius: "14px", padding: "18px 20px", borderLeft: "4px solid #B5764A" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "9px" }}>
                  <span style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "10px", fontWeight: "700", color: "#B5764A" }}>03
                  </span>
                  <div style={{ fontSize: "14px", fontWeight: "800", color: "#1F2B4D" }}>Customer-approved information
                  </div>
                </div>
                <p style={{ fontSize: "12.5px", color: "#667085", lineHeight: "1.55", margin: "8px 0 0" }}>Personal information is used only within the relevant customer relationship and configured purpose.
                </p>
              </div>
              <div style={{ background: "#E7F3F3", border: "1px solid #E4E8EF", borderRadius: "14px", padding: "18px 20px", borderLeft: "4px solid #1C6470" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "9px" }}>
                  <span style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "10px", fontWeight: "700", color: "#1C6470" }}>04
                  </span>
                  <div style={{ fontSize: "14px", fontWeight: "800", color: "#1F2B4D" }}>Aggregated or anonymised insight
                  </div>
                </div>
                <p style={{ fontSize: "12.5px", color: "#667085", lineHeight: "1.55", margin: "8px 0 0" }}>Broader product and market signals can be used without automatically exposing customer identity or protected retailer records.
                </p>
              </div>
            </div>
            <div style={{ display: "flex", gap: "12px", alignItems: "center", flexWrap: "wrap", marginTop: "20px", background: "#F1F8F8", border: "1px solid #CFE7E6", borderRadius: "12px", padding: "15px 18px" }}>
              <span style={{ fontSize: "13.5px", color: "#1F2B4D", lineHeight: "1.5", fontWeight: "700", flex: "1", minWidth: "240px" }}>Retailer customer information is not automatically shared with brands.
              </span>
              <a href="/integrations" style={{ fontSize: "13px", fontWeight: "700", color: "#2C8C99", whiteSpace: "nowrap" }}>Explore integrations and data controls &rarr;
              </a>
            </div>
          </div>
        </div>
        <div style={{ background: "#F9FAFB", padding: "70px 24px" }}>
          <div style={{ maxWidth: "1080px", margin: "0 auto" }}>
            <div style={{ maxWidth: "700px" }}>
              <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "10.5px", letterSpacing: ".14em", color: "#2C8C99", textTransform: "uppercase" }}>One connected journey
              </div>
              <h2 style={{ fontSize: "28px", fontWeight: "800", color: "#1F2B4D", lineHeight: "1.16", margin: "12px 0 0" }}>A customer wants a product that is not currently available.
              </h2>
              <p style={{ fontSize: "14px", color: "#667085", lineHeight: "1.6", margin: "13px 0 0" }}>One normal retail interaction can support the customer, salesperson, manager, stock team and authorised partner &mdash; without exposing the complete record to everyone.
              </p>
            </div>
            <div className="how-e2e" style={{ display: "grid", gridTemplateColumns: "1fr 0.85fr", gap: "32px", marginTop: "30px", alignItems: "start" }}>
              <div style={{ background: "#fff", border: "1px solid #E4E8EF", borderRadius: "16px", padding: "24px" }}>
                <div style={{ display: "flex", gap: "16px", alignItems: "flex-start", position: "relative" }}>
                  <div style={{ flexShrink: "0", display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <span style={{ width: "34px", height: "34px", borderRadius: "50%", background: "#32415C", color: "#fff", fontFamily: "'Roboto Mono',monospace", fontSize: "12px", fontWeight: "700", display: "flex", alignItems: "center", justifyContent: "center" }}>1
                    </span>
                    <span style={{ width: "2px", flex: "1", minHeight: "22px", background: "#D9E0EC", margin: "4px 0" }}></span>
                  </div>
                  <div style={{ flex: "1", paddingBottom: "18px" }}>
                    <p style={{ fontSize: "13.5px", color: "#1F2B4D", lineHeight: "1.55", margin: "5px 0 0", fontWeight: "600" }}>The salesperson starts a visit and presents the product.
                    </p>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: "5px", fontFamily: "'Roboto Mono',monospace", fontSize: "8.5px", fontWeight: "700", letterSpacing: ".05em", textTransform: "uppercase", borderRadius: "6px", padding: "3px 8px", marginTop: "7px", color: "#7a4a2e", background: "#FBF3ED", border: "1px solid #F0DDD2" }}>Human-confirmed
                    </span>
                  </div>
                </div>
                <div style={{ display: "flex", gap: "16px", alignItems: "flex-start", position: "relative" }}>
                  <div style={{ flexShrink: "0", display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <span style={{ width: "34px", height: "34px", borderRadius: "50%", background: "#32415C", color: "#fff", fontFamily: "'Roboto Mono',monospace", fontSize: "12px", fontWeight: "700", display: "flex", alignItems: "center", justifyContent: "center" }}>2
                    </span>
                    <span style={{ width: "2px", flex: "1", minHeight: "22px", background: "#D9E0EC", margin: "4px 0" }}></span>
                  </div>
                  <div style={{ flex: "1", paddingBottom: "18px" }}>
                    <p style={{ fontSize: "13.5px", color: "#1F2B4D", lineHeight: "1.55", margin: "5px 0 0", fontWeight: "600" }}>The customer likes or saves the product, but the preferred variant is not locally available.
                    </p>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: "5px", fontFamily: "'Roboto Mono',monospace", fontSize: "8.5px", fontWeight: "700", letterSpacing: ".05em", textTransform: "uppercase", borderRadius: "6px", padding: "3px 8px", marginTop: "7px", color: "#7a4a2e", background: "#FBF3ED", border: "1px solid #F0DDD2" }}>Human-confirmed
                    </span>
                  </div>
                </div>
                <div style={{ display: "flex", gap: "16px", alignItems: "flex-start", position: "relative" }}>
                  <div style={{ flexShrink: "0", display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <span style={{ width: "34px", height: "34px", borderRadius: "50%", background: "#32415C", color: "#fff", fontFamily: "'Roboto Mono',monospace", fontSize: "12px", fontWeight: "700", display: "flex", alignItems: "center", justifyContent: "center" }}>3
                    </span>
                    <span style={{ width: "2px", flex: "1", minHeight: "22px", background: "#D9E0EC", margin: "4px 0" }}></span>
                  </div>
                  <div style={{ flex: "1", paddingBottom: "18px" }}>
                    <p style={{ fontSize: "13.5px", color: "#1F2B4D", lineHeight: "1.55", margin: "5px 0 0", fontWeight: "600" }}>The Sales App checks other permitted stock sources or sends an availability request to the connected manufacturer.
                    </p>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: "5px", fontFamily: "'Roboto Mono',monospace", fontSize: "8.5px", fontWeight: "700", letterSpacing: ".05em", textTransform: "uppercase", borderRadius: "6px", padding: "3px 8px", marginTop: "7px", color: "#1C6470", background: "#EAF6F6", border: "1px solid #CDE7E6" }}>Automatic when connected
                    </span>
                  </div>
                </div>
                <div style={{ display: "flex", gap: "16px", alignItems: "flex-start", position: "relative" }}>
                  <div style={{ flexShrink: "0", display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <span style={{ width: "34px", height: "34px", borderRadius: "50%", background: "#32415C", color: "#fff", fontFamily: "'Roboto Mono',monospace", fontSize: "12px", fontWeight: "700", display: "flex", alignItems: "center", justifyContent: "center" }}>4
                    </span>
                    <span style={{ width: "2px", flex: "1", minHeight: "22px", background: "#D9E0EC", margin: "4px 0" }}></span>
                  </div>
                  <div style={{ flex: "1", paddingBottom: "18px" }}>
                    <p style={{ fontSize: "13.5px", color: "#1F2B4D", lineHeight: "1.55", margin: "5px 0 0", fontWeight: "600" }}>The customer keeps the product and visit inside their selected store relationship.
                    </p>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: "5px", fontFamily: "'Roboto Mono',monospace", fontSize: "8.5px", fontWeight: "700", letterSpacing: ".05em", textTransform: "uppercase", borderRadius: "6px", padding: "3px 8px", marginTop: "7px", color: "#8a5a20", background: "#FBF6EE", border: "1px solid #EFE1CC" }}>Subject to permission
                    </span>
                  </div>
                </div>
                <div style={{ display: "flex", gap: "16px", alignItems: "flex-start", position: "relative" }}>
                  <div style={{ flexShrink: "0", display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <span style={{ width: "34px", height: "34px", borderRadius: "50%", background: "#32415C", color: "#fff", fontFamily: "'Roboto Mono',monospace", fontSize: "12px", fontWeight: "700", display: "flex", alignItems: "center", justifyContent: "center" }}>5
                    </span>
                    <span style={{ width: "2px", flex: "1", minHeight: "22px", background: "#D9E0EC", margin: "4px 0" }}></span>
                  </div>
                  <div style={{ flex: "1", paddingBottom: "18px" }}>
                    <p style={{ fontSize: "13.5px", color: "#1F2B4D", lineHeight: "1.55", margin: "5px 0 0", fontWeight: "600" }}>The availability response returns from another location, a connected system or a human-confirmed partner workflow.
                    </p>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: "5px", fontFamily: "'Roboto Mono',monospace", fontSize: "8.5px", fontWeight: "700", letterSpacing: ".05em", textTransform: "uppercase", borderRadius: "6px", padding: "3px 8px", marginTop: "7px", color: "#1C6470", background: "#EAF6F6", border: "1px solid #CDE7E6" }}>Automatic when connected
                    </span>
                  </div>
                </div>
                <div style={{ display: "flex", gap: "16px", alignItems: "flex-start", position: "relative" }}>
                  <div style={{ flexShrink: "0", display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <span style={{ width: "34px", height: "34px", borderRadius: "50%", background: "#32415C", color: "#fff", fontFamily: "'Roboto Mono',monospace", fontSize: "12px", fontWeight: "700", display: "flex", alignItems: "center", justifyContent: "center" }}>6
                    </span>
                    <span style={{ width: "2px", flex: "1", minHeight: "22px", background: "#D9E0EC", margin: "4px 0" }}></span>
                  </div>
                  <div style={{ flex: "1", paddingBottom: "18px" }}>
                    <p style={{ fontSize: "13.5px", color: "#1F2B4D", lineHeight: "1.55", margin: "5px 0 0", fontWeight: "600" }}>AXY creates or recommends the appropriate follow-up for the salesperson.
                    </p>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: "5px", fontFamily: "'Roboto Mono',monospace", fontSize: "8.5px", fontWeight: "700", letterSpacing: ".05em", textTransform: "uppercase", borderRadius: "6px", padding: "3px 8px", marginTop: "7px", color: "#1F2B4D", background: "#EEF1F7", border: "1px solid #D9E0EC" }}>Suggested by AXY
                    </span>
                  </div>
                </div>
                <div style={{ display: "flex", gap: "16px", alignItems: "flex-start", position: "relative" }}>
                  <div style={{ flexShrink: "0", display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <span style={{ width: "34px", height: "34px", borderRadius: "50%", background: "#32415C", color: "#fff", fontFamily: "'Roboto Mono',monospace", fontSize: "12px", fontWeight: "700", display: "flex", alignItems: "center", justifyContent: "center" }}>7
                    </span>
                    <span style={{ width: "2px", flex: "1", minHeight: "22px", background: "#D9E0EC", margin: "4px 0" }}></span>
                  </div>
                  <div style={{ flex: "1", paddingBottom: "18px" }}>
                    <p style={{ fontSize: "13.5px", color: "#1F2B4D", lineHeight: "1.55", margin: "5px 0 0", fontWeight: "600" }}>The customer can respond, arrange an appointment, confirm interest or continue toward reservation or purchase.
                    </p>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: "5px", fontFamily: "'Roboto Mono',monospace", fontSize: "8.5px", fontWeight: "700", letterSpacing: ".05em", textTransform: "uppercase", borderRadius: "6px", padding: "3px 8px", marginTop: "7px", color: "#7a4a2e", background: "#FBF3ED", border: "1px solid #F0DDD2" }}>Human-confirmed
                    </span>
                  </div>
                </div>
                <div style={{ display: "flex", gap: "16px", alignItems: "flex-start", position: "relative" }}>
                  <div style={{ flexShrink: "0", display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <span style={{ width: "34px", height: "34px", borderRadius: "50%", background: "#32415C", color: "#fff", fontFamily: "'Roboto Mono',monospace", fontSize: "12px", fontWeight: "700", display: "flex", alignItems: "center", justifyContent: "center" }}>8
                    </span>
                    <span style={{ width: "2px", flex: "1", minHeight: "22px", background: "#D9E0EC", margin: "4px 0" }}></span>
                  </div>
                  <div style={{ flex: "1", paddingBottom: "18px" }}>
                    <p style={{ fontSize: "13.5px", color: "#1F2B4D", lineHeight: "1.55", margin: "5px 0 0", fontWeight: "600" }}>Management sees the opportunity and the unavailable-product demand.
                    </p>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: "5px", fontFamily: "'Roboto Mono',monospace", fontSize: "8.5px", fontWeight: "700", letterSpacing: ".05em", textTransform: "uppercase", borderRadius: "6px", padding: "3px 8px", marginTop: "7px", color: "#1C6470", background: "#EAF6F6", border: "1px solid #CDE7E6" }}>Automatic when connected
                    </span>
                  </div>
                </div>
                <div style={{ display: "flex", gap: "16px", alignItems: "flex-start", position: "relative" }}>
                  <div style={{ flexShrink: "0", display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <span style={{ width: "34px", height: "34px", borderRadius: "50%", background: "#32415C", color: "#fff", fontFamily: "'Roboto Mono',monospace", fontSize: "12px", fontWeight: "700", display: "flex", alignItems: "center", justifyContent: "center" }}>9
                    </span>
                    <span style={{ width: "2px", flex: "1", minHeight: "22px", background: "#D9E0EC", margin: "4px 0" }}></span>
                  </div>
                  <div style={{ flex: "1", paddingBottom: "18px" }}>
                    <p style={{ fontSize: "13.5px", color: "#1F2B4D", lineHeight: "1.55", margin: "5px 0 0", fontWeight: "600" }}>The brand receives only the approved availability, order or aggregated interest context.
                    </p>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: "5px", fontFamily: "'Roboto Mono',monospace", fontSize: "8.5px", fontWeight: "700", letterSpacing: ".05em", textTransform: "uppercase", borderRadius: "6px", padding: "3px 8px", marginTop: "7px", color: "#8a5a20", background: "#FBF6EE", border: "1px solid #EFE1CC" }}>Subject to permission
                    </span>
                  </div>
                </div>
                <div style={{ display: "flex", gap: "16px", alignItems: "flex-start", position: "relative" }}>
                  <div style={{ flexShrink: "0", display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <span style={{ width: "34px", height: "34px", borderRadius: "50%", background: "#32415C", color: "#fff", fontFamily: "'Roboto Mono',monospace", fontSize: "12px", fontWeight: "700", display: "flex", alignItems: "center", justifyContent: "center" }}>10
                    </span>
                  </div>
                  <div style={{ flex: "1", paddingBottom: "0" }}>
                    <p style={{ fontSize: "13.5px", color: "#1F2B4D", lineHeight: "1.55", margin: "5px 0 0", fontWeight: "600" }}>After purchase, warranty activation keeps the product lifecycle connected.
                    </p>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: "5px", fontFamily: "'Roboto Mono',monospace", fontSize: "8.5px", fontWeight: "700", letterSpacing: ".05em", textTransform: "uppercase", borderRadius: "6px", padding: "3px 8px", marginTop: "7px", color: "#7a4a2e", background: "#FBF3ED", border: "1px solid #F0DDD2" }}>Human-confirmed
                    </span>
                  </div>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                <div style={{ borderRadius: "16px", overflow: "hidden", border: "1px solid #E4E8EF", boxShadow: "0 18px 40px rgba(31,43,77,.12)" }}>
                  <div style={{ position: "relative", aspectRatio: "16/10", background: "linear-gradient(160deg,#20304F,#121B34)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "12px" }}>
                    <div style={{ width: "58px", height: "58px", borderRadius: "50%", background: "rgba(255,255,255,.12)", border: "1px solid rgba(255,255,255,.28)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: "18px", paddingLeft: "4px" }}>&#9654;
                    </div>
                    <div style={{ fontSize: "13px", fontWeight: "700", color: "#fff", textAlign: "center", maxWidth: "260px" }}>End-to-end walkthrough: unavailable product &rarr; availability &rarr; follow-up &rarr; warranty
                    </div>
                  </div>
                </div>
                <div style={{ background: "#fff", border: "1px solid #E4E8EF", borderRadius: "12px", padding: "16px 18px" }}>
                  <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "9px", letterSpacing: ".1em", color: "#2C8C99", textTransform: "uppercase" }}>Transcript
                  </div>
                  <p style={{ fontSize: "12.5px", color: "#667085", lineHeight: "1.6", margin: "9px 0 0" }}>A customer likes a watch whose variant is out of stock locally. The salesperson requests availability from the connected manufacturer; the customer keeps it in their store relationship. When the response returns, AXY suggests a follow-up. The customer confirms interest, management sees the demand, the brand receives only approved context, and warranty activates after purchase.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ background: "#fff", padding: "70px 24px" }}>
          <div style={{ maxWidth: "1080px", margin: "0 auto" }}>
            <div style={{ maxWidth: "640px" }}>
              <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "10.5px", letterSpacing: ".14em", color: "#2C8C99", textTransform: "uppercase" }}>Two more connected flows
              </div>
              <h2 style={{ fontSize: "26px", fontWeight: "800", color: "#1F2B4D", lineHeight: "1.18", margin: "12px 0 0" }}>The same model, different work.
              </h2>
            </div>
            <div className="how-flows" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginTop: "26px" }}>
              <div style={{ background: "#F9FAFB", border: "1px solid #E4E8EF", borderRadius: "16px", padding: "22px" }}>
                <div style={{ fontSize: "15px", fontWeight: "800", color: "#1F2B4D" }}>Product update
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap", marginTop: "16px" }}>
                  <span style={{ fontSize: "11.5px", fontWeight: "600", color: "#1C6470", background: "#EAF6F6", border: "1px solid #CDE7E6", borderRadius: "8px", padding: "7px 10px" }}>Brand publishes
                  </span>
                  <span style={{ color: "#2C8C99", fontWeight: "700" }}>&rarr;
                  </span>
                  <span style={{ fontSize: "11.5px", fontWeight: "600", color: "#1C6470", background: "#EAF6F6", border: "1px solid #CDE7E6", borderRadius: "8px", padding: "7px 10px" }}>Retailer reviews
                  </span>
                  <span style={{ color: "#2C8C99", fontWeight: "700" }}>&rarr;
                  </span>
                  <span style={{ fontSize: "11.5px", fontWeight: "600", color: "#1C6470", background: "#EAF6F6", border: "1px solid #CDE7E6", borderRadius: "8px", padding: "7px 10px" }}>Approved product info updates
                  </span>
                  <span style={{ color: "#2C8C99", fontWeight: "700" }}>&rarr;
                  </span>
                  <span style={{ fontSize: "11.5px", fontWeight: "600", color: "#1C6470", background: "#EAF6F6", border: "1px solid #CDE7E6", borderRadius: "8px", padding: "7px 10px" }}>Sales team uses latest catalogue
                  </span>
                </div>
              </div>
              <div style={{ background: "#F9FAFB", border: "1px solid #E4E8EF", borderRadius: "16px", padding: "22px" }}>
                <div style={{ fontSize: "15px", fontWeight: "800", color: "#1F2B4D" }}>Warranty lifecycle
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap", marginTop: "16px" }}>
                  <span style={{ fontSize: "11.5px", fontWeight: "600", color: "#7a4a2e", background: "#FBF3ED", border: "1px solid #F0DDD2", borderRadius: "8px", padding: "7px 10px" }}>Retailer activates
                  </span>
                  <span style={{ color: "#C98B63", fontWeight: "700" }}>&rarr;
                  </span>
                  <span style={{ fontSize: "11.5px", fontWeight: "600", color: "#7a4a2e", background: "#FBF3ED", border: "1px solid #F0DDD2", borderRadius: "8px", padding: "7px 10px" }}>Customer receives a digital record
                  </span>
                  <span style={{ color: "#C98B63", fontWeight: "700" }}>&rarr;
                  </span>
                  <span style={{ fontSize: "11.5px", fontWeight: "600", color: "#7a4a2e", background: "#FBF3ED", border: "1px solid #F0DDD2", borderRadius: "8px", padding: "7px 10px" }}>Brand receives approved registration
                  </span>
                  <span style={{ color: "#C98B63", fontWeight: "700" }}>&rarr;
                  </span>
                  <span style={{ fontSize: "11.5px", fontWeight: "600", color: "#7a4a2e", background: "#FBF3ED", border: "1px solid #F0DDD2", borderRadius: "8px", padding: "7px 10px" }}>Service &amp; extension stay connected
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ background: "#F9FAFB", padding: "70px 24px" }}>
          <div style={{ maxWidth: "1080px", margin: "0 auto" }}>
            <div style={{ maxWidth: "640px" }}>
              <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "10.5px", letterSpacing: ".14em", color: "#2C8C99", textTransform: "uppercase" }}>How to begin
              </div>
              <h2 style={{ fontSize: "28px", fontWeight: "800", color: "#1F2B4D", lineHeight: "1.16", margin: "12px 0 0" }}>Start with one useful workflow. Expand when it creates value.
              </h2>
            </div>
            <div className="how-begin" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "14px", marginTop: "28px" }}>
              <div style={{ background: "#fff", border: "1px solid #E4E8EF", borderRadius: "14px", padding: "20px" }}>
                <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "10px", color: "#2C8C99" }}>01
                </div>
                <div style={{ fontSize: "15px", fontWeight: "800", color: "#1F2B4D", marginTop: "8px" }}>Independent retailer
                </div>
                <p style={{ fontSize: "12.5px", color: "#667085", lineHeight: "1.6", margin: "8px 0 0" }}>Set up the company, location, users and essential product information. Begin with sales visits, customer follow-ups or the Customer App.
                </p>
              </div>
              <div style={{ background: "#fff", border: "1px solid #E4E8EF", borderRadius: "14px", padding: "20px" }}>
                <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "10px", color: "#2C8C99" }}>02
                </div>
                <div style={{ fontSize: "15px", fontWeight: "800", color: "#1F2B4D", marginTop: "8px" }}>Multi-location retailer
                </div>
                <p style={{ fontSize: "12.5px", color: "#667085", lineHeight: "1.6", margin: "8px 0 0" }}>Connect locations, teams, stock context and management visibility.
                </p>
              </div>
              <div style={{ background: "#fff", border: "1px solid #E4E8EF", borderRadius: "14px", padding: "20px" }}>
                <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "10px", color: "#2C8C99" }}>03
                </div>
                <div style={{ fontSize: "15px", fontWeight: "800", color: "#1F2B4D", marginTop: "8px" }}>Brand or manufacturer
                </div>
                <p style={{ fontSize: "12.5px", color: "#667085", lineHeight: "1.6", margin: "8px 0 0" }}>Import or connect a catalogue, invite selected retail partners and begin with product updates, availability, warranty or another controlled workflow.
                </p>
              </div>
            </div>
            <p style={{ fontSize: "13px", color: "#667085", lineHeight: "1.6", margin: "18px 0 0", maxWidth: "720px" }}>Deeper POS, ERP, CRM, inventory or product-system connections can be added according to the business need.
            </p>
            <div style={{ display: "flex", gap: "12px", marginTop: "20px", flexWrap: "wrap" }}>
              <a className="hv55" href="/book-a-walkthrough" style={{ display: "inline-flex", padding: "13px 22px", background: "#32415C", color: "#fff", borderRadius: "10px", fontSize: "14px", fontWeight: "700" }}>Get guided setup
              </a>
              <a className="hv56" href="/create-account" style={{ display: "inline-flex", padding: "13px 22px", border: "1.5px solid #32415C", color: "#32415C", borderRadius: "10px", fontSize: "14px", fontWeight: "600" }}>Create free account
              </a>
            </div>
          </div>
        </div>
        <div style={{ background: "#fff", padding: "70px 24px" }}>
          <div style={{ maxWidth: "880px", margin: "0 auto" }}>
            <div style={{ maxWidth: "640px" }}>
              <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "10.5px", letterSpacing: ".14em", color: "#2C8C99", textTransform: "uppercase" }}>How AXY works in practice
              </div>
              <h2 style={{ fontSize: "28px", fontWeight: "800", color: "#1F2B4D", lineHeight: "1.16", margin: "12px 0 0" }}>Clear answers before you begin.
              </h2>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginTop: "28px" }}>
              <div style={{ background: "#fff", border: "1px solid #E4E8EF", borderRadius: "14px", padding: "20px 22px" }}>
                <div style={{ fontSize: "15px", fontWeight: "800", color: "#1F2B4D" }}>What is AXY?
                </div>
                <p style={{ fontSize: "13.5px", color: "#667085", lineHeight: "1.62", margin: "9px 0 0" }}>AXY is a connected retail context and workflow platform that links sales activity, customers, products, stock, business operations and approved partner workflows.
                </p>
              </div>
              <div style={{ background: "#fff", border: "1px solid #E4E8EF", borderRadius: "14px", padding: "20px 22px" }}>
                <div style={{ fontSize: "15px", fontWeight: "800", color: "#1F2B4D" }}>How much additional work does AXY create for salespeople?
                </div>
                <p style={{ fontSize: "13.5px", color: "#667085", lineHeight: "1.62", margin: "9px 0 0" }}>AXY is designed to capture useful context through quick actions inside the salesperson’s normal mobile workflow. The exact input depends on the workflow and company setup.
                </p>
              </div>
              <div style={{ background: "#fff", border: "1px solid #E4E8EF", borderRadius: "14px", padding: "20px 22px" }}>
                <div style={{ fontSize: "15px", fontWeight: "800", color: "#1F2B4D" }}>Does AXY replace our POS, ERP or CRM?
                </div>
                <p style={{ fontSize: "13.5px", color: "#667085", lineHeight: "1.62", margin: "9px 0 0" }}>Not necessarily. AXY can work independently for selected workflows or connect existing business systems as the retail sales, customer and partner-collaboration layer.
                </p>
              </div>
              <div style={{ background: "#fff", border: "1px solid #E4E8EF", borderRadius: "14px", padding: "20px 22px" }}>
                <div style={{ fontSize: "15px", fontWeight: "800", color: "#1F2B4D" }}>Can AXY work before an integration is completed?
                </div>
                <p style={{ fontSize: "13.5px", color: "#667085", lineHeight: "1.62", margin: "9px 0 0" }}>Yes. Retailers and brands can begin with structured imports and selected workflows before adding deeper system connections.
                </p>
              </div>
              <div style={{ background: "#fff", border: "1px solid #E4E8EF", borderRadius: "14px", padding: "20px 22px" }}>
                <div style={{ fontSize: "15px", fontWeight: "800", color: "#1F2B4D" }}>What can brand partners see?
                </div>
                <p style={{ fontSize: "13.5px", color: "#667085", lineHeight: "1.62", margin: "9px 0 0" }}>A brand sees only the workflow information or aggregated insight approved for that partner relationship. It does not automatically receive retailer customer databases, internal notes or protected commercial records.
                </p>
              </div>
              <div style={{ background: "#fff", border: "1px solid #E4E8EF", borderRadius: "14px", padding: "20px 22px" }}>
                <div style={{ fontSize: "15px", fontWeight: "800", color: "#1F2B4D" }}>How does AXY keep company information separated?
                </div>
                <p style={{ fontSize: "13.5px", color: "#667085", lineHeight: "1.62", margin: "9px 0 0" }}>Business-unit boundaries, partner permissions and workflow purposes determine which records remain private and which information may be exchanged.
                </p>
              </div>
              <div style={{ background: "#fff", border: "1px solid #E4E8EF", borderRadius: "14px", padding: "20px 22px" }}>
                <div style={{ fontSize: "15px", fontWeight: "800", color: "#1F2B4D" }}>Can AXY work across multiple locations?
                </div>
                <p style={{ fontSize: "13.5px", color: "#667085", lineHeight: "1.62", margin: "9px 0 0" }}>Yes. AXY is designed to connect activity, products, customers, teams and stock context across configured stores and business units.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div style={{ position: "relative", overflow: "hidden", background: "linear-gradient(135deg,#1F2B4D,#32415C 58%,#2C6570)", padding: "76px 24px" }}>
          <div style={{ position: "absolute", bottom: "-120px", right: "-60px", width: "420px", height: "320px", background: "radial-gradient(circle,rgba(51,214,164,.12),transparent 70%)" }}></div>
          <div style={{ position: "relative", maxWidth: "760px", margin: "0 auto", textAlign: "center" }}>
            <h2 style={{ fontSize: "29px", fontWeight: "800", color: "#fff", lineHeight: "1.14" }}>See how AXY would connect your first workflow.
            </h2>
            <p style={{ fontSize: "14.5px", color: "#C9D2E4", lineHeight: "1.6", margin: "14px 0 0" }}>Review your store activity, customer journey, product data, partner relationships and existing systems with our team. We will identify the first workflow worth connecting and explain what each participant will see.
            </p>
            <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap", marginTop: "24px" }}>
              <a className="hv57" href="/book-a-walkthrough" style={{ display: "inline-flex", padding: "14px 24px", background: "#fff", color: "#1F2B4D", borderRadius: "10px", fontSize: "14.5px", fontWeight: "700" }}>Get guided setup
              </a>
              <a className="hv58" href="/product" style={{ display: "inline-flex", padding: "14px 24px", border: "1.5px solid rgba(255,255,255,.5)", color: "#fff", borderRadius: "10px", fontSize: "14.5px", fontWeight: "600" }}>Explore the full platform
              </a>
            </div>
            <div style={{ display: "flex", gap: "18px", justifyContent: "center", flexWrap: "wrap", marginTop: "18px" }}>
              <a className="hv59" href="/for-retailers" style={{ fontSize: "13px", color: "#9fe0d8", textDecoration: "underline" }}>See AXY for retailers
              </a>
              <a className="hv60" href="/for-brands" style={{ fontSize: "13px", color: "#9fe0d8", textDecoration: "underline" }}>See AXY for brands
              </a>
              <a className="hv61" href="/integrations" style={{ fontSize: "13px", color: "#9fe0d8", textDecoration: "underline" }}>Explore integrations
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
