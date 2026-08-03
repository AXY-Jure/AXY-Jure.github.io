import React from 'react';
import { css } from '../lib/css.js';

export default function CustomerExperience(v) {
  return (
    <>
      <div data-screen-label="Customer Experience">
        <div style={{ position: "relative", overflow: "hidden", background: "linear-gradient(120deg,#FCF3EE,#F6E3DA)", padding: "72px 24px 64px" }}>
          <div style={{ position: "absolute", top: "-100px", right: "-70px", width: "440px", height: "340px", background: "radial-gradient(circle,rgba(201,123,84,.16),transparent 70%)" }}></div>
          <div style={{ position: "relative", maxWidth: "1120px", margin: "0 auto", display: "flex", gap: "48px", alignItems: "center", flexWrap: "wrap" }}>
            <div style={{ flex: "1.02", minWidth: "320px" }}>
              <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "10.5px", letterSpacing: ".14em", color: "#B5744B", textTransform: "uppercase" }}>Customer App
              </div>
              <h1 style={{ fontSize: "39px", fontWeight: "800", color: "#1F2B4D", lineHeight: "1.12", letterSpacing: "-.018em", margin: "14px 0 0" }}>Everything you buy, love and explore — in one place.
              </h1>
              <p style={{ fontSize: "14.5px", color: "#7a6152", lineHeight: "1.6", margin: "13px 0 0", maxWidth: "560px" }}>Give customers one app for their products, invoices, warranties, wishlists, store visits and favourite retailers — while keeping every relationship connected to the stores they choose.
              </p>
              <div style={{ display: "flex", gap: "12px", marginTop: "26px", flexWrap: "wrap" }}>
                <a className="hv95" href="/book-a-walkthrough#schedule" style={{ display: "inline-flex", padding: "13px 22px", background: "#32415C", color: "#fff", borderRadius: "10px", fontSize: "14px", fontWeight: "700" }}>Get guided setup
                </a>
                <a className="hv96" href="/for-retailers" style={{ display: "inline-flex", padding: "13px 22px", border: "1.5px solid #C98B63", color: "#9a5a34", borderRadius: "10px", fontSize: "14px", fontWeight: "600" }}>Explore AXY for retailers
                </a>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "22px" }}>
                <span style={{ fontSize: "11.5px", color: "#7a4a2e", background: "#fff", border: "1px solid #F0DDD2", borderRadius: "8px", padding: "5px 11px" }}>Store visits
                </span>
                <span style={{ fontSize: "11.5px", color: "#7a4a2e", background: "#fff", border: "1px solid #F0DDD2", borderRadius: "8px", padding: "5px 11px" }}>Owned products
                </span>
                <span style={{ fontSize: "11.5px", color: "#7a4a2e", background: "#fff", border: "1px solid #F0DDD2", borderRadius: "8px", padding: "5px 11px" }}>Wishlist
                </span>
                <span style={{ fontSize: "11.5px", color: "#7a4a2e", background: "#fff", border: "1px solid #F0DDD2", borderRadius: "8px", padding: "5px 11px" }}>Invoices & warranties
                </span>
                <span style={{ fontSize: "11.5px", color: "#7a4a2e", background: "#fff", border: "1px solid #F0DDD2", borderRadius: "8px", padding: "5px 11px" }}>Favourite stores
                </span>
                <span style={{ fontSize: "11.5px", color: "#7a4a2e", background: "#fff", border: "1px solid #F0DDD2", borderRadius: "8px", padding: "5px 11px" }}>Recommendations
                </span>
              </div>
            </div>
            <div style={{ flex: "1", minWidth: "300px", maxWidth: "400px", margin: "0 auto" }}>
              <div style={{ borderRadius: "22px", overflow: "hidden", boxShadow: "0 28px 60px rgba(122,82,60,.24)", border: "1px solid #F0DDD2" }}>
                <img src="/images/customer-wide-home.jpg" alt="AXY Customer App home hub showing announcements, upcoming appointment, services, owned products and recently viewed items in a retailer-branded theme" style={{ display: "block", width: "100%", height: "auto" }} />
              </div>
            </div>
          </div>
          <div style={{ position: "relative", maxWidth: "1120px", margin: "16px auto 0", textAlign: "center" }}>
            <span style={{ fontSize: "12.5px", color: "#9a7a63" }}>One personal retail profile that follows the customer across the stores they choose.
            </span>
          </div>
        </div>
        <div style={{ background: "#fff", padding: "74px 24px" }}>
          <div style={{ maxWidth: "1120px", margin: "0 auto" }}>
            <div style={{ maxWidth: "700px" }}>
              <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "10.5px", letterSpacing: ".14em", color: "#B5744B", textTransform: "uppercase" }}>Your products, organised
              </div>
              <h2 style={{ fontSize: "28px", fontWeight: "800", color: "#1F2B4D", lineHeight: "1.16", letterSpacing: "-.01em", margin: "12px 0 0" }}>Every purchase, invoice and warranty in one personal library.
              </h2>
              <p style={{ fontSize: "14.5px", color: "#667085", lineHeight: "1.6", margin: "13px 0 0", maxWidth: "560px" }}>Customers keep products bought from connected stores together with their invoices, warranty information, service history and important documents.
              </p>
            </div>
            <div style={{ display: "flex", gap: "44px", alignItems: "center", flexWrap: "wrap", marginTop: "30px" }}>
              <div style={{ flex: "1", minWidth: "300px" }}>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  <span style={{ fontSize: "11.5px", color: "#1F2B4D", background: "#F7F4F1", border: "1px solid #ECE3DA", borderRadius: "8px", padding: "5px 11px" }}>Owned products
                  </span>
                  <span style={{ fontSize: "11.5px", color: "#1F2B4D", background: "#F7F4F1", border: "1px solid #ECE3DA", borderRadius: "8px", padding: "5px 11px" }}>Purchase history
                  </span>
                  <span style={{ fontSize: "11.5px", color: "#1F2B4D", background: "#F7F4F1", border: "1px solid #ECE3DA", borderRadius: "8px", padding: "5px 11px" }}>Invoices
                  </span>
                  <span style={{ fontSize: "11.5px", color: "#1F2B4D", background: "#F7F4F1", border: "1px solid #ECE3DA", borderRadius: "8px", padding: "5px 11px" }}>Digital warranty cards
                  </span>
                  <span style={{ fontSize: "11.5px", color: "#1F2B4D", background: "#F7F4F1", border: "1px solid #ECE3DA", borderRadius: "8px", padding: "5px 11px" }}>Warranty activation & extension
                  </span>
                  <span style={{ fontSize: "11.5px", color: "#1F2B4D", background: "#F7F4F1", border: "1px solid #ECE3DA", borderRadius: "8px", padding: "5px 11px" }}>Product documents
                  </span>
                  <span style={{ fontSize: "11.5px", color: "#1F2B4D", background: "#F7F4F1", border: "1px solid #ECE3DA", borderRadius: "8px", padding: "5px 11px" }}>Serial & reference info
                  </span>
                  <span style={{ fontSize: "11.5px", color: "#1F2B4D", background: "#F7F4F1", border: "1px solid #ECE3DA", borderRadius: "8px", padding: "5px 11px" }}>Service history
                  </span>
                  <span style={{ fontSize: "11.5px", color: "#1F2B4D", background: "#F7F4F1", border: "1px solid #ECE3DA", borderRadius: "8px", padding: "5px 11px" }}>Manuals & care
                  </span>
                </div>
                <div style={{ display: "flex", gap: "10px", alignItems: "flex-start", marginTop: "18px", background: "#fff", borderLeft: "3px solid #C98B63", borderRadius: "0 10px 10px 0", padding: "12px 15px" }}>
                  <span style={{ fontSize: "12.5px", color: "#1F2B4D", lineHeight: "1.5" }}>
                    <strong>No more searching through emails, paper receipts or separate store accounts.
                    </strong>
                  </span>
                </div>
              </div>
              <div style={{ flex: "1", minWidth: "300px", maxWidth: "380px", margin: "0 auto" }}>
                <div style={{ borderRadius: "22px", overflow: "hidden", boxShadow: "0 28px 60px rgba(122,82,60,.24)", border: "1px solid #F0DDD2" }}>
                  <img src="/images/customer-wide-catalogue.jpg" alt="AXY Customer App product detail with specifications, reference number, digital warranty context, wishlist, share and send-inquiry actions" style={{ display: "block", width: "100%", height: "auto" }} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ background: "#FCF3EE", padding: "74px 24px" }}>
          <div style={{ maxWidth: "1120px", margin: "0 auto" }}>
            <div style={{ maxWidth: "700px" }}>
              <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "10.5px", letterSpacing: ".14em", color: "#B5744B", textTransform: "uppercase" }}>A profile built around taste
              </div>
              <h2 style={{ fontSize: "28px", fontWeight: "800", color: "#1F2B4D", lineHeight: "1.16", letterSpacing: "-.01em", margin: "12px 0 0" }}>A profile that makes every experience more relevant.
              </h2>
              <p style={{ fontSize: "14.5px", color: "#7a6152", lineHeight: "1.6", margin: "13px 0 0", maxWidth: "560px" }}>Wishlists, preferred item types, colours, styles, brands and previous interactions help AXY understand what the customer is looking for — built by simply reacting to products, not filling in a long form.
              </p>
            </div>
            <div style={{ display: "flex", gap: "44px", alignItems: "center", flexWrap: "wrap", marginTop: "30px" }}>
              <div style={{ flex: "1", minWidth: "300px", maxWidth: "380px", margin: "0 auto", order: "1" }}>
                <div style={{ borderRadius: "22px", overflow: "hidden", boxShadow: "0 28px 60px rgba(122,82,60,.24)", border: "1px solid #F0DDD2" }}>
                  <img src="/images/customer-wide-announcement.jpg" alt="AXY Customer App swipe-to-choose product screen letting a customer react to a watch to build their taste profile" style={{ display: "block", width: "100%", height: "auto" }} />
                </div>
              </div>
              <div style={{ flex: "1", minWidth: "300px", order: "2" }}>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  <span style={{ fontSize: "11.5px", color: "#7a4a2e", background: "#fff", border: "1px solid #F0DDD2", borderRadius: "8px", padding: "5px 11px" }}>Wishlist
                  </span>
                  <span style={{ fontSize: "11.5px", color: "#7a4a2e", background: "#fff", border: "1px solid #F0DDD2", borderRadius: "8px", padding: "5px 11px" }}>Favourite brands
                  </span>
                  <span style={{ fontSize: "11.5px", color: "#7a4a2e", background: "#fff", border: "1px solid #F0DDD2", borderRadius: "8px", padding: "5px 11px" }}>Preferred item types
                  </span>
                  <span style={{ fontSize: "11.5px", color: "#7a4a2e", background: "#fff", border: "1px solid #F0DDD2", borderRadius: "8px", padding: "5px 11px" }}>Style preferences
                  </span>
                  <span style={{ fontSize: "11.5px", color: "#7a4a2e", background: "#fff", border: "1px solid #F0DDD2", borderRadius: "8px", padding: "5px 11px" }}>Colour palette
                  </span>
                  <span style={{ fontSize: "11.5px", color: "#7a4a2e", background: "#fff", border: "1px solid #F0DDD2", borderRadius: "8px", padding: "5px 11px" }}>Sizes & attributes
                  </span>
                  <span style={{ fontSize: "11.5px", color: "#7a4a2e", background: "#fff", border: "1px solid #F0DDD2", borderRadius: "8px", padding: "5px 11px" }}>Products owned
                  </span>
                  <span style={{ fontSize: "11.5px", color: "#7a4a2e", background: "#fff", border: "1px solid #F0DDD2", borderRadius: "8px", padding: "5px 11px" }}>Previously explored
                  </span>
                  <span style={{ fontSize: "11.5px", color: "#7a4a2e", background: "#fff", border: "1px solid #F0DDD2", borderRadius: "8px", padding: "5px 11px" }}>Favourite stores
                  </span>
                </div>
                <div style={{ display: "flex", gap: "10px", alignItems: "flex-start", marginTop: "18px", background: "#fff", borderLeft: "3px solid #C98B63", borderRadius: "0 10px 10px 0", padding: "12px 15px" }}>
                  <span style={{ fontSize: "12.5px", color: "#1F2B4D", lineHeight: "1.5" }}>
                    <strong>The customer sets preferences once and uses them across the store relationships they choose.
                    </strong>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ background: "#fff", padding: "74px 24px" }}>
          <div style={{ maxWidth: "1120px", margin: "0 auto" }}>
            <div style={{ maxWidth: "700px" }}>
              <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "10.5px", letterSpacing: ".14em", color: "#2C8C99", textTransform: "uppercase" }}>The customer chooses the relationship
              </div>
              <h2 style={{ fontSize: "28px", fontWeight: "800", color: "#1F2B4D", lineHeight: "1.16", letterSpacing: "-.01em", margin: "12px 0 0" }}>Only connected stores become part of the customer’s experience.
              </h2>
              <p style={{ fontSize: "14.5px", color: "#667085", lineHeight: "1.6", margin: "13px 0 0", maxWidth: "560px" }}>The app shows stores the customer has visited, selected or explicitly connected with. It never automatically promotes unrelated retailers or exposes the customer to every AXY location.
              </p>
            </div>
            <div style={{ display: "flex", gap: "44px", alignItems: "flex-start", flexWrap: "wrap", marginTop: "30px" }}>
              <div style={{ flex: "1", minWidth: "300px", maxWidth: "360px", margin: "0 auto" }}>
                <div style={{ borderRadius: "22px", overflow: "hidden", boxShadow: "0 28px 60px rgba(122,82,60,.24)", border: "1px solid #F0DDD2" }}>
                  <img src="/images/customer-wide-brand.jpg" alt="AXY Customer App connected store space for a chosen retailer, showing its announcements, the customer’s purchases and suggested products" style={{ display: "block", width: "100%", height: "auto" }} />
                </div>
              </div>
              <div style={{ flex: "1.1", minWidth: "320px" }}>
                <div className="cx-two" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
                  <div style={{ background: "#F8FAFB", border: "1px solid #E4EAF0", borderRadius: "12px", padding: "14px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "7px" }}>
                      <span style={{ width: "16px", height: "16px", borderRadius: "50%", background: "#EFF7F8", color: "#2C8C99", fontSize: "9px", display: "flex", alignItems: "center", justifyContent: "center" }}>✓
                      </span>
                      <span style={{ fontSize: "12.5px", fontWeight: "700", color: "#1F2B4D" }}>Customers decide which stores appear
                      </span>
                    </div>
                    <p style={{ fontSize: "11.5px", color: "#667085", lineHeight: "1.5", margin: "6px 0 0" }}>Only visited, selected or explicitly connected stores show up.
                    </p>
                  </div>
                  <div style={{ background: "#F8FAFB", border: "1px solid #E4EAF0", borderRadius: "12px", padding: "14px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "7px" }}>
                      <span style={{ width: "16px", height: "16px", borderRadius: "50%", background: "#EFF7F8", color: "#2C8C99", fontSize: "9px", display: "flex", alignItems: "center", justifyContent: "center" }}>✓
                      </span>
                      <span style={{ fontSize: "12.5px", fontWeight: "700", color: "#1F2B4D" }}>Each store sees only permitted information
                      </span>
                    </div>
                    <p style={{ fontSize: "11.5px", color: "#667085", lineHeight: "1.5", margin: "6px 0 0" }}>Visibility follows that single store relationship.
                    </p>
                  </div>
                  <div style={{ background: "#F8FAFB", border: "1px solid #E4EAF0", borderRadius: "12px", padding: "14px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "7px" }}>
                      <span style={{ width: "16px", height: "16px", borderRadius: "50%", background: "#EFF7F8", color: "#2C8C99", fontSize: "9px", display: "flex", alignItems: "center", justifyContent: "center" }}>✓
                      </span>
                      <span style={{ fontSize: "12.5px", fontWeight: "700", color: "#1F2B4D" }}>Store activity stays with that store
                      </span>
                    </div>
                    <p style={{ fontSize: "11.5px", color: "#667085", lineHeight: "1.5", margin: "6px 0 0" }}>Visits and communication remain linked to their source.
                    </p>
                  </div>
                  <div style={{ background: "#F8FAFB", border: "1px solid #E4EAF0", borderRadius: "12px", padding: "14px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "7px" }}>
                      <span style={{ width: "16px", height: "16px", borderRadius: "50%", background: "#EFF7F8", color: "#2C8C99", fontSize: "9px", display: "flex", alignItems: "center", justifyContent: "center" }}>✓
                      </span>
                      <span style={{ fontSize: "12.5px", fontWeight: "700", color: "#1F2B4D" }}>Internal retailer notes stay private
                      </span>
                    </div>
                    <p style={{ fontSize: "11.5px", color: "#667085", lineHeight: "1.5", margin: "6px 0 0" }}>The customer never sees a store’s internal notes.
                    </p>
                  </div>
                  <div style={{ background: "#F8FAFB", border: "1px solid #E4EAF0", borderRadius: "12px", padding: "14px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "7px" }}>
                      <span style={{ width: "16px", height: "16px", borderRadius: "50%", background: "#EFF7F8", color: "#2C8C99", fontSize: "9px", display: "flex", alignItems: "center", justifyContent: "center" }}>✓
                      </span>
                      <span style={{ fontSize: "12.5px", fontWeight: "700", color: "#1F2B4D" }}>Unrelated stores gain no access
                      </span>
                    </div>
                    <p style={{ fontSize: "11.5px", color: "#667085", lineHeight: "1.5", margin: "6px 0 0" }}>No automatic exposure to other AXY locations.
                    </p>
                  </div>
                  <div style={{ background: "#F8FAFB", border: "1px solid #E4EAF0", borderRadius: "12px", padding: "14px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "7px" }}>
                      <span style={{ width: "16px", height: "16px", borderRadius: "50%", background: "#EFF7F8", color: "#2C8C99", fontSize: "9px", display: "flex", alignItems: "center", justifyContent: "center" }}>✓
                      </span>
                      <span style={{ fontSize: "12.5px", fontWeight: "700", color: "#1F2B4D" }}>Manage or disconnect anytime
                      </span>
                    </div>
                    <p style={{ fontSize: "11.5px", color: "#667085", lineHeight: "1.5", margin: "6px 0 0" }}>Store relationships are always in the customer’s hands.
                    </p>
                  </div>
                </div>
                <div style={{ display: "flex", gap: "10px", alignItems: "flex-start", marginTop: "14px", background: "#1F2B4D", borderRadius: "12px", padding: "15px 17px" }}>
                  <svg viewBox="0 0 20 20" width="16" height="16" fill="none" stroke="#7fd4de" strokeWidth="1.7" style={{ flexShrink: "0", marginTop: "1px" }}>
                    <path d="M10 2.5l6 2.2v4.3c0 3.6-2.5 6.6-6 7.5-3.5-.9-6-3.9-6-7.5V4.7z"></path>
                  </svg>
                  <span style={{ fontSize: "12.5px", color: "#EAF0FB", lineHeight: "1.55" }}>The customer owns the profile. Each retailer owns its relationship.{' '}
                    <strong style={{ color: "#fff" }}>AXY connects the experience underneath.
                    </strong>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ background: "#FBF7F3", padding: "74px 24px" }}>
          <div style={{ maxWidth: "1120px", margin: "0 auto" }}>
            <div style={{ maxWidth: "700px" }}>
              <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "10.5px", letterSpacing: ".14em", color: "#B5744B", textTransform: "uppercase" }}>After the visit
              </div>
              <h2 style={{ fontSize: "28px", fontWeight: "800", color: "#1F2B4D", lineHeight: "1.16", letterSpacing: "-.01em", margin: "12px 0 0" }}>The store experience stays available after the customer leaves.
              </h2>
              <p style={{ fontSize: "14.5px", color: "#7a6152", lineHeight: "1.6", margin: "13px 0 0", maxWidth: "560px" }}>After a sales or service visit, customers can reopen the complete context and continue when they are ready.
              </p>
            </div>
            <div style={{ display: "flex", gap: "44px", alignItems: "center", flexWrap: "wrap", marginTop: "30px" }}>
              <div style={{ flex: "1", minWidth: "300px" }}>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  <span style={{ fontSize: "11.5px", color: "#7a4a2e", background: "#fff", border: "1px solid #F0DDD2", borderRadius: "8px", padding: "5px 11px" }}>Store visited
                  </span>
                  <span style={{ fontSize: "11.5px", color: "#7a4a2e", background: "#fff", border: "1px solid #F0DDD2", borderRadius: "8px", padding: "5px 11px" }}>Products viewed
                  </span>
                  <span style={{ fontSize: "11.5px", color: "#7a4a2e", background: "#fff", border: "1px solid #F0DDD2", borderRadius: "8px", padding: "5px 11px" }}>Liked or saved
                  </span>
                  <span style={{ fontSize: "11.5px", color: "#7a4a2e", background: "#fff", border: "1px solid #F0DDD2", borderRadius: "8px", padding: "5px 11px" }}>Recommendations
                  </span>
                  <span style={{ fontSize: "11.5px", color: "#7a4a2e", background: "#fff", border: "1px solid #F0DDD2", borderRadius: "8px", padding: "5px 11px" }}>Offer / quotation
                  </span>
                  <span style={{ fontSize: "11.5px", color: "#7a4a2e", background: "#fff", border: "1px solid #F0DDD2", borderRadius: "8px", padding: "5px 11px" }}>Inquiry
                  </span>
                  <span style={{ fontSize: "11.5px", color: "#7a4a2e", background: "#fff", border: "1px solid #F0DDD2", borderRadius: "8px", padding: "5px 11px" }}>Appointment booking
                  </span>
                  <span style={{ fontSize: "11.5px", color: "#7a4a2e", background: "#fff", border: "1px solid #F0DDD2", borderRadius: "8px", padding: "5px 11px" }}>Contact salesperson
                  </span>
                  <span style={{ fontSize: "11.5px", color: "#7a4a2e", background: "#fff", border: "1px solid #F0DDD2", borderRadius: "8px", padding: "5px 11px" }}>Service intake
                  </span>
                  <span style={{ fontSize: "11.5px", color: "#7a4a2e", background: "#fff", border: "1px solid #F0DDD2", borderRadius: "8px", padding: "5px 11px" }}>Repair status
                  </span>
                  <span style={{ fontSize: "11.5px", color: "#7a4a2e", background: "#fff", border: "1px solid #F0DDD2", borderRadius: "8px", padding: "5px 11px" }}>Follow-up actions
                  </span>
                </div>
                <div style={{ marginTop: "20px" }}>
                  <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "10px", marginTop: "8px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                        <span style={{ width: "26px", height: "26px", borderRadius: "50%", background: "#B5744B", color: "#fff", fontFamily: "'Roboto Mono',monospace", fontSize: "9.5px", fontWeight: "700", display: "flex", alignItems: "center", justifyContent: "center" }}>1
                        </span>
                        <span style={{ fontSize: "13px", fontWeight: "700", color: "#1F2B4D" }}>Store visit
                        </span>
                      </div>
                      <span style={{ width: "22px", height: "2px", background: "linear-gradient(90deg,#C98B63,#EBD6C7)", borderRadius: "2px" }}></span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                        <span style={{ width: "26px", height: "26px", borderRadius: "50%", background: "#B5744B", color: "#fff", fontFamily: "'Roboto Mono',monospace", fontSize: "9.5px", fontWeight: "700", display: "flex", alignItems: "center", justifyContent: "center" }}>2
                        </span>
                        <span style={{ fontSize: "13px", fontWeight: "700", color: "#1F2B4D" }}>Products viewed
                        </span>
                      </div>
                      <span style={{ width: "22px", height: "2px", background: "linear-gradient(90deg,#C98B63,#EBD6C7)", borderRadius: "2px" }}></span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                        <span style={{ width: "26px", height: "26px", borderRadius: "50%", background: "#B5744B", color: "#fff", fontFamily: "'Roboto Mono',monospace", fontSize: "9.5px", fontWeight: "700", display: "flex", alignItems: "center", justifyContent: "center" }}>3
                        </span>
                        <span style={{ fontSize: "13px", fontWeight: "700", color: "#1F2B4D" }}>App recap
                        </span>
                      </div>
                      <span style={{ width: "22px", height: "2px", background: "linear-gradient(90deg,#C98B63,#EBD6C7)", borderRadius: "2px" }}></span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                        <span style={{ width: "26px", height: "26px", borderRadius: "50%", background: "#B5744B", color: "#fff", fontFamily: "'Roboto Mono',monospace", fontSize: "9.5px", fontWeight: "700", display: "flex", alignItems: "center", justifyContent: "center" }}>4
                        </span>
                        <span style={{ fontSize: "13px", fontWeight: "700", color: "#1F2B4D" }}>Customer action
                        </span>
                      </div>
                      <span style={{ width: "22px", height: "2px", background: "linear-gradient(90deg,#C98B63,#EBD6C7)", borderRadius: "2px" }}></span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                        <span style={{ width: "26px", height: "26px", borderRadius: "50%", background: "#B5744B", color: "#fff", fontFamily: "'Roboto Mono',monospace", fontSize: "9.5px", fontWeight: "700", display: "flex", alignItems: "center", justifyContent: "center" }}>5
                        </span>
                        <span style={{ fontSize: "13px", fontWeight: "700", color: "#1F2B4D" }}>Store receives context
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div style={{ display: "flex", gap: "10px", alignItems: "flex-start", marginTop: "18px", background: "#fff", borderLeft: "3px solid #C98B63", borderRadius: "0 10px 10px 0", padding: "12px 15px" }}>
                  <span style={{ fontSize: "12.5px", color: "#1F2B4D", lineHeight: "1.5" }}>
                    <strong>The customer never has to start the conversation from zero.
                    </strong>
                  </span>
                </div>
              </div>
              <div style={{ flex: "1", minWidth: "300px", maxWidth: "360px", margin: "0 auto" }}>
                <div style={{ borderRadius: "22px", overflow: "hidden", boxShadow: "0 28px 60px rgba(122,82,60,.24)", border: "1px solid #F0DDD2" }}>
                  <img src="/images/customer-wide-visit.jpg" alt="AXY Customer App store-visit recap for an anniversary gift journey, showing viewed products, announcements and options to get opinions or book a visit" style={{ display: "block", width: "100%", height: "auto" }} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ background: "#fff", padding: "74px 24px" }}>
          <div style={{ maxWidth: "1120px", margin: "0 auto" }}>
            <div style={{ maxWidth: "720px" }}>
              <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "10.5px", letterSpacing: ".14em", color: "#B5744B", textTransform: "uppercase" }}>Personalised store journeys
              </div>
              <h2 style={{ fontSize: "28px", fontWeight: "800", color: "#1F2B4D", lineHeight: "1.16", letterSpacing: "-.01em", margin: "12px 0 0" }}>A new store can feel relevant from the first minute.
              </h2>
              <p style={{ fontSize: "14.5px", color: "#667085", lineHeight: "1.6", margin: "13px 0 0", maxWidth: "560px" }}>When a customer enters a new AXY-connected store, they can begin a guided journey based on the preferences in their profile — filtering that store’s real catalogue and available products.
              </p>
            </div>
            <div style={{ marginTop: "26px" }}>
              <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "10px", marginTop: "8px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <span style={{ width: "26px", height: "26px", borderRadius: "50%", background: "#B5744B", color: "#fff", fontFamily: "'Roboto Mono',monospace", fontSize: "9.5px", fontWeight: "700", display: "flex", alignItems: "center", justifyContent: "center" }}>1
                    </span>
                    <span style={{ fontSize: "13px", fontWeight: "700", color: "#1F2B4D" }}>Enter store
                    </span>
                  </div>
                  <span style={{ width: "22px", height: "2px", background: "linear-gradient(90deg,#C98B63,#EBD6C7)", borderRadius: "2px" }}></span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <span style={{ width: "26px", height: "26px", borderRadius: "50%", background: "#B5744B", color: "#fff", fontFamily: "'Roboto Mono',monospace", fontSize: "9.5px", fontWeight: "700", display: "flex", alignItems: "center", justifyContent: "center" }}>2
                    </span>
                    <span style={{ fontSize: "13px", fontWeight: "700", color: "#1F2B4D" }}>Start a journey
                    </span>
                  </div>
                  <span style={{ width: "22px", height: "2px", background: "linear-gradient(90deg,#C98B63,#EBD6C7)", borderRadius: "2px" }}></span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <span style={{ width: "26px", height: "26px", borderRadius: "50%", background: "#B5744B", color: "#fff", fontFamily: "'Roboto Mono',monospace", fontSize: "9.5px", fontWeight: "700", display: "flex", alignItems: "center", justifyContent: "center" }}>3
                    </span>
                    <span style={{ fontSize: "13px", fontWeight: "700", color: "#1F2B4D" }}>Choose the goal
                    </span>
                  </div>
                  <span style={{ width: "22px", height: "2px", background: "linear-gradient(90deg,#C98B63,#EBD6C7)", borderRadius: "2px" }}></span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <span style={{ width: "26px", height: "26px", borderRadius: "50%", background: "#B5744B", color: "#fff", fontFamily: "'Roboto Mono',monospace", fontSize: "9.5px", fontWeight: "700", display: "flex", alignItems: "center", justifyContent: "center" }}>4
                    </span>
                    <span style={{ fontSize: "13px", fontWeight: "700", color: "#1F2B4D" }}>Catalogue is filtered
                    </span>
                  </div>
                  <span style={{ width: "22px", height: "2px", background: "linear-gradient(90deg,#C98B63,#EBD6C7)", borderRadius: "2px" }}></span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <span style={{ width: "26px", height: "26px", borderRadius: "50%", background: "#B5744B", color: "#fff", fontFamily: "'Roboto Mono',monospace", fontSize: "9.5px", fontWeight: "700", display: "flex", alignItems: "center", justifyContent: "center" }}>5
                    </span>
                    <span style={{ fontSize: "13px", fontWeight: "700", color: "#1F2B4D" }}>Explore relevant products
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="cx-journey" style={{ display: "grid", gridTemplateColumns: "1fr 1.15fr", gap: "20px", marginTop: "26px", alignItems: "stretch" }}>
              <div style={{ background: "#F7F4F1", border: "1px solid #ECE3DA", borderRadius: "16px", padding: "22px" }}>
                <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "9.5px", color: "#B5744B", letterSpacing: ".1em" }}>EXAMPLE JOURNEY
                </div>
                <div style={{ fontSize: "17px", fontWeight: "800", color: "#1F2B4D", marginTop: "8px" }}>“I am shopping for myself”
                </div>
                <p style={{ fontSize: "13px", color: "#7a6152", lineHeight: "1.55", margin: "8px 0 14px" }}>AXY applies the customer’s selected preferences to filter that store’s actual catalogue and available stock.
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: "7px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "9px", background: "#fff", border: "1px solid #F0DDD2", borderRadius: "9px", padding: "9px 12px" }}>
                    <span style={{ width: "20px", height: "20px", borderRadius: "50%", background: "#FCF3EE", color: "#B5744B", fontFamily: "'Roboto Mono',monospace", fontSize: "9px", fontWeight: "700", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0" }}>1
                    </span>
                    <span style={{ fontSize: "12px", color: "#3a4358", fontWeight: "600" }}>Scan store QR code
                    </span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "9px", background: "#fff", border: "1px solid #F0DDD2", borderRadius: "9px", padding: "9px 12px" }}>
                    <span style={{ width: "20px", height: "20px", borderRadius: "50%", background: "#FCF3EE", color: "#B5744B", fontFamily: "'Roboto Mono',monospace", fontSize: "9px", fontWeight: "700", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0" }}>2
                    </span>
                    <span style={{ fontSize: "12px", color: "#3a4358", fontWeight: "600" }}>Choose shopping purpose
                    </span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "9px", background: "#fff", border: "1px solid #F0DDD2", borderRadius: "9px", padding: "9px 12px" }}>
                    <span style={{ width: "20px", height: "20px", borderRadius: "50%", background: "#FCF3EE", color: "#B5744B", fontFamily: "'Roboto Mono',monospace", fontSize: "9px", fontWeight: "700", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0" }}>3
                    </span>
                    <span style={{ fontSize: "12px", color: "#3a4358", fontWeight: "600" }}>Select categories or intent
                    </span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "9px", background: "#fff", border: "1px solid #F0DDD2", borderRadius: "9px", padding: "9px 12px" }}>
                    <span style={{ width: "20px", height: "20px", borderRadius: "50%", background: "#FCF3EE", color: "#B5744B", fontFamily: "'Roboto Mono',monospace", fontSize: "9px", fontWeight: "700", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0" }}>4
                    </span>
                    <span style={{ fontSize: "12px", color: "#3a4358", fontWeight: "600" }}>Apply personal preferences
                    </span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "9px", background: "#fff", border: "1px solid #F0DDD2", borderRadius: "9px", padding: "9px 12px" }}>
                    <span style={{ width: "20px", height: "20px", borderRadius: "50%", background: "#FCF3EE", color: "#B5744B", fontFamily: "'Roboto Mono',monospace", fontSize: "9px", fontWeight: "700", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0" }}>5
                    </span>
                    <span style={{ fontSize: "12px", color: "#3a4358", fontWeight: "600" }}>Browse filtered catalogue
                    </span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "9px", background: "#fff", border: "1px solid #F0DDD2", borderRadius: "9px", padding: "9px 12px" }}>
                    <span style={{ width: "20px", height: "20px", borderRadius: "50%", background: "#FCF3EE", color: "#B5744B", fontFamily: "'Roboto Mono',monospace", fontSize: "9px", fontWeight: "700", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0" }}>6
                    </span>
                    <span style={{ fontSize: "12px", color: "#3a4358", fontWeight: "600" }}>Save · request presentation · ask availability
                    </span>
                  </div>
                </div>
              </div>
              <div style={{ background: "linear-gradient(135deg,#FCF3EE,#F3E0D3)", border: "1px solid #F0DDD2", borderRadius: "16px", padding: "22px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "9.5px", color: "#9a5a34", letterSpacing: ".1em" }}>FILTERED FOR THIS VISIT
                </div>
                <div style={{ fontSize: "15px", fontWeight: "800", color: "#1F2B4D", marginTop: "8px" }}>Aurora Paris · relevant selection
                </div>
                <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginTop: "12px" }}>
                  <span style={{ fontSize: "11px", color: "#9a5a34", background: "#fff", border: "1px solid #EBD6C7", borderRadius: "20px", padding: "5px 11px" }}>Rose gold
                  </span>
                  <span style={{ fontSize: "11px", color: "#9a5a34", background: "#fff", border: "1px solid #EBD6C7", borderRadius: "20px", padding: "5px 11px" }}>Rings
                  </span>
                  <span style={{ fontSize: "11px", color: "#9a5a34", background: "#fff", border: "1px solid #EBD6C7", borderRadius: "20px", padding: "5px 11px" }}>Under € 15k
                  </span>
                  <span style={{ fontSize: "11px", color: "#9a5a34", background: "#fff", border: "1px solid #EBD6C7", borderRadius: "20px", padding: "5px 11px" }}>Minimal
                  </span>
                  <span style={{ fontSize: "11px", color: "#9a5a34", background: "#fff", border: "1px solid #EBD6C7", borderRadius: "20px", padding: "5px 11px" }}>In stock
                  </span>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "9px", marginTop: "14px" }}>
                  <div style={{ background: "#fff", border: "1px solid #F0DDD2", borderRadius: "10px", aspectRatio: "1", display: "flex", alignItems: "center", justifyContent: "center", color: "#d9c3b3", fontSize: "16px" }}>◒
                  </div>
                  <div style={{ background: "#fff", border: "1px solid #F0DDD2", borderRadius: "10px", aspectRatio: "1", display: "flex", alignItems: "center", justifyContent: "center", color: "#d9c3b3", fontSize: "16px" }}>◒
                  </div>
                  <div style={{ background: "#fff", border: "1px solid #F0DDD2", borderRadius: "10px", aspectRatio: "1", display: "flex", alignItems: "center", justifyContent: "center", color: "#d9c3b3", fontSize: "16px" }}>◒
                  </div>
                  <div style={{ background: "#fff", border: "1px solid #F0DDD2", borderRadius: "10px", aspectRatio: "1", display: "flex", alignItems: "center", justifyContent: "center", color: "#d9c3b3", fontSize: "16px" }}>◒
                  </div>
                  <div style={{ background: "#fff", border: "1px solid #F0DDD2", borderRadius: "10px", aspectRatio: "1", display: "flex", alignItems: "center", justifyContent: "center", color: "#d9c3b3", fontSize: "16px" }}>◒
                  </div>
                  <div style={{ background: "#fff", border: "1px solid #F0DDD2", borderRadius: "10px", aspectRatio: "1", display: "flex", alignItems: "center", justifyContent: "center", color: "#d9c3b3", fontSize: "16px" }}>◒
                  </div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginTop: "14px", background: "#fff", borderRadius: "9px", padding: "10px 12px" }}>
                  <svg viewBox="0 0 20 20" width="13" height="13" fill="none" stroke="#2C8C99" strokeWidth="1.7">
                    <path d="M10 2.5l6 2.2v4.3c0 3.6-2.5 6.6-6 7.5-3.5-.9-6-3.9-6-7.5V4.7z"></path>
                  </svg>
                  <span style={{ fontSize: "11px", color: "#1C6470", lineHeight: "1.4" }}>AXY shares only the preference context required for the selected journey, and only with the customer’s permission.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ background: "#FCF3EE", padding: "74px 24px" }}>
          <div style={{ maxWidth: "1120px", margin: "0 auto" }}>
            <div style={{ maxWidth: "700px" }}>
              <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "10.5px", letterSpacing: ".14em", color: "#B5744B", textTransform: "uppercase" }}>Shopping for someone else
              </div>
              <h2 style={{ fontSize: "28px", fontWeight: "800", color: "#1F2B4D", lineHeight: "1.16", letterSpacing: "-.01em", margin: "12px 0 0" }}>Find the right gift without starting from guesswork.
              </h2>
              <p style={{ fontSize: "14.5px", color: "#7a6152", lineHeight: "1.6", margin: "13px 0 0", maxWidth: "560px" }}>Customers use privacy-safe preferences, shared wishlists and group input to make better gift decisions.
              </p>
            </div>
            <div className="cx-two" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginTop: "28px" }}>
              <div style={{ background: "#fff", border: "1px solid #F0DDD2", borderRadius: "16px", padding: "22px" }}>
                <div style={{ fontSize: "15.5px", fontWeight: "800", color: "#1F2B4D" }}>🎁 Gift for a friend
                </div>
                <p style={{ fontSize: "12.5px", color: "#7a6152", lineHeight: "1.55", margin: "8px 0 12px" }}>Choose or invite a friend, then explore relevant products based on what they’ve chosen to share.
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: "7px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "9px", background: "#FCF9F6", border: "1px solid #F0DDD2", borderRadius: "9px", padding: "8px 11px" }}>
                    <span style={{ width: "18px", height: "18px", borderRadius: "50%", background: "#FCF3EE", color: "#B5744B", fontFamily: "'Roboto Mono',monospace", fontSize: "8.5px", fontWeight: "700", display: "flex", alignItems: "center", justifyContent: "center" }}>1
                    </span>
                    <span style={{ fontSize: "12px", color: "#3a4358", fontWeight: "600" }}>Select recipient
                    </span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "9px", background: "#FCF9F6", border: "1px solid #F0DDD2", borderRadius: "9px", padding: "8px 11px" }}>
                    <span style={{ width: "18px", height: "18px", borderRadius: "50%", background: "#FCF3EE", color: "#B5744B", fontFamily: "'Roboto Mono',monospace", fontSize: "8.5px", fontWeight: "700", display: "flex", alignItems: "center", justifyContent: "center" }}>2
                    </span>
                    <span style={{ fontSize: "12px", color: "#3a4358", fontWeight: "600" }}>Shared wishlist
                    </span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "9px", background: "#FCF9F6", border: "1px solid #F0DDD2", borderRadius: "9px", padding: "8px 11px" }}>
                    <span style={{ width: "18px", height: "18px", borderRadius: "50%", background: "#FCF3EE", color: "#B5744B", fontFamily: "'Roboto Mono',monospace", fontSize: "8.5px", fontWeight: "700", display: "flex", alignItems: "center", justifyContent: "center" }}>3
                    </span>
                    <span style={{ fontSize: "12px", color: "#3a4358", fontWeight: "600" }}>Suggested gift products
                    </span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "9px", background: "#FCF9F6", border: "1px solid #F0DDD2", borderRadius: "9px", padding: "8px 11px" }}>
                    <span style={{ width: "18px", height: "18px", borderRadius: "50%", background: "#FCF3EE", color: "#B5744B", fontFamily: "'Roboto Mono',monospace", fontSize: "8.5px", fontWeight: "700", display: "flex", alignItems: "center", justifyContent: "center" }}>4
                    </span>
                    <span style={{ fontSize: "12px", color: "#3a4358", fontWeight: "600" }}>Contact store or continue
                    </span>
                  </div>
                </div>
              </div>
              <div style={{ background: "#fff", border: "1px solid #F0DDD2", borderRadius: "16px", padding: "22px" }}>
                <div style={{ fontSize: "15.5px", fontWeight: "800", color: "#1F2B4D" }}>👥 Group gift
                </div>
                <p style={{ fontSize: "12.5px", color: "#7a6152", lineHeight: "1.55", margin: "8px 0 12px" }}>Create a group, set a budget, suggest products, collect votes and coordinate together.
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: "7px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "9px", background: "#FCF9F6", border: "1px solid #F0DDD2", borderRadius: "9px", padding: "8px 11px" }}>
                    <span style={{ width: "18px", height: "18px", borderRadius: "50%", background: "#FCF3EE", color: "#B5744B", fontFamily: "'Roboto Mono',monospace", fontSize: "8.5px", fontWeight: "700", display: "flex", alignItems: "center", justifyContent: "center" }}>1
                    </span>
                    <span style={{ fontSize: "12px", color: "#3a4358", fontWeight: "600" }}>Set group budget
                    </span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "9px", background: "#FCF9F6", border: "1px solid #F0DDD2", borderRadius: "9px", padding: "8px 11px" }}>
                    <span style={{ width: "18px", height: "18px", borderRadius: "50%", background: "#FCF3EE", color: "#B5744B", fontFamily: "'Roboto Mono',monospace", fontSize: "8.5px", fontWeight: "700", display: "flex", alignItems: "center", justifyContent: "center" }}>2
                    </span>
                    <span style={{ fontSize: "12px", color: "#3a4358", fontWeight: "600" }}>Invite friends
                    </span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "9px", background: "#FCF9F6", border: "1px solid #F0DDD2", borderRadius: "9px", padding: "8px 11px" }}>
                    <span style={{ width: "18px", height: "18px", borderRadius: "50%", background: "#FCF3EE", color: "#B5744B", fontFamily: "'Roboto Mono',monospace", fontSize: "8.5px", fontWeight: "700", display: "flex", alignItems: "center", justifyContent: "center" }}>3
                    </span>
                    <span style={{ fontSize: "12px", color: "#3a4358", fontWeight: "600" }}>Suggest & vote
                    </span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "9px", background: "#FCF9F6", border: "1px solid #F0DDD2", borderRadius: "9px", padding: "8px 11px" }}>
                    <span style={{ width: "18px", height: "18px", borderRadius: "50%", background: "#FCF3EE", color: "#B5744B", fontFamily: "'Roboto Mono',monospace", fontSize: "8.5px", fontWeight: "700", display: "flex", alignItems: "center", justifyContent: "center" }}>4
                    </span>
                    <span style={{ fontSize: "12px", color: "#3a4358", fontWeight: "600" }}>Choose final product
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ display: "flex", gap: "10px", alignItems: "flex-start", marginTop: "18px", background: "#fff", borderLeft: "3px solid #C98B63", borderRadius: "0 10px 10px 0", padding: "12px 15px" }}>
              <span style={{ fontSize: "12.5px", color: "#1F2B4D", lineHeight: "1.5" }}>
                <strong>A more personal gift journey, while keeping private purchase information protected.
                </strong>
              </span>
            </div>
          </div>
        </div>
        <div style={{ background: "#fff", padding: "74px 24px" }}>
          <div style={{ maxWidth: "1120px", margin: "0 auto" }}>
            <div style={{ maxWidth: "700px" }}>
              <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "10.5px", letterSpacing: ".14em", color: "#B5744B", textTransform: "uppercase" }}>Keep discovery moving
              </div>
              <h2 style={{ fontSize: "28px", fontWeight: "800", color: "#1F2B4D", lineHeight: "1.16", letterSpacing: "-.01em", margin: "12px 0 0" }}>Products stay useful after the moment they were first seen.
              </h2>
              <p style={{ fontSize: "14.5px", color: "#667085", lineHeight: "1.6", margin: "13px 0 0", maxWidth: "560px" }}>Customers save products, compare alternatives, share them with friends and return to the store when interest becomes action.
              </p>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "10px", marginTop: "26px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <div style={{ background: "#F7F4F1", border: "1px solid #ECE3DA", borderRadius: "12px", padding: "12px 15px", fontSize: "12.5px", fontWeight: "700", color: "#1F2B4D" }}>Saw in store
                </div>
                <span style={{ color: "#C98B63", fontSize: "14px" }}>→
                </span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <div style={{ background: "#FCF3EE", border: "1px solid #ECE3DA", borderRadius: "12px", padding: "12px 15px", fontSize: "12.5px", fontWeight: "700", color: "#1F2B4D" }}>Saved to wishlist
                </div>
                <span style={{ color: "#C98B63", fontSize: "14px" }}>→
                </span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <div style={{ background: "#F7F4F1", border: "1px solid #ECE3DA", borderRadius: "12px", padding: "12px 15px", fontSize: "12.5px", fontWeight: "700", color: "#1F2B4D" }}>Shared with a friend
                </div>
                <span style={{ color: "#C98B63", fontSize: "14px" }}>→
                </span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <div style={{ background: "#FCF3EE", border: "1px solid #ECE3DA", borderRadius: "12px", padding: "12px 15px", fontSize: "12.5px", fontWeight: "700", color: "#1F2B4D" }}>Compared alternatives
                </div>
                <span style={{ color: "#C98B63", fontSize: "14px" }}>→
                </span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <div style={{ background: "#F7F4F1", border: "1px solid #ECE3DA", borderRadius: "12px", padding: "12px 15px", fontSize: "12.5px", fontWeight: "700", color: "#1F2B4D" }}>Sent inquiry
                </div>
                <span style={{ color: "#C98B63", fontSize: "14px" }}>→
                </span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <div style={{ background: "#EFF7F8", border: "1px solid #ECE3DA", borderRadius: "12px", padding: "12px 15px", fontSize: "12.5px", fontWeight: "700", color: "#1F2B4D" }}>Returned to store
                </div>
              </div>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "22px" }}>
              <span style={{ fontSize: "11.5px", color: "#7a4a2e", background: "#fff", border: "1px solid #F0DDD2", borderRadius: "8px", padding: "5px 11px" }}>Save to wishlist
              </span>
              <span style={{ fontSize: "11.5px", color: "#7a4a2e", background: "#fff", border: "1px solid #F0DDD2", borderRadius: "8px", padding: "5px 11px" }}>Compare products
              </span>
              <span style={{ fontSize: "11.5px", color: "#7a4a2e", background: "#fff", border: "1px solid #F0DDD2", borderRadius: "8px", padding: "5px 11px" }}>Share products
              </span>
              <span style={{ fontSize: "11.5px", color: "#7a4a2e", background: "#fff", border: "1px solid #F0DDD2", borderRadius: "8px", padding: "5px 11px" }}>Get opinions
              </span>
              <span style={{ fontSize: "11.5px", color: "#7a4a2e", background: "#fff", border: "1px solid #F0DDD2", borderRadius: "8px", padding: "5px 11px" }}>View similar
              </span>
              <span style={{ fontSize: "11.5px", color: "#7a4a2e", background: "#fff", border: "1px solid #F0DDD2", borderRadius: "8px", padding: "5px 11px" }}>Personalised suggestions
              </span>
              <span style={{ fontSize: "11.5px", color: "#7a4a2e", background: "#fff", border: "1px solid #F0DDD2", borderRadius: "8px", padding: "5px 11px" }}>Send inquiry
              </span>
              <span style={{ fontSize: "11.5px", color: "#7a4a2e", background: "#fff", border: "1px solid #F0DDD2", borderRadius: "8px", padding: "5px 11px" }}>Ask availability
              </span>
              <span style={{ fontSize: "11.5px", color: "#7a4a2e", background: "#fff", border: "1px solid #F0DDD2", borderRadius: "8px", padding: "5px 11px" }}>Book a visit
              </span>
              <span style={{ fontSize: "11.5px", color: "#7a4a2e", background: "#fff", border: "1px solid #F0DDD2", borderRadius: "8px", padding: "5px 11px" }}>Return to store context
              </span>
            </div>
          </div>
        </div>
        <div style={{ background: "#FBF7F3", padding: "74px 24px" }}>
          <div style={{ maxWidth: "1120px", margin: "0 auto" }}>
            <div style={{ maxWidth: "700px" }}>
              <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "10.5px", letterSpacing: ".14em", color: "#B5744B", textTransform: "uppercase" }}>Stay connected
              </div>
              <h2 style={{ fontSize: "28px", fontWeight: "800", color: "#1F2B4D", lineHeight: "1.16", letterSpacing: "-.01em", margin: "12px 0 0" }}>All the brands and stores the customer follows — in one relevant feed.
              </h2>
              <p style={{ fontSize: "14.5px", color: "#7a6152", lineHeight: "1.6", margin: "13px 0 0", maxWidth: "560px" }}>Product launches, collection stories, events, service reminders and store updates from the customer’s connected retail relationships.
              </p>
            </div>
            <div className="cx-three" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "12px", marginTop: "26px" }}>
              <div style={{ background: "#fff", border: "1px solid #F0DDD2", borderRadius: "14px", overflow: "hidden" }}>
                <div style={{ height: "96px", background: "linear-gradient(135deg,#EBD6C7,#D9BCA6)", display: "flex", alignItems: "flex-end", padding: "12px" }}>
                  <span style={{ fontSize: "9px", fontFamily: "'Roboto Mono',monospace", color: "#7a4a2e", background: "rgba(255,255,255,.7)", borderRadius: "5px", padding: "3px 7px" }}>CONNECTED STORE
                  </span>
                </div>
                <div style={{ padding: "14px" }}>
                  <div style={{ fontSize: "13.5px", fontWeight: "800", color: "#1F2B4D" }}>New collection
                  </div>
                  <p style={{ fontSize: "12px", color: "#7a6152", lineHeight: "1.5", margin: "5px 0 0" }}>Stardust collection just arrived
                  </p>
                </div>
              </div>
              <div style={{ background: "#fff", border: "1px solid #F0DDD2", borderRadius: "14px", overflow: "hidden" }}>
                <div style={{ height: "96px", background: "linear-gradient(135deg,#EBD6C7,#D9BCA6)", display: "flex", alignItems: "flex-end", padding: "12px" }}>
                  <span style={{ fontSize: "9px", fontFamily: "'Roboto Mono',monospace", color: "#7a4a2e", background: "rgba(255,255,255,.7)", borderRadius: "5px", padding: "3px 7px" }}>CONNECTED STORE
                  </span>
                </div>
                <div style={{ padding: "14px" }}>
                  <div style={{ fontSize: "13.5px", fontWeight: "800", color: "#1F2B4D" }}>Store event
                  </div>
                  <p style={{ fontSize: "12px", color: "#7a6152", lineHeight: "1.5", margin: "5px 0 0" }}>Aurora Paris · private preview
                  </p>
                </div>
              </div>
              <div style={{ background: "#fff", border: "1px solid #F0DDD2", borderRadius: "14px", overflow: "hidden" }}>
                <div style={{ height: "96px", background: "linear-gradient(135deg,#EBD6C7,#D9BCA6)", display: "flex", alignItems: "flex-end", padding: "12px" }}>
                  <span style={{ fontSize: "9px", fontFamily: "'Roboto Mono',monospace", color: "#7a4a2e", background: "rgba(255,255,255,.7)", borderRadius: "5px", padding: "3px 7px" }}>CONNECTED STORE
                  </span>
                </div>
                <div style={{ padding: "14px" }}>
                  <div style={{ fontSize: "13.5px", fontWeight: "800", color: "#1F2B4D" }}>Service reminder
                  </div>
                  <p style={{ fontSize: "12px", color: "#7a6152", lineHeight: "1.5", margin: "5px 0 0" }}>Annual service due next month
                  </p>
                </div>
              </div>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "18px" }}>
              <span style={{ fontSize: "11.5px", color: "#7a4a2e", background: "#fff", border: "1px solid #F0DDD2", borderRadius: "8px", padding: "5px 11px" }}>Collection stories
              </span>
              <span style={{ fontSize: "11.5px", color: "#7a4a2e", background: "#fff", border: "1px solid #F0DDD2", borderRadius: "8px", padding: "5px 11px" }}>Store events
              </span>
              <span style={{ fontSize: "11.5px", color: "#7a4a2e", background: "#fff", border: "1px solid #F0DDD2", borderRadius: "8px", padding: "5px 11px" }}>Relevant offers
              </span>
              <span style={{ fontSize: "11.5px", color: "#7a4a2e", background: "#fff", border: "1px solid #F0DDD2", borderRadius: "8px", padding: "5px 11px" }}>Warranty updates
              </span>
              <span style={{ fontSize: "11.5px", color: "#7a4a2e", background: "#fff", border: "1px solid #F0DDD2", borderRadius: "8px", padding: "5px 11px" }}>Service reminders
              </span>
              <span style={{ fontSize: "11.5px", color: "#7a4a2e", background: "#fff", border: "1px solid #F0DDD2", borderRadius: "8px", padding: "5px 11px" }}>Product availability
              </span>
              <span style={{ fontSize: "11.5px", color: "#7a4a2e", background: "#fff", border: "1px solid #F0DDD2", borderRadius: "8px", padding: "5px 11px" }}>Appointment reminders
              </span>
              <span style={{ fontSize: "11.5px", color: "#7a4a2e", background: "#fff", border: "1px solid #F0DDD2", borderRadius: "8px", padding: "5px 11px" }}>Post-visit messages
              </span>
            </div>
            <div style={{ display: "flex", gap: "10px", alignItems: "flex-start", marginTop: "18px", background: "#fff", borderLeft: "3px solid #C98B63", borderRadius: "0 10px 10px 0", padding: "12px 15px" }}>
              <span style={{ fontSize: "12.5px", color: "#1F2B4D", lineHeight: "1.5" }}>
                <strong>Relevant communication from trusted store relationships — not an open advertising feed. Retailers control what they send; customers control their connections.
                </strong>
              </span>
            </div>
          </div>
        </div>
        <div style={{ background: "#fff", padding: "74px 24px" }}>
          <div style={{ maxWidth: "1120px", margin: "0 auto" }}>
            <div style={{ maxWidth: "700px" }}>
              <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "10.5px", letterSpacing: ".14em", color: "#B5744B", textTransform: "uppercase" }}>The relationship after purchase
              </div>
              <h2 style={{ fontSize: "28px", fontWeight: "800", color: "#1F2B4D", lineHeight: "1.16", letterSpacing: "-.01em", margin: "12px 0 0" }}>Products stay connected throughout their lifecycle.
              </h2>
              <p style={{ fontSize: "14.5px", color: "#667085", lineHeight: "1.6", margin: "13px 0 0", maxWidth: "560px" }}>Customers see warranty coverage, follow service progress, receive reminders and contact the store from the same product record.
              </p>
            </div>
            <div style={{ marginTop: "26px" }}>
              <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "10px", marginTop: "8px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <span style={{ width: "26px", height: "26px", borderRadius: "50%", background: "#B5744B", color: "#fff", fontFamily: "'Roboto Mono',monospace", fontSize: "9.5px", fontWeight: "700", display: "flex", alignItems: "center", justifyContent: "center" }}>1
                    </span>
                    <span style={{ fontSize: "13px", fontWeight: "700", color: "#1F2B4D" }}>Warranty activated
                    </span>
                  </div>
                  <span style={{ width: "22px", height: "2px", background: "linear-gradient(90deg,#C98B63,#EBD6C7)", borderRadius: "2px" }}></span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <span style={{ width: "26px", height: "26px", borderRadius: "50%", background: "#B5744B", color: "#fff", fontFamily: "'Roboto Mono',monospace", fontSize: "9.5px", fontWeight: "700", display: "flex", alignItems: "center", justifyContent: "center" }}>2
                    </span>
                    <span style={{ fontSize: "13px", fontWeight: "700", color: "#1F2B4D" }}>Service requested
                    </span>
                  </div>
                  <span style={{ width: "22px", height: "2px", background: "linear-gradient(90deg,#C98B63,#EBD6C7)", borderRadius: "2px" }}></span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <span style={{ width: "26px", height: "26px", borderRadius: "50%", background: "#B5744B", color: "#fff", fontFamily: "'Roboto Mono',monospace", fontSize: "9.5px", fontWeight: "700", display: "flex", alignItems: "center", justifyContent: "center" }}>3
                    </span>
                    <span style={{ fontSize: "13px", fontWeight: "700", color: "#1F2B4D" }}>Repair in progress
                    </span>
                  </div>
                  <span style={{ width: "22px", height: "2px", background: "linear-gradient(90deg,#C98B63,#EBD6C7)", borderRadius: "2px" }}></span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <span style={{ width: "26px", height: "26px", borderRadius: "50%", background: "#B5744B", color: "#fff", fontFamily: "'Roboto Mono',monospace", fontSize: "9.5px", fontWeight: "700", display: "flex", alignItems: "center", justifyContent: "center" }}>4
                    </span>
                    <span style={{ fontSize: "13px", fontWeight: "700", color: "#1F2B4D" }}>Ready for pickup
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "22px" }}>
              <span style={{ fontSize: "11.5px", color: "#1F2B4D", background: "#F7F4F1", border: "1px solid #ECE3DA", borderRadius: "8px", padding: "5px 11px" }}>Warranty activation
              </span>
              <span style={{ fontSize: "11.5px", color: "#1F2B4D", background: "#F7F4F1", border: "1px solid #ECE3DA", borderRadius: "8px", padding: "5px 11px" }}>Warranty extension
              </span>
              <span style={{ fontSize: "11.5px", color: "#1F2B4D", background: "#F7F4F1", border: "1px solid #ECE3DA", borderRadius: "8px", padding: "5px 11px" }}>Service request
              </span>
              <span style={{ fontSize: "11.5px", color: "#1F2B4D", background: "#F7F4F1", border: "1px solid #ECE3DA", borderRadius: "8px", padding: "5px 11px" }}>Repair status
              </span>
              <span style={{ fontSize: "11.5px", color: "#1F2B4D", background: "#F7F4F1", border: "1px solid #ECE3DA", borderRadius: "8px", padding: "5px 11px" }}>Estimate approval
              </span>
              <span style={{ fontSize: "11.5px", color: "#1F2B4D", background: "#F7F4F1", border: "1px solid #ECE3DA", borderRadius: "8px", padding: "5px 11px" }}>Service appointment
              </span>
              <span style={{ fontSize: "11.5px", color: "#1F2B4D", background: "#F7F4F1", border: "1px solid #ECE3DA", borderRadius: "8px", padding: "5px 11px" }}>Return / pickup status
              </span>
              <span style={{ fontSize: "11.5px", color: "#1F2B4D", background: "#F7F4F1", border: "1px solid #ECE3DA", borderRadius: "8px", padding: "5px 11px" }}>Manufacturer reminders
              </span>
            </div>
            <div style={{ display: "flex", gap: "10px", alignItems: "flex-start", marginTop: "18px", background: "#fff", borderLeft: "3px solid #C98B63", borderRadius: "0 10px 10px 0", padding: "12px 15px" }}>
              <span style={{ fontSize: "12.5px", color: "#1F2B4D", lineHeight: "1.5" }}>
                <strong>After-sales becomes a useful reason to return — not a disconnected support process.
                </strong>
              </span>
            </div>
          </div>
        </div>
        <div style={{ background: "#1F2B4D", padding: "74px 24px" }}>
          <div style={{ maxWidth: "1120px", margin: "0 auto" }}>
            <div style={{ maxWidth: "720px" }}>
              <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "10.5px", letterSpacing: ".14em", color: "#7fd4de", textTransform: "uppercase" }}>The loop closes
              </div>
              <h2 style={{ fontSize: "28px", fontWeight: "800", color: "#fff", lineHeight: "1.16", letterSpacing: "-.01em", margin: "12px 0 0" }}>Customer actions become useful next steps for the store.
              </h2>
              <p style={{ fontSize: "14.5px", color: "#B9C2D8", lineHeight: "1.6", margin: "13px 0 0", maxWidth: "560px" }}>When a customer saves a product, opens an offer, sends an inquiry or books a visit, the connected retailer receives the action with the right context.
              </p>
            </div>
            <div style={{ marginTop: "22px" }}>
              <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "10px", marginTop: "8px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <span style={{ width: "26px", height: "26px", borderRadius: "50%", background: "rgba(255,255,255,.14)", color: "#fff", fontFamily: "'Roboto Mono',monospace", fontSize: "9.5px", fontWeight: "700", display: "flex", alignItems: "center", justifyContent: "center" }}>1
                    </span>
                    <span style={{ fontSize: "13px", fontWeight: "700", color: "#fff" }}>Customer interest
                    </span>
                  </div>
                  <span style={{ width: "22px", height: "2px", background: "rgba(255,255,255,.25)", borderRadius: "2px" }}></span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <span style={{ width: "26px", height: "26px", borderRadius: "50%", background: "rgba(255,255,255,.14)", color: "#fff", fontFamily: "'Roboto Mono',monospace", fontSize: "9.5px", fontWeight: "700", display: "flex", alignItems: "center", justifyContent: "center" }}>2
                    </span>
                    <span style={{ fontSize: "13px", fontWeight: "700", color: "#fff" }}>Store action
                    </span>
                  </div>
                  <span style={{ width: "22px", height: "2px", background: "rgba(255,255,255,.25)", borderRadius: "2px" }}></span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <span style={{ width: "26px", height: "26px", borderRadius: "50%", background: "rgba(255,255,255,.14)", color: "#fff", fontFamily: "'Roboto Mono',monospace", fontSize: "9.5px", fontWeight: "700", display: "flex", alignItems: "center", justifyContent: "center" }}>3
                    </span>
                    <span style={{ fontSize: "13px", fontWeight: "700", color: "#fff" }}>Relevant follow-up
                    </span>
                  </div>
                  <span style={{ width: "22px", height: "2px", background: "rgba(255,255,255,.25)", borderRadius: "2px" }}></span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <span style={{ width: "26px", height: "26px", borderRadius: "50%", background: "rgba(255,255,255,.14)", color: "#fff", fontFamily: "'Roboto Mono',monospace", fontSize: "9.5px", fontWeight: "700", display: "flex", alignItems: "center", justifyContent: "center" }}>4
                    </span>
                    <span style={{ fontSize: "13px", fontWeight: "700", color: "#fff" }}>Better next conversation
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="cx-two" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginTop: "24px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", background: "rgba(255,255,255,.05)", border: "1px solid rgba(255,255,255,.12)", borderRadius: "12px", padding: "13px 15px" }}>
                <span style={{ fontSize: "12.5px", fontWeight: "700", color: "#fff", whiteSpace: "nowrap" }}>Product saved
                </span>
                <span style={{ color: "#33D6A4", flexShrink: "0" }}>→
                </span>
                <span style={{ fontSize: "12px", color: "#C9D2E4", lineHeight: "1.4" }}>Salesperson sees renewed interest
                </span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", background: "rgba(255,255,255,.05)", border: "1px solid rgba(255,255,255,.12)", borderRadius: "12px", padding: "13px 15px" }}>
                <span style={{ fontSize: "12.5px", fontWeight: "700", color: "#fff", whiteSpace: "nowrap" }}>Inquiry sent
                </span>
                <span style={{ color: "#33D6A4", flexShrink: "0" }}>→
                </span>
                <span style={{ fontSize: "12px", color: "#C9D2E4", lineHeight: "1.4" }}>Ticket created with customer & product context
                </span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", background: "rgba(255,255,255,.05)", border: "1px solid rgba(255,255,255,.12)", borderRadius: "12px", padding: "13px 15px" }}>
                <span style={{ fontSize: "12.5px", fontWeight: "700", color: "#fff", whiteSpace: "nowrap" }}>Appointment booked
                </span>
                <span style={{ color: "#33D6A4", flexShrink: "0" }}>→
                </span>
                <span style={{ fontSize: "12px", color: "#C9D2E4", lineHeight: "1.4" }}>Team prepares products in advance
                </span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", background: "rgba(255,255,255,.05)", border: "1px solid rgba(255,255,255,.12)", borderRadius: "12px", padding: "13px 15px" }}>
                <span style={{ fontSize: "12.5px", fontWeight: "700", color: "#fff", whiteSpace: "nowrap" }}>Offer opened
                </span>
                <span style={{ color: "#33D6A4", flexShrink: "0" }}>→
                </span>
                <span style={{ fontSize: "12px", color: "#C9D2E4", lineHeight: "1.4" }}>Salesperson sees the opportunity is active
                </span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", background: "rgba(255,255,255,.05)", border: "1px solid rgba(255,255,255,.12)", borderRadius: "12px", padding: "13px 15px" }}>
                <span style={{ fontSize: "12.5px", fontWeight: "700", color: "#fff", whiteSpace: "nowrap" }}>Availability requested
                </span>
                <span style={{ color: "#33D6A4", flexShrink: "0" }}>→
                </span>
                <span style={{ fontSize: "12px", color: "#C9D2E4", lineHeight: "1.4" }}>Store responds or contacts the partner
                </span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", background: "rgba(255,255,255,.05)", border: "1px solid rgba(255,255,255,.12)", borderRadius: "12px", padding: "13px 15px" }}>
                <span style={{ fontSize: "12.5px", fontWeight: "700", color: "#fff", whiteSpace: "nowrap" }}>Service reminder accepted
                </span>
                <span style={{ color: "#33D6A4", flexShrink: "0" }}>→
                </span>
                <span style={{ fontSize: "12px", color: "#C9D2E4", lineHeight: "1.4" }}>Appointment enters the service workflow
                </span>
              </div>
            </div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", marginTop: "20px", background: "rgba(255,255,255,.06)", border: "1px solid rgba(255,255,255,.16)", borderRadius: "20px", padding: "8px 15px" }}>
              <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#33D6A4" }}></span>
              <span style={{ fontSize: "12px", color: "#DDE4F0" }}>Only actions permitted within that customer–store relationship are shared.
              </span>
            </div>
          </div>
        </div>
        <div style={{ background: "#F9FAFB", padding: "74px 24px" }}>
          <div style={{ maxWidth: "1120px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", maxWidth: "720px", margin: "0 auto" }}>
              <h2 style={{ fontSize: "28px", fontWeight: "800", color: "#1F2B4D", lineHeight: "1.16", letterSpacing: "-.01em", margin: "12px 0 0" }}>A stronger experience for the customer. A stronger relationship for the retailer.
              </h2>
            </div>
            <div className="cx-four" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "14px", marginTop: "32px" }}>
              <div style={{ background: "#fff", border: "1px solid #E4E8EF", borderRadius: "14px", padding: "20px" }}>
                <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "10px", color: "#B5744B" }}>01
                </div>
                <div style={{ fontSize: "14px", fontWeight: "800", color: "#1F2B4D", marginTop: "8px", lineHeight: "1.25" }}>All purchases & documents in one place
                </div>
                <p style={{ fontSize: "12px", color: "#667085", lineHeight: "1.55", margin: "7px 0 0" }}>Products, invoices and warranties, organised.
                </p>
              </div>
              <div style={{ background: "#fff", border: "1px solid #E4E8EF", borderRadius: "14px", padding: "20px" }}>
                <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "10px", color: "#B5744B" }}>02
                </div>
                <div style={{ fontSize: "14px", fontWeight: "800", color: "#1F2B4D", marginTop: "8px", lineHeight: "1.25" }}>Every visit stays connected
                </div>
                <p style={{ fontSize: "12px", color: "#667085", lineHeight: "1.55", margin: "7px 0 0" }}>The store experience continues after leaving.
                </p>
              </div>
              <div style={{ background: "#fff", border: "1px solid #E4E8EF", borderRadius: "14px", padding: "20px" }}>
                <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "10px", color: "#B5744B" }}>03
                </div>
                <div style={{ fontSize: "14px", fontWeight: "800", color: "#1F2B4D", marginTop: "8px", lineHeight: "1.25" }}>Discovery becomes personal
                </div>
                <p style={{ fontSize: "12px", color: "#667085", lineHeight: "1.55", margin: "7px 0 0" }}>Preferences filter each store’s real catalogue.
                </p>
              </div>
              <div style={{ background: "#fff", border: "1px solid #E4E8EF", borderRadius: "14px", padding: "20px" }}>
                <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "10px", color: "#B5744B" }}>04
                </div>
                <div style={{ fontSize: "14px", fontWeight: "800", color: "#1F2B4D", marginTop: "8px", lineHeight: "1.25" }}>Customer interest becomes actionable
                </div>
                <p style={{ fontSize: "12px", color: "#667085", lineHeight: "1.55", margin: "7px 0 0" }}>Actions reach the right store with context.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div style={{ position: "relative", overflow: "hidden", background: "linear-gradient(135deg,#1F2B4D,#32415C 55%,#7a4a2e)", padding: "76px 24px" }}>
          <div style={{ position: "absolute", bottom: "-120px", right: "-60px", width: "420px", height: "320px", background: "radial-gradient(circle,rgba(201,123,84,.22),transparent 70%)" }}></div>
          <div style={{ position: "relative", maxWidth: "760px", margin: "0 auto", textAlign: "center" }}>
            <h2 style={{ fontSize: "29px", fontWeight: "800", color: "#fff", lineHeight: "1.14" }}>Give customers one place to continue every retail relationship.
            </h2>
            <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap", marginTop: "24px" }}>
              <a className="hv97" href="/book-a-walkthrough#schedule" style={{ display: "inline-flex", padding: "14px 24px", background: "#fff", color: "#1F2B4D", borderRadius: "10px", fontSize: "14.5px", fontWeight: "700" }}>Get guided setup
              </a>
              <a className="hv98" href="/for-retailers" style={{ display: "inline-flex", padding: "14px 24px", border: "1.5px solid rgba(255,255,255,.5)", color: "#fff", borderRadius: "10px", fontSize: "14.5px", fontWeight: "600" }}>Explore AXY for retailers
              </a>
            </div>
            <div style={{ marginTop: "16px" }}>
              <a className="hv99" href="/sales-app" style={{ fontSize: "13px", color: "#EBD6C7", textDecoration: "underline" }}>See how it connects to the Sales App →
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
