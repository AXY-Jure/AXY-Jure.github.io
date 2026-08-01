import React from 'react';
import { css } from '../lib/css.js';

export default function About(v) {
  return (
    <>
      <div data-screen-label="About AXY">
        <div style={{ background: "linear-gradient(135deg,#1F2B4D,#32415C 62%,#2C6570)", padding: "66px 24px 58px" }}>
          <div style={{ maxWidth: "1080px", margin: "0 auto" }}>
            <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "10.5px", letterSpacing: ".13em", color: "#33D6A4", textTransform: "uppercase" }}>About AXY
            </div>
            <h1 style={{ fontSize: "36px", fontWeight: "800", color: "#fff", lineHeight: "1.13", margin: "14px 0 0", maxWidth: "640px" }}>Built on the shop floor, not in a slide deck.
            </h1>
            <p style={{ fontSize: "15px", color: "#C9D2E4", lineHeight: "1.6", margin: "16px 0 0", maxWidth: "600px" }}>AXY is a retail sales and collaboration platform that captures what happens in-store and turns it into better follow-up, product demand intelligence and connected partner workflows.
            </p>
            <div style={{ marginTop: "22px" }}>
              <a className="hv152" href="/book-a-walkthrough" style={{ display: "inline-flex", padding: "13px 22px", background: "#fff", color: "#1F2B4D", borderRadius: "10px", fontSize: "14px", fontWeight: "700" }}>Get guided setup
              </a>
            </div>
          </div>
        </div>
        <div style={{ background: "#fff", padding: "64px 24px" }}>
          <div style={{ maxWidth: "1080px", margin: "0 auto" }}>
            <div style={{ maxWidth: "780px", margin: "0 auto" }}>
              <h2 style={{ fontSize: "25px", fontWeight: "800", lineHeight: "1.2" }}>Why AXY exists
              </h2>
              <p style={{ fontSize: "14.5px", color: "#3a4358", lineHeight: "1.7", margin: "14px 0 0" }}>AXY comes from years of operating luxury watch and jewellery retail — running sales floors, service desks and brand relationships. The same problem appeared every single day: the store learned enormous amounts about customers and products, and almost all of it evaporated by closing time. CRMs modelled pipelines, ERPs modelled stock — nothing modelled the visit.
              </p>
              <p style={{ fontSize: "14.5px", color: "#3a4358", lineHeight: "1.7", margin: "12px 0 0" }}>So we built the missing layer: capture that costs seconds, continuation the customer actually values, and intelligence that respects who owns what. The vision — the intelligence layer connecting retailers, brands, sales teams, products and customers — starts with that unglamorous, practical gap.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(230px,1fr))", gap: "14px", marginTop: "30px" }}>
              <div style={{ background: "#fff", border: "1px solid #E4E8EF", borderRadius: "14px", padding: "19px" }}>
                <div style={{ fontSize: "14.5px", fontWeight: "800", marginTop: "0px" }}>Retailer relationship first
                </div>
                <p style={{ fontSize: "12.5px", color: "#667085", lineHeight: "1.55", margin: "7px 0 0" }}>AXY strengthens the retailer’s customer relationship — it never competes with it.
                </p>
              </div>
              <div style={{ background: "#fff", border: "1px solid #E4E8EF", borderRadius: "14px", padding: "19px" }}>
                <div style={{ fontSize: "14.5px", fontWeight: "800", marginTop: "0px" }}>Permission-based collaboration
                </div>
                <p style={{ fontSize: "12.5px", color: "#667085", lineHeight: "1.55", margin: "7px 0 0" }}>Sharing between partners is explicit, scoped and reversible.
                </p>
              </div>
              <div style={{ background: "#fff", border: "1px solid #E4E8EF", borderRadius: "14px", padding: "19px" }}>
                <div style={{ fontSize: "14.5px", fontWeight: "800", marginTop: "0px" }}>Practical workflows
                </div>
                <p style={{ fontSize: "12.5px", color: "#667085", lineHeight: "1.55", margin: "7px 0 0" }}>If it slows the sales floor, it does not ship.
                </p>
              </div>
              <div style={{ background: "#fff", border: "1px solid #E4E8EF", borderRadius: "14px", padding: "19px" }}>
                <div style={{ fontSize: "14.5px", fontWeight: "800", marginTop: "0px" }}>Structured context
                </div>
                <p style={{ fontSize: "12.5px", color: "#667085", lineHeight: "1.55", margin: "7px 0 0" }}>Signals beat notes. Structure is what makes activity usable.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div style={{ background: "#F9FAFB", padding: "64px 24px" }}>
          <div style={{ maxWidth: "1080px", margin: "0 auto" }}>
            <div style={{ maxWidth: "860px", margin: "0 auto", display: "flex", gap: "14px", flexWrap: "wrap" }}>
              <div style={{ flex: "1", minWidth: "260px", background: "#fff", border: "1px solid #E4E8EF", borderRadius: "14px", padding: "19px" }}>
                <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "9px", color: "#667085" }}>FOUNDER AND TEAM
                </div>
                <p style={{ fontSize: "12.5px", color: "#3a4358", lineHeight: "1.6", margin: "9px 0 0" }}>AXY is led by founder Jure Malalan and built by a team combining first-hand premium retail experience with product and software delivery.
                </p>
              </div>
              <div style={{ flex: "1", minWidth: "260px", background: "#fff", border: "1px solid #E4E8EF", borderRadius: "14px", padding: "19px" }}>
                <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "9px", color: "#667085" }}>COMPANY
                </div>
                <p style={{ fontSize: "12.5px", color: "#3a4358", lineHeight: "1.6", margin: "9px 0 0" }}>AXY is a product of{' '}
                  <strong>XY Sales d.o.o.
                  </strong>{' '}in Zagreb, Croatia.
                </p>
              </div>
              <div style={{ flex: "1", minWidth: "260px", background: "#fff", border: "1px solid #E4E8EF", borderRadius: "14px", padding: "19px" }}>
                <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "9px", color: "#667085" }}>PRODUCT STATUS
                </div>
                <p style={{ fontSize: "12.5px", color: "#3a4358", lineHeight: "1.6", margin: "9px 0 0" }}>Capabilities are labelled Live, Beta or Planned across this site — the roadmap is stated honestly, never implied as shipped.
                </p>
              </div>
            </div>
            <div style={{ textAlign: "center", marginTop: "30px", display: "flex", justifyContent: "center", gap: "12px", flexWrap: "wrap" }}>
              <a className="hv153" href="/book-a-walkthrough" style={{ display: "inline-flex", padding: "13px 22px", background: "#32415C", color: "#fff", borderRadius: "10px", fontSize: "14px", fontWeight: "700" }}>Get guided setup
              </a>
              <a className="hv154" href="/how-it-works" style={{ display: "inline-flex", padding: "13px 22px", border: "1.5px solid #32415C", color: "#32415C", borderRadius: "10px", fontSize: "14px", fontWeight: "600" }}>See how AXY works
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
