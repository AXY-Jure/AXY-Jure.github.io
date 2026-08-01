import React from 'react';
import { css } from '../lib/css.js';

export default function Product(v) {
  return (
    <>
      <div data-screen-label="Product Overview">
        <div style={{ position: "relative", overflow: "hidden", background: "linear-gradient(135deg,#1F2B4D,#32415C 60%,#2C6570)", padding: "74px 24px 66px" }}>
          <div style={{ position: "absolute", top: "-120px", right: "-80px", width: "420px", height: "420px", borderRadius: "50%", background: "radial-gradient(circle,rgba(51,214,164,.16),transparent 70%)" }}></div>
          <div style={{ position: "absolute", bottom: "-160px", left: "-90px", width: "440px", height: "440px", borderRadius: "50%", background: "radial-gradient(circle,rgba(44,140,153,.2),transparent 70%)" }}></div>
          <div style={{ position: "relative", maxWidth: "1120px", margin: "0 auto", display: "flex", gap: "48px", alignItems: "center", flexWrap: "wrap" }}>
            <div style={{ flex: "1.02", minWidth: "300px" }}>
              <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "10.5px", letterSpacing: ".14em", color: "#33D6A4", textTransform: "uppercase" }}>Product overview
              </div>
              <h1 style={{ fontSize: "40px", fontWeight: "800", color: "#fff", lineHeight: "1.1", letterSpacing: "-.02em", margin: "14px 0 0" }}>One connected platform for modern retail.
              </h1>
              <p style={{ fontSize: "15.5px", color: "#C9D2E4", lineHeight: "1.62", margin: "17px 0 0", maxWidth: "520px" }}>AXY connects sales teams, product data, customers, operations and retail partners — so every part of the business works with the same context.
              </p>
              <div style={{ display: "flex", gap: "12px", marginTop: "26px", flexWrap: "wrap" }}>
                <a className="hv19" href="/how-it-works" style={{ display: "inline-flex", padding: "13px 24px", background: "#fff", color: "#1F2B4D", borderRadius: "10px", fontSize: "14px", fontWeight: "700" }}>Explore the platform
                </a>
                <a className="hv20" href="/create-account" style={{ display: "inline-flex", padding: "13px 24px", border: "1.5px solid rgba(255,255,255,.45)", color: "#fff", borderRadius: "10px", fontSize: "14px", fontWeight: "600" }}>Create free account
                </a>
              </div>
            </div>
            <div style={{ flex: "1.15", minWidth: "320px" }}>
              <div style={{ position: "relative", height: "390px", borderRadius: "20px", background: "rgba(255,255,255,.045)", border: "1px solid rgba(255,255,255,.12)", boxShadow: "inset 0 1px 0 rgba(255,255,255,.08)", padding: "8px" }}>
                <div style={{ position: "absolute", top: "14px", left: "16px", display: "inline-flex", alignItems: "center", gap: "7px" }}>
                  <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#33D6A4" }}></span>
                  <span style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "8.5px", letterSpacing: ".1em", color: "#9fb7d6" }}>AXY ECOSYSTEM · one shared context layer
                  </span>
                </div>
                <div style={{ position: "relative", width: "100%", height: "100%" }}>
                  <svg viewBox="0 0 100 100" preserveAspectRatio="none" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", zIndex: "1" }}>
                    <line x1="50" y1="50" x2="24" y2="18" stroke="#3E7E8A" strokeWidth="0.5" strokeOpacity="0.55">
                      <animate attributeName="stroke-opacity" values="0.25;0.7;0.25" dur="4s" repeatCount="indefinite"></animate>
                    </line>
                    <line x1="50" y1="50" x2="76" y2="18" stroke="#3E7E8A" strokeWidth="0.5" strokeOpacity="0.55">
                      <animate attributeName="stroke-opacity" values="0.25;0.7;0.25" dur="4s" repeatCount="indefinite"></animate>
                    </line>
                    <line x1="50" y1="50" x2="13" y2="50" stroke="#3E7E8A" strokeWidth="0.5" strokeOpacity="0.55">
                      <animate attributeName="stroke-opacity" values="0.25;0.7;0.25" dur="4s" repeatCount="indefinite"></animate>
                    </line>
                    <line x1="50" y1="50" x2="87" y2="50" stroke="#3E7E8A" strokeWidth="0.5" strokeOpacity="0.55">
                      <animate attributeName="stroke-opacity" values="0.25;0.7;0.25" dur="4s" repeatCount="indefinite"></animate>
                    </line>
                    <line x1="50" y1="50" x2="24" y2="82" stroke="#3E7E8A" strokeWidth="0.5" strokeOpacity="0.55">
                      <animate attributeName="stroke-opacity" values="0.25;0.7;0.25" dur="4s" repeatCount="indefinite"></animate>
                    </line>
                    <line x1="50" y1="50" x2="76" y2="82" stroke="#3E7E8A" strokeWidth="0.5" strokeOpacity="0.55">
                      <animate attributeName="stroke-opacity" values="0.25;0.7;0.25" dur="4s" repeatCount="indefinite"></animate>
                    </line>
                    <circle r="1" fill="#33D6A4">
                      <animateMotion dur="3s" repeatCount="indefinite" path="M50,50 L24,18"></animateMotion>
                    </circle>
                    <circle r="1" fill="#33D6A4">
                      <animateMotion dur="3.6s" repeatCount="indefinite" path="M50,50 L87,50"></animateMotion>
                    </circle>
                    <circle r="1" fill="#33D6A4">
                      <animateMotion dur="4.2s" repeatCount="indefinite" path="M50,50 L24,82"></animateMotion>
                    </circle>
                  </svg>
                  <div style={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%,-50%)", zIndex: "4", width: "30%", minWidth: "104px", textAlign: "center", background: "linear-gradient(160deg,#33465f,#233150)", border: "1px solid rgba(127,212,222,.4)", borderRadius: "14px", padding: "14px 10px", boxShadow: "0 0 0 6px rgba(51,214,164,.1), 0 18px 40px rgba(0,0,0,.35)" }}>
                    <div style={{ fontSize: "18px", fontWeight: "900", color: "#fff", letterSpacing: ".04em" }}>AXY
                    </div>
                    <div style={{ fontSize: "9px", color: "#9fe6d4", marginTop: "3px", lineHeight: "1.25" }}>shared context layer
                    </div>
                  </div>
                  <a className="hv21" href="/sales-app" style={{ position: "absolute", left: "10%", top: "5%", width: "29%", zIndex: "3", textDecoration: "none", background: "#fff", border: "1px solid #D7E0EE", borderRadius: "11px", padding: "9px 11px", boxShadow: "0 10px 24px rgba(15,22,45,.28)" }}>
                    <div style={{ fontSize: "12px", fontWeight: "800", color: "#1F2B4D", lineHeight: "1.15" }}>Sales App
                    </div>
                    <div style={{ fontSize: "9.5px", color: "#7C8AA6", marginTop: "2px", lineHeight: "1.2" }}>Capture on the floor
                    </div>
                  </a>{' '}
                  <a className="hv22" href="/sales-app" style={{ position: "absolute", left: "61%", top: "5%", width: "29%", zIndex: "3", textDecoration: "none", background: "#fff", border: "1px solid #D7E0EE", borderRadius: "11px", padding: "9px 11px", boxShadow: "0 10px 24px rgba(15,22,45,.28)" }}>
                    <div style={{ fontSize: "12px", fontWeight: "800", color: "#1F2B4D", lineHeight: "1.15" }}>Sales Catalogue
                    </div>
                    <div style={{ fontSize: "9.5px", color: "#7C8AA6", marginTop: "2px", lineHeight: "1.2" }}>Present &amp; compare
                    </div>
                  </a>{' '}
                  <a className="hv23" href="/back-office" style={{ position: "absolute", left: "0%", top: "39%", width: "29%", zIndex: "3", textDecoration: "none", background: "#fff", border: "1px solid #D7E0EE", borderRadius: "11px", padding: "9px 11px", boxShadow: "0 10px 24px rgba(15,22,45,.28)" }}>
                    <div style={{ fontSize: "12px", fontWeight: "800", color: "#1F2B4D", lineHeight: "1.15" }}>Back Office
                    </div>
                    <div style={{ fontSize: "9.5px", color: "#7C8AA6", marginTop: "2px", lineHeight: "1.2" }}>Run the business
                    </div>
                  </a>{' '}
                  <a className="hv24" href="/customer-experience" style={{ position: "absolute", left: "71%", top: "39%", width: "29%", zIndex: "3", textDecoration: "none", background: "#fff", border: "1px solid #D7E0EE", borderRadius: "11px", padding: "9px 11px", boxShadow: "0 10px 24px rgba(15,22,45,.28)" }}>
                    <div style={{ fontSize: "12px", fontWeight: "800", color: "#1F2B4D", lineHeight: "1.15" }}>Customer App
                    </div>
                    <div style={{ fontSize: "9.5px", color: "#7C8AA6", marginTop: "2px", lineHeight: "1.2" }}>Continue after the visit
                    </div>
                  </a>{' '}
                  <a className="hv25" href="/for-brands" style={{ position: "absolute", left: "10%", top: "75%", width: "29%", zIndex: "3", textDecoration: "none", background: "#fff", border: "1px solid #D7E0EE", borderRadius: "11px", padding: "9px 11px", boxShadow: "0 10px 24px rgba(15,22,45,.28)" }}>
                    <div style={{ fontSize: "12px", fontWeight: "800", color: "#1F2B4D", lineHeight: "1.15" }}>Partner Network
                    </div>
                    <div style={{ fontSize: "9.5px", color: "#7C8AA6", marginTop: "2px", lineHeight: "1.2" }}>Work with brands
                    </div>
                  </a>{' '}
                  <a className="hv26" href="/how-it-works" style={{ position: "absolute", left: "61%", top: "75%", width: "29%", zIndex: "3", textDecoration: "none", background: "#fff", border: "1px solid #D7E0EE", borderRadius: "11px", padding: "9px 11px", boxShadow: "0 10px 24px rgba(15,22,45,.28)" }}>
                    <div style={{ fontSize: "12px", fontWeight: "800", color: "#1F2B4D", lineHeight: "1.15" }}>Alfred AI
                    </div>
                    <div style={{ fontSize: "9.5px", color: "#7C8AA6", marginTop: "2px", lineHeight: "1.2" }}>Quiet assistance
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ background: "#F9FAFB", padding: "72px 24px" }}>
          <div style={{ maxWidth: "1080px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", maxWidth: "660px", margin: "0 auto" }}>
              <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "10.5px", letterSpacing: ".14em", color: "#2C8C99", textTransform: "uppercase" }}>The operating model
              </div>
              <h2 style={{ fontSize: "29px", fontWeight: "800", lineHeight: "1.16", letterSpacing: "-.01em", margin: "12px 0 0", color: "#1F2B4D" }}>Capture. Continue. Understand.
              </h2>
              <p style={{ fontSize: "14.5px", color: "#667085", lineHeight: "1.6", margin: "13px 0 0" }}>Every AXY workflow follows one connected logic: record what happens, keep the journey moving and turn activity into useful action.
              </p>
            </div>
            <div style={{ position: "relative", background: "#fff", border: "1px solid #E4E8EF", borderRadius: "20px", padding: "26px", marginTop: "32px", boxShadow: "0 14px 40px rgba(31,43,77,.06)" }}>
              <div style={{ display: "flex", alignItems: "stretch", gap: "12px", flexWrap: "wrap" }}>
                <div style={{ flex: "1", minWidth: "220px", border: "1px solid #E4E8EF", borderRadius: "14px", padding: "18px", borderTop: "3px solid #2C8C99" }}>
                  <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "9px", color: "#2C8C99" }}>01 · CAPTURE
                  </div>
                  <div style={{ fontSize: "16px", fontWeight: "800", color: "#1F2B4D", marginTop: "8px" }}>Record what happens during normal work
                  </div>
                  <p style={{ fontSize: "12.5px", color: "#667085", lineHeight: "1.55", margin: "8px 0 12px" }}>Captured with minimal input, in the flow of the visit.
                  </p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                    <span style={{ fontSize: "10.5px", color: "#1C6470", background: "#DDF0F2", borderRadius: "20px", padding: "4px 10px" }}>Visits
                    </span>
                    <span style={{ fontSize: "10.5px", color: "#1C6470", background: "#DDF0F2", borderRadius: "20px", padding: "4px 10px" }}>Products shown
                    </span>
                    <span style={{ fontSize: "10.5px", color: "#1C6470", background: "#DDF0F2", borderRadius: "20px", padding: "4px 10px" }}>Interest
                    </span>
                    <span style={{ fontSize: "10.5px", color: "#1C6470", background: "#DDF0F2", borderRadius: "20px", padding: "4px 10px" }}>Inquiries
                    </span>
                    <span style={{ fontSize: "10.5px", color: "#1C6470", background: "#DDF0F2", borderRadius: "20px", padding: "4px 10px" }}>Service
                    </span>
                  </div>
                </div>
                <div style={{ flexShrink: "0", display: "flex", alignItems: "center", justifyContent: "center", width: "40px" }}>
                  <span style={{ width: "32px", height: "32px", borderRadius: "50%", background: "#EFF7F8", color: "#2C8C99", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "15px", fontWeight: "700" }}>→
                  </span>
                </div>
                <div style={{ flex: "1", minWidth: "220px", border: "1px solid #E4E8EF", borderRadius: "14px", padding: "18px", borderTop: "3px solid #C98B63" }}>
                  <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "9px", color: "#B5713F" }}>02 · CONTINUE
                  </div>
                  <div style={{ fontSize: "16px", fontWeight: "800", color: "#1F2B4D", marginTop: "8px" }}>Turn activity into the next action
                  </div>
                  <p style={{ fontSize: "12.5px", color: "#667085", lineHeight: "1.55", margin: "8px 0 12px" }}>Keep the customer relationship moving after the visit.
                  </p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                    <span style={{ fontSize: "10.5px", color: "#7a4a2e", background: "#FCF3EE", borderRadius: "20px", padding: "4px 10px" }}>Follow-ups
                    </span>
                    <span style={{ fontSize: "10.5px", color: "#7a4a2e", background: "#FCF3EE", borderRadius: "20px", padding: "4px 10px" }}>Offers
                    </span>
                    <span style={{ fontSize: "10.5px", color: "#7a4a2e", background: "#FCF3EE", borderRadius: "20px", padding: "4px 10px" }}>Appointments
                    </span>
                    <span style={{ fontSize: "10.5px", color: "#7a4a2e", background: "#FCF3EE", borderRadius: "20px", padding: "4px 10px" }}>Warranty
                    </span>
                    <span style={{ fontSize: "10.5px", color: "#7a4a2e", background: "#FCF3EE", borderRadius: "20px", padding: "4px 10px" }}>Availability
                    </span>
                  </div>
                </div>
                <div style={{ flexShrink: "0", display: "flex", alignItems: "center", justifyContent: "center", width: "40px" }}>
                  <span style={{ width: "32px", height: "32px", borderRadius: "50%", background: "#EFF7F8", color: "#2C8C99", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "15px", fontWeight: "700" }}>→
                  </span>
                </div>
                <div style={{ flex: "1", minWidth: "220px", border: "1px solid #E4E8EF", borderRadius: "14px", padding: "18px", borderTop: "3px solid #1F2B4D" }}>
                  <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "9px", color: "#1F2B4D" }}>03 · UNDERSTAND
                  </div>
                  <div style={{ fontSize: "16px", fontWeight: "800", color: "#1F2B4D", marginTop: "8px" }}>Use activity to make better decisions
                  </div>
                  <p style={{ fontSize: "12.5px", color: "#667085", lineHeight: "1.55", margin: "8px 0 12px" }}>The same activity, rolled up into clear signals.
                  </p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                    <span style={{ fontSize: "10.5px", color: "#334", background: "#EEF1F6", borderRadius: "20px", padding: "4px 10px" }}>Demand
                    </span>
                    <span style={{ fontSize: "10.5px", color: "#334", background: "#EEF1F6", borderRadius: "20px", padding: "4px 10px" }}>Conversion
                    </span>
                    <span style={{ fontSize: "10.5px", color: "#334", background: "#EEF1F6", borderRadius: "20px", padding: "4px 10px" }}>Performance
                    </span>
                    <span style={{ fontSize: "10.5px", color: "#334", background: "#EEF1F6", borderRadius: "20px", padding: "4px 10px" }}>Stock opportunities
                    </span>
                    <span style={{ fontSize: "10.5px", color: "#334", background: "#EEF1F6", borderRadius: "20px", padding: "4px 10px" }}>Behaviour
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ background: "#fff", padding: "72px 24px" }}>
          <div style={{ maxWidth: "1120px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", maxWidth: "660px", margin: "0 auto" }}>
              <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "10.5px", letterSpacing: ".14em", color: "#2C8C99", textTransform: "uppercase" }}>The products
              </div>
              <h2 style={{ fontSize: "29px", fontWeight: "800", lineHeight: "1.16", letterSpacing: "-.01em", margin: "12px 0 0", color: "#1F2B4D" }}>Explore the AXY products.
              </h2>
              <p style={{ fontSize: "14.5px", color: "#667085", lineHeight: "1.6", margin: "13px 0 0" }}>Five connected surfaces and one assistant — each doing a specific job, sharing the same context.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: "18px", marginTop: "34px" }}>
              <a className="hv27" href="/sales-app" style={{ display: "flex", flexDirection: "column", background: "#fff", border: "1px solid #E4E8EF", borderRadius: "16px", overflow: "hidden", textDecoration: "none", boxShadow: "0 1px 2px rgba(16,24,40,.04)" }}>
                <div style={{ padding: "14px 14px 0" }}>
                  <div style={{ height: "142px", borderRadius: "12px", background: "linear-gradient(160deg,#EEF2F7,#E1E8F1)", display: "flex", alignItems: "flex-end", justifyContent: "center", overflow: "hidden" }}>
                    <div style={{ width: "122px", height: "118px", background: "#fff", border: "2.5px solid #2E3A52", borderBottom: "none", borderRadius: "16px 16px 0 0", padding: "7px", boxShadow: "0 14px 28px rgba(31,43,77,.2)", display: "flex", flexDirection: "column", gap: "5px" }}>
                      <div style={{ fontSize: "8px", fontWeight: "800", color: "#1F2B4D", background: "#F4F6F9", borderRadius: "6px", padding: "5px 7px" }}>Active visit
                      </div>
                      <div style={{ display: "flex", alignItems: "center", gap: "5px", background: "#fff", border: "1px solid #ECEFF4", borderRadius: "7px", padding: "4px 6px" }}>
                        <span style={{ width: "13px", height: "13px", border: "2px solid #3A465F", borderRadius: "50%", background: "#F5F3EF" }}></span>
                        <span style={{ flex: "1", fontSize: "7.5px", fontWeight: "600", color: "#1F2B4D" }}>Meridian Steel
                        </span>
                        <span style={{ fontSize: "6px", fontWeight: "700", color: "#0F3D38", background: "#CDF3E6", borderRadius: "4px", padding: "2px 4px" }}>LIKED
                        </span>
                      </div>
                      <div style={{ display: "flex", alignItems: "center", gap: "5px", background: "#fff", border: "1px solid #ECEFF4", borderRadius: "7px", padding: "4px 6px" }}>
                        <span style={{ width: "13px", height: "13px", border: "2px solid #3A465F", borderRadius: "50%", background: "#F5F3EF" }}></span>
                        <span style={{ flex: "1", fontSize: "7.5px", fontWeight: "600", color: "#1F2B4D" }}>Datora Classic
                        </span>
                        <span style={{ fontSize: "6px", fontWeight: "700", color: "#1C6470", background: "#DDF0F2", borderRadius: "4px", padding: "2px 4px" }}>SHOWN
                        </span>
                      </div>
                      <div style={{ textAlign: "center", fontSize: "7.5px", fontWeight: "700", color: "#fff", background: "#32415C", borderRadius: "6px", padding: "4px" }}>Create follow-up
                      </div>
                    </div>
                  </div>
                </div>
                <div style={{ padding: "16px 18px 18px", display: "flex", flexDirection: "column", flex: "1" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <div style={{ fontSize: "17px", fontWeight: "800", color: "#1F2B4D" }}>Sales App
                    </div>
                  </div>
                  <p style={{ fontSize: "13px", color: "#667085", lineHeight: "1.55", margin: "8px 0 0" }}>Help sales teams capture, recommend and follow up during the customer journey.
                  </p>
                  <div style={{ display: "flex", gap: "6px", flexWrap: "wrap", marginTop: "13px" }}>
                    <span style={{ fontSize: "11px", fontWeight: "600", color: "#3a4358", background: "#F1F4F8", border: "1px solid #E4E8EF", borderRadius: "20px", padding: "4px 11px" }}>Visits
                    </span>
                    <span style={{ fontSize: "11px", fontWeight: "600", color: "#3a4358", background: "#F1F4F8", border: "1px solid #E4E8EF", borderRadius: "20px", padding: "4px 11px" }}>Scanning
                    </span>
                    <span style={{ fontSize: "11px", fontWeight: "600", color: "#3a4358", background: "#F1F4F8", border: "1px solid #E4E8EF", borderRadius: "20px", padding: "4px 11px" }}>Follow-ups
                    </span>
                  </div>
                  <div style={{ marginTop: "auto", paddingTop: "15px" }}>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "13.5px", fontWeight: "700", color: "#2C8C99" }}>Explore Sales App →
                    </span>
                  </div>
                </div>
              </a>{' '}
              <a className="hv28" href="/sales-app" style={{ display: "flex", flexDirection: "column", background: "#fff", border: "1px solid #E4E8EF", borderRadius: "16px", overflow: "hidden", textDecoration: "none", boxShadow: "0 1px 2px rgba(16,24,40,.04)" }}>
                <div style={{ padding: "14px 14px 0" }}>
                  <div style={{ height: "142px", borderRadius: "12px", background: "linear-gradient(160deg,#EEF2F7,#E1E8F1)", padding: "12px", overflow: "hidden" }}>
                    <div style={{ background: "#fff", border: "1px solid #E3E7EE", borderRadius: "9px", height: "100%", padding: "8px", display: "flex", flexDirection: "column", gap: "6px", boxShadow: "0 10px 24px rgba(31,43,77,.12)" }}>
                      <div style={{ display: "flex", gap: "5px" }}>
                        <span style={{ fontSize: "7px", fontWeight: "700", color: "#fff", background: "#32415C", borderRadius: "5px", padding: "3px 7px" }}>All
                        </span>
                        <span style={{ fontSize: "7px", color: "#667085", background: "#F1F3F7", borderRadius: "5px", padding: "3px 7px" }}>Watches
                        </span>
                        <span style={{ fontSize: "7px", color: "#0F3D38", background: "#CDF3E6", borderRadius: "5px", padding: "3px 7px" }}>In stock
                        </span>
                      </div>
                      <div style={{ flex: "1", display: "grid", gridTemplateColumns: "repeat(3,1fr)", gridTemplateRows: "repeat(2,1fr)", gap: "5px" }}>
                        <div style={{ background: "#F5F7FA", border: "1px solid #EAEDF2", borderRadius: "6px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                          <span style={{ width: "15px", height: "15px", border: "2px solid #3A465F", borderRadius: "50%", background: "#F5F3EF" }}></span>
                        </div>
                        <div style={{ background: "#F5F7FA", border: "1px solid #EAEDF2", borderRadius: "6px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                          <span style={{ width: "15px", height: "15px", border: "2px solid #3A465F", borderRadius: "50%", background: "#F5F3EF" }}></span>
                        </div>
                        <div style={{ background: "#F5F7FA", border: "1px solid #EAEDF2", borderRadius: "6px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                          <span style={{ width: "15px", height: "15px", border: "2px solid #3A465F", borderRadius: "50%", background: "#F5F3EF" }}></span>
                        </div>
                        <div style={{ background: "#F5F7FA", border: "1px solid #EAEDF2", borderRadius: "6px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                          <span style={{ width: "15px", height: "15px", border: "2px solid #3A465F", borderRadius: "50%", background: "#F5F3EF" }}></span>
                        </div>
                        <div style={{ background: "#F5F7FA", border: "1px solid #EAEDF2", borderRadius: "6px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                          <span style={{ width: "15px", height: "15px", border: "2px solid #3A465F", borderRadius: "50%", background: "#F5F3EF" }}></span>
                        </div>
                        <div style={{ background: "#F5F7FA", border: "1px solid #EAEDF2", borderRadius: "6px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                          <span style={{ width: "15px", height: "15px", border: "2px solid #3A465F", borderRadius: "50%", background: "#F5F3EF" }}></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div style={{ padding: "16px 18px 18px", display: "flex", flexDirection: "column", flex: "1" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <div style={{ fontSize: "17px", fontWeight: "800", color: "#1F2B4D" }}>Sales Catalogue
                    </div>
                  </div>
                  <p style={{ fontSize: "13px", color: "#667085", lineHeight: "1.55", margin: "8px 0 0" }}>Present, compare, check availability and share products through one connected catalogue.
                  </p>
                  <div style={{ display: "flex", gap: "6px", flexWrap: "wrap", marginTop: "13px" }}>
                    <span style={{ fontSize: "11px", fontWeight: "600", color: "#3a4358", background: "#F1F4F8", border: "1px solid #E4E8EF", borderRadius: "20px", padding: "4px 11px" }}>Browse
                    </span>
                    <span style={{ fontSize: "11px", fontWeight: "600", color: "#3a4358", background: "#F1F4F8", border: "1px solid #E4E8EF", borderRadius: "20px", padding: "4px 11px" }}>Compare
                    </span>
                    <span style={{ fontSize: "11px", fontWeight: "600", color: "#3a4358", background: "#F1F4F8", border: "1px solid #E4E8EF", borderRadius: "20px", padding: "4px 11px" }}>Availability
                    </span>
                  </div>
                  <div style={{ marginTop: "auto", paddingTop: "15px" }}>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "13.5px", fontWeight: "700", color: "#2C8C99" }}>Explore Sales Catalogue →
                    </span>
                  </div>
                </div>
              </a>{' '}
              <a className="hv29" href="/back-office" style={{ display: "flex", flexDirection: "column", background: "#fff", border: "1px solid #E4E8EF", borderRadius: "16px", overflow: "hidden", textDecoration: "none", boxShadow: "0 1px 2px rgba(16,24,40,.04)" }}>
                <div style={{ padding: "14px 14px 0" }}>
                  <div style={{ height: "142px", borderRadius: "12px", background: "linear-gradient(160deg,#EEF2F7,#E1E8F1)", display: "flex", alignItems: "center", justifyContent: "center", padding: "12px", overflow: "hidden" }}>
                    <div style={{ width: "100%", height: "100%", background: "#F7F8FA", border: "1px solid #D9DEE7", borderRadius: "9px", overflow: "hidden", boxShadow: "0 12px 26px rgba(31,43,77,.15)", display: "flex", flexDirection: "column" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "4px", padding: "5px 8px", background: "#1F2B4D" }}>
                        <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#4E5D80" }}></span>
                        <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#4E5D80" }}></span>
                        <span style={{ fontSize: "7px", fontWeight: "700", color: "#fff", marginLeft: "4px" }}>Back Office · Products
                        </span>
                      </div>
                      <div style={{ flex: "1", display: "flex" }}>
                        <div style={{ width: "36px", background: "#EEF1F6", borderRight: "1px solid #E1E5EC", display: "flex", flexDirection: "column", gap: "4px", padding: "7px 5px" }}>
                          <div style={{ height: "6px", background: "#D6DCE6", borderRadius: "3px" }}></div>
                          <div style={{ height: "6px", background: "#D6DCE6", borderRadius: "3px" }}></div>
                          <div style={{ height: "6px", background: "#D6DCE6", borderRadius: "3px" }}></div>
                        </div>
                        <div style={{ flex: "1", padding: "6px", display: "flex", flexDirection: "column", gap: "4px" }}>
                          <div style={{ display: "flex", alignItems: "center", gap: "6px", background: "#fff", border: "1px solid #E7EAF0", borderRadius: "6px", padding: "4px 7px" }}>
                            <span style={{ width: "13px", height: "13px", border: "2px solid #3A465F", borderRadius: "50%", background: "#F5F3EF" }}></span>
                            <span style={{ flex: "1", fontSize: "7.5px", fontWeight: "600", color: "#1F2B4D" }}>Meridian Steel
                            </span>
                            <span style={{ fontSize: "6.5px", color: "#667085" }}>In stock
                            </span>
                          </div>
                          <div style={{ display: "flex", alignItems: "center", gap: "6px", background: "#fff", border: "1px solid #E7EAF0", borderRadius: "6px", padding: "4px 7px" }}>
                            <span style={{ width: "13px", height: "13px", border: "2px solid #3A465F", borderRadius: "50%", background: "#F5F3EF" }}></span>
                            <span style={{ flex: "1", fontSize: "7.5px", fontWeight: "600", color: "#1F2B4D" }}>Datora Classic
                            </span>
                            <span style={{ fontSize: "6.5px", color: "#667085" }}>2 left
                            </span>
                          </div>
                          <div style={{ display: "flex", alignItems: "center", gap: "6px", background: "#fff", border: "1px solid #E7EAF0", borderRadius: "6px", padding: "4px 7px" }}>
                            <span style={{ width: "13px", height: "13px", border: "2px solid #3A465F", borderRadius: "50%", background: "#F5F3EF" }}></span>
                            <span style={{ flex: "1", fontSize: "7.5px", fontWeight: "600", color: "#1F2B4D" }}>Aria Quartz
                            </span>
                            <span style={{ fontSize: "6.5px", color: "#667085" }}>Reorder
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div style={{ padding: "16px 18px 18px", display: "flex", flexDirection: "column", flex: "1" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <div style={{ fontSize: "17px", fontWeight: "800", color: "#1F2B4D" }}>Back Office
                    </div>
                  </div>
                  <p style={{ fontSize: "13px", color: "#667085", lineHeight: "1.55", margin: "8px 0 0" }}>Manage products, customers, operations, orders, service and business activity.
                  </p>
                  <div style={{ display: "flex", gap: "6px", flexWrap: "wrap", marginTop: "13px" }}>
                    <span style={{ fontSize: "11px", fontWeight: "600", color: "#3a4358", background: "#F1F4F8", border: "1px solid #E4E8EF", borderRadius: "20px", padding: "4px 11px" }}>Products
                    </span>
                    <span style={{ fontSize: "11px", fontWeight: "600", color: "#3a4358", background: "#F1F4F8", border: "1px solid #E4E8EF", borderRadius: "20px", padding: "4px 11px" }}>Orders
                    </span>
                    <span style={{ fontSize: "11px", fontWeight: "600", color: "#3a4358", background: "#F1F4F8", border: "1px solid #E4E8EF", borderRadius: "20px", padding: "4px 11px" }}>Reporting
                    </span>
                  </div>
                  <div style={{ marginTop: "auto", paddingTop: "15px" }}>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "13.5px", fontWeight: "700", color: "#2C8C99" }}>Explore Back Office →
                    </span>
                  </div>
                </div>
              </a>{' '}
              <a className="hv30" href="/customer-experience" style={{ display: "flex", flexDirection: "column", background: "#fff", border: "1px solid #E4E8EF", borderRadius: "16px", overflow: "hidden", textDecoration: "none", boxShadow: "0 1px 2px rgba(16,24,40,.04)" }}>
                <div style={{ padding: "14px 14px 0" }}>
                  <div style={{ height: "142px", borderRadius: "12px", background: "linear-gradient(160deg,#F6EEE7,#EFE0D2)", display: "flex", alignItems: "flex-end", justifyContent: "center", overflow: "hidden" }}>
                    <div style={{ width: "122px", height: "118px", background: "#fff", border: "2.5px solid #2E3A52", borderBottom: "none", borderRadius: "16px 16px 0 0", padding: "7px", boxShadow: "0 14px 28px rgba(31,43,77,.2)", display: "flex", flexDirection: "column", gap: "5px" }}>
                      <div style={{ fontSize: "8px", fontWeight: "800", color: "#7a4a2e", background: "#FCF3EE", borderRadius: "6px", padding: "5px 7px" }}>Your visit
                      </div>
                      <div style={{ display: "flex", alignItems: "center", gap: "5px", background: "#fff", border: "1px solid #F0E4DA", borderRadius: "7px", padding: "4px 6px" }}>
                        <span style={{ width: "13px", height: "13px", border: "2px solid #C98B63", borderRadius: "50%", background: "#FBF3ED" }}></span>
                        <span style={{ flex: "1", fontSize: "7.5px", fontWeight: "600", color: "#1F2B4D" }}>Meridian Steel
                        </span>
                        <span style={{ fontSize: "6px", fontWeight: "700", color: "#7a4a2e", background: "#FCF3EE", borderRadius: "4px", padding: "2px 4px" }}>SAVED
                        </span>
                      </div>
                      <div style={{ display: "flex", alignItems: "center", gap: "5px", background: "#fff", border: "1px solid #F0E4DA", borderRadius: "7px", padding: "4px 6px" }}>
                        <span style={{ width: "13px", height: "13px", border: "2px solid #C98B63", borderRadius: "50%", background: "#FBF3ED" }}></span>
                        <span style={{ flex: "1", fontSize: "7.5px", fontWeight: "600", color: "#1F2B4D" }}>Warranty card
                        </span>
                        <span style={{ fontSize: "6px", fontWeight: "700", color: "#1C6470", background: "#DDF0F2", borderRadius: "4px", padding: "2px 4px" }}>ACTIVE
                        </span>
                      </div>
                      <div style={{ textAlign: "center", fontSize: "7.5px", fontWeight: "700", color: "#7a4a2e", background: "#FCF3EE", border: "1px solid #F0DDD2", borderRadius: "6px", padding: "4px" }}>View offer
                      </div>
                    </div>
                  </div>
                </div>
                <div style={{ padding: "16px 18px 18px", display: "flex", flexDirection: "column", flex: "1" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <div style={{ fontSize: "17px", fontWeight: "800", color: "#1F2B4D" }}>Customer App
                    </div>
                  </div>
                  <p style={{ fontSize: "13px", color: "#667085", lineHeight: "1.55", margin: "8px 0 0" }}>Continue the store relationship through visits, products, inquiries, warranties and service.
                  </p>
                  <div style={{ display: "flex", gap: "6px", flexWrap: "wrap", marginTop: "13px" }}>
                    <span style={{ fontSize: "11px", fontWeight: "600", color: "#3a4358", background: "#F1F4F8", border: "1px solid #E4E8EF", borderRadius: "20px", padding: "4px 11px" }}>Wishlist
                    </span>
                    <span style={{ fontSize: "11px", fontWeight: "600", color: "#3a4358", background: "#F1F4F8", border: "1px solid #E4E8EF", borderRadius: "20px", padding: "4px 11px" }}>Warranty
                    </span>
                    <span style={{ fontSize: "11px", fontWeight: "600", color: "#3a4358", background: "#F1F4F8", border: "1px solid #E4E8EF", borderRadius: "20px", padding: "4px 11px" }}>Service
                    </span>
                  </div>
                  <div style={{ marginTop: "auto", paddingTop: "15px" }}>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "13.5px", fontWeight: "700", color: "#2C8C99" }}>Explore Customer App →
                    </span>
                  </div>
                </div>
              </a>{' '}
              <a className="hv31" href="/for-brands" style={{ display: "flex", flexDirection: "column", background: "#fff", border: "1px solid #E4E8EF", borderRadius: "16px", overflow: "hidden", textDecoration: "none", boxShadow: "0 1px 2px rgba(16,24,40,.04)" }}>
                <div style={{ padding: "14px 14px 0" }}>
                  <div style={{ height: "142px", borderRadius: "12px", background: "radial-gradient(120% 120% at 50% 30%,#2A3A5C,#182238)", position: "relative", overflow: "hidden" }}>
                    <div style={{ position: "absolute", left: "42%", top: "40%", width: "46px", height: "30px", background: "#fff", borderRadius: "8px", boxShadow: "0 0 0 5px rgba(127,212,222,.18)", zIndex: "3" }}>
                      <div style={{ fontSize: "7px", fontWeight: "800", color: "#1F2B4D", textAlign: "center", marginTop: "9px" }}>BRAND
                      </div>
                    </div>
                    <span style={{ position: "absolute", left: "8%", top: "14%", width: "30px", height: "20px", background: "rgba(255,255,255,.12)", border: "1px solid rgba(255,255,255,.28)", borderRadius: "5px" }}></span>
                    <span style={{ position: "absolute", left: "72%", top: "14%", width: "30px", height: "20px", background: "rgba(255,255,255,.12)", border: "1px solid rgba(255,255,255,.28)", borderRadius: "5px" }}></span>
                    <span style={{ position: "absolute", left: "8%", top: "70%", width: "30px", height: "20px", background: "rgba(255,255,255,.12)", border: "1px solid rgba(255,255,255,.28)", borderRadius: "5px" }}></span>
                    <span style={{ position: "absolute", left: "72%", top: "70%", width: "30px", height: "20px", background: "rgba(255,255,255,.12)", border: "1px solid rgba(255,255,255,.28)", borderRadius: "5px" }}></span>
                    <div style={{ position: "absolute", left: "22%", top: "32%", width: "22%", height: "2px", background: "linear-gradient(90deg,#33D6A4,#7fd4de)" }}></div>
                    <div style={{ position: "absolute", left: "56%", top: "32%", width: "18%", height: "2px", background: "linear-gradient(90deg,#7fd4de,rgba(255,255,255,.15))" }}></div>
                    <div style={{ position: "absolute", left: "22%", top: "66%", width: "22%", height: "2px", background: "linear-gradient(90deg,#33D6A4,#7fd4de)" }}></div>
                    <div style={{ position: "absolute", left: "56%", top: "66%", width: "18%", height: "2px", background: "rgba(255,255,255,.15)" }}></div>
                  </div>
                </div>
                <div style={{ padding: "16px 18px 18px", display: "flex", flexDirection: "column", flex: "1" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <div style={{ fontSize: "17px", fontWeight: "800", color: "#1F2B4D" }}>Partner Network
                    </div>
                  </div>
                  <p style={{ fontSize: "13px", color: "#667085", lineHeight: "1.55", margin: "8px 0 0" }}>Exchange catalogues, orders, availability, announcements and warranty actions with connected partners.
                  </p>
                  <div style={{ display: "flex", gap: "6px", flexWrap: "wrap", marginTop: "13px" }}>
                    <span style={{ fontSize: "11px", fontWeight: "600", color: "#3a4358", background: "#F1F4F8", border: "1px solid #E4E8EF", borderRadius: "20px", padding: "4px 11px" }}>Catalogues
                    </span>
                    <span style={{ fontSize: "11px", fontWeight: "600", color: "#3a4358", background: "#F1F4F8", border: "1px solid #E4E8EF", borderRadius: "20px", padding: "4px 11px" }}>Orders
                    </span>
                    <span style={{ fontSize: "11px", fontWeight: "600", color: "#3a4358", background: "#F1F4F8", border: "1px solid #E4E8EF", borderRadius: "20px", padding: "4px 11px" }}>Announcements
                    </span>
                  </div>
                  <div style={{ marginTop: "auto", paddingTop: "15px" }}>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "13.5px", fontWeight: "700", color: "#2C8C99" }}>Explore Partner Network →
                    </span>
                  </div>
                </div>
              </a>{' '}
              <a className="hv32" href="/how-it-works" style={{ display: "flex", flexDirection: "column", background: "#fff", border: "1px solid #E4E8EF", borderRadius: "16px", overflow: "hidden", textDecoration: "none", boxShadow: "0 1px 2px rgba(16,24,40,.04)" }}>
                <div style={{ padding: "14px 14px 0" }}>
                  <div style={{ height: "142px", borderRadius: "12px", background: "linear-gradient(160deg,#EEF2F7,#E1E8F1)", display: "flex", alignItems: "center", justifyContent: "center", padding: "14px", overflow: "hidden" }}>
                    <div style={{ width: "100%", background: "#fff", border: "1px solid #E3E7EE", borderRadius: "10px", padding: "11px", boxShadow: "0 12px 26px rgba(31,43,77,.14)" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                        <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#33D6A4" }}></span>
                        <span style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "7px", letterSpacing: ".08em", color: "#2C8C99" }}>ALFRED · SUGGESTED NEXT ACTION
                        </span>
                      </div>
                      <div style={{ fontSize: "9px", color: "#1F2B4D", lineHeight: "1.5", marginTop: "8px" }}>Follow up with A. Rossi about the blue-dial model they liked — available in your Milan store.
                      </div>
                      <div style={{ display: "flex", gap: "5px", marginTop: "9px" }}>
                        <span style={{ fontSize: "7px", fontWeight: "700", color: "#fff", background: "#32415C", borderRadius: "5px", padding: "4px 9px" }}>Approve
                        </span>
                        <span style={{ fontSize: "7px", fontWeight: "700", color: "#32415C", border: "1px solid #CBD3E0", borderRadius: "5px", padding: "4px 9px" }}>Edit
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div style={{ padding: "16px 18px 18px", display: "flex", flexDirection: "column", flex: "1" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <div style={{ fontSize: "17px", fontWeight: "800", color: "#1F2B4D" }}>Alfred AI
                    </div>
                  </div>
                  <p style={{ fontSize: "13px", color: "#667085", lineHeight: "1.55", margin: "8px 0 0" }}>Surface recommendations, priorities and next actions across the platform.
                  </p>
                  <div style={{ display: "flex", gap: "6px", flexWrap: "wrap", marginTop: "13px" }}>
                    <span style={{ fontSize: "11px", fontWeight: "600", color: "#3a4358", background: "#F1F4F8", border: "1px solid #E4E8EF", borderRadius: "20px", padding: "4px 11px" }}>Summaries
                    </span>
                    <span style={{ fontSize: "11px", fontWeight: "600", color: "#3a4358", background: "#F1F4F8", border: "1px solid #E4E8EF", borderRadius: "20px", padding: "4px 11px" }}>Priorities
                    </span>
                    <span style={{ fontSize: "11px", fontWeight: "600", color: "#3a4358", background: "#F1F4F8", border: "1px solid #E4E8EF", borderRadius: "20px", padding: "4px 11px" }}>Next actions
                    </span>
                  </div>
                  <div style={{ marginTop: "auto", paddingTop: "15px" }}>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "13.5px", fontWeight: "700", color: "#2C8C99" }}>Explore Alfred →
                    </span>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div style={{ background: "#F9FAFB", padding: "72px 24px" }}>
          <div style={{ maxWidth: "1120px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", maxWidth: "680px", margin: "0 auto" }}>
              <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "10.5px", letterSpacing: ".14em", color: "#2C8C99", textTransform: "uppercase" }}>Capability map
              </div>
              <h2 style={{ fontSize: "29px", fontWeight: "800", lineHeight: "1.16", letterSpacing: "-.01em", margin: "12px 0 0", color: "#1F2B4D" }}>Everything AXY connects across your retail business.
              </h2>
              <p style={{ fontSize: "14.5px", color: "#667085", lineHeight: "1.6", margin: "13px 0 0" }}>From sales and customers to products, partners and performance — AXY brings the core retail workflows into one connected platform.
              </p>
            </div>
            <div className="po-capgrid" style={{ marginTop: "34px" }}>
              <div className="hv33" style={{ display: "flex", flexDirection: "column", background: "#fff", border: "1px solid #E4E8EF", borderRadius: "14px", padding: "20px", boxShadow: "0 1px 2px rgba(16,24,40,.04)" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <div style={{ width: "42px", height: "42px", borderRadius: "11px", background: "#EFF7F8", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg viewBox="0 0 20 20" width="20" height="20" fill="none" stroke="#32415C" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="3,14 8,9 12,12 17,5"></polyline>
                      <polyline points="13,5 17,5 17,9"></polyline>
                    </svg>
                  </div>
                  <span className="hv34" style={{ color: "#C3CBD8", fontSize: "15px", fontWeight: "700" }}>→
                  </span>
                </div>
                <div style={{ fontSize: "14.5px", fontWeight: "800", color: "#1F2B4D", marginTop: "14px", lineHeight: "1.25" }}>Sell better
                </div>
                <p style={{ fontSize: "12.5px", color: "#667085", lineHeight: "1.55", margin: "7px 0 0" }}>Manage sales visits, customer context, product suggestions, follow-ups, offers and invoices.
                </p>
              </div>
              <div className="hv35" style={{ display: "flex", flexDirection: "column", background: "#fff", border: "1px solid #E4E8EF", borderRadius: "14px", padding: "20px", boxShadow: "0 1px 2px rgba(16,24,40,.04)" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <div style={{ width: "42px", height: "42px", borderRadius: "11px", background: "#EFF7F8", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg viewBox="0 0 20 20" width="20" height="20" fill="none" stroke="#32415C" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="7" cy="6" r="2.6"></circle>
                      <path d="M2.7 15.5c0-2.4 1.9-3.9 4.3-3.9"></path>
                      <path d="M12.5 8.5l1.6 1.6 3-3.1"></path>
                      <path d="M12.5 13.2l1.6 1.6 3-3.1"></path>
                    </svg>
                  </div>
                  <span className="hv36" style={{ color: "#C3CBD8", fontSize: "15px", fontWeight: "700" }}>→
                  </span>
                </div>
                <div style={{ fontSize: "14.5px", fontWeight: "800", color: "#1F2B4D", marginTop: "14px", lineHeight: "1.25" }}>Run customer &amp; team workflows
                </div>
                <p style={{ fontSize: "12.5px", color: "#667085", lineHeight: "1.55", margin: "7px 0 0" }}>Organise customers, tasks, tickets, appointments, employee activity and next actions.
                </p>
              </div>
              <div className="hv37" style={{ display: "flex", flexDirection: "column", background: "#fff", border: "1px solid #E4E8EF", borderRadius: "14px", padding: "20px", boxShadow: "0 1px 2px rgba(16,24,40,.04)" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <div style={{ width: "42px", height: "42px", borderRadius: "11px", background: "#EFF7F8", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg viewBox="0 0 20 20" width="20" height="20" fill="none" stroke="#32415C" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="3" width="14" height="14" rx="2"></rect>
                      <line x1="7" y1="3" x2="7" y2="17"></line>
                      <line x1="10" y1="6.5" x2="14.5" y2="6.5"></line>
                      <line x1="10" y1="10" x2="14.5" y2="10"></line>
                    </svg>
                  </div>
                  <span className="hv38" style={{ color: "#C3CBD8", fontSize: "15px", fontWeight: "700" }}>→
                  </span>
                </div>
                <div style={{ fontSize: "14.5px", fontWeight: "800", color: "#1F2B4D", marginTop: "14px", lineHeight: "1.25" }}>Manage products &amp; catalogues
                </div>
                <p style={{ fontSize: "12.5px", color: "#667085", lineHeight: "1.55", margin: "7px 0 0" }}>Create or import product catalogues, specifications, images, variants and pricing information.
                </p>
              </div>
              <div className="hv39" style={{ display: "flex", flexDirection: "column", background: "#fff", border: "1px solid #E4E8EF", borderRadius: "14px", padding: "20px", boxShadow: "0 1px 2px rgba(16,24,40,.04)" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <div style={{ width: "42px", height: "42px", borderRadius: "11px", background: "#EFF7F8", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg viewBox="0 0 20 20" width="20" height="20" fill="none" stroke="#32415C" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2.6" y="7" width="6" height="6" rx="1"></rect>
                      <rect x="11.4" y="7" width="6" height="6" rx="1"></rect>
                      <path d="M8.6 8.6h2.8"></path>
                      <polyline points="10.6,7.4 11.6,8.6 10.6,9.8"></polyline>
                      <path d="M11.4 11.4H8.6"></path>
                      <polyline points="9.4,10.2 8.4,11.4 9.4,12.6"></polyline>
                    </svg>
                  </div>
                  <span className="hv40" style={{ color: "#C3CBD8", fontSize: "15px", fontWeight: "700" }}>→
                  </span>
                </div>
                <div style={{ fontSize: "14.5px", fontWeight: "800", color: "#1F2B4D", marginTop: "14px", lineHeight: "1.25" }}>Control stock, orders &amp; transfers
                </div>
                <p style={{ fontSize: "12.5px", color: "#667085", lineHeight: "1.55", margin: "7px 0 0" }}>Check availability, manage orders and reorders, transfer products and understand stock status.
                </p>
              </div>
              <div className="hv41" style={{ display: "flex", flexDirection: "column", background: "#fff", border: "1px solid #E4E8EF", borderRadius: "14px", padding: "20px", boxShadow: "0 1px 2px rgba(16,24,40,.04)" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <div style={{ width: "42px", height: "42px", borderRadius: "11px", background: "#EFF7F8", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg viewBox="0 0 20 20" width="20" height="20" fill="none" stroke="#32415C" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 5.5h14v8H8l-3.5 3v-3H3z"></path>
                      <line x1="6.5" y1="8" x2="13.5" y2="8"></line>
                      <line x1="6.5" y1="11" x2="11" y2="11"></line>
                    </svg>
                  </div>
                  <span className="hv42" style={{ color: "#C3CBD8", fontSize: "15px", fontWeight: "700" }}>→
                  </span>
                </div>
                <div style={{ fontSize: "14.5px", fontWeight: "800", color: "#1F2B4D", marginTop: "14px", lineHeight: "1.25" }}>Stay connected with customers
                </div>
                <p style={{ fontSize: "12.5px", color: "#667085", lineHeight: "1.55", margin: "7px 0 0" }}>Send announcements, share products, receive inquiries and continue the relationship through the customer app.
                </p>
              </div>
              <div className="hv43" style={{ display: "flex", flexDirection: "column", background: "#fff", border: "1px solid #E4E8EF", borderRadius: "14px", padding: "20px", boxShadow: "0 1px 2px rgba(16,24,40,.04)" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <div style={{ width: "42px", height: "42px", borderRadius: "11px", background: "#EFF7F8", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg viewBox="0 0 20 20" width="20" height="20" fill="none" stroke="#32415C" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M10 2.6l5.5 2.2v4c0 3.5-2.3 6.4-5.5 7.6C6.8 15.2 4.5 12.3 4.5 8.8v-4z"></path>
                      <polyline points="7.4,9.6 9.2,11.4 12.6,7.6"></polyline>
                    </svg>
                  </div>
                  <span className="hv44" style={{ color: "#C3CBD8", fontSize: "15px", fontWeight: "700" }}>→
                  </span>
                </div>
                <div style={{ fontSize: "14.5px", fontWeight: "800", color: "#1F2B4D", marginTop: "14px", lineHeight: "1.25" }}>Manage service &amp; warranties
                </div>
                <p style={{ fontSize: "12.5px", color: "#667085", lineHeight: "1.55", margin: "7px 0 0" }}>Handle service requests, repair progress, warranty activations, extensions and customer documents.
                </p>
              </div>
              <div className="hv45" style={{ display: "flex", flexDirection: "column", background: "#fff", border: "1px solid #E4E8EF", borderRadius: "14px", padding: "20px", boxShadow: "0 1px 2px rgba(16,24,40,.04)" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <div style={{ width: "42px", height: "42px", borderRadius: "11px", background: "#EFF7F8", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg viewBox="0 0 20 20" width="20" height="20" fill="none" stroke="#32415C" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="4.5" cy="5" r="2.1"></circle>
                      <circle cx="15.5" cy="5" r="2.1"></circle>
                      <circle cx="10" cy="15" r="2.1"></circle>
                      <line x1="6.2" y1="6.2" x2="8.6" y2="13.2"></line>
                      <line x1="13.8" y1="6.2" x2="11.4" y2="13.2"></line>
                      <line x1="6.4" y1="5" x2="13.6" y2="5"></line>
                    </svg>
                  </div>
                  <span className="hv46" style={{ color: "#C3CBD8", fontSize: "15px", fontWeight: "700" }}>→
                  </span>
                </div>
                <div style={{ fontSize: "14.5px", fontWeight: "800", color: "#1F2B4D", marginTop: "14px", lineHeight: "1.25" }}>Work with partners
                </div>
                <p style={{ fontSize: "12.5px", color: "#667085", lineHeight: "1.55", margin: "7px 0 0" }}>Exchange catalogues, orders, availability, announcements and warranty information through one connected network.
                </p>
              </div>
              <div className="hv47" style={{ display: "flex", flexDirection: "column", background: "#fff", border: "1px solid #E4E8EF", borderRadius: "14px", padding: "20px", boxShadow: "0 1px 2px rgba(16,24,40,.04)" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <div style={{ width: "42px", height: "42px", borderRadius: "11px", background: "#EFF7F8", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg viewBox="0 0 20 20" width="20" height="20" fill="none" stroke="#32415C" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2.6" y="2.6" width="14.8" height="14.8" rx="2"></rect>
                      <line x1="6.5" y1="14" x2="6.5" y2="10.5"></line>
                      <line x1="10" y1="14" x2="10" y2="7.5"></line>
                      <line x1="13.5" y1="14" x2="13.5" y2="9"></line>
                    </svg>
                  </div>
                  <span className="hv48" style={{ color: "#C3CBD8", fontSize: "15px", fontWeight: "700" }}>→
                  </span>
                </div>
                <div style={{ fontSize: "14.5px", fontWeight: "800", color: "#1F2B4D", marginTop: "14px", lineHeight: "1.25" }}>Understand performance &amp; demand
                </div>
                <p style={{ fontSize: "12.5px", color: "#667085", lineHeight: "1.55", margin: "7px 0 0" }}>Use dashboards to analyse conversion, product interest, customer demand, team performance, stock opportunities and market trends.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div style={{ position: "relative", overflow: "hidden", background: "#fff", padding: "72px 24px" }}>
          <div style={{ position: "absolute", top: "-100px", left: "50%", transform: "translateX(-50%)", width: "520px", height: "320px", background: "radial-gradient(circle,rgba(44,140,153,.08),transparent 70%)" }}></div>
          <div style={{ position: "relative", maxWidth: "1000px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto" }}>
              <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "10.5px", letterSpacing: ".14em", color: "#2C8C99", textTransform: "uppercase" }}>Standalone or connected
              </div>
              <h2 style={{ fontSize: "27px", fontWeight: "800", lineHeight: "1.2", letterSpacing: "-.01em", margin: "12px 0 0", color: "#1F2B4D" }}>Use AXY as your platform — or connect it to the systems you already use.
              </h2>
              <p style={{ fontSize: "14px", color: "#667085", lineHeight: "1.6", margin: "13px 0 0" }}>AXY can run a smaller retailer as a complete platform, while larger companies connect existing ERP, CRM, e-commerce and product systems through APIs.
              </p>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "14px", flexWrap: "wrap", justifyContent: "center", marginTop: "34px" }}>
              <div style={{ flex: "1", minWidth: "220px", maxWidth: "280px" }}>
                <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "9px", letterSpacing: ".1em", color: "#8a93a6", textTransform: "uppercase", marginBottom: "10px" }}>Existing systems
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", background: "#fff", border: "1px solid #E1E5EC", borderRadius: "9px", padding: "9px 12px" }}>
                    <span style={{ width: "8px", height: "8px", borderRadius: "2px", background: "#9AA6BE" }}></span>
                    <span style={{ fontSize: "12.5px", fontWeight: "600", color: "#3a4358" }}>POS
                    </span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", background: "#fff", border: "1px solid #E1E5EC", borderRadius: "9px", padding: "9px 12px" }}>
                    <span style={{ width: "8px", height: "8px", borderRadius: "2px", background: "#9AA6BE" }}></span>
                    <span style={{ fontSize: "12.5px", fontWeight: "600", color: "#3a4358" }}>ERP
                    </span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", background: "#fff", border: "1px solid #E1E5EC", borderRadius: "9px", padding: "9px 12px" }}>
                    <span style={{ width: "8px", height: "8px", borderRadius: "2px", background: "#9AA6BE" }}></span>
                    <span style={{ fontSize: "12.5px", fontWeight: "600", color: "#3a4358" }}>CRM
                    </span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", background: "#fff", border: "1px solid #E1E5EC", borderRadius: "9px", padding: "9px 12px" }}>
                    <span style={{ width: "8px", height: "8px", borderRadius: "2px", background: "#9AA6BE" }}></span>
                    <span style={{ fontSize: "12.5px", fontWeight: "600", color: "#3a4358" }}>E-commerce
                    </span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", background: "#fff", border: "1px solid #E1E5EC", borderRadius: "9px", padding: "9px 12px" }}>
                    <span style={{ width: "8px", height: "8px", borderRadius: "2px", background: "#9AA6BE" }}></span>
                    <span style={{ fontSize: "12.5px", fontWeight: "600", color: "#3a4358" }}>Product data
                    </span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", background: "#fff", border: "1px solid #E1E5EC", borderRadius: "9px", padding: "9px 12px" }}>
                    <span style={{ width: "8px", height: "8px", borderRadius: "2px", background: "#9AA6BE" }}></span>
                    <span style={{ fontSize: "12.5px", fontWeight: "600", color: "#3a4358" }}>Inventory
                    </span>
                  </div>
                </div>
              </div>
              <div style={{ flexShrink: "0", color: "#2C8C99", fontSize: "20px", fontWeight: "700" }}>⇄
              </div>
              <div style={{ flex: "0 1 240px", minWidth: "200px" }}>
                <div style={{ background: "linear-gradient(160deg,#233150,#32415C)", border: "1px solid rgba(127,212,222,.35)", borderRadius: "16px", padding: "22px", textAlign: "center", boxShadow: "0 0 0 6px rgba(44,140,153,.1), 0 20px 44px rgba(31,43,77,.28)" }}>
                  <div style={{ fontSize: "20px", fontWeight: "900", color: "#fff", letterSpacing: ".04em" }}>AXY
                  </div>
                  <div style={{ fontSize: "11px", color: "#9fe6d4", marginTop: "4px" }}>shared retail layer
                  </div>
                  <div style={{ height: "1px", background: "rgba(255,255,255,.14)", margin: "13px 0" }}></div>
                  <div style={{ fontSize: "11px", color: "#C9D2E4", lineHeight: "1.5" }}>Adds the missing collaboration &amp; intelligence between your tools.
                  </div>
                </div>
              </div>
              <div style={{ flexShrink: "0", color: "#2C8C99", fontSize: "20px", fontWeight: "700" }}>⇄
              </div>
              <div style={{ flex: "1", minWidth: "220px", maxWidth: "280px" }}>
                <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "9px", letterSpacing: ".1em", color: "#8a93a6", textTransform: "uppercase", marginBottom: "10px" }}>Sales teams · customers · partners
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  <div style={{ background: "#EFF7F8", border: "1px solid #C9E2E6", borderRadius: "9px", padding: "10px 12px" }}>
                    <div style={{ fontSize: "12.5px", fontWeight: "800", color: "#1F2B4D" }}>Sales teams
                    </div>
                    <div style={{ fontSize: "11px", color: "#3a6a72", marginTop: "2px" }}>Sell with context
                    </div>
                  </div>
                  <div style={{ background: "#EFF7F8", border: "1px solid #C9E2E6", borderRadius: "9px", padding: "10px 12px" }}>
                    <div style={{ fontSize: "12.5px", fontWeight: "800", color: "#1F2B4D" }}>Customers
                    </div>
                    <div style={{ fontSize: "11px", color: "#3a6a72", marginTop: "2px" }}>Continue the journey
                    </div>
                  </div>
                  <div style={{ background: "#EFF7F8", border: "1px solid #C9E2E6", borderRadius: "9px", padding: "10px 12px" }}>
                    <div style={{ fontSize: "12.5px", fontWeight: "800", color: "#1F2B4D" }}>Partners
                    </div>
                    <div style={{ fontSize: "11px", color: "#3a6a72", marginTop: "2px" }}>Collaborate with control
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ textAlign: "center", marginTop: "34px" }}>
              <a className="hv49" href="/integrations" style={{ display: "inline-flex", padding: "13px 24px", background: "#32415C", color: "#fff", borderRadius: "10px", fontSize: "14px", fontWeight: "700" }}>Explore integrations
              </a>
            </div>
          </div>
        </div>
        <div style={{ background: "linear-gradient(135deg,#1F2B4D,#32415C 62%,#2C6570)", padding: "72px 24px" }}>
          <div style={{ maxWidth: "1080px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", maxWidth: "640px", margin: "0 auto" }}>
              <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "10.5px", letterSpacing: ".14em", color: "#7fd4de", textTransform: "uppercase" }}>Where to next
              </div>
              <h2 style={{ fontSize: "28px", fontWeight: "800", lineHeight: "1.18", letterSpacing: "-.01em", margin: "12px 0 0", color: "#fff" }}>Choose the path that fits you.
              </h2>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: "16px", marginTop: "32px" }}>
              <a className="hv50" href="/for-retailers" style={{ display: "flex", flexDirection: "column", background: "rgba(255,255,255,.06)", border: "1px solid rgba(255,255,255,.16)", borderRadius: "16px", padding: "24px", textDecoration: "none" }}>
                <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "9px", letterSpacing: ".14em", color: "#7fd4de" }}>PATH 1
                </div>
                <div style={{ fontSize: "18px", fontWeight: "800", color: "#fff", marginTop: "10px" }}>For retailers
                </div>
                <p style={{ fontSize: "13px", color: "#C2CBDF", lineHeight: "1.55", margin: "8px 0 0", flex: "1" }}>Connect sales, products, stock, customers and management.
                </p>
                <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", marginTop: "16px", fontSize: "13.5px", fontWeight: "700", color: "#7fd4de" }}>Explore AXY for retailers →
                </span>
              </a>{' '}
              <a className="hv51" href="/for-brands" style={{ display: "flex", flexDirection: "column", background: "rgba(255,255,255,.06)", border: "1px solid rgba(255,255,255,.16)", borderRadius: "16px", padding: "24px", textDecoration: "none" }}>
                <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "9px", letterSpacing: ".14em", color: "#7fd4de" }}>PATH 2
                </div>
                <div style={{ fontSize: "18px", fontWeight: "800", color: "#fff", marginTop: "10px" }}>For manufacturers &amp; brands
                </div>
                <p style={{ fontSize: "13px", color: "#C2CBDF", lineHeight: "1.55", margin: "8px 0 0", flex: "1" }}>Coordinate product information, retail partners, warranties and market insight.
                </p>
                <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", marginTop: "16px", fontSize: "13.5px", fontWeight: "700", color: "#7fd4de" }}>Explore AXY for brands →
                </span>
              </a>{' '}
              <a className="hv52" href="/sales-app" style={{ display: "flex", flexDirection: "column", background: "rgba(255,255,255,.06)", border: "1px solid rgba(255,255,255,.16)", borderRadius: "16px", padding: "24px", textDecoration: "none" }}>
                <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "9px", letterSpacing: ".14em", color: "#7fd4de" }}>PATH 3
                </div>
                <div style={{ fontSize: "18px", fontWeight: "800", color: "#fff", marginTop: "10px" }}>For sales teams
                </div>
                <p style={{ fontSize: "13px", color: "#C2CBDF", lineHeight: "1.55", margin: "8px 0 0", flex: "1" }}>Sell with better context, recommendations and follow-up.
                </p>
                <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", marginTop: "16px", fontSize: "13.5px", fontWeight: "700", color: "#7fd4de" }}>Explore the Sales App →
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
