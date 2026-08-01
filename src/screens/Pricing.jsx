import React from 'react';
import { css } from '../lib/css.js';

export default function Pricing(v) {
  const { pAddBU, pAddBUCost, pAddUserCost, pAddUsers, pAiAria, pAiOn, pAiToggle, pAiToggleLabel, pAiToggleStyle, pAnnAria, pAnnCost, pAnnDec, pAnnInc, pAnnOn, pAnnToggle, pAnnToggleLabel, pAnnToggleStyle, pAnnUnits, pBU, pBUDec, pBUInc, pFormEditable, pFormOpen, pFormShown, pFree0Style, pFree1Style, pFree2Style, pFree3Style, pFree4Style, pFree5Style, pFree6Style, pFree7Style, pFree8Style, pFreeAria0, pFreeAria1, pFreeAria2, pFreeAria3, pFreeAria4, pFreeAria5, pFreeAria6, pFreeAria7, pFreeAria8, pFreeGo0, pFreeGo1, pFreeGo2, pFreeGo3, pFreeGo4, pFreeGo5, pFreeGo6, pFreeGo7, pFreeGo8, pFt0Label, pFt0PillStyle, pFt0Style, pFt1Label, pFt1PillStyle, pFt1Style, pFt2Label, pFt2PillStyle, pFt2Style, pFt3Label, pFt3PillStyle, pFt3Style, pFt4Label, pFt4PillStyle, pFt4Style, pFtAria0, pFtAria1, pFtAria2, pFtAria3, pFtAria4, pFtToggle0, pFtToggle1, pFtToggle2, pFtToggle3, pFtToggle4, pHasAddBU, pHasAddUsers, pMsgAria, pMsgCost, pMsgOn, pMsgToggle, pMsgToggleLabel, pMsgToggleStyle, pOrgCheckout, pOrgClose, pOrgModalOpen, pRec, pScrollBuild, pSubmit, pSubmitted, pTotalLabel, pUsers, pUsersDec, pUsersInc, pf_0, pf_1, pf_2, pf_3, pf_4, pf_5, pf_6, pf_7, pf_8 } = v;
  return (
    <>
      <div data-screen-label="Pricing">
        <div style={{ position: "relative", overflow: "hidden", background: "linear-gradient(135deg,#1F2B4D,#32415C 60%,#2C6570)", padding: "66px 24px 60px" }}>
          <div style={{ position: "absolute", top: "-110px", right: "-70px", width: "440px", height: "340px", background: "radial-gradient(circle,rgba(51,214,164,.14),transparent 70%)" }}></div>
          <div style={{ position: "relative", maxWidth: "760px", margin: "0 auto", textAlign: "center" }}>
            <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "10.5px", letterSpacing: ".14em", color: "#7fd4de", textTransform: "uppercase" }}>Pricing
            </div>
            <h1 style={{ fontSize: "38px", fontWeight: "800", color: "#fff", lineHeight: "1.12", letterSpacing: "-.015em", margin: "14px 0 0" }}>Start free. Add only what your business needs.
            </h1>
            <p style={{ fontSize: "15px", color: "#C9D2E4", lineHeight: "1.6", margin: "16px auto 0", maxWidth: "600px" }}>AXY gives retailers and brands a free core platform. Add users, business units and modules as your business grows.
            </p>
            <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap", marginTop: "26px" }}>
              <a className="hv122" href="/create-account" style={{ display: "inline-flex", padding: "14px 24px", background: "#fff", color: "#1F2B4D", borderRadius: "10px", fontSize: "14.5px", fontWeight: "700" }}>Create free account
              </a>{' '}
              <button className="hv123" type="button" onClick={pScrollBuild} style={{ display: "inline-flex", padding: "14px 24px", border: "1.5px solid rgba(255,255,255,.5)", background: "transparent", color: "#fff", borderRadius: "10px", fontSize: "14.5px", fontWeight: "600", cursor: "pointer" }}>Build your plan
              </button>
            </div>
            <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "11px", color: "#9fb2d6", marginTop: "16px" }}>Start with one company, one admin user and one business unit. No credit card required.
            </div>
          </div>
        </div>
        <div style={{ background: "#fff", padding: "64px 24px" }}>
          <div style={{ maxWidth: "1080px", margin: "0 auto" }}>
            <div className="pr-cards" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "16px", alignItems: "stretch" }}>
              <div style={{ display: "flex", flexDirection: "column", background: "#F9FAFB", border: "1px solid #E4E8EF", borderRadius: "16px", padding: "24px" }}>
                <div style={{ fontSize: "12px", fontFamily: "'Roboto Mono',monospace", letterSpacing: ".1em", color: "#667085", textTransform: "uppercase" }}>AXY Starter
                </div>
                <div style={{ fontSize: "30px", fontWeight: "800", color: "#1F2B4D", marginTop: "10px" }}>Free
                </div>
                <p style={{ fontSize: "13px", color: "#667085", lineHeight: "1.55", margin: "8px 0 16px", minHeight: "56px" }}>For businesses setting up AXY, testing the workflow or using it lightly.
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: "8px", flex: "1" }}>
                  <div style={{ display: "flex", gap: "9px", alignItems: "flex-start", fontSize: "13px", color: "#3a4358", lineHeight: "1.45" }}>
                    <span style={{ color: "#2C8C99", fontWeight: "800" }}>✓
                    </span>
                    <span>1 company workspace
                    </span>
                  </div>
                  <div style={{ display: "flex", gap: "9px", alignItems: "flex-start", fontSize: "13px", color: "#3a4358", lineHeight: "1.45" }}>
                    <span style={{ color: "#2C8C99", fontWeight: "800" }}>✓
                    </span>
                    <span>1 admin user
                    </span>
                  </div>
                  <div style={{ display: "flex", gap: "9px", alignItems: "flex-start", fontSize: "13px", color: "#3a4358", lineHeight: "1.45" }}>
                    <span style={{ color: "#2C8C99", fontWeight: "800" }}>✓
                    </span>
                    <span>1 business unit or store
                    </span>
                  </div>
                  <div style={{ display: "flex", gap: "9px", alignItems: "flex-start", fontSize: "13px", color: "#3a4358", lineHeight: "1.45" }}>
                    <span style={{ color: "#2C8C99", fontWeight: "800" }}>✓
                    </span>
                    <span>Product catalogue and customer profiles
                    </span>
                  </div>
                  <div style={{ display: "flex", gap: "9px", alignItems: "flex-start", fontSize: "13px", color: "#3a4358", lineHeight: "1.45" }}>
                    <span style={{ color: "#2C8C99", fontWeight: "800" }}>✓
                    </span>
                    <span>Sales, customer and ticket workflows with free usage limits
                    </span>
                  </div>
                  <div style={{ display: "flex", gap: "9px", alignItems: "flex-start", fontSize: "13px", color: "#3a4358", lineHeight: "1.45" }}>
                    <span style={{ color: "#2C8C99", fontWeight: "800" }}>✓
                    </span>
                    <span>Warranty extension workflows
                    </span>
                  </div>
                  <div style={{ display: "flex", gap: "9px", alignItems: "flex-start", fontSize: "13px", color: "#3a4358", lineHeight: "1.45" }}>
                    <span style={{ color: "#2C8C99", fontWeight: "800" }}>✓
                    </span>
                    <span>Mobile daily business snapshot
                    </span>
                  </div>
                </div>
                <a className="hv124" href="/create-account" style={{ display: "inline-flex", justifyContent: "center", marginTop: "20px", padding: "12px", background: "#32415C", color: "#fff", borderRadius: "10px", fontSize: "14px", fontWeight: "700" }}>Create free account
                </a>
              </div>
              <div style={{ display: "flex", flexDirection: "column", background: "#fff", border: "2px solid #2C8C99", borderRadius: "16px", padding: "24px", boxShadow: "0 20px 44px rgba(44,140,153,.16)", position: "relative" }}>
                <span style={{ position: "absolute", top: "-12px", left: "50%", transform: "translateX(-50%)", fontFamily: "'Roboto Mono',monospace", fontSize: "9.5px", fontWeight: "700", letterSpacing: ".1em", color: "#fff", background: "#2C8C99", borderRadius: "20px", padding: "5px 14px" }}>RECOMMENDED
                </span>
                <div style={{ fontSize: "12px", fontFamily: "'Roboto Mono',monospace", letterSpacing: ".1em", color: "#1C6470", textTransform: "uppercase" }}>AXY Organization
                </div>
                <div style={{ display: "flex", alignItems: "baseline", gap: "4px", marginTop: "10px" }}>
                  <div style={{ fontSize: "30px", fontWeight: "800", color: "#1F2B4D" }}>€99
                  </div>
                  <div style={{ fontSize: "14px", color: "#667085" }}>/month
                  </div>
                </div>
                <p style={{ fontSize: "13px", color: "#667085", lineHeight: "1.55", margin: "8px 0 16px", minHeight: "56px" }}>For teams using AXY as an active part of their daily business.
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: "8px", flex: "1" }}>
                  <div style={{ display: "flex", gap: "9px", alignItems: "flex-start", fontSize: "13px", color: "#3a4358", lineHeight: "1.45" }}>
                    <span style={{ color: "#2C8C99", fontWeight: "800" }}>✓
                    </span>
                    <span>
                      <strong>Everything in AXY Starter
                      </strong>
                    </span>
                  </div>
                  <div style={{ display: "flex", gap: "9px", alignItems: "flex-start", fontSize: "13px", color: "#3a4358", lineHeight: "1.45" }}>
                    <span style={{ color: "#2C8C99", fontWeight: "800" }}>✓
                    </span>
                    <span>5 users included
                    </span>
                  </div>
                  <div style={{ display: "flex", gap: "9px", alignItems: "flex-start", fontSize: "13px", color: "#3a4358", lineHeight: "1.45" }}>
                    <span style={{ color: "#2C8C99", fontWeight: "800" }}>✓
                    </span>
                    <span>2 business units or stores included
                    </span>
                  </div>
                  <div style={{ display: "flex", gap: "9px", alignItems: "flex-start", fontSize: "13px", color: "#3a4358", lineHeight: "1.45" }}>
                    <span style={{ color: "#2C8C99", fontWeight: "800" }}>✓
                    </span>
                    <span>Announcements module included
                    </span>
                  </div>
                  <div style={{ display: "flex", gap: "9px", alignItems: "flex-start", fontSize: "13px", color: "#3a4358", lineHeight: "1.45" }}>
                    <span style={{ color: "#2C8C99", fontWeight: "800" }}>✓
                    </span>
                    <span>Messaging module included
                    </span>
                  </div>
                  <div style={{ display: "flex", gap: "9px", alignItems: "flex-start", fontSize: "13px", color: "#3a4358", lineHeight: "1.45" }}>
                    <span style={{ color: "#2C8C99", fontWeight: "800" }}>✓
                    </span>
                    <span>Expanded operational capacity
                    </span>
                  </div>
                  <div style={{ display: "flex", gap: "9px", alignItems: "flex-start", fontSize: "13px", color: "#3a4358", lineHeight: "1.45" }}>
                    <span style={{ color: "#2C8C99", fontWeight: "800" }}>✓
                    </span>
                    <span>Team access, collaboration and store-level workflows
                    </span>
                  </div>
                </div>
                <div style={{ display: "flex", gap: "8px", alignItems: "flex-start", marginTop: "14px", background: "#FBF6EE", border: "1px solid #EFE1CC", borderRadius: "9px", padding: "9px 11px", fontSize: "11.5px", color: "#8a6d3b", lineHeight: "1.45" }}>
                  <span>ⓘ
                  </span>
                  <span>WhatsApp and external message usage are billed separately.
                  </span>
                </div>
                <button className="hv125" type="button" onClick={pOrgCheckout} style={{ display: "inline-flex", justifyContent: "center", marginTop: "16px", padding: "12px", background: "#2C8C99", color: "#fff", border: "none", borderRadius: "10px", fontSize: "14px", fontWeight: "700", cursor: "pointer" }}>Start Organization
                </button>
              </div>
              <div style={{ display: "flex", flexDirection: "column", background: "#F9FAFB", border: "1px solid #E4E8EF", borderRadius: "16px", padding: "24px" }}>
                <div style={{ fontSize: "12px", fontFamily: "'Roboto Mono',monospace", letterSpacing: ".1em", color: "#667085", textTransform: "uppercase" }}>Build Your Plan
                </div>
                <div style={{ fontSize: "20px", fontWeight: "800", color: "#1F2B4D", marginTop: "10px", lineHeight: "1.2" }}>Calculated for your setup
                </div>
                <p style={{ fontSize: "13px", color: "#667085", lineHeight: "1.55", margin: "8px 0 16px", minHeight: "44px" }}>Choose the number of users, business units and modules your company needs.
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: "8px", flex: "1" }}>
                  <div style={{ display: "flex", gap: "9px", alignItems: "flex-start", fontSize: "13px", color: "#3a4358", lineHeight: "1.45" }}>
                    <span style={{ color: "#2C8C99", fontWeight: "800" }}>✓
                    </span>
                    <span>Add only the users you need
                    </span>
                  </div>
                  <div style={{ display: "flex", gap: "9px", alignItems: "flex-start", fontSize: "13px", color: "#3a4358", lineHeight: "1.45" }}>
                    <span style={{ color: "#2C8C99", fontWeight: "800" }}>✓
                    </span>
                    <span>Add business units or stores
                    </span>
                  </div>
                  <div style={{ display: "flex", gap: "9px", alignItems: "flex-start", fontSize: "13px", color: "#3a4358", lineHeight: "1.45" }}>
                    <span style={{ color: "#2C8C99", fontWeight: "800" }}>✓
                    </span>
                    <span>Choose modules by business unit
                    </span>
                  </div>
                  <div style={{ display: "flex", gap: "9px", alignItems: "flex-start", fontSize: "13px", color: "#3a4358", lineHeight: "1.45" }}>
                    <span style={{ color: "#2C8C99", fontWeight: "800" }}>✓
                    </span>
                    <span>See an estimated monthly price
                    </span>
                  </div>
                  <div style={{ display: "flex", gap: "9px", alignItems: "flex-start", fontSize: "13px", color: "#3a4358", lineHeight: "1.45" }}>
                    <span style={{ color: "#2C8C99", fontWeight: "800" }}>✓
                    </span>
                    <span>Request a tailored setup
                    </span>
                  </div>
                </div>
                <button className="hv126" type="button" onClick={pScrollBuild} style={{ display: "inline-flex", justifyContent: "center", marginTop: "20px", padding: "12px", background: "#fff", color: "#32415C", border: "1.5px solid #32415C", borderRadius: "10px", fontSize: "14px", fontWeight: "700", cursor: "pointer" }}>Build your plan
                </button>
              </div>
            </div>
          </div>
        </div>
        <div id="axy-pricing-free" style={{ background: "#F9FAFB", padding: "70px 24px" }}>
          <div style={{ maxWidth: "1080px", margin: "0 auto" }}>
            <div style={{ maxWidth: "640px" }}>
              <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "10.5px", letterSpacing: ".14em", color: "#2C8C99", textTransform: "uppercase" }}>AXY Starter
              </div>
              <h2 style={{ fontSize: "28px", fontWeight: "800", color: "#1F2B4D", lineHeight: "1.16", margin: "12px 0 0" }}>A complete foundation for getting started.
              </h2>
              <p style={{ fontSize: "14.5px", color: "#667085", lineHeight: "1.6", margin: "13px 0 0" }}>Set up your business, organise product and customer information, and begin capturing daily activity before adding paid capacity or specialist modules.
              </p>
            </div>
            <div className="pr-free" style={{ display: "grid", gridTemplateColumns: "0.85fr 1.15fr", gap: "24px", marginTop: "30px", alignItems: "start" }}>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "9px", alignContent: "flex-start" }}>
                <button type="button" onClick={pFreeGo0} aria-pressed={pFreeAria0} style={css(pFree0Style)}>Business Setup & Data
                </button>{' '}
                <button type="button" onClick={pFreeGo1} aria-pressed={pFreeAria1} style={css(pFree1Style)}>Product & Catalog
                </button>{' '}
                <button type="button" onClick={pFreeGo2} aria-pressed={pFreeAria2} style={css(pFree2Style)}>Sales App
                </button>{' '}
                <button type="button" onClick={pFreeGo3} aria-pressed={pFreeAria3} style={css(pFree3Style)}>Customer App
                </button>{' '}
                <button type="button" onClick={pFreeGo4} aria-pressed={pFreeAria4} style={css(pFree4Style)}>Ticketing
                </button>{' '}
                <button type="button" onClick={pFreeGo5} aria-pressed={pFreeAria5} style={css(pFree5Style)}>Store Operations
                </button>{' '}
                <button type="button" onClick={pFreeGo6} aria-pressed={pFreeAria6} style={css(pFree6Style)}>Warranty Extensions
                </button>{' '}
                <button type="button" onClick={pFreeGo7} aria-pressed={pFreeAria7} style={css(pFree7Style)}>Mobile Dashboard
                </button>{' '}
                <button type="button" onClick={pFreeGo8} aria-pressed={pFreeAria8} style={css(pFree8Style)}>Tasks & Opportunities
                </button>
              </div>
              <div style={{ background: "#fff", border: "1px solid #E4E8EF", borderRadius: "16px", padding: "22px", boxShadow: "0 8px 24px rgba(31,43,77,.06)", display: "flex", flexDirection: "column", minHeight: "340px" }}>
                <div className="pr-detail" style={{ display: "grid", gridTemplateColumns: "1fr 150px", gap: "18px", flex: "1" }}>
                  <div>
                    {pf_0 ? (<>
                      <div style={{ fontSize: "17px", fontWeight: "800", color: "#1F2B4D" }}>Business Setup & Data
                      </div>
                      <p style={{ fontSize: "13px", color: "#667085", lineHeight: "1.55", margin: "7px 0 14px" }}>Set up your company and start structured.
                      </p>
                      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                        <div style={{ display: "flex", gap: "9px", alignItems: "flex-start", fontSize: "13px", color: "#3a4358", lineHeight: "1.5" }}>
                          <span style={{ color: "#2C8C99", fontWeight: "800", marginTop: "1px" }}>✓
                          </span>
                          <span>One company workspace
                          </span>
                        </div>
                        <div style={{ display: "flex", gap: "9px", alignItems: "flex-start", fontSize: "13px", color: "#3a4358", lineHeight: "1.5" }}>
                          <span style={{ color: "#2C8C99", fontWeight: "800", marginTop: "1px" }}>✓
                          </span>
                          <span>One business unit or store
                          </span>
                        </div>
                        <div style={{ display: "flex", gap: "9px", alignItems: "flex-start", fontSize: "13px", color: "#3a4358", lineHeight: "1.5" }}>
                          <span style={{ color: "#2C8C99", fontWeight: "800", marginTop: "1px" }}>✓
                          </span>
                          <span>One admin user
                          </span>
                        </div>
                        <div style={{ display: "flex", gap: "9px", alignItems: "flex-start", fontSize: "13px", color: "#3a4358", lineHeight: "1.5" }}>
                          <span style={{ color: "#2C8C99", fontWeight: "800", marginTop: "1px" }}>✓
                          </span>
                          <span>Company, location and operational setup
                          </span>
                        </div>
                      </div>
                    </>) : null}{' '}
                    {pf_1 ? (<>
                      <div style={{ fontSize: "17px", fontWeight: "800", color: "#1F2B4D" }}>Product & Catalog
                      </div>
                      <p style={{ fontSize: "13px", color: "#667085", lineHeight: "1.55", margin: "7px 0 14px" }}>Organise your product and catalogue information.
                      </p>
                      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                        <div style={{ display: "flex", gap: "9px", alignItems: "flex-start", fontSize: "13px", color: "#3a4358", lineHeight: "1.5" }}>
                          <span style={{ color: "#2C8C99", fontWeight: "800", marginTop: "1px" }}>✓
                          </span>
                          <span>Retailer product catalogue
                          </span>
                        </div>
                        <div style={{ display: "flex", gap: "9px", alignItems: "flex-start", fontSize: "13px", color: "#3a4358", lineHeight: "1.5" }}>
                          <span style={{ color: "#2C8C99", fontWeight: "800", marginTop: "1px" }}>✓
                          </span>
                          <span>Connected manufacturer catalogue
                          </span>
                        </div>
                        <div style={{ display: "flex", gap: "9px", alignItems: "flex-start", fontSize: "13px", color: "#3a4358", lineHeight: "1.5" }}>
                          <span style={{ color: "#2C8C99", fontWeight: "800", marginTop: "1px" }}>✓
                          </span>
                          <span>Product images and specifications
                          </span>
                        </div>
                        <div style={{ display: "flex", gap: "9px", alignItems: "flex-start", fontSize: "13px", color: "#3a4358", lineHeight: "1.5" }}>
                          <span style={{ color: "#2C8C99", fontWeight: "800", marginTop: "1px" }}>✓
                          </span>
                          <span>Free storage and catalogue limits
                          </span>
                        </div>
                      </div>
                    </>) : null}{' '}
                    {pf_2 ? (<>
                      <div style={{ fontSize: "17px", fontWeight: "800", color: "#1F2B4D" }}>Sales App
                      </div>
                      <p style={{ fontSize: "13px", color: "#667085", lineHeight: "1.55", margin: "7px 0 14px" }}>Capture what happens during a customer visit.
                      </p>
                      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                        <div style={{ display: "flex", gap: "9px", alignItems: "flex-start", fontSize: "13px", color: "#3a4358", lineHeight: "1.5" }}>
                          <span style={{ color: "#2C8C99", fontWeight: "800", marginTop: "1px" }}>✓
                          </span>
                          <span>Capture products shown during a visit
                          </span>
                        </div>
                        <div style={{ display: "flex", gap: "9px", alignItems: "flex-start", fontSize: "13px", color: "#3a4358", lineHeight: "1.5" }}>
                          <span style={{ color: "#2C8C99", fontWeight: "800", marginTop: "1px" }}>✓
                          </span>
                          <span>Record interest and next actions
                          </span>
                        </div>
                        <div style={{ display: "flex", gap: "9px", alignItems: "flex-start", fontSize: "13px", color: "#3a4358", lineHeight: "1.5" }}>
                          <span style={{ color: "#2C8C99", fontWeight: "800", marginTop: "1px" }}>✓
                          </span>
                          <span>Create structured sales activity
                          </span>
                        </div>
                        <div style={{ display: "flex", gap: "9px", alignItems: "flex-start", fontSize: "13px", color: "#3a4358", lineHeight: "1.5" }}>
                          <span style={{ color: "#2C8C99", fontWeight: "800", marginTop: "1px" }}>✓
                          </span>
                          <span>Free monthly interaction allowance
                          </span>
                        </div>
                      </div>
                    </>) : null}{' '}
                    {pf_3 ? (<>
                      <div style={{ fontSize: "17px", fontWeight: "800", color: "#1F2B4D" }}>Customer App
                      </div>
                      <p style={{ fontSize: "13px", color: "#667085", lineHeight: "1.55", margin: "7px 0 14px" }}>Continue the relationship after the visit.
                      </p>
                      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                        <div style={{ display: "flex", gap: "9px", alignItems: "flex-start", fontSize: "13px", color: "#3a4358", lineHeight: "1.5" }}>
                          <span style={{ color: "#2C8C99", fontWeight: "800", marginTop: "1px" }}>✓
                          </span>
                          <span>Customer profiles
                          </span>
                        </div>
                        <div style={{ display: "flex", gap: "9px", alignItems: "flex-start", fontSize: "13px", color: "#3a4358", lineHeight: "1.5" }}>
                          <span style={{ color: "#2C8C99", fontWeight: "800", marginTop: "1px" }}>✓
                          </span>
                          <span>Visit continuation
                          </span>
                        </div>
                        <div style={{ display: "flex", gap: "9px", alignItems: "flex-start", fontSize: "13px", color: "#3a4358", lineHeight: "1.5" }}>
                          <span style={{ color: "#2C8C99", fontWeight: "800", marginTop: "1px" }}>✓
                          </span>
                          <span>Wishlists
                          </span>
                        </div>
                        <div style={{ display: "flex", gap: "9px", alignItems: "flex-start", fontSize: "13px", color: "#3a4358", lineHeight: "1.5" }}>
                          <span style={{ color: "#2C8C99", fontWeight: "800", marginTop: "1px" }}>✓
                          </span>
                          <span>Product and inquiry history
                          </span>
                        </div>
                      </div>
                    </>) : null}{' '}
                    {pf_4 ? (<>
                      <div style={{ fontSize: "17px", fontWeight: "800", color: "#1F2B4D" }}>Ticketing
                      </div>
                      <p style={{ fontSize: "13px", color: "#667085", lineHeight: "1.55", margin: "7px 0 14px" }}>Handle requests, orders and quotations.
                      </p>
                      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                        <div style={{ display: "flex", gap: "9px", alignItems: "flex-start", fontSize: "13px", color: "#3a4358", lineHeight: "1.5" }}>
                          <span style={{ color: "#2C8C99", fontWeight: "800", marginTop: "1px" }}>✓
                          </span>
                          <span>Sales and service tickets
                          </span>
                        </div>
                        <div style={{ display: "flex", gap: "9px", alignItems: "flex-start", fontSize: "13px", color: "#3a4358", lineHeight: "1.5" }}>
                          <span style={{ color: "#2C8C99", fontWeight: "800", marginTop: "1px" }}>✓
                          </span>
                          <span>Customer requests
                          </span>
                        </div>
                        <div style={{ display: "flex", gap: "9px", alignItems: "flex-start", fontSize: "13px", color: "#3a4358", lineHeight: "1.5" }}>
                          <span style={{ color: "#2C8C99", fontWeight: "800", marginTop: "1px" }}>✓
                          </span>
                          <span>Orders and quotations
                          </span>
                        </div>
                        <div style={{ display: "flex", gap: "9px", alignItems: "flex-start", fontSize: "13px", color: "#3a4358", lineHeight: "1.5" }}>
                          <span style={{ color: "#2C8C99", fontWeight: "800", marginTop: "1px" }}>✓
                          </span>
                          <span>Free active and monthly ticket limits
                          </span>
                        </div>
                      </div>
                    </>) : null}{' '}
                    {pf_5 ? (<>
                      <div style={{ fontSize: "17px", fontWeight: "800", color: "#1F2B4D" }}>Store Operations
                      </div>
                      <p style={{ fontSize: "13px", color: "#667085", lineHeight: "1.55", margin: "7px 0 14px" }}>Light operational workflows for the store.
                      </p>
                      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                        <div style={{ display: "flex", gap: "9px", alignItems: "flex-start", fontSize: "13px", color: "#3a4358", lineHeight: "1.5" }}>
                          <span style={{ color: "#2C8C99", fontWeight: "800", marginTop: "1px" }}>✓
                          </span>
                          <span>Orders and quotations
                          </span>
                        </div>
                        <div style={{ display: "flex", gap: "9px", alignItems: "flex-start", fontSize: "13px", color: "#3a4358", lineHeight: "1.5" }}>
                          <span style={{ color: "#2C8C99", fontWeight: "800", marginTop: "1px" }}>✓
                          </span>
                          <span>Light operational workflows
                          </span>
                        </div>
                        <div style={{ display: "flex", gap: "9px", alignItems: "flex-start", fontSize: "13px", color: "#3a4358", lineHeight: "1.5" }}>
                          <span style={{ color: "#2C8C99", fontWeight: "800", marginTop: "1px" }}>✓
                          </span>
                          <span>Product and customer activity
                          </span>
                        </div>
                        <div style={{ display: "flex", gap: "9px", alignItems: "flex-start", fontSize: "13px", color: "#3a4358", lineHeight: "1.5" }}>
                          <span style={{ color: "#2C8C99", fontWeight: "800", marginTop: "1px" }}>✓
                          </span>
                          <span>Business-unit context
                          </span>
                        </div>
                      </div>
                    </>) : null}{' '}
                    {pf_6 ? (<>
                      <div style={{ fontSize: "17px", fontWeight: "800", color: "#1F2B4D" }}>Warranty Extensions
                      </div>
                      <p style={{ fontSize: "13px", color: "#667085", lineHeight: "1.55", margin: "7px 0 14px" }}>Digital warranty activation and extensions.
                      </p>
                      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                        <div style={{ display: "flex", gap: "9px", alignItems: "flex-start", fontSize: "13px", color: "#3a4358", lineHeight: "1.5" }}>
                          <span style={{ color: "#2C8C99", fontWeight: "800", marginTop: "1px" }}>✓
                          </span>
                          <span>Digital warranty activation
                          </span>
                        </div>
                        <div style={{ display: "flex", gap: "9px", alignItems: "flex-start", fontSize: "13px", color: "#3a4358", lineHeight: "1.5" }}>
                          <span style={{ color: "#2C8C99", fontWeight: "800", marginTop: "1px" }}>✓
                          </span>
                          <span>Warranty-extension workflows
                          </span>
                        </div>
                        <div style={{ display: "flex", gap: "9px", alignItems: "flex-start", fontSize: "13px", color: "#3a4358", lineHeight: "1.5" }}>
                          <span style={{ color: "#2C8C99", fontWeight: "800", marginTop: "1px" }}>✓
                          </span>
                          <span>Product and customer connection
                          </span>
                        </div>
                        <div style={{ display: "flex", gap: "9px", alignItems: "flex-start", fontSize: "13px", color: "#3a4358", lineHeight: "1.5" }}>
                          <span style={{ color: "#2C8C99", fontWeight: "800", marginTop: "1px" }}>✓
                          </span>
                          <span>Kept separate from interaction counting
                          </span>
                        </div>
                      </div>
                    </>) : null}{' '}
                    {pf_7 ? (<>
                      <div style={{ fontSize: "17px", fontWeight: "800", color: "#1F2B4D" }}>Mobile Dashboard
                      </div>
                      <p style={{ fontSize: "13px", color: "#667085", lineHeight: "1.55", margin: "7px 0 14px" }}>Your daily business snapshot on mobile.
                      </p>
                      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                        <div style={{ display: "flex", gap: "9px", alignItems: "flex-start", fontSize: "13px", color: "#3a4358", lineHeight: "1.5" }}>
                          <span style={{ color: "#2C8C99", fontWeight: "800", marginTop: "1px" }}>✓
                          </span>
                          <span>Daily sales amount
                          </span>
                        </div>
                        <div style={{ display: "flex", gap: "9px", alignItems: "flex-start", fontSize: "13px", color: "#3a4358", lineHeight: "1.5" }}>
                          <span style={{ color: "#2C8C99", fontWeight: "800", marginTop: "1px" }}>✓
                          </span>
                          <span>Purchased or incoming amount
                          </span>
                        </div>
                        <div style={{ display: "flex", gap: "9px", alignItems: "flex-start", fontSize: "13px", color: "#3a4358", lineHeight: "1.5" }}>
                          <span style={{ color: "#2C8C99", fontWeight: "800", marginTop: "1px" }}>✓
                          </span>
                          <span>Visits and open tickets
                          </span>
                        </div>
                        <div style={{ display: "flex", gap: "9px", alignItems: "flex-start", fontSize: "13px", color: "#3a4358", lineHeight: "1.5" }}>
                          <span style={{ color: "#2C8C99", fontWeight: "800", marginTop: "1px" }}>✓
                          </span>
                          <span>Orders, backorders and service activity
                          </span>
                        </div>
                        <div style={{ display: "flex", gap: "9px", alignItems: "flex-start", fontSize: "13px", color: "#3a4358", lineHeight: "1.5" }}>
                          <span style={{ color: "#2C8C99", fontWeight: "800", marginTop: "1px" }}>✓
                          </span>
                          <span>Follow-ups and team activity
                          </span>
                        </div>
                      </div>
                    </>) : null}{' '}
                    {pf_8 ? (<>
                      <div style={{ fontSize: "17px", fontWeight: "800", color: "#1F2B4D" }}>Tasks & Opportunities
                      </div>
                      <p style={{ fontSize: "13px", color: "#667085", lineHeight: "1.55", margin: "7px 0 14px" }}>See the work that needs doing each day.
                      </p>
                      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                        <div style={{ display: "flex", gap: "9px", alignItems: "flex-start", fontSize: "13px", color: "#3a4358", lineHeight: "1.5" }}>
                          <span style={{ color: "#2C8C99", fontWeight: "800", marginTop: "1px" }}>✓
                          </span>
                          <span>Follow-up tasks
                          </span>
                        </div>
                        <div style={{ display: "flex", gap: "9px", alignItems: "flex-start", fontSize: "13px", color: "#3a4358", lineHeight: "1.5" }}>
                          <span style={{ color: "#2C8C99", fontWeight: "800", marginTop: "1px" }}>✓
                          </span>
                          <span>Open customer opportunities
                          </span>
                        </div>
                        <div style={{ display: "flex", gap: "9px", alignItems: "flex-start", fontSize: "13px", color: "#3a4358", lineHeight: "1.5" }}>
                          <span style={{ color: "#2C8C99", fontWeight: "800", marginTop: "1px" }}>✓
                          </span>
                          <span>Assigned actions
                          </span>
                        </div>
                        <div style={{ display: "flex", gap: "9px", alignItems: "flex-start", fontSize: "13px", color: "#3a4358", lineHeight: "1.5" }}>
                          <span style={{ color: "#2C8C99", fontWeight: "800", marginTop: "1px" }}>✓
                          </span>
                          <span>Daily work visibility
                          </span>
                        </div>
                      </div>
                    </>) : null}
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                    <div style={{ border: "1.5px dashed #C9D4EC", borderRadius: "12px", background: "#F7F9FC", aspectRatio: "3/4", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "6px", padding: "12px", textAlign: "center" }}>
                      <span style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "8px", fontWeight: "700", color: "#fff", background: "#32415C", borderRadius: "5px", padding: "3px 8px" }}>UI / GIF
                      </span>
                      <span style={{ fontSize: "9.5px", color: "#9aa3b2", lineHeight: "1.4" }}>Screenshot or short clip goes here
                      </span>
                    </div>
                  </div>
                </div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px", flexWrap: "wrap", marginTop: "16px", paddingTop: "14px", borderTop: "1px solid #EEF1F6" }}>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "11px", fontWeight: "700", color: "#0F3D38", background: "#E4F6EF", borderRadius: "20px", padding: "5px 11px" }}>
                    <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#33D6A4" }}></span>Included in AXY Starter
                  </span>
                </div>
              </div>
            </div>
            <details style={{ marginTop: "16px", background: "#fff", border: "1px solid #E4E8EF", borderRadius: "12px", padding: "15px 18px", maxWidth: "640px" }}>
              <summary style={{ fontSize: "13.5px", fontWeight: "700", color: "#2C8C99", display: "flex", justifyContent: "space-between", gap: "12px" }}>View detailed free limits
                <span>+
                </span>
              </summary>
              <div className="pr-limits" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 24px", marginTop: "12px" }}>
                <div style={{ display: "flex", gap: "9px", alignItems: "flex-start", fontSize: "12.5px", color: "#3a4358", lineHeight: "1.5", padding: "6px 0", borderBottom: "1px solid #EEF1F6" }}>
                  <span style={{ color: "#2C8C99", fontWeight: "800" }}>•
                  </span>
                  <span>1 company
                  </span>
                </div>
                <div style={{ display: "flex", gap: "9px", alignItems: "flex-start", fontSize: "12.5px", color: "#3a4358", lineHeight: "1.5", padding: "6px 0", borderBottom: "1px solid #EEF1F6" }}>
                  <span style={{ color: "#2C8C99", fontWeight: "800" }}>•
                  </span>
                  <span>1 admin user
                  </span>
                </div>
                <div style={{ display: "flex", gap: "9px", alignItems: "flex-start", fontSize: "12.5px", color: "#3a4358", lineHeight: "1.5", padding: "6px 0", borderBottom: "1px solid #EEF1F6" }}>
                  <span style={{ color: "#2C8C99", fontWeight: "800" }}>•
                  </span>
                  <span>1 business unit or store
                  </span>
                </div>
                <div style={{ display: "flex", gap: "9px", alignItems: "flex-start", fontSize: "12.5px", color: "#3a4358", lineHeight: "1.5", padding: "6px 0", borderBottom: "1px solid #EEF1F6" }}>
                  <span style={{ color: "#2C8C99", fontWeight: "800" }}>•
                  </span>
                  <span>5,000 retailer-owned active products
                  </span>
                </div>
                <div style={{ display: "flex", gap: "9px", alignItems: "flex-start", fontSize: "12.5px", color: "#3a4358", lineHeight: "1.5", padding: "6px 0", borderBottom: "1px solid #EEF1F6" }}>
                  <span style={{ color: "#2C8C99", fontWeight: "800" }}>•
                  </span>
                  <span>20,000 connected manufacturer catalogue products
                  </span>
                </div>
                <div style={{ display: "flex", gap: "9px", alignItems: "flex-start", fontSize: "12.5px", color: "#3a4358", lineHeight: "1.5", padding: "6px 0", borderBottom: "1px solid #EEF1F6" }}>
                  <span style={{ color: "#2C8C99", fontWeight: "800" }}>•
                  </span>
                  <span>5 GB optimised storage
                  </span>
                </div>
                <div style={{ display: "flex", gap: "9px", alignItems: "flex-start", fontSize: "12.5px", color: "#3a4358", lineHeight: "1.5", padding: "6px 0", borderBottom: "1px solid #EEF1F6" }}>
                  <span style={{ color: "#2C8C99", fontWeight: "800" }}>•
                  </span>
                  <span>2,500 customer profiles
                  </span>
                </div>
                <div style={{ display: "flex", gap: "9px", alignItems: "flex-start", fontSize: "12.5px", color: "#3a4358", lineHeight: "1.5", padding: "6px 0", borderBottom: "1px solid #EEF1F6" }}>
                  <span style={{ color: "#2C8C99", fontWeight: "800" }}>•
                  </span>
                  <span>1,000 wishlist items
                  </span>
                </div>
                <div style={{ display: "flex", gap: "9px", alignItems: "flex-start", fontSize: "12.5px", color: "#3a4358", lineHeight: "1.5", padding: "6px 0", borderBottom: "1px solid #EEF1F6" }}>
                  <span style={{ color: "#2C8C99", fontWeight: "800" }}>•
                  </span>
                  <span>300 product/customer interactions per month
                  </span>
                </div>
                <div style={{ display: "flex", gap: "9px", alignItems: "flex-start", fontSize: "12.5px", color: "#3a4358", lineHeight: "1.5", padding: "6px 0", borderBottom: "1px solid #EEF1F6" }}>
                  <span style={{ color: "#2C8C99", fontWeight: "800" }}>•
                  </span>
                  <span>25 active tickets
                  </span>
                </div>
                <div style={{ display: "flex", gap: "9px", alignItems: "flex-start", fontSize: "12.5px", color: "#3a4358", lineHeight: "1.5", padding: "6px 0", borderBottom: "1px solid #EEF1F6" }}>
                  <span style={{ color: "#2C8C99", fontWeight: "800" }}>•
                  </span>
                  <span>50 new tickets per month
                  </span>
                </div>
                <div style={{ display: "flex", gap: "9px", alignItems: "flex-start", fontSize: "12.5px", color: "#3a4358", lineHeight: "1.5", padding: "6px 0", borderBottom: "1px solid #EEF1F6" }}>
                  <span style={{ color: "#2C8C99", fontWeight: "800" }}>•
                  </span>
                  <span>20 active orders or quotations
                  </span>
                </div>
              </div>
            </details>
          </div>
        </div>
        <div id="axy-pricing-builder" style={{ background: "#fff", padding: "70px 24px" }}>
          <div style={{ maxWidth: "1080px", margin: "0 auto" }}>
            <div style={{ maxWidth: "640px" }}>
              <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "10.5px", letterSpacing: ".14em", color: "#2C8C99", textTransform: "uppercase" }}>Build your plan
              </div>
              <h2 style={{ fontSize: "28px", fontWeight: "800", color: "#1F2B4D", lineHeight: "1.16", margin: "12px 0 0" }}>Choose what your business needs today.
              </h2>
              <p style={{ fontSize: "14.5px", color: "#667085", lineHeight: "1.6", margin: "13px 0 0" }}>Your first admin user and first business unit are included. Add capacity and modules as your operation grows.
              </p>
            </div>
            <div className="pr-build" style={{ display: "grid", gridTemplateColumns: "1.25fr 0.75fr", gap: "24px", marginTop: "30px", alignItems: "start" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                <div style={{ background: "#F9FAFB", border: "1px solid #E4E8EF", borderRadius: "14px", padding: "18px 20px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "14px", flexWrap: "wrap" }}>
                    <div>
                      <div style={{ fontSize: "15px", fontWeight: "800", color: "#1F2B4D" }}>Users
                      </div>
                      <div style={{ fontSize: "12.5px", color: "#667085", lineHeight: "1.5", marginTop: "4px" }}>Your first admin user is included. Each additional active user is €15/month.
                      </div>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px", flexShrink: "0" }}>
                      <button className="hv127" type="button" onClick={pUsersDec} aria-label="Decrease users" style={{ width: "36px", height: "36px", borderRadius: "9px", border: "1px solid #D8DEE8", background: "#fff", color: "#1F2B4D", fontSize: "18px", fontWeight: "700", cursor: "pointer", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>−
                      </button>{' '}
                      <span style={{ minWidth: "30px", textAlign: "center", fontSize: "18px", fontWeight: "800", color: "#1F2B4D" }}>{pUsers}
                      </span>{' '}
                      <button className="hv128" type="button" onClick={pUsersInc} aria-label="Increase users" style={{ width: "36px", height: "36px", borderRadius: "9px", border: "1px solid #D8DEE8", background: "#fff", color: "#1F2B4D", fontSize: "18px", fontWeight: "700", cursor: "pointer", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>+
                      </button>
                    </div>
                  </div>
                </div>
                <div style={{ background: "#F9FAFB", border: "1px solid #E4E8EF", borderRadius: "14px", padding: "18px 20px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "14px", flexWrap: "wrap" }}>
                    <div>
                      <div style={{ fontSize: "15px", fontWeight: "800", color: "#1F2B4D" }}>Business units / stores
                      </div>
                      <div style={{ fontSize: "12.5px", color: "#667085", lineHeight: "1.5", marginTop: "4px" }}>Your first business unit or store is included. Each additional unit is €49/month.
                      </div>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px", flexShrink: "0" }}>
                      <button className="hv129" type="button" onClick={pBUDec} aria-label="Decrease business units" style={{ width: "36px", height: "36px", borderRadius: "9px", border: "1px solid #D8DEE8", background: "#fff", color: "#1F2B4D", fontSize: "18px", fontWeight: "700", cursor: "pointer", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>−
                      </button>{' '}
                      <span style={{ minWidth: "30px", textAlign: "center", fontSize: "18px", fontWeight: "800", color: "#1F2B4D" }}>{pBU}
                      </span>{' '}
                      <button className="hv130" type="button" onClick={pBUInc} aria-label="Increase business units" style={{ width: "36px", height: "36px", borderRadius: "9px", border: "1px solid #D8DEE8", background: "#fff", color: "#1F2B4D", fontSize: "18px", fontWeight: "700", cursor: "pointer", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>+
                      </button>
                    </div>
                  </div>
                </div>
                <div style={{ background: "#F9FAFB", border: "1px solid #E4E8EF", borderRadius: "14px", padding: "18px 20px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "14px", flexWrap: "wrap" }}>
                    <div style={{ flex: "1", minWidth: "200px" }}>
                      <div style={{ fontSize: "15px", fontWeight: "800", color: "#1F2B4D" }}>Announcements{' '}
                        <span style={{ fontSize: "12px", fontWeight: "600", color: "#667085" }}>· €20 / unit / month
                        </span>
                      </div>
                      <div style={{ fontSize: "12.5px", color: "#667085", lineHeight: "1.5", marginTop: "4px" }}>Create, edit, manage and send story-style announcements. Businesses without this module can still receive and confirm partner-created announcements.
                      </div>
                    </div>
                    <button type="button" onClick={pAnnToggle} aria-pressed={pAnnAria} style={css(pAnnToggleStyle)}>{pAnnToggleLabel}
                    </button>
                  </div>
                  {pAnnOn ? (<>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px", marginTop: "14px", paddingTop: "14px", borderTop: "1px solid #EAEDF2" }}>
                      <span style={{ fontSize: "12.5px", color: "#3a4358", flex: "1" }}>Business units receiving the module
                      </span>{' '}
                      <button type="button" onClick={pAnnDec} aria-label="Decrease licensed units" style={{ width: "32px", height: "32px", borderRadius: "8px", border: "1px solid #D8DEE8", background: "#fff", color: "#1F2B4D", fontSize: "16px", fontWeight: "700", cursor: "pointer" }}>−
                      </button>{' '}
                      <span style={{ minWidth: "26px", textAlign: "center", fontSize: "16px", fontWeight: "800", color: "#1F2B4D" }}>{pAnnUnits}
                      </span>{' '}
                      <button type="button" onClick={pAnnInc} aria-label="Increase licensed units" style={{ width: "32px", height: "32px", borderRadius: "8px", border: "1px solid #D8DEE8", background: "#fff", color: "#1F2B4D", fontSize: "16px", fontWeight: "700", cursor: "pointer" }}>+
                      </button>
                    </div>
                  </>) : null}
                </div>
                <div style={{ background: "#F9FAFB", border: "1px solid #E4E8EF", borderRadius: "14px", padding: "18px 20px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "14px", flexWrap: "wrap" }}>
                    <div style={{ flex: "1", minWidth: "200px" }}>
                      <div style={{ fontSize: "15px", fontWeight: "800", color: "#1F2B4D" }}>Messaging{' '}
                        <span style={{ fontSize: "12px", fontWeight: "600", color: "#667085" }}>· €19/month + usage
                        </span>
                      </div>
                      <div style={{ fontSize: "12.5px", color: "#667085", lineHeight: "1.5", marginTop: "4px" }}>Connect customer communication to tickets, customers, follow-ups, templates and message history. WhatsApp and external provider usage are billed separately.
                      </div>
                    </div>
                    <button type="button" onClick={pMsgToggle} aria-pressed={pMsgAria} style={css(pMsgToggleStyle)}>{pMsgToggleLabel}
                    </button>
                  </div>
                </div>
                <div style={{ background: "#F9FAFB", border: "1px solid #E4E8EF", borderRadius: "14px", padding: "18px 20px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "14px", flexWrap: "wrap" }}>
                    <div style={{ flex: "1", minWidth: "200px" }}>
                      <div style={{ fontSize: "15px", fontWeight: "800", color: "#1F2B4D" }}>AI Image Generation{' '}
                        <span style={{ fontSize: "12px", fontWeight: "600", color: "#2C8C99" }}>· Usage calculated separately
                        </span>
                      </div>
                      <div style={{ fontSize: "12.5px", color: "#667085", lineHeight: "1.5", marginTop: "4px" }}>Generate and enhance product imagery using AI credits.
                      </div>
                    </div>
                    <button type="button" onClick={pAiToggle} aria-pressed={pAiAria} style={css(pAiToggleStyle)}>{pAiToggleLabel}
                    </button>
                  </div>
                </div>
              </div>
              <div className="pr-summary" style={{ position: "sticky", top: "88px" }}>
                <div style={{ background: "#1F2B4D", borderRadius: "16px", padding: "22px", boxShadow: "0 20px 46px rgba(31,43,77,.24)" }}>
                  <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "10px", letterSpacing: ".12em", color: "#7fd4de", textTransform: "uppercase" }}>Your estimate
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginTop: "16px" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: "12.5px", color: "#C9D2E4" }}>
                      <span>Admin user (included)
                      </span>
                      <span>€0
                      </span>
                    </div>
                    {pHasAddUsers ? (<>
                      <div style={{ display: "flex", justifyContent: "space-between", fontSize: "12.5px", color: "#fff" }}>
                        <span>+{pAddUsers} additional user(s)
                        </span>
                        <span>€{pAddUserCost}
                        </span>
                      </div>
                    </>) : null}
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: "12.5px", color: "#C9D2E4" }}>
                      <span>Business unit (included)
                      </span>
                      <span>€0
                      </span>
                    </div>
                    {pHasAddBU ? (<>
                      <div style={{ display: "flex", justifyContent: "space-between", fontSize: "12.5px", color: "#fff" }}>
                        <span>+{pAddBU} business unit(s)
                        </span>
                        <span>€{pAddBUCost}
                        </span>
                      </div>
                    </>) : null}{' '}
                    {pAnnOn ? (<>
                      <div style={{ display: "flex", justifyContent: "space-between", fontSize: "12.5px", color: "#fff" }}>
                        <span>Announcements ×{pAnnUnits}
                        </span>
                        <span>€{pAnnCost}
                        </span>
                      </div>
                    </>) : null}{' '}
                    {pMsgOn ? (<>
                      <div style={{ display: "flex", justifyContent: "space-between", fontSize: "12.5px", color: "#fff" }}>
                        <span>Messaging
                        </span>
                        <span>€{pMsgCost}
                        </span>
                      </div>
                    </>) : null}{' '}
                    {pAiOn ? (<>
                      <div style={{ display: "flex", justifyContent: "space-between", fontSize: "12.5px", color: "#7fd4de" }}>
                        <span>AI Image Generation
                        </span>
                        <span>usage-based
                        </span>
                      </div>
                    </>) : null}
                  </div>
                  <div style={{ borderTop: "1px solid rgba(255,255,255,.16)", margin: "16px 0 12px" }}></div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                    <span style={{ fontSize: "13px", color: "#C9D2E4" }}>Estimated monthly total
                    </span>
                    <span style={{ fontSize: "28px", fontWeight: "800", color: "#fff" }}>{pTotalLabel}
                    </span>
                  </div>
                  <div style={{ display: "flex", gap: "8px", alignItems: "flex-start", marginTop: "12px", background: "rgba(127,212,222,.1)", border: "1px solid rgba(127,212,222,.22)", borderRadius: "10px", padding: "10px 12px" }}>
                    <span style={{ color: "#7fd4de", marginTop: "1px" }}>◆
                    </span>
                    <span style={{ fontSize: "11.5px", color: "#DDE7F2", lineHeight: "1.45" }}>{pRec}
                    </span>
                  </div>
                  <div style={{ fontSize: "10.5px", color: "#9fb2d6", lineHeight: "1.45", marginTop: "12px" }}>Prices exclude VAT where applicable. Messaging delivery and AI usage are billed separately.
                  </div>
                  <button className="hv131" type="button" onClick={pFormOpen} style={{ display: "inline-flex", justifyContent: "center", width: "100%", marginTop: "16px", padding: "13px", background: "#33D6A4", color: "#0F2E28", border: "none", borderRadius: "10px", fontSize: "14px", fontWeight: "800", cursor: "pointer" }}>Request this plan
                  </button>{' '}
                  <a className="hv132" href="/book-a-walkthrough" style={{ display: "inline-flex", justifyContent: "center", width: "100%", marginTop: "9px", padding: "11px", border: "1px solid rgba(255,255,255,.3)", color: "#fff", borderRadius: "10px", fontSize: "13px", fontWeight: "600" }}>Book a walkthrough
                  </a>
                </div>
              </div>
            </div>
            {pFormShown ? (<>
              <div id="axy-pricing-request" style={{ maxWidth: "640px", margin: "22px auto 0", background: "#F9FAFB", border: "1.5px solid #2C8C99", borderRadius: "16px", padding: "24px" }}>
                {pSubmitted ? (<>
                  <div style={{ textAlign: "center", padding: "16px 4px" }}>
                    <div style={{ width: "52px", height: "52px", borderRadius: "50%", background: "#CDF3E6", color: "#0F3D38", fontSize: "22px", fontWeight: "800", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto" }}>✓
                    </div>
                    <div style={{ fontSize: "18px", fontWeight: "800", marginTop: "14px", color: "#1F2B4D" }}>Your plan request is ready.
                    </div>
                    <p style={{ fontSize: "13px", color: "#667085", lineHeight: "1.6", margin: "10px 0 0" }}>Your email application should now be open with the complete configuration. Send the prepared message and we will contact you with the next steps.
                    </p>
                  </div>
                </>) : null}{' '}
                {pFormEditable ? (<>
                  <div style={{ fontSize: "17px", fontWeight: "800", color: "#1F2B4D" }}>Request this plan
                  </div>
                  <p style={{ fontSize: "12.5px", color: "#667085", lineHeight: "1.5", margin: "6px 0 16px" }}>Your selected configuration is included automatically. We will review it and prepare your setup.
                  </p>
                  <div style={{ display: "flex", flexDirection: "column", gap: "11px" }}>
                    <div style={{ display: "flex", gap: "11px", flexWrap: "wrap" }}>
                      <div style={{ flex: "1", minWidth: "180px", display: "flex", flexDirection: "column", gap: "5px" }}>
                        <label style={{ fontSize: "12px", fontWeight: "600", color: "#3a4358" }}>Company name
                        </label>
                        <input name="company" style={{ height: "42px", border: "1px solid #D8DEE8", borderRadius: "9px", padding: "0 13px", fontSize: "13.5px", background: "#fff" }} />
                      </div>
                      <div style={{ flex: "1", minWidth: "180px", display: "flex", flexDirection: "column", gap: "5px" }}>
                        <label style={{ fontSize: "12px", fontWeight: "600", color: "#3a4358" }}>Contact name
                        </label>
                        <input name="contact" style={{ height: "42px", border: "1px solid #D8DEE8", borderRadius: "9px", padding: "0 13px", fontSize: "13.5px", background: "#fff" }} />
                      </div>
                    </div>
                    <div style={{ display: "flex", gap: "11px", flexWrap: "wrap" }}>
                      <div style={{ flex: "1", minWidth: "180px", display: "flex", flexDirection: "column", gap: "5px" }}>
                        <label style={{ fontSize: "12px", fontWeight: "600", color: "#3a4358" }}>Work email
                        </label>
                        <input name="email" type="email" style={{ height: "42px", border: "1px solid #D8DEE8", borderRadius: "9px", padding: "0 13px", fontSize: "13.5px", background: "#fff" }} />
                      </div>
                      <div style={{ flex: "1", minWidth: "180px", display: "flex", flexDirection: "column", gap: "5px" }}>
                        <label style={{ fontSize: "12px", fontWeight: "600", color: "#3a4358" }}>Phone
                        </label>
                        <input name="phone" style={{ height: "42px", border: "1px solid #D8DEE8", borderRadius: "9px", padding: "0 13px", fontSize: "13.5px", background: "#fff" }} />
                      </div>
                    </div>
                    <div style={{ display: "flex", gap: "11px", flexWrap: "wrap" }}>
                      <div style={{ flex: "1", minWidth: "180px", display: "flex", flexDirection: "column", gap: "5px" }}>
                        <label style={{ fontSize: "12px", fontWeight: "600", color: "#3a4358" }}>Country
                        </label>
                        <input name="country" style={{ height: "42px", border: "1px solid #D8DEE8", borderRadius: "9px", padding: "0 13px", fontSize: "13.5px", background: "#fff" }} />
                      </div>
                      <div style={{ flex: "1", minWidth: "180px", display: "flex", flexDirection: "column", gap: "5px" }}>
                        <label style={{ fontSize: "12px", fontWeight: "600", color: "#3a4358" }}>Company type
                        </label>
                        <select name="companyType" style={{ height: "42px", border: "1px solid #D8DEE8", borderRadius: "9px", padding: "0 10px", fontSize: "13.5px", background: "#fff" }}>
                          <option>Retailer
                          </option>
                          <option>Manufacturer / Brand
                          </option>
                          <option>Distributor
                          </option>
                          <option>Other
                          </option>
                        </select>
                      </div>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
                      <label style={{ fontSize: "12px", fontWeight: "600", color: "#3a4358" }}>Notes
                      </label>
                      <textarea name="notes" rows="3" style={{ border: "1px solid #D8DEE8", borderRadius: "9px", padding: "10px 13px", fontSize: "13.5px", background: "#fff", resize: "vertical" }}></textarea>
                    </div>
                    <div style={{ fontSize: "11.5px", color: "#667085", background: "#fff", border: "1px solid #E4E8EF", borderRadius: "9px", padding: "10px 12px" }}>Included automatically:{' '}
                      <strong>{pUsers}
                      </strong>{' '}user(s),{' '}
                      <strong>{pBU}
                      </strong>{' '}business unit(s), estimated{' '}
                      <strong>{pTotalLabel}
                      </strong>{' '}+ selected modules and future-tool interest.
                    </div>
                    <button className="hv133" type="button" onClick={pSubmit} style={{ display: "inline-flex", justifyContent: "center", padding: "13px", background: "#32415C", color: "#fff", border: "none", borderRadius: "10px", fontSize: "14px", fontWeight: "700", cursor: "pointer" }}>Send plan request
                    </button>
                    <div style={{ fontSize: "11px", color: "#9aa3b2", textAlign: "center" }}>This opens a prepared email. Direct CRM submission will be connected before launch.
                    </div>
                  </div>
                </>) : null}
              </div>
            </>) : null}
          </div>
        </div>
        <div style={{ background: "#F9FAFB", padding: "70px 24px" }}>
          <div style={{ maxWidth: "1080px", margin: "0 auto" }}>
            <div style={{ maxWidth: "640px" }}>
              <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "10.5px", letterSpacing: ".14em", color: "#2C8C99", textTransform: "uppercase" }}>Coming next
              </div>
              <h2 style={{ fontSize: "28px", fontWeight: "800", color: "#1F2B4D", lineHeight: "1.16", margin: "12px 0 0" }}>Help shape what AXY builds next.
              </h2>
              <p style={{ fontSize: "14.5px", color: "#667085", lineHeight: "1.6", margin: "13px 0 0" }}>Select the tools your company would like to activate when they become available.
              </p>
            </div>
            <div className="pr-future" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "14px", marginTop: "28px" }}>
              <button type="button" onClick={pFtToggle0} aria-pressed={pFtAria0} style={css(pFt0Style)}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "10px" }}>
                  <div style={{ fontSize: "14.5px", fontWeight: "800", color: "#1F2B4D", lineHeight: "1.25" }}>AI Product Suggestions
                  </div>
                  <span style={css(pFt0PillStyle)}>{pFt0Label}
                  </span>
                </div>
                <p style={{ fontSize: "12.5px", color: "#667085", lineHeight: "1.55", margin: "9px 0 0" }}>Relevant product suggestions based on customer interest, product context and availability.
                </p>
              </button>{' '}
              <button type="button" onClick={pFtToggle1} aria-pressed={pFtAria1} style={css(pFt1Style)}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "10px" }}>
                  <div style={{ fontSize: "14.5px", fontWeight: "800", color: "#1F2B4D", lineHeight: "1.25" }}>Pricing & Offer Builder
                  </div>
                  <span style={css(pFt1PillStyle)}>{pFt1Label}
                  </span>
                </div>
                <p style={{ fontSize: "12.5px", color: "#667085", lineHeight: "1.55", margin: "9px 0 0" }}>Build offers faster while applying pricing rules and protecting margins.
                </p>
              </button>{' '}
              <button type="button" onClick={pFtToggle2} aria-pressed={pFtAria2} style={css(pFt2Style)}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "10px" }}>
                  <div style={{ fontSize: "14.5px", fontWeight: "800", color: "#1F2B4D", lineHeight: "1.25" }}>Targets
                  </div>
                  <span style={css(pFt2PillStyle)}>{pFt2Label}
                  </span>
                </div>
                <p style={{ fontSize: "12.5px", color: "#667085", lineHeight: "1.55", margin: "9px 0 0" }}>Set and track commercial targets across teams, stores, brands or partners.
                </p>
              </button>{' '}
              <button type="button" onClick={pFtToggle3} aria-pressed={pFtAria3} style={css(pFt3Style)}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "10px" }}>
                  <div style={{ fontSize: "14.5px", fontWeight: "800", color: "#1F2B4D", lineHeight: "1.25" }}>Budgets
                  </div>
                  <span style={css(pFt3PillStyle)}>{pFt3Label}
                  </span>
                </div>
                <p style={{ fontSize: "12.5px", color: "#667085", lineHeight: "1.55", margin: "9px 0 0" }}>Plan and monitor budgets across business units, stores and commercial activities.
                </p>
              </button>{' '}
              <button type="button" onClick={pFtToggle4} aria-pressed={pFtAria4} style={css(pFt4Style)}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "10px" }}>
                  <div style={{ fontSize: "14.5px", fontWeight: "800", color: "#1F2B4D", lineHeight: "1.25" }}>Dashboards
                  </div>
                  <span style={css(pFt4PillStyle)}>{pFt4Label}
                  </span>
                </div>
                <p style={{ fontSize: "12.5px", color: "#667085", lineHeight: "1.55", margin: "9px 0 0" }}>Advanced commercial, product and market intelligence — Product Performance, Retail Commercial Cockpit, Market Intelligence and Manufacturer Executive dashboards.
                </p>
              </button>
            </div>
          </div>
        </div>
        <div style={{ background: "#fff", padding: "66px 24px" }}>
          <div style={{ maxWidth: "760px", margin: "0 auto" }}>
            <div style={{ textAlign: "center" }}>
              <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "10.5px", letterSpacing: ".14em", color: "#2C8C99", textTransform: "uppercase" }}>Questions
              </div>
              <h2 style={{ fontSize: "25px", fontWeight: "800", color: "#1F2B4D", margin: "10px 0 0" }}>Pricing, briefly answered
              </h2>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "9px", marginTop: "24px" }}>
              <details style={{ background: "#F8FAFC", border: "1px solid #E4EAF1", borderRadius: "12px", padding: "15px 18px" }}>
                <summary style={{ fontSize: "14px", fontWeight: "700", color: "#1F2B4D", display: "flex", justifyContent: "space-between", gap: "12px" }}>Can I start using AXY for free?
                  <span style={{ color: "#2C8C99" }}>+
                  </span>
                </summary>
                <p style={{ fontSize: "13.5px", color: "#667085", lineHeight: "1.6", margin: "10px 0 0" }}>Yes. AXY Starter includes one company, one admin user, one business unit and the core workflows required to set up and test AXY.
                </p>
              </details>
              <details style={{ background: "#F8FAFC", border: "1px solid #E4EAF1", borderRadius: "12px", padding: "15px 18px" }}>
                <summary style={{ fontSize: "14px", fontWeight: "700", color: "#1F2B4D", display: "flex", justifyContent: "space-between", gap: "12px" }}>When do I need to upgrade?
                  <span style={{ color: "#2C8C99" }}>+
                  </span>
                </summary>
                <p style={{ fontSize: "13.5px", color: "#667085", lineHeight: "1.6", margin: "10px 0 0" }}>You upgrade when you need additional users, additional business units, paid modules, higher operational capacity, integrations, advanced dashboards or AI capabilities.
                </p>
              </details>
              <details style={{ background: "#F8FAFC", border: "1px solid #E4EAF1", borderRadius: "12px", padding: "15px 18px" }}>
                <summary style={{ fontSize: "14px", fontWeight: "700", color: "#1F2B4D", display: "flex", justifyContent: "space-between", gap: "12px" }}>What happens when a free business unit exceeds its activity limits?
                  <span style={{ color: "#2C8C99" }}>+
                  </span>
                </summary>
                <p style={{ fontSize: "13.5px", color: "#667085", lineHeight: "1.6", margin: "10px 0 0" }}>The business unit must move to a paid business-unit licence to continue operating beyond the free allowance.
                </p>
              </details>
              <details style={{ background: "#F8FAFC", border: "1px solid #E4EAF1", borderRadius: "12px", padding: "15px 18px" }}>
                <summary style={{ fontSize: "14px", fontWeight: "700", color: "#1F2B4D", display: "flex", justifyContent: "space-between", gap: "12px" }}>Are messaging costs included?
                  <span style={{ color: "#2C8C99" }}>+
                  </span>
                </summary>
                <p style={{ fontSize: "13.5px", color: "#667085", lineHeight: "1.6", margin: "10px 0 0" }}>The Messaging module has a monthly software fee. WhatsApp and other external delivery costs are billed separately according to usage.
                </p>
              </details>
              <details style={{ background: "#F8FAFC", border: "1px solid #E4EAF1", borderRadius: "12px", padding: "15px 18px" }}>
                <summary style={{ fontSize: "14px", fontWeight: "700", color: "#1F2B4D", display: "flex", justifyContent: "space-between", gap: "12px" }}>Can I choose modules only for specific business units?
                  <span style={{ color: "#2C8C99" }}>+
                  </span>
                </summary>
                <p style={{ fontSize: "13.5px", color: "#667085", lineHeight: "1.6", margin: "10px 0 0" }}>Yes. Modules billed by business unit can be activated only for the locations that need them.
                </p>
              </details>
              <details style={{ background: "#F8FAFC", border: "1px solid #E4EAF1", borderRadius: "12px", padding: "15px 18px" }}>
                <summary style={{ fontSize: "14px", fontWeight: "700", color: "#1F2B4D", display: "flex", justifyContent: "space-between", gap: "12px" }}>Can retailers receive brand announcements without paying for Announcements?
                  <span style={{ color: "#2C8C99" }}>+
                  </span>
                </summary>
                <p style={{ fontSize: "13.5px", color: "#667085", lineHeight: "1.6", margin: "10px 0 0" }}>Yes. Businesses can receive and confirm partner-created announcements without the paid module. The licence is required to create, edit, manage and send their own announcements.
                </p>
              </details>
              <details style={{ background: "#F8FAFC", border: "1px solid #E4EAF1", borderRadius: "12px", padding: "15px 18px" }}>
                <summary style={{ fontSize: "14px", fontWeight: "700", color: "#1F2B4D", display: "flex", justifyContent: "space-between", gap: "12px" }}>Do I need to pay immediately for a custom setup?
                  <span style={{ color: "#2C8C99" }}>+
                  </span>
                </summary>
                <p style={{ fontSize: "13.5px", color: "#667085", lineHeight: "1.6", margin: "10px 0 0" }}>No. You can calculate your setup and request a review before activating paid services.
                </p>
              </details>
            </div>
          </div>
        </div>
        <div style={{ position: "relative", overflow: "hidden", background: "linear-gradient(135deg,#1F2B4D,#32415C 58%,#2C6570)", padding: "76px 24px" }}>
          <div style={{ position: "absolute", bottom: "-120px", right: "-60px", width: "420px", height: "320px", background: "radial-gradient(circle,rgba(51,214,164,.12),transparent 70%)" }}></div>
          <div style={{ position: "relative", maxWidth: "760px", margin: "0 auto", textAlign: "center" }}>
            <h2 style={{ fontSize: "29px", fontWeight: "800", color: "#fff", lineHeight: "1.14" }}>Start with the core. Expand when AXY becomes essential.
            </h2>
            <p style={{ fontSize: "14.5px", color: "#C9D2E4", lineHeight: "1.6", margin: "14px 0 0" }}>Create your free workspace or let us map the right users, business units and modules for your organisation.
            </p>
            <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap", marginTop: "24px" }}>
              <a className="hv134" href="/create-account" style={{ display: "inline-flex", padding: "14px 24px", background: "#fff", color: "#1F2B4D", borderRadius: "10px", fontSize: "14.5px", fontWeight: "700" }}>Create free account
              </a>
              <a className="hv135" href="/book-a-walkthrough" style={{ display: "inline-flex", padding: "14px 24px", border: "1.5px solid rgba(255,255,255,.5)", color: "#fff", borderRadius: "10px", fontSize: "14.5px", fontWeight: "600" }}>Book a walkthrough
              </a>
            </div>
          </div>
        </div>
        {pOrgModalOpen ? (<>
          <div onClick={pOrgClose} style={{ position: "fixed", inset: "0", zIndex: "200", background: "rgba(15,22,43,.55)", display: "flex", alignItems: "center", justifyContent: "center", padding: "24px" }}>
            <div style={{ background: "#fff", borderRadius: "16px", padding: "28px", maxWidth: "420px", width: "100%", boxShadow: "0 30px 70px rgba(0,0,0,.35)" }}>
              <div style={{ width: "46px", height: "46px", borderRadius: "12px", background: "#EFF7F8", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg viewBox="0 0 20 20" width="22" height="22" fill="none" stroke="#2C8C99" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="6" width="14" height="10" rx="2"></rect>
                  <path d="M3 9h14M7 13h3"></path>
                </svg>
              </div>
              <div style={{ fontSize: "18px", fontWeight: "800", color: "#1F2B4D", marginTop: "14px" }}>Secure checkout is coming soon
              </div>
              <p style={{ fontSize: "13.5px", color: "#667085", lineHeight: "1.6", margin: "10px 0 0" }}>Online checkout for AXY Organization will be connected in the next implementation phase. In the meantime, book a short walkthrough and we will activate your plan with you.
              </p>
              <div style={{ display: "flex", gap: "10px", marginTop: "20px", flexWrap: "wrap" }}>
                <a className="hv136" href="/book-a-walkthrough" style={{ flex: "1", textAlign: "center", padding: "12px", background: "#32415C", color: "#fff", borderRadius: "10px", fontSize: "13.5px", fontWeight: "700" }}>Book a walkthrough
                </a>
                <button className="hv137" type="button" onClick={pOrgClose} style={{ padding: "12px 16px", background: "#fff", color: "#667085", border: "1px solid #E4E8EF", borderRadius: "10px", fontSize: "13.5px", fontWeight: "600", cursor: "pointer" }}>Close
                </button>
              </div>
            </div>
          </div>
        </>) : null}
      </div>
    </>
  );
}
