import React from 'react';
import { css } from '../lib/css.js';

export default function ForBrands(v) {
  return (
    <>
      <div data-screen-label="For Manufacturers &amp; Brands">
        <div style={{ position: "relative", overflow: "hidden", background: "linear-gradient(135deg,#1F2B4D,#28344f 55%,#2C6570)", padding: "74px 24px 66px" }}>
          <div style={{ position: "absolute", top: "-90px", right: "-60px", width: "460px", height: "340px", background: "radial-gradient(circle,rgba(51,214,164,.18),transparent 70%)" }}></div>
          <div style={{ position: "relative", maxWidth: "1120px", margin: "0 auto", display: "flex", gap: "48px", alignItems: "center", flexWrap: "wrap" }}>
            <div style={{ flex: "1.05", minWidth: "320px" }}>
              <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "10.5px", letterSpacing: ".14em", color: "#33D6A4", textTransform: "uppercase" }}>For brands &amp; manufacturers
              </div>
              <h1 style={{ fontSize: "39px", fontWeight: "800", color: "#fff", lineHeight: "1.11", letterSpacing: "-.018em", margin: "14px 0 0" }}>See what your retail network is asking for.
              </h1>
              <p style={{ fontSize: "14.5px", color: "#C9D2E4", lineHeight: "1.6", margin: "13px 0 0", maxWidth: "620px" }}>AXY helps brands distribute product information, coordinate availability and orders, manage warranty workflows and understand approved market demand across connected retail partners.
              </p>
              <div style={{ display: "flex", gap: "12px", marginTop: "24px", flexWrap: "wrap" }}>
                <a className="hv75" href="/book-a-walkthrough" style={{ display: "inline-flex", padding: "13px 22px", background: "#fff", color: "#1F2B4D", borderRadius: "10px", fontSize: "14px", fontWeight: "700" }}>Book a network assessment
                </a>{' '}
                <a className="hv76" href="/book-a-walkthrough" style={{ display: "inline-flex", padding: "13px 22px", border: "1.5px solid rgba(255,255,255,.5)", color: "#fff", borderRadius: "10px", fontSize: "14px", fontWeight: "600" }}>Get guided setup
                </a>
              </div>
              <div style={{ marginTop: "16px" }}>
                <a href="/integrations" style={{ fontSize: "13.5px", fontWeight: "700", color: "#7fd4de" }}>Explore AXY integrations →
                </a>
              </div>
              <div style={{ display: "flex", gap: "8px", alignItems: "flex-start", marginTop: "18px", background: "rgba(255,255,255,.05)", border: "1px solid rgba(255,255,255,.14)", borderRadius: "10px", padding: "11px 14px", maxWidth: "480px" }}>
                <span style={{ color: "#7fd4de", flexShrink: "0" }}>🛡
                </span>
                <span style={{ fontSize: "12px", color: "#B9C2D8", lineHeight: "1.5" }}>Retailers remain in control of their customers, commercial information and partner permissions.
                </span>
              </div>
            </div>
            <div style={{ flex: "1", minWidth: "320px" }}>
              <div style={{ position: "relative", background: "rgba(255,255,255,.04)", border: "1px solid rgba(255,255,255,.14)", borderRadius: "18px", padding: "20px", boxShadow: "0 24px 54px rgba(0,0,0,.3)" }}>
                <div style={{ position: "relative", height: "270px" }}>
                  <div style={{ position: "absolute", left: "50%", top: "38%", transform: "translate(-50%,-50%)", width: "104px", height: "66px", background: "#fff", borderRadius: "12px", boxShadow: "0 0 0 6px rgba(127,212,222,.18)", zIndex: "4", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                    <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "7px", letterSpacing: ".06em", color: "#2C8C99" }}>BRAND
                    </div>
                    <div style={{ fontSize: "9px", fontWeight: "800", color: "#1F2B4D", marginTop: "2px" }}>Catalogue
                    </div>
                    <div style={{ fontSize: "7px", color: "#8a94a6", marginTop: "1px" }}>124 products
                    </div>
                  </div>
                  <div style={{ position: "absolute", left: "8%", top: "8%", width: "74px", height: "48px", background: "rgba(255,255,255,.1)", border: "1px solid rgba(255,255,255,.24)", borderRadius: "10px", zIndex: "3" }}>
                    <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "6px", color: "#9fb0cc", textAlign: "center", marginTop: "8px" }}>RETAILER 1
                    </div>
                    <div style={{ fontSize: "8px", fontWeight: "700", color: "#fff", textAlign: "center", marginTop: "2px" }}>Accepted
                    </div>
                  </div>
                  <div style={{ position: "absolute", left: "70%", top: "6%", width: "74px", height: "48px", background: "rgba(255,255,255,.1)", border: "1px solid rgba(255,255,255,.24)", borderRadius: "10px", zIndex: "3" }}>
                    <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "6px", color: "#9fb0cc", textAlign: "center", marginTop: "8px" }}>RETAILER 2
                    </div>
                    <div style={{ fontSize: "8px", fontWeight: "700", color: "#fff", textAlign: "center", marginTop: "2px" }}>Reviewing
                    </div>
                  </div>
                  <div style={{ position: "absolute", left: "4%", top: "60%", width: "74px", height: "48px", background: "rgba(255,255,255,.1)", border: "1px solid rgba(255,255,255,.24)", borderRadius: "10px", zIndex: "3" }}>
                    <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "6px", color: "#9fb0cc", textAlign: "center", marginTop: "8px" }}>RETAILER 3
                    </div>
                    <div style={{ fontSize: "8px", fontWeight: "700", color: "#fff", textAlign: "center", marginTop: "2px" }}>Accepted
                    </div>
                  </div>
                  <div style={{ position: "absolute", left: "74%", top: "62%", width: "74px", height: "48px", background: "rgba(255,255,255,.1)", border: "1px solid rgba(255,255,255,.24)", borderRadius: "10px", zIndex: "3" }}>
                    <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "6px", color: "#9fb0cc", textAlign: "center", marginTop: "8px" }}>RETAILER 4
                    </div>
                    <div style={{ fontSize: "8px", fontWeight: "700", color: "#fff", textAlign: "center", marginTop: "2px" }}>Update sent
                    </div>
                  </div>
                  <svg viewBox="0 0 100 100" preserveAspectRatio="none" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", zIndex: "2" }}>
                    <line x1="22" y1="20" x2="50" y2="38" stroke="#33D6A4" strokeWidth="0.6"></line>
                    <line x1="78" y1="18" x2="52" y2="36" stroke="rgba(255,255,255,.2)" strokeWidth="0.6" strokeDasharray="2 2"></line>
                    <line x1="16" y1="68" x2="48" y2="44" stroke="#33D6A4" strokeWidth="0.6"></line>
                    <line x1="80" y1="70" x2="54" y2="44" stroke="#7fd4de" strokeWidth="0.6"></line>
                  </svg>
                  <div style={{ position: "absolute", left: "50%", bottom: "0", transform: "translateX(-50%)", background: "linear-gradient(135deg,#26324f,#161f38)", border: "1px solid rgba(255,255,255,.16)", borderRadius: "10px", padding: "8px 12px", zIndex: "5" }}>
                    <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "6.5px", letterSpacing: ".06em", color: "#7fd4de" }}>AGGREGATED INSIGHT
                    </div>
                    <div style={{ fontSize: "9px", fontWeight: "700", color: "#fff", marginTop: "2px" }}>Demand ↑ · 2 markets
                    </div>
                  </div>
                </div>
                <div style={{ display: "flex", gap: "6px", justifyContent: "center", marginTop: "8px", flexWrap: "wrap" }}>
                  <span style={{ fontSize: "9.5px", color: "#DDE4F0", background: "rgba(51,214,164,.14)", border: "1px solid rgba(51,214,164,.3)", borderRadius: "20px", padding: "4px 10px" }}>— approved workflow
                  </span>{' '}
                  <span style={{ fontSize: "9.5px", color: "#9fb0cc", background: "rgba(255,255,255,.05)", border: "1px solid rgba(255,255,255,.16)", borderRadius: "20px", padding: "4px 10px" }}>- - private / not shared
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ background: "#fff", padding: "74px 24px" }}>
          <div style={{ maxWidth: "1120px", margin: "0 auto" }}>
            <div style={{ maxWidth: "740px" }}>
              <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "10.5px", letterSpacing: ".14em", color: "#2C8C99", textTransform: "uppercase" }}>Beyond sell-in
              </div>
              <h2 style={{ fontSize: "28px", fontWeight: "800", color: "#1F2B4D", lineHeight: "1.16", letterSpacing: "-.01em", margin: "12px 0 0" }}>Brands can see what they shipped. AXY helps reveal what happened next.
              </h2>
              <p style={{ fontSize: "14.5px", color: "#667085", lineHeight: "1.6", margin: "13px 0 0", maxWidth: "620px" }}>Between a wholesale order and the final sale, valuable product signals often remain inside stores, employee conversations and disconnected retailer systems.
              </p>
            </div>
            <div style={{ display: "flex", gap: "16px", marginTop: "30px", flexWrap: "wrap" }}>
              <div style={{ flex: "1", minWidth: "280px", background: "#F9FAFB", border: "1px solid #E4EAF1", borderRadius: "16px", padding: "20px" }}>
                <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "8.5px", letterSpacing: ".08em", color: "#9aa3b2" }}>TRADITIONAL
                </div>
                <div className="br-flow" style={{ display: "flex", gap: "8px", alignItems: "center", flexWrap: "wrap", marginTop: "16px" }}>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
                    <span style={{ fontSize: "12px", fontWeight: "700", color: "#1F2B4D", background: "#fff", border: "1px solid #E4EAF1", borderRadius: "9px", padding: "7px 12px" }}>Sell-in
                    </span>
                    <span className="br-flow-arrow" style={{ color: "#B7C2D6", fontSize: "13px" }}>→
                    </span>
                  </span>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
                    <span style={{ fontSize: "12px", fontWeight: "700", color: "#1F2B4D", background: "#fff", border: "1px solid #E4EAF1", borderRadius: "9px", padding: "7px 12px" }}>Retail network
                    </span>
                    <span className="br-flow-arrow" style={{ color: "#B7C2D6", fontSize: "13px" }}>→
                    </span>
                  </span>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
                    <span style={{ fontSize: "12px", fontWeight: "700", color: "#1F2B4D", background: "#fff", border: "1px solid #E4EAF1", borderRadius: "9px", padding: "7px 12px" }}>Limited visibility
                    </span>
                    <span className="br-flow-arrow" style={{ color: "#B7C2D6", fontSize: "13px" }}>→
                    </span>
                  </span>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
                    <span style={{ fontSize: "12px", fontWeight: "700", color: "#1F2B4D", background: "#fff", border: "1px solid #E4EAF1", borderRadius: "9px", padding: "7px 12px" }}>Sell-through report
                    </span>
                  </span>
                </div>
              </div>
              <div style={{ flex: "1.2", minWidth: "280px", background: "#F3F8F8", border: "1px solid #CDE7E6", borderRadius: "16px", padding: "20px" }}>
                <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "8.5px", letterSpacing: ".08em", color: "#2C8C99" }}>WITH AXY CONTEXT
                </div>
                <div className="br-flow" style={{ display: "flex", gap: "8px", alignItems: "center", flexWrap: "wrap", marginTop: "16px" }}>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
                    <span style={{ fontSize: "12px", fontWeight: "700", color: "#1F2B4D", background: "#fff", border: "1px solid #E4EAF1", borderRadius: "9px", padding: "7px 12px" }}>Distributed
                    </span>
                    <span className="br-flow-arrow" style={{ color: "#B7C2D6", fontSize: "13px" }}>→
                    </span>
                  </span>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
                    <span style={{ fontSize: "12px", fontWeight: "700", color: "#1F2B4D", background: "#fff", border: "1px solid #E4EAF1", borderRadius: "9px", padding: "7px 12px" }}>Presented
                    </span>
                    <span className="br-flow-arrow" style={{ color: "#B7C2D6", fontSize: "13px" }}>→
                    </span>
                  </span>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
                    <span style={{ fontSize: "12px", fontWeight: "700", color: "#1F2B4D", background: "#fff", border: "1px solid #E4EAF1", borderRadius: "9px", padding: "7px 12px" }}>Compared
                    </span>
                    <span className="br-flow-arrow" style={{ color: "#B7C2D6", fontSize: "13px" }}>→
                    </span>
                  </span>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
                    <span style={{ fontSize: "12px", fontWeight: "700", color: "#1F2B4D", background: "#fff", border: "1px solid #E4EAF1", borderRadius: "9px", padding: "7px 12px" }}>Wishlisted
                    </span>
                    <span className="br-flow-arrow" style={{ color: "#B7C2D6", fontSize: "13px" }}>→
                    </span>
                  </span>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
                    <span style={{ fontSize: "12px", fontWeight: "700", color: "#1F2B4D", background: "#fff", border: "1px solid #E4EAF1", borderRadius: "9px", padding: "7px 12px" }}>Availability requested
                    </span>
                    <span className="br-flow-arrow" style={{ color: "#B7C2D6", fontSize: "13px" }}>→
                    </span>
                  </span>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
                    <span style={{ fontSize: "12px", fontWeight: "700", color: "#1F2B4D", background: "#fff", border: "1px solid #E4EAF1", borderRadius: "9px", padding: "7px 12px" }}>Purchased / not converted
                    </span>
                  </span>
                </div>
              </div>
            </div>
            <div style={{ marginTop: "26px" }}>
              <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "9.5px", letterSpacing: ".08em", color: "#9aa3b2", marginBottom: "12px" }}>THE MISSING SIGNALS
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "7px" }}>
                <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "12px", color: "#3a4358", background: "#F4F6FA", border: "1px solid #E4EAF1", borderRadius: "8px", padding: "6px 11px" }}>
                  <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#2C8C99" }}></span>Products shown to customers
                </span>
                <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "12px", color: "#3a4358", background: "#F4F6FA", border: "1px solid #E4EAF1", borderRadius: "8px", padding: "6px 11px" }}>
                  <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#2C8C99" }}></span>Products repeatedly compared
                </span>
                <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "12px", color: "#3a4358", background: "#F4F6FA", border: "1px solid #E4EAF1", borderRadius: "8px", padding: "6px 11px" }}>
                  <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#2C8C99" }}></span>Products liked or rejected
                </span>
                <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "12px", color: "#3a4358", background: "#F4F6FA", border: "1px solid #E4EAF1", borderRadius: "8px", padding: "6px 11px" }}>
                  <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#2C8C99" }}></span>Wishlist activity
                </span>
                <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "12px", color: "#3a4358", background: "#F4F6FA", border: "1px solid #E4EAF1", borderRadius: "8px", padding: "6px 11px" }}>
                  <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#2C8C99" }}></span>Inquiries
                </span>
                <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "12px", color: "#3a4358", background: "#F4F6FA", border: "1px solid #E4EAF1", borderRadius: "8px", padding: "6px 11px" }}>
                  <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#2C8C99" }}></span>Availability requests
                </span>
                <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "12px", color: "#3a4358", background: "#F4F6FA", border: "1px solid #E4EAF1", borderRadius: "8px", padding: "6px 11px" }}>
                  <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#2C8C99" }}></span>Requested but unavailable
                </span>
                <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "12px", color: "#3a4358", background: "#F4F6FA", border: "1px solid #E4EAF1", borderRadius: "8px", padding: "6px 11px" }}>
                  <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#2C8C99" }}></span>Interest not yet an order
                </span>
                <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "12px", color: "#3a4358", background: "#F4F6FA", border: "1px solid #E4EAF1", borderRadius: "8px", padding: "6px 11px" }}>
                  <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#2C8C99" }}></span>Warranty & after-sales
                </span>
              </div>
            </div>
            <div style={{ display: "flex", gap: "10px", alignItems: "flex-start", marginTop: "18px", background: "#F8FAFC", border: "1px solid #D9E0EC", borderLeft: "3px solid #2C8C99", borderRadius: "0 12px 12px 0", padding: "13px 16px" }}>
              <span style={{ fontSize: "13px", color: "#1F2B4D", lineHeight: "1.5", fontWeight: "600" }}>Understand demand before it becomes another wholesale order.
              </span>
            </div>
          </div>
        </div>
        <div style={{ background: "#F9FAFB", padding: "74px 24px" }}>
          <div style={{ maxWidth: "1120px", margin: "0 auto" }}>
            <div style={{ maxWidth: "740px" }}>
              <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "10.5px", letterSpacing: ".14em", color: "#2C8C99", textTransform: "uppercase" }}>One connected network, five outcomes
              </div>
              <h2 style={{ fontSize: "28px", fontWeight: "800", color: "#1F2B4D", lineHeight: "1.16", letterSpacing: "-.01em", margin: "12px 0 0" }}>Connect the product journey from catalogue to after-sales.
              </h2>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "54px", marginTop: "40px" }}>
              <div className="br-row" style={{ display: "flex", gap: "44px", alignItems: "center", flexWrap: "wrap" }}>
                <div style={{ flex: "1", minWidth: "280px" }}>
                  <div style={{ borderRadius: "14px", overflow: "hidden", border: "1px solid #D9E0EC", boxShadow: "0 18px 42px rgba(31,43,77,.14)", background: "#fff" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "6px", padding: "9px 12px", background: "#F2F5F9", borderBottom: "1px solid #E4EAF1" }}>
                      <span style={{ width: "9px", height: "9px", borderRadius: "50%", background: "#E0655A" }}></span>
                      <span style={{ width: "9px", height: "9px", borderRadius: "50%", background: "#E9B45C" }}></span>
                      <span style={{ width: "9px", height: "9px", borderRadius: "50%", background: "#5FBB7E" }}></span>
                    </div>
                    <div style={{ position: "relative", aspectRatio: "16/10", background: "#EEF2F7" }}>
                      <img src="/images/backoffice-wide-orders.jpg" alt="AXY brand dashboard showing product interest and demand context by market" loading="lazy" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }} />
                    </div>
                  </div>
                </div>
                <div style={{ flex: "1.05", minWidth: "300px" }}>
                  <div style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
                    <span style={{ width: "30px", height: "30px", borderRadius: "9px", background: "#EAF6F6", color: "#2C8C99", fontFamily: "'Roboto Mono',monospace", fontSize: "12px", fontWeight: "700", display: "flex", alignItems: "center", justifyContent: "center" }}>01
                    </span>
                    <span style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "9.5px", letterSpacing: ".1em", color: "#9aa3b2", textTransform: "uppercase" }}>Beyond sell-in
                    </span>
                  </div>
                  <h3 style={{ fontSize: "22px", fontWeight: "800", color: "#1F2B4D", lineHeight: "1.2", margin: "14px 0 0" }}>Understand demand beyond sell-in
                  </h3>
                  <p style={{ fontSize: "13.5px", color: "#667085", lineHeight: "1.6", margin: "10px 0 0", maxWidth: "470px" }}>Use approved retail activity to understand product interest, unmet demand, availability pressure and product visibility across markets.
                  </p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "7px", marginTop: "16px" }}>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "12px", color: "#3a4358", background: "#F4F6FA", border: "1px solid #E4EAF1", borderRadius: "8px", padding: "6px 11px" }}>
                      <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#2C8C99" }}></span>Presentations
                    </span>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "12px", color: "#3a4358", background: "#F4F6FA", border: "1px solid #E4EAF1", borderRadius: "8px", padding: "6px 11px" }}>
                      <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#2C8C99" }}></span>Wishlists
                    </span>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "12px", color: "#3a4358", background: "#F4F6FA", border: "1px solid #E4EAF1", borderRadius: "8px", padding: "6px 11px" }}>
                      <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#2C8C99" }}></span>Inquiries
                    </span>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "12px", color: "#3a4358", background: "#F4F6FA", border: "1px solid #E4EAF1", borderRadius: "8px", padding: "6px 11px" }}>
                      <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#2C8C99" }}></span>Availability requests
                    </span>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "12px", color: "#3a4358", background: "#F4F6FA", border: "1px solid #E4EAF1", borderRadius: "8px", padding: "6px 11px" }}>
                      <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#2C8C99" }}></span>Requested unavailable
                    </span>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "12px", color: "#3a4358", background: "#F4F6FA", border: "1px solid #E4EAF1", borderRadius: "8px", padding: "6px 11px" }}>
                      <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#2C8C99" }}></span>Conversion
                    </span>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "12px", color: "#3a4358", background: "#F4F6FA", border: "1px solid #E4EAF1", borderRadius: "8px", padding: "6px 11px" }}>
                      <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#2C8C99" }}></span>Interest by market
                    </span>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "12px", color: "#3a4358", background: "#F4F6FA", border: "1px solid #E4EAF1", borderRadius: "8px", padding: "6px 11px" }}>
                      <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#2C8C99" }}></span>Stock-health context
                    </span>
                  </div>
                  <div style={{ display: "flex", gap: "10px", alignItems: "flex-start", marginTop: "18px", background: "#F8FAFC", border: "1px solid #D9E0EC", borderLeft: "3px solid #2C8C99", borderRadius: "0 12px 12px 0", padding: "13px 16px" }}>
                    <span style={{ fontSize: "13px", color: "#1F2B4D", lineHeight: "1.5", fontWeight: "600" }}>See more than what was ordered and sold.
                    </span>
                  </div>
                  <div style={{ background: "#F8FAFC", border: "1px solid #E4EAF1", borderRadius: "12px", padding: "14px 16px", marginTop: "14px", maxWidth: "470px" }}>
                    <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "8.5px", letterSpacing: ".07em", color: "#2C8C99", marginBottom: "8px" }}>HELPS INVESTIGATE — AS SIGNALS, NOT CONCLUSIONS
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "6px", fontSize: "12px", color: "#3a4358", lineHeight: "1.4" }}>
                      <span>• Not selling because customers aren’t interested
                      </span>
                      <span>• Not selling because retailers aren’t presenting it
                      </span>
                      <span>• Generating interest but unavailable in the right market
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div style={{ marginTop: "-40px" }}></div>
              <div className="br-row" style={{ display: "flex", gap: "44px", alignItems: "center", flexWrap: "wrap" }}>
                <div style={{ flex: "1.05", minWidth: "300px" }}>
                  <div style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
                    <span style={{ width: "30px", height: "30px", borderRadius: "9px", background: "#EAF6F6", color: "#2C8C99", fontFamily: "'Roboto Mono',monospace", fontSize: "12px", fontWeight: "700", display: "flex", alignItems: "center", justifyContent: "center" }}>02
                    </span>
                    <span style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "9.5px", letterSpacing: ".1em", color: "#9aa3b2", textTransform: "uppercase" }}>Alignment
                    </span>
                  </div>
                  <h3 style={{ fontSize: "22px", fontWeight: "800", color: "#1F2B4D", lineHeight: "1.2", margin: "14px 0 0" }}>Keep every authorised retailer current
                  </h3>
                  <p style={{ fontSize: "13.5px", color: "#667085", lineHeight: "1.6", margin: "10px 0 0", maxWidth: "470px" }}>Distribute structured product information, images, specifications, documents and approved prices — without rebuilding a different file for every retailer.
                  </p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "7px", marginTop: "16px" }}>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "12px", color: "#3a4358", background: "#F4F6FA", border: "1px solid #E4EAF1", borderRadius: "8px", padding: "6px 11px" }}>
                      <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#2C8C99" }}></span>Full catalogue
                    </span>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "12px", color: "#3a4358", background: "#F4F6FA", border: "1px solid #E4EAF1", borderRadius: "8px", padding: "6px 11px" }}>
                      <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#2C8C99" }}></span>Selected collections
                    </span>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "12px", color: "#3a4358", background: "#F4F6FA", border: "1px solid #E4EAF1", borderRadius: "8px", padding: "6px 11px" }}>
                      <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#2C8C99" }}></span>Retailer-specific
                    </span>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "12px", color: "#3a4358", background: "#F4F6FA", border: "1px solid #E4EAF1", borderRadius: "8px", padding: "6px 11px" }}>
                      <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#2C8C99" }}></span>Specs & variants
                    </span>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "12px", color: "#3a4358", background: "#F4F6FA", border: "1px solid #E4EAF1", borderRadius: "8px", padding: "6px 11px" }}>
                      <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#2C8C99" }}></span>Documents
                    </span>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "12px", color: "#3a4358", background: "#F4F6FA", border: "1px solid #E4EAF1", borderRadius: "8px", padding: "6px 11px" }}>
                      <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#2C8C99" }}></span>Regional price lists
                    </span>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "12px", color: "#3a4358", background: "#F4F6FA", border: "1px solid #E4EAF1", borderRadius: "8px", padding: "6px 11px" }}>
                      <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#2C8C99" }}></span>Update status
                    </span>
                  </div>
                  <div style={{ display: "flex", gap: "10px", alignItems: "flex-start", marginTop: "18px", background: "#F8FAFC", border: "1px solid #D9E0EC", borderLeft: "3px solid #2C8C99", borderRadius: "0 12px 12px 0", padding: "13px 16px" }}>
                    <span style={{ fontSize: "13px", color: "#1F2B4D", lineHeight: "1.5", fontWeight: "600" }}>One structured product source — not another spreadsheet attachment.
                    </span>
                  </div>
                  <a className="hv77" href="/back-office" style={{ display: "inline-flex", alignItems: "center", gap: "6px", marginTop: "16px", fontSize: "13.5px", fontWeight: "700", color: "#2C8C99" }}>Explore Back Office →
                  </a>
                </div>
                <div style={{ flex: "1", minWidth: "280px" }}>
                  <div style={{ borderRadius: "14px", overflow: "hidden", border: "1px solid #D9E0EC", boxShadow: "0 18px 42px rgba(31,43,77,.14)", background: "#fff" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "6px", padding: "9px 12px", background: "#F2F5F9", borderBottom: "1px solid #E4EAF1" }}>
                      <span style={{ width: "9px", height: "9px", borderRadius: "50%", background: "#E0655A" }}></span>
                      <span style={{ width: "9px", height: "9px", borderRadius: "50%", background: "#E9B45C" }}></span>
                      <span style={{ width: "9px", height: "9px", borderRadius: "50%", background: "#5FBB7E" }}></span>
                    </div>
                    <div style={{ position: "relative", aspectRatio: "16/10", background: "#EEF2F7" }}>
                      <img src="/images/backoffice-wide-brand.jpg" alt="AXY Back Office brand catalogue distribution with publish and update status" loading="lazy" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="br-row" style={{ display: "flex", gap: "44px", alignItems: "center", flexWrap: "wrap" }}>
                <div style={{ flex: "1", minWidth: "280px" }}>
                  <div style={{ borderRadius: "14px", overflow: "hidden", border: "1px solid #D9E0EC", boxShadow: "0 18px 42px rgba(31,43,77,.14)", background: "#fff" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "6px", padding: "9px 12px", background: "#F2F5F9", borderBottom: "1px solid #E4EAF1" }}>
                      <span style={{ width: "9px", height: "9px", borderRadius: "50%", background: "#E0655A" }}></span>
                      <span style={{ width: "9px", height: "9px", borderRadius: "50%", background: "#E9B45C" }}></span>
                      <span style={{ width: "9px", height: "9px", borderRadius: "50%", background: "#5FBB7E" }}></span>
                    </div>
                    <div style={{ position: "relative", aspectRatio: "16/10", background: "#EEF2F7" }}>
                      <img src="/images/backoffice-wide-reorder.jpg" alt="AXY availability and reorder coordination between brand and retail partner" loading="lazy" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }} />
                    </div>
                  </div>
                </div>
                <div style={{ flex: "1.05", minWidth: "300px" }}>
                  <div style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
                    <span style={{ width: "30px", height: "30px", borderRadius: "9px", background: "#EAF6F6", color: "#2C8C99", fontFamily: "'Roboto Mono',monospace", fontSize: "12px", fontWeight: "700", display: "flex", alignItems: "center", justifyContent: "center" }}>03
                    </span>
                    <span style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "9.5px", letterSpacing: ".1em", color: "#9aa3b2", textTransform: "uppercase" }}>Availability
                    </span>
                  </div>
                  <h3 style={{ fontSize: "22px", fontWeight: "800", color: "#1F2B4D", lineHeight: "1.2", margin: "14px 0 0" }}>Coordinate availability, orders and reorders
                  </h3>
                  <p style={{ fontSize: "13.5px", color: "#667085", lineHeight: "1.6", margin: "10px 0 0", maxWidth: "470px" }}>Let retail partners request availability, submit structured orders and follow order status using the same connected product references.
                  </p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "7px", marginTop: "16px" }}>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "12px", color: "#3a4358", background: "#F4F6FA", border: "1px solid #E4EAF1", borderRadius: "8px", padding: "6px 11px" }}>
                      <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#2C8C99" }}></span>Availability request
                    </span>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "12px", color: "#3a4358", background: "#F4F6FA", border: "1px solid #E4EAF1", borderRadius: "8px", padding: "6px 11px" }}>
                      <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#2C8C99" }}></span>Available / unavailable
                    </span>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "12px", color: "#3a4358", background: "#F4F6FA", border: "1px solid #E4EAF1", borderRadius: "8px", padding: "6px 11px" }}>
                      <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#2C8C99" }}></span>Quantity (permitted)
                    </span>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "12px", color: "#3a4358", background: "#F4F6FA", border: "1px solid #E4EAF1", borderRadius: "8px", padding: "6px 11px" }}>
                      <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#2C8C99" }}></span>Estimated delivery
                    </span>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "12px", color: "#3a4358", background: "#F4F6FA", border: "1px solid #E4EAF1", borderRadius: "8px", padding: "6px 11px" }}>
                      <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#2C8C99" }}></span>Alternative product
                    </span>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "12px", color: "#3a4358", background: "#F4F6FA", border: "1px solid #E4EAF1", borderRadius: "8px", padding: "6px 11px" }}>
                      <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#2C8C99" }}></span>Structured order
                    </span>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "12px", color: "#3a4358", background: "#F4F6FA", border: "1px solid #E4EAF1", borderRadius: "8px", padding: "6px 11px" }}>
                      <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#2C8C99" }}></span>Reorder context
                    </span>
                  </div>
                  <div style={{ display: "flex", gap: "10px", alignItems: "flex-start", marginTop: "18px", background: "#F8FAFC", border: "1px solid #D9E0EC", borderLeft: "3px solid #2C8C99", borderRadius: "0 12px 12px 0", padding: "13px 16px" }}>
                    <span style={{ fontSize: "13px", color: "#1F2B4D", lineHeight: "1.5", fontWeight: "600" }}>Answer demand while the retail opportunity is still active.
                    </span>
                  </div>
                  <a className="hv78" href="/integrations" style={{ display: "inline-flex", alignItems: "center", gap: "6px", marginTop: "16px", fontSize: "13.5px", fontWeight: "700", color: "#2C8C99" }}>Explore integrations →
                  </a>
                </div>
              </div>
              <div className="br-row" style={{ display: "flex", gap: "44px", alignItems: "center", flexWrap: "wrap" }}>
                <div style={{ flex: "1.05", minWidth: "300px" }}>
                  <div style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
                    <span style={{ width: "30px", height: "30px", borderRadius: "9px", background: "#EAF6F6", color: "#2C8C99", fontFamily: "'Roboto Mono',monospace", fontSize: "12px", fontWeight: "700", display: "flex", alignItems: "center", justifyContent: "center" }}>04
                    </span>
                    <span style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "9.5px", letterSpacing: ".1em", color: "#9aa3b2", textTransform: "uppercase" }}>Lifecycle
                    </span>
                  </div>
                  <h3 style={{ fontSize: "22px", fontWeight: "800", color: "#1F2B4D", lineHeight: "1.2", margin: "14px 0 0" }}>Connect warranty and the product lifecycle
                  </h3>
                  <p style={{ fontSize: "13.5px", color: "#667085", lineHeight: "1.6", margin: "10px 0 0", maxWidth: "470px" }}>Keep the product connected after purchase through digital warranty activation, extensions, documents, service information and approved lifecycle communication.
                  </p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "7px", marginTop: "16px" }}>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "12px", color: "#3a4358", background: "#F4F6FA", border: "1px solid #E4EAF1", borderRadius: "8px", padding: "6px 11px" }}>
                      <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#2C8C99" }}></span>Warranty activation
                    </span>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "12px", color: "#3a4358", background: "#F4F6FA", border: "1px solid #E4EAF1", borderRadius: "8px", padding: "6px 11px" }}>
                      <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#2C8C99" }}></span>Digital record
                    </span>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "12px", color: "#3a4358", background: "#F4F6FA", border: "1px solid #E4EAF1", borderRadius: "8px", padding: "6px 11px" }}>
                      <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#2C8C99" }}></span>Extension
                    </span>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "12px", color: "#3a4358", background: "#F4F6FA", border: "1px solid #E4EAF1", borderRadius: "8px", padding: "6px 11px" }}>
                      <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#2C8C99" }}></span>Product documents
                    </span>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "12px", color: "#3a4358", background: "#F4F6FA", border: "1px solid #E4EAF1", borderRadius: "8px", padding: "6px 11px" }}>
                      <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#2C8C99" }}></span>Service request
                    </span>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "12px", color: "#3a4358", background: "#F4F6FA", border: "1px solid #E4EAF1", borderRadius: "8px", padding: "6px 11px" }}>
                      <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#2C8C99" }}></span>Service status
                    </span>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "12px", color: "#3a4358", background: "#F4F6FA", border: "1px solid #E4EAF1", borderRadius: "8px", padding: "6px 11px" }}>
                      <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#2C8C99" }}></span>Lifecycle activity
                    </span>
                  </div>
                  <div style={{ display: "flex", gap: "10px", alignItems: "flex-start", marginTop: "18px", background: "#F8FAFC", border: "1px solid #D9E0EC", borderLeft: "3px solid #2C8C99", borderRadius: "0 12px 12px 0", padding: "13px 16px" }}>
                    <span style={{ fontSize: "13px", color: "#1F2B4D", lineHeight: "1.5", fontWeight: "600" }}>The brand relationship should not end when the product leaves the store.
                    </span>
                  </div>
                </div>
                <div style={{ flex: "1", minWidth: "280px" }}>
                  <div style={{ borderRadius: "14px", overflow: "hidden", border: "1px solid #D9E0EC", boxShadow: "0 18px 42px rgba(31,43,77,.14)", background: "#fff" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "6px", padding: "9px 12px", background: "#F2F5F9", borderBottom: "1px solid #E4EAF1" }}>
                      <span style={{ width: "9px", height: "9px", borderRadius: "50%", background: "#E0655A" }}></span>
                      <span style={{ width: "9px", height: "9px", borderRadius: "50%", background: "#E9B45C" }}></span>
                      <span style={{ width: "9px", height: "9px", borderRadius: "50%", background: "#5FBB7E" }}></span>
                    </div>
                    <div style={{ position: "relative", aspectRatio: "16/10", background: "#EEF2F7" }}>
                      <img src="/images/backoffice-wide-stock.jpg" alt="AXY warranty activation and product lifecycle records connected to the brand" loading="lazy" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="br-row" style={{ display: "flex", gap: "44px", alignItems: "center", flexWrap: "wrap" }}>
                <div style={{ flex: "1", minWidth: "280px" }}>
                  <div style={{ borderRadius: "14px", overflow: "hidden", border: "1px solid #D9E0EC", boxShadow: "0 18px 42px rgba(31,43,77,.14)", background: "#fff" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "6px", padding: "9px 12px", background: "#F2F5F9", borderBottom: "1px solid #E4EAF1" }}>
                      <span style={{ width: "9px", height: "9px", borderRadius: "50%", background: "#E0655A" }}></span>
                      <span style={{ width: "9px", height: "9px", borderRadius: "50%", background: "#E9B45C" }}></span>
                      <span style={{ width: "9px", height: "9px", borderRadius: "50%", background: "#5FBB7E" }}></span>
                    </div>
                    <div style={{ position: "relative", aspectRatio: "16/10", background: "#EEF2F7" }}>
                      <img src="/images/backoffice-wide-comparison.jpg" alt="AXY permission settings showing shared and private fields between brand and retailer" loading="lazy" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }} />
                    </div>
                  </div>
                </div>
                <div style={{ flex: "1.05", minWidth: "300px" }}>
                  <div style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
                    <span style={{ width: "30px", height: "30px", borderRadius: "9px", background: "#EAF6F6", color: "#2C8C99", fontFamily: "'Roboto Mono',monospace", fontSize: "12px", fontWeight: "700", display: "flex", alignItems: "center", justifyContent: "center" }}>05
                    </span>
                    <span style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "9.5px", letterSpacing: ".1em", color: "#9aa3b2", textTransform: "uppercase" }}>Control
                    </span>
                  </div>
                  <h3 style={{ fontSize: "22px", fontWeight: "800", color: "#1F2B4D", lineHeight: "1.2", margin: "14px 0 0" }}>Collaborate without taking control from the retailer
                  </h3>
                  <p style={{ fontSize: "13.5px", color: "#667085", lineHeight: "1.6", margin: "10px 0 0", maxWidth: "470px" }}>Exchange the information and actions required for cooperation while each company maintains ownership of its customers, records and commercial strategy.
                  </p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "7px", marginTop: "16px" }}>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "12px", color: "#3a4358", background: "#F4F6FA", border: "1px solid #E4EAF1", borderRadius: "8px", padding: "6px 11px" }}>
                      <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#2C8C99" }}></span>Catalogue permissions
                    </span>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "12px", color: "#3a4358", background: "#F4F6FA", border: "1px solid #E4EAF1", borderRadius: "8px", padding: "6px 11px" }}>
                      <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#2C8C99" }}></span>Availability permissions
                    </span>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "12px", color: "#3a4358", background: "#F4F6FA", border: "1px solid #E4EAF1", borderRadius: "8px", padding: "6px 11px" }}>
                      <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#2C8C99" }}></span>Order permissions
                    </span>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "12px", color: "#3a4358", background: "#F4F6FA", border: "1px solid #E4EAF1", borderRadius: "8px", padding: "6px 11px" }}>
                      <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#2C8C99" }}></span>Warranty permissions
                    </span>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "12px", color: "#3a4358", background: "#F4F6FA", border: "1px solid #E4EAF1", borderRadius: "8px", padding: "6px 11px" }}>
                      <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#2C8C99" }}></span>Aggregation settings
                    </span>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "12px", color: "#3a4358", background: "#F4F6FA", border: "1px solid #E4EAF1", borderRadius: "8px", padding: "6px 11px" }}>
                      <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#2C8C99" }}></span>Shared fields
                    </span>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "12px", color: "#3a4358", background: "#F4F6FA", border: "1px solid #E4EAF1", borderRadius: "8px", padding: "6px 11px" }}>
                      <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#2C8C99" }}></span>Private fields
                    </span>
                  </div>
                  <div style={{ display: "flex", gap: "10px", alignItems: "flex-start", marginTop: "18px", background: "#F8FAFC", border: "1px solid #D9E0EC", borderLeft: "3px solid #2C8C99", borderRadius: "0 12px 12px 0", padding: "13px 16px" }}>
                    <span style={{ fontSize: "13px", color: "#1F2B4D", lineHeight: "1.5", fontWeight: "600" }}>AXY enables the workflow. It does not open one company’s database to another.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ background: "#fff", padding: "74px 24px" }}>
          <div style={{ maxWidth: "1120px", margin: "0 auto" }}>
            <div style={{ maxWidth: "740px" }}>
              <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "10.5px", letterSpacing: ".14em", color: "#2C8C99", textTransform: "uppercase" }}>Product distribution
              </div>
              <h2 style={{ fontSize: "28px", fontWeight: "800", color: "#1F2B4D", lineHeight: "1.16", letterSpacing: "-.01em", margin: "12px 0 0" }}>Publish once. Keep authorised retail partners current.
              </h2>
              <p style={{ fontSize: "14.5px", color: "#667085", lineHeight: "1.6", margin: "13px 0 0", maxWidth: "620px" }}>Create products in AXY, import them in bulk or connect an existing product database. Retailers review and import the products and updates relevant to their business.
              </p>
            </div>
            <div className="br-row" style={{ display: "flex", gap: "44px", alignItems: "center", flexWrap: "wrap", marginTop: "30px" }}>
              <div style={{ flex: "1.1", minWidth: "300px" }}>
                <div style={{ borderRadius: "14px", overflow: "hidden", border: "1px solid #D9E0EC", boxShadow: "0 18px 42px rgba(31,43,77,.14)", background: "#fff" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "6px", padding: "9px 12px", background: "#F2F5F9", borderBottom: "1px solid #E4EAF1" }}>
                    <span style={{ width: "9px", height: "9px", borderRadius: "50%", background: "#E0655A" }}></span>
                    <span style={{ width: "9px", height: "9px", borderRadius: "50%", background: "#E9B45C" }}></span>
                    <span style={{ width: "9px", height: "9px", borderRadius: "50%", background: "#5FBB7E" }}></span>
                  </div>
                  <div style={{ position: "relative", aspectRatio: "16/10", background: "#EEF2F7" }}>
                    <img src="/images/backoffice-wide-brand.jpg" alt="AXY Back Office product catalogue with publish, review and import statuses" loading="lazy" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }} />
                  </div>
                </div>
              </div>
              <div style={{ flex: "1", minWidth: "280px" }}>
                <div className="br-flow" style={{ display: "flex", gap: "8px", alignItems: "center", flexWrap: "wrap", marginTop: "16px" }}>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
                    <span style={{ fontSize: "12px", fontWeight: "700", color: "#1F2B4D", background: "#fff", border: "1px solid #E4EAF1", borderRadius: "9px", padding: "7px 12px" }}>Brand publishes
                    </span>
                    <span className="br-flow-arrow" style={{ color: "#B7C2D6", fontSize: "13px" }}>→
                    </span>
                  </span>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
                    <span style={{ fontSize: "12px", fontWeight: "700", color: "#1F2B4D", background: "#fff", border: "1px solid #E4EAF1", borderRadius: "9px", padding: "7px 12px" }}>Retailer reviews
                    </span>
                    <span className="br-flow-arrow" style={{ color: "#B7C2D6", fontSize: "13px" }}>→
                    </span>
                  </span>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
                    <span style={{ fontSize: "12px", fontWeight: "700", color: "#1F2B4D", background: "#fff", border: "1px solid #E4EAF1", borderRadius: "9px", padding: "7px 12px" }}>Selected info accepted
                    </span>
                    <span className="br-flow-arrow" style={{ color: "#B7C2D6", fontSize: "13px" }}>→
                    </span>
                  </span>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
                    <span style={{ fontSize: "12px", fontWeight: "700", color: "#1F2B4D", background: "#fff", border: "1px solid #E4EAF1", borderRadius: "9px", padding: "7px 12px" }}>Catalogue updates
                    </span>
                  </span>
                </div>
                <div className="br-two" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6px", marginTop: "16px" }}>
                  <div style={{ display: "flex", gap: "7px", fontSize: "12px", color: "#3a4358", lineHeight: "1.4" }}>
                    <span style={{ color: "#2C8C99", fontWeight: "700" }}>✓
                    </span>Create directly
                  </div>
                  <div style={{ display: "flex", gap: "7px", fontSize: "12px", color: "#3a4358", lineHeight: "1.4" }}>
                    <span style={{ color: "#2C8C99", fontWeight: "700" }}>✓
                    </span>Structured Excel import
                  </div>
                  <div style={{ display: "flex", gap: "7px", fontSize: "12px", color: "#3a4358", lineHeight: "1.4" }}>
                    <span style={{ color: "#2C8C99", fontWeight: "700" }}>✓
                    </span>API / scheduled connection
                  </div>
                  <div style={{ display: "flex", gap: "7px", fontSize: "12px", color: "#3a4358", lineHeight: "1.4" }}>
                    <span style={{ color: "#2C8C99", fontWeight: "700" }}>✓
                    </span>Complete or selected publication
                  </div>
                  <div style={{ display: "flex", gap: "7px", fontSize: "12px", color: "#3a4358", lineHeight: "1.4" }}>
                    <span style={{ color: "#2C8C99", fontWeight: "700" }}>✓
                    </span>Retailer-specific assortments
                  </div>
                  <div style={{ display: "flex", gap: "7px", fontSize: "12px", color: "#3a4358", lineHeight: "1.4" }}>
                    <span style={{ color: "#2C8C99", fontWeight: "700" }}>✓
                    </span>Images, specs & variants
                  </div>
                  <div style={{ display: "flex", gap: "7px", fontSize: "12px", color: "#3a4358", lineHeight: "1.4" }}>
                    <span style={{ color: "#2C8C99", fontWeight: "700" }}>✓
                    </span>Documents & dynamic properties
                  </div>
                  <div style={{ display: "flex", gap: "7px", fontSize: "12px", color: "#3a4358", lineHeight: "1.4" }}>
                    <span style={{ color: "#2C8C99", fontWeight: "700" }}>✓
                    </span>Recommended & market prices
                  </div>
                  <div style={{ display: "flex", gap: "7px", fontSize: "12px", color: "#3a4358", lineHeight: "1.4" }}>
                    <span style={{ color: "#2C8C99", fontWeight: "700" }}>✓
                    </span>Effective dates & replacement
                  </div>
                  <div style={{ display: "flex", gap: "7px", fontSize: "12px", color: "#3a4358", lineHeight: "1.4" }}>
                    <span style={{ color: "#2C8C99", fontWeight: "700" }}>✓
                    </span>Archived / discontinued
                  </div>
                </div>
                <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "8.5px", letterSpacing: ".07em", color: "#9aa3b2", margin: "18px 0 8px" }}>PRODUCT-UPDATE STATUSES
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                  <span style={{ fontSize: "10.5px", fontWeight: "600", color: "#1F2B4D", background: "#F4F6FA", border: "1px solid #E4EAF1", borderRadius: "7px", padding: "4px 9px" }}>Draft
                  </span>
                  <span style={{ fontSize: "10.5px", fontWeight: "600", color: "#1F2B4D", background: "#F4F6FA", border: "1px solid #E4EAF1", borderRadius: "7px", padding: "4px 9px" }}>Published
                  </span>
                  <span style={{ fontSize: "10.5px", fontWeight: "600", color: "#1F2B4D", background: "#F4F6FA", border: "1px solid #E4EAF1", borderRadius: "7px", padding: "4px 9px" }}>Sent
                  </span>
                  <span style={{ fontSize: "10.5px", fontWeight: "600", color: "#1F2B4D", background: "#F4F6FA", border: "1px solid #E4EAF1", borderRadius: "7px", padding: "4px 9px" }}>Viewed
                  </span>
                  <span style={{ fontSize: "10.5px", fontWeight: "600", color: "#1F2B4D", background: "#F4F6FA", border: "1px solid #E4EAF1", borderRadius: "7px", padding: "4px 9px" }}>Awaiting review
                  </span>
                  <span style={{ fontSize: "10.5px", fontWeight: "600", color: "#1F2B4D", background: "#F4F6FA", border: "1px solid #E4EAF1", borderRadius: "7px", padding: "4px 9px" }}>Accepted
                  </span>
                  <span style={{ fontSize: "10.5px", fontWeight: "600", color: "#1F2B4D", background: "#F4F6FA", border: "1px solid #E4EAF1", borderRadius: "7px", padding: "4px 9px" }}>Partially accepted
                  </span>
                  <span style={{ fontSize: "10.5px", fontWeight: "600", color: "#1F2B4D", background: "#F4F6FA", border: "1px solid #E4EAF1", borderRadius: "7px", padding: "4px 9px" }}>Rejected
                  </span>
                  <span style={{ fontSize: "10.5px", fontWeight: "600", color: "#1F2B4D", background: "#F4F6FA", border: "1px solid #E4EAF1", borderRadius: "7px", padding: "4px 9px" }}>Imported
                  </span>
                  <span style={{ fontSize: "10.5px", fontWeight: "600", color: "#1F2B4D", background: "#F4F6FA", border: "1px solid #E4EAF1", borderRadius: "7px", padding: "4px 9px" }}>Update required
                  </span>
                </div>
              </div>
            </div>
            <div style={{ display: "flex", gap: "10px", alignItems: "flex-start", marginTop: "18px", background: "#F8FAFC", border: "1px solid #D9E0EC", borderLeft: "3px solid #2C8C99", borderRadius: "0 12px 12px 0", padding: "13px 16px" }}>
              <span style={{ fontSize: "13px", color: "#1F2B4D", lineHeight: "1.5", fontWeight: "600" }}>Updates never silently overwrite retailer information unless an automatic connection has been explicitly configured.
              </span>
            </div>
          </div>
        </div>
        <div style={{ background: "#F9FAFB", padding: "74px 24px" }}>
          <div style={{ maxWidth: "1120px", margin: "0 auto" }}>
            <div style={{ maxWidth: "740px" }}>
              <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "10.5px", letterSpacing: ".14em", color: "#2C8C99", textTransform: "uppercase" }}>Retail partner management
              </div>
              <h2 style={{ fontSize: "28px", fontWeight: "800", color: "#1F2B4D", lineHeight: "1.16", letterSpacing: "-.01em", margin: "12px 0 0" }}>Coordinate every authorised relationship from one network view.
              </h2>
              <p style={{ fontSize: "14.5px", color: "#667085", lineHeight: "1.6", margin: "13px 0 0", maxWidth: "620px" }}>Organise retail partners by market, region, distributor, business unit, catalogue access and commercial relationship.
              </p>
            </div>
            <div style={{ display: "flex", gap: "24px", marginTop: "30px", flexWrap: "wrap" }}>
              <div style={{ flex: "1.2", minWidth: "300px", display: "flex", flexWrap: "wrap", gap: "7px", alignContent: "flex-start" }}>
                <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "12px", color: "#3a4358", background: "#F4F6FA", border: "1px solid #E4EAF1", borderRadius: "8px", padding: "6px 11px" }}>
                  <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#2C8C99" }}></span>Connected partners
                </span>
                <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "12px", color: "#3a4358", background: "#F4F6FA", border: "1px solid #E4EAF1", borderRadius: "8px", padding: "6px 11px" }}>
                  <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#2C8C99" }}></span>Pending invitations
                </span>
                <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "12px", color: "#3a4358", background: "#F4F6FA", border: "1px solid #E4EAF1", borderRadius: "8px", padding: "6px 11px" }}>
                  <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#2C8C99" }}></span>Retailer acceptance
                </span>
                <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "12px", color: "#3a4358", background: "#F4F6FA", border: "1px solid #E4EAF1", borderRadius: "8px", padding: "6px 11px" }}>
                  <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#2C8C99" }}></span>Countries & regions
                </span>
                <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "12px", color: "#3a4358", background: "#F4F6FA", border: "1px solid #E4EAF1", borderRadius: "8px", padding: "6px 11px" }}>
                  <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#2C8C99" }}></span>Business units
                </span>
                <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "12px", color: "#3a4358", background: "#F4F6FA", border: "1px solid #E4EAF1", borderRadius: "8px", padding: "6px 11px" }}>
                  <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#2C8C99" }}></span>Stores & locations
                </span>
                <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "12px", color: "#3a4358", background: "#F4F6FA", border: "1px solid #E4EAF1", borderRadius: "8px", padding: "6px 11px" }}>
                  <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#2C8C99" }}></span>Main contacts
                </span>
                <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "12px", color: "#3a4358", background: "#F4F6FA", border: "1px solid #E4EAF1", borderRadius: "8px", padding: "6px 11px" }}>
                  <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#2C8C99" }}></span>Catalogue access
                </span>
                <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "12px", color: "#3a4358", background: "#F4F6FA", border: "1px solid #E4EAF1", borderRadius: "8px", padding: "6px 11px" }}>
                  <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#2C8C99" }}></span>Pricing permissions
                </span>
                <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "12px", color: "#3a4358", background: "#F4F6FA", border: "1px solid #E4EAF1", borderRadius: "8px", padding: "6px 11px" }}>
                  <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#2C8C99" }}></span>Order activity
                </span>
                <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "12px", color: "#3a4358", background: "#F4F6FA", border: "1px solid #E4EAF1", borderRadius: "8px", padding: "6px 11px" }}>
                  <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#2C8C99" }}></span>Warranty activity
                </span>
                <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "12px", color: "#3a4358", background: "#F4F6FA", border: "1px solid #E4EAF1", borderRadius: "8px", padding: "6px 11px" }}>
                  <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#2C8C99" }}></span>Update status
                </span>
              </div>
              <div style={{ flex: "1", minWidth: "280px", background: "#fff", border: "1px solid #E4EAF1", borderRadius: "16px", padding: "20px" }}>
                <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "8.5px", letterSpacing: ".07em", color: "#2C8C99", marginBottom: "12px" }}>HOW THE NETWORK WORKS
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "9px" }}>
                  <div style={{ display: "flex", gap: "8px", fontSize: "12.5px", color: "#3a4358", lineHeight: "1.4" }}>
                    <span style={{ color: "#2C8C99", fontWeight: "700", flexShrink: "0" }}>→
                    </span>A brand can invite a retailer
                  </div>
                  <div style={{ display: "flex", gap: "8px", fontSize: "12.5px", color: "#3a4358", lineHeight: "1.4" }}>
                    <span style={{ color: "#2C8C99", fontWeight: "700", flexShrink: "0" }}>→
                    </span>The retailer must accept the connection
                  </div>
                  <div style={{ display: "flex", gap: "8px", fontSize: "12.5px", color: "#3a4358", lineHeight: "1.4" }}>
                    <span style={{ color: "#2C8C99", fontWeight: "700", flexShrink: "0" }}>→
                    </span>Each company manages its own official information
                  </div>
                  <div style={{ display: "flex", gap: "8px", fontSize: "12.5px", color: "#3a4358", lineHeight: "1.4" }}>
                    <span style={{ color: "#2C8C99", fontWeight: "700", flexShrink: "0" }}>→
                    </span>Partner-specific permissions determine visibility
                  </div>
                  <div style={{ display: "flex", gap: "8px", fontSize: "12.5px", color: "#3a4358", lineHeight: "1.4" }}>
                    <span style={{ color: "#2C8C99", fontWeight: "700", flexShrink: "0" }}>→
                    </span>Neither company overwrites the other’s internal records
                  </div>
                </div>
              </div>
            </div>
            <div style={{ display: "flex", gap: "10px", alignItems: "flex-start", marginTop: "18px", background: "#F8FAFC", border: "1px solid #D9E0EC", borderLeft: "3px solid #2C8C99", borderRadius: "0 12px 12px 0", padding: "13px 16px" }}>
              <span style={{ fontSize: "13px", color: "#1F2B4D", lineHeight: "1.5", fontWeight: "600" }}>A connected network does not mean unrestricted access.
              </span>
            </div>
          </div>
        </div>
        <div style={{ background: "#FBF6F1", padding: "74px 24px" }}>
          <div className="br-row" style={{ maxWidth: "1120px", margin: "0 auto", display: "flex", gap: "48px", alignItems: "center", flexWrap: "wrap" }}>
            <div style={{ flex: "1.05", minWidth: "300px" }}>
              <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "10.5px", letterSpacing: ".14em", color: "#B5764A", textTransform: "uppercase" }}>Connected brand content
              </div>
              <h2 style={{ fontSize: "28px", fontWeight: "800", color: "#1F2B4D", lineHeight: "1.16", letterSpacing: "-.01em", margin: "12px 0 0" }}>Prepare the story once. Let retailers make it relevant.
              </h2>
              <p style={{ fontSize: "14.5px", color: "#667085", lineHeight: "1.6", margin: "13px 0 0", maxWidth: "620px" }}>Brands prepare product launches, collection stories, events and after-sales communication that authorised retailers review, adapt and distribute through their own customer relationships.
              </p>
              <div className="br-flow" style={{ display: "flex", gap: "8px", alignItems: "center", flexWrap: "wrap", marginTop: "16px" }}>
                <span style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
                  <span style={{ fontSize: "12px", fontWeight: "700", color: "#1F2B4D", background: "#fff", border: "1px solid #E4EAF1", borderRadius: "9px", padding: "7px 12px" }}>Brand creates
                  </span>
                  <span className="br-flow-arrow" style={{ color: "#B7C2D6", fontSize: "13px" }}>→
                  </span>
                </span>
                <span style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
                  <span style={{ fontSize: "12px", fontWeight: "700", color: "#1F2B4D", background: "#fff", border: "1px solid #E4EAF1", borderRadius: "9px", padding: "7px 12px" }}>Retailer reviews
                  </span>
                  <span className="br-flow-arrow" style={{ color: "#B7C2D6", fontSize: "13px" }}>→
                  </span>
                </span>
                <span style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
                  <span style={{ fontSize: "12px", fontWeight: "700", color: "#1F2B4D", background: "#fff", border: "1px solid #E4EAF1", borderRadius: "9px", padding: "7px 12px" }}>Adapts / approves
                  </span>
                  <span className="br-flow-arrow" style={{ color: "#B7C2D6", fontSize: "13px" }}>→
                  </span>
                </span>
                <span style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
                  <span style={{ fontSize: "12px", fontWeight: "700", color: "#1F2B4D", background: "#fff", border: "1px solid #E4EAF1", borderRadius: "9px", padding: "7px 12px" }}>Customer receives
                  </span>
                  <span className="br-flow-arrow" style={{ color: "#B7C2D6", fontSize: "13px" }}>→
                  </span>
                </span>
                <span style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
                  <span style={{ fontSize: "12px", fontWeight: "700", color: "#1F2B4D", background: "#fff", border: "1px solid #E4EAF1", borderRadius: "9px", padding: "7px 12px" }}>Aggregated reaction returns
                  </span>
                </span>
              </div>
              <div style={{ display: "flex", gap: "10px", alignItems: "flex-start", marginTop: "18px", background: "#fff", border: "1px solid #EFDFD4", borderLeft: "3px solid #C98B63", borderRadius: "0 12px 12px 0", padding: "13px 16px" }}>
                <span style={{ fontSize: "12.5px", color: "#5c4432", lineHeight: "1.5" }}>
                  <strong>The brand prepares the content. The retailer decides how it reaches its customers.
                  </strong>
                </span>
              </div>
            </div>
            <div style={{ flex: "1", minWidth: "280px" }}>
              <div style={{ background: "#fff", border: "1px solid #EFDFD4", borderRadius: "16px", padding: "18px" }}>
                <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "8.5px", letterSpacing: ".07em", color: "#B5764A", marginBottom: "10px" }}>WHERE APPROVED — AGGREGATED REACH
                </div>
                <div className="br-two" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
                  <div style={{ background: "#FBF7F2", border: "1px solid #F0E2D6", borderRadius: "10px", padding: "11px 13px" }}>
                    <div style={{ fontSize: "17px", fontWeight: "800", color: "#1F2B4D" }}>32
                    </div>
                    <div style={{ fontSize: "10px", color: "#8a6a4f", marginTop: "2px" }}>Retailers reached
                    </div>
                  </div>
                  <div style={{ background: "#FBF7F2", border: "1px solid #F0E2D6", borderRadius: "10px", padding: "11px 13px" }}>
                    <div style={{ fontSize: "17px", fontWeight: "800", color: "#1F2B4D" }}>28
                    </div>
                    <div style={{ fontSize: "10px", color: "#8a6a4f", marginTop: "2px" }}>Approved content
                    </div>
                  </div>
                  <div style={{ background: "#FBF7F2", border: "1px solid #F0E2D6", borderRadius: "10px", padding: "11px 13px" }}>
                    <div style={{ fontSize: "17px", fontWeight: "800", color: "#1F2B4D" }}>4.1k
                    </div>
                    <div style={{ fontSize: "10px", color: "#8a6a4f", marginTop: "2px" }}>Customer reach
                    </div>
                  </div>
                  <div style={{ background: "#FBF7F2", border: "1px solid #F0E2D6", borderRadius: "10px", padding: "11px 13px" }}>
                    <div style={{ fontSize: "17px", fontWeight: "800", color: "#1F2B4D" }}>1,860
                    </div>
                    <div style={{ fontSize: "10px", color: "#8a6a4f", marginTop: "2px" }}>Product views
                    </div>
                  </div>
                  <div style={{ background: "#FBF7F2", border: "1px solid #F0E2D6", borderRadius: "10px", padding: "11px 13px" }}>
                    <div style={{ fontSize: "17px", fontWeight: "800", color: "#1F2B4D" }}>420
                    </div>
                    <div style={{ fontSize: "10px", color: "#8a6a4f", marginTop: "2px" }}>Saves
                    </div>
                  </div>
                  <div style={{ background: "#FBF7F2", border: "1px solid #F0E2D6", borderRadius: "10px", padding: "11px 13px" }}>
                    <div style={{ fontSize: "17px", fontWeight: "800", color: "#1F2B4D" }}>96
                    </div>
                    <div style={{ fontSize: "10px", color: "#8a6a4f", marginTop: "2px" }}>Inquiries
                    </div>
                  </div>
                </div>
                <div style={{ fontSize: "10.5px", color: "#a08363", lineHeight: "1.4", marginTop: "11px" }}>Identifiable customer reactions are not exposed unless specifically permitted.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ background: "#1F2B4D", padding: "74px 24px" }}>
          <div style={{ maxWidth: "1120px", margin: "0 auto" }}>
            <div style={{ maxWidth: "740px" }}>
              <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "10.5px", letterSpacing: ".14em", color: "#7fd4de", textTransform: "uppercase" }}>Product intelligence
              </div>
              <h2 style={{ fontSize: "28px", fontWeight: "800", color: "#fff", lineHeight: "1.16", letterSpacing: "-.01em", margin: "12px 0 0" }}>Turn approved retail activity into clearer product decisions.
              </h2>
              <p style={{ fontSize: "14.5px", color: "#B9C2D8", lineHeight: "1.6", margin: "13px 0 0", maxWidth: "620px" }}>Combine sell-in, sell-through, availability and anonymised customer-interest signals to understand what is happening across products and markets.
              </p>
            </div>
            <div style={{ display: "flex", gap: "24px", marginTop: "30px", flexWrap: "wrap" }}>
              <div style={{ flex: "1", minWidth: "280px" }}>
                <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "8.5px", letterSpacing: ".07em", color: "#7fd4de", marginBottom: "12px" }}>SIGNALS COMBINED
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                  <span style={{ fontSize: "11px", color: "#DDE4F0", background: "rgba(255,255,255,.06)", border: "1px solid rgba(255,255,255,.15)", borderRadius: "7px", padding: "5px 10px" }}>Sell-in
                  </span>
                  <span style={{ fontSize: "11px", color: "#DDE4F0", background: "rgba(255,255,255,.06)", border: "1px solid rgba(255,255,255,.15)", borderRadius: "7px", padding: "5px 10px" }}>Sell-through
                  </span>
                  <span style={{ fontSize: "11px", color: "#DDE4F0", background: "rgba(255,255,255,.06)", border: "1px solid rgba(255,255,255,.15)", borderRadius: "7px", padding: "5px 10px" }}>Units sold
                  </span>
                  <span style={{ fontSize: "11px", color: "#DDE4F0", background: "rgba(255,255,255,.06)", border: "1px solid rgba(255,255,255,.15)", borderRadius: "7px", padding: "5px 10px" }}>Weeks of supply
                  </span>
                  <span style={{ fontSize: "11px", color: "#DDE4F0", background: "rgba(255,255,255,.06)", border: "1px solid rgba(255,255,255,.15)", borderRadius: "7px", padding: "5px 10px" }}>Stock health
                  </span>
                  <span style={{ fontSize: "11px", color: "#DDE4F0", background: "rgba(255,255,255,.06)", border: "1px solid rgba(255,255,255,.15)", borderRadius: "7px", padding: "5px 10px" }}>Out-of-stock demand
                  </span>
                  <span style={{ fontSize: "11px", color: "#DDE4F0", background: "rgba(255,255,255,.06)", border: "1px solid rgba(255,255,255,.15)", borderRadius: "7px", padding: "5px 10px" }}>Warranty activations
                  </span>
                  <span style={{ fontSize: "11px", color: "#DDE4F0", background: "rgba(255,255,255,.06)", border: "1px solid rgba(255,255,255,.15)", borderRadius: "7px", padding: "5px 10px" }}>Presentations
                  </span>
                  <span style={{ fontSize: "11px", color: "#DDE4F0", background: "rgba(255,255,255,.06)", border: "1px solid rgba(255,255,255,.15)", borderRadius: "7px", padding: "5px 10px" }}>Wishlists
                  </span>
                  <span style={{ fontSize: "11px", color: "#DDE4F0", background: "rgba(255,255,255,.06)", border: "1px solid rgba(255,255,255,.15)", borderRadius: "7px", padding: "5px 10px" }}>Inquiries
                  </span>
                  <span style={{ fontSize: "11px", color: "#DDE4F0", background: "rgba(255,255,255,.06)", border: "1px solid rgba(255,255,255,.15)", borderRadius: "7px", padding: "5px 10px" }}>Availability requests
                  </span>
                  <span style={{ fontSize: "11px", color: "#DDE4F0", background: "rgba(255,255,255,.06)", border: "1px solid rgba(255,255,255,.15)", borderRadius: "7px", padding: "5px 10px" }}>Conversion
                  </span>
                  <span style={{ fontSize: "11px", color: "#DDE4F0", background: "rgba(255,255,255,.06)", border: "1px solid rgba(255,255,255,.15)", borderRadius: "7px", padding: "5px 10px" }}>Visibility score
                  </span>
                  <span style={{ fontSize: "11px", color: "#DDE4F0", background: "rgba(255,255,255,.06)", border: "1px solid rgba(255,255,255,.15)", borderRadius: "7px", padding: "5px 10px" }}>Market momentum
                  </span>
                </div>
                <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "8.5px", letterSpacing: ".07em", color: "#7fd4de", margin: "18px 0 8px" }}>COMPARE WHERE PERMISSIONS & SAMPLE SIZE ALLOW
                </div>
                <div style={{ fontSize: "12px", color: "#9fb0cc", lineHeight: "1.5" }}>Countries · regions · collections · item types · price ranges · time periods · authorised retailer groups
                </div>
              </div>
              <div style={{ flex: "1", minWidth: "280px", background: "rgba(255,255,255,.05)", border: "1px solid rgba(255,255,255,.14)", borderRadius: "16px", padding: "20px" }}>
                <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "8.5px", letterSpacing: ".07em", color: "#7fd4de", marginBottom: "12px" }}>DECISIONS IT SUPPORTS
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "9px" }}>
                  <div style={{ display: "flex", gap: "8px", fontSize: "12.5px", color: "#EAF0FB", lineHeight: "1.4" }}>
                    <span style={{ color: "#33D6A4", flexShrink: "0" }}>›
                    </span>Which products need more availability?
                  </div>
                  <div style={{ display: "flex", gap: "8px", fontSize: "12.5px", color: "#EAF0FB", lineHeight: "1.4" }}>
                    <span style={{ color: "#33D6A4", flexShrink: "0" }}>›
                    </span>Which markets show rising demand?
                  </div>
                  <div style={{ display: "flex", gap: "8px", fontSize: "12.5px", color: "#EAF0FB", lineHeight: "1.4" }}>
                    <span style={{ color: "#33D6A4", flexShrink: "0" }}>›
                    </span>Which products generate interest but don’t convert?
                  </div>
                  <div style={{ display: "flex", gap: "8px", fontSize: "12.5px", color: "#EAF0FB", lineHeight: "1.4" }}>
                    <span style={{ color: "#33D6A4", flexShrink: "0" }}>›
                    </span>Which products are rarely presented?
                  </div>
                  <div style={{ display: "flex", gap: "8px", fontSize: "12.5px", color: "#EAF0FB", lineHeight: "1.4" }}>
                    <span style={{ color: "#33D6A4", flexShrink: "0" }}>›
                    </span>Which collections need retailer support?
                  </div>
                  <div style={{ display: "flex", gap: "8px", fontSize: "12.5px", color: "#EAF0FB", lineHeight: "1.4" }}>
                    <span style={{ color: "#33D6A4", flexShrink: "0" }}>›
                    </span>Where should inventory be allocated?
                  </div>
                </div>
              </div>
            </div>
            <div style={{ display: "flex", gap: "10px", alignItems: "flex-start", marginTop: "18px", background: "rgba(255,255,255,.06)", border: "1px solid rgba(255,255,255,.16)", borderLeft: "3px solid #33D6A4", borderRadius: "0 12px 12px 0", padding: "13px 16px" }}>
              <span style={{ fontSize: "13px", color: "#EAF0FB", lineHeight: "1.5", fontWeight: "600" }}>Better context for planning — not a promise of perfect forecasting.
              </span>
            </div>
          </div>
        </div>
        <div style={{ background: "#fff", padding: "74px 24px" }}>
          <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap" }}>
              <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "10.5px", letterSpacing: ".14em", color: "#2C8C99", textTransform: "uppercase" }}>Before the order
              </div>
              <span style={{ fontSize: "9.5px", fontWeight: "700", color: "#8a6d1f", background: "#FBF3D9", border: "1px solid #EAD9A0", borderRadius: "20px", padding: "4px 11px" }}>Available through selected workflows
              </span>
            </div>
            <h2 style={{ fontSize: "28px", fontWeight: "800", color: "#1F2B4D", lineHeight: "1.16", letterSpacing: "-.01em", margin: "12px 0 0" }}>Understand early product reactions before committing more inventory.
            </h2>
            <p style={{ fontSize: "14.5px", color: "#667085", lineHeight: "1.6", margin: "13px 0 0", maxWidth: "620px" }}>Collect structured, aggregated feedback from authorised retail teams and customer journeys before formal retailer orders or larger allocation decisions.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "7px", marginTop: "18px" }}>
              <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "12px", color: "#3a4358", background: "#F4F6FA", border: "1px solid #E4EAF1", borderRadius: "8px", padding: "6px 11px" }}>
                <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#2C8C99" }}></span>Positive reactions
              </span>
              <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "12px", color: "#3a4358", background: "#F4F6FA", border: "1px solid #E4EAF1", borderRadius: "8px", padding: "6px 11px" }}>
                <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#2C8C99" }}></span>Negative reactions
              </span>
              <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "12px", color: "#3a4358", background: "#F4F6FA", border: "1px solid #E4EAF1", borderRadius: "8px", padding: "6px 11px" }}>
                <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#2C8C99" }}></span>Wishlist interest
              </span>
              <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "12px", color: "#3a4358", background: "#F4F6FA", border: "1px solid #E4EAF1", borderRadius: "8px", padding: "6px 11px" }}>
                <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#2C8C99" }}></span>Inquiries
              </span>
              <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "12px", color: "#3a4358", background: "#F4F6FA", border: "1px solid #E4EAF1", borderRadius: "8px", padding: "6px 11px" }}>
                <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#2C8C99" }}></span>Presentation requests
              </span>
              <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "12px", color: "#3a4358", background: "#F4F6FA", border: "1px solid #E4EAF1", borderRadius: "8px", padding: "6px 11px" }}>
                <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#2C8C99" }}></span>Comparisons
              </span>
              <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "12px", color: "#3a4358", background: "#F4F6FA", border: "1px solid #E4EAF1", borderRadius: "8px", padding: "6px 11px" }}>
                <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#2C8C99" }}></span>Availability requests
              </span>
              <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "12px", color: "#3a4358", background: "#F4F6FA", border: "1px solid #E4EAF1", borderRadius: "8px", padding: "6px 11px" }}>
                <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#2C8C99" }}></span>Market-level interest
              </span>
              <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "12px", color: "#3a4358", background: "#F4F6FA", border: "1px solid #E4EAF1", borderRadius: "8px", padding: "6px 11px" }}>
                <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#2C8C99" }}></span>Price-range response
              </span>
            </div>
            <div style={{ display: "flex", gap: "10px", alignItems: "flex-start", marginTop: "18px", background: "#F8FAFC", border: "1px solid #D9E0EC", borderLeft: "3px solid #2C8C99", borderRadius: "0 12px 12px 0", padding: "13px 16px" }}>
              <span style={{ fontSize: "13px", color: "#1F2B4D", lineHeight: "1.5", fontWeight: "600" }}>Read as early product feedback and demand signals — not a live forecast.
              </span>
            </div>
          </div>
        </div>
        <div style={{ background: "#F9FAFB", padding: "74px 24px" }}>
          <div style={{ maxWidth: "1120px", margin: "0 auto" }}>
            <div style={{ maxWidth: "740px" }}>
              <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "10.5px", letterSpacing: ".14em", color: "#2C8C99", textTransform: "uppercase" }}>Permission-controlled collaboration
              </div>
              <h2 style={{ fontSize: "28px", fontWeight: "800", color: "#1F2B4D", lineHeight: "1.16", letterSpacing: "-.01em", margin: "12px 0 0" }}>Useful insight without unrestricted data access.
              </h2>
              <p style={{ fontSize: "14.5px", color: "#667085", lineHeight: "1.6", margin: "13px 0 0", maxWidth: "620px" }}>AXY shares only the information required for an approved workflow. Broader product and market intelligence can use aggregated or anonymised signals rather than identifiable customer or retailer records.
              </p>
            </div>
            <div style={{ display: "flex", gap: "14px", marginTop: "30px", flexWrap: "wrap" }}>
              <div style={{ flex: "1", minWidth: "240px", background: "#fff", border: "1px solid #8a2f2533", borderTop: "3px solid #8a2f25", borderRadius: "14px", padding: "18px" }}>
                <div style={{ fontSize: "13.5px", fontWeight: "800", color: "#1F2B4D" }}>Private brand info
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "5px", marginTop: "10px" }}>
                  <span style={{ fontSize: "11.5px", color: "#5a6473", lineHeight: "1.4" }}>• Cost structure
                  </span>
                  <span style={{ fontSize: "11.5px", color: "#5a6473", lineHeight: "1.4" }}>• Internal forecasts
                  </span>
                  <span style={{ fontSize: "11.5px", color: "#5a6473", lineHeight: "1.4" }}>• Production info
                  </span>
                  <span style={{ fontSize: "11.5px", color: "#5a6473", lineHeight: "1.4" }}>• Unpublished products
                  </span>
                  <span style={{ fontSize: "11.5px", color: "#5a6473", lineHeight: "1.4" }}>• Commercial terms
                  </span>
                </div>
              </div>
              <div style={{ flex: "1", minWidth: "240px", background: "#fff", border: "1px solid #8a2f2533", borderTop: "3px solid #8a2f25", borderRadius: "14px", padding: "18px" }}>
                <div style={{ fontSize: "13.5px", fontWeight: "800", color: "#1F2B4D" }}>Private retailer info
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "5px", marginTop: "10px" }}>
                  <span style={{ fontSize: "11.5px", color: "#5a6473", lineHeight: "1.4" }}>• Customer identities
                  </span>
                  <span style={{ fontSize: "11.5px", color: "#5a6473", lineHeight: "1.4" }}>• Internal notes
                  </span>
                  <span style={{ fontSize: "11.5px", color: "#5a6473", lineHeight: "1.4" }}>• Retailer margins
                  </span>
                  <span style={{ fontSize: "11.5px", color: "#5a6473", lineHeight: "1.4" }}>• Employee performance
                  </span>
                  <span style={{ fontSize: "11.5px", color: "#5a6473", lineHeight: "1.4" }}>• Buying strategy
                  </span>
                </div>
              </div>
              <div style={{ flex: "1", minWidth: "240px", background: "#F3F8F8", border: "1px solid #2C8C9933", borderTop: "3px solid #2C8C99", borderRadius: "14px", padding: "18px" }}>
                <div style={{ fontSize: "13.5px", fontWeight: "800", color: "#1F2B4D" }}>Approved workflow
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "5px", marginTop: "10px" }}>
                  <span style={{ fontSize: "11.5px", color: "#5a6473", lineHeight: "1.4" }}>• Catalogue update
                  </span>
                  <span style={{ fontSize: "11.5px", color: "#5a6473", lineHeight: "1.4" }}>• Availability request
                  </span>
                  <span style={{ fontSize: "11.5px", color: "#5a6473", lineHeight: "1.4" }}>• Structured order
                  </span>
                  <span style={{ fontSize: "11.5px", color: "#5a6473", lineHeight: "1.4" }}>• Warranty activation
                  </span>
                  <span style={{ fontSize: "11.5px", color: "#5a6473", lineHeight: "1.4" }}>• Approved service request
                  </span>
                </div>
              </div>
              <div style={{ flex: "1", minWidth: "240px", background: "#F1F8F3", border: "1px solid #1B7F4B33", borderTop: "3px solid #1B7F4B", borderRadius: "14px", padding: "18px" }}>
                <div style={{ fontSize: "13.5px", fontWeight: "800", color: "#1F2B4D" }}>Aggregated insight
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "5px", marginTop: "10px" }}>
                  <span style={{ fontSize: "11.5px", color: "#5a6473", lineHeight: "1.4" }}>• Product interest
                  </span>
                  <span style={{ fontSize: "11.5px", color: "#5a6473", lineHeight: "1.4" }}>• Wishlist rate
                  </span>
                  <span style={{ fontSize: "11.5px", color: "#5a6473", lineHeight: "1.4" }}>• Market demand
                  </span>
                  <span style={{ fontSize: "11.5px", color: "#5a6473", lineHeight: "1.4" }}>• Conversion
                  </span>
                  <span style={{ fontSize: "11.5px", color: "#5a6473", lineHeight: "1.4" }}>• Presentation rate
                  </span>
                </div>
              </div>
            </div>
            <div style={{ display: "flex", gap: "10px", alignItems: "flex-start", marginTop: "18px", background: "#fff", border: "1px solid #D9E0EC", borderLeft: "3px solid #2C8C99", borderRadius: "0 12px 12px 0", padding: "14px 16px" }}>
              <span style={{ color: "#2C8C99", flexShrink: "0" }}>🛡
              </span>
              <span style={{ fontSize: "13px", color: "#1F2B4D", lineHeight: "1.5", fontWeight: "600" }}>Retailer customer information is not automatically shared with brands.
              </span>
            </div>
            <div style={{ marginTop: "14px" }}>
              <a className="hv79" href="/book-a-walkthrough" style={{ display: "inline-flex", padding: "11px 20px", background: "#32415C", color: "#fff", borderRadius: "9px", fontSize: "13.5px", fontWeight: "700" }}>Review your data setup with us
              </a>
              <p style={{ fontSize: "12px", color: "#8a94a6", lineHeight: "1.5", margin: "10px 0 0", maxWidth: "520px" }}>Book a call to review what information is connected, what remains private and which insights may be aggregated or anonymised.
              </p>
            </div>
          </div>
        </div>
        <div style={{ background: "#fff", padding: "74px 24px" }}>
          <div style={{ maxWidth: "1000px", margin: "0 auto", textAlign: "center" }}>
            <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "10.5px", letterSpacing: ".14em", color: "#2C8C99", textTransform: "uppercase" }}>Connect existing systems
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <h2 style={{ fontSize: "28px", fontWeight: "800", color: "#1F2B4D", lineHeight: "1.16", letterSpacing: "-.01em", margin: "12px 0 0" }}>Keep your ERP, PIM and order systems — and connect the retailer-facing workflow.
              </h2>
            </div>
            <p style={{ fontSize: "14.5px", color: "#667085", lineHeight: "1.6", margin: "13px 0 0", maxWidth: "620px" }}>AXY can work independently or connect existing manufacturer systems to support catalogue distribution, availability, orders, warranties and analytics.
            </p>
          </div>
          <div style={{ maxWidth: "1000px", margin: "28px auto 0", background: "#F8FAFC", border: "1px solid #E4EAF1", borderRadius: "16px", padding: "22px" }}>
            <div className="br-flow" style={{ display: "flex", gap: "12px", alignItems: "center", justifyContent: "center", flexWrap: "wrap" }}>
              <div style={{ flex: "1", minWidth: "150px", background: "#fff", border: "1px solid #E4EAF1", borderRadius: "12px", padding: "14px", textAlign: "center" }}>
                <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "8px", letterSpacing: ".07em", color: "#667085" }}>MANUFACTURER SYSTEMS
                </div>
                <div style={{ fontSize: "11.5px", fontWeight: "700", color: "#1F2B4D", marginTop: "6px", lineHeight: "1.4" }}>ERP · PIM · PLM · CRM · OMS · Inventory · Warranty · E-commerce · BI
                </div>
              </div>
              <span className="br-flow-arrow" style={{ color: "#B7C2D6", fontSize: "18px" }}>⇄
              </span>
              <div style={{ flex: ".9", minWidth: "140px", background: "linear-gradient(160deg,#26324f,#161f38)", borderRadius: "12px", padding: "14px", textAlign: "center" }}>
                <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "8px", letterSpacing: ".07em", color: "#7fd4de" }}>AXY COLLABORATION LAYER
                </div>
              </div>
              <span className="br-flow-arrow" style={{ color: "#B7C2D6", fontSize: "18px" }}>⇄
              </span>
              <div style={{ flex: "1", minWidth: "150px", background: "#fff", border: "1px solid #E4EAF1", borderRadius: "12px", padding: "14px", textAlign: "center" }}>
                <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "8px", letterSpacing: ".07em", color: "#2C8C99" }}>AUTHORISED RETAIL NETWORK
                </div>
              </div>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", justifyContent: "center", marginTop: "16px" }}>
              <span style={{ fontSize: "11.5px", color: "#3a4358", background: "#fff", border: "1px solid #E4EAF1", borderRadius: "20px", padding: "6px 13px" }}>API connection
              </span>
              <span style={{ fontSize: "11.5px", color: "#3a4358", background: "#fff", border: "1px solid #E4EAF1", borderRadius: "20px", padding: "6px 13px" }}>Scheduled synchronisation
              </span>
              <span style={{ fontSize: "11.5px", color: "#3a4358", background: "#fff", border: "1px solid #E4EAF1", borderRadius: "20px", padding: "6px 13px" }}>Structured import / export
              </span>
              <span style={{ fontSize: "11.5px", color: "#3a4358", background: "#fff", border: "1px solid #E4EAF1", borderRadius: "20px", padding: "6px 13px" }}>Custom integration
              </span>
            </div>
            <p style={{ fontSize: "12px", color: "#8a94a6", lineHeight: "1.55", margin: "16px auto 0", maxWidth: "640px", textAlign: "center" }}>Exact method, direction and frequency depend on available source APIs, data quality, business purpose, permission model, update frequency and error-handling requirements.
            </p>
          </div>
          <div style={{ textAlign: "center", marginTop: "20px" }}>
            <a href="/integrations" style={{ fontSize: "13.5px", fontWeight: "700", color: "#2C8C99" }}>Explore integrations →
            </a>
          </div>
        </div>
        <div style={{ background: "#F9FAFB", padding: "74px 24px" }}>
          <div style={{ maxWidth: "1120px", margin: "0 auto" }}>
            <div style={{ maxWidth: "740px" }}>
              <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "10.5px", letterSpacing: ".14em", color: "#2C8C99", textTransform: "uppercase" }}>Start with one workflow. Scale across markets.
              </div>
              <h2 style={{ fontSize: "28px", fontWeight: "800", color: "#1F2B4D", lineHeight: "1.16", letterSpacing: "-.01em", margin: "12px 0 0" }}>From emerging brands to international retail networks.
              </h2>
            </div>
            <div className="br-three" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "14px", marginTop: "30px" }}>
              <div style={{ background: "#fff", border: "1px solid #E4E8EF", borderRadius: "16px", padding: "22px" }}>
                <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "10px", color: "#2C8C99" }}>01
                </div>
                <div style={{ fontSize: "16px", fontWeight: "800", color: "#1F2B4D", marginTop: "8px" }}>Emerging brand
                </div>
                <p style={{ fontSize: "12.5px", color: "#667085", lineHeight: "1.55", margin: "9px 0 0" }}>Start with structured catalogues, selected retailer connections, announcements and manual availability workflows.
                </p>
              </div>
              <div style={{ background: "#fff", border: "1px solid #E4E8EF", borderRadius: "16px", padding: "22px" }}>
                <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "10px", color: "#2C8C99" }}>02
                </div>
                <div style={{ fontSize: "16px", fontWeight: "800", color: "#1F2B4D", marginTop: "8px" }}>Established regional brand
                </div>
                <p style={{ fontSize: "12.5px", color: "#667085", lineHeight: "1.55", margin: "9px 0 0" }}>Coordinate catalogues, pricing, retailer relationships, orders, warranties and market-level reporting across several countries.
                </p>
              </div>
              <div style={{ background: "#fff", border: "1px solid #E4E8EF", borderRadius: "16px", padding: "22px" }}>
                <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "10px", color: "#2C8C99" }}>03
                </div>
                <div style={{ fontSize: "16px", fontWeight: "800", color: "#1F2B4D", marginTop: "8px" }}>Global manufacturer
                </div>
                <p style={{ fontSize: "12.5px", color: "#667085", lineHeight: "1.55", margin: "9px 0 0" }}>Connect existing systems, business units, distributors and retail partners through phased implementation and market-specific permissions.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div style={{ background: "#fff", padding: "74px 24px" }}>
          <div style={{ maxWidth: "1120px", margin: "0 auto" }}>
            <div style={{ maxWidth: "740px" }}>
              <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "10.5px", letterSpacing: ".14em", color: "#2C8C99", textTransform: "uppercase" }}>How to start
              </div>
              <h2 style={{ fontSize: "28px", fontWeight: "800", color: "#1F2B4D", lineHeight: "1.16", letterSpacing: "-.01em", margin: "12px 0 0" }}>Begin with the workflow that creates the most value.
              </h2>
            </div>
            <div className="br-four" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "14px", marginTop: "30px" }}>
              <div style={{ background: "#F8FAFC", border: "1px solid #E4EAF1", borderRadius: "14px", padding: "20px", position: "relative" }}>
                <div style={{ width: "28px", height: "28px", borderRadius: "50%", background: "#EAF6F6", color: "#2C8C99", fontFamily: "'Roboto Mono',monospace", fontSize: "12px", fontWeight: "700", display: "flex", alignItems: "center", justifyContent: "center" }}>1
                </div>
                <div style={{ fontSize: "14px", fontWeight: "800", color: "#1F2B4D", marginTop: "12px", lineHeight: "1.25" }}>Map the retail network
                </div>
                <p style={{ fontSize: "12px", color: "#667085", lineHeight: "1.5", margin: "8px 0 0" }}>Review markets, retailers, distributors, business units and existing systems.
                </p>
              </div>
              <div style={{ background: "#F8FAFC", border: "1px solid #E4EAF1", borderRadius: "14px", padding: "20px", position: "relative" }}>
                <div style={{ width: "28px", height: "28px", borderRadius: "50%", background: "#EAF6F6", color: "#2C8C99", fontFamily: "'Roboto Mono',monospace", fontSize: "12px", fontWeight: "700", display: "flex", alignItems: "center", justifyContent: "center" }}>2
                </div>
                <div style={{ fontSize: "14px", fontWeight: "800", color: "#1F2B4D", marginTop: "12px", lineHeight: "1.25" }}>Choose the first workflow
                </div>
                <p style={{ fontSize: "12px", color: "#667085", lineHeight: "1.5", margin: "8px 0 0" }}>Catalogue, availability, orders, warranty, announcements or product intelligence.
                </p>
              </div>
              <div style={{ background: "#F8FAFC", border: "1px solid #E4EAF1", borderRadius: "14px", padding: "20px", position: "relative" }}>
                <div style={{ width: "28px", height: "28px", borderRadius: "50%", background: "#EAF6F6", color: "#2C8C99", fontFamily: "'Roboto Mono',monospace", fontSize: "12px", fontWeight: "700", display: "flex", alignItems: "center", justifyContent: "center" }}>3
                </div>
                <div style={{ fontSize: "14px", fontWeight: "800", color: "#1F2B4D", marginTop: "12px", lineHeight: "1.25" }}>Define data & permissions
                </div>
                <p style={{ fontSize: "12px", color: "#667085", lineHeight: "1.5", margin: "8px 0 0" }}>Agree what stays private, what is shared and which insights may be aggregated.
                </p>
              </div>
              <div style={{ background: "#F8FAFC", border: "1px solid #E4EAF1", borderRadius: "14px", padding: "20px", position: "relative" }}>
                <div style={{ width: "28px", height: "28px", borderRadius: "50%", background: "#EAF6F6", color: "#2C8C99", fontFamily: "'Roboto Mono',monospace", fontSize: "12px", fontWeight: "700", display: "flex", alignItems: "center", justifyContent: "center" }}>4
                </div>
                <div style={{ fontSize: "14px", fontWeight: "800", color: "#1F2B4D", marginTop: "12px", lineHeight: "1.25" }}>Launch a controlled pilot
                </div>
                <p style={{ fontSize: "12px", color: "#667085", lineHeight: "1.5", margin: "8px 0 0" }}>Start with selected markets or retail partners before expanding the network.
                </p>
              </div>
            </div>
            <div style={{ display: "flex", gap: "10px", alignItems: "flex-start", marginTop: "18px", background: "#F8FAFC", border: "1px solid #D9E0EC", borderLeft: "3px solid #2C8C99", borderRadius: "0 12px 12px 0", padding: "13px 16px" }}>
              <span style={{ fontSize: "13px", color: "#1F2B4D", lineHeight: "1.5", fontWeight: "600" }}>A complete enterprise integration is not required before the first AXY workflow can begin.
              </span>
            </div>
          </div>
        </div>
        <div style={{ background: "#F9FAFB", padding: "74px 24px" }}>
          <div className="br-row" style={{ maxWidth: "1120px", margin: "0 auto", display: "flex", gap: "48px", alignItems: "center", flexWrap: "wrap" }}>
            <div style={{ flex: "1.05", minWidth: "300px" }}>
              <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "10.5px", letterSpacing: ".14em", color: "#2C8C99", textTransform: "uppercase" }}>Built from retail reality
              </div>
              <h2 style={{ fontSize: "28px", fontWeight: "800", color: "#1F2B4D", lineHeight: "1.16", letterSpacing: "-.01em", margin: "12px 0 0" }}>Designed around the connection between brands, retailers and customers.
              </h2>
              <p style={{ fontSize: "14.5px", color: "#667085", lineHeight: "1.6", margin: "13px 0 0", maxWidth: "620px" }}>AXY was developed around real premium-retail workflows including catalogue management, product presentations, availability, orders, warranties, customer follow-up and multi-location operations.
              </p>
              <div style={{ display: "flex", gap: "10px", alignItems: "flex-start", marginTop: "18px", background: "#fff", border: "1px solid #E4EAF1", borderRadius: "12px", padding: "14px 16px" }}>
                <span style={{ fontSize: "13px", color: "#1F2B4D", lineHeight: "1.5" }}>Designed and tested inside a real multi-location premium retail environment.
                </span>
              </div>
            </div>
            <div style={{ flex: "1", minWidth: "280px" }}>
              <div style={{ borderRadius: "14px", overflow: "hidden", border: "1px solid #D9E0EC", boxShadow: "0 18px 42px rgba(31,43,77,.14)", background: "#fff" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "6px", padding: "9px 12px", background: "#F2F5F9", borderBottom: "1px solid #E4EAF1" }}>
                  <span style={{ width: "9px", height: "9px", borderRadius: "50%", background: "#E0655A" }}></span>
                  <span style={{ width: "9px", height: "9px", borderRadius: "50%", background: "#E9B45C" }}></span>
                  <span style={{ width: "9px", height: "9px", borderRadius: "50%", background: "#5FBB7E" }}></span>
                </div>
                <div style={{ position: "relative", aspectRatio: "16/10", background: "#EEF2F7" }}>
                  <img src="/images/backoffice-wide-orders.jpg" alt="AXY analytics interface built from real premium-retail operations" loading="lazy" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ background: "#fff", padding: "70px 24px" }}>
          <div style={{ maxWidth: "1120px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", maxWidth: "740px", margin: "0 auto" }}>
              <h2 style={{ fontSize: "28px", fontWeight: "800", color: "#1F2B4D", lineHeight: "1.16", letterSpacing: "-.01em", margin: "12px 0 0" }}>Align the network. Act on demand. Keep control.
              </h2>
            </div>
            <div className="br-four" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "14px", marginTop: "30px" }}>
              <div style={{ background: "#F8FAFC", border: "1px solid #E4E8EF", borderRadius: "14px", padding: "20px" }}>
                <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "10px", color: "#2C8C99" }}>01
                </div>
                <div style={{ fontSize: "13px", fontWeight: "700", color: "#1F2B4D", marginTop: "8px", lineHeight: "1.35" }}>Keep authorised retailers and product information current
                </div>
              </div>
              <div style={{ background: "#F8FAFC", border: "1px solid #E4E8EF", borderRadius: "14px", padding: "20px" }}>
                <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "10px", color: "#2C8C99" }}>02
                </div>
                <div style={{ fontSize: "13px", fontWeight: "700", color: "#1F2B4D", marginTop: "8px", lineHeight: "1.35" }}>Coordinate availability and orders more efficiently
                </div>
              </div>
              <div style={{ background: "#F8FAFC", border: "1px solid #E4E8EF", borderRadius: "14px", padding: "20px" }}>
                <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "10px", color: "#2C8C99" }}>03
                </div>
                <div style={{ fontSize: "13px", fontWeight: "700", color: "#1F2B4D", marginTop: "8px", lineHeight: "1.35" }}>Understand market demand beyond sell-in
                </div>
              </div>
              <div style={{ background: "#F8FAFC", border: "1px solid #E4E8EF", borderRadius: "14px", padding: "20px" }}>
                <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "10px", color: "#2C8C99" }}>04
                </div>
                <div style={{ fontSize: "13px", fontWeight: "700", color: "#1F2B4D", marginTop: "8px", lineHeight: "1.35" }}>Protect retailer and customer relationships
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ background: "#F9FAFB", padding: "74px 24px" }}>
          <div style={{ maxWidth: "900px", margin: "0 auto" }}>
            <div style={{ maxWidth: "740px" }}>
              <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "10.5px", letterSpacing: ".14em", color: "#2C8C99", textTransform: "uppercase" }}>Questions from brands and manufacturers
              </div>
              <h2 style={{ fontSize: "28px", fontWeight: "800", color: "#1F2B4D", lineHeight: "1.16", letterSpacing: "-.01em", margin: "12px 0 0" }}>Clear answers for commercial and technology teams.
              </h2>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginTop: "28px" }}>
              <div style={{ background: "#fff", border: "1px solid #E4EAF1", borderRadius: "14px", padding: "18px 20px" }}>
                <div style={{ fontSize: "14.5px", fontWeight: "800", color: "#1F2B4D" }}>How can brands share product catalogues with retailers?
                </div>
                <p style={{ fontSize: "13px", color: "#667085", lineHeight: "1.6", margin: "8px 0 0" }}>Brands can create or connect structured product catalogues and publish approved collections, images, specifications, documents and pricing to authorised retail partners. Retailers review and import the products or updates relevant to their business.
                </p>
              </div>
              <div style={{ background: "#fff", border: "1px solid #E4EAF1", borderRadius: "14px", padding: "18px 20px" }}>
                <div style={{ fontSize: "14.5px", fontWeight: "800", color: "#1F2B4D" }}>Can AXY connect with our ERP or PIM?
                </div>
                <p style={{ fontSize: "13px", color: "#667085", lineHeight: "1.6", margin: "8px 0 0" }}>Yes. AXY can work independently or connect to existing ERP, PIM, inventory and order systems through APIs, scheduled synchronisation, structured imports or custom integrations. The exact scope depends on the connected system.
                </p>
              </div>
              <div style={{ background: "#fff", border: "1px solid #E4EAF1", borderRadius: "14px", padding: "18px 20px" }}>
                <div style={{ fontSize: "14.5px", fontWeight: "800", color: "#1F2B4D" }}>Can retailers approve product and price updates?
                </div>
                <p style={{ fontSize: "13px", color: "#667085", lineHeight: "1.6", margin: "8px 0 0" }}>Yes. Retailers can review relevant catalogue and commercial changes before accepting them, unless an approved automatic synchronisation has been configured.
                </p>
              </div>
              <div style={{ background: "#fff", border: "1px solid #E4EAF1", borderRadius: "14px", padding: "18px 20px" }}>
                <div style={{ fontSize: "14.5px", fontWeight: "800", color: "#1F2B4D" }}>Does AXY share retailer customer data with brands?
                </div>
                <p style={{ fontSize: "13px", color: "#667085", lineHeight: "1.6", margin: "8px 0 0" }}>Customer-level information is not automatically shared with brands. Any identified information exchange must follow the configured relationship, permissions, consent requirements and agreed purpose.
                </p>
              </div>
              <div style={{ background: "#fff", border: "1px solid #E4EAF1", borderRadius: "14px", padding: "18px 20px" }}>
                <div style={{ fontSize: "14.5px", fontWeight: "800", color: "#1F2B4D" }}>Can brands see what customers wanted but could not buy?
                </div>
                <p style={{ fontSize: "13px", color: "#667085", lineHeight: "1.6", margin: "8px 0 0" }}>AXY can provide approved or aggregated signals such as availability requests, inquiries, wishlists and products requested but unavailable. Visibility depends on the retailer relationship and configured permissions.
                </p>
              </div>
              <div style={{ background: "#fff", border: "1px solid #E4EAF1", borderRadius: "14px", padding: "18px 20px" }}>
                <div style={{ fontSize: "14.5px", fontWeight: "800", color: "#1F2B4D" }}>Does AXY replace our wholesale platform, ERP or PIM?
                </div>
                <p style={{ fontSize: "13px", color: "#667085", lineHeight: "1.6", margin: "8px 0 0" }}>Not necessarily. AXY is designed to connect retailer-facing workflows, customer-interest context and partner collaboration around existing systems.
                </p>
              </div>
              <div style={{ background: "#fff", border: "1px solid #E4EAF1", borderRadius: "14px", padding: "18px 20px" }}>
                <div style={{ fontSize: "14.5px", fontWeight: "800", color: "#1F2B4D" }}>How does warranty activation work?
                </div>
                <p style={{ fontSize: "13px", color: "#667085", lineHeight: "1.6", margin: "8px 0 0" }}>A retailer connects the sold product, serial information and required customer approval to a digital warranty workflow. The brand receives only the information approved and required for registration or service.
                </p>
              </div>
              <div style={{ background: "#fff", border: "1px solid #E4EAF1", borderRadius: "14px", padding: "18px 20px" }}>
                <div style={{ fontSize: "14.5px", fontWeight: "800", color: "#1F2B4D" }}>Can AXY work before a full integration is completed?
                </div>
                <p style={{ fontSize: "13px", color: "#667085", lineHeight: "1.6", margin: "8px 0 0" }}>Yes. A brand can begin with structured imports and selected workflows before implementing deeper system connections.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div style={{ position: "relative", overflow: "hidden", background: "linear-gradient(135deg,#1F2B4D,#32415C 55%,#2C6570)", padding: "76px 24px" }}>
          <div style={{ position: "absolute", bottom: "-120px", right: "-60px", width: "440px", height: "330px", background: "radial-gradient(circle,rgba(51,214,164,.26),transparent 70%)" }}></div>
          <div style={{ position: "relative", maxWidth: "780px", margin: "0 auto", textAlign: "center" }}>
            <h2 style={{ fontSize: "29px", fontWeight: "800", color: "#fff", lineHeight: "1.14" }}>Map the first AXY workflow for your retail network.
            </h2>
            <p style={{ fontSize: "14.5px", color: "#C9D2E4", lineHeight: "1.6", margin: "14px 0 0" }}>Book a call to review your retailer network, product data, current systems and the market information you want to understand. We will explain what can connect, what remains private and how to begin with a controlled rollout.
            </p>
            <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap", marginTop: "24px" }}>
              <a className="hv80" href="/book-a-walkthrough" style={{ display: "inline-flex", padding: "14px 24px", background: "#fff", color: "#1F2B4D", borderRadius: "10px", fontSize: "14.5px", fontWeight: "700" }}>Book a network assessment
              </a>
              <a className="hv81" href="/book-a-walkthrough" style={{ display: "inline-flex", padding: "14px 24px", border: "1.5px solid rgba(255,255,255,.5)", color: "#fff", borderRadius: "10px", fontSize: "14.5px", fontWeight: "600" }}>Get guided setup
              </a>
            </div>
            <div style={{ display: "flex", gap: "18px", justifyContent: "center", flexWrap: "wrap", marginTop: "18px" }}>
              <a className="hv82" href="/integrations" style={{ fontSize: "13px", color: "#9fe0d8" }}>Explore integrations →
              </a>
              <a className="hv83" href="/back-office" style={{ fontSize: "13px", color: "#9fe0d8" }}>Explore Back Office →
              </a>
              <a className="hv84" href="/for-retailers" style={{ fontSize: "13px", color: "#9fe0d8" }}>See how AXY helps retailers →
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
