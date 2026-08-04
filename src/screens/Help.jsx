import React from 'react';
import { css } from '../lib/css.js';

export default function Help(v) {
  return (
    <>
      <div data-screen-label="Help Centre">
        <div style={{ background: "#F9FAFB", padding: "60px 24px" }}>
          <div style={{ maxWidth: "760px", margin: "0 auto", textAlign: "center" }}>
            <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "10.5px", letterSpacing: ".13em", color: "#2C8C99", textTransform: "uppercase" }}>Help Centre
            </div>
            <h1 style={{ fontSize: "32px", fontWeight: "800", color: "#1F2B4D", margin: "14px 0 0" }}>How can we help?
            </h1>
            <p style={{ fontSize: "14px", color: "#667085", lineHeight: "1.65", margin: "14px auto 0", maxWidth: "560px" }}>Browse the guidance below or email <a href="mailto:support@axy.net" style={{ color: "#2C8C99", fontWeight: "700" }}>support@axy.net</a> for direct help.</p>
          </div>
        </div>
        <div style={{ background: "#fff", padding: "64px 24px" }}>
          <div style={{ maxWidth: "1080px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", maxWidth: "660px", margin: "0 auto" }}>
              <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "10.5px", letterSpacing: ".13em", color: "#2C8C99", textTransform: "uppercase" }}>Browse by topic
              </div>
              <h2 style={{ fontSize: "27px", fontWeight: "800", lineHeight: "1.16", margin: "12px 0 0" }}>Twelve categories, every workflow
              </h2>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: "10px", marginTop: "28px" }}>
              <a className="hv155" href="/article" style={{ display: "block", background: "#F9FAFB", border: "1px solid #E4E8EF", borderRadius: "11px", padding: "14px 16px", fontSize: "13.5px", fontWeight: "700", color: "#1F2B4D" }}>Getting started
              </a>
              <a className="hv156" href="/article" style={{ display: "block", background: "#F9FAFB", border: "1px solid #E4E8EF", borderRadius: "11px", padding: "14px 16px", fontSize: "13.5px", fontWeight: "700", color: "#1F2B4D" }}>Company setup
              </a>
              <a className="hv157" href="/article" style={{ display: "block", background: "#F9FAFB", border: "1px solid #E4E8EF", borderRadius: "11px", padding: "14px 16px", fontSize: "13.5px", fontWeight: "700", color: "#1F2B4D" }}>Users and permissions
              </a>
              <a className="hv158" href="/article" style={{ display: "block", background: "#F9FAFB", border: "1px solid #E4E8EF", borderRadius: "11px", padding: "14px 16px", fontSize: "13.5px", fontWeight: "700", color: "#1F2B4D" }}>Products and properties
              </a>
              <a className="hv159" href="/article" style={{ display: "block", background: "#F9FAFB", border: "1px solid #E4E8EF", borderRadius: "11px", padding: "14px 16px", fontSize: "13.5px", fontWeight: "700", color: "#1F2B4D" }}>Sales App
              </a>
              <a className="hv160" href="/article" style={{ display: "block", background: "#F9FAFB", border: "1px solid #E4E8EF", borderRadius: "11px", padding: "14px 16px", fontSize: "13.5px", fontWeight: "700", color: "#1F2B4D" }}>Customer Experience
              </a>
              <a className="hv161" href="/article" style={{ display: "block", background: "#F9FAFB", border: "1px solid #E4E8EF", borderRadius: "11px", padding: "14px 16px", fontSize: "13.5px", fontWeight: "700", color: "#1F2B4D" }}>Orders and inventory
              </a>
              <a className="hv162" href="/article" style={{ display: "block", background: "#F9FAFB", border: "1px solid #E4E8EF", borderRadius: "11px", padding: "14px 16px", fontSize: "13.5px", fontWeight: "700", color: "#1F2B4D" }}>Service and warranty
              </a>
              <a className="hv163" href="/article" style={{ display: "block", background: "#F9FAFB", border: "1px solid #E4E8EF", borderRadius: "11px", padding: "14px 16px", fontSize: "13.5px", fontWeight: "700", color: "#1F2B4D" }}>Messaging
              </a>
              <a className="hv164" href="/article" style={{ display: "block", background: "#F9FAFB", border: "1px solid #E4E8EF", borderRadius: "11px", padding: "14px 16px", fontSize: "13.5px", fontWeight: "700", color: "#1F2B4D" }}>Integrations
              </a>
              <a className="hv165" href="/article" style={{ display: "block", background: "#F9FAFB", border: "1px solid #E4E8EF", borderRadius: "11px", padding: "14px 16px", fontSize: "13.5px", fontWeight: "700", color: "#1F2B4D" }}>Billing
              </a>
              <a className="hv166" href="/article" style={{ display: "block", background: "#F9FAFB", border: "1px solid #E4E8EF", borderRadius: "11px", padding: "14px 16px", fontSize: "13.5px", fontWeight: "700", color: "#1F2B4D" }}>Troubleshooting
              </a>
            </div>
            <div style={{ maxWidth: "760px", margin: "30px auto 0" }}>
              <div style={{ fontSize: "15px", fontWeight: "800" }}>Popular guides
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginTop: "12px" }}>
                <a className="hv167" href="/article" style={{ display: "flex", justifyContent: "space-between", gap: "10px", background: "#fff", border: "1px solid #E4E8EF", borderRadius: "10px", padding: "12px 15px", fontSize: "13.5px", fontWeight: "600", color: "#1F2B4D" }}>Set up your first business unit
                  <span style={{ color: "#2C8C99" }}>→
                  </span>
                </a>
                <a className="hv168" href="/article" style={{ display: "flex", justifyContent: "space-between", gap: "10px", background: "#fff", border: "1px solid #E4E8EF", borderRadius: "10px", padding: "12px 15px", fontSize: "13.5px", fontWeight: "600", color: "#1F2B4D" }}>Add products with category properties
                  <span style={{ color: "#2C8C99" }}>→
                  </span>
                </a>
                <a className="hv169" href="/article" style={{ display: "flex", justifyContent: "space-between", gap: "10px", background: "#fff", border: "1px solid #E4E8EF", borderRadius: "10px", padding: "12px 15px", fontSize: "13.5px", fontWeight: "600", color: "#1F2B4D" }}>Start and complete a sales visit
                  <span style={{ color: "#2C8C99" }}>→
                  </span>
                </a>
                <a className="hv170" href="/article" style={{ display: "flex", justifyContent: "space-between", gap: "10px", background: "#fff", border: "1px solid #E4E8EF", borderRadius: "10px", padding: "12px 15px", fontSize: "13.5px", fontWeight: "600", color: "#1F2B4D" }}>Create roles and permissions
                  <span style={{ color: "#2C8C99" }}>→
                  </span>
                </a>
                <a className="hv171" href="/article" style={{ display: "flex", justifyContent: "space-between", gap: "10px", background: "#fff", border: "1px solid #E4E8EF", borderRadius: "10px", padding: "12px 15px", fontSize: "13.5px", fontWeight: "600", color: "#1F2B4D" }}>Activate a digital warranty
                  <span style={{ color: "#2C8C99" }}>→
                  </span>
                </a>
              </div>
              <div style={{ display: "flex", gap: "12px", marginTop: "22px", flexWrap: "wrap" }}>
                <a className="hv172" href="mailto:support@axy.net" style={{ display: "inline-flex", padding: "13px 22px", border: "1.5px solid #32415C", color: "#32415C", borderRadius: "10px", fontSize: "14px", fontWeight: "600" }}>Contact support
                </a>
                <a className="hv173" href="https://app.axy.net/authentication" style={{ display: "inline-flex", padding: "13px 22px", border: "1.5px solid #32415C", color: "#32415C", borderRadius: "10px", fontSize: "14px", fontWeight: "600" }}>Log in to AXY
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
