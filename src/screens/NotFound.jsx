import React from 'react';
import { css } from '../lib/css.js';

export default function NotFound(v) {
  return (
    <>
      <div data-screen-label="404">
        <div style={{ background: "#F9FAFB", padding: "90px 24px", minHeight: "55vh", textAlign: "center" }}>
          <div style={{ maxWidth: "520px", margin: "0 auto" }}>
            <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "11px", color: "#2C8C99", letterSpacing: ".13em" }}>404
            </div>
            <h1 style={{ fontSize: "30px", fontWeight: "800", color: "#1F2B4D", margin: "12px 0 0" }}>This page does not exist.
            </h1>
            <p style={{ fontSize: "14px", color: "#667085", lineHeight: "1.6", margin: "12px 0 0" }}>The link may be outdated — here is where to go instead.
            </p>
            <div style={{ display: "flex", justifyContent: "center", gap: "16px", marginTop: "20px", flexWrap: "wrap" }}>
              <a href="/" style={{ fontSize: "13.5px", fontWeight: "700", color: "#2C8C99" }}>Homepage →
              </a>
              <a href="/product" style={{ fontSize: "13.5px", fontWeight: "700", color: "#2C8C99" }}>Product →
              </a>
              <a href="/help" style={{ fontSize: "13.5px", fontWeight: "700", color: "#2C8C99" }}>Help Centre →
              </a>
              <a href="/book-a-walkthrough#schedule" style={{ fontSize: "13.5px", fontWeight: "700", color: "#2C8C99" }}>Book a walkthrough →
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
