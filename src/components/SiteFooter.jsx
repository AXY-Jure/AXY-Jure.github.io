import React from 'react';
import { useI18n } from '../i18n/I18nProvider.jsx';

export default function SiteFooter() {
  const { t, hrefForLocale } = useI18n();

  return (
      <div className="site-footer" data-analytics-location="site_footer" style={{ background: "#1F2B4D", padding: "56px 24px 34px" }}>
        <div className="site-footer__inner" style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div className="site-footer__grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(150px,1fr))", gap: "22px" }}>
            <div className="site-footer__brand">
              <div style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", background: "#fff", borderRadius: "8px", padding: "7px 10px" }}>
                <img src="/images/axy-logo.png" alt="AXY" style={{ height: "26px", width: "auto" }} />
              </div>
              <p style={{ fontSize: "12px", color: "#8fa0c2", lineHeight: "1.6", margin: "10px 0 0", maxWidth: "210px" }}>{t('common.footer.description')}
              </p>
            </div>
            <div>
              <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "8.5px", color: "#6b76a0", letterSpacing: ".08em", marginBottom: "10px" }}>{t('common.footer.productGroup')}
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "7px" }}>
                <a href={hrefForLocale('/product')} style={{ fontSize: "12px", color: "#C9D2E4" }}>{t('common.nav.productOverview')}
                </a>
                <a href={hrefForLocale('/sales-app')} style={{ fontSize: "12px", color: "#C9D2E4" }}>{t('common.productNames.salesApp')}
                </a>
                <a href={hrefForLocale('/back-office')} style={{ fontSize: "12px", color: "#C9D2E4" }}>{t('common.productNames.backOffice')}
                </a>
                <a href={hrefForLocale('/customer-experience')} style={{ fontSize: "12px", color: "#C9D2E4" }}>{t('common.nav.customerExperience')}
                </a>
                <a href={hrefForLocale('/integrations')} style={{ fontSize: "12px", color: "#C9D2E4" }}>{t('common.nav.integrations')}
                </a>
                <a href={hrefForLocale('/pricing')} style={{ fontSize: "12px", color: "#C9D2E4" }}>{t('common.nav.pricing')}
                </a>
              </div>
            </div>
            <div>
              <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "8.5px", color: "#6b76a0", letterSpacing: ".08em", marginBottom: "10px" }}>{t('common.footer.solutionsGroup')}
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "7px" }}>
                <a href={hrefForLocale('/for-retailers')} style={{ fontSize: "12px", color: "#C9D2E4" }}>{t('common.nav.forRetailers')}
                </a>
                <a href={hrefForLocale('/for-brands')} style={{ fontSize: "12px", color: "#C9D2E4" }}>{t('common.nav.forBrands')}
                </a>
                <a href={hrefForLocale('/use-cases/retail-clienteling')} style={{ fontSize: "12px", color: "#C9D2E4" }}>{t('common.footer.retailClienteling')}
                </a>
                <a href={hrefForLocale('/use-cases/in-store-sales-capture')} style={{ fontSize: "12px", color: "#C9D2E4" }}>{t('common.footer.inStoreSalesCapture')}
                </a>
                <a href={hrefForLocale('/use-cases/product-demand-intelligence')} style={{ fontSize: "12px", color: "#C9D2E4" }}>{t('common.footer.productDemandIntelligence')}
                </a>
                <a href={hrefForLocale('/use-cases/retailer-brand-collaboration')} style={{ fontSize: "12px", color: "#C9D2E4" }}>{t('common.footer.retailerBrandCollaboration')}
                </a>
              </div>
            </div>
            <div>
              <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "8.5px", color: "#6b76a0", letterSpacing: ".08em", marginBottom: "10px" }}>{t('common.footer.trustGroup')}
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "7px" }}>
                <span style={{ fontSize: "12px", color: "#6b76a0" }}>{t('common.footer.privacyPermissions')} · {t('common.footer.inIntegrations')}
                </span>
                <a href={hrefForLocale('/help')} style={{ fontSize: "12px", color: "#C9D2E4" }}>{t('common.footer.helpCentre')}
                </a>
                <span style={{ fontSize: "12px", color: "#6b76a0" }}>{t('common.footer.systemStatus')} · {t('common.status.plannedInline')}
                </span>
              </div>
            </div>
            <div>
              <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "8.5px", color: "#6b76a0", letterSpacing: ".08em", marginBottom: "10px" }}>{t('common.footer.resourcesGroup')}
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "7px" }}>
                <a href={hrefForLocale('/resources')} style={{ fontSize: "12px", color: "#C9D2E4" }}>{t('common.nav.resourcesOverview')}
                </a>
                <a href={hrefForLocale('/article')} style={{ fontSize: "12px", color: "#C9D2E4" }}>{t('common.nav.insightsGuides')}
                </a>
                <span style={{ fontSize: "12px", color: "#6b76a0" }}>{t('common.nav.productUpdates')} · {t('common.status.plannedInline')}
                </span>
                <a href={hrefForLocale('/about')} style={{ fontSize: "12px", color: "#C9D2E4" }}>{t('common.footer.aboutAxy')}
                </a>
              </div>
            </div>
            <div>
              <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "8.5px", color: "#6b76a0", letterSpacing: ".08em", marginBottom: "10px" }}>{t('common.footer.companyGroup')}
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "7px" }}>
                <a href={hrefForLocale('/about')} style={{ fontSize: "12px", color: "#C9D2E4" }}>{t('common.footer.about')}
                </a>
                <a href={hrefForLocale('/contact')} style={{ fontSize: "12px", color: "#C9D2E4" }}>{t('common.footer.contact')}
                </a>
                <a href={hrefForLocale('/book-a-walkthrough#schedule')} style={{ fontSize: "12px", color: "#C9D2E4" }}>{t('common.footer.bookWalkthrough')}
                </a>
                <a href="https://app.axy.net/authentication" style={{ fontSize: "12px", color: "#C9D2E4" }}>{t('common.actions.logIn')}
                </a>
              </div>
            </div>
          </div>
          <div className="site-footer__bottom" style={{ borderTop: "1px solid #34406A", marginTop: "30px", paddingTop: "22px", display: "flex", alignItems: "center", gap: "16px", flexWrap: "wrap" }}>
            <span style={{ fontSize: "14px", color: "#fff", fontWeight: "700" }}>{t('common.footer.businessFit')}
            </span>{' '}
            <a className="hv209" href="https://app.axy.net/onboarding" style={{ display: "inline-flex", padding: "10px 18px", background: "#fff", color: "#1F2B4D", borderRadius: "8px", fontSize: "13px", fontWeight: "700" }}>{t('common.actions.createFreeAccount')}
            </a>{' '}
            <a className="hv210" href={hrefForLocale('/book-a-walkthrough#schedule')} style={{ display: "inline-flex", padding: "10px 17px", border: "1.5px solid rgba(255,255,255,.4)", color: "#fff", borderRadius: "8px", fontSize: "13px", fontWeight: "600" }}>{t('common.actions.guidedSetup')}
            </a>
            <div className="site-footer__legal" style={{ marginLeft: "auto", display: "flex", gap: "16px", flexWrap: "wrap", alignItems: "center" }}>
              <a href={hrefForLocale('/legal#privacy-policy')} style={{ fontSize: "11.5px", color: "#8fa0c2" }}>{t('common.footer.privacyPolicy')}
              </a>{' '}
              <a href={hrefForLocale('/legal#terms-and-conditions')} style={{ fontSize: "11.5px", color: "#8fa0c2" }}>{t('common.footer.terms')}
              </a>{' '}
              <a href={hrefForLocale('/legal#cookies-and-similar-technologies')} style={{ fontSize: "11.5px", color: "#8fa0c2" }}>{t('common.footer.cookiePolicy')}
              </a>{' '}
              <button
                type="button"
                onClick={() => window.dispatchEvent(new Event('axy:open-cookie-settings'))}
                style={{ appearance: "none", background: "transparent", border: 0, padding: 0, fontSize: "11.5px", color: "#8fa0c2", cursor: "pointer" }}
              >{t('common.footer.cookieSettings')}
              </button>{' '}
              <span style={{ fontSize: "11.5px", color: "#6b76a0" }}>© AXY · XY Sales d.o.o.
              </span>
            </div>
          </div>
        </div>
      </div>
  );
}
