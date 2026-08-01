import React from 'react';
import { css } from '../lib/css.js';

export default function Resources(v) {
  const { resExplore } = v;
  return (
    <>
      <div data-screen-label="Resources">
        <div style={{ position: "relative", overflow: "hidden", background: "linear-gradient(168deg,#FFFFFF,#F4F7FB)", padding: "70px 24px 60px" }}>
          <div style={{ position: "absolute", top: "-90px", right: "-70px", width: "440px", height: "340px", background: "radial-gradient(circle,rgba(44,140,153,.10),transparent 70%)" }}></div>
          <div className="res-hero" style={{ position: "relative", maxWidth: "1120px", margin: "0 auto", display: "grid", gridTemplateColumns: "1.05fr 1fr", gap: "44px", alignItems: "center" }}>
            <div>
              <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "10.5px", letterSpacing: ".14em", color: "#2C8C99", textTransform: "uppercase" }}>AXY resources
              </div>
              <h1 style={{ fontSize: "38px", fontWeight: "800", color: "#1F2B4D", lineHeight: "1.12", letterSpacing: "-.018em", margin: "14px 0 0" }}>Practical guidance for connected retail.
              </h1>
              <p style={{ fontSize: "15px", color: "#667085", lineHeight: "1.6", margin: "16px 0 0", maxWidth: "560px" }}>Explore expert guides, checklists and examples on clienteling, store operations, customer journeys, product demand and retailer&ndash;brand collaboration.
              </p>
              <div style={{ display: "flex", gap: "12px", marginTop: "24px", flexWrap: "wrap" }}>
                <button className="hv138" type="button" onClick={resExplore} style={{ display: "inline-flex", padding: "13px 22px", background: "#32415C", color: "#fff", border: "none", borderRadius: "10px", fontSize: "14px", fontWeight: "700", cursor: "pointer" }}>Explore the guides
                </button>{' '}
                <a className="hv139" href="/book-a-walkthrough" style={{ display: "inline-flex", padding: "13px 22px", border: "1.5px solid #32415C", color: "#32415C", borderRadius: "10px", fontSize: "14px", fontWeight: "600" }}>Get guided setup
                </a>
              </div>
              <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", marginTop: "18px" }}>
                <a href="/for-retailers" style={{ fontSize: "12.5px", fontWeight: "700", color: "#2C8C99" }}>For retailers
                </a>
                <a href="/for-brands" style={{ fontSize: "12.5px", fontWeight: "700", color: "#2C8C99" }}>For brands &amp; manufacturers
                </a>
                <a href="/sales-app" style={{ fontSize: "12.5px", fontWeight: "700", color: "#2C8C99" }}>For sales &amp; operations teams
                </a>
              </div>
            </div>
            <div className="res-collage" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px" }}>
              <div style={{ gridRow: "span 2", background: "linear-gradient(160deg,#20304F,#121B34)", borderRadius: "16px", padding: "20px", color: "#fff", display: "flex", flexDirection: "column", justifyContent: "space-between", minHeight: "200px", boxShadow: "0 18px 40px rgba(31,43,77,.22)" }}>
                <span style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "8.5px", letterSpacing: ".12em", color: "#7fd4de" }}>FEATURED GUIDE
                </span>
                <div style={{ fontSize: "17px", fontWeight: "800", lineHeight: "1.25" }}>The connected-retail clienteling guide
                </div>
                <span style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "9px", color: "#9fb0cc" }}>9 MIN &middot; GUIDE
                </span>
              </div>
              <div style={{ background: "#fff", border: "1px solid #E4E8EF", borderRadius: "14px", padding: "16px" }}>
                <span style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "8px", letterSpacing: ".1em", color: "#8a94a6" }}>WORKFLOW
                </span>
                <div style={{ display: "flex", alignItems: "center", gap: "5px", marginTop: "10px", flexWrap: "wrap" }}>
                  <span style={{ width: "22px", height: "22px", borderRadius: "6px", background: "#EEF1F7" }}></span>
                  <span style={{ color: "#2C8C99" }}>&rarr;
                  </span>
                  <span style={{ width: "22px", height: "22px", borderRadius: "6px", background: "#EAF6F6" }}></span>
                  <span style={{ color: "#2C8C99" }}>&rarr;
                  </span>
                  <span style={{ width: "22px", height: "22px", borderRadius: "6px", background: "#33D6A4" }}></span>
                </div>
                <div style={{ fontSize: "11px", color: "#667085", marginTop: "9px", lineHeight: "1.4" }}>Visit &rarr; interest &rarr; follow-up
                </div>
              </div>
              <div style={{ background: "#fff", border: "1px solid #E4E8EF", borderRadius: "14px", padding: "16px" }}>
                <span style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "8px", letterSpacing: ".1em", color: "#8a94a6" }}>CHECKLIST
                </span>
                <div style={{ display: "flex", flexDirection: "column", gap: "5px", marginTop: "10px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                    <span style={{ width: "12px", height: "12px", borderRadius: "3px", background: "#EAF6F6", border: "1px solid #2C8C99", display: "flex", alignItems: "center", justifyContent: "center", color: "#2C8C99", fontSize: "8px" }}>&check;
                    </span>
                    <span style={{ flex: "1", height: "5px", borderRadius: "3px", background: "#EEF1F7" }}></span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                    <span style={{ width: "12px", height: "12px", borderRadius: "3px", background: "#EAF6F6", border: "1px solid #2C8C99", display: "flex", alignItems: "center", justifyContent: "center", color: "#2C8C99", fontSize: "8px" }}>&check;
                    </span>
                    <span style={{ flex: "1", height: "5px", borderRadius: "3px", background: "#EEF1F7" }}></span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                    <span style={{ width: "12px", height: "12px", borderRadius: "3px", background: "#EAF6F6", border: "1px solid #2C8C99", display: "flex", alignItems: "center", justifyContent: "center", color: "#2C8C99", fontSize: "8px" }}>&check;
                    </span>
                    <span style={{ flex: "1", height: "5px", borderRadius: "3px", background: "#EEF1F7" }}></span>
                  </div>
                </div>
              </div>
            </div>
            <div className="res-collage-chart" style={{ gridColumn: "2", marginTop: "-4px" }}>
              <div style={{ background: "#fff", border: "1px solid #E4E8EF", borderRadius: "14px", padding: "16px" }}>
                <span style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "8px", letterSpacing: ".1em", color: "#8a94a6" }}>PRODUCT DEMAND
                </span>
                <div style={{ display: "flex", alignItems: "flex-end", gap: "8px", height: "56px", marginTop: "12px" }}>
                  <div style={{ flex: "1", height: "38%", borderRadius: "5px 5px 0 0", background: "#2C8C99", opacity: "0.55" }}></div>
                  <div style={{ flex: "1", height: "60%", borderRadius: "5px 5px 0 0", background: "#2C8C99", opacity: "0.55" }}></div>
                  <div style={{ flex: "1", height: "30%", borderRadius: "5px 5px 0 0", background: "#2C8C99", opacity: "0.55" }}></div>
                  <div style={{ flex: "1", height: "72%", borderRadius: "5px 5px 0 0", background: "#33D6A4", opacity: "1" }}></div>
                  <div style={{ flex: "1", height: "48%", borderRadius: "5px 5px 0 0", background: "#2C8C99", opacity: "0.55" }}></div>
                </div>
                <div style={{ fontSize: "11px", color: "#667085", marginTop: "9px" }}>Shown vs sold &middot; interest before the transaction
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="axy-res-start" style={{ background: "#F9FAFB", padding: "66px 24px", scrollMarginTop: "72px" }}>
          <div style={{ maxWidth: "1120px", margin: "0 auto" }}>
            <div style={{ maxWidth: "640px" }}>
              <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "10.5px", letterSpacing: ".14em", color: "#2C8C99", textTransform: "uppercase" }}>Start here
              </div>
              <h2 style={{ fontSize: "28px", fontWeight: "800", color: "#1F2B4D", lineHeight: "1.16", margin: "12px 0 0" }}>Understand the foundations of connected retail.
              </h2>
            </div>
            <div className="res-start" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "16px", marginTop: "28px" }}>
              <a className="hv140" href="/article" style={{ display: "flex", flexDirection: "column", background: "#fff", border: "1px solid #E4E8EF", borderRadius: "16px", padding: "22px", textDecoration: "none" }}>
                <span style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "9px", letterSpacing: ".1em", color: "#2C8C99", textTransform: "uppercase" }}>Guide
                </span>
                <div style={{ fontSize: "16.5px", fontWeight: "800", color: "#1F2B4D", lineHeight: "1.28", marginTop: "10px" }}>What is retail clienteling&mdash;and why customer records alone are not enough?
                </div>
                <p style={{ fontSize: "13px", color: "#667085", lineHeight: "1.55", margin: "9px 0 0", flex: "1" }}>Understand how customer context, store visits, product interest and reliable follow-up work together.
                </p>
                <div style={{ fontSize: "11.5px", color: "#8a94a6", marginTop: "12px" }}>For Retail owners, managers &amp; sales leaders
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", alignItems: "center", fontFamily: "'Roboto Mono',monospace", fontSize: "9px", letterSpacing: ".05em", color: "#8a94a6", textTransform: "uppercase", marginTop: "12px" }}>
                  <span style={{ color: "#1C6470", background: "#EAF6F6", border: "1px solid #CDE7E6", borderRadius: "6px", padding: "3px 7px" }}>Guide
                  </span>
                  <span>9 min read
                  </span>
                  <span>&middot;
                  </span>
                  <span>Updated Jun 2026
                  </span>
                </div>
                <div style={{ fontSize: "11px", color: "#9aa3b2", marginTop: "8px" }}>By AXY Retail Team
                </div>
                <div style={{ fontSize: "13px", fontWeight: "700", color: "#2C8C99", marginTop: "14px" }}>Read the clienteling guide &rarr;
                </div>
              </a>
              <a className="hv141" href="/article" style={{ display: "flex", flexDirection: "column", background: "#fff", border: "1px solid #E4E8EF", borderRadius: "16px", padding: "22px", textDecoration: "none" }}>
                <span style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "9px", letterSpacing: ".1em", color: "#2C8C99", textTransform: "uppercase" }}>Guide
                </span>
                <div style={{ fontSize: "16.5px", fontWeight: "800", color: "#1F2B4D", lineHeight: "1.28", marginTop: "10px" }}>What customers wanted but did not buy
                </div>
                <p style={{ fontSize: "13px", color: "#667085", lineHeight: "1.55", margin: "9px 0 0", flex: "1" }}>Learn how products shown, compared, requested and unavailable can reveal demand before the transaction.
                </p>
                <div style={{ fontSize: "11.5px", color: "#8a94a6", marginTop: "12px" }}>For Owners, buyers &amp; commercial teams
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", alignItems: "center", fontFamily: "'Roboto Mono',monospace", fontSize: "9px", letterSpacing: ".05em", color: "#8a94a6", textTransform: "uppercase", marginTop: "12px" }}>
                  <span style={{ color: "#1C6470", background: "#EAF6F6", border: "1px solid #CDE7E6", borderRadius: "6px", padding: "3px 7px" }}>Guide
                  </span>
                  <span>7 min read
                  </span>
                  <span>&middot;
                  </span>
                  <span>Updated May 2026
                  </span>
                </div>
                <div style={{ fontSize: "11px", color: "#9aa3b2", marginTop: "8px" }}>By AXY Retail Team
                </div>
                <div style={{ fontSize: "13px", fontWeight: "700", color: "#2C8C99", marginTop: "14px" }}>Read the demand guide &rarr;
                </div>
              </a>
              <a className="hv142" href="/article" style={{ display: "flex", flexDirection: "column", background: "#fff", border: "1px solid #E4E8EF", borderRadius: "16px", padding: "22px", textDecoration: "none" }}>
                <span style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "9px", letterSpacing: ".1em", color: "#2C8C99", textTransform: "uppercase" }}>Guide
                </span>
                <div style={{ fontSize: "16.5px", fontWeight: "800", color: "#1F2B4D", lineHeight: "1.28", marginTop: "10px" }}>How retailers and brands can collaborate without exposing customer data
                </div>
                <p style={{ fontSize: "13px", color: "#667085", lineHeight: "1.55", margin: "9px 0 0", flex: "1" }}>Understand approved workflows, business-unit boundaries and aggregated market insight.
                </p>
                <div style={{ fontSize: "11.5px", color: "#8a94a6", marginTop: "12px" }}>For Retailers, manufacturers &amp; technology teams
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", alignItems: "center", fontFamily: "'Roboto Mono',monospace", fontSize: "9px", letterSpacing: ".05em", color: "#8a94a6", textTransform: "uppercase", marginTop: "12px" }}>
                  <span style={{ color: "#1C6470", background: "#EAF6F6", border: "1px solid #CDE7E6", borderRadius: "6px", padding: "3px 7px" }}>Guide
                  </span>
                  <span>8 min read
                  </span>
                  <span>&middot;
                  </span>
                  <span>Updated May 2026
                  </span>
                </div>
                <div style={{ fontSize: "11px", color: "#9aa3b2", marginTop: "8px" }}>By AXY Retail Team
                </div>
                <div style={{ fontSize: "13px", fontWeight: "700", color: "#2C8C99", marginTop: "14px" }}>Read the collaboration guide &rarr;
                </div>
              </a>
            </div>
          </div>
        </div>
        <div style={{ background: "#fff", padding: "66px 24px" }}>
          <div style={{ maxWidth: "1120px", margin: "0 auto" }}>
            <div style={{ maxWidth: "640px" }}>
              <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "10.5px", letterSpacing: ".14em", color: "#2C8C99", textTransform: "uppercase" }}>Explore by topic
              </div>
              <h2 style={{ fontSize: "28px", fontWeight: "800", color: "#1F2B4D", lineHeight: "1.16", margin: "12px 0 0" }}>Find guidance for the work you are improving.
              </h2>
            </div>
            <div className="res-pillars" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginTop: "28px" }}>
              <div style={{ background: "#EAF6F6", border: "1px solid #E4E8EF", borderRadius: "18px", padding: "26px", display: "flex", flexDirection: "column" }}>
                <div style={{ width: "38px", height: "4px", borderRadius: "2px", background: "#2C8C99" }}></div>
                <div style={{ fontSize: "19px", fontWeight: "800", color: "#1F2B4D", marginTop: "16px" }}>Retail sales &amp; clienteling
                </div>
                <p style={{ fontSize: "12.5px", color: "#667085", lineHeight: "1.5", margin: "7px 0 0" }}>For salespeople, managers and retail owners.
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", margin: "16px 0 0", flex: "1" }}>
                  <span style={{ fontSize: "11.5px", fontWeight: "600", color: "#1C6470", background: "#fff", border: "1px solid rgba(0,0,0,.06)", borderRadius: "7px", padding: "5px 9px" }}>Retail clienteling
                  </span>
                  <span style={{ fontSize: "11.5px", fontWeight: "600", color: "#1C6470", background: "#fff", border: "1px solid rgba(0,0,0,.06)", borderRadius: "7px", padding: "5px 9px" }}>Store-visit capture
                  </span>
                  <span style={{ fontSize: "11.5px", fontWeight: "600", color: "#1C6470", background: "#fff", border: "1px solid rgba(0,0,0,.06)", borderRadius: "7px", padding: "5px 9px" }}>Customer follow-up
                  </span>
                  <span style={{ fontSize: "11.5px", fontWeight: "600", color: "#1C6470", background: "#fff", border: "1px solid rgba(0,0,0,.06)", borderRadius: "7px", padding: "5px 9px" }}>Sales-associate adoption
                  </span>
                  <span style={{ fontSize: "11.5px", fontWeight: "600", color: "#1C6470", background: "#fff", border: "1px solid rgba(0,0,0,.06)", borderRadius: "7px", padding: "5px 9px" }}>Opportunity management
                  </span>
                  <span style={{ fontSize: "11.5px", fontWeight: "600", color: "#1C6470", background: "#fff", border: "1px solid rgba(0,0,0,.06)", borderRadius: "7px", padding: "5px 9px" }}>Customer profiles
                  </span>
                  <span style={{ fontSize: "11.5px", fontWeight: "600", color: "#1C6470", background: "#fff", border: "1px solid rgba(0,0,0,.06)", borderRadius: "7px", padding: "5px 9px" }}>Retail conversion
                  </span>
                </div>
                <a href="/sales-app" style={{ fontSize: "13px", fontWeight: "700", color: "#2C8C99", marginTop: "18px" }}>Explore sales and clienteling &rarr;
                </a>
              </div>
              <div style={{ background: "#EEF1F7", border: "1px solid #E4E8EF", borderRadius: "18px", padding: "26px", display: "flex", flexDirection: "column" }}>
                <div style={{ width: "38px", height: "4px", borderRadius: "2px", background: "#32415C" }}></div>
                <div style={{ fontSize: "19px", fontWeight: "800", color: "#1F2B4D", marginTop: "16px" }}>Product demand &amp; inventory
                </div>
                <p style={{ fontSize: "12.5px", color: "#667085", lineHeight: "1.5", margin: "7px 0 0" }}>For owners, buyers and commercial managers.
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", margin: "16px 0 0", flex: "1" }}>
                  <span style={{ fontSize: "11.5px", fontWeight: "600", color: "#32415C", background: "#fff", border: "1px solid rgba(0,0,0,.06)", borderRadius: "7px", padding: "5px 9px" }}>Products shown vs sold
                  </span>
                  <span style={{ fontSize: "11.5px", fontWeight: "600", color: "#32415C", background: "#fff", border: "1px solid rgba(0,0,0,.06)", borderRadius: "7px", padding: "5px 9px" }}>Unavailable-product demand
                  </span>
                  <span style={{ fontSize: "11.5px", fontWeight: "600", color: "#32415C", background: "#fff", border: "1px solid rgba(0,0,0,.06)", borderRadius: "7px", padding: "5px 9px" }}>Stock transfers
                  </span>
                  <span style={{ fontSize: "11.5px", fontWeight: "600", color: "#32415C", background: "#fff", border: "1px solid rgba(0,0,0,.06)", borderRadius: "7px", padding: "5px 9px" }}>Product visibility
                  </span>
                  <span style={{ fontSize: "11.5px", fontWeight: "600", color: "#32415C", background: "#fff", border: "1px solid rgba(0,0,0,.06)", borderRadius: "7px", padding: "5px 9px" }}>Reorders
                  </span>
                  <span style={{ fontSize: "11.5px", fontWeight: "600", color: "#32415C", background: "#fff", border: "1px solid rgba(0,0,0,.06)", borderRadius: "7px", padding: "5px 9px" }}>Slow-moving inventory
                  </span>
                  <span style={{ fontSize: "11.5px", fontWeight: "600", color: "#32415C", background: "#fff", border: "1px solid rgba(0,0,0,.06)", borderRadius: "7px", padding: "5px 9px" }}>Demand before the transaction
                  </span>
                </div>
                <a href="/use-cases/product-demand-intelligence" style={{ fontSize: "13px", fontWeight: "700", color: "#32415C", marginTop: "18px" }}>Explore demand and inventory &rarr;
                </a>
              </div>
              <div style={{ background: "#E7F3F3", border: "1px solid #E4E8EF", borderRadius: "18px", padding: "26px", display: "flex", flexDirection: "column" }}>
                <div style={{ width: "38px", height: "4px", borderRadius: "2px", background: "#1C6470" }}></div>
                <div style={{ fontSize: "19px", fontWeight: "800", color: "#1F2B4D", marginTop: "16px" }}>Retailer &amp; brand collaboration
                </div>
                <p style={{ fontSize: "12.5px", color: "#667085", lineHeight: "1.5", margin: "7px 0 0" }}>For retail owners, brands, manufacturers and network managers.
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", margin: "16px 0 0", flex: "1" }}>
                  <span style={{ fontSize: "11.5px", fontWeight: "600", color: "#1C6470", background: "#fff", border: "1px solid rgba(0,0,0,.06)", borderRadius: "7px", padding: "5px 9px" }}>Catalogue distribution
                  </span>
                  <span style={{ fontSize: "11.5px", fontWeight: "600", color: "#1C6470", background: "#fff", border: "1px solid rgba(0,0,0,.06)", borderRadius: "7px", padding: "5px 9px" }}>Price updates
                  </span>
                  <span style={{ fontSize: "11.5px", fontWeight: "600", color: "#1C6470", background: "#fff", border: "1px solid rgba(0,0,0,.06)", borderRadius: "7px", padding: "5px 9px" }}>Availability requests
                  </span>
                  <span style={{ fontSize: "11.5px", fontWeight: "600", color: "#1C6470", background: "#fff", border: "1px solid rgba(0,0,0,.06)", borderRadius: "7px", padding: "5px 9px" }}>Orders and reorders
                  </span>
                  <span style={{ fontSize: "11.5px", fontWeight: "600", color: "#1C6470", background: "#fff", border: "1px solid rgba(0,0,0,.06)", borderRadius: "7px", padding: "5px 9px" }}>Partner permissions
                  </span>
                  <span style={{ fontSize: "11.5px", fontWeight: "600", color: "#1C6470", background: "#fff", border: "1px solid rgba(0,0,0,.06)", borderRadius: "7px", padding: "5px 9px" }}>Aggregated market insight
                  </span>
                  <span style={{ fontSize: "11.5px", fontWeight: "600", color: "#1C6470", background: "#fff", border: "1px solid rgba(0,0,0,.06)", borderRadius: "7px", padding: "5px 9px" }}>Product launches
                  </span>
                </div>
                <a href="/for-brands" style={{ fontSize: "13px", fontWeight: "700", color: "#1C6470", marginTop: "18px" }}>Explore partner collaboration &rarr;
                </a>
              </div>
              <div style={{ background: "#FBF3ED", border: "1px solid #E4E8EF", borderRadius: "18px", padding: "26px", display: "flex", flexDirection: "column" }}>
                <div style={{ width: "38px", height: "4px", borderRadius: "2px", background: "#B5764A" }}></div>
                <div style={{ fontSize: "19px", fontWeight: "800", color: "#1F2B4D", marginTop: "16px" }}>Customer lifecycle &amp; after-sales
                </div>
                <p style={{ fontSize: "12.5px", color: "#667085", lineHeight: "1.5", margin: "7px 0 0" }}>For sales, customer-experience and service teams.
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", margin: "16px 0 0", flex: "1" }}>
                  <span style={{ fontSize: "11.5px", fontWeight: "600", color: "#7a4a2e", background: "#fff", border: "1px solid rgba(0,0,0,.06)", borderRadius: "7px", padding: "5px 9px" }}>Visit continuation
                  </span>
                  <span style={{ fontSize: "11.5px", fontWeight: "600", color: "#7a4a2e", background: "#fff", border: "1px solid rgba(0,0,0,.06)", borderRadius: "7px", padding: "5px 9px" }}>Digital invoices
                  </span>
                  <span style={{ fontSize: "11.5px", fontWeight: "600", color: "#7a4a2e", background: "#fff", border: "1px solid rgba(0,0,0,.06)", borderRadius: "7px", padding: "5px 9px" }}>Warranty activation
                  </span>
                  <span style={{ fontSize: "11.5px", fontWeight: "600", color: "#7a4a2e", background: "#fff", border: "1px solid rgba(0,0,0,.06)", borderRadius: "7px", padding: "5px 9px" }}>Service journeys
                  </span>
                  <span style={{ fontSize: "11.5px", fontWeight: "600", color: "#7a4a2e", background: "#fff", border: "1px solid rgba(0,0,0,.06)", borderRadius: "7px", padding: "5px 9px" }}>Customer preferences
                  </span>
                  <span style={{ fontSize: "11.5px", fontWeight: "600", color: "#7a4a2e", background: "#fff", border: "1px solid rgba(0,0,0,.06)", borderRadius: "7px", padding: "5px 9px" }}>Post-purchase communication
                  </span>
                  <span style={{ fontSize: "11.5px", fontWeight: "600", color: "#7a4a2e", background: "#fff", border: "1px solid rgba(0,0,0,.06)", borderRadius: "7px", padding: "5px 9px" }}>Product lifecycle
                  </span>
                </div>
                <a href="/customer-experience" style={{ fontSize: "13px", fontWeight: "700", color: "#B5764A", marginTop: "18px" }}>Explore customer lifecycle &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>
        <div style={{ background: "#F9FAFB", padding: "70px 24px" }}>
          <div className="res-featured" style={{ maxWidth: "1120px", margin: "0 auto", display: "grid", gridTemplateColumns: "1.15fr 0.85fr", gap: "36px", alignItems: "center" }}>
            <div>
              <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "10.5px", letterSpacing: ".14em", color: "#2C8C99", textTransform: "uppercase" }}>Featured guide
              </div>
              <h2 style={{ fontSize: "27px", fontWeight: "800", color: "#1F2B4D", lineHeight: "1.18", margin: "12px 0 0" }}>What is retail clienteling&mdash;and what should happen beyond the CRM record?
              </h2>
              <p style={{ fontSize: "14px", color: "#667085", lineHeight: "1.62", margin: "14px 0 0" }}>A practical introduction to customer context, in-store activity, product interest, reliable follow-up and the measurements retail managers should actually use.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "7px", margin: "18px 0 0" }}>
                <span style={{ fontSize: "12px", fontWeight: "600", color: "#1C6470", background: "#EAF6F6", border: "1px solid #CDE7E6", borderRadius: "8px", padding: "6px 11px" }}>Customer context that survives the visit
                </span>
                <span style={{ fontSize: "12px", fontWeight: "600", color: "#1C6470", background: "#EAF6F6", border: "1px solid #CDE7E6", borderRadius: "8px", padding: "6px 11px" }}>Follow-up ownership and timing
                </span>
                <span style={{ fontSize: "12px", fontWeight: "600", color: "#1C6470", background: "#EAF6F6", border: "1px solid #CDE7E6", borderRadius: "8px", padding: "6px 11px" }}>Interest signals worth measuring
                </span>
                <span style={{ fontSize: "12px", fontWeight: "600", color: "#1C6470", background: "#EAF6F6", border: "1px solid #CDE7E6", borderRadius: "8px", padding: "6px 11px" }}>Metrics beyond total sales
                </span>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", alignItems: "center", fontFamily: "'Roboto Mono',monospace", fontSize: "9.5px", letterSpacing: ".05em", color: "#8a94a6", textTransform: "uppercase", marginTop: "18px" }}>
                <span style={{ color: "#1C6470", background: "#EAF6F6", border: "1px solid #CDE7E6", borderRadius: "6px", padding: "3px 8px" }}>Complete guide
                </span>
                <span>12 min read
                </span>
                <span>&middot;
                </span>
                <span>Updated Jun 2026
                </span>
                <span>&middot;
                </span>
                <span>AXY Retail Team
                </span>
              </div>
              <div style={{ marginTop: "20px" }}>
                <a className="hv143" href="/article" style={{ display: "inline-flex", padding: "13px 22px", background: "#32415C", color: "#fff", borderRadius: "10px", fontSize: "14px", fontWeight: "700" }}>Read the complete clienteling guide
                </a>
              </div>
              <div style={{ marginTop: "14px" }}>
                <a href="/sales-app" style={{ fontSize: "13px", fontWeight: "700", color: "#2C8C99" }}>Related: explore the Sales App &rarr;
                </a>
              </div>
            </div>
            <div style={{ background: "#fff", border: "1px solid #E4E8EF", borderRadius: "18px", padding: "26px", boxShadow: "0 18px 42px rgba(31,43,77,.10)" }}>
              <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "9px", letterSpacing: ".1em", color: "#8a94a6", textTransform: "uppercase" }}>The relationship, end to end
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginTop: "16px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <div style={{ flexShrink: "0", background: "#fff", border: "1px solid #D9E0EC", borderRadius: "11px", padding: "11px 13px", boxShadow: "0 6px 16px rgba(31,43,77,.08)" }}>
                    <span style={{ fontSize: "12px", fontWeight: "700", color: "#1F2B4D" }}>Customer context
                    </span>
                  </div>
                  <span style={{ color: "#2C8C99", fontWeight: "700", fontSize: "14px" }}>&darr;
                  </span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <div style={{ flexShrink: "0", background: "#fff", border: "1px solid #D9E0EC", borderRadius: "11px", padding: "11px 13px", boxShadow: "0 6px 16px rgba(31,43,77,.08)" }}>
                    <span style={{ fontSize: "12px", fontWeight: "700", color: "#1F2B4D" }}>Store interaction
                    </span>
                  </div>
                  <span style={{ color: "#2C8C99", fontWeight: "700", fontSize: "14px" }}>&darr;
                  </span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <div style={{ flexShrink: "0", background: "#fff", border: "1px solid #D9E0EC", borderRadius: "11px", padding: "11px 13px", boxShadow: "0 6px 16px rgba(31,43,77,.08)" }}>
                    <span style={{ fontSize: "12px", fontWeight: "700", color: "#1F2B4D" }}>Product interest
                    </span>
                  </div>
                  <span style={{ color: "#2C8C99", fontWeight: "700", fontSize: "14px" }}>&darr;
                  </span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <div style={{ flexShrink: "0", background: "#fff", border: "1px solid #D9E0EC", borderRadius: "11px", padding: "11px 13px", boxShadow: "0 6px 16px rgba(31,43,77,.08)" }}>
                    <span style={{ fontSize: "12px", fontWeight: "700", color: "#1F2B4D" }}>Follow-up
                    </span>
                  </div>
                  <span style={{ color: "#2C8C99", fontWeight: "700", fontSize: "14px" }}>&darr;
                  </span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <div style={{ flexShrink: "0", background: "linear-gradient(160deg,#20304F,#121B34)", border: "1px solid transparent", borderRadius: "11px", padding: "11px 13px", boxShadow: "0 6px 16px rgba(31,43,77,.08)" }}>
                    <span style={{ fontSize: "12px", fontWeight: "700", color: "#fff" }}>Relationship
                    </span>
                  </div>
                </div>
              </div>
              <p style={{ fontSize: "11.5px", color: "#8a94a6", lineHeight: "1.5", margin: "16px 0 0" }}>Clienteling connects customer context, the store interaction, product interest and dependable follow-up into one ongoing relationship &mdash; not a static contact record.
              </p>
            </div>
          </div>
        </div>
        <div style={{ background: "#fff", padding: "70px 24px" }}>
          <div style={{ maxWidth: "1120px", margin: "0 auto" }}>
            <div style={{ maxWidth: "640px" }}>
              <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "10.5px", letterSpacing: ".14em", color: "#2C8C99", textTransform: "uppercase" }}>Practical tools
              </div>
              <h2 style={{ fontSize: "28px", fontWeight: "800", color: "#1F2B4D", lineHeight: "1.16", margin: "12px 0 0" }}>Use the frameworks inside your own retail business.
              </h2>
            </div>
            <div className="res-tools" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "14px", marginTop: "28px" }}>
              <div style={{ background: "#fff", border: "1px solid #E4E8EF", borderRadius: "14px", padding: "20px" }}>
                <span style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "9px", letterSpacing: ".1em", color: "#1C6470", background: "#EAF6F6", border: "1px solid #CDE7E6", borderRadius: "6px", padding: "4px 8px", textTransform: "uppercase" }}>Checklist
                </span>
                <div style={{ fontSize: "14.5px", fontWeight: "800", color: "#1F2B4D", marginTop: "12px" }}>Retail clienteling audit checklist
                </div>
                <p style={{ fontSize: "12.5px", color: "#667085", lineHeight: "1.55", margin: "8px 0 0" }}>Evaluate whether customer context and follow-ups are being managed consistently.
                </p>
              </div>
              <div style={{ background: "#fff", border: "1px solid #E4E8EF", borderRadius: "14px", padding: "20px" }}>
                <span style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "9px", letterSpacing: ".1em", color: "#1C6470", background: "#EAF6F6", border: "1px solid #CDE7E6", borderRadius: "6px", padding: "4px 8px", textTransform: "uppercase" }}>Template
                </span>
                <div style={{ fontSize: "14.5px", fontWeight: "800", color: "#1F2B4D", marginTop: "12px" }}>Store-visit capture template
                </div>
                <p style={{ fontSize: "12.5px", color: "#667085", lineHeight: "1.55", margin: "8px 0 0" }}>Define what should be recorded without slowing the sales conversation.
                </p>
              </div>
              <div style={{ background: "#fff", border: "1px solid #E4E8EF", borderRadius: "14px", padding: "20px" }}>
                <span style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "9px", letterSpacing: ".1em", color: "#1C6470", background: "#EAF6F6", border: "1px solid #CDE7E6", borderRadius: "6px", padding: "4px 8px", textTransform: "uppercase" }}>Worksheet
                </span>
                <div style={{ fontSize: "14.5px", fontWeight: "800", color: "#1F2B4D", marginTop: "12px" }}>Retail follow-up workflow
                </div>
                <p style={{ fontSize: "12.5px", color: "#667085", lineHeight: "1.55", margin: "8px 0 0" }}>Create clear ownership, timing and next actions for customer opportunities.
                </p>
              </div>
              <div style={{ background: "#fff", border: "1px solid #E4E8EF", borderRadius: "14px", padding: "20px" }}>
                <span style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "9px", letterSpacing: ".1em", color: "#1C6470", background: "#EAF6F6", border: "1px solid #CDE7E6", borderRadius: "6px", padding: "4px 8px", textTransform: "uppercase" }}>Worksheet
                </span>
                <div style={{ fontSize: "14.5px", fontWeight: "800", color: "#1F2B4D", marginTop: "12px" }}>Product-demand review worksheet
                </div>
                <p style={{ fontSize: "12.5px", color: "#667085", lineHeight: "1.55", margin: "8px 0 0" }}>Compare products shown, sold, requested and unavailable.
                </p>
              </div>
              <div style={{ background: "#fff", border: "1px solid #E4E8EF", borderRadius: "14px", padding: "20px" }}>
                <span style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "9px", letterSpacing: ".1em", color: "#1C6470", background: "#EAF6F6", border: "1px solid #CDE7E6", borderRadius: "6px", padding: "4px 8px", textTransform: "uppercase" }}>Checklist
                </span>
                <div style={{ fontSize: "14.5px", fontWeight: "800", color: "#1F2B4D", marginTop: "12px" }}>Retailer&ndash;brand data-sharing checklist
                </div>
                <p style={{ fontSize: "12.5px", color: "#667085", lineHeight: "1.55", margin: "8px 0 0" }}>Define what stays private, what supports a workflow and what may be aggregated.
                </p>
              </div>
              <div style={{ background: "#fff", border: "1px solid #E4E8EF", borderRadius: "14px", padding: "20px" }}>
                <span style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "9px", letterSpacing: ".1em", color: "#1C6470", background: "#EAF6F6", border: "1px solid #CDE7E6", borderRadius: "6px", padding: "4px 8px", textTransform: "uppercase" }}>Worksheet
                </span>
                <div style={{ fontSize: "14.5px", fontWeight: "800", color: "#1F2B4D", marginTop: "12px" }}>Integration planning worksheet
                </div>
                <p style={{ fontSize: "12.5px", color: "#667085", lineHeight: "1.55", margin: "8px 0 0" }}>Map POS, ERP, CRM, product, stock and partner-system connections.
                </p>
              </div>
            </div>
            <div style={{ display: "flex", gap: "12px", alignItems: "center", flexWrap: "wrap", marginTop: "20px", background: "#F1F8F8", border: "1px solid #CFE7E6", borderRadius: "12px", padding: "15px 18px" }}>
              <span style={{ fontSize: "13px", color: "#1F2B4D", fontWeight: "600", flex: "1", minWidth: "240px" }}>Our team walks through the frameworks with you during guided setup.
              </span>
              <a href="/book-a-walkthrough" style={{ fontSize: "13px", fontWeight: "700", color: "#2C8C99", whiteSpace: "nowrap" }}>Get guided setup &rarr;
              </a>
            </div>
          </div>
        </div>
        <div style={{ background: "#F9FAFB", padding: "70px 24px" }}>
          <div style={{ maxWidth: "1120px", margin: "0 auto" }}>
            <div style={{ maxWidth: "640px" }}>
              <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "10.5px", letterSpacing: ".14em", color: "#2C8C99", textTransform: "uppercase" }}>Latest insights
              </div>
              <h2 style={{ fontSize: "28px", fontWeight: "800", color: "#1F2B4D", lineHeight: "1.16", margin: "12px 0 0" }}>Recently published and updated.
              </h2>
            </div>
            <div className="res-latest" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "16px", marginTop: "28px" }}>
              <a className="hv144" href="/article" style={{ display: "flex", flexDirection: "column", background: "#fff", border: "1px solid #E4E8EF", borderRadius: "16px", overflow: "hidden", textDecoration: "none" }}>
                <div style={{ height: "8px", background: "linear-gradient(90deg,#32415C,#2C8C99)" }}></div>
                <div style={{ padding: "20px", display: "flex", flexDirection: "column", flex: "1" }}>
                  <span style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "9px", letterSpacing: ".1em", color: "#2C8C99", textTransform: "uppercase" }}>Sales &amp; clienteling
                  </span>
                  <div style={{ fontSize: "15.5px", fontWeight: "800", color: "#1F2B4D", lineHeight: "1.28", marginTop: "9px" }}>How to capture in-store customer interest without slowing the sales team
                  </div>
                  <p style={{ fontSize: "12.5px", color: "#667085", lineHeight: "1.55", margin: "8px 0 0", flex: "1" }}>A practical method for recording products shown, liked and requested inside a natural conversation.
                  </p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", alignItems: "center", fontFamily: "'Roboto Mono',monospace", fontSize: "9px", letterSpacing: ".05em", color: "#8a94a6", textTransform: "uppercase", marginTop: "12px" }}>
                    <span style={{ color: "#1C6470", background: "#EAF6F6", border: "1px solid #CDE7E6", borderRadius: "6px", padding: "3px 7px" }}>Guide
                    </span>
                    <span>6 min read
                    </span>
                    <span>&middot;
                    </span>
                    <span>Updated Jun 2026
                    </span>
                  </div>
                  <div style={{ fontSize: "11px", color: "#9aa3b2", marginTop: "8px" }}>By AXY Retail Team
                  </div>
                  <div style={{ fontSize: "12.5px", fontWeight: "700", color: "#2C8C99", marginTop: "12px" }}>Explore the Sales App &rarr;
                  </div>
                </div>
              </a>
              <a className="hv145" href="/article" style={{ display: "flex", flexDirection: "column", background: "#fff", border: "1px solid #E4E8EF", borderRadius: "16px", overflow: "hidden", textDecoration: "none" }}>
                <div style={{ height: "8px", background: "linear-gradient(90deg,#32415C,#2C8C99)" }}></div>
                <div style={{ padding: "20px", display: "flex", flexDirection: "column", flex: "1" }}>
                  <span style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "9px", letterSpacing: ".1em", color: "#2C8C99", textTransform: "uppercase" }}>Demand &amp; inventory
                  </span>
                  <div style={{ fontSize: "15.5px", fontWeight: "800", color: "#1F2B4D", lineHeight: "1.28", marginTop: "9px" }}>Products shown versus products sold: what the difference tells management
                  </div>
                  <p style={{ fontSize: "12.5px", color: "#667085", lineHeight: "1.55", margin: "8px 0 0", flex: "1" }}>How the gap between presentation and purchase points buyers toward better stock decisions.
                  </p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", alignItems: "center", fontFamily: "'Roboto Mono',monospace", fontSize: "9px", letterSpacing: ".05em", color: "#8a94a6", textTransform: "uppercase", marginTop: "12px" }}>
                    <span style={{ color: "#1C6470", background: "#EAF6F6", border: "1px solid #CDE7E6", borderRadius: "6px", padding: "3px 7px" }}>Guide
                    </span>
                    <span>8 min read
                    </span>
                    <span>&middot;
                    </span>
                    <span>Updated Jun 2026
                    </span>
                  </div>
                  <div style={{ fontSize: "11px", color: "#9aa3b2", marginTop: "8px" }}>By AXY Retail Team
                  </div>
                  <div style={{ fontSize: "12.5px", fontWeight: "700", color: "#2C8C99", marginTop: "12px" }}>See how AXY turns activity into demand insight &rarr;
                  </div>
                </div>
              </a>
              <a className="hv146" href="/article" style={{ display: "flex", flexDirection: "column", background: "#fff", border: "1px solid #E4E8EF", borderRadius: "16px", overflow: "hidden", textDecoration: "none" }}>
                <div style={{ height: "8px", background: "linear-gradient(90deg,#32415C,#2C8C99)" }}></div>
                <div style={{ padding: "20px", display: "flex", flexDirection: "column", flex: "1" }}>
                  <span style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "9px", letterSpacing: ".1em", color: "#2C8C99", textTransform: "uppercase" }}>Customer lifecycle
                  </span>
                  <div style={{ fontSize: "15.5px", fontWeight: "800", color: "#1F2B4D", lineHeight: "1.28", marginTop: "9px" }}>How digital warranties connect customers, retailers and brands
                  </div>
                  <p style={{ fontSize: "12.5px", color: "#667085", lineHeight: "1.55", margin: "8px 0 0", flex: "1" }}>Why warranty activation is the moment the product lifecycle becomes a shared, permission-based record.
                  </p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", alignItems: "center", fontFamily: "'Roboto Mono',monospace", fontSize: "9px", letterSpacing: ".05em", color: "#8a94a6", textTransform: "uppercase", marginTop: "12px" }}>
                    <span style={{ color: "#1C6470", background: "#EAF6F6", border: "1px solid #CDE7E6", borderRadius: "6px", padding: "3px 7px" }}>Guide
                    </span>
                    <span>7 min read
                    </span>
                    <span>&middot;
                    </span>
                    <span>Updated May 2026
                    </span>
                  </div>
                  <div style={{ fontSize: "11px", color: "#9aa3b2", marginTop: "8px" }}>By AXY Retail Team
                  </div>
                  <div style={{ fontSize: "12.5px", fontWeight: "700", color: "#2C8C99", marginTop: "12px" }}>Explore Customer Experience &rarr;
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div style={{ background: "#fff", padding: "70px 24px" }}>
          <div style={{ maxWidth: "1120px", margin: "0 auto" }}>
            <div style={{ maxWidth: "640px" }}>
              <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "10.5px", letterSpacing: ".14em", color: "#2C8C99", textTransform: "uppercase" }}>By your role
              </div>
              <h2 style={{ fontSize: "28px", fontWeight: "800", color: "#1F2B4D", lineHeight: "1.16", margin: "12px 0 0" }}>Continue with the topic most relevant to your role.
              </h2>
            </div>
            <div className="res-next" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "16px", marginTop: "28px" }}>
              <div style={{ background: "#fff", border: "1px solid #E4E8EF", borderRadius: "16px", padding: "22px" }}>
                <div style={{ fontSize: "15px", fontWeight: "800", color: "#1F2B4D" }}>Retail owner or manager
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "7px", margin: "14px 0 0" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "12.5px", color: "#3a4358" }}>
                    <span style={{ color: "#2C8C99" }}>&rarr;
                    </span>Clienteling fundamentals
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "12.5px", color: "#3a4358" }}>
                    <span style={{ color: "#2C8C99" }}>&rarr;
                    </span>Pre-transaction demand
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "12.5px", color: "#3a4358" }}>
                    <span style={{ color: "#2C8C99" }}>&rarr;
                    </span>Follow-up discipline
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "12.5px", color: "#3a4358" }}>
                    <span style={{ color: "#2C8C99" }}>&rarr;
                    </span>Store performance
                  </div>
                </div>
                <a href="/for-retailers" style={{ display: "inline-block", fontSize: "13px", fontWeight: "700", color: "#2C8C99", marginTop: "16px" }}>Explore retailer guidance &rarr;
                </a>
              </div>
              <div style={{ background: "#fff", border: "1px solid #E4E8EF", borderRadius: "16px", padding: "22px" }}>
                <div style={{ fontSize: "15px", fontWeight: "800", color: "#1F2B4D" }}>Brand or manufacturer
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "7px", margin: "14px 0 0" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "12.5px", color: "#3a4358" }}>
                    <span style={{ color: "#2C8C99" }}>&rarr;
                    </span>Catalogue distribution
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "12.5px", color: "#3a4358" }}>
                    <span style={{ color: "#2C8C99" }}>&rarr;
                    </span>Availability workflows
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "12.5px", color: "#3a4358" }}>
                    <span style={{ color: "#2C8C99" }}>&rarr;
                    </span>Warranty collaboration
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "12.5px", color: "#3a4358" }}>
                    <span style={{ color: "#2C8C99" }}>&rarr;
                    </span>Market-demand insight
                  </div>
                </div>
                <a href="/for-brands" style={{ display: "inline-block", fontSize: "13px", fontWeight: "700", color: "#2C8C99", marginTop: "16px" }}>Explore brand guidance &rarr;
                </a>
              </div>
              <div style={{ background: "#fff", border: "1px solid #E4E8EF", borderRadius: "16px", padding: "22px" }}>
                <div style={{ fontSize: "15px", fontWeight: "800", color: "#1F2B4D" }}>Technology or operations leader
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "7px", margin: "14px 0 0" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "12.5px", color: "#3a4358" }}>
                    <span style={{ color: "#2C8C99" }}>&rarr;
                    </span>Integration planning
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "12.5px", color: "#3a4358" }}>
                    <span style={{ color: "#2C8C99" }}>&rarr;
                    </span>Data ownership
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "12.5px", color: "#3a4358" }}>
                    <span style={{ color: "#2C8C99" }}>&rarr;
                    </span>Permissions
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "12.5px", color: "#3a4358" }}>
                    <span style={{ color: "#2C8C99" }}>&rarr;
                    </span>Business-unit structure
                  </div>
                </div>
                <a href="/integrations" style={{ display: "inline-block", fontSize: "13px", fontWeight: "700", color: "#2C8C99", marginTop: "16px" }}>Explore systems and data guidance &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>
        <div style={{ position: "relative", overflow: "hidden", background: "linear-gradient(135deg,#1F2B4D,#32415C 58%,#2C6570)", padding: "76px 24px" }}>
          <div style={{ position: "absolute", bottom: "-120px", right: "-60px", width: "420px", height: "320px", background: "radial-gradient(circle,rgba(51,214,164,.12),transparent 70%)" }}></div>
          <div style={{ position: "relative", maxWidth: "760px", margin: "0 auto", textAlign: "center" }}>
            <h2 style={{ fontSize: "29px", fontWeight: "800", color: "#fff", lineHeight: "1.14" }}>Put connected-retail thinking into practice.
            </h2>
            <p style={{ fontSize: "14.5px", color: "#C9D2E4", lineHeight: "1.6", margin: "14px 0 0" }}>Explore how AXY connects sales teams, customers, products, stock and authorised retail partners.
            </p>
            <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap", marginTop: "24px" }}>
              <a className="hv147" href="/product" style={{ display: "inline-flex", padding: "14px 24px", background: "#fff", color: "#1F2B4D", borderRadius: "10px", fontSize: "14.5px", fontWeight: "700" }}>Explore the platform
              </a>
              <a className="hv148" href="/book-a-walkthrough" style={{ display: "inline-flex", padding: "14px 24px", border: "1.5px solid rgba(255,255,255,.5)", color: "#fff", borderRadius: "10px", fontSize: "14.5px", fontWeight: "600" }}>Get guided setup
              </a>
            </div>
            <div style={{ display: "flex", gap: "18px", justifyContent: "center", flexWrap: "wrap", marginTop: "18px" }}>
              <a className="hv149" href="/for-retailers" style={{ fontSize: "13px", color: "#9fe0d8", textDecoration: "underline" }}>AXY for retailers
              </a>
              <a className="hv150" href="/for-brands" style={{ fontSize: "13px", color: "#9fe0d8", textDecoration: "underline" }}>AXY for brands
              </a>
              <a className="hv151" href="/how-it-works" style={{ fontSize: "13px", color: "#9fe0d8", textDecoration: "underline" }}>How AXY works
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
