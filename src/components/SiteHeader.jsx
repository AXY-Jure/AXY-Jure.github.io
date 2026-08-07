import React from 'react';
import { css } from '../lib/css.js';

export default function SiteHeader(v) {
  const { ddOff, ddProduct, ddProductOn, ddResources, ddResourcesOn, menuLabel, menuOpen, toggleMenu } = v;
  return (
      <div data-analytics-location="site_header" style={{ position: "sticky", top: "0", zIndex: "60", background: "rgba(255,255,255,.92)", backdropFilter: "blur(12px)", borderBottom: "1px solid #E4E8EF" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px", height: "64px", display: "flex", alignItems: "center", gap: "26px" }}>
          <a href="/" style={{ display: "inline-flex", alignItems: "center" }}>
            <img src="/images/axy-logo.png" alt="AXY" style={{ height: "30px", width: "auto" }} />
          </a>
          <div id="nav-desktop" style={{ display: "flex", alignItems: "center", gap: "4px", flex: "1" }}>
            <div onMouseEnter={ddProductOn} onMouseLeave={ddOff} style={{ position: "relative" }}>
              <span className="hv193" style={{ display: "inline-flex", alignItems: "center", gap: "5px", padding: "9px 12px", borderRadius: "8px", fontSize: "13.5px", fontWeight: "600", color: "#1F2B4D", cursor: "pointer", whiteSpace: "nowrap" }}>Product{' '}
                <span style={{ fontSize: "9px", color: "#8a93a6" }}>▾
                </span>
              </span>{' '}
              {ddProduct ? (<>
                <div style={{ position: "absolute", top: "100%", left: "0", width: "280px", background: "#fff", border: "1px solid #E4E8EF", borderRadius: "12px", boxShadow: "0 18px 44px rgba(31,43,77,.14)", padding: "8px", display: "flex", flexDirection: "column" }}>
                  <a className="hv194" href="/product" style={{ padding: "9px 11px", borderRadius: "8px", fontSize: "13px", fontWeight: "600" }}>Product Overview
                  </a>{' '}
                  <a className="hv195" href="/sales-app" style={{ padding: "9px 11px", borderRadius: "8px", fontSize: "13px", fontWeight: "600" }}>Sales App
                  </a>{' '}
                  <a className="hv196" href="/back-office" style={{ padding: "9px 11px", borderRadius: "8px", fontSize: "13px", fontWeight: "600" }}>Back Office
                  </a>{' '}
                  <a className="hv197" href="/customer-experience" style={{ padding: "9px 11px", borderRadius: "8px", fontSize: "13px", fontWeight: "600" }}>Customer Experience
                  </a>{' '}
                  <a className="hv198" href="/integrations" style={{ padding: "9px 11px", borderRadius: "8px", fontSize: "13px", fontWeight: "600" }}>Integrations
                  </a>
                </div>
              </>) : null}
            </div>
            <a className="hv199" href="/for-retailers" style={{ whiteSpace: "nowrap", padding: "9px 12px", borderRadius: "8px", fontSize: "13.5px", fontWeight: "600", color: "#1F2B4D" }}>For Retailers
            </a>{' '}
            <a className="hv200" href="/for-brands" style={{ whiteSpace: "nowrap", padding: "9px 12px", borderRadius: "8px", fontSize: "13.5px", fontWeight: "600", color: "#1F2B4D" }}>For Brands
            </a>{' '}
            <a className="hv201" href="/how-it-works" style={{ whiteSpace: "nowrap", padding: "9px 12px", borderRadius: "8px", fontSize: "13.5px", fontWeight: "600", color: "#1F2B4D" }}>How It Works
            </a>{' '}
            <a className="hv202" href="/pricing" style={{ whiteSpace: "nowrap", padding: "9px 12px", borderRadius: "8px", fontSize: "13.5px", fontWeight: "600", color: "#1F2B4D" }}>Pricing
            </a>
            <div onMouseEnter={ddResourcesOn} onMouseLeave={ddOff} style={{ position: "relative" }}>
              <span className="hv203" style={{ display: "inline-flex", alignItems: "center", gap: "5px", padding: "9px 12px", borderRadius: "8px", fontSize: "13.5px", fontWeight: "600", color: "#1F2B4D", cursor: "pointer", whiteSpace: "nowrap" }}>Resources{' '}
                <span style={{ fontSize: "9px", color: "#8a93a6" }}>▾
                </span>
              </span>{' '}
              {ddResources ? (<>
                <div style={{ position: "absolute", top: "100%", left: "0", width: "250px", background: "#fff", border: "1px solid #E4E8EF", borderRadius: "12px", boxShadow: "0 18px 44px rgba(31,43,77,.14)", padding: "8px", display: "flex", flexDirection: "column" }}>
                  <a className="hv204" href="/resources" style={{ padding: "9px 11px", borderRadius: "8px", fontSize: "13px", fontWeight: "600" }}>Resources Overview
                  </a>{' '}
                  <a className="hv205" href="/article" style={{ padding: "9px 11px", borderRadius: "8px", fontSize: "13px", fontWeight: "600" }}>Insights &amp; Guides
                  </a>{' '}
                  <a className="hv206" href="/help" style={{ padding: "9px 11px", borderRadius: "8px", fontSize: "13px", fontWeight: "600" }}>Help Centre
                  </a>{' '}
                  <span style={{ padding: "9px 11px", fontSize: "13px", fontWeight: "600", color: "#9aa3b2", display: "flex", alignItems: "center", gap: "7px" }}>Product Updates{' '}
                    <span style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "8px", fontWeight: "700", color: "#8a5a12", background: "#F5E6C8", borderRadius: "7px", padding: "2px 7px" }}>PLANNED
                    </span>
                  </span>
                </div>
              </>) : null}
            </div>
          </div>
          <div id="nav-actions-desktop" style={{ display: "flex", alignItems: "center", gap: "14px" }}>
            <a href="https://app.axy.net/authentication" style={{ fontSize: "13px", fontWeight: "600", color: "#667085", whiteSpace: "nowrap" }}>Log in
            </a>{' '}
            <a className="hv207" href="https://app.axy.net/onboarding" style={{ display: "inline-flex", whiteSpace: "nowrap", padding: "9px 16px", background: "#32415C", color: "#fff", borderRadius: "9px", fontSize: "13px", fontWeight: "700", transition: "background .15s" }}>Create free account
            </a>{' '}
            <a className="hv208" href="/book-a-walkthrough#schedule" style={{ display: "inline-flex", whiteSpace: "nowrap", padding: "9px 15px", border: "1.5px solid #32415C", color: "#32415C", borderRadius: "9px", fontSize: "13px", fontWeight: "600" }}>Get guided setup
            </a>
          </div>
          <a id="nav-mobile-cta" href="https://app.axy.net/onboarding" style={{ marginLeft: "auto", alignItems: "center", padding: "8px 13px", background: "#32415C", color: "#fff", borderRadius: "8px", fontSize: "12px", fontWeight: "700" }}>Create free account
          </a>{' '}
          <span id="nav-mobile-btn" onClick={toggleMenu} style={{ marginLeft: "10px", alignItems: "center", gap: "8px", padding: "9px 14px", border: "1px solid #E4E8EF", borderRadius: "9px", fontSize: "13px", fontWeight: "700", color: "#1F2B4D", cursor: "pointer" }}>{menuLabel}
          </span>
        </div>
        {menuOpen ? (<>
          <div style={{ background: "#fff", borderBottom: "1px solid #E4E8EF", padding: "16px 24px", display: "flex", flexDirection: "column", gap: "4px", maxHeight: "70vh", overflowY: "auto" }}>
            <a href="https://app.axy.net/onboarding" style={{ display: "block", textAlign: "center", padding: "12px", background: "#32415C", color: "#fff", borderRadius: "9px", fontSize: "14px", fontWeight: "700", marginBottom: "4px" }}>Create free account
            </a>{' '}
            <a href="/book-a-walkthrough#schedule" style={{ display: "block", textAlign: "center", padding: "11px", border: "1.5px solid #32415C", color: "#32415C", borderRadius: "9px", fontSize: "14px", fontWeight: "600", marginBottom: "8px" }}>Get guided setup
            </a>
            <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "9px", color: "#9aa3b2", letterSpacing: ".08em", margin: "6px 0 2px" }}>PRODUCT
            </div>
            <a href="/product" style={{ padding: "9px 4px", fontSize: "14px", fontWeight: "600" }}>Product Overview
            </a>{' '}
            <a href="/sales-app" style={{ padding: "9px 4px", fontSize: "14px", fontWeight: "600" }}>Sales App
            </a>{' '}
            <a href="/back-office" style={{ padding: "9px 4px", fontSize: "14px", fontWeight: "600" }}>Back Office
            </a>{' '}
            <a href="/customer-experience" style={{ padding: "9px 4px", fontSize: "14px", fontWeight: "600" }}>Customer Experience
            </a>{' '}
            <a href="/integrations" style={{ padding: "9px 4px", fontSize: "14px", fontWeight: "600" }}>Integrations
            </a>
            <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "9px", color: "#9aa3b2", letterSpacing: ".08em", margin: "10px 0 2px" }}>EXPLORE
            </div>
            <a href="/for-retailers" style={{ padding: "9px 4px", fontSize: "14px", fontWeight: "600" }}>For Retailers
            </a>{' '}
            <a href="/for-brands" style={{ padding: "9px 4px", fontSize: "14px", fontWeight: "600" }}>For Brands
            </a>{' '}
            <a href="/how-it-works" style={{ padding: "9px 4px", fontSize: "14px", fontWeight: "600" }}>How It Works
            </a>{' '}
            <a href="/pricing" style={{ padding: "9px 4px", fontSize: "14px", fontWeight: "600" }}>Pricing
            </a>{' '}
            <a href="/resources" style={{ padding: "9px 4px", fontSize: "14px", fontWeight: "600" }}>Resources
            </a>{' '}
            <a href="https://app.axy.net/authentication" style={{ padding: "9px 4px", fontSize: "14px", fontWeight: "600", color: "#667085" }}>Log in
            </a>
          </div>
        </>) : null}
      </div>
  );
}
