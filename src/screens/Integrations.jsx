import React from 'react';
import { css } from '../lib/css.js';

export default function Integrations(v) {
  return (
    <>
      <div data-screen-label="Integrations">
        <div style={{ position: "relative", overflow: "hidden", background: "linear-gradient(160deg,#F4F7FB,#EAF0F7)", padding: "70px 24px 60px" }}>
          <div style={{ position: "absolute", top: "-90px", right: "-60px", width: "420px", height: "320px", background: "radial-gradient(circle,rgba(44,140,153,.14),transparent 70%)" }}></div>
          <div style={{ position: "relative", maxWidth: "1120px", margin: "0 auto" }}>
            <div style={{ maxWidth: "760px" }}>
              <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "10.5px", letterSpacing: ".14em", color: "#2C8C99", textTransform: "uppercase" }}>Retail integrations
              </div>
              <h1 style={{ fontSize: "37px", fontWeight: "800", color: "#1F2B4D", lineHeight: "1.13", letterSpacing: "-.018em", margin: "14px 0 0" }}>Connect your retail systems and partners — without losing control of your data.
              </h1>
              <p style={{ fontSize: "14.5px", color: "#667085", lineHeight: "1.6", margin: "13px 0 0", maxWidth: "600px" }}>AXY connects POS, ERP, CRM, inventory, product, messaging and analytics systems with your retail network. Each business unit controls what stays private, what is shared and what may be used as aggregated or anonymised insight.
              </p>
              <div style={{ display: "flex", gap: "12px", marginTop: "24px", flexWrap: "wrap" }}>
                <a className="hv116" href="/book-a-walkthrough#schedule" style={{ display: "inline-flex", padding: "13px 22px", background: "#32415C", color: "#fff", borderRadius: "10px", fontSize: "14px", fontWeight: "700" }}>Book an integration call
                </a>{' '}
                <a className="hv117" href="/book-a-walkthrough#schedule" style={{ display: "inline-flex", padding: "13px 22px", border: "1.5px solid #32415C", color: "#32415C", borderRadius: "10px", fontSize: "14px", fontWeight: "600" }}>Book an integration call
                </a>
              </div>
              <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", marginTop: "18px", background: "#fff", border: "1px solid #D9E0EC", borderRadius: "20px", padding: "7px 14px" }}>
                <svg viewBox="0 0 20 20" width="14" height="14" fill="none" stroke="#2C8C99" strokeWidth="1.7">
                  <path d="M10 2.5l6 2.2v4.3c0 3.6-2.5 6.6-6 7.5-3.5-.9-6-3.9-6-7.5V4.7z"></path>
                </svg>
                <span style={{ fontSize: "12.5px", color: "#3a4358" }}>Your systems remain yours. Your business data remains under your control.
                </span>
              </div>
            </div>
            <div role="img" aria-label="AXY retail integration layer connecting POS, ERP, CRM, inventory and partner systems through permission-controlled data flows." style={{ marginTop: "30px", background: "#fff", border: "1px solid #D9E0EC", borderRadius: "18px", padding: "20px", boxShadow: "0 18px 44px rgba(31,43,77,.1)" }}>
              <div className="int-arch" style={{ display: "flex", gap: "12px", alignItems: "stretch", flexWrap: "wrap" }}>
                <div style={{ flex: "1", minWidth: "150px", background: "#F7F9FC", border: "1px solid #E1E7F0", borderRadius: "14px", padding: "14px" }}>
                  <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "8.5px", letterSpacing: ".1em", color: "#667085", textTransform: "uppercase", marginBottom: "9px" }}>Retail business systems
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                    <div style={{ background: "#fff", border: "1px solid #E1E7F0", borderRadius: "8px", padding: "7px 10px", fontSize: "11.5px", fontWeight: "600", color: "#1F2B4D" }}>POS
                    </div>
                    <div style={{ background: "#fff", border: "1px solid #E1E7F0", borderRadius: "8px", padding: "7px 10px", fontSize: "11.5px", fontWeight: "600", color: "#1F2B4D" }}>ERP
                    </div>
                    <div style={{ background: "#fff", border: "1px solid #E1E7F0", borderRadius: "8px", padding: "7px 10px", fontSize: "11.5px", fontWeight: "600", color: "#1F2B4D" }}>CRM
                    </div>
                    <div style={{ background: "#fff", border: "1px solid #E1E7F0", borderRadius: "8px", padding: "7px 10px", fontSize: "11.5px", fontWeight: "600", color: "#1F2B4D" }}>Product database
                    </div>
                    <div style={{ background: "#fff", border: "1px solid #E1E7F0", borderRadius: "8px", padding: "7px 10px", fontSize: "11.5px", fontWeight: "600", color: "#1F2B4D" }}>Inventory
                    </div>
                    <div style={{ background: "#fff", border: "1px solid #E1E7F0", borderRadius: "8px", padding: "7px 10px", fontSize: "11.5px", fontWeight: "600", color: "#1F2B4D" }}>Messaging
                    </div>
                  </div>
                </div>
                <div className="int-arrow" style={{ flex: "0 0 18px", display: "flex", alignItems: "center", justifyContent: "center", color: "#B7C2D6", fontSize: "18px" }}>→
                </div>
                <div style={{ flex: "1.2", minWidth: "180px", background: "linear-gradient(160deg,#26324f,#161f38)", borderRadius: "14px", padding: "16px", position: "relative", overflow: "hidden" }}>
                  <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "8.5px", letterSpacing: ".1em", color: "#7fd4de", textTransform: "uppercase", marginBottom: "9px" }}>AXY permission layer
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                    <div style={{ background: "rgba(255,255,255,.08)", border: "1px solid rgba(255,255,255,.16)", borderRadius: "8px", padding: "7px 10px", fontSize: "11.5px", fontWeight: "600", color: "#EAF0FB" }}>Identity & permissions
                    </div>
                    <div style={{ background: "rgba(255,255,255,.08)", border: "1px solid rgba(255,255,255,.16)", borderRadius: "8px", padding: "7px 10px", fontSize: "11.5px", fontWeight: "600", color: "#EAF0FB" }}>Data standardisation
                    </div>
                    <div style={{ background: "rgba(255,255,255,.08)", border: "1px solid rgba(255,255,255,.16)", borderRadius: "8px", padding: "7px 10px", fontSize: "11.5px", fontWeight: "600", color: "#EAF0FB" }}>Workflow coordination
                    </div>
                    <div style={{ background: "rgba(255,255,255,.08)", border: "1px solid rgba(255,255,255,.16)", borderRadius: "8px", padding: "7px 10px", fontSize: "11.5px", fontWeight: "600", color: "#EAF0FB" }}>Aggregation & anonymisation
                    </div>
                    <div style={{ background: "rgba(255,255,255,.08)", border: "1px solid rgba(255,255,255,.16)", borderRadius: "8px", padding: "7px 10px", fontSize: "11.5px", fontWeight: "600", color: "#EAF0FB" }}>Integration monitoring
                    </div>
                  </div>
                  <div style={{ position: "absolute", bottom: "-30px", right: "-20px", width: "120px", height: "120px", background: "radial-gradient(circle,rgba(51,214,164,.18),transparent 70%)" }}></div>
                </div>
                <div className="int-arrow" style={{ flex: "0 0 18px", display: "flex", alignItems: "center", justifyContent: "center", color: "#B7C2D6", fontSize: "18px" }}>→
                </div>
                <div style={{ flex: "1", minWidth: "150px", background: "#F1F9F8", border: "1px solid #CDE7E6", borderRadius: "14px", padding: "14px" }}>
                  <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "8.5px", letterSpacing: ".1em", color: "#2C8C99", textTransform: "uppercase", marginBottom: "9px" }}>Connected experiences & partners
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                    <div style={{ background: "#fff", border: "1px solid #CDE7E6", borderRadius: "8px", padding: "7px 10px", fontSize: "11.5px", fontWeight: "600", color: "#1F2B4D" }}>Sales App
                    </div>
                    <div style={{ background: "#fff", border: "1px solid #CDE7E6", borderRadius: "8px", padding: "7px 10px", fontSize: "11.5px", fontWeight: "600", color: "#1F2B4D" }}>Back Office
                    </div>
                    <div style={{ background: "#fff", border: "1px solid #CDE7E6", borderRadius: "8px", padding: "7px 10px", fontSize: "11.5px", fontWeight: "600", color: "#1F2B4D" }}>Customer App
                    </div>
                    <div style={{ background: "#fff", border: "1px solid #CDE7E6", borderRadius: "8px", padding: "7px 10px", fontSize: "11.5px", fontWeight: "600", color: "#1F2B4D" }}>Retail partners
                    </div>
                    <div style={{ background: "#fff", border: "1px solid #CDE7E6", borderRadius: "8px", padding: "7px 10px", fontSize: "11.5px", fontWeight: "600", color: "#1F2B4D" }}>Manufacturers & brands
                    </div>
                    <div style={{ background: "#fff", border: "1px solid #CDE7E6", borderRadius: "8px", padding: "7px 10px", fontSize: "11.5px", fontWeight: "600", color: "#1F2B4D" }}>Analytics
                    </div>
                  </div>
                </div>
              </div>
              <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", marginTop: "16px", paddingTop: "14px", borderTop: "1px solid #EEF1F6" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "7px" }}>
                  <span style={{ width: "22px", height: "0", borderTop: "2px dashed #9aa7bd" }}></span>
                  <span style={{ fontSize: "11px", color: "#667085" }}>Private business-unit data
                  </span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "7px" }}>
                  <span style={{ width: "22px", height: "2px", background: "#2C8C99", borderRadius: "2px" }}></span>
                  <span style={{ fontSize: "11px", color: "#667085" }}>Approved shared information
                  </span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "7px" }}>
                  <span style={{ width: "22px", height: "2px", background: "#33D6A4", borderRadius: "2px" }}></span>
                  <span style={{ fontSize: "11px", color: "#667085" }}>Aggregated / anonymised signals
                  </span>
                </div>
              </div>
              <p style={{ fontSize: "12px", color: "#8a94a6", lineHeight: "1.55", margin: "12px 0 0" }}>Systems on the left keep their data. The AXY permission layer standardises, coordinates and governs each flow. Only approved information — or aggregated, anonymised signals — reaches connected experiences and partners on the right. No single flow exposes everything to everyone.
              </p>
            </div>
          </div>
        </div>
        <div style={{ background: "#fff", padding: "74px 24px" }}>
          <div style={{ maxWidth: "1120px", margin: "0 auto" }}>
            <div style={{ maxWidth: "720px" }}>
              <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "10.5px", letterSpacing: ".14em", color: "#2C8C99", textTransform: "uppercase" }}>The connected layer
              </div>
              <h2 style={{ fontSize: "28px", fontWeight: "800", color: "#1F2B4D", lineHeight: "1.16", letterSpacing: "-.01em", margin: "12px 0 0" }}>One integration layer between your systems, teams and retail partners.
              </h2>
              <p style={{ fontSize: "14.5px", color: "#667085", lineHeight: "1.6", margin: "13px 0 0", maxWidth: "600px" }}>AXY standardises information and coordinates workflows across connected systems without removing ownership from the company that provided the data.
              </p>
            </div>
            <div className="int-three" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "14px", marginTop: "30px" }}>
              <div style={{ background: "#F8FAFC", border: "1px solid #E4EAF1", borderRadius: "16px", padding: "22px" }}>
                <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "10px", color: "#2C8C99" }}>01
                </div>
                <div style={{ fontSize: "15.5px", fontWeight: "800", color: "#1F2B4D", marginTop: "8px" }}>Connect systems
                </div>
                <p style={{ fontSize: "12.5px", color: "#667085", lineHeight: "1.55", margin: "8px 0 0" }}>Use existing product, customer, stock, order and sales information inside AXY instead of re-entering it manually.
                </p>
              </div>
              <div style={{ background: "#F8FAFC", border: "1px solid #E4EAF1", borderRadius: "16px", padding: "22px" }}>
                <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "10px", color: "#2C8C99" }}>02
                </div>
                <div style={{ fontSize: "15.5px", fontWeight: "800", color: "#1F2B4D", marginTop: "8px" }}>Coordinate partners
                </div>
                <p style={{ fontSize: "12.5px", color: "#667085", lineHeight: "1.55", margin: "8px 0 0" }}>Exchange approved catalogues, availability, orders, warranty actions and business information through structured workflows.
                </p>
              </div>
              <div style={{ background: "#F8FAFC", border: "1px solid #E4EAF1", borderRadius: "16px", padding: "22px" }}>
                <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "10px", color: "#2C8C99" }}>03
                </div>
                <div style={{ fontSize: "15.5px", fontWeight: "800", color: "#1F2B4D", marginTop: "8px" }}>Protect ownership
                </div>
                <p style={{ fontSize: "12.5px", color: "#667085", lineHeight: "1.55", margin: "8px 0 0" }}>Each business unit controls its records and partner permissions. Protected information is never automatically exposed to another company.
                </p>
              </div>
            </div>
            <div style={{ display: "flex", gap: "10px", alignItems: "flex-start", marginTop: "20px", background: "#fff", border: "1px solid #D9E0EC", borderLeft: "3px solid #2C8C99", borderRadius: "0 12px 12px 0", padding: "14px 16px" }}>
              <span style={{ fontSize: "13px", color: "#1F2B4D", lineHeight: "1.55" }}>
                <strong>Connection does not mean unrestricted access.
                </strong>{' '}Every data flow follows an approved purpose and permission model.
              </span>
            </div>
          </div>
        </div>
        <div style={{ background: "#F9FAFB", padding: "74px 24px" }}>
          <div style={{ maxWidth: "1120px", margin: "0 auto" }}>
            <div style={{ maxWidth: "720px" }}>
              <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "10.5px", letterSpacing: ".14em", color: "#2C8C99", textTransform: "uppercase" }}>System categories
              </div>
              <h2 style={{ fontSize: "28px", fontWeight: "800", color: "#1F2B4D", lineHeight: "1.16", letterSpacing: "-.01em", margin: "12px 0 0" }}>Connect the systems already running your business.
              </h2>
              <p style={{ fontSize: "14.5px", color: "#667085", lineHeight: "1.6", margin: "13px 0 0", maxWidth: "600px" }}>AXY can work with the core systems used across retail operations. The precise direction, frequency and scope of each data flow are agreed during setup.
              </p>
            </div>
            <div className="int-two" style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: "14px", marginTop: "30px" }}>
              <div style={{ background: "#fff", border: "1px solid #E4E8EF", borderRadius: "14px", padding: "18px" }}>
                <div style={{ fontSize: "15px", fontWeight: "800", color: "#1F2B4D" }}>POS systems
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginTop: "11px" }}>
                  <div style={{ display: "flex", gap: "8px", alignItems: "flex-start" }}>
                    <span style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "8px", color: "#8a94a6", background: "#F2F5F9", borderRadius: "5px", padding: "3px 6px", whiteSpace: "nowrap" }}>IN →
                    </span>
                    <span style={{ fontSize: "12px", color: "#3a4358", lineHeight: "1.45" }}>Completed transactions, sales outcomes and product references
                    </span>
                  </div>
                  <div style={{ display: "flex", gap: "8px", alignItems: "flex-start" }}>
                    <span style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "8px", color: "#2C8C99", background: "#EAF6F6", borderRadius: "5px", padding: "3px 6px", whiteSpace: "nowrap" }}>← OUT
                    </span>
                    <span style={{ fontSize: "12px", color: "#3a4358", lineHeight: "1.45" }}>Visit / opportunity match, sales context back
                    </span>
                  </div>
                </div>
                <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "9px", color: "#9aa3b2", marginTop: "11px", letterSpacing: ".04em" }}>REAL-TIME OR SCHEDULED
                </div>
              </div>
              <div style={{ background: "#fff", border: "1px solid #E4E8EF", borderRadius: "14px", padding: "18px" }}>
                <div style={{ fontSize: "15px", fontWeight: "800", color: "#1F2B4D" }}>ERP & accounting
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginTop: "11px" }}>
                  <div style={{ display: "flex", gap: "8px", alignItems: "flex-start" }}>
                    <span style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "8px", color: "#8a94a6", background: "#F2F5F9", borderRadius: "5px", padding: "3px 6px", whiteSpace: "nowrap" }}>IN →
                    </span>
                    <span style={{ fontSize: "12px", color: "#3a4358", lineHeight: "1.45" }}>Approved product, order, invoice & operational records
                    </span>
                  </div>
                  <div style={{ display: "flex", gap: "8px", alignItems: "flex-start" }}>
                    <span style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "8px", color: "#2C8C99", background: "#EAF6F6", borderRadius: "5px", padding: "3px 6px", whiteSpace: "nowrap" }}>← OUT
                    </span>
                    <span style={{ fontSize: "12px", color: "#3a4358", lineHeight: "1.45" }}>Structured records, no change of system of record
                    </span>
                  </div>
                </div>
                <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "9px", color: "#9aa3b2", marginTop: "11px", letterSpacing: ".04em" }}>SCHEDULED
                </div>
              </div>
              <div style={{ background: "#fff", border: "1px solid #E4E8EF", borderRadius: "14px", padding: "18px" }}>
                <div style={{ fontSize: "15px", fontWeight: "800", color: "#1F2B4D" }}>CRM systems
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginTop: "11px" }}>
                  <div style={{ display: "flex", gap: "8px", alignItems: "flex-start" }}>
                    <span style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "8px", color: "#8a94a6", background: "#F2F5F9", borderRadius: "5px", padding: "3px 6px", whiteSpace: "nowrap" }}>IN →
                    </span>
                    <span style={{ fontSize: "12px", color: "#3a4358", lineHeight: "1.45" }}>Customer records, consent status, commercial activity
                    </span>
                  </div>
                  <div style={{ display: "flex", gap: "8px", alignItems: "flex-start" }}>
                    <span style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "8px", color: "#2C8C99", background: "#EAF6F6", borderRadius: "5px", padding: "3px 6px", whiteSpace: "nowrap" }}>← OUT
                    </span>
                    <span style={{ fontSize: "12px", color: "#3a4358", lineHeight: "1.45" }}>In-store visit & product-interest context added
                    </span>
                  </div>
                </div>
                <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "9px", color: "#9aa3b2", marginTop: "11px", letterSpacing: ".04em" }}>REAL-TIME OR SCHEDULED
                </div>
              </div>
              <div style={{ background: "#fff", border: "1px solid #E4E8EF", borderRadius: "14px", padding: "18px" }}>
                <div style={{ fontSize: "15px", fontWeight: "800", color: "#1F2B4D" }}>Product & catalogue
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginTop: "11px" }}>
                  <div style={{ display: "flex", gap: "8px", alignItems: "flex-start" }}>
                    <span style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "8px", color: "#8a94a6", background: "#F2F5F9", borderRadius: "5px", padding: "3px 6px", whiteSpace: "nowrap" }}>IN →
                    </span>
                    <span style={{ fontSize: "12px", color: "#3a4358", lineHeight: "1.45" }}>Product references, attributes, images, variants, prices
                    </span>
                  </div>
                  <div style={{ display: "flex", gap: "8px", alignItems: "flex-start" }}>
                    <span style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "8px", color: "#2C8C99", background: "#EAF6F6", borderRadius: "5px", padding: "3px 6px", whiteSpace: "nowrap" }}>← OUT
                    </span>
                    <span style={{ fontSize: "12px", color: "#3a4358", lineHeight: "1.45" }}>Standardised catalogue structure
                    </span>
                  </div>
                </div>
                <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "9px", color: "#9aa3b2", marginTop: "11px", letterSpacing: ".04em" }}>IMPORTED OR SCHEDULED
                </div>
              </div>
              <div style={{ background: "#fff", border: "1px solid #E4E8EF", borderRadius: "14px", padding: "18px" }}>
                <div style={{ fontSize: "15px", fontWeight: "800", color: "#1F2B4D" }}>Inventory systems
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginTop: "11px" }}>
                  <div style={{ display: "flex", gap: "8px", alignItems: "flex-start" }}>
                    <span style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "8px", color: "#8a94a6", background: "#F2F5F9", borderRadius: "5px", padding: "3px 6px", whiteSpace: "nowrap" }}>IN →
                    </span>
                    <span style={{ fontSize: "12px", color: "#3a4358", lineHeight: "1.45" }}>Location-level stock & availability
                    </span>
                  </div>
                  <div style={{ display: "flex", gap: "8px", alignItems: "flex-start" }}>
                    <span style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "8px", color: "#2C8C99", background: "#EAF6F6", borderRadius: "5px", padding: "3px 6px", whiteSpace: "nowrap" }}>← OUT
                    </span>
                    <span style={{ fontSize: "12px", color: "#3a4358", lineHeight: "1.45" }}>Support for sales, transfers, stock requests
                    </span>
                  </div>
                </div>
                <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "9px", color: "#9aa3b2", marginTop: "11px", letterSpacing: ".04em" }}>REAL-TIME OR SCHEDULED
                </div>
              </div>
              <div style={{ background: "#fff", border: "1px solid #E4E8EF", borderRadius: "14px", padding: "18px" }}>
                <div style={{ fontSize: "15px", fontWeight: "800", color: "#1F2B4D" }}>E-commerce platforms
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginTop: "11px" }}>
                  <div style={{ display: "flex", gap: "8px", alignItems: "flex-start" }}>
                    <span style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "8px", color: "#8a94a6", background: "#F2F5F9", borderRadius: "5px", padding: "3px 6px", whiteSpace: "nowrap" }}>IN →
                    </span>
                    <span style={{ fontSize: "12px", color: "#3a4358", lineHeight: "1.45" }}>Approved product, customer & order context
                    </span>
                  </div>
                  <div style={{ display: "flex", gap: "8px", alignItems: "flex-start" }}>
                    <span style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "8px", color: "#2C8C99", background: "#EAF6F6", borderRadius: "5px", padding: "3px 6px", whiteSpace: "nowrap" }}>← OUT
                    </span>
                    <span style={{ fontSize: "12px", color: "#3a4358", lineHeight: "1.45" }}>Connected online + physical journeys
                    </span>
                  </div>
                </div>
                <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "9px", color: "#9aa3b2", marginTop: "11px", letterSpacing: ".04em" }}>SCHEDULED OR CUSTOM
                </div>
              </div>
              <div style={{ background: "#fff", border: "1px solid #E4E8EF", borderRadius: "14px", padding: "18px" }}>
                <div style={{ fontSize: "15px", fontWeight: "800", color: "#1F2B4D" }}>Messaging platforms
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginTop: "11px" }}>
                  <div style={{ display: "flex", gap: "8px", alignItems: "flex-start" }}>
                    <span style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "8px", color: "#8a94a6", background: "#F2F5F9", borderRadius: "5px", padding: "3px 6px", whiteSpace: "nowrap" }}>IN →
                    </span>
                    <span style={{ fontSize: "12px", color: "#3a4358", lineHeight: "1.45" }}>Customer communication threads
                    </span>
                  </div>
                  <div style={{ display: "flex", gap: "8px", alignItems: "flex-start" }}>
                    <span style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "8px", color: "#2C8C99", background: "#EAF6F6", borderRadius: "5px", padding: "3px 6px", whiteSpace: "nowrap" }}>← OUT
                    </span>
                    <span style={{ fontSize: "12px", color: "#3a4358", lineHeight: "1.45" }}>Linked to customer, visit, ticket or follow-up
                    </span>
                  </div>
                </div>
                <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "9px", color: "#9aa3b2", marginTop: "11px", letterSpacing: ".04em" }}>REAL-TIME
                </div>
              </div>
              <div style={{ background: "#fff", border: "1px solid #E4E8EF", borderRadius: "14px", padding: "18px" }}>
                <div style={{ fontSize: "15px", fontWeight: "800", color: "#1F2B4D" }}>Analytics & BI
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginTop: "11px" }}>
                  <div style={{ display: "flex", gap: "8px", alignItems: "flex-start" }}>
                    <span style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "8px", color: "#8a94a6", background: "#F2F5F9", borderRadius: "5px", padding: "3px 6px", whiteSpace: "nowrap" }}>IN →
                    </span>
                    <span style={{ fontSize: "12px", color: "#3a4358", lineHeight: "1.45" }}>Structured operational activity
                    </span>
                  </div>
                  <div style={{ display: "flex", gap: "8px", alignItems: "flex-start" }}>
                    <span style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "8px", color: "#2C8C99", background: "#EAF6F6", borderRadius: "5px", padding: "3px 6px", whiteSpace: "nowrap" }}>← OUT
                    </span>
                    <span style={{ fontSize: "12px", color: "#3a4358", lineHeight: "1.45" }}>Export / sync into existing reporting
                    </span>
                  </div>
                </div>
                <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "9px", color: "#9aa3b2", marginTop: "11px", letterSpacing: ".04em" }}>SCHEDULED OR EXPORT
                </div>
              </div>
            </div>
            <p style={{ fontSize: "12.5px", color: "#8a94a6", marginTop: "16px" }}>Connection direction, frequency and scope are confirmed per system during setup. Not every category ships with a ready-made native connector — see integration status below.
            </p>
          </div>
        </div>
        <div style={{ background: "#fff", padding: "74px 24px" }}>
          <div style={{ maxWidth: "1120px", margin: "0 auto" }}>
            <div style={{ maxWidth: "720px" }}>
              <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "10.5px", letterSpacing: ".14em", color: "#2C8C99", textTransform: "uppercase" }}>Connected companies
              </div>
              <h2 style={{ fontSize: "28px", fontWeight: "800", color: "#1F2B4D", lineHeight: "1.16", letterSpacing: "-.01em", margin: "12px 0 0" }}>Help retailers and brands cooperate — without exposing what should remain private.
              </h2>
              <p style={{ fontSize: "14.5px", color: "#667085", lineHeight: "1.6", margin: "13px 0 0", maxWidth: "600px" }}>AXY connects commercial workflows between companies while keeping business-unit boundaries, permissions and data ownership intact.
              </p>
            </div>
            <div className="int-three" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "14px", marginTop: "30px" }}>
              <div style={{ background: "#F8FAFC", border: "1px solid #E4EAF1", borderRadius: "14px", padding: "18px" }}>
                <div style={{ fontSize: "14px", fontWeight: "800", color: "#1F2B4D", lineHeight: "1.25" }}>Product catalogues & prices
                </div>
                <p style={{ fontSize: "12px", color: "#667085", lineHeight: "1.55", margin: "8px 0 0" }}>A manufacturer publishes approved product information. Retailers review and import the products or updates they need.
                </p>
              </div>
              <div style={{ background: "#F8FAFC", border: "1px solid #E4EAF1", borderRadius: "14px", padding: "18px" }}>
                <div style={{ fontSize: "14px", fontWeight: "800", color: "#1F2B4D", lineHeight: "1.25" }}>Product availability
                </div>
                <p style={{ fontSize: "12px", color: "#667085", lineHeight: "1.55", margin: "8px 0 0" }}>A retailer requests availability while serving the customer. The connected manufacturer or system provides the permitted response.
                </p>
              </div>
              <div style={{ background: "#F8FAFC", border: "1px solid #E4EAF1", borderRadius: "14px", padding: "18px" }}>
                <div style={{ fontSize: "14px", fontWeight: "800", color: "#1F2B4D", lineHeight: "1.25" }}>Orders & reorders
                </div>
                <p style={{ fontSize: "12px", color: "#667085", lineHeight: "1.55", margin: "8px 0 0" }}>Both parties work from the same structured product references instead of exchanging incompatible spreadsheets.
                </p>
              </div>
              <div style={{ background: "#F8FAFC", border: "1px solid #E4EAF1", borderRadius: "14px", padding: "18px" }}>
                <div style={{ fontSize: "14px", fontWeight: "800", color: "#1F2B4D", lineHeight: "1.25" }}>Warranty & after-sales
                </div>
                <p style={{ fontSize: "12px", color: "#667085", lineHeight: "1.55", margin: "8px 0 0" }}>Warranty activations, extension requests and approved lifecycle actions move through one connected workflow.
                </p>
              </div>
              <div style={{ background: "#F8FAFC", border: "1px solid #E4EAF1", borderRadius: "14px", padding: "18px" }}>
                <div style={{ fontSize: "14px", fontWeight: "800", color: "#1F2B4D", lineHeight: "1.25" }}>Business information
                </div>
                <p style={{ fontSize: "12px", color: "#667085", lineHeight: "1.55", margin: "8px 0 0" }}>Partners keep approved company details, contacts, locations and responsibilities current without email chains.
                </p>
              </div>
              <div style={{ background: "#F8FAFC", border: "1px solid #E4EAF1", borderRadius: "14px", padding: "18px" }}>
                <div style={{ fontSize: "14px", fontWeight: "800", color: "#1F2B4D", lineHeight: "1.25" }}>Announcements & content
                </div>
                <p style={{ fontSize: "12px", color: "#667085", lineHeight: "1.55", margin: "8px 0 0" }}>Brands prepare product stories and announcements that retailers approve, adapt and share through their own customer relationships.
                </p>
              </div>
            </div>
            <div style={{ display: "flex", gap: "10px", alignItems: "flex-start", marginTop: "20px", background: "#fff", border: "1px solid #D9E0EC", borderLeft: "3px solid #2C8C99", borderRadius: "0 12px 12px 0", padding: "14px 16px" }}>
              <span style={{ fontSize: "13px", color: "#1F2B4D", lineHeight: "1.55" }}>AXY shares the{' '}
                <strong>action and context required for cooperation
                </strong>{' '}— not unrestricted access to the other company’s database.
              </span>
            </div>
          </div>
        </div>
        <div style={{ background: "#1F2B4D", padding: "74px 24px" }}>
          <div style={{ maxWidth: "1120px", margin: "0 auto" }}>
            <div style={{ maxWidth: "720px" }}>
              <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "10.5px", letterSpacing: ".14em", color: "#7fd4de", textTransform: "uppercase" }}>Data governance
              </div>
              <h2 style={{ fontSize: "28px", fontWeight: "800", color: "#fff", lineHeight: "1.16", letterSpacing: "-.01em", margin: "12px 0 0" }}>Your data remains yours.
              </h2>
              <p style={{ fontSize: "14.5px", color: "#B9C2D8", lineHeight: "1.6", margin: "13px 0 0", maxWidth: "600px" }}>Every retailer, manufacturer and business unit keeps control over its protected information. Connecting through AXY does not automatically make internal records visible to another organisation.
              </p>
            </div>
            <div className="int-two" style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: "12px", marginTop: "30px" }}>
              <div style={{ background: "rgba(255,255,255,.05)", border: "1px solid rgba(255,255,255,.13)", borderRadius: "14px", padding: "18px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span style={{ width: "18px", height: "18px", borderRadius: "50%", background: "rgba(51,214,164,.16)", color: "#33D6A4", fontSize: "10px", display: "flex", alignItems: "center", justifyContent: "center" }}>✓
                  </span>
                  <span style={{ fontSize: "14px", fontWeight: "800", color: "#fff" }}>Business-unit boundaries
                  </span>
                </div>
                <p style={{ fontSize: "12px", color: "#C9D2E4", lineHeight: "1.55", margin: "9px 0 0" }}>Information belonging to one business unit stays separated from other businesses unless a specific connection and purpose are approved.
                </p>
              </div>
              <div style={{ background: "rgba(255,255,255,.05)", border: "1px solid rgba(255,255,255,.13)", borderRadius: "14px", padding: "18px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span style={{ width: "18px", height: "18px", borderRadius: "50%", background: "rgba(51,214,164,.16)", color: "#33D6A4", fontSize: "10px", display: "flex", alignItems: "center", justifyContent: "center" }}>✓
                  </span>
                  <span style={{ fontSize: "14px", fontWeight: "800", color: "#fff" }}>Permission-based sharing
                  </span>
                </div>
                <p style={{ fontSize: "12px", color: "#C9D2E4", lineHeight: "1.55", margin: "9px 0 0" }}>Only the information required for an approved partner workflow is made available.
                </p>
              </div>
              <div style={{ background: "rgba(255,255,255,.05)", border: "1px solid rgba(255,255,255,.13)", borderRadius: "14px", padding: "18px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span style={{ width: "18px", height: "18px", borderRadius: "50%", background: "rgba(51,214,164,.16)", color: "#33D6A4", fontSize: "10px", display: "flex", alignItems: "center", justifyContent: "center" }}>✓
                  </span>
                  <span style={{ fontSize: "14px", fontWeight: "800", color: "#fff" }}>Aggregated & anonymised insight
                  </span>
                </div>
                <p style={{ fontSize: "12px", color: "#C9D2E4", lineHeight: "1.55", margin: "9px 0 0" }}>Where market or demand insight is provided, AXY can use aggregated or anonymised signals rather than exposing identifiable customer or store-level records.
                </p>
              </div>
              <div style={{ background: "rgba(255,255,255,.05)", border: "1px solid rgba(255,255,255,.13)", borderRadius: "14px", padding: "18px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span style={{ width: "18px", height: "18px", borderRadius: "50%", background: "rgba(51,214,164,.16)", color: "#33D6A4", fontSize: "10px", display: "flex", alignItems: "center", justifyContent: "center" }}>✓
                  </span>
                  <span style={{ fontSize: "14px", fontWeight: "800", color: "#fff" }}>No automatic customer exposure
                  </span>
                </div>
                <p style={{ fontSize: "12px", color: "#C9D2E4", lineHeight: "1.55", margin: "9px 0 0" }}>Customer-level information is not automatically shared with brands, unrelated retailers or other partners.
                </p>
              </div>
              <div style={{ background: "rgba(255,255,255,.05)", border: "1px solid rgba(255,255,255,.13)", borderRadius: "14px", padding: "18px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span style={{ width: "18px", height: "18px", borderRadius: "50%", background: "rgba(51,214,164,.16)", color: "#33D6A4", fontSize: "10px", display: "flex", alignItems: "center", justifyContent: "center" }}>✓
                  </span>
                  <span style={{ fontSize: "14px", fontWeight: "800", color: "#fff" }}>Transparency on request
                  </span>
                </div>
                <p style={{ fontSize: "12px", color: "#C9D2E4", lineHeight: "1.55", margin: "9px 0 0" }}>A company can request a clear explanation of what information AXY uses, how it is processed and what is shared within its configured connections.
                </p>
              </div>
              <div style={{ background: "linear-gradient(135deg,#2C8C99,#1C6470)", borderRadius: "14px", padding: "20px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <div style={{ fontSize: "14.5px", fontWeight: "800", color: "#fff" }}>Review your data setup with us
                </div>
                <p style={{ fontSize: "12px", color: "#DCEFEF", lineHeight: "1.5", margin: "8px 0 14px" }}>Book a call and we will walk through your systems, permissions and intended data flows before an integration is activated.
                </p>
                <a className="hv118" href="/book-a-walkthrough#schedule" style={{ display: "inline-flex", alignSelf: "flex-start", padding: "11px 18px", background: "#fff", color: "#1C6470", borderRadius: "9px", fontSize: "13px", fontWeight: "700" }}>Review your data setup →
                </a>
              </div>
            </div>
          </div>
        </div>
        <div style={{ background: "#F9FAFB", padding: "74px 24px" }}>
          <div style={{ maxWidth: "1120px", margin: "0 auto" }}>
            <div style={{ maxWidth: "720px" }}>
              <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "10.5px", letterSpacing: ".14em", color: "#2C8C99", textTransform: "uppercase" }}>Connected workflows
              </div>
              <h2 style={{ fontSize: "28px", fontWeight: "800", color: "#1F2B4D", lineHeight: "1.16", letterSpacing: "-.01em", margin: "12px 0 0" }}>Use existing data to remove repeated work and create faster action.
              </h2>
              <p style={{ fontSize: "14.5px", color: "#667085", lineHeight: "1.6", margin: "13px 0 0", maxWidth: "600px" }}>Six ways a connected AXY reduces manual re-entry and shortens the path from information to action.
              </p>
            </div>
            <div className="int-two" style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: "14px", marginTop: "30px" }}>
              <div style={{ display: "flex", gap: "14px", background: "#fff", border: "1px solid #E4E8EF", borderRadius: "14px", padding: "18px" }}>
                <div style={{ flexShrink: "0", width: "34px", height: "34px", borderRadius: "9px", background: "#EAF6F6", color: "#2C8C99", fontFamily: "'Roboto Mono',monospace", fontSize: "12px", fontWeight: "700", display: "flex", alignItems: "center", justifyContent: "center" }}>01
                </div>
                <div>
                  <div style={{ fontSize: "14px", fontWeight: "800", color: "#1F2B4D" }}>Keep catalogues & prices current
                  </div>
                  <p style={{ fontSize: "12px", color: "#667085", lineHeight: "1.55", margin: "6px 0 0" }}>Approved product and price updates move from a partner or existing product system into the relevant catalogue workflow.
                  </p>
                </div>
              </div>
              <div style={{ display: "flex", gap: "14px", background: "#fff", border: "1px solid #E4E8EF", borderRadius: "14px", padding: "18px" }}>
                <div style={{ flexShrink: "0", width: "34px", height: "34px", borderRadius: "9px", background: "#EAF6F6", color: "#2C8C99", fontFamily: "'Roboto Mono',monospace", fontSize: "12px", fontWeight: "700", display: "flex", alignItems: "center", justifyContent: "center" }}>02
                </div>
                <div>
                  <div style={{ fontSize: "14px", fontWeight: "800", color: "#1F2B4D" }}>Answer availability during the sale
                  </div>
                  <p style={{ fontSize: "12px", color: "#667085", lineHeight: "1.55", margin: "6px 0 0" }}>Sales teams check local stock, other locations, or request availability from an authorised partner while the customer is present.
                  </p>
                </div>
              </div>
              <div style={{ display: "flex", gap: "14px", background: "#fff", border: "1px solid #E4E8EF", borderRadius: "14px", padding: "18px" }}>
                <div style={{ flexShrink: "0", width: "34px", height: "34px", borderRadius: "9px", background: "#EAF6F6", color: "#2C8C99", fontFamily: "'Roboto Mono',monospace", fontSize: "12px", fontWeight: "700", display: "flex", alignItems: "center", justifyContent: "center" }}>03
                </div>
                <div>
                  <div style={{ fontSize: "14px", fontWeight: "800", color: "#1F2B4D" }}>Exchange structured orders
                  </div>
                  <p style={{ fontSize: "12px", color: "#667085", lineHeight: "1.55", margin: "6px 0 0" }}>Retailers and manufacturers work from the same product references and order structure.
                  </p>
                </div>
              </div>
              <div style={{ display: "flex", gap: "14px", background: "#fff", border: "1px solid #E4E8EF", borderRadius: "14px", padding: "18px" }}>
                <div style={{ flexShrink: "0", width: "34px", height: "34px", borderRadius: "9px", background: "#EAF6F6", color: "#2C8C99", fontFamily: "'Roboto Mono',monospace", fontSize: "12px", fontWeight: "700", display: "flex", alignItems: "center", justifyContent: "center" }}>04
                </div>
                <div>
                  <div style={{ fontSize: "14px", fontWeight: "800", color: "#1F2B4D" }}>Connect customer & sales context
                  </div>
                  <p style={{ fontSize: "12px", color: "#667085", lineHeight: "1.55", margin: "6px 0 0" }}>Customer, visit, product-interest and follow-up information stays connected across the approved internal systems.
                  </p>
                </div>
              </div>
              <div style={{ display: "flex", gap: "14px", background: "#fff", border: "1px solid #E4E8EF", borderRadius: "14px", padding: "18px" }}>
                <div style={{ flexShrink: "0", width: "34px", height: "34px", borderRadius: "9px", background: "#EAF6F6", color: "#2C8C99", fontFamily: "'Roboto Mono',monospace", fontSize: "12px", fontWeight: "700", display: "flex", alignItems: "center", justifyContent: "center" }}>05
                </div>
                <div>
                  <div style={{ fontSize: "14px", fontWeight: "800", color: "#1F2B4D" }}>Coordinate warranties & service
                  </div>
                  <p style={{ fontSize: "12px", color: "#667085", lineHeight: "1.55", margin: "6px 0 0" }}>Activation, extension and after-sales workflows stay linked to the product, customer and authorised partners.
                  </p>
                </div>
              </div>
              <div style={{ display: "flex", gap: "14px", background: "#fff", border: "1px solid #E4E8EF", borderRadius: "14px", padding: "18px" }}>
                <div style={{ flexShrink: "0", width: "34px", height: "34px", borderRadius: "9px", background: "#EAF6F6", color: "#2C8C99", fontFamily: "'Roboto Mono',monospace", fontSize: "12px", fontWeight: "700", display: "flex", alignItems: "center", justifyContent: "center" }}>06
                </div>
                <div>
                  <div style={{ fontSize: "14px", fontWeight: "800", color: "#1F2B4D" }}>Build better analytics
                  </div>
                  <p style={{ fontSize: "12px", color: "#667085", lineHeight: "1.55", margin: "6px 0 0" }}>Combine permitted operational activity into clearer product, sales, stock and demand reporting — without exposing protected raw data.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ background: "#fff", padding: "74px 24px" }}>
          <div style={{ maxWidth: "1120px", margin: "0 auto" }}>
            <div style={{ maxWidth: "720px" }}>
              <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "10.5px", letterSpacing: ".14em", color: "#2C8C99", textTransform: "uppercase" }}>How connections are built
              </div>
              <h2 style={{ fontSize: "28px", fontWeight: "800", color: "#1F2B4D", lineHeight: "1.16", letterSpacing: "-.01em", margin: "12px 0 0" }}>Choose the connection method that fits your systems.
              </h2>
              <p style={{ fontSize: "14.5px", color: "#667085", lineHeight: "1.6", margin: "13px 0 0", maxWidth: "600px" }}>The implementation method depends on system capability, available APIs, update frequency and the business purpose of the integration.
              </p>
            </div>
            <div className="int-four" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "14px", marginTop: "30px" }}>
              <div style={{ background: "#F8FAFC", border: "1px solid #E4EAF1", borderRadius: "14px", padding: "20px" }}>
                <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "10px", color: "#2C8C99" }}>01
                </div>
                <div style={{ fontSize: "14px", fontWeight: "800", color: "#1F2B4D", marginTop: "8px" }}>API connection
                </div>
                <p style={{ fontSize: "12px", color: "#667085", lineHeight: "1.55", margin: "7px 0 0" }}>Use documented system APIs for direct or frequent data exchange where available.
                </p>
              </div>
              <div style={{ background: "#F8FAFC", border: "1px solid #E4EAF1", borderRadius: "14px", padding: "20px" }}>
                <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "10px", color: "#2C8C99" }}>02
                </div>
                <div style={{ fontSize: "14px", fontWeight: "800", color: "#1F2B4D", marginTop: "8px" }}>Scheduled synchronisation
                </div>
                <p style={{ fontSize: "12px", color: "#667085", lineHeight: "1.55", margin: "7px 0 0" }}>Synchronise approved records at agreed intervals when live exchange is unnecessary.
                </p>
              </div>
              <div style={{ background: "#F8FAFC", border: "1px solid #E4EAF1", borderRadius: "14px", padding: "20px" }}>
                <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "10px", color: "#2C8C99" }}>03
                </div>
                <div style={{ fontSize: "14px", fontWeight: "800", color: "#1F2B4D", marginTop: "8px" }}>Secure import & export
                </div>
                <p style={{ fontSize: "12px", color: "#667085", lineHeight: "1.55", margin: "7px 0 0" }}>Use structured file imports for onboarding, migration or systems without suitable APIs.
                </p>
              </div>
              <div style={{ background: "#F8FAFC", border: "1px solid #E4EAF1", borderRadius: "14px", padding: "20px" }}>
                <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "10px", color: "#2C8C99" }}>04
                </div>
                <div style={{ fontSize: "14px", fontWeight: "800", color: "#1F2B4D", marginTop: "8px" }}>Custom connector
                </div>
                <p style={{ fontSize: "12px", color: "#667085", lineHeight: "1.55", margin: "7px 0 0" }}>Design a dedicated integration when a system requires specialised mapping or workflow logic.
                </p>
              </div>
            </div>
            <div style={{ display: "flex", gap: "10px", alignItems: "flex-start", marginTop: "20px", background: "#fff", border: "1px solid #D9E0EC", borderLeft: "3px solid #2C8C99", borderRadius: "0 12px 12px 0", padding: "14px 16px" }}>
              <span style={{ fontSize: "13px", color: "#1F2B4D", lineHeight: "1.55" }}>Every integration must define{' '}
                <strong>ownership, direction, frequency, permissions and error handling
                </strong>{' '}before activation.
              </span>
            </div>
          </div>
        </div>
        <div style={{ background: "#F9FAFB", padding: "74px 24px" }}>
          <div style={{ maxWidth: "1120px", margin: "0 auto" }}>
            <div style={{ maxWidth: "720px" }}>
              <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "10.5px", letterSpacing: ".14em", color: "#2C8C99", textTransform: "uppercase" }}>Transparent status
              </div>
              <h2 style={{ fontSize: "28px", fontWeight: "800", color: "#1F2B4D", lineHeight: "1.16", letterSpacing: "-.01em", margin: "12px 0 0" }}>No unverified logo wall. Clear statuses instead.
              </h2>
              <p style={{ fontSize: "14.5px", color: "#667085", lineHeight: "1.6", margin: "13px 0 0", maxWidth: "600px" }}>We display integration names only after their connection status and scope are confirmed. Statuses below are indicative for setup planning.
              </p>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "20px" }}>
              <span style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "8.5px", fontWeight: "700", letterSpacing: ".04em", color: "#1B7F4B", background: "#EAF7EF", borderRadius: "5px", padding: "3px 8px", whiteSpace: "nowrap" }}>AVAILABLE
              </span>
              <span style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "8.5px", fontWeight: "700", letterSpacing: ".04em", color: "#9A6B0E", background: "#FEF6E7", borderRadius: "5px", padding: "3px 8px", whiteSpace: "nowrap" }}>IN VALIDATION
              </span>
              <span style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "8.5px", fontWeight: "700", letterSpacing: ".04em", color: "#5B6675", background: "#EEF1F6", borderRadius: "5px", padding: "3px 8px", whiteSpace: "nowrap" }}>PLANNED
              </span>
              <span style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "8.5px", fontWeight: "700", letterSpacing: ".04em", color: "#2F4C86", background: "#EAF0FB", borderRadius: "5px", padding: "3px 8px", whiteSpace: "nowrap" }}>CUSTOM INTEGRATION
              </span>
              <span style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "8.5px", fontWeight: "700", letterSpacing: ".04em", color: "#1C6470", background: "#F1F9F8", borderRadius: "5px", padding: "3px 8px", whiteSpace: "nowrap" }}>CONTACT US
              </span>
            </div>
            <div style={{ marginTop: "18px", background: "#fff", border: "1px solid #E4E8EF", borderRadius: "14px", overflow: "hidden" }}>
              <div className="int-throw" style={{ display: "grid", gridTemplateColumns: "1.1fr .9fr 1fr 1.5fr 1.1fr .7fr", gap: "0", background: "#F2F5F9", padding: "11px 16px" }}>
                <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "8.5px", letterSpacing: ".06em", color: "#667085" }}>SYSTEM
                </div>
                <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "8.5px", letterSpacing: ".06em", color: "#667085" }}>CATEGORY
                </div>
                <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "8.5px", letterSpacing: ".06em", color: "#667085" }}>STATUS
                </div>
                <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "8.5px", letterSpacing: ".06em", color: "#667085" }}>SUPPORTED DATA
                </div>
                <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "8.5px", letterSpacing: ".06em", color: "#667085" }}>METHOD
                </div>
                <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "8.5px", letterSpacing: ".06em", color: "#667085" }}>INFO
                </div>
              </div>
              <div className="int-trow" style={{ display: "grid", gridTemplateColumns: "1.1fr .9fr 1fr 1.5fr 1.1fr .7fr", gap: "0", padding: "13px 16px", borderBottom: "1px solid #EEF1F6", alignItems: "center" }}>
                <div style={{ fontSize: "12.5px", fontWeight: "700", color: "#1F2B4D" }}>POS
                </div>
                <div style={{ fontSize: "11.5px", color: "#667085" }}>Point of sale
                </div>
                <div>
                  <span style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "8.5px", fontWeight: "700", letterSpacing: ".04em", color: "#9A6B0E", background: "#FEF6E7", borderRadius: "5px", padding: "3px 8px", whiteSpace: "nowrap" }}>IN VALIDATION
                  </span>
                </div>
                <div style={{ fontSize: "11.5px", color: "#3a4358" }}>Sales, transactions, product refs
                </div>
                <div style={{ fontSize: "11px", color: "#8a94a6" }}>Real-time / scheduled
                </div>
                <div>
                  <a href="/book-a-walkthrough#schedule" style={{ fontSize: "11.5px", fontWeight: "700", color: "#2C8C99" }}>Ask →
                  </a>
                </div>
              </div>
              <div className="int-trow" style={{ display: "grid", gridTemplateColumns: "1.1fr .9fr 1fr 1.5fr 1.1fr .7fr", gap: "0", padding: "13px 16px", borderBottom: "1px solid #EEF1F6", alignItems: "center" }}>
                <div style={{ fontSize: "12.5px", fontWeight: "700", color: "#1F2B4D" }}>ERP
                </div>
                <div style={{ fontSize: "11.5px", color: "#667085" }}>Operations
                </div>
                <div>
                  <span style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "8.5px", fontWeight: "700", letterSpacing: ".04em", color: "#5B6675", background: "#EEF1F6", borderRadius: "5px", padding: "3px 8px", whiteSpace: "nowrap" }}>PLANNED
                  </span>
                </div>
                <div style={{ fontSize: "11.5px", color: "#3a4358" }}>Orders, invoices, products
                </div>
                <div style={{ fontSize: "11px", color: "#8a94a6" }}>Scheduled
                </div>
                <div>
                  <a href="/book-a-walkthrough#schedule" style={{ fontSize: "11.5px", fontWeight: "700", color: "#2C8C99" }}>Ask →
                  </a>
                </div>
              </div>
              <div className="int-trow" style={{ display: "grid", gridTemplateColumns: "1.1fr .9fr 1fr 1.5fr 1.1fr .7fr", gap: "0", padding: "13px 16px", borderBottom: "1px solid #EEF1F6", alignItems: "center" }}>
                <div style={{ fontSize: "12.5px", fontWeight: "700", color: "#1F2B4D" }}>CRM
                </div>
                <div style={{ fontSize: "11.5px", color: "#667085" }}>Customer
                </div>
                <div>
                  <span style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "8.5px", fontWeight: "700", letterSpacing: ".04em", color: "#9A6B0E", background: "#FEF6E7", borderRadius: "5px", padding: "3px 8px", whiteSpace: "nowrap" }}>IN VALIDATION
                  </span>
                </div>
                <div style={{ fontSize: "11.5px", color: "#3a4358" }}>Customers, consent, activity
                </div>
                <div style={{ fontSize: "11px", color: "#8a94a6" }}>Real-time / scheduled
                </div>
                <div>
                  <a href="/book-a-walkthrough#schedule" style={{ fontSize: "11.5px", fontWeight: "700", color: "#2C8C99" }}>Ask →
                  </a>
                </div>
              </div>
              <div className="int-trow" style={{ display: "grid", gridTemplateColumns: "1.1fr .9fr 1fr 1.5fr 1.1fr .7fr", gap: "0", padding: "13px 16px", borderBottom: "1px solid #EEF1F6", alignItems: "center" }}>
                <div style={{ fontSize: "12.5px", fontWeight: "700", color: "#1F2B4D" }}>Product / PIM
                </div>
                <div style={{ fontSize: "11.5px", color: "#667085" }}>Catalogue
                </div>
                <div>
                  <span style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "8.5px", fontWeight: "700", letterSpacing: ".04em", color: "#1B7F4B", background: "#EAF7EF", borderRadius: "5px", padding: "3px 8px", whiteSpace: "nowrap" }}>AVAILABLE
                  </span>
                </div>
                <div style={{ fontSize: "11.5px", color: "#3a4358" }}>Products, attributes, prices
                </div>
                <div style={{ fontSize: "11px", color: "#8a94a6" }}>Import / scheduled
                </div>
                <div>
                  <a href="/book-a-walkthrough#schedule" style={{ fontSize: "11.5px", fontWeight: "700", color: "#2C8C99" }}>Ask →
                  </a>
                </div>
              </div>
              <div className="int-trow" style={{ display: "grid", gridTemplateColumns: "1.1fr .9fr 1fr 1.5fr 1.1fr .7fr", gap: "0", padding: "13px 16px", borderBottom: "1px solid #EEF1F6", alignItems: "center" }}>
                <div style={{ fontSize: "12.5px", fontWeight: "700", color: "#1F2B4D" }}>Inventory
                </div>
                <div style={{ fontSize: "11.5px", color: "#667085" }}>Stock
                </div>
                <div>
                  <span style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "8.5px", fontWeight: "700", letterSpacing: ".04em", color: "#9A6B0E", background: "#FEF6E7", borderRadius: "5px", padding: "3px 8px", whiteSpace: "nowrap" }}>IN VALIDATION
                  </span>
                </div>
                <div style={{ fontSize: "11.5px", color: "#3a4358" }}>Availability, locations
                </div>
                <div style={{ fontSize: "11px", color: "#8a94a6" }}>Real-time / scheduled
                </div>
                <div>
                  <a href="/book-a-walkthrough#schedule" style={{ fontSize: "11.5px", fontWeight: "700", color: "#2C8C99" }}>Ask →
                  </a>
                </div>
              </div>
              <div className="int-trow" style={{ display: "grid", gridTemplateColumns: "1.1fr .9fr 1fr 1.5fr 1.1fr .7fr", gap: "0", padding: "13px 16px", borderBottom: "1px solid #EEF1F6", alignItems: "center" }}>
                <div style={{ fontSize: "12.5px", fontWeight: "700", color: "#1F2B4D" }}>Messaging
                </div>
                <div style={{ fontSize: "11.5px", color: "#667085" }}>Communication
                </div>
                <div>
                  <span style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "8.5px", fontWeight: "700", letterSpacing: ".04em", color: "#5B6675", background: "#EEF1F6", borderRadius: "5px", padding: "3px 8px", whiteSpace: "nowrap" }}>PLANNED
                  </span>
                </div>
                <div style={{ fontSize: "11.5px", color: "#3a4358" }}>Threads, follow-ups
                </div>
                <div style={{ fontSize: "11px", color: "#8a94a6" }}>Real-time
                </div>
                <div>
                  <a href="/book-a-walkthrough#schedule" style={{ fontSize: "11.5px", fontWeight: "700", color: "#2C8C99" }}>Ask →
                  </a>
                </div>
              </div>
              <div className="int-trow" style={{ display: "grid", gridTemplateColumns: "1.1fr .9fr 1fr 1.5fr 1.1fr .7fr", gap: "0", padding: "13px 16px", borderBottom: "1px solid #EEF1F6", alignItems: "center" }}>
                <div style={{ fontSize: "12.5px", fontWeight: "700", color: "#1F2B4D" }}>Analytics / BI
                </div>
                <div style={{ fontSize: "11.5px", color: "#667085" }}>Reporting
                </div>
                <div>
                  <span style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "8.5px", fontWeight: "700", letterSpacing: ".04em", color: "#2F4C86", background: "#EAF0FB", borderRadius: "5px", padding: "3px 8px", whiteSpace: "nowrap" }}>CUSTOM INTEGRATION
                  </span>
                </div>
                <div style={{ fontSize: "11.5px", color: "#3a4358" }}>Operational activity export
                </div>
                <div style={{ fontSize: "11px", color: "#8a94a6" }}>Scheduled / export
                </div>
                <div>
                  <a href="/book-a-walkthrough#schedule" style={{ fontSize: "11.5px", fontWeight: "700", color: "#2C8C99" }}>Ask →
                  </a>
                </div>
              </div>
              <div className="int-trow" style={{ display: "grid", gridTemplateColumns: "1.1fr .9fr 1fr 1.5fr 1.1fr .7fr", gap: "0", padding: "13px 16px", alignItems: "center" }}>
                <div style={{ fontSize: "12.5px", fontWeight: "700", color: "#1F2B4D" }}>Other systems
                </div>
                <div style={{ fontSize: "11.5px", color: "#667085" }}>Various
                </div>
                <div>
                  <span style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "8.5px", fontWeight: "700", letterSpacing: ".04em", color: "#1C6470", background: "#F1F9F8", borderRadius: "5px", padding: "3px 8px", whiteSpace: "nowrap" }}>CONTACT US
                  </span>
                </div>
                <div style={{ fontSize: "11.5px", color: "#3a4358" }}>Defined per system
                </div>
                <div style={{ fontSize: "11px", color: "#8a94a6" }}>Custom
                </div>
                <div>
                  <a href="/book-a-walkthrough#schedule" style={{ fontSize: "11.5px", fontWeight: "700", color: "#2C8C99" }}>Ask →
                  </a>
                </div>
              </div>
            </div>
            <p style={{ fontSize: "12px", color: "#8a94a6", marginTop: "14px" }}>Statuses shown for planning only. Integration names, logos and availability are confirmed before any connection is activated.
            </p>
          </div>
        </div>
        <div style={{ background: "#fff", padding: "74px 24px" }}>
          <div style={{ maxWidth: "900px", margin: "0 auto" }}>
            <div style={{ maxWidth: "720px" }}>
              <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "10.5px", letterSpacing: ".14em", color: "#2C8C99", textTransform: "uppercase" }}>Integration questions
              </div>
              <h2 style={{ fontSize: "28px", fontWeight: "800", color: "#1F2B4D", lineHeight: "1.16", letterSpacing: "-.01em", margin: "12px 0 0" }}>Clear answers about connecting AXY.
              </h2>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginTop: "28px" }}>
              <div style={{ background: "#F8FAFC", border: "1px solid #E4EAF1", borderRadius: "14px", padding: "18px 20px" }}>
                <div style={{ fontSize: "14.5px", fontWeight: "800", color: "#1F2B4D" }}>Can AXY integrate with our existing POS, ERP or CRM?
                </div>
                <p style={{ fontSize: "13px", color: "#667085", lineHeight: "1.6", margin: "8px 0 0" }}>Yes. AXY is designed to work alongside existing retail systems through APIs, scheduled synchronisation, structured imports or custom integrations. The exact scope depends on the capabilities of the connected system.
                </p>
              </div>
              <div style={{ background: "#F8FAFC", border: "1px solid #E4EAF1", borderRadius: "14px", padding: "18px 20px" }}>
                <div style={{ fontSize: "14.5px", fontWeight: "800", color: "#1F2B4D" }}>Does AXY replace our existing systems?
                </div>
                <p style={{ fontSize: "13px", color: "#667085", lineHeight: "1.6", margin: "8px 0 0" }}>Not necessarily. AXY can provide its own connected retail workflows while also acting as the sales and collaboration layer around existing POS, ERP, CRM, inventory and product systems.
                </p>
              </div>
              <div style={{ background: "#F8FAFC", border: "1px solid #E4EAF1", borderRadius: "14px", padding: "18px 20px" }}>
                <div style={{ fontSize: "14.5px", fontWeight: "800", color: "#1F2B4D" }}>Does AXY share customer data with manufacturers?
                </div>
                <p style={{ fontSize: "13px", color: "#667085", lineHeight: "1.6", margin: "8px 0 0" }}>Customer-level data is not automatically shared with manufacturers. Any information exchange follows the configured relationship, permissions, consent requirements and agreed business purpose.
                </p>
              </div>
              <div style={{ background: "#F8FAFC", border: "1px solid #E4EAF1", borderRadius: "14px", padding: "18px 20px" }}>
                <div style={{ fontSize: "14.5px", fontWeight: "800", color: "#1F2B4D" }}>What information can a connected partner see?
                </div>
                <p style={{ fontSize: "13px", color: "#667085", lineHeight: "1.6", margin: "8px 0 0" }}>A partner sees only the records, actions or aggregated insights approved for that specific workflow. Connecting two businesses does not grant unrestricted access to either database.
                </p>
              </div>
              <div style={{ background: "#F8FAFC", border: "1px solid #E4EAF1", borderRadius: "14px", padding: "18px 20px" }}>
                <div style={{ fontSize: "14.5px", fontWeight: "800", color: "#1F2B4D" }}>Can we review what AXY uses and shares?
                </div>
                <p style={{ fontSize: "13px", color: "#667085", lineHeight: "1.6", margin: "8px 0 0" }}>Yes. Companies can request a review of their configured integrations, permissions, data purposes and partner flows by booking a call with the AXY team.
                </p>
              </div>
              <div style={{ background: "#F8FAFC", border: "1px solid #E4EAF1", borderRadius: "14px", padding: "18px 20px" }}>
                <div style={{ fontSize: "14.5px", fontWeight: "800", color: "#1F2B4D" }}>How are product catalogues and price updates connected?
                </div>
                <p style={{ fontSize: "13px", color: "#667085", lineHeight: "1.6", margin: "8px 0 0" }}>Manufacturers or product systems can publish approved catalogue and pricing information. Retailers can then review and import the relevant products or updates according to their permissions.
                </p>
              </div>
              <div style={{ background: "#F8FAFC", border: "1px solid #E4EAF1", borderRadius: "14px", padding: "18px 20px" }}>
                <div style={{ fontSize: "14.5px", fontWeight: "800", color: "#1F2B4D" }}>Can AXY connect companies that use different systems?
                </div>
                <p style={{ fontSize: "13px", color: "#667085", lineHeight: "1.6", margin: "8px 0 0" }}>Yes. AXY can standardise approved information from different source systems into shared product, order and collaboration workflows.
                </p>
              </div>
              <div style={{ background: "#F8FAFC", border: "1px solid #E4EAF1", borderRadius: "14px", padding: "18px 20px" }}>
                <div style={{ fontSize: "14.5px", fontWeight: "800", color: "#1F2B4D" }}>Do we need an integration before using AXY?
                </div>
                <p style={{ fontSize: "13px", color: "#667085", lineHeight: "1.6", margin: "8px 0 0" }}>No. AXY can be used without an initial integration, but connecting the relevant systems and partners unlocks more automation, continuity and collaboration value.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div style={{ background: "#F9FAFB", padding: "70px 24px" }}>
          <div style={{ maxWidth: "1120px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", maxWidth: "720px", margin: "0 auto" }}>
              <h2 style={{ fontSize: "28px", fontWeight: "800", color: "#1F2B4D", lineHeight: "1.16", letterSpacing: "-.01em", margin: "12px 0 0" }}>Connect more. Re-enter less. Keep control.
              </h2>
            </div>
            <div className="int-four" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "14px", marginTop: "30px" }}>
              <div style={{ background: "#fff", border: "1px solid #E4E8EF", borderRadius: "14px", padding: "20px" }}>
                <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "10px", color: "#2C8C99" }}>01
                </div>
                <div style={{ fontSize: "13.5px", fontWeight: "700", color: "#1F2B4D", marginTop: "8px", lineHeight: "1.3" }}>Connect the systems you already use
                </div>
              </div>
              <div style={{ background: "#fff", border: "1px solid #E4E8EF", borderRadius: "14px", padding: "20px" }}>
                <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "10px", color: "#2C8C99" }}>02
                </div>
                <div style={{ fontSize: "13.5px", fontWeight: "700", color: "#1F2B4D", marginTop: "8px", lineHeight: "1.3" }}>Coordinate retailers and brands through structured workflows
                </div>
              </div>
              <div style={{ background: "#fff", border: "1px solid #E4E8EF", borderRadius: "14px", padding: "20px" }}>
                <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "10px", color: "#2C8C99" }}>03
                </div>
                <div style={{ fontSize: "13.5px", fontWeight: "700", color: "#1F2B4D", marginTop: "8px", lineHeight: "1.3" }}>Keep protected business data under business-unit control
                </div>
              </div>
              <div style={{ background: "#fff", border: "1px solid #E4E8EF", borderRadius: "14px", padding: "20px" }}>
                <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "10px", color: "#2C8C99" }}>04
                </div>
                <div style={{ fontSize: "13.5px", fontWeight: "700", color: "#1F2B4D", marginTop: "8px", lineHeight: "1.3" }}>Use approved, aggregated insight to make better decisions
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ position: "relative", overflow: "hidden", background: "linear-gradient(135deg,#1F2B4D,#32415C 55%,#2C6570)", padding: "76px 24px" }}>
          <div style={{ position: "absolute", bottom: "-120px", right: "-60px", width: "420px", height: "320px", background: "radial-gradient(circle,rgba(44,140,153,.28),transparent 70%)" }}></div>
          <div style={{ position: "relative", maxWidth: "760px", margin: "0 auto", textAlign: "center" }}>
            <h2 style={{ fontSize: "29px", fontWeight: "800", color: "#fff", lineHeight: "1.14" }}>Let us map the right integration for your business.
            </h2>
            <p style={{ fontSize: "14.5px", color: "#C9D2E4", lineHeight: "1.6", margin: "14px 0 0" }}>Book a call to review your systems, partner relationships, permissions and desired workflows. We will explain what can connect, what stays private and what implementation is required.
            </p>
            <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap", marginTop: "24px" }}>
              <a className="hv119" href="/book-a-walkthrough#schedule" style={{ display: "inline-flex", padding: "14px 24px", background: "#fff", color: "#1F2B4D", borderRadius: "10px", fontSize: "14.5px", fontWeight: "700" }}>Book an integration call
              </a>
              <a className="hv120" href="/back-office" style={{ display: "inline-flex", padding: "14px 24px", border: "1.5px solid rgba(255,255,255,.5)", color: "#fff", borderRadius: "10px", fontSize: "14.5px", fontWeight: "600" }}>Explore AXY Back Office
              </a>
            </div>
            <div style={{ marginTop: "16px" }}>
              <a className="hv121" href="/back-office" style={{ fontSize: "13px", color: "#9fe0d8", textDecoration: "underline" }}>Explore AXY Back Office →
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
