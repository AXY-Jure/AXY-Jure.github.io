import React from 'react';
import { css } from '../lib/css.js';

export default function SalesApp(v) {
  return (
    <>
      <div data-screen-label="Sales App">
        <div style={{ position: "relative", overflow: "hidden", background: "#fff", padding: "74px 24px 60px" }}>
          <div style={{ position: "absolute", top: "-120px", right: "-80px", width: "460px", height: "360px", background: "radial-gradient(circle,rgba(44,140,153,.10),transparent 70%)" }}></div>
          <div style={{ position: "absolute", bottom: "-140px", left: "-90px", width: "420px", height: "320px", background: "radial-gradient(circle,rgba(31,43,77,.07),transparent 70%)" }}></div>
          <div style={{ position: "relative", maxWidth: "1120px", margin: "0 auto", display: "flex", gap: "48px", alignItems: "center", flexWrap: "wrap" }}>
            <div style={{ flex: "1.05", minWidth: "320px" }}>
              <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "10.5px", letterSpacing: ".14em", color: "#2C8C99", textTransform: "uppercase" }}>Sales App
              </div>
              <h1 style={{ fontSize: "40px", fontWeight: "800", color: "#1F2B4D", lineHeight: "1.1", letterSpacing: "-.018em", margin: "14px 0 0" }}>Your entire sales day, in your pocket.
              </h1>
              <p style={{ fontSize: "15.5px", color: "#667085", lineHeight: "1.6", margin: "16px 0 0", maxWidth: "520px" }}>See what needs attention, manage customer visits, explore products, request live availability and receive smart sales suggestions — all from one mobile workspace.
              </p>
              <div style={{ display: "flex", gap: "12px", marginTop: "26px", flexWrap: "wrap" }}>
                <a className="hv85" href="https://app.axy.net/onboarding" style={{ display: "inline-flex", padding: "13px 22px", background: "#32415C", color: "#fff", borderRadius: "10px", fontSize: "14px", fontWeight: "700" }}>Create free account
                </a>
                <a className="hv86" href="/for-retailers" style={{ display: "inline-flex", padding: "13px 22px", border: "1.5px solid #32415C", color: "#32415C", borderRadius: "10px", fontSize: "14px", fontWeight: "600" }}>Explore AXY for retailers
                </a>
              </div>
              <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginTop: "22px" }}>
                <span style={{ fontSize: "11.5px", color: "#1F2B4D", background: "#F1F4F8", border: "1px solid #E4E8EF", borderRadius: "8px", padding: "5px 11px" }}>Daily workspace
                </span>
                <span style={{ fontSize: "11.5px", color: "#1F2B4D", background: "#F1F4F8", border: "1px solid #E4E8EF", borderRadius: "8px", padding: "5px 11px" }}>Smart assistant
                </span>
                <span style={{ fontSize: "11.5px", color: "#1F2B4D", background: "#F1F4F8", border: "1px solid #E4E8EF", borderRadius: "8px", padding: "5px 11px" }}>Live selling tool
                </span>
                <span style={{ fontSize: "11.5px", color: "#1F2B4D", background: "#F1F4F8", border: "1px solid #E4E8EF", borderRadius: "8px", padding: "5px 11px" }}>Catalogue
                </span>
                <span style={{ fontSize: "11.5px", color: "#1F2B4D", background: "#F1F4F8", border: "1px solid #E4E8EF", borderRadius: "8px", padding: "5px 11px" }}>Availability
                </span>
                <span style={{ fontSize: "11.5px", color: "#1F2B4D", background: "#F1F4F8", border: "1px solid #E4E8EF", borderRadius: "8px", padding: "5px 11px" }}>Mobile analytics
                </span>
              </div>
            </div>
            <div style={{ flex: "1", minWidth: "320px" }}>
              <div style={{ position: "relative", borderRadius: "20px", overflow: "hidden", boxShadow: "0 30px 66px rgba(31,43,77,.24)", border: "1px solid #E4E8EF" }}>
                <img src="/images/sales-wide-home.jpg" alt="AXY Sales App home screen showing today's tasks, follow-ups due and customer opportunities on a mobile phone" style={{ display: "block", width: "100%", height: "auto" }} />
              </div>
            </div>
          </div>
        </div>
        <div style={{ background: "#F9FAFB", padding: "70px 24px" }}>
          <div style={{ maxWidth: "1120px", margin: "0 auto" }}>
            <div style={{ maxWidth: "680px" }}>
              <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "10.5px", letterSpacing: ".14em", color: "#2C8C99", textTransform: "uppercase" }}>Your day, organised
              </div>
              <h2 style={{ fontSize: "28px", fontWeight: "800", color: "#1F2B4D", lineHeight: "1.16", margin: "12px 0 0" }}>Everything that needs attention appears at the right moment.
              </h2>
              <p style={{ fontSize: "14.5px", color: "#667085", lineHeight: "1.6", margin: "13px 0 0" }}>Tasks, follow-ups, appointments, customer requests and open opportunities surface on the homepage automatically — when action is actually due.
              </p>
            </div>
            <div style={{ display: "flex", gap: "40px", alignItems: "center", flexWrap: "wrap", marginTop: "32px" }}>
              <div style={{ flex: "1", minWidth: "300px" }}>
                <div style={{ borderRadius: "20px", overflow: "hidden", boxShadow: "0 26px 56px rgba(31,43,77,.2)", border: "1px solid #E4E8EF" }}>
                  <img src="/images/sales-wide-home.jpg" alt="AXY Sales App daily workspace showing tasks due today, follow-up calls, quotations and product cards" style={{ display: "block", width: "100%", height: "auto" }} />
                </div>
              </div>
              <div style={{ flex: "1", minWidth: "300px" }}>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: "12px" }}>
                  <div style={{ display: "flex", alignItems: "flex-start", gap: "11px", background: "#fff", border: "1px solid #E4E8EF", borderRadius: "13px", padding: "14px" }}>
                    <div style={{ width: "34px", height: "34px", borderRadius: "9px", background: "#EFF7F8", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0" }}>
                      <svg viewBox="0 0 20 20" width="18" height="18" fill="none" stroke="#2C8C99" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="10" cy="10" r="7"></circle>
                        <polyline points="10,6 10,10 13,12"></polyline>
                      </svg>
                    </div>
                    <div>
                      <div style={{ fontSize: "13.5px", fontWeight: "700", color: "#1F2B4D" }}>Today’s tasks
                      </div>
                      <div style={{ fontSize: "11.5px", color: "#8a93a6", marginTop: "2px" }}>what to do first
                      </div>
                    </div>
                  </div>
                  <div style={{ display: "flex", alignItems: "flex-start", gap: "11px", background: "#fff", border: "1px solid #E4E8EF", borderRadius: "13px", padding: "14px" }}>
                    <div style={{ width: "34px", height: "34px", borderRadius: "9px", background: "#EFF7F8", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0" }}>
                      <svg viewBox="0 0 20 20" width="18" height="18" fill="none" stroke="#2C8C99" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 10a6 6 0 1 0 6-6"></path>
                        <polyline points="4,4 4,8 8,8"></polyline>
                      </svg>
                    </div>
                    <div>
                      <div style={{ fontSize: "13.5px", fontWeight: "700", color: "#1F2B4D" }}>Follow-ups due
                      </div>
                      <div style={{ fontSize: "11.5px", color: "#8a93a6", marginTop: "2px" }}>before they slip
                      </div>
                    </div>
                  </div>
                  <div style={{ display: "flex", alignItems: "flex-start", gap: "11px", background: "#fff", border: "1px solid #E4E8EF", borderRadius: "13px", padding: "14px" }}>
                    <div style={{ width: "34px", height: "34px", borderRadius: "9px", background: "#EFF7F8", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0" }}>
                      <svg viewBox="0 0 20 20" width="18" height="18" fill="none" stroke="#2C8C99" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3.5" y="4.5" width="13" height="12" rx="2"></rect>
                        <line x1="3.5" y1="8" x2="16.5" y2="8"></line>
                        <line x1="7" y1="2.5" x2="7" y2="5.5"></line>
                        <line x1="13" y1="2.5" x2="13" y2="5.5"></line>
                      </svg>
                    </div>
                    <div>
                      <div style={{ fontSize: "13.5px", fontWeight: "700", color: "#1F2B4D" }}>Upcoming appointments
                      </div>
                      <div style={{ fontSize: "11.5px", color: "#8a93a6", marginTop: "2px" }}>the day ahead
                      </div>
                    </div>
                  </div>
                  <div style={{ display: "flex", alignItems: "flex-start", gap: "11px", background: "#fff", border: "1px solid #E4E8EF", borderRadius: "13px", padding: "14px" }}>
                    <div style={{ width: "34px", height: "34px", borderRadius: "9px", background: "#EFF7F8", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0" }}>
                      <svg viewBox="0 0 20 20" width="18" height="18" fill="none" stroke="#2C8C99" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3.5 5.5h13v9H8l-3.5 3v-3H3.5z"></path>
                      </svg>
                    </div>
                    <div>
                      <div style={{ fontSize: "13.5px", fontWeight: "700", color: "#1F2B4D" }}>Customer inquiries
                      </div>
                      <div style={{ fontSize: "11.5px", color: "#8a93a6", marginTop: "2px" }}>waiting for you
                      </div>
                    </div>
                  </div>
                  <div style={{ display: "flex", alignItems: "flex-start", gap: "11px", background: "#fff", border: "1px solid #E4E8EF", borderRadius: "13px", padding: "14px" }}>
                    <div style={{ width: "34px", height: "34px", borderRadius: "9px", background: "#EFF7F8", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0" }}>
                      <svg viewBox="0 0 20 20" width="18" height="18" fill="none" stroke="#2C8C99" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3.5" y="4.5" width="13" height="11" rx="2"></rect>
                        <line x1="7" y1="9" x2="13" y2="9"></line>
                        <line x1="7" y1="12" x2="11" y2="12"></line>
                      </svg>
                    </div>
                    <div>
                      <div style={{ fontSize: "13.5px", fontWeight: "700", color: "#1F2B4D" }}>Open sales tickets
                      </div>
                      <div style={{ fontSize: "11.5px", color: "#8a93a6", marginTop: "2px" }}>in progress
                      </div>
                    </div>
                  </div>
                  <div style={{ display: "flex", alignItems: "flex-start", gap: "11px", background: "#fff", border: "1px solid #E4E8EF", borderRadius: "13px", padding: "14px" }}>
                    <div style={{ width: "34px", height: "34px", borderRadius: "9px", background: "#EFF7F8", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0" }}>
                      <svg viewBox="0 0 20 20" width="18" height="18" fill="none" stroke="#2C8C99" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3.5 6a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H7l-3.5 2.5z"></path>
                      </svg>
                    </div>
                    <div>
                      <div style={{ fontSize: "13.5px", fontWeight: "700", color: "#1F2B4D" }}>Messages to reply
                      </div>
                      <div style={{ fontSize: "11.5px", color: "#8a93a6", marginTop: "2px" }}>keep momentum
                      </div>
                    </div>
                  </div>
                  <div style={{ display: "flex", alignItems: "flex-start", gap: "11px", background: "#fff", border: "1px solid #E4E8EF", borderRadius: "13px", padding: "14px" }}>
                    <div style={{ width: "34px", height: "34px", borderRadius: "9px", background: "#EFF7F8", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0" }}>
                      <svg viewBox="0 0 20 20" width="18" height="18" fill="none" stroke="#2C8C99" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M6 3.5h6l3 3v10a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4.5a1 1 0 0 1 1-1z"></path>
                        <line x1="7.5" y1="10" x2="12.5" y2="10"></line>
                      </svg>
                    </div>
                    <div>
                      <div style={{ fontSize: "13.5px", fontWeight: "700", color: "#1F2B4D" }}>Offers needing attention
                      </div>
                      <div style={{ fontSize: "11.5px", color: "#8a93a6", marginTop: "2px" }}>close the loop
                      </div>
                    </div>
                  </div>
                  <div style={{ display: "flex", alignItems: "flex-start", gap: "11px", background: "#fff", border: "1px solid #E4E8EF", borderRadius: "13px", padding: "14px" }}>
                    <div style={{ width: "34px", height: "34px", borderRadius: "9px", background: "#EFF7F8", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0" }}>
                      <svg viewBox="0 0 20 20" width="18" height="18" fill="none" stroke="#2C8C99" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="10" cy="10" r="7"></circle>
                        <path d="M10 6.5v7M6.5 10h7"></path>
                      </svg>
                    </div>
                    <div>
                      <div style={{ fontSize: "13.5px", fontWeight: "700", color: "#1F2B4D" }}>Opportunities from Alfred
                      </div>
                      <div style={{ fontSize: "11.5px", color: "#8a93a6", marginTop: "2px" }}>suggested moves
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ background: "#1F2B4D", padding: "74px 24px" }}>
          <div style={{ maxWidth: "1120px", margin: "0 auto", display: "flex", gap: "48px", alignItems: "center", flexWrap: "wrap" }}>
            <div style={{ flex: "1.02", minWidth: "320px" }}>
              <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "10.5px", letterSpacing: ".14em", color: "#7fd4de", textTransform: "uppercase" }}>Smart sales assistance
              </div>
              <h2 style={{ fontSize: "28px", fontWeight: "800", color: "#fff", lineHeight: "1.16", margin: "12px 0 0" }}>Know who to contact, what to suggest and what to do next.
              </h2>
              <p style={{ fontSize: "14.5px", color: "#B9C2D8", lineHeight: "1.62", margin: "14px 0 0", maxWidth: "520px" }}>Alfred reviews customer activity and open opportunities, then suggests the actions most likely to move a sale forward. The salesperson stays fully in control.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "9px", marginTop: "20px" }}>
                <div style={{ display: "flex", gap: "10px", alignItems: "flex-start", fontSize: "13.5px", color: "#DDE4F0", lineHeight: "1.45" }}>
                  <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#33D6A4", marginTop: "6px", flexShrink: "0" }}></span>
                  <span>Follow up with a customer who viewed the same product twice
                  </span>
                </div>
                <div style={{ display: "flex", gap: "10px", alignItems: "flex-start", fontSize: "13.5px", color: "#DDE4F0", lineHeight: "1.45" }}>
                  <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#33D6A4", marginTop: "6px", flexShrink: "0" }}></span>
                  <span>Confirm availability for a saved item
                  </span>
                </div>
                <div style={{ display: "flex", gap: "10px", alignItems: "flex-start", fontSize: "13.5px", color: "#DDE4F0", lineHeight: "1.45" }}>
                  <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#33D6A4", marginTop: "6px", flexShrink: "0" }}></span>
                  <span>Contact a customer before an offer expires
                  </span>
                </div>
                <div style={{ display: "flex", gap: "10px", alignItems: "flex-start", fontSize: "13.5px", color: "#DDE4F0", lineHeight: "1.45" }}>
                  <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#33D6A4", marginTop: "6px", flexShrink: "0" }}></span>
                  <span>Suggest a relevant alternative
                  </span>
                </div>
                <div style={{ display: "flex", gap: "10px", alignItems: "flex-start", fontSize: "13.5px", color: "#DDE4F0", lineHeight: "1.45" }}>
                  <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#33D6A4", marginTop: "6px", flexShrink: "0" }}></span>
                  <span>Reconnect with a high-interest customer
                  </span>
                </div>
                <div style={{ display: "flex", gap: "10px", alignItems: "flex-start", fontSize: "13.5px", color: "#DDE4F0", lineHeight: "1.45" }}>
                  <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#33D6A4", marginTop: "6px", flexShrink: "0" }}></span>
                  <span>Present older stock that matches current demand
                  </span>
                </div>
              </div>
            </div>
            <div style={{ flex: "1", minWidth: "300px" }}>
              <div style={{ background: "#28345A", border: "1px solid rgba(255,255,255,.14)", borderRadius: "18px", padding: "20px", boxShadow: "0 26px 56px rgba(0,0,0,.32)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "9px" }}>
                  <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#33D6A4" }}></span>
                  <span style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "9.5px", letterSpacing: ".12em", color: "#9fe6d4", textTransform: "uppercase" }}>Opportunity detected
                  </span>
                </div>
                <div style={{ background: "#fff", borderRadius: "14px", padding: "16px", marginTop: "14px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <div style={{ width: "44px", height: "44px", borderRadius: "50%", background: "#EFF2F7", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "15px", fontWeight: "800", color: "#32415C", flexShrink: "0" }}>TR
                    </div>
                    <div>
                      <div style={{ fontSize: "14.5px", fontWeight: "800", color: "#1F2B4D" }}>Tanja viewed Ref. 2145-B twice
                      </div>
                      <div style={{ fontSize: "12.5px", color: "#667085", marginTop: "2px" }}>Suggested action: Confirm availability today.
                      </div>
                    </div>
                  </div>
                  <div style={{ display: "flex", gap: "8px", marginTop: "14px", flexWrap: "wrap" }}>
                    <span style={{ display: "inline-flex", padding: "9px 15px", background: "#32415C", color: "#fff", borderRadius: "9px", fontSize: "12.5px", fontWeight: "700" }}>Open opportunity
                    </span>
                    <span style={{ display: "inline-flex", padding: "9px 15px", background: "#fff", color: "#667085", border: "1px solid #E4E8EF", borderRadius: "9px", fontSize: "12.5px", fontWeight: "600" }}>Dismiss
                    </span>
                  </div>
                </div>
                <img src="/images/axy-recommendation-suggestions.png" alt="AXY Sales App suggestions panel with an upsell suggestion and a customer birthday suggestion" style={{ display: "block", width: "100%", height: "auto", marginTop: "14px", borderRadius: "12px", background: "#fff" }} />
              </div>
            </div>
          </div>
        </div>
        <div style={{ background: "#fff", padding: "74px 24px" }}>
          <div style={{ maxWidth: "1120px", margin: "0 auto" }}>
            <div style={{ maxWidth: "680px" }}>
              <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "10.5px", letterSpacing: ".14em", color: "#2C8C99", textTransform: "uppercase" }}>During the sale
              </div>
              <h2 style={{ fontSize: "28px", fontWeight: "800", color: "#1F2B4D", lineHeight: "1.16", margin: "12px 0 0" }}>Track the visit without stepping away from the customer.
              </h2>
              <p style={{ fontSize: "14.5px", color: "#667085", lineHeight: "1.6", margin: "13px 0 0" }}>Start the visit, recognise the customer, scan or select products and capture what generated interest — in a few quick taps, mid-conversation.
              </p>
            </div>
            <div style={{ position: "relative", marginTop: "34px", background: "#F9FAFB", border: "1px solid #E4E8EF", borderRadius: "20px", padding: "28px 22px" }}>
              <div style={{ display: "flex", gap: "0", flexWrap: "wrap", alignItems: "stretch" }}>
                <div style={{ flex: "1", minWidth: "150px", position: "relative", display: "flex", flexDirection: "column", padding: "0 12px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <span style={{ width: "26px", height: "26px", borderRadius: "50%", background: "#32415C", color: "#fff", fontFamily: "'Roboto Mono',monospace", fontSize: "9.5px", fontWeight: "700", display: "flex", alignItems: "center", justifyContent: "center" }}>01
                    </span>
                    <span style={{ flex: "1", height: "2px", background: "linear-gradient(90deg,#2C8C99,#C9D4EC)" }}></span>
                  </div>
                  <div style={{ fontSize: "14px", fontWeight: "800", color: "#1F2B4D", marginTop: "12px" }}>Start the visit
                  </div>
                  <div style={{ fontSize: "12px", color: "#667085", lineHeight: "1.5", marginTop: "5px" }}>One tap — store, time & salesperson attach
                  </div>
                </div>
                <div style={{ flex: "1", minWidth: "150px", position: "relative", display: "flex", flexDirection: "column", padding: "0 12px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <span style={{ width: "26px", height: "26px", borderRadius: "50%", background: "#32415C", color: "#fff", fontFamily: "'Roboto Mono',monospace", fontSize: "9.5px", fontWeight: "700", display: "flex", alignItems: "center", justifyContent: "center" }}>02
                    </span>
                    <span style={{ flex: "1", height: "2px", background: "linear-gradient(90deg,#2C8C99,#C9D4EC)" }}></span>
                  </div>
                  <div style={{ fontSize: "14px", fontWeight: "800", color: "#1F2B4D", marginTop: "12px" }}>Open customer context
                  </div>
                  <div style={{ fontSize: "12px", color: "#667085", lineHeight: "1.5", marginTop: "5px" }}>Recognise the customer or create a profile
                  </div>
                </div>
                <div style={{ flex: "1", minWidth: "150px", position: "relative", display: "flex", flexDirection: "column", padding: "0 12px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <span style={{ width: "26px", height: "26px", borderRadius: "50%", background: "#32415C", color: "#fff", fontFamily: "'Roboto Mono',monospace", fontSize: "9.5px", fontWeight: "700", display: "flex", alignItems: "center", justifyContent: "center" }}>03
                    </span>
                    <span style={{ flex: "1", height: "2px", background: "linear-gradient(90deg,#2C8C99,#C9D4EC)" }}></span>
                  </div>
                  <div style={{ fontSize: "14px", fontWeight: "800", color: "#1F2B4D", marginTop: "12px" }}>Scan or select products
                  </div>
                  <div style={{ fontSize: "12px", color: "#667085", lineHeight: "1.5", marginTop: "5px" }}>The product card drops into the visit
                  </div>
                </div>
                <div style={{ flex: "1", minWidth: "150px", position: "relative", display: "flex", flexDirection: "column", padding: "0 12px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <span style={{ width: "26px", height: "26px", borderRadius: "50%", background: "#32415C", color: "#fff", fontFamily: "'Roboto Mono',monospace", fontSize: "9.5px", fontWeight: "700", display: "flex", alignItems: "center", justifyContent: "center" }}>04
                    </span>
                    <span style={{ flex: "1", height: "2px", background: "linear-gradient(90deg,#2C8C99,#C9D4EC)" }}></span>
                  </div>
                  <div style={{ fontSize: "14px", fontWeight: "800", color: "#1F2B4D", marginTop: "12px" }}>Capture interest
                  </div>
                  <div style={{ fontSize: "12px", color: "#667085", lineHeight: "1.5", marginTop: "5px" }}>Shown · liked · rejected · wishlisted
                  </div>
                </div>
                <div style={{ flex: "1", minWidth: "150px", position: "relative", display: "flex", flexDirection: "column", padding: "0 12px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <span style={{ width: "26px", height: "26px", borderRadius: "50%", background: "#32415C", color: "#fff", fontFamily: "'Roboto Mono',monospace", fontSize: "9.5px", fontWeight: "700", display: "flex", alignItems: "center", justifyContent: "center" }}>05
                    </span>
                    <span style={{ flex: "1", height: "2px", background: "linear-gradient(90deg,#2C8C99,#C9D4EC)" }}></span>
                  </div>
                  <div style={{ fontSize: "14px", fontWeight: "800", color: "#1F2B4D", marginTop: "12px" }}>Get a suggestion
                  </div>
                  <div style={{ fontSize: "12px", color: "#667085", lineHeight: "1.5", marginTop: "5px" }}>A relevant alternative or upsell appears
                  </div>
                </div>
                <div style={{ flex: "1", minWidth: "150px", position: "relative", display: "flex", flexDirection: "column", padding: "0 12px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <span style={{ width: "26px", height: "26px", borderRadius: "50%", background: "#32415C", color: "#fff", fontFamily: "'Roboto Mono',monospace", fontSize: "9.5px", fontWeight: "700", display: "flex", alignItems: "center", justifyContent: "center" }}>06
                    </span>
                  </div>
                  <div style={{ fontSize: "14px", fontWeight: "800", color: "#1F2B4D", marginTop: "12px" }}>Create the next action
                  </div>
                  <div style={{ fontSize: "12px", color: "#667085", lineHeight: "1.5", marginTop: "5px" }}>Follow-up scheduled before they leave
                  </div>
                </div>
              </div>
              <div style={{ display: "flex", gap: "16px", alignItems: "center", flexWrap: "wrap", marginTop: "26px", paddingTop: "22px", borderTop: "1px solid #E7EAF0" }}>
                <img src="/images/axy-recommendation-suggestions.png" alt="AXY Sales App suggestion appears during a customer visit" style={{ width: "300px", maxWidth: "100%", height: "auto", borderRadius: "12px", border: "1px solid #E4E8EF", background: "#fff" }} />{' '}
                <img src="/images/axy-followup-task.png" alt="AXY Sales App follow-up task created and linked to the customer and products shown" style={{ width: "300px", maxWidth: "100%", height: "auto", borderRadius: "12px", border: "1px solid #E4E8EF", background: "#fff" }} />
                <div style={{ flex: "1", minWidth: "200px", fontSize: "12.5px", color: "#667085", lineHeight: "1.55" }}>One continuous visit — the suggestion and the follow-up you see here are the same flow, captured without leaving the conversation.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ background: "#F9FAFB", padding: "74px 24px" }}>
          <div style={{ maxWidth: "1120px", margin: "0 auto", display: "flex", gap: "48px", alignItems: "center", flexWrap: "wrap" }}>
            <div style={{ flex: "1", minWidth: "300px", order: "2" }}>
              <div style={{ maxWidth: "520px", margin: "0 auto" }}>
                <div style={{ background: "#0F1830", borderRadius: "26px", padding: "12px", boxShadow: "0 26px 56px rgba(31,43,77,.22)", maxWidth: "300px", margin: "0 auto" }}>
                  <div style={{ background: "#F7F8FA", borderRadius: "18px", overflow: "hidden" }}>
                    <div style={{ background: "#1F2B4D", padding: "12px 14px" }}>
                      <div style={{ fontSize: "12px", fontWeight: "800", color: "#fff" }}>Catalogue
                      </div>
                      <div style={{ display: "flex", alignItems: "center", gap: "6px", background: "rgba(255,255,255,.12)", borderRadius: "8px", padding: "7px 10px", marginTop: "9px" }}>
                        <span style={{ width: "12px", height: "12px", border: "1.6px solid #9fb2d6", borderRadius: "50%", display: "inline-block" }}></span>
                        <span style={{ fontSize: "9px", color: "#9fb2d6" }}>Search brand, category, reference…
                        </span>
                      </div>
                    </div>
                    <div style={{ display: "flex", gap: "6px", padding: "10px 12px", flexWrap: "wrap" }}>
                      <span style={{ fontSize: "8.5px", fontWeight: "700", color: "#32415C", background: "#fff", border: "1px solid #D9E0EC", borderRadius: "20px", padding: "4px 10px" }}>Brand
                      </span>
                      <span style={{ fontSize: "8.5px", fontWeight: "700", color: "#32415C", background: "#fff", border: "1px solid #D9E0EC", borderRadius: "20px", padding: "4px 10px" }}>Category
                      </span>
                      <span style={{ fontSize: "8.5px", fontWeight: "700", color: "#32415C", background: "#fff", border: "1px solid #D9E0EC", borderRadius: "20px", padding: "4px 10px" }}>Ref
                      </span>
                      <span style={{ fontSize: "8.5px", fontWeight: "700", color: "#32415C", background: "#fff", border: "1px solid #D9E0EC", borderRadius: "20px", padding: "4px 10px" }}>In stock
                      </span>
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px", padding: "2px 12px 14px" }}>
                      <div style={{ background: "#fff", border: "1px solid #EAEDF2", borderRadius: "10px", padding: "8px", display: "flex", flexDirection: "column", gap: "6px" }}>
                        <div style={{ height: "48px", borderRadius: "7px", background: "linear-gradient(160deg,#EEF2F7,#E1E8F1)" }}></div>
                        <div style={{ fontSize: "9px", fontWeight: "800", color: "#1F2B4D", lineHeight: "1.2" }}>Meridian Steel
                        </div>
                        <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "7.5px", color: "#8a93a6" }}>TR2145-B
                        </div>
                        <span style={{ display: "inline-flex", alignItems: "center", gap: "5px", fontSize: "8.5px", fontWeight: "700", color: "#3a4358" }}>
                          <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#33D6A4" }}></span>In stock · here
                        </span>
                      </div>
                      <div style={{ background: "#fff", border: "1px solid #EAEDF2", borderRadius: "10px", padding: "8px", display: "flex", flexDirection: "column", gap: "6px" }}>
                        <div style={{ height: "48px", borderRadius: "7px", background: "linear-gradient(160deg,#EEF2F7,#E1E8F1)" }}></div>
                        <div style={{ fontSize: "9px", fontWeight: "800", color: "#1F2B4D", lineHeight: "1.2" }}>Aurora Rose
                        </div>
                        <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "7.5px", color: "#8a93a6" }}>JW771-C
                        </div>
                        <span style={{ display: "inline-flex", alignItems: "center", gap: "5px", fontSize: "8.5px", fontWeight: "700", color: "#3a4358" }}>
                          <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#E8A13A" }}></span>1 left
                        </span>
                      </div>
                      <div style={{ background: "#fff", border: "1px solid #EAEDF2", borderRadius: "10px", padding: "8px", display: "flex", flexDirection: "column", gap: "6px" }}>
                        <div style={{ height: "48px", borderRadius: "7px", background: "linear-gradient(160deg,#EEF2F7,#E1E8F1)" }}></div>
                        <div style={{ fontSize: "9px", fontWeight: "800", color: "#1F2B4D", lineHeight: "1.2" }}>Chrono 84
                        </div>
                        <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "7.5px", color: "#8a93a6" }}>AC2310
                        </div>
                        <span style={{ display: "inline-flex", alignItems: "center", gap: "5px", fontSize: "8.5px", fontWeight: "700", color: "#3a4358" }}>
                          <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#8a93a6" }}></span>Other store
                        </span>
                      </div>
                      <div style={{ background: "#fff", border: "1px solid #EAEDF2", borderRadius: "10px", padding: "8px", display: "flex", flexDirection: "column", gap: "6px" }}>
                        <div style={{ height: "48px", borderRadius: "7px", background: "linear-gradient(160deg,#EEF2F7,#E1E8F1)" }}></div>
                        <div style={{ fontSize: "9px", fontWeight: "800", color: "#1F2B4D", lineHeight: "1.2" }}>Braid Ring
                        </div>
                        <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "7.5px", color: "#8a93a6" }}>TR958-K1
                        </div>
                        <span style={{ display: "inline-flex", alignItems: "center", gap: "5px", fontSize: "8.5px", fontWeight: "700", color: "#3a4358" }}>
                          <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#33D6A4" }}></span>In stock · here
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ flex: "1", minWidth: "300px", order: "1" }}>
              <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "10.5px", letterSpacing: ".14em", color: "#2C8C99", textTransform: "uppercase" }}>The complete sales catalogue
              </div>
              <h2 style={{ fontSize: "28px", fontWeight: "800", color: "#1F2B4D", lineHeight: "1.16", margin: "12px 0 0" }}>Every product your team can sell, always to hand.
              </h2>
              <p style={{ fontSize: "14.5px", color: "#667085", lineHeight: "1.6", margin: "13px 0 0", maxWidth: "500px" }}>Browse the full store catalogue, check local and cross-store stock, compare products and add items straight to the active visit.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "9px", marginTop: "18px" }}>
                <div style={{ display: "flex", gap: "10px", alignItems: "flex-start", fontSize: "13.5px", color: "#3a4358", lineHeight: "1.45" }}>
                  <span style={{ color: "#2C8C99", fontWeight: "800", marginTop: "1px" }}>✓
                  </span>
                  <span>Search by brand, category, reference & attributes
                  </span>
                </div>
                <div style={{ display: "flex", gap: "10px", alignItems: "flex-start", fontSize: "13.5px", color: "#3a4358", lineHeight: "1.45" }}>
                  <span style={{ color: "#2C8C99", fontWeight: "800", marginTop: "1px" }}>✓
                  </span>
                  <span>Stock here and at other locations
                  </span>
                </div>
                <div style={{ display: "flex", gap: "10px", alignItems: "flex-start", fontSize: "13.5px", color: "#3a4358", lineHeight: "1.45" }}>
                  <span style={{ color: "#2C8C99", fontWeight: "800", marginTop: "1px" }}>✓
                  </span>
                  <span>Compare products, specs and images
                  </span>
                </div>
                <div style={{ display: "flex", gap: "10px", alignItems: "flex-start", fontSize: "13.5px", color: "#3a4358", lineHeight: "1.45" }}>
                  <span style={{ color: "#2C8C99", fontWeight: "800", marginTop: "1px" }}>✓
                  </span>
                  <span>Share with the customer or add to the visit
                  </span>
                </div>
                <div style={{ display: "flex", gap: "10px", alignItems: "flex-start", fontSize: "13.5px", color: "#3a4358", lineHeight: "1.45" }}>
                  <span style={{ color: "#2C8C99", fontWeight: "800", marginTop: "1px" }}>✓
                  </span>
                  <span>See relevant alternatives
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ position: "relative", overflow: "hidden", background: "linear-gradient(135deg,#1F2B4D,#32415C 58%,#2C6570)", padding: "78px 24px" }}>
          <div style={{ position: "absolute", top: "-100px", right: "-60px", width: "420px", height: "340px", background: "radial-gradient(circle,rgba(51,214,164,.12),transparent 70%)" }}></div>
          <div style={{ position: "relative", maxWidth: "1120px", margin: "0 auto" }}>
            <div style={{ maxWidth: "700px" }}>
              <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "10.5px", letterSpacing: ".14em", color: "#7fd4de", textTransform: "uppercase" }}>Real-time availability
              </div>
              <h2 style={{ fontSize: "29px", fontWeight: "800", color: "#fff", lineHeight: "1.14", margin: "12px 0 0" }}>Give the customer an answer before they leave.
              </h2>
              <p style={{ fontSize: "15px", color: "#C9D2E4", lineHeight: "1.6", margin: "14px 0 0", maxWidth: "560px" }}>When a product isn’t in stock locally, request availability from a connected manufacturer and keep the sale moving — while the customer is still in front of you.
              </p>
            </div>
            <div style={{ display: "flex", gap: "40px", alignItems: "center", flexWrap: "wrap", marginTop: "34px" }}>
              <div style={{ flex: "1.1", minWidth: "300px" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                    <span style={{ width: "30px", height: "30px", borderRadius: "50%", background: "rgba(255,255,255,.12)", color: "#fff", border: "1px solid rgba(255,255,255,.22)", fontFamily: "'Roboto Mono',monospace", fontSize: "10px", fontWeight: "700", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0" }}>1
                    </span>
                    <span style={{ fontSize: "14.5px", fontWeight: "700", color: "#fff" }}>Product unavailable locally
                    </span>
                    <span style={{ flex: "1" }}></span>
                  </div>
                  <div style={{ width: "2px", height: "10px", background: "rgba(255,255,255,.2)", marginLeft: "14px" }}></div>
                  <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                    <span style={{ width: "30px", height: "30px", borderRadius: "50%", background: "rgba(255,255,255,.12)", color: "#fff", border: "1px solid rgba(255,255,255,.22)", fontFamily: "'Roboto Mono',monospace", fontSize: "10px", fontWeight: "700", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0" }}>2
                    </span>
                    <span style={{ fontSize: "14.5px", fontWeight: "700", color: "#fff" }}>Request availability
                    </span>
                    <span style={{ flex: "1" }}></span>
                  </div>
                  <div style={{ width: "2px", height: "10px", background: "rgba(255,255,255,.2)", marginLeft: "14px" }}></div>
                  <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                    <span style={{ width: "30px", height: "30px", borderRadius: "50%", background: "rgba(255,255,255,.12)", color: "#fff", border: "1px solid rgba(255,255,255,.22)", fontFamily: "'Roboto Mono',monospace", fontSize: "10px", fontWeight: "700", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0" }}>3
                    </span>
                    <span style={{ fontSize: "14.5px", fontWeight: "700", color: "#fff" }}>Manufacturer response
                    </span>
                    <span style={{ flex: "1" }}></span>
                  </div>
                  <div style={{ width: "2px", height: "10px", background: "rgba(255,255,255,.2)", marginLeft: "14px" }}></div>
                  <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                    <span style={{ width: "30px", height: "30px", borderRadius: "50%", background: "rgba(255,255,255,.12)", color: "#fff", border: "1px solid rgba(255,255,255,.22)", fontFamily: "'Roboto Mono',monospace", fontSize: "10px", fontWeight: "700", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0" }}>4
                    </span>
                    <span style={{ fontSize: "14.5px", fontWeight: "700", color: "#fff" }}>Delivery estimate
                    </span>
                    <span style={{ flex: "1" }}></span>
                  </div>
                  <div style={{ width: "2px", height: "10px", background: "rgba(255,255,255,.2)", marginLeft: "14px" }}></div>
                  <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                    <span style={{ width: "30px", height: "30px", borderRadius: "50%", background: "#33D6A4", color: "#0F3D38", border: "1px solid rgba(255,255,255,.22)", fontFamily: "'Roboto Mono',monospace", fontSize: "10px", fontWeight: "700", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0" }}>5
                    </span>
                    <span style={{ fontSize: "14.5px", fontWeight: "700", color: "#fff" }}>Reserve or order
                    </span>
                  </div>
                </div>
              </div>
              <div style={{ flex: "1", minWidth: "300px" }}>
                <div style={{ background: "#0F1830", borderRadius: "26px", padding: "12px", boxShadow: "0 30px 66px rgba(0,0,0,.4)", maxWidth: "300px", margin: "0 auto" }}>
                  <div style={{ background: "#F7F8FA", borderRadius: "18px", overflow: "hidden" }}>
                    <div style={{ background: "#1F2B4D", padding: "12px 14px", display: "flex", alignItems: "center", gap: "8px" }}>
                      <span style={{ fontSize: "11.5px", fontWeight: "800", color: "#fff" }}>Availability
                      </span>
                    </div>
                    <div style={{ padding: "14px" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "10px", background: "#fff", border: "1px solid #EAEDF2", borderRadius: "10px", padding: "10px" }}>
                        <div style={{ width: "40px", height: "40px", borderRadius: "8px", background: "linear-gradient(160deg,#EEF2F7,#E1E8F1)" }}></div>
                        <div>
                          <div style={{ fontSize: "11px", fontWeight: "800", color: "#1F2B4D" }}>Meridian Steel
                          </div>
                          <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "8px", color: "#8a93a6" }}>TR2145-B
                          </div>
                        </div>
                      </div>
                      <div style={{ display: "flex", alignItems: "center", gap: "6px", marginTop: "10px", fontSize: "9.5px", fontWeight: "700", color: "#8a2f25", background: "#F6DDDA", borderRadius: "8px", padding: "7px 10px" }}>
                        <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#C0392B" }}></span>Not available in this store
                      </div>
                      <div style={{ background: "#EAF7F4", border: "1px solid #BBE7DA", borderRadius: "10px", padding: "11px", marginTop: "10px" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                          <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#33D6A4" }}></span>
                          <span style={{ fontSize: "10px", fontWeight: "800", color: "#0F3D38" }}>Manufacturer response
                          </span>
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-between", marginTop: "8px", fontSize: "9.5px", color: "#3a4358" }}>
                          <span>Available ·{' '}
                            <strong>3
                            </strong>
                          </span>
                          <span>Est.{' '}
                            <strong>5–7 days
                            </strong>
                          </span>
                        </div>
                      </div>
                      <div style={{ display: "flex", gap: "7px", marginTop: "12px" }}>
                        <span style={{ flex: "1", textAlign: "center", fontSize: "10px", fontWeight: "700", color: "#fff", background: "#32415C", borderRadius: "8px", padding: "9px" }}>Reserve
                        </span>
                        <span style={{ flex: "1", textAlign: "center", fontSize: "10px", fontWeight: "700", color: "#2C8C99", background: "#fff", border: "1px solid #C9E2E6", borderRadius: "8px", padding: "9px" }}>Order
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ background: "#fff", padding: "74px 24px" }}>
          <div style={{ maxWidth: "1120px", margin: "0 auto", display: "flex", gap: "48px", alignItems: "center", flexWrap: "wrap" }}>
            <div style={{ flex: "1", minWidth: "300px" }}>
              <div style={{ borderRadius: "20px", overflow: "hidden", boxShadow: "0 26px 56px rgba(31,43,77,.2)", border: "1px solid #E4E8EF" }}>
                <img src="/images/sales-wide-customer.jpg" alt="AXY Sales App customer overview showing profile, revenue, opportunities and purchase history for one client" style={{ display: "block", width: "100%", height: "auto" }} />
              </div>
            </div>
            <div style={{ flex: "1", minWidth: "300px" }}>
              <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "10.5px", letterSpacing: ".14em", color: "#2C8C99", textTransform: "uppercase" }}>Know the customer
              </div>
              <h2 style={{ fontSize: "28px", fontWeight: "800", color: "#1F2B4D", lineHeight: "1.16", margin: "12px 0 0" }}>The full customer relationship in one view.
              </h2>
              <p style={{ fontSize: "14.5px", color: "#667085", lineHeight: "1.6", margin: "13px 0 0", maxWidth: "500px" }}>Before and during the conversation, see everything needed to give relevant service and continue existing opportunities.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "18px" }}>
                <span style={{ fontSize: "11.5px", color: "#1F2B4D", background: "#F1F4F8", border: "1px solid #E4E8EF", borderRadius: "8px", padding: "5px 11px" }}>Profile & consent
                </span>
                <span style={{ fontSize: "11.5px", color: "#1F2B4D", background: "#F1F4F8", border: "1px solid #E4E8EF", borderRadius: "8px", padding: "5px 11px" }}>Purchase history
                </span>
                <span style={{ fontSize: "11.5px", color: "#1F2B4D", background: "#F1F4F8", border: "1px solid #E4E8EF", borderRadius: "8px", padding: "5px 11px" }}>Previous visits
                </span>
                <span style={{ fontSize: "11.5px", color: "#1F2B4D", background: "#F1F4F8", border: "1px solid #E4E8EF", borderRadius: "8px", padding: "5px 11px" }}>Products viewed
                </span>
                <span style={{ fontSize: "11.5px", color: "#1F2B4D", background: "#F1F4F8", border: "1px solid #E4E8EF", borderRadius: "8px", padding: "5px 11px" }}>Wishlists
                </span>
                <span style={{ fontSize: "11.5px", color: "#1F2B4D", background: "#F1F4F8", border: "1px solid #E4E8EF", borderRadius: "8px", padding: "5px 11px" }}>Open tickets
                </span>
                <span style={{ fontSize: "11.5px", color: "#1F2B4D", background: "#F1F4F8", border: "1px solid #E4E8EF", borderRadius: "8px", padding: "5px 11px" }}>Active offers
                </span>
                <span style={{ fontSize: "11.5px", color: "#1F2B4D", background: "#F1F4F8", border: "1px solid #E4E8EF", borderRadius: "8px", padding: "5px 11px" }}>Appointments
                </span>
                <span style={{ fontSize: "11.5px", color: "#1F2B4D", background: "#F1F4F8", border: "1px solid #E4E8EF", borderRadius: "8px", padding: "5px 11px" }}>Warranty status
                </span>
                <span style={{ fontSize: "11.5px", color: "#1F2B4D", background: "#F1F4F8", border: "1px solid #E4E8EF", borderRadius: "8px", padding: "5px 11px" }}>Service status
                </span>
                <span style={{ fontSize: "11.5px", color: "#1F2B4D", background: "#F1F4F8", border: "1px solid #E4E8EF", borderRadius: "8px", padding: "5px 11px" }}>Recent messages
                </span>
                <span style={{ fontSize: "11.5px", color: "#1F2B4D", background: "#F1F4F8", border: "1px solid #E4E8EF", borderRadius: "8px", padding: "5px 11px" }}>Follow-up history
                </span>
              </div>
            </div>
          </div>
        </div>
        <div style={{ background: "#F9FAFB", padding: "74px 24px" }}>
          <div style={{ maxWidth: "1120px", margin: "0 auto" }}>
            <div style={{ maxWidth: "680px" }}>
              <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "10.5px", letterSpacing: ".14em", color: "#2C8C99", textTransform: "uppercase" }}>Move the sale forward
              </div>
              <h2 style={{ fontSize: "28px", fontWeight: "800", color: "#1F2B4D", lineHeight: "1.16", margin: "12px 0 0" }}>Turn customer interest into the next commercial action.
              </h2>
              <p style={{ fontSize: "14.5px", color: "#667085", lineHeight: "1.6", margin: "13px 0 0" }}>Create and manage everything needed to complete the sale — without switching systems.
              </p>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "16px", flexWrap: "wrap", marginTop: "30px", background: "#fff", border: "1px solid #E4E8EF", borderRadius: "16px", padding: "22px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", flexShrink: "0" }}>
                <span style={{ width: "40px", height: "40px", borderRadius: "10px", background: "#EFF7F8", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg viewBox="0 0 20 20" width="18" height="18" fill="none" stroke="#2C8C99" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="10" cy="10" r="7"></circle>
                    <path d="M7 10.5l2 2 4-4"></path>
                  </svg>
                </span>
                <span style={{ fontSize: "14px", fontWeight: "800", color: "#1F2B4D" }}>Interest captured
                </span>
              </div>
              <span style={{ fontSize: "22px", color: "#2C8C99", fontWeight: "700" }}>→
              </span>
              <div style={{ flex: "1", minWidth: "220px", display: "flex", flexWrap: "wrap", gap: "8px" }}>
                <span style={{ fontSize: "11.5px", color: "#1F2B4D", background: "#F1F4F8", border: "1px solid #E4E8EF", borderRadius: "8px", padding: "5px 11px" }}>Follow-ups
                </span>
                <span style={{ fontSize: "11.5px", color: "#1F2B4D", background: "#F1F4F8", border: "1px solid #E4E8EF", borderRadius: "8px", padding: "5px 11px" }}>Tasks
                </span>
                <span style={{ fontSize: "11.5px", color: "#1F2B4D", background: "#F1F4F8", border: "1px solid #E4E8EF", borderRadius: "8px", padding: "5px 11px" }}>Inquiries
                </span>
                <span style={{ fontSize: "11.5px", color: "#1F2B4D", background: "#F1F4F8", border: "1px solid #E4E8EF", borderRadius: "8px", padding: "5px 11px" }}>Reservations
                </span>
                <span style={{ fontSize: "11.5px", color: "#1F2B4D", background: "#F1F4F8", border: "1px solid #E4E8EF", borderRadius: "8px", padding: "5px 11px" }}>Offers
                </span>
                <span style={{ fontSize: "11.5px", color: "#1F2B4D", background: "#F1F4F8", border: "1px solid #E4E8EF", borderRadius: "8px", padding: "5px 11px" }}>Invoices
                </span>
                <span style={{ fontSize: "11.5px", color: "#1F2B4D", background: "#F1F4F8", border: "1px solid #E4E8EF", borderRadius: "8px", padding: "5px 11px" }}>Appointments
                </span>
                <span style={{ fontSize: "11.5px", color: "#1F2B4D", background: "#F1F4F8", border: "1px solid #E4E8EF", borderRadius: "8px", padding: "5px 11px" }}>Messages
                </span>
                <span style={{ fontSize: "11.5px", color: "#1F2B4D", background: "#F1F4F8", border: "1px solid #E4E8EF", borderRadius: "8px", padding: "5px 11px" }}>Availability requests
                </span>
                <span style={{ fontSize: "11.5px", color: "#1F2B4D", background: "#F1F4F8", border: "1px solid #E4E8EF", borderRadius: "8px", padding: "5px 11px" }}>Assign to colleagues
                </span>
              </div>
              <span style={{ fontSize: "22px", color: "#2C8C99", fontWeight: "700" }}>→
              </span>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", flexShrink: "0" }}>
                <span style={{ width: "40px", height: "40px", borderRadius: "10px", background: "#E7F7F0", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg viewBox="0 0 20 20" width="18" height="18" fill="none" stroke="#0F9D6C" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 14l4 4 10-12"></path>
                  </svg>
                </span>
                <span style={{ fontSize: "14px", fontWeight: "800", color: "#1F2B4D" }}>Sale progressed
                </span>
              </div>
            </div>
          </div>
        </div>
        <div style={{ background: "#fff", padding: "74px 24px" }}>
          <div style={{ maxWidth: "1120px", margin: "0 auto" }}>
            <div style={{ maxWidth: "680px" }}>
              <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "10.5px", letterSpacing: ".14em", color: "#2C8C99", textTransform: "uppercase" }}>More than sales visits
              </div>
              <h2 style={{ fontSize: "28px", fontWeight: "800", color: "#1F2B4D", lineHeight: "1.16", margin: "12px 0 0" }}>The operational tools your team needs are already inside.
              </h2>
            </div>
            <div className="sa-tools" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "14px", marginTop: "30px" }}>
              <div className="hv87" style={{ background: "#F9FAFB", border: "1px solid #E4E8EF", borderRadius: "14px", padding: "18px" }}>
                <div style={{ width: "38px", height: "38px", borderRadius: "10px", background: "#EFF7F8", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg viewBox="0 0 20 20" width="18" height="18" fill="none" stroke="#2C8C99" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M10 2.6l5.5 2.2v4c0 3.5-2.3 6.4-5.5 7.6C6.8 15.2 4.5 12.3 4.5 8.8v-4z"></path>
                    <polyline points="7.4,9.6 9.2,11.4 12.6,7.6"></polyline>
                  </svg>
                </div>
                <div style={{ fontSize: "14px", fontWeight: "800", color: "#1F2B4D", marginTop: "12px" }}>Warranty activation
                </div>
                <p style={{ fontSize: "12.5px", color: "#667085", lineHeight: "1.55", margin: "6px 0 0" }}>Activate warranties and link the product, customer and documents.
                </p>
              </div>
              <div className="hv88" style={{ background: "#F9FAFB", border: "1px solid #E4E8EF", borderRadius: "14px", padding: "18px" }}>
                <div style={{ width: "38px", height: "38px", borderRadius: "10px", background: "#EFF7F8", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg viewBox="0 0 20 20" width="18" height="18" fill="none" stroke="#2C8C99" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M10 2.6l5.5 2.2v4c0 3.5-2.3 6.4-5.5 7.6C6.8 15.2 4.5 12.3 4.5 8.8v-4z"></path>
                    <path d="M10 7v4M8 9h4"></path>
                  </svg>
                </div>
                <div style={{ fontSize: "14px", fontWeight: "800", color: "#1F2B4D", marginTop: "12px" }}>Warranty extensions
                </div>
                <p style={{ fontSize: "12.5px", color: "#667085", lineHeight: "1.55", margin: "6px 0 0" }}>Manage extension requests and keep after-sales actions connected.
                </p>
              </div>
              <div className="hv89" style={{ background: "#F9FAFB", border: "1px solid #E4E8EF", borderRadius: "14px", padding: "18px" }}>
                <div style={{ width: "38px", height: "38px", borderRadius: "10px", background: "#EFF7F8", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg viewBox="0 0 20 20" width="18" height="18" fill="none" stroke="#2C8C99" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 7h9l-2-2M17 13H8l2 2"></path>
                  </svg>
                </div>
                <div style={{ fontSize: "14px", fontWeight: "800", color: "#1F2B4D", marginTop: "12px" }}>Transfers
                </div>
                <p style={{ fontSize: "12.5px", color: "#667085", lineHeight: "1.55", margin: "6px 0 0" }}>Initiate and track product transfers between stores or locations.
                </p>
              </div>
              <div className="hv90" style={{ background: "#F9FAFB", border: "1px solid #E4E8EF", borderRadius: "14px", padding: "18px" }}>
                <div style={{ width: "38px", height: "38px", borderRadius: "10px", background: "#EFF7F8", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg viewBox="0 0 20 20" width="18" height="18" fill="none" stroke="#2C8C99" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3.5 6a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H7l-3.5 2.5z"></path>
                  </svg>
                </div>
                <div style={{ fontSize: "14px", fontWeight: "800", color: "#1F2B4D", marginTop: "12px" }}>Customer messaging
                </div>
                <p style={{ fontSize: "12.5px", color: "#667085", lineHeight: "1.55", margin: "6px 0 0" }}>Continue conversations, linked to the customer and opportunity.
                </p>
              </div>
              <div className="hv91" style={{ background: "#F9FAFB", border: "1px solid #E4E8EF", borderRadius: "14px", padding: "18px" }}>
                <div style={{ width: "38px", height: "38px", borderRadius: "10px", background: "#EFF7F8", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg viewBox="0 0 20 20" width="18" height="18" fill="none" stroke="#2C8C99" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3.5" y="3.5" width="13" height="13" rx="2"></rect>
                    <line x1="10" y1="7" x2="10" y2="13"></line>
                    <line x1="7" y1="10" x2="13" y2="10"></line>
                  </svg>
                </div>
                <div style={{ fontSize: "14px", fontWeight: "800", color: "#1F2B4D", marginTop: "12px" }}>Quick product creation
                </div>
                <p style={{ fontSize: "12.5px", color: "#667085", lineHeight: "1.55", margin: "6px 0 0" }}>Create small product records straight from the phone.
                </p>
              </div>
              <div className="hv92" style={{ background: "#F9FAFB", border: "1px solid #E4E8EF", borderRadius: "14px", padding: "18px" }}>
                <div style={{ width: "38px", height: "38px", borderRadius: "10px", background: "#EFF7F8", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg viewBox="0 0 20 20" width="18" height="18" fill="none" stroke="#2C8C99" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4.5" width="14" height="11" rx="2"></rect>
                    <circle cx="8" cy="9.5" r="1.6"></circle>
                    <path d="M4 14l3.5-3 2.5 2 3-3 4 4"></path>
                  </svg>
                </div>
                <div style={{ fontSize: "14px", fontWeight: "800", color: "#1F2B4D", marginTop: "12px" }}>AI-assisted imagery
                </div>
                <p style={{ fontSize: "12.5px", color: "#667085", lineHeight: "1.55", margin: "6px 0 0" }}>Generate clean product imagery or improve simple photos.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div style={{ background: "#1F2B4D", padding: "74px 24px" }}>
          <div style={{ maxWidth: "1120px", margin: "0 auto", display: "flex", gap: "48px", alignItems: "center", flexWrap: "wrap" }}>
            <div style={{ flex: "1", minWidth: "300px" }}>
              <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "10.5px", letterSpacing: ".14em", color: "#7fd4de", textTransform: "uppercase" }}>Performance in your pocket
              </div>
              <h2 style={{ fontSize: "28px", fontWeight: "800", color: "#fff", lineHeight: "1.16", margin: "12px 0 0" }}>Understand today’s performance with one tap.
              </h2>
              <p style={{ fontSize: "14.5px", color: "#B9C2D8", lineHeight: "1.62", margin: "14px 0 0", maxWidth: "500px" }}>Salespeople, managers and owners open a concise daily overview across their work, store, locations and brands — a briefing, not a dense dashboard.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "18px" }}>
                <span style={{ fontSize: "11.5px", color: "#DDE4F0", background: "rgba(255,255,255,.08)", border: "1px solid rgba(255,255,255,.16)", borderRadius: "8px", padding: "5px 11px" }}>Sales
                </span>
                <span style={{ fontSize: "11.5px", color: "#DDE4F0", background: "rgba(255,255,255,.08)", border: "1px solid rgba(255,255,255,.16)", borderRadius: "8px", padding: "5px 11px" }}>Visits
                </span>
                <span style={{ fontSize: "11.5px", color: "#DDE4F0", background: "rgba(255,255,255,.08)", border: "1px solid rgba(255,255,255,.16)", borderRadius: "8px", padding: "5px 11px" }}>Conversion
                </span>
                <span style={{ fontSize: "11.5px", color: "#DDE4F0", background: "rgba(255,255,255,.08)", border: "1px solid rgba(255,255,255,.16)", borderRadius: "8px", padding: "5px 11px" }}>Opportunities
                </span>
                <span style={{ fontSize: "11.5px", color: "#DDE4F0", background: "rgba(255,255,255,.08)", border: "1px solid rgba(255,255,255,.16)", borderRadius: "8px", padding: "5px 11px" }}>Follow-up discipline
                </span>
                <span style={{ fontSize: "11.5px", color: "#DDE4F0", background: "rgba(255,255,255,.08)", border: "1px solid rgba(255,255,255,.16)", borderRadius: "8px", padding: "5px 11px" }}>Product interest
                </span>
                <span style={{ fontSize: "11.5px", color: "#DDE4F0", background: "rgba(255,255,255,.08)", border: "1px solid rgba(255,255,255,.16)", borderRadius: "8px", padding: "5px 11px" }}>Top products
                </span>
                <span style={{ fontSize: "11.5px", color: "#DDE4F0", background: "rgba(255,255,255,.08)", border: "1px solid rgba(255,255,255,.16)", borderRadius: "8px", padding: "5px 11px" }}>Store comparison
                </span>
                <span style={{ fontSize: "11.5px", color: "#DDE4F0", background: "rgba(255,255,255,.08)", border: "1px solid rgba(255,255,255,.16)", borderRadius: "8px", padding: "5px 11px" }}>Team & individual
                </span>
              </div>
            </div>
            <div style={{ flex: "1", minWidth: "300px" }}>
              <div style={{ background: "#0F1830", borderRadius: "26px", padding: "12px", boxShadow: "0 30px 66px rgba(0,0,0,.42)", maxWidth: "320px", margin: "0 auto" }}>
                <div style={{ background: "#16223f", borderRadius: "18px", overflow: "hidden", padding: "16px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ fontSize: "12.5px", fontWeight: "800", color: "#fff" }}>Today
                    </span>
                    <span style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "8.5px", color: "#7fd4de" }}>LIVE
                    </span>
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "9px", marginTop: "12px" }}>
                    <div style={{ background: "rgba(255,255,255,.06)", border: "1px solid rgba(255,255,255,.14)", borderRadius: "12px", padding: "14px" }}>
                      <div style={{ fontSize: "22px", fontWeight: "800", color: "#fff" }}>€ 41.2k
                      </div>
                      <div style={{ fontSize: "11px", color: "#9fb0cf", marginTop: "2px" }}>Sales today
                      </div>
                      <div style={{ fontSize: "9.5px", color: "#7fd4de", marginTop: "4px" }}>+12% vs avg
                      </div>
                    </div>
                    <div style={{ background: "rgba(255,255,255,.06)", border: "1px solid rgba(255,255,255,.14)", borderRadius: "12px", padding: "14px" }}>
                      <div style={{ fontSize: "22px", fontWeight: "800", color: "#fff" }}>14
                      </div>
                      <div style={{ fontSize: "11px", color: "#9fb0cf", marginTop: "2px" }}>Visits
                      </div>
                      <div style={{ fontSize: "9.5px", color: "#7fd4de", marginTop: "4px" }}>6 converting
                      </div>
                    </div>
                    <div style={{ background: "rgba(255,255,255,.06)", border: "1px solid rgba(255,255,255,.14)", borderRadius: "12px", padding: "14px" }}>
                      <div style={{ fontSize: "22px", fontWeight: "800", color: "#fff" }}>29%
                      </div>
                      <div style={{ fontSize: "11px", color: "#9fb0cf", marginTop: "2px" }}>Conversion
                      </div>
                      <div style={{ fontSize: "9.5px", color: "#7fd4de", marginTop: "4px" }}>4 of 14
                      </div>
                    </div>
                    <div style={{ background: "rgba(255,255,255,.06)", border: "1px solid rgba(255,255,255,.14)", borderRadius: "12px", padding: "14px" }}>
                      <div style={{ fontSize: "22px", fontWeight: "800", color: "#fff" }}>8
                      </div>
                      <div style={{ fontSize: "11px", color: "#9fb0cf", marginTop: "2px" }}>Open opps
                      </div>
                      <div style={{ fontSize: "9.5px", color: "#7fd4de", marginTop: "4px" }}>3 due today
                      </div>
                    </div>
                  </div>
                  <div style={{ background: "rgba(255,255,255,.06)", border: "1px solid rgba(255,255,255,.14)", borderRadius: "12px", padding: "12px", marginTop: "9px" }}>
                    <div style={{ fontSize: "10px", color: "#9fb0cf", marginBottom: "8px" }}>Top products
                    </div>
                    <div style={{ display: "flex", alignItems: "flex-end", gap: "6px", height: "44px" }}>
                      <div style={{ flex: "1", height: "70%", borderRadius: "3px 3px 0 0", background: "linear-gradient(180deg,#33D6A4,#2C8C99)" }}></div>
                      <div style={{ flex: "1", height: "52%", borderRadius: "3px 3px 0 0", background: "linear-gradient(180deg,#33D6A4,#2C8C99)" }}></div>
                      <div style={{ flex: "1", height: "40%", borderRadius: "3px 3px 0 0", background: "linear-gradient(180deg,#33D6A4,#2C8C99)" }}></div>
                      <div style={{ flex: "1", height: "30%", borderRadius: "3px 3px 0 0", background: "linear-gradient(180deg,#33D6A4,#2C8C99)" }}></div>
                      <div style={{ flex: "1", height: "22%", borderRadius: "3px 3px 0 0", background: "linear-gradient(180deg,#33D6A4,#2C8C99)" }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ background: "#F9FAFB", padding: "74px 24px" }}>
          <div style={{ maxWidth: "1120px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", maxWidth: "680px", margin: "0 auto" }}>
              <h2 style={{ fontSize: "28px", fontWeight: "800", color: "#1F2B4D", lineHeight: "1.16" }}>Less to remember. More opportunities moved forward.
              </h2>
            </div>
            <div className="sa-outcomes" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "14px", marginTop: "32px" }}>
              <div style={{ background: "#fff", border: "1px solid #E4E8EF", borderRadius: "14px", padding: "20px" }}>
                <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "10px", color: "#2C8C99" }}>01
                </div>
                <div style={{ fontSize: "14.5px", fontWeight: "800", color: "#1F2B4D", marginTop: "8px", lineHeight: "1.25" }}>A clear plan for every day
                </div>
                <p style={{ fontSize: "12.5px", color: "#667085", lineHeight: "1.55", margin: "7px 0 0" }}>The homepage tells the salesperson where to start.
                </p>
              </div>
              <div style={{ background: "#fff", border: "1px solid #E4E8EF", borderRadius: "14px", padding: "20px" }}>
                <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "10px", color: "#2C8C99" }}>02
                </div>
                <div style={{ fontSize: "14.5px", fontWeight: "800", color: "#1F2B4D", marginTop: "8px", lineHeight: "1.25" }}>Better context during every visit
                </div>
                <p style={{ fontSize: "12.5px", color: "#667085", lineHeight: "1.55", margin: "7px 0 0" }}>The whole customer relationship, one tap away.
                </p>
              </div>
              <div style={{ background: "#fff", border: "1px solid #E4E8EF", borderRadius: "14px", padding: "20px" }}>
                <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "10px", color: "#2C8C99" }}>03
                </div>
                <div style={{ fontSize: "14.5px", fontWeight: "800", color: "#1F2B4D", marginTop: "8px", lineHeight: "1.25" }}>Faster answers in store
                </div>
                <p style={{ fontSize: "12.5px", color: "#667085", lineHeight: "1.55", margin: "7px 0 0" }}>Live availability while the customer is still there.
                </p>
              </div>
              <div style={{ background: "#fff", border: "1px solid #E4E8EF", borderRadius: "14px", padding: "20px" }}>
                <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "10px", color: "#2C8C99" }}>04
                </div>
                <div style={{ fontSize: "14.5px", fontWeight: "800", color: "#1F2B4D", marginTop: "8px", lineHeight: "1.25" }}>Daily performance, always on
                </div>
                <p style={{ fontSize: "12.5px", color: "#667085", lineHeight: "1.55", margin: "7px 0 0" }}>A briefing in the pocket for every role.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div style={{ background: "#fff", padding: "66px 24px" }}>
          <div style={{ maxWidth: "760px", margin: "0 auto" }}>
            <div style={{ textAlign: "center" }}>
              <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "10.5px", letterSpacing: ".14em", color: "#2C8C99", textTransform: "uppercase" }}>Questions
              </div>
              <h2 style={{ fontSize: "24px", fontWeight: "800", color: "#1F2B4D", margin: "10px 0 0" }}>Sales App, briefly answered
              </h2>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "9px", marginTop: "24px" }}>
              <details style={{ background: "#F9FAFB", border: "1px solid #E4E8EF", borderRadius: "12px", padding: "15px 18px" }}>
                <summary style={{ fontSize: "14px", fontWeight: "700", color: "#1F2B4D", display: "flex", justifyContent: "space-between", gap: "12px", cursor: "pointer" }}>Does the Sales App work on any phone?
                  <span style={{ color: "#2C8C99" }}>+
                  </span>
                </summary>
                <p style={{ fontSize: "13.5px", color: "#667085", lineHeight: "1.6", margin: "10px 0 0" }}>It runs on standard iOS and Android devices your team already carries — no special hardware.
                </p>
              </details>
              <details style={{ background: "#F9FAFB", border: "1px solid #E4E8EF", borderRadius: "12px", padding: "15px 18px" }}>
                <summary style={{ fontSize: "14px", fontWeight: "700", color: "#1F2B4D", display: "flex", justifyContent: "space-between", gap: "12px", cursor: "pointer" }}>Is it only for tracking visits?
                  <span style={{ color: "#2C8C99" }}>+
                  </span>
                </summary>
                <p style={{ fontSize: "13.5px", color: "#667085", lineHeight: "1.6", margin: "10px 0 0" }}>No. It’s the daily workspace, catalogue, availability tool, customer overview and mobile analytics — visit capture is one part.
                </p>
              </details>
              <details style={{ background: "#F9FAFB", border: "1px solid #E4E8EF", borderRadius: "12px", padding: "15px 18px" }}>
                <summary style={{ fontSize: "14px", fontWeight: "700", color: "#1F2B4D", display: "flex", justifyContent: "space-between", gap: "12px", cursor: "pointer" }}>Does the salesperson stay in control of Alfred?
                  <span style={{ color: "#2C8C99" }}>+
                  </span>
                </summary>
                <p style={{ fontSize: "13.5px", color: "#667085", lineHeight: "1.6", margin: "10px 0 0" }}>Yes. Alfred only suggests. Every follow-up, message and action is reviewed and approved by the person.
                </p>
              </details>
            </div>
          </div>
        </div>
        <div style={{ position: "relative", overflow: "hidden", background: "linear-gradient(135deg,#1F2B4D,#32415C 58%,#2C6570)", padding: "76px 24px" }}>
          <div style={{ position: "absolute", bottom: "-120px", right: "-60px", width: "420px", height: "320px", background: "radial-gradient(circle,rgba(51,214,164,.12),transparent 70%)" }}></div>
          <div style={{ position: "relative", maxWidth: "760px", margin: "0 auto", textAlign: "center" }}>
            <h2 style={{ fontSize: "30px", fontWeight: "800", color: "#fff", lineHeight: "1.14" }}>Give your team a smarter way to sell.
            </h2>
            <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap", marginTop: "24px" }}>
              <a className="hv93" href="https://app.axy.net/onboarding" style={{ display: "inline-flex", padding: "14px 24px", background: "#fff", color: "#1F2B4D", borderRadius: "10px", fontSize: "14.5px", fontWeight: "700" }}>Create free account
              </a>
              <a className="hv94" href="/pricing" style={{ display: "inline-flex", padding: "14px 24px", border: "1.5px solid rgba(255,255,255,.5)", color: "#fff", borderRadius: "10px", fontSize: "14.5px", fontWeight: "600" }}>See pricing
              </a>
            </div>
            <div style={{ marginTop: "16px" }}>
              <a href="/for-retailers" style={{ fontSize: "13.5px", fontWeight: "700", color: "#7fd4de" }}>Explore AXY for retailers →
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
