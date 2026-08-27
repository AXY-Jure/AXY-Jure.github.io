import React from 'react';
import LanguagePicker from './LanguagePicker.jsx';
import { useI18n } from '../i18n/I18nProvider.jsx';

export default function SiteHeader(v) {
  const { ddOff, ddProduct, ddProductOn, ddResources, ddResourcesOn, menuOpen, toggleMenu } = v;
  const { t, hrefForLocale } = useI18n();
  const menuLabel = menuOpen ? `✕ ${t('common.nav.close')}` : `☰ ${t('common.nav.menu')}`;
  React.useEffect(() => {
    if (!menuOpen || !window.matchMedia('(max-width: 1100px)').matches) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [menuOpen]);

  return (
      <div className="site-header" data-analytics-location="site_header" style={{ position: "sticky", top: "0", zIndex: "60", background: "rgba(255,255,255,.92)", backdropFilter: "blur(12px)", borderBottom: "1px solid #E4E8EF" }}>
        <div className="site-header__bar" style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px", height: "64px", display: "flex", alignItems: "center", gap: "26px" }}>
          <a className="site-header__logo" href={hrefForLocale('/')} style={{ display: "inline-flex", alignItems: "center" }}>
            <img src="/images/axy-logo.png" alt="AXY" style={{ height: "30px", width: "auto" }} />
          </a>
          <div id="nav-desktop" style={{ display: "flex", alignItems: "center", gap: "4px", flex: "1" }}>
            <div onMouseEnter={ddProductOn} onMouseLeave={ddOff} style={{ position: "relative" }}>
              <span className="hv193" style={{ display: "inline-flex", alignItems: "center", gap: "5px", padding: "9px 12px", borderRadius: "8px", fontSize: "13.5px", fontWeight: "600", color: "#1F2B4D", cursor: "pointer", whiteSpace: "nowrap" }}>{t('common.nav.product')}{' '}
                <span style={{ fontSize: "9px", color: "#8a93a6" }}>▾
                </span>
              </span>{' '}
              {ddProduct ? (<>
                <div style={{ position: "absolute", top: "100%", left: "0", width: "280px", background: "#fff", border: "1px solid #E4E8EF", borderRadius: "12px", boxShadow: "0 18px 44px rgba(31,43,77,.14)", padding: "8px", display: "flex", flexDirection: "column" }}>
                  <a className="hv194" href={hrefForLocale('/product')} style={{ padding: "9px 11px", borderRadius: "8px", fontSize: "13px", fontWeight: "600" }}>{t('common.nav.productOverview')}
                  </a>{' '}
                  <a className="hv195" href={hrefForLocale('/sales-app')} style={{ padding: "9px 11px", borderRadius: "8px", fontSize: "13px", fontWeight: "600" }}>{t('common.productNames.salesApp')}
                  </a>{' '}
                  <a className="hv196" href={hrefForLocale('/back-office')} style={{ padding: "9px 11px", borderRadius: "8px", fontSize: "13px", fontWeight: "600" }}>{t('common.productNames.backOffice')}
                  </a>{' '}
                  <a className="hv197" href={hrefForLocale('/customer-experience')} style={{ padding: "9px 11px", borderRadius: "8px", fontSize: "13px", fontWeight: "600" }}>{t('common.nav.customerExperience')}
                  </a>{' '}
                  <a className="hv198" href={hrefForLocale('/integrations')} style={{ padding: "9px 11px", borderRadius: "8px", fontSize: "13px", fontWeight: "600" }}>{t('common.nav.integrations')}
                  </a>
                </div>
              </>) : null}
            </div>
            <a className="hv199" href={hrefForLocale('/for-retailers')} style={{ whiteSpace: "nowrap", padding: "9px 12px", borderRadius: "8px", fontSize: "13.5px", fontWeight: "600", color: "#1F2B4D" }}>{t('common.nav.forRetailers')}
            </a>{' '}
            <a className="hv200" href={hrefForLocale('/for-brands')} style={{ whiteSpace: "nowrap", padding: "9px 12px", borderRadius: "8px", fontSize: "13.5px", fontWeight: "600", color: "#1F2B4D" }}>{t('common.nav.forBrands')}
            </a>{' '}
            <a className="hv201" href={hrefForLocale('/how-it-works')} style={{ whiteSpace: "nowrap", padding: "9px 12px", borderRadius: "8px", fontSize: "13.5px", fontWeight: "600", color: "#1F2B4D" }}>{t('common.nav.howItWorks')}
            </a>{' '}
            <a className="hv202" href={hrefForLocale('/pricing')} style={{ whiteSpace: "nowrap", padding: "9px 12px", borderRadius: "8px", fontSize: "13.5px", fontWeight: "600", color: "#1F2B4D" }}>{t('common.nav.pricing')}
            </a>
            <div
              onMouseEnter={ddResourcesOn}
              onMouseLeave={(event) => {
                if (!event.currentTarget.contains(document.activeElement)) ddOff();
              }}
              onBlur={(event) => {
                if (!event.currentTarget.contains(event.relatedTarget)) ddOff();
              }}
              onKeyDown={(event) => {
                if (event.key !== 'Escape') return;
                event.preventDefault();
                event.currentTarget.querySelector('button')?.focus();
                ddOff();
              }}
              style={{ position: "relative" }}
            >
              <button
                type="button"
                className="hv203 axy-nav-dropdown-trigger"
                aria-expanded={ddResources}
                aria-controls="resources-menu"
                onClick={ddResources ? ddOff : ddResourcesOn}
                style={{ appearance: "none", display: "inline-flex", alignItems: "center", gap: "5px", padding: "9px 12px", border: "0", borderRadius: "8px", background: "transparent", fontFamily: "inherit", fontSize: "13.5px", fontWeight: "600", color: "#1F2B4D", cursor: "pointer", whiteSpace: "nowrap" }}
              >{t('common.nav.resources')}{' '}
                <span style={{ fontSize: "9px", color: "#8a93a6" }}>▾
                </span>
              </button>{' '}
              {ddResources ? (<>
                <div id="resources-menu" style={{ position: "absolute", top: "100%", left: "0", width: "250px", background: "#fff", border: "1px solid #E4E8EF", borderRadius: "12px", boxShadow: "0 18px 44px rgba(31,43,77,.14)", padding: "8px", display: "flex", flexDirection: "column" }}>
                  <a className="hv204" href={hrefForLocale('/resources')} style={{ padding: "9px 11px", borderRadius: "8px", fontSize: "13px", fontWeight: "600" }}>{t('common.nav.resourcesOverview')}
                  </a>{' '}
                  <a className="hv205" href={hrefForLocale('/article')} style={{ padding: "9px 11px", borderRadius: "8px", fontSize: "13px", fontWeight: "600" }}>{t('common.nav.insightsGuides')}
                  </a>{' '}
                  <a className="hv206" href={hrefForLocale('/help')} style={{ padding: "9px 11px", borderRadius: "8px", fontSize: "13px", fontWeight: "600" }}>{t('common.nav.helpSupport')}
                  </a>{' '}
                  <span style={{ padding: "9px 11px", fontSize: "13px", fontWeight: "600", color: "#9aa3b2", display: "flex", alignItems: "center", gap: "7px" }}>{t('common.nav.productUpdates')}{' '}
                    <span style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "8px", fontWeight: "700", color: "#8a5a12", background: "#F5E6C8", borderRadius: "7px", padding: "2px 7px" }}>{t('common.status.planned')}
                    </span>
                  </span>
                </div>
              </>) : null}
            </div>
          </div>
          <div id="nav-actions-desktop" style={{ display: "flex", alignItems: "center", gap: "14px" }}>
            <LanguagePicker />
            <a href="https://app.axy.net/authentication" style={{ fontSize: "13px", fontWeight: "600", color: "#667085", whiteSpace: "nowrap" }}>{t('common.actions.logIn')}
            </a>{' '}
            <a className="hv207" href="https://app.axy.net/onboarding" style={{ display: "inline-flex", whiteSpace: "nowrap", padding: "9px 16px", background: "#32415C", color: "#fff", borderRadius: "9px", fontSize: "13px", fontWeight: "700", transition: "background .15s" }}>{t('common.actions.createFreeAccount')}
            </a>{' '}
            <a className="hv208" href={hrefForLocale('/book-a-walkthrough#schedule')} style={{ display: "inline-flex", whiteSpace: "nowrap", padding: "9px 15px", border: "1.5px solid #32415C", color: "#32415C", borderRadius: "9px", fontSize: "13px", fontWeight: "600" }}>{t('common.actions.guidedSetup')}
            </a>
          </div>
          <a id="nav-mobile-cta" href="https://app.axy.net/onboarding" style={{ marginLeft: "auto", alignItems: "center", padding: "8px 13px", background: "#32415C", color: "#fff", borderRadius: "8px", fontSize: "12px", fontWeight: "700" }}>{t('common.actions.createFreeAccount')}
          </a>{' '}
          <button id="nav-mobile-btn" type="button" aria-expanded={menuOpen} aria-controls="nav-mobile-menu" onClick={toggleMenu} style={{ appearance: "none", marginLeft: "10px", alignItems: "center", gap: "8px", padding: "9px 14px", background: "#fff", border: "1px solid #E4E8EF", borderRadius: "9px", fontFamily: "inherit", fontSize: "13px", fontWeight: "700", color: "#1F2B4D", cursor: "pointer" }}>{menuLabel}
          </button>
        </div>
        {menuOpen ? (<>
          <div id="nav-mobile-menu" className="site-header__mobile-menu" style={{ background: "#fff", borderBottom: "1px solid #E4E8EF", padding: "16px 24px", display: "flex", flexDirection: "column", gap: "4px", maxHeight: "70vh", overflowY: "auto" }}>
            <a href="https://app.axy.net/onboarding" style={{ display: "block", textAlign: "center", padding: "12px", background: "#32415C", color: "#fff", borderRadius: "9px", fontSize: "14px", fontWeight: "700", marginBottom: "4px" }}>{t('common.actions.createFreeAccount')}
            </a>{' '}
            <a href={hrefForLocale('/book-a-walkthrough#schedule')} style={{ display: "block", textAlign: "center", padding: "11px", border: "1.5px solid #32415C", color: "#32415C", borderRadius: "9px", fontSize: "14px", fontWeight: "600", marginBottom: "8px" }}>{t('common.actions.guidedSetup')}
            </a>
            <LanguagePicker mobile />
            <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "9px", color: "#9aa3b2", letterSpacing: ".08em", margin: "6px 0 2px" }}>{t('common.nav.productGroup')}
            </div>
            <a href={hrefForLocale('/product')} style={{ padding: "9px 4px", fontSize: "14px", fontWeight: "600" }}>{t('common.nav.productOverview')}
            </a>{' '}
            <a href={hrefForLocale('/sales-app')} style={{ padding: "9px 4px", fontSize: "14px", fontWeight: "600" }}>{t('common.productNames.salesApp')}
            </a>{' '}
            <a href={hrefForLocale('/back-office')} style={{ padding: "9px 4px", fontSize: "14px", fontWeight: "600" }}>{t('common.productNames.backOffice')}
            </a>{' '}
            <a href={hrefForLocale('/customer-experience')} style={{ padding: "9px 4px", fontSize: "14px", fontWeight: "600" }}>{t('common.nav.customerExperience')}
            </a>{' '}
            <a href={hrefForLocale('/integrations')} style={{ padding: "9px 4px", fontSize: "14px", fontWeight: "600" }}>{t('common.nav.integrations')}
            </a>
            <div style={{ fontFamily: "'Roboto Mono',monospace", fontSize: "9px", color: "#9aa3b2", letterSpacing: ".08em", margin: "10px 0 2px" }}>{t('common.nav.exploreGroup')}
            </div>
            <a href={hrefForLocale('/for-retailers')} style={{ padding: "9px 4px", fontSize: "14px", fontWeight: "600" }}>{t('common.nav.forRetailers')}
            </a>{' '}
            <a href={hrefForLocale('/for-brands')} style={{ padding: "9px 4px", fontSize: "14px", fontWeight: "600" }}>{t('common.nav.forBrands')}
            </a>{' '}
            <a href={hrefForLocale('/how-it-works')} style={{ padding: "9px 4px", fontSize: "14px", fontWeight: "600" }}>{t('common.nav.howItWorks')}
            </a>{' '}
            <a href={hrefForLocale('/pricing')} style={{ padding: "9px 4px", fontSize: "14px", fontWeight: "600" }}>{t('common.nav.pricing')}
            </a>{' '}
            <a href={hrefForLocale('/resources')} style={{ padding: "9px 4px", fontSize: "14px", fontWeight: "600" }}>{t('common.nav.resources')}
            </a>{' '}
            <a href={hrefForLocale('/article')} style={{ padding: "9px 4px", fontSize: "14px", fontWeight: "600" }}>{t('common.nav.insightsGuides')}
            </a>{' '}
            <a href={hrefForLocale('/help')} style={{ padding: "9px 4px", fontSize: "14px", fontWeight: "600" }}>{t('common.nav.helpSupport')}
            </a>{' '}
            <a href="https://app.axy.net/authentication" style={{ padding: "9px 4px", fontSize: "14px", fontWeight: "600", color: "#667085" }}>{t('common.actions.logIn')}
            </a>
          </div>
        </>) : null}
      </div>
  );
}
