import React from 'react';
import { css } from '../lib/css.js';

export default function BackOffice(v) {
  return (
    <>
      <div data-screen-label="Back Office">
        <div style={{ position: "relative", overflow: "hidden", background: "#fff", padding: "74px 24px 60px" }}>
          <div style={{ position: "absolute", top: "-120px", right: "-80px", width: "460px", height: "360px", background: "radial-gradient(circle,rgba(44,140,153,.10),transparent 70%)" }}></div>
          <div style={{ position: "relative", maxWidth: "1120px", margin: "0 auto", display: "flex", gap: "48px", alignItems: "center", flexWrap: "wrap" }}>
            <div style={{ flex: "1.02", minWidth: "320px" }}>
              <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "10.5px", letterSpacing: ".14em", color: "#2C8C99", textTransform: "uppercase" }}>AXY Back Office
              </div>
              <h1 style={{ fontSize: "39px", fontWeight: "800", color: "#1F2B4D", lineHeight: "1.12", letterSpacing: "-.018em", margin: "14px 0 0" }}>Stop rebuilding the same data for every partner.
              </h1>
              <p style={{ fontSize: "15.5px", color: "#667085", lineHeight: "1.6", margin: "16px 0 0", maxWidth: "520px" }}>Replace disconnected spreadsheets, price lists and update emails with one structured workspace for products, partners, stock, orders, customers and performance.
              </p>
              <div style={{ display: "flex", gap: "12px", marginTop: "26px", flexWrap: "wrap" }}>
                <a className="hv100" href="/create-account" style={{ display: "inline-flex", padding: "13px 22px", background: "#32415C", color: "#fff", borderRadius: "10px", fontSize: "14px", fontWeight: "700" }}>Create free account
                </a>
                <a className="hv101" href="/book-a-walkthrough#schedule" style={{ display: "inline-flex", padding: "13px 22px", border: "1.5px solid #32415C", color: "#32415C", borderRadius: "10px", fontSize: "14px", fontWeight: "600" }}>Get guided setup
                </a>
              </div>
            </div>
            <div style={{ flex: "1.1", minWidth: "320px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "14px", flexWrap: "nowrap" }}>
                <div style={{ flex: "1", minWidth: "0" }}>
                  <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "9px", letterSpacing: ".12em", color: "#8a2f25", textTransform: "uppercase", marginBottom: "9px" }}>Before AXY
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "7px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px", background: "#F7F5F2", border: "1px solid #E7E0D8", borderRadius: "9px", padding: "9px 11px", transform: "rotate(0.6deg)" }}>
                      <span style={{ width: "18px", height: "18px", borderRadius: "4px", background: "#E2D9CE", display: "inline-flex", alignItems: "center", justifyContent: "center", fontFamily: "'Roboto Mono',monospace", fontSize: "7px", color: "#8a7a63", flexShrink: "0" }}>▤
                      </span>
                      <span style={{ fontSize: "11px", color: "#6b6151", fontWeight: "600", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>Brand catalogue.xlsx
                      </span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px", background: "#F7F5F2", border: "1px solid #E7E0D8", borderRadius: "9px", padding: "9px 11px", transform: "rotate(-0.5deg)" }}>
                      <span style={{ width: "18px", height: "18px", borderRadius: "4px", background: "#E2D9CE", display: "inline-flex", alignItems: "center", justifyContent: "center", fontFamily: "'Roboto Mono',monospace", fontSize: "7px", color: "#8a7a63", flexShrink: "0" }}>▤
                      </span>
                      <span style={{ fontSize: "11px", color: "#6b6151", fontWeight: "600", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>Updated prices final v6.xlsx
                      </span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px", background: "#F7F5F2", border: "1px solid #E7E0D8", borderRadius: "9px", padding: "9px 11px", transform: "rotate(0.6deg)" }}>
                      <span style={{ width: "18px", height: "18px", borderRadius: "4px", background: "#E2D9CE", display: "inline-flex", alignItems: "center", justifyContent: "center", fontFamily: "'Roboto Mono',monospace", fontSize: "7px", color: "#8a7a63", flexShrink: "0" }}>▤
                      </span>
                      <span style={{ fontSize: "11px", color: "#6b6151", fontWeight: "600", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>Product images /
                      </span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px", background: "#F7F5F2", border: "1px solid #E7E0D8", borderRadius: "9px", padding: "9px 11px", transform: "rotate(-0.5deg)" }}>
                      <span style={{ width: "18px", height: "18px", borderRadius: "4px", background: "#E2D9CE", display: "inline-flex", alignItems: "center", justifyContent: "center", fontFamily: "'Roboto Mono',monospace", fontSize: "7px", color: "#8a7a63", flexShrink: "0" }}>▤
                      </span>
                      <span style={{ fontSize: "11px", color: "#6b6151", fontWeight: "600", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>New contact details — email
                      </span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px", background: "#F7F5F2", border: "1px solid #E7E0D8", borderRadius: "9px", padding: "9px 11px", transform: "rotate(0.6deg)" }}>
                      <span style={{ width: "18px", height: "18px", borderRadius: "4px", background: "#E2D9CE", display: "inline-flex", alignItems: "center", justifyContent: "center", fontFamily: "'Roboto Mono',monospace", fontSize: "7px", color: "#8a7a63", flexShrink: "0" }}>▤
                      </span>
                      <span style={{ fontSize: "11px", color: "#6b6151", fontWeight: "600", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>Order confirmation.pdf
                      </span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px", background: "#F7F5F2", border: "1px solid #E7E0D8", borderRadius: "9px", padding: "9px 11px", transform: "rotate(-0.5deg)" }}>
                      <span style={{ width: "18px", height: "18px", borderRadius: "4px", background: "#E2D9CE", display: "inline-flex", alignItems: "center", justifyContent: "center", fontFamily: "'Roboto Mono',monospace", fontSize: "7px", color: "#8a7a63", flexShrink: "0" }}>▤
                      </span>
                      <span style={{ fontSize: "11px", color: "#6b6151", fontWeight: "600", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>Duplicate product records
                      </span>
                    </div>
                  </div>
                </div>
                <div style={{ flexShrink: "0", display: "flex", flexDirection: "column", alignItems: "center", gap: "4px" }}>
                  <span style={{ width: "34px", height: "34px", borderRadius: "50%", background: "#2C8C99", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "16px", boxShadow: "0 8px 18px rgba(44,140,153,.35)" }}>→
                  </span>
                </div>
                <div style={{ flex: "1", minWidth: "0" }}>
                  <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "9px", letterSpacing: ".12em", color: "#0F3D38", textTransform: "uppercase", marginBottom: "9px" }}>With AXY
                  </div>
                  <div style={{ background: "#0F1830", borderRadius: "16px", padding: "12px", boxShadow: "0 22px 48px rgba(31,43,77,.28)" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "7px", padding: "2px 4px 10px" }}>
                      <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#33D6A4" }}></span>
                      <span style={{ fontSize: "10px", fontWeight: "800", color: "#fff" }}>AXY Back Office
                      </span>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "8px", background: "rgba(255,255,255,.06)", border: "1px solid rgba(255,255,255,.12)", borderRadius: "8px", padding: "7px 10px" }}>
                        <span style={{ color: "#33D6A4", fontSize: "10px", flexShrink: "0" }}>✓
                        </span>
                        <span style={{ fontSize: "10.5px", color: "#E4EAF5", fontWeight: "600" }}>Standardised product catalogue
                        </span>
                      </div>
                      <div style={{ display: "flex", alignItems: "center", gap: "8px", background: "rgba(255,255,255,.06)", border: "1px solid rgba(255,255,255,.12)", borderRadius: "8px", padding: "7px 10px" }}>
                        <span style={{ color: "#33D6A4", fontSize: "10px", flexShrink: "0" }}>✓
                        </span>
                        <span style={{ fontSize: "10.5px", color: "#E4EAF5", fontWeight: "600" }}>Current prices
                        </span>
                      </div>
                      <div style={{ display: "flex", alignItems: "center", gap: "8px", background: "rgba(255,255,255,.06)", border: "1px solid rgba(255,255,255,.12)", borderRadius: "8px", padding: "7px 10px" }}>
                        <span style={{ color: "#33D6A4", fontSize: "10px", flexShrink: "0" }}>✓
                        </span>
                        <span style={{ fontSize: "10.5px", color: "#E4EAF5", fontWeight: "600" }}>Connected partner records
                        </span>
                      </div>
                      <div style={{ display: "flex", alignItems: "center", gap: "8px", background: "rgba(255,255,255,.06)", border: "1px solid rgba(255,255,255,.12)", borderRadius: "8px", padding: "7px 10px" }}>
                        <span style={{ color: "#33D6A4", fontSize: "10px", flexShrink: "0" }}>✓
                        </span>
                        <span style={{ fontSize: "10.5px", color: "#E4EAF5", fontWeight: "600" }}>Structured orders
                        </span>
                      </div>
                      <div style={{ display: "flex", alignItems: "center", gap: "8px", background: "rgba(255,255,255,.06)", border: "1px solid rgba(255,255,255,.12)", borderRadius: "8px", padding: "7px 10px" }}>
                        <span style={{ color: "#33D6A4", fontSize: "10px", flexShrink: "0" }}>✓
                        </span>
                        <span style={{ fontSize: "10.5px", color: "#E4EAF5", fontWeight: "600" }}>Updated business information
                        </span>
                      </div>
                      <div style={{ display: "flex", alignItems: "center", gap: "8px", background: "rgba(255,255,255,.06)", border: "1px solid rgba(255,255,255,.12)", borderRadius: "8px", padding: "7px 10px" }}>
                        <span style={{ color: "#33D6A4", fontSize: "10px", flexShrink: "0" }}>✓
                        </span>
                        <span style={{ fontSize: "10.5px", color: "#E4EAF5", fontWeight: "600" }}>Inventory context
                        </span>
                      </div>
                      <div style={{ display: "flex", alignItems: "center", gap: "8px", background: "rgba(255,255,255,.06)", border: "1px solid rgba(255,255,255,.12)", borderRadius: "8px", padding: "7px 10px" }}>
                        <span style={{ color: "#33D6A4", fontSize: "10px", flexShrink: "0" }}>✓
                        </span>
                        <span style={{ fontSize: "10.5px", color: "#E4EAF5", fontWeight: "600" }}>Analytics-ready data
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div style={{ textAlign: "center", fontSize: "12px", color: "#8a93a6", marginTop: "14px" }}>From fragmented files to one connected standard.
              </div>
            </div>
          </div>
        </div>
        <div style={{ background: "#F9FAFB", padding: "72px 24px" }}>
          <div style={{ maxWidth: "1120px", margin: "0 auto" }}>
            <div style={{ maxWidth: "700px" }}>
              <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "10.5px", letterSpacing: ".14em", color: "#2C8C99", textTransform: "uppercase" }}>One connected standard
              </div>
              <h2 style={{ fontSize: "28px", fontWeight: "800", color: "#1F2B4D", lineHeight: "1.16", margin: "12px 0 0" }}>Structure information once. Keep authorised partners updated.
              </h2>
              <p style={{ fontSize: "14.5px", color: "#667085", lineHeight: "1.6", margin: "13px 0 0" }}>AXY standardises product, company and operational information so retailers and manufacturers can reuse approved data instead of recreating it in different formats.
              </p>
            </div>
            <div className="bo-three" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "14px", marginTop: "30px" }}>
              <div style={{ background: "#fff", border: "1px solid #E4E8EF", borderRadius: "16px", padding: "22px" }}>
                <div style={{ width: "40px", height: "40px", borderRadius: "10px", background: "#EFF7F8", color: "#2C8C99", fontFamily: "'Roboto Mono',monospace", fontSize: "13px", fontWeight: "700", display: "flex", alignItems: "center", justifyContent: "center" }}>01
                </div>
                <div style={{ fontSize: "16px", fontWeight: "800", color: "#1F2B4D", marginTop: "13px" }}>Standardise
                </div>
                <p style={{ fontSize: "13px", color: "#667085", lineHeight: "1.55", margin: "8px 0 0" }}>Structure products, specifications, images, variants, prices and business information in one consistent format.
                </p>
              </div>
              <div style={{ background: "#fff", border: "1px solid #E4E8EF", borderRadius: "16px", padding: "22px" }}>
                <div style={{ width: "40px", height: "40px", borderRadius: "10px", background: "#EFF7F8", color: "#2C8C99", fontFamily: "'Roboto Mono',monospace", fontSize: "13px", fontWeight: "700", display: "flex", alignItems: "center", justifyContent: "center" }}>02
                </div>
                <div style={{ fontSize: "16px", fontWeight: "800", color: "#1F2B4D", marginTop: "13px" }}>Connect
                </div>
                <p style={{ fontSize: "13px", color: "#667085", lineHeight: "1.55", margin: "8px 0 0" }}>Link retailers, manufacturers, stores and existing systems through one shared information layer.
                </p>
              </div>
              <div style={{ background: "#fff", border: "1px solid #E4E8EF", borderRadius: "16px", padding: "22px" }}>
                <div style={{ width: "40px", height: "40px", borderRadius: "10px", background: "#EFF7F8", color: "#2C8C99", fontFamily: "'Roboto Mono',monospace", fontSize: "13px", fontWeight: "700", display: "flex", alignItems: "center", justifyContent: "center" }}>03
                </div>
                <div style={{ fontSize: "16px", fontWeight: "800", color: "#1F2B4D", marginTop: "13px" }}>Update
                </div>
                <p style={{ fontSize: "13px", color: "#667085", lineHeight: "1.55", margin: "8px 0 0" }}>When approved information changes, connected partners can review or receive the latest version — no more spreadsheets or email chains.
                </p>
              </div>
            </div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", marginTop: "18px", background: "#fff", border: "1px solid #C9E2E6", borderRadius: "20px", padding: "7px 14px" }}>
              <svg viewBox="0 0 20 20" width="14" height="14" fill="none" stroke="#2C8C99" strokeWidth="1.7">
                <path d="M10 2.5l6 2.2v4.3c0 3.6-2.5 6.6-6 7.5-3.5-.9-6-3.9-6-7.5V4.7z"></path>
              </svg>
              <span style={{ fontSize: "12px", color: "#1C6470", fontWeight: "600" }}>Information is shared only according to partner permissions and approvals.
              </span>
            </div>
          </div>
        </div>
        <div style={{ background: "#fff", padding: "74px 24px" }}>
          <div style={{ maxWidth: "1120px", margin: "0 auto" }}>
            <div style={{ maxWidth: "700px" }}>
              <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "10.5px", letterSpacing: ".14em", color: "#2C8C99", textTransform: "uppercase" }}>Product data
              </div>
              <h2 style={{ fontSize: "29px", fontWeight: "800", color: "#1F2B4D", lineHeight: "1.14", margin: "12px 0 0" }}>One complete catalogue — not a different file from every supplier.
              </h2>
              <p style={{ fontSize: "14.5px", color: "#667085", lineHeight: "1.6", margin: "13px 0 0" }}>Create products, connect approved manufacturer catalogues and maintain images, specifications, variants and prices in one standardised format.
              </p>
            </div>
            <div style={{ display: "flex", gap: "44px", alignItems: "center", flexWrap: "wrap", marginTop: "30px" }}>
              <div style={{ flex: "1.15", minWidth: "320px" }}>
                <div style={{ borderRadius: "18px", overflow: "hidden", boxShadow: "0 26px 56px rgba(31,43,77,.2)", border: "1px solid #E4E8EF" }}>
                  <img src="/images/backoffice-wide-comparison.jpg" alt="AXY Back Office product catalogue with product cards, filters, stock and a similar-products comparison panel" style={{ display: "block", width: "100%", height: "auto" }} />
                </div>
              </div>
              <div style={{ flex: "1", minWidth: "300px" }}>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  <span style={{ fontSize: "11.5px", color: "#1F2B4D", background: "#F1F4F8", border: "1px solid #E4E8EF", borderRadius: "8px", padding: "5px 11px" }}>Create & manage products
                  </span>
                  <span style={{ fontSize: "11.5px", color: "#1F2B4D", background: "#F1F4F8", border: "1px solid #E4E8EF", borderRadius: "8px", padding: "5px 11px" }}>Import selected products or full collections
                  </span>
                  <span style={{ fontSize: "11.5px", color: "#1F2B4D", background: "#F1F4F8", border: "1px solid #E4E8EF", borderRadius: "8px", padding: "5px 11px" }}>Connect manufacturer databases
                  </span>
                  <span style={{ fontSize: "11.5px", color: "#1F2B4D", background: "#F1F4F8", border: "1px solid #E4E8EF", borderRadius: "8px", padding: "5px 11px" }}>Receive approved catalogue updates
                  </span>
                  <span style={{ fontSize: "11.5px", color: "#1F2B4D", background: "#F1F4F8", border: "1px solid #E4E8EF", borderRadius: "8px", padding: "5px 11px" }}>Update prices
                  </span>
                  <span style={{ fontSize: "11.5px", color: "#1F2B4D", background: "#F1F4F8", border: "1px solid #E4E8EF", borderRadius: "8px", padding: "5px 11px" }}>Images & specifications
                  </span>
                  <span style={{ fontSize: "11.5px", color: "#1F2B4D", background: "#F1F4F8", border: "1px solid #E4E8EF", borderRadius: "8px", padding: "5px 11px" }}>Variants & dynamic properties
                  </span>
                  <span style={{ fontSize: "11.5px", color: "#1F2B4D", background: "#F1F4F8", border: "1px solid #E4E8EF", borderRadius: "8px", padding: "5px 11px" }}>Share with authorised partners
                  </span>
                  <span style={{ fontSize: "11.5px", color: "#1F2B4D", background: "#F1F4F8", border: "1px solid #E4E8EF", borderRadius: "8px", padding: "5px 11px" }}>Publish new collections
                  </span>
                  <span style={{ fontSize: "11.5px", color: "#1F2B4D", background: "#F1F4F8", border: "1px solid #E4E8EF", borderRadius: "8px", padding: "5px 11px" }}>Consistent across systems
                  </span>
                </div>
                <div style={{ marginTop: "20px" }}>
                  <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "10px", marginTop: "8px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                        <span style={{ width: "26px", height: "26px", borderRadius: "50%", background: "#32415C", color: "#fff", fontFamily: "'Roboto Mono',monospace", fontSize: "9.5px", fontWeight: "700", display: "flex", alignItems: "center", justifyContent: "center" }}>1
                        </span>
                        <span style={{ fontSize: "13px", fontWeight: "700", color: "#1F2B4D" }}>Manufacturer publishes
                        </span>
                      </div>
                      <span style={{ width: "22px", height: "2px", background: "linear-gradient(90deg,#2C8C99,#C9D4EC)", borderRadius: "2px" }}></span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                        <span style={{ width: "26px", height: "26px", borderRadius: "50%", background: "#32415C", color: "#fff", fontFamily: "'Roboto Mono',monospace", fontSize: "9.5px", fontWeight: "700", display: "flex", alignItems: "center", justifyContent: "center" }}>2
                        </span>
                        <span style={{ fontSize: "13px", fontWeight: "700", color: "#1F2B4D" }}>Retailer reviews
                        </span>
                      </div>
                      <span style={{ width: "22px", height: "2px", background: "linear-gradient(90deg,#2C8C99,#C9D4EC)", borderRadius: "2px" }}></span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                        <span style={{ width: "26px", height: "26px", borderRadius: "50%", background: "#32415C", color: "#fff", fontFamily: "'Roboto Mono',monospace", fontSize: "9.5px", fontWeight: "700", display: "flex", alignItems: "center", justifyContent: "center" }}>3
                        </span>
                        <span style={{ fontSize: "13px", fontWeight: "700", color: "#1F2B4D" }}>Products imported
                        </span>
                      </div>
                      <span style={{ width: "22px", height: "2px", background: "linear-gradient(90deg,#2C8C99,#C9D4EC)", borderRadius: "2px" }}></span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                        <span style={{ width: "26px", height: "26px", borderRadius: "50%", background: "#32415C", color: "#fff", fontFamily: "'Roboto Mono',monospace", fontSize: "9.5px", fontWeight: "700", display: "flex", alignItems: "center", justifyContent: "center" }}>4
                        </span>
                        <span style={{ fontSize: "13px", fontWeight: "700", color: "#1F2B4D" }}>Prices updated
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div style={{ display: "flex", gap: "10px", alignItems: "flex-start", marginTop: "18px", background: "#EFF7F8", borderLeft: "3px solid #2C8C99", borderRadius: "0 10px 10px 0", padding: "12px 15px" }}>
                  <span style={{ fontSize: "12.5px", color: "#1F2B4D", lineHeight: "1.5" }}>
                    <strong>One company structures the product information. Every authorised partner can reuse it.
                    </strong>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ background: "#F9FAFB", padding: "74px 24px" }}>
          <div style={{ maxWidth: "1120px", margin: "0 auto" }}>
            <div style={{ maxWidth: "700px" }}>
              <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "10.5px", letterSpacing: ".14em", color: "#2C8C99", textTransform: "uppercase" }}>Connected business data
              </div>
              <h2 style={{ fontSize: "28px", fontWeight: "800", color: "#1F2B4D", lineHeight: "1.16", margin: "12px 0 0" }}>Stop emailing partners every time a detail changes.
              </h2>
              <p style={{ fontSize: "14.5px", color: "#667085", lineHeight: "1.6", margin: "13px 0 0" }}>Manage company profiles, business units, locations, brands, opening hours, contacts and customer-facing store information from one place.
              </p>
            </div>
            <div style={{ display: "flex", gap: "44px", alignItems: "center", flexWrap: "wrap", marginTop: "30px" }}>
              <div style={{ flex: "1", minWidth: "300px", order: "2" }}>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  <span style={{ fontSize: "11.5px", color: "#1F2B4D", background: "#F1F4F8", border: "1px solid #E4E8EF", borderRadius: "8px", padding: "5px 11px" }}>Company profile
                  </span>
                  <span style={{ fontSize: "11.5px", color: "#1F2B4D", background: "#F1F4F8", border: "1px solid #E4E8EF", borderRadius: "8px", padding: "5px 11px" }}>Business units
                  </span>
                  <span style={{ fontSize: "11.5px", color: "#1F2B4D", background: "#F1F4F8", border: "1px solid #E4E8EF", borderRadius: "8px", padding: "5px 11px" }}>Store locations
                  </span>
                  <span style={{ fontSize: "11.5px", color: "#1F2B4D", background: "#F1F4F8", border: "1px solid #E4E8EF", borderRadius: "8px", padding: "5px 11px" }}>Opening hours
                  </span>
                  <span style={{ fontSize: "11.5px", color: "#1F2B4D", background: "#F1F4F8", border: "1px solid #E4E8EF", borderRadius: "8px", padding: "5px 11px" }}>Contact details
                  </span>
                  <span style={{ fontSize: "11.5px", color: "#1F2B4D", background: "#F1F4F8", border: "1px solid #E4E8EF", borderRadius: "8px", padding: "5px 11px" }}>Employee responsibilities
                  </span>
                  <span style={{ fontSize: "11.5px", color: "#1F2B4D", background: "#F1F4F8", border: "1px solid #E4E8EF", borderRadius: "8px", padding: "5px 11px" }}>Brands carried
                  </span>
                  <span style={{ fontSize: "11.5px", color: "#1F2B4D", background: "#F1F4F8", border: "1px solid #E4E8EF", borderRadius: "8px", padding: "5px 11px" }}>Services offered
                  </span>
                  <span style={{ fontSize: "11.5px", color: "#1F2B4D", background: "#F1F4F8", border: "1px solid #E4E8EF", borderRadius: "8px", padding: "5px 11px" }}>Partner relationships
                  </span>
                  <span style={{ fontSize: "11.5px", color: "#1F2B4D", background: "#F1F4F8", border: "1px solid #E4E8EF", borderRadius: "8px", padding: "5px 11px" }}>Customer-facing store page
                  </span>
                  <span style={{ fontSize: "11.5px", color: "#1F2B4D", background: "#F1F4F8", border: "1px solid #E4E8EF", borderRadius: "8px", padding: "5px 11px" }}>Customer App profile
                  </span>
                </div>
                <div style={{ display: "flex", gap: "10px", alignItems: "flex-start", marginTop: "18px", background: "#EFF7F8", borderLeft: "3px solid #2C8C99", borderRadius: "0 10px 10px 0", padding: "12px 15px" }}>
                  <span style={{ fontSize: "12.5px", color: "#1F2B4D", lineHeight: "1.5" }}>
                    <strong>Update once. Keep connected information accurate.
                    </strong>
                  </span>
                </div>
              </div>
              <div style={{ flex: "1.15", minWidth: "320px", order: "1" }}>
                <div style={{ borderRadius: "18px", overflow: "hidden", boxShadow: "0 26px 56px rgba(31,43,77,.2)", border: "1px solid #E4E8EF" }}>
                  <img src="/images/backoffice-wide-brand.jpg" alt="AXY Back Office brand and company profile with business information, photo gallery, contacts, announcements and lead times" style={{ display: "block", width: "100%", height: "auto" }} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ background: "#fff", padding: "74px 24px" }}>
          <div style={{ maxWidth: "1120px", margin: "0 auto" }}>
            <div style={{ maxWidth: "700px" }}>
              <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "10.5px", letterSpacing: ".14em", color: "#2C8C99", textTransform: "uppercase" }}>Inventory control
              </div>
              <h2 style={{ fontSize: "28px", fontWeight: "800", color: "#1F2B4D", lineHeight: "1.16", margin: "12px 0 0" }}>Know what you have across every location.
              </h2>
              <p style={{ fontSize: "14.5px", color: "#667085", lineHeight: "1.6", margin: "13px 0 0" }}>Manage stock positions, request employee stock counts and review product movement across stores and business units.
              </p>
            </div>
            <div style={{ display: "flex", gap: "44px", alignItems: "center", flexWrap: "wrap", marginTop: "30px" }}>
              <div style={{ flex: "1.15", minWidth: "320px" }}>
                <div style={{ borderRadius: "18px", overflow: "hidden", boxShadow: "0 26px 56px rgba(31,43,77,.2)", border: "1px solid #E4E8EF" }}>
                  <img src="/images/backoffice-wide-stock.jpg" alt="AXY Back Office product stock view showing on-hand versus counted quantities, differences and count status by brand" style={{ display: "block", width: "100%", height: "auto" }} />
                </div>
              </div>
              <div style={{ flex: "1", minWidth: "300px" }}>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  <span style={{ fontSize: "11.5px", color: "#1F2B4D", background: "#F1F4F8", border: "1px solid #E4E8EF", borderRadius: "8px", padding: "5px 11px" }}>Inventory by location
                  </span>
                  <span style={{ fontSize: "11.5px", color: "#1F2B4D", background: "#F1F4F8", border: "1px solid #E4E8EF", borderRadius: "8px", padding: "5px 11px" }}>Stock-count requests
                  </span>
                  <span style={{ fontSize: "11.5px", color: "#1F2B4D", background: "#F1F4F8", border: "1px solid #E4E8EF", borderRadius: "8px", padding: "5px 11px" }}>Count confirmations
                  </span>
                  <span style={{ fontSize: "11.5px", color: "#1F2B4D", background: "#F1F4F8", border: "1px solid #E4E8EF", borderRadius: "8px", padding: "5px 11px" }}>Difference review
                  </span>
                  <span style={{ fontSize: "11.5px", color: "#1F2B4D", background: "#F1F4F8", border: "1px solid #E4E8EF", borderRadius: "8px", padding: "5px 11px" }}>Reservations
                  </span>
                  <span style={{ fontSize: "11.5px", color: "#1F2B4D", background: "#F1F4F8", border: "1px solid #E4E8EF", borderRadius: "8px", padding: "5px 11px" }}>Transfers
                  </span>
                  <span style={{ fontSize: "11.5px", color: "#1F2B4D", background: "#F1F4F8", border: "1px solid #E4E8EF", borderRadius: "8px", padding: "5px 11px" }}>Incoming products
                  </span>
                  <span style={{ fontSize: "11.5px", color: "#1F2B4D", background: "#F1F4F8", border: "1px solid #E4E8EF", borderRadius: "8px", padding: "5px 11px" }}>Product movement
                  </span>
                  <span style={{ fontSize: "11.5px", color: "#1F2B4D", background: "#F1F4F8", border: "1px solid #E4E8EF", borderRadius: "8px", padding: "5px 11px" }}>Availability
                  </span>
                  <span style={{ fontSize: "11.5px", color: "#1F2B4D", background: "#F1F4F8", border: "1px solid #E4E8EF", borderRadius: "8px", padding: "5px 11px" }}>Stock alerts
                  </span>
                </div>
                <div style={{ marginTop: "20px" }}>
                  <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "10px", marginTop: "8px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                        <span style={{ width: "26px", height: "26px", borderRadius: "50%", background: "#32415C", color: "#fff", fontFamily: "'Roboto Mono',monospace", fontSize: "9.5px", fontWeight: "700", display: "flex", alignItems: "center", justifyContent: "center" }}>1
                        </span>
                        <span style={{ fontSize: "13px", fontWeight: "700", color: "#1F2B4D" }}>Manager requests count
                        </span>
                      </div>
                      <span style={{ width: "22px", height: "2px", background: "linear-gradient(90deg,#2C8C99,#C9D4EC)", borderRadius: "2px" }}></span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                        <span style={{ width: "26px", height: "26px", borderRadius: "50%", background: "#32415C", color: "#fff", fontFamily: "'Roboto Mono',monospace", fontSize: "9.5px", fontWeight: "700", display: "flex", alignItems: "center", justifyContent: "center" }}>2
                        </span>
                        <span style={{ fontSize: "13px", fontWeight: "700", color: "#1F2B4D" }}>Employee confirms
                        </span>
                      </div>
                      <span style={{ width: "22px", height: "2px", background: "linear-gradient(90deg,#2C8C99,#C9D4EC)", borderRadius: "2px" }}></span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                        <span style={{ width: "26px", height: "26px", borderRadius: "50%", background: "#32415C", color: "#fff", fontFamily: "'Roboto Mono',monospace", fontSize: "9.5px", fontWeight: "700", display: "flex", alignItems: "center", justifyContent: "center" }}>3
                        </span>
                        <span style={{ fontSize: "13px", fontWeight: "700", color: "#1F2B4D" }}>Differences appear
                        </span>
                      </div>
                      <span style={{ width: "22px", height: "2px", background: "linear-gradient(90deg,#2C8C99,#C9D4EC)", borderRadius: "2px" }}></span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                        <span style={{ width: "26px", height: "26px", borderRadius: "50%", background: "#32415C", color: "#fff", fontFamily: "'Roboto Mono',monospace", fontSize: "9.5px", fontWeight: "700", display: "flex", alignItems: "center", justifyContent: "center" }}>4
                        </span>
                        <span style={{ fontSize: "13px", fontWeight: "700", color: "#1F2B4D" }}>Inventory reviewed
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ background: "#F9FAFB", padding: "74px 24px" }}>
          <div style={{ maxWidth: "1120px", margin: "0 auto" }}>
            <div style={{ maxWidth: "700px" }}>
              <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "10.5px", letterSpacing: ".14em", color: "#2C8C99", textTransform: "uppercase" }}>Structured orders
              </div>
              <h2 style={{ fontSize: "28px", fontWeight: "800", color: "#1F2B4D", lineHeight: "1.16", margin: "12px 0 0" }}>Send and receive orders without re-entering product data.
              </h2>
              <p style={{ fontSize: "14.5px", color: "#667085", lineHeight: "1.6", margin: "13px 0 0" }}>Retailers and manufacturers exchange structured orders using the same connected catalogue and product references.
              </p>
            </div>
            <div style={{ display: "flex", gap: "44px", alignItems: "center", flexWrap: "wrap", marginTop: "30px" }}>
              <div style={{ flex: "1", minWidth: "300px", order: "2" }}>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  <span style={{ fontSize: "11.5px", color: "#1F2B4D", background: "#F1F4F8", border: "1px solid #E4E8EF", borderRadius: "8px", padding: "5px 11px" }}>Retailer purchase orders
                  </span>
                  <span style={{ fontSize: "11.5px", color: "#1F2B4D", background: "#F1F4F8", border: "1px solid #E4E8EF", borderRadius: "8px", padding: "5px 11px" }}>Manufacturer order intake
                  </span>
                  <span style={{ fontSize: "11.5px", color: "#1F2B4D", background: "#F1F4F8", border: "1px solid #E4E8EF", borderRadius: "8px", padding: "5px 11px" }}>Order confirmation
                  </span>
                  <span style={{ fontSize: "11.5px", color: "#1F2B4D", background: "#F1F4F8", border: "1px solid #E4E8EF", borderRadius: "8px", padding: "5px 11px" }}>Availability responses
                  </span>
                  <span style={{ fontSize: "11.5px", color: "#1F2B4D", background: "#F1F4F8", border: "1px solid #E4E8EF", borderRadius: "8px", padding: "5px 11px" }}>Incoming products
                  </span>
                  <span style={{ fontSize: "11.5px", color: "#1F2B4D", background: "#F1F4F8", border: "1px solid #E4E8EF", borderRadius: "8px", padding: "5px 11px" }}>Reorders
                  </span>
                  <span style={{ fontSize: "11.5px", color: "#1F2B4D", background: "#F1F4F8", border: "1px solid #E4E8EF", borderRadius: "8px", padding: "5px 11px" }}>Transfers
                  </span>
                  <span style={{ fontSize: "11.5px", color: "#1F2B4D", background: "#F1F4F8", border: "1px solid #E4E8EF", borderRadius: "8px", padding: "5px 11px" }}>Structured product references
                  </span>
                  <span style={{ fontSize: "11.5px", color: "#1F2B4D", background: "#F1F4F8", border: "1px solid #E4E8EF", borderRadius: "8px", padding: "5px 11px" }}>Order-status tracking
                  </span>
                  <span style={{ fontSize: "11.5px", color: "#1F2B4D", background: "#F1F4F8", border: "1px solid #E4E8EF", borderRadius: "8px", padding: "5px 11px" }}>Demand-based reorder suggestions
                  </span>
                </div>
                <div style={{ marginTop: "20px" }}>
                  <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "10px", marginTop: "8px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                        <span style={{ width: "26px", height: "26px", borderRadius: "50%", background: "#32415C", color: "#fff", fontFamily: "'Roboto Mono',monospace", fontSize: "9.5px", fontWeight: "700", display: "flex", alignItems: "center", justifyContent: "center" }}>1
                        </span>
                        <span style={{ fontSize: "13px", fontWeight: "700", color: "#1F2B4D" }}>Create order
                        </span>
                      </div>
                      <span style={{ width: "22px", height: "2px", background: "linear-gradient(90deg,#2C8C99,#C9D4EC)", borderRadius: "2px" }}></span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                        <span style={{ width: "26px", height: "26px", borderRadius: "50%", background: "#32415C", color: "#fff", fontFamily: "'Roboto Mono',monospace", fontSize: "9.5px", fontWeight: "700", display: "flex", alignItems: "center", justifyContent: "center" }}>2
                        </span>
                        <span style={{ fontSize: "13px", fontWeight: "700", color: "#1F2B4D" }}>Partner confirms
                        </span>
                      </div>
                      <span style={{ width: "22px", height: "2px", background: "linear-gradient(90deg,#2C8C99,#C9D4EC)", borderRadius: "2px" }}></span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                        <span style={{ width: "26px", height: "26px", borderRadius: "50%", background: "#32415C", color: "#fff", fontFamily: "'Roboto Mono',monospace", fontSize: "9.5px", fontWeight: "700", display: "flex", alignItems: "center", justifyContent: "center" }}>3
                        </span>
                        <span style={{ fontSize: "13px", fontWeight: "700", color: "#1F2B4D" }}>Track status
                        </span>
                      </div>
                      <span style={{ width: "22px", height: "2px", background: "linear-gradient(90deg,#2C8C99,#C9D4EC)", borderRadius: "2px" }}></span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                        <span style={{ width: "26px", height: "26px", borderRadius: "50%", background: "#32415C", color: "#fff", fontFamily: "'Roboto Mono',monospace", fontSize: "9.5px", fontWeight: "700", display: "flex", alignItems: "center", justifyContent: "center" }}>4
                        </span>
                        <span style={{ fontSize: "13px", fontWeight: "700", color: "#1F2B4D" }}>Receive products
                        </span>
                      </div>
                      <span style={{ width: "22px", height: "2px", background: "linear-gradient(90deg,#2C8C99,#C9D4EC)", borderRadius: "2px" }}></span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                        <span style={{ width: "26px", height: "26px", borderRadius: "50%", background: "#32415C", color: "#fff", fontFamily: "'Roboto Mono',monospace", fontSize: "9.5px", fontWeight: "700", display: "flex", alignItems: "center", justifyContent: "center" }}>5
                        </span>
                        <span style={{ fontSize: "13px", fontWeight: "700", color: "#1F2B4D" }}>Update inventory
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div style={{ display: "flex", gap: "10px", alignItems: "flex-start", marginTop: "18px", background: "#EFF7F8", borderLeft: "3px solid #2C8C99", borderRadius: "0 10px 10px 0", padding: "12px 15px" }}>
                  <span style={{ fontSize: "12.5px", color: "#1F2B4D", lineHeight: "1.5" }}>
                    <strong>Fewer formats, fewer errors, less repeated data entry.
                    </strong>
                  </span>
                </div>
              </div>
              <div style={{ flex: "1.15", minWidth: "320px", order: "1" }}>
                <div style={{ borderRadius: "18px", overflow: "hidden", boxShadow: "0 26px 56px rgba(31,43,77,.2)", border: "1px solid #E4E8EF" }}>
                  <img src="/images/backoffice-wide-orders.jpg" alt="AXY Back Office orders view with sell-in and sell-through KPIs, order stages and structured product line items by brand" style={{ display: "block", width: "100%", height: "auto" }} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ background: "#fff", padding: "74px 24px" }}>
          <div style={{ maxWidth: "1120px", margin: "0 auto" }}>
            <div style={{ maxWidth: "700px" }}>
              <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "10.5px", letterSpacing: ".14em", color: "#2C8C99", textTransform: "uppercase" }}>Customers and operations
              </div>
              <h2 style={{ fontSize: "28px", fontWeight: "800", color: "#1F2B4D", lineHeight: "1.16", margin: "12px 0 0" }}>Keep customer activity and business actions connected.
              </h2>
              <p style={{ fontSize: "14.5px", color: "#667085", lineHeight: "1.6", margin: "13px 0 0" }}>Manage customer profiles, commercial activity and after-sales workflows beyond the store floor.
              </p>
            </div>
            <div style={{ display: "flex", gap: "44px", alignItems: "center", flexWrap: "wrap", marginTop: "30px" }}>
              <div style={{ flex: "1.05", minWidth: "320px" }}>
                <div style={{ background: "#F7F8FA", border: "1px solid #E4E8EF", borderRadius: "16px", overflow: "hidden", boxShadow: "0 18px 40px rgba(31,43,77,.1)" }}>
                  <div style={{ background: "#1F2B4D", padding: "14px 18px", display: "flex", alignItems: "center", gap: "12px" }}>
                    <span style={{ width: "36px", height: "36px", borderRadius: "50%", background: "#32415C", color: "#fff", fontSize: "13px", fontWeight: "800", display: "flex", alignItems: "center", justifyContent: "center" }}>AB
                    </span>
                    <div>
                      <div style={{ fontSize: "13.5px", fontWeight: "800", color: "#fff" }}>Alfred Brener Stieglitz
                      </div>
                      <div style={{ fontSize: "10.5px", color: "#9fb0cf" }}>Loyal · Revenue € 237,570 · EN
                      </div>
                    </div>
                  </div>
                  <div style={{ padding: "14px", display: "flex", flexDirection: "column", gap: "8px" }}>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "10px", background: "#fff", border: "1px solid #E7EAF0", borderRadius: "10px", padding: "11px 13px" }}>
                      <span style={{ fontSize: "12px", fontWeight: "700", color: "#1F2B4D" }}>Wedding anniversary present
                      </span>
                      <span style={{ fontSize: "10.5px", color: "#667085" }}>Active · € 36,512
                      </span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "10px", background: "#fff", border: "1px solid #E7EAF0", borderRadius: "10px", padding: "11px 13px" }}>
                      <span style={{ fontSize: "12px", fontWeight: "700", color: "#1F2B4D" }}>Present for business partner
                      </span>
                      <span style={{ fontSize: "10.5px", color: "#667085" }}>Won · € 23,081
                      </span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "10px", background: "#fff", border: "1px solid #E7EAF0", borderRadius: "10px", padding: "11px 13px" }}>
                      <span style={{ fontSize: "12px", fontWeight: "700", color: "#1F2B4D" }}>Buying a new wristwatch
                      </span>
                      <span style={{ fontSize: "10.5px", color: "#667085" }}>Quotation · € 24,856
                      </span>
                    </div>
                    <div style={{ display: "flex", gap: "6px", flexWrap: "wrap", marginTop: "2px" }}>
                      <span style={{ fontSize: "9.5px", color: "#2C8C99", background: "#EFF7F8", border: "1px solid #C9E2E6", borderRadius: "6px", padding: "3px 8px" }}>Visits
                      </span>
                      <span style={{ fontSize: "9.5px", color: "#2C8C99", background: "#EFF7F8", border: "1px solid #C9E2E6", borderRadius: "6px", padding: "3px 8px" }}>Tickets
                      </span>
                      <span style={{ fontSize: "9.5px", color: "#2C8C99", background: "#EFF7F8", border: "1px solid #C9E2E6", borderRadius: "6px", padding: "3px 8px" }}>Follow-ups
                      </span>
                      <span style={{ fontSize: "9.5px", color: "#2C8C99", background: "#EFF7F8", border: "1px solid #C9E2E6", borderRadius: "6px", padding: "3px 8px" }}>Warranty
                      </span>
                      <span style={{ fontSize: "9.5px", color: "#2C8C99", background: "#EFF7F8", border: "1px solid #C9E2E6", borderRadius: "6px", padding: "3px 8px" }}>Consent
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div style={{ flex: "1", minWidth: "300px" }}>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  <span style={{ fontSize: "11.5px", color: "#1F2B4D", background: "#F1F4F8", border: "1px solid #E4E8EF", borderRadius: "8px", padding: "5px 11px" }}>Customer profiles
                  </span>
                  <span style={{ fontSize: "11.5px", color: "#1F2B4D", background: "#F1F4F8", border: "1px solid #E4E8EF", borderRadius: "8px", padding: "5px 11px" }}>Purchase history
                  </span>
                  <span style={{ fontSize: "11.5px", color: "#1F2B4D", background: "#F1F4F8", border: "1px solid #E4E8EF", borderRadius: "8px", padding: "5px 11px" }}>Sales visits
                  </span>
                  <span style={{ fontSize: "11.5px", color: "#1F2B4D", background: "#F1F4F8", border: "1px solid #E4E8EF", borderRadius: "8px", padding: "5px 11px" }}>Tasks & tickets
                  </span>
                  <span style={{ fontSize: "11.5px", color: "#1F2B4D", background: "#F1F4F8", border: "1px solid #E4E8EF", borderRadius: "8px", padding: "5px 11px" }}>Follow-ups
                  </span>
                  <span style={{ fontSize: "11.5px", color: "#1F2B4D", background: "#F1F4F8", border: "1px solid #E4E8EF", borderRadius: "8px", padding: "5px 11px" }}>Offers & invoices
                  </span>
                  <span style={{ fontSize: "11.5px", color: "#1F2B4D", background: "#F1F4F8", border: "1px solid #E4E8EF", borderRadius: "8px", padding: "5px 11px" }}>Appointments
                  </span>
                  <span style={{ fontSize: "11.5px", color: "#1F2B4D", background: "#F1F4F8", border: "1px solid #E4E8EF", borderRadius: "8px", padding: "5px 11px" }}>Service requests
                  </span>
                  <span style={{ fontSize: "11.5px", color: "#1F2B4D", background: "#F1F4F8", border: "1px solid #E4E8EF", borderRadius: "8px", padding: "5px 11px" }}>Warranty information
                  </span>
                  <span style={{ fontSize: "11.5px", color: "#1F2B4D", background: "#F1F4F8", border: "1px solid #E4E8EF", borderRadius: "8px", padding: "5px 11px" }}>Consent preferences
                  </span>
                  <span style={{ fontSize: "11.5px", color: "#1F2B4D", background: "#F1F4F8", border: "1px solid #E4E8EF", borderRadius: "8px", padding: "5px 11px" }}>Customer communication
                  </span>
                  <span style={{ fontSize: "11.5px", color: "#1F2B4D", background: "#F1F4F8", border: "1px solid #E4E8EF", borderRadius: "8px", padding: "5px 11px" }}>Employee responsibilities
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ background: "#FCF3EE", padding: "74px 24px" }}>
          <div style={{ maxWidth: "1120px", margin: "0 auto" }}>
            <div style={{ maxWidth: "700px" }}>
              <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "10.5px", letterSpacing: ".14em", color: "#B5744B", textTransform: "uppercase" }}>Connected content
              </div>
              <h2 style={{ fontSize: "28px", fontWeight: "800", color: "#1F2B4D", lineHeight: "1.16", margin: "12px 0 0" }}>Create product communication once. Reuse it across the network.
              </h2>
              <p style={{ fontSize: "14.5px", color: "#7a6152", lineHeight: "1.6", margin: "13px 0 0" }}>Manufacturers and retailers can create announcements, collection stories and campaigns that authorised partners can approve, adapt and share.
              </p>
            </div>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "28px" }}>
              <div style={{ flex: "1", minWidth: "210px", background: "#fff", border: "1px solid #F0DDD2", borderRadius: "14px", padding: "18px", position: "relative" }}>
                <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "10px", color: "#B5744B" }}>STEP 01
                </div>
                <div style={{ fontSize: "14px", fontWeight: "800", color: "#1F2B4D", marginTop: "7px" }}>Brand creates
                </div>
                <p style={{ fontSize: "12px", color: "#7a6152", lineHeight: "1.5", margin: "6px 0 0" }}>New collection story prepared once
                </p>
              </div>
              <div style={{ flex: "1", minWidth: "210px", background: "#fff", border: "1px solid #F0DDD2", borderRadius: "14px", padding: "18px", position: "relative" }}>
                <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "10px", color: "#B5744B" }}>STEP 02
                </div>
                <div style={{ fontSize: "14px", fontWeight: "800", color: "#1F2B4D", marginTop: "7px" }}>Retailer approves or adapts
                </div>
                <p style={{ fontSize: "12px", color: "#7a6152", lineHeight: "1.5", margin: "6px 0 0" }}>Reviewed and made local
                </p>
              </div>
              <div style={{ flex: "1", minWidth: "210px", background: "#fff", border: "1px solid #F0DDD2", borderRadius: "14px", padding: "18px", position: "relative" }}>
                <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "10px", color: "#B5744B" }}>STEP 03
                </div>
                <div style={{ fontSize: "14px", fontWeight: "800", color: "#1F2B4D", marginTop: "7px" }}>Customer receives
                </div>
                <p style={{ fontSize: "12px", color: "#7a6152", lineHeight: "1.5", margin: "6px 0 0" }}>Delivered in the retailer-branded app
                </p>
              </div>
              <div style={{ flex: "1", minWidth: "210px", background: "#fff", border: "1px solid #F0DDD2", borderRadius: "14px", padding: "18px", position: "relative" }}>
                <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "10px", color: "#B5744B" }}>STEP 04
                </div>
                <div style={{ fontSize: "14px", fontWeight: "800", color: "#1F2B4D", marginTop: "7px" }}>Customer reacts
                </div>
                <p style={{ fontSize: "12px", color: "#7a6152", lineHeight: "1.5", margin: "6px 0 0" }}>Interest flows back as a signal
                </p>
              </div>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "22px" }}>
              <span style={{ fontSize: "11.5px", color: "#7a4a2e", background: "#fff", border: "1px solid #F0DDD2", borderRadius: "8px", padding: "5px 11px" }}>New product launches
              </span>
              <span style={{ fontSize: "11.5px", color: "#7a4a2e", background: "#fff", border: "1px solid #F0DDD2", borderRadius: "8px", padding: "5px 11px" }}>Collection announcements
              </span>
              <span style={{ fontSize: "11.5px", color: "#7a4a2e", background: "#fff", border: "1px solid #F0DDD2", borderRadius: "8px", padding: "5px 11px" }}>Product stories
              </span>
              <span style={{ fontSize: "11.5px", color: "#7a4a2e", background: "#fff", border: "1px solid #F0DDD2", borderRadius: "8px", padding: "5px 11px" }}>Events
              </span>
              <span style={{ fontSize: "11.5px", color: "#7a4a2e", background: "#fff", border: "1px solid #F0DDD2", borderRadius: "8px", padding: "5px 11px" }}>Customer campaigns
              </span>
              <span style={{ fontSize: "11.5px", color: "#7a4a2e", background: "#fff", border: "1px solid #F0DDD2", borderRadius: "8px", padding: "5px 11px" }}>Post-visit content
              </span>
              <span style={{ fontSize: "11.5px", color: "#7a4a2e", background: "#fff", border: "1px solid #F0DDD2", borderRadius: "8px", padding: "5px 11px" }}>Partner communication
              </span>
              <span style={{ fontSize: "11.5px", color: "#7a4a2e", background: "#fff", border: "1px solid #F0DDD2", borderRadius: "8px", padding: "5px 11px" }}>Retailer approval
              </span>
              <span style={{ fontSize: "11.5px", color: "#7a4a2e", background: "#fff", border: "1px solid #F0DDD2", borderRadius: "8px", padding: "5px 11px" }}>Customer App distribution
              </span>
              <span style={{ fontSize: "11.5px", color: "#7a4a2e", background: "#fff", border: "1px solid #F0DDD2", borderRadius: "8px", padding: "5px 11px" }}>Product-linked CTAs
              </span>
            </div>
            <div style={{ display: "flex", gap: "10px", alignItems: "flex-start", marginTop: "18px", background: "#fff", borderLeft: "3px solid #C98B63", borderRadius: "0 10px 10px 0", padding: "12px 15px" }}>
              <span style={{ fontSize: "12.5px", color: "#1F2B4D", lineHeight: "1.5" }}>
                <strong>Spend less time recreating content and more time using it to support sales.
                </strong>
              </span>
            </div>
          </div>
        </div>
        <div style={{ background: "#1F2B4D", padding: "74px 24px" }}>
          <div style={{ maxWidth: "1120px", margin: "0 auto" }}>
            <div style={{ maxWidth: "700px" }}>
              <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "10.5px", letterSpacing: ".14em", color: "#7fd4de", textTransform: "uppercase" }}>Business intelligence
              </div>
              <h2 style={{ fontSize: "28px", fontWeight: "800", color: "#fff", lineHeight: "1.16", margin: "12px 0 0" }}>Turn connected activity into clearer decisions.
              </h2>
              <p style={{ fontSize: "14.5px", color: "#B9C2D8", lineHeight: "1.6", margin: "13px 0 0" }}>Understand how products, customers, brands, stores and teams are performing — through dashboards built from connected operational activity, not a dense wall of metrics.
              </p>
            </div>
            <div style={{ display: "flex", gap: "44px", alignItems: "center", flexWrap: "wrap", marginTop: "30px" }}>
              <div style={{ flex: "1.15", minWidth: "320px" }}>
                <div style={{ borderRadius: "18px", overflow: "hidden", boxShadow: "0 30px 66px rgba(0,0,0,.4)", border: "1px solid rgba(255,255,255,.14)" }}>
                  <img src="/images/backoffice-wide-reorder.jpg" alt="AXY Back Office reorder dashboard with remaining budget, sell-in, sell-through, gross margin and rotation KPIs above a product grid" style={{ display: "block", width: "100%", height: "auto" }} />
                </div>
              </div>
              <div style={{ flex: "1", minWidth: "300px" }}>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  <span style={{ fontSize: "11.5px", color: "#DDE4F0", background: "rgba(255,255,255,.08)", border: "1px solid rgba(255,255,255,.16)", borderRadius: "8px", padding: "5px 11px" }}>Sales & conversion
                  </span>
                  <span style={{ fontSize: "11.5px", color: "#DDE4F0", background: "rgba(255,255,255,.08)", border: "1px solid rgba(255,255,255,.16)", borderRadius: "8px", padding: "5px 11px" }}>Store visits
                  </span>
                  <span style={{ fontSize: "11.5px", color: "#DDE4F0", background: "rgba(255,255,255,.08)", border: "1px solid rgba(255,255,255,.16)", borderRadius: "8px", padding: "5px 11px" }}>Product interest
                  </span>
                  <span style={{ fontSize: "11.5px", color: "#DDE4F0", background: "rgba(255,255,255,.08)", border: "1px solid rgba(255,255,255,.16)", borderRadius: "8px", padding: "5px 11px" }}>Customer activity
                  </span>
                  <span style={{ fontSize: "11.5px", color: "#DDE4F0", background: "rgba(255,255,255,.08)", border: "1px solid rgba(255,255,255,.16)", borderRadius: "8px", padding: "5px 11px" }}>Brand performance
                  </span>
                  <span style={{ fontSize: "11.5px", color: "#DDE4F0", background: "rgba(255,255,255,.08)", border: "1px solid rgba(255,255,255,.16)", borderRadius: "8px", padding: "5px 11px" }}>Stock health
                  </span>
                  <span style={{ fontSize: "11.5px", color: "#DDE4F0", background: "rgba(255,255,255,.08)", border: "1px solid rgba(255,255,255,.16)", borderRadius: "8px", padding: "5px 11px" }}>Orders & reorders
                  </span>
                  <span style={{ fontSize: "11.5px", color: "#DDE4F0", background: "rgba(255,255,255,.08)", border: "1px solid rgba(255,255,255,.16)", borderRadius: "8px", padding: "5px 11px" }}>Follow-up discipline
                  </span>
                  <span style={{ fontSize: "11.5px", color: "#DDE4F0", background: "rgba(255,255,255,.08)", border: "1px solid rgba(255,255,255,.16)", borderRadius: "8px", padding: "5px 11px" }}>Employee performance
                  </span>
                  <span style={{ fontSize: "11.5px", color: "#DDE4F0", background: "rgba(255,255,255,.08)", border: "1px solid rgba(255,255,255,.16)", borderRadius: "8px", padding: "5px 11px" }}>Store comparison
                  </span>
                  <span style={{ fontSize: "11.5px", color: "#DDE4F0", background: "rgba(255,255,255,.08)", border: "1px solid rgba(255,255,255,.16)", borderRadius: "8px", padding: "5px 11px" }}>Demand signals
                  </span>
                  <span style={{ fontSize: "11.5px", color: "#DDE4F0", background: "rgba(255,255,255,.08)", border: "1px solid rgba(255,255,255,.16)", borderRadius: "8px", padding: "5px 11px" }}>Opportunities to act on
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ background: "#fff", padding: "74px 24px" }}>
          <div style={{ maxWidth: "1120px", margin: "0 auto" }}>
            <div style={{ maxWidth: "700px" }}>
              <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "10.5px", letterSpacing: ".14em", color: "#2C8C99", textTransform: "uppercase" }}>Connect your systems
              </div>
              <h2 style={{ fontSize: "28px", fontWeight: "800", color: "#1F2B4D", lineHeight: "1.16", margin: "12px 0 0" }}>Keep your current systems — and connect them to AXY.
              </h2>
              <p style={{ fontSize: "14.5px", color: "#667085", lineHeight: "1.6", margin: "13px 0 0" }}>Connect ERP, CRM, e-commerce, accounting and product databases through APIs, while AXY acts as the shared retail sales and collaboration layer.
              </p>
            </div>
            <div style={{ display: "flex", gap: "16px", alignItems: "center", flexWrap: "wrap", marginTop: "32px", background: "#F9FAFB", border: "1px solid #E4E8EF", borderRadius: "18px", padding: "26px 22px" }}>
              <div style={{ flex: "1", minWidth: "200px", display: "flex", flexDirection: "column", gap: "8px" }}>
                <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "9px", letterSpacing: ".1em", color: "#8a93a6", textTransform: "uppercase", marginBottom: "2px" }}>Existing systems
                </div>
                <div style={{ background: "#fff", border: "1px solid #E4E8EF", borderRadius: "9px", padding: "9px 12px", fontSize: "12.5px", fontWeight: "600", color: "#3a4358" }}>ERP
                </div>
                <div style={{ background: "#fff", border: "1px solid #E4E8EF", borderRadius: "9px", padding: "9px 12px", fontSize: "12.5px", fontWeight: "600", color: "#3a4358" }}>CRM
                </div>
                <div style={{ background: "#fff", border: "1px solid #E4E8EF", borderRadius: "9px", padding: "9px 12px", fontSize: "12.5px", fontWeight: "600", color: "#3a4358" }}>E-commerce
                </div>
                <div style={{ background: "#fff", border: "1px solid #E4E8EF", borderRadius: "9px", padding: "9px 12px", fontSize: "12.5px", fontWeight: "600", color: "#3a4358" }}>Accounting
                </div>
                <div style={{ background: "#fff", border: "1px solid #E4E8EF", borderRadius: "9px", padding: "9px 12px", fontSize: "12.5px", fontWeight: "600", color: "#3a4358" }}>Product database
                </div>
              </div>
              <div style={{ flexShrink: "0", color: "#2C8C99", fontSize: "20px", fontWeight: "700" }}>⇄
              </div>
              <div style={{ flex: "1.1", minWidth: "220px" }}>
                <div style={{ background: "linear-gradient(135deg,#1F2B4D,#2C6570)", borderRadius: "16px", padding: "22px", textAlign: "center", boxShadow: "0 20px 44px rgba(31,43,77,.28)" }}>
                  <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "9px", letterSpacing: ".12em", color: "#7fd4de", textTransform: "uppercase" }}>Shared layer
                  </div>
                  <div style={{ fontSize: "17px", fontWeight: "800", color: "#fff", marginTop: "8px" }}>AXY Back Office
                  </div>
                  <div style={{ fontSize: "11.5px", color: "#C9D2E4", marginTop: "6px", lineHeight: "1.5" }}>Standardised product, business & operational data
                  </div>
                </div>
              </div>
              <div style={{ flexShrink: "0", color: "#2C8C99", fontSize: "20px", fontWeight: "700" }}>⇄
              </div>
              <div style={{ flex: "1", minWidth: "200px", display: "flex", flexDirection: "column", gap: "8px" }}>
                <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "9px", letterSpacing: ".1em", color: "#8a93a6", textTransform: "uppercase", marginBottom: "2px" }}>Connected surfaces
                </div>
                <div style={{ background: "#EFF7F8", border: "1px solid #C9E2E6", borderRadius: "9px", padding: "9px 12px", fontSize: "12.5px", fontWeight: "600", color: "#1C6470" }}>Sales App
                </div>
                <div style={{ background: "#EFF7F8", border: "1px solid #C9E2E6", borderRadius: "9px", padding: "9px 12px", fontSize: "12.5px", fontWeight: "600", color: "#1C6470" }}>Customer App
                </div>
                <div style={{ background: "#EFF7F8", border: "1px solid #C9E2E6", borderRadius: "9px", padding: "9px 12px", fontSize: "12.5px", fontWeight: "600", color: "#1C6470" }}>Partner network
                </div>
              </div>
            </div>
            <div style={{ textAlign: "center", fontSize: "12.5px", color: "#8a93a6", marginTop: "14px" }}>AXY adds a layer between your systems — it doesn’t replace the software you already rely on.
            </div>
          </div>
        </div>
        <div style={{ background: "#F9FAFB", padding: "74px 24px" }}>
          <div style={{ maxWidth: "1120px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto" }}>
              <h2 style={{ fontSize: "28px", fontWeight: "800", color: "#1F2B4D", lineHeight: "1.16" }}>Less reformatting. Fewer emails. Better cooperation.
              </h2>
            </div>
            <div className="bo-four" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "14px", marginTop: "32px" }}>
              <div style={{ background: "#fff", border: "1px solid #E4E8EF", borderRadius: "14px", padding: "20px" }}>
                <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "10px", color: "#2C8C99" }}>01
                </div>
                <div style={{ fontSize: "14.5px", fontWeight: "800", color: "#1F2B4D", marginTop: "8px", lineHeight: "1.25" }}>Maintain data once
                </div>
                <p style={{ fontSize: "12.5px", color: "#667085", lineHeight: "1.55", margin: "7px 0 0" }}>Products and business information, structured a single time.
                </p>
              </div>
              <div style={{ background: "#fff", border: "1px solid #E4E8EF", borderRadius: "14px", padding: "20px" }}>
                <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "10px", color: "#2C8C99" }}>02
                </div>
                <div style={{ fontSize: "14.5px", fontWeight: "800", color: "#1F2B4D", marginTop: "8px", lineHeight: "1.25" }}>Keep partners updated
                </div>
                <p style={{ fontSize: "12.5px", color: "#667085", lineHeight: "1.55", margin: "7px 0 0" }}>Approved changes reach authorised partners automatically.
                </p>
              </div>
              <div style={{ background: "#fff", border: "1px solid #E4E8EF", borderRadius: "14px", padding: "20px" }}>
                <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "10px", color: "#2C8C99" }}>03
                </div>
                <div style={{ fontSize: "14.5px", fontWeight: "800", color: "#1F2B4D", marginTop: "8px", lineHeight: "1.25" }}>Stock & orders in one flow
                </div>
                <p style={{ fontSize: "12.5px", color: "#667085", lineHeight: "1.55", margin: "7px 0 0" }}>From count to reorder without re-entering data.
                </p>
              </div>
              <div style={{ background: "#fff", border: "1px solid #E4E8EF", borderRadius: "14px", padding: "20px" }}>
                <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "10px", color: "#2C8C99" }}>04
                </div>
                <div style={{ fontSize: "14.5px", fontWeight: "800", color: "#1F2B4D", marginTop: "8px", lineHeight: "1.25" }}>Decide with connected data
                </div>
                <p style={{ fontSize: "12.5px", color: "#667085", lineHeight: "1.55", margin: "7px 0 0" }}>Dashboards built from real operational activity.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div style={{ position: "relative", overflow: "hidden", background: "linear-gradient(135deg,#1F2B4D,#32415C 58%,#2C6570)", padding: "76px 24px" }}>
          <div style={{ position: "absolute", bottom: "-120px", right: "-60px", width: "420px", height: "320px", background: "radial-gradient(circle,rgba(51,214,164,.12),transparent 70%)" }}></div>
          <div style={{ position: "relative", maxWidth: "760px", margin: "0 auto", textAlign: "center" }}>
            <h2 style={{ fontSize: "29px", fontWeight: "800", color: "#fff", lineHeight: "1.14" }}>Replace fragmented retail administration with one connected workspace.
            </h2>
            <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap", marginTop: "24px" }}>
              <a className="hv102" href="/create-account" style={{ display: "inline-flex", padding: "14px 24px", background: "#fff", color: "#1F2B4D", borderRadius: "10px", fontSize: "14.5px", fontWeight: "700" }}>Create free account
              </a>
              <a className="hv103" href="/book-a-walkthrough#schedule" style={{ display: "inline-flex", padding: "14px 24px", border: "1.5px solid rgba(255,255,255,.5)", color: "#fff", borderRadius: "10px", fontSize: "14.5px", fontWeight: "600" }}>Get guided setup
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
