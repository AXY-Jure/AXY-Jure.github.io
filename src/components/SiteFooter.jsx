import React from 'react';
import { css } from '../lib/css.js';

export default function SiteFooter(v) {
  return (
      <div className="site-footer" data-analytics-location="site_footer" style={{ background: "#1F2B4D", padding: "56px 24px 34px" }}>
        <div className="site-footer__inner" style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div className="site-footer__grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(150px,1fr))", gap: "22px" }}>
            <div className="site-footer__brand">
              <div style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", background: "#fff", borderRadius: "8px", padding: "7px 10px" }}>
                <img src="/images/axy-logo.png" alt="AXY" style={{ height: "26px", width: "auto" }} />
              </div>
              <p style={{ fontSize: "12px", color: "#8fa0c2", lineHeight: "1.6", margin: "10px 0 0", maxWidth: "210px" }}>The intelligence layer connecting retailers, brands, sales teams, products and customers.
              </p>
            </div>
            <div>
              <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "8.5px", color: "#6b76a0", letterSpacing: ".08em", marginBottom: "10px" }}>PRODUCT
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "7px" }}>
                <a href="/product" style={{ fontSize: "12px", color: "#C9D2E4" }}>Product Overview
                </a>
                <a href="/sales-app" style={{ fontSize: "12px", color: "#C9D2E4" }}>Sales App
                </a>
                <a href="/back-office" style={{ fontSize: "12px", color: "#C9D2E4" }}>Back Office
                </a>
                <a href="/customer-experience" style={{ fontSize: "12px", color: "#C9D2E4" }}>Customer Experience
                </a>
                <a href="/integrations" style={{ fontSize: "12px", color: "#C9D2E4" }}>Integrations
                </a>
                <a href="/pricing" style={{ fontSize: "12px", color: "#C9D2E4" }}>Pricing
                </a>
              </div>
            </div>
            <div>
              <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "8.5px", color: "#6b76a0", letterSpacing: ".08em", marginBottom: "10px" }}>SOLUTIONS
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "7px" }}>
                <a href="/for-retailers" style={{ fontSize: "12px", color: "#C9D2E4" }}>For Retailers
                </a>
                <a href="/for-brands" style={{ fontSize: "12px", color: "#C9D2E4" }}>For Brands
                </a>
                <a href="/use-cases/retail-clienteling" style={{ fontSize: "12px", color: "#C9D2E4" }}>Retail Clienteling
                </a>
                <a href="/use-cases/in-store-sales-capture" style={{ fontSize: "12px", color: "#C9D2E4" }}>In-Store Sales Capture
                </a>
                <a href="/use-cases/product-demand-intelligence" style={{ fontSize: "12px", color: "#C9D2E4" }}>Product Demand Intelligence
                </a>
                <a href="/use-cases/retailer-brand-collaboration" style={{ fontSize: "12px", color: "#C9D2E4" }}>Retailer–Brand Collaboration
                </a>
              </div>
            </div>
            <div>
              <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "8.5px", color: "#6b76a0", letterSpacing: ".08em", marginBottom: "10px" }}>TRUST
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "7px" }}>
                <span style={{ fontSize: "12px", color: "#6b76a0" }}>Privacy &amp; Permissions · in Integrations
                </span>
                <a href="/help" style={{ fontSize: "12px", color: "#C9D2E4" }}>Help Centre
                </a>
                <span style={{ fontSize: "12px", color: "#6b76a0" }}>System Status · planned
                </span>
              </div>
            </div>
            <div>
              <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "8.5px", color: "#6b76a0", letterSpacing: ".08em", marginBottom: "10px" }}>RESOURCES
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "7px" }}>
                <a href="/resources" style={{ fontSize: "12px", color: "#C9D2E4" }}>Resources Overview
                </a>
                <a href="/article" style={{ fontSize: "12px", color: "#C9D2E4" }}>Insights &amp; Guides
                </a>
                <span style={{ fontSize: "12px", color: "#6b76a0" }}>Product Updates · planned
                </span>
                <a href="/about" style={{ fontSize: "12px", color: "#C9D2E4" }}>About AXY
                </a>
              </div>
            </div>
            <div>
              <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "8.5px", color: "#6b76a0", letterSpacing: ".08em", marginBottom: "10px" }}>COMPANY
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "7px" }}>
                <a href="/about" style={{ fontSize: "12px", color: "#C9D2E4" }}>About
                </a>
                <a href="/contact" style={{ fontSize: "12px", color: "#C9D2E4" }}>Contact
                </a>
                <a href="/book-a-walkthrough#schedule" style={{ fontSize: "12px", color: "#C9D2E4" }}>Book a Walkthrough
                </a>
                <a href="https://app.axy.net/authentication" style={{ fontSize: "12px", color: "#C9D2E4" }}>Log in
                </a>
              </div>
            </div>
          </div>
          <div className="site-footer__bottom" style={{ borderTop: "1px solid #34406A", marginTop: "30px", paddingTop: "22px", display: "flex", alignItems: "center", gap: "16px", flexWrap: "wrap" }}>
            <span style={{ fontSize: "14px", color: "#fff", fontWeight: "700" }}>See how AXY fits your business.
            </span>{' '}
            <a className="hv209" href="https://app.axy.net/onboarding" style={{ display: "inline-flex", padding: "10px 18px", background: "#fff", color: "#1F2B4D", borderRadius: "8px", fontSize: "13px", fontWeight: "700" }}>Create free account
            </a>{' '}
            <a className="hv210" href="/book-a-walkthrough#schedule" style={{ display: "inline-flex", padding: "10px 17px", border: "1.5px solid rgba(255,255,255,.4)", color: "#fff", borderRadius: "8px", fontSize: "13px", fontWeight: "600" }}>Get guided setup
            </a>
            <div className="site-footer__legal" style={{ marginLeft: "auto", display: "flex", gap: "16px", flexWrap: "wrap", alignItems: "center" }}>
              <a href="/legal#privacy-policy" style={{ fontSize: "11.5px", color: "#8fa0c2" }}>Privacy Policy
              </a>{' '}
              <a href="/legal#terms-and-conditions" style={{ fontSize: "11.5px", color: "#8fa0c2" }}>Terms
              </a>{' '}
              <a href="/legal#cookies-and-similar-technologies" style={{ fontSize: "11.5px", color: "#8fa0c2" }}>Cookie Policy
              </a>{' '}
              <button
                type="button"
                onClick={() => window.dispatchEvent(new Event('axy:open-cookie-settings'))}
                style={{ appearance: "none", background: "transparent", border: 0, padding: 0, fontSize: "11.5px", color: "#8fa0c2", cursor: "pointer" }}
              >Cookie settings
              </button>{' '}
              <span style={{ fontSize: "11.5px", color: "#6b76a0" }}>© AXY · XY Sales d.o.o.
              </span>
            </div>
          </div>
        </div>
      </div>
  );
}
