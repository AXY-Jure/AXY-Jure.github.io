'use client';

import React from 'react';
import SiteHeader from './components/SiteHeader.jsx';
import SiteFooter from './components/SiteFooter.jsx';
import Home from './screens/Home.jsx';
import Product from './screens/Product.jsx';
import HowItWorks from './screens/HowItWorks.jsx';
import ForRetailers from './screens/ForRetailers.jsx';
import ForBrands from './screens/ForBrands.jsx';
import SalesApp from './screens/SalesApp.jsx';
import CustomerExperience from './screens/CustomerExperience.jsx';
import BackOffice from './screens/BackOffice.jsx';
import Clienteling from './screens/Clienteling.jsx';
import SalesCapture from './screens/SalesCapture.jsx';
import DemandIntelligence from './screens/DemandIntelligence.jsx';
import Collaboration from './screens/Collaboration.jsx';
import Integrations from './screens/Integrations.jsx';
import Pricing from './screens/Pricing.jsx';
import Resources from './screens/Resources.jsx';
import About from './screens/About.jsx';
import Help from './screens/Help.jsx';
import CreateAccount from './screens/CreateAccount.jsx';
import Login from './screens/Login.jsx';
import Article from './screens/Article.jsx';
import Legal from './screens/Legal.jsx';
import NotFound from './screens/NotFound.jsx';
import Walkthrough from './screens/Walkthrough.jsx';
import Contact from './screens/Contact.jsx';
import RequestAccess from './screens/RequestAccess.jsx';
import MeetingBooked from './screens/MeetingBooked.jsx';
import { AXY_PRICING, calculateMonthlyPricing } from './config/billing.js';
import AnalyticsConsent from './components/AnalyticsConsent.jsx';
import { I18nProvider } from './i18n/I18nProvider.jsx';
import { localeFromPath, parseLocalizedPath } from './i18n/paths.js';

const ROUTES = { '': 'home', '/': 'home', '/product': 'product', '/sales-app': 'salesapp', '/back-office': 'backoffice', '/customer-experience': 'custexp', '/integrations': 'integrations', '/how-it-works': 'how', '/for-retailers': 'retailers', '/for-brands': 'brands', '/use-cases/retail-clienteling': 'clienteling', '/use-cases/in-store-sales-capture': 'capture', '/use-cases/product-demand-intelligence': 'demand', '/use-cases/retailer-brand-collaboration': 'collab', '/pricing': 'pricing', '/resources': 'resources', '/about': 'about', '/book-a-walkthrough': 'walkthrough', '/meeting-booked': 'meetingbooked', '/contact': 'contact', '/help': 'help', '/request-access': 'requestaccess', '/create-account': 'requestaccess', '/login': 'login', '/article': 'article', '/legal': 'legal' };

function routeForPath(pathname = '/') {
  const withoutQuery = parseLocalizedPath(pathname).basePath.split('?')[0].split('#')[0];
  const normalized = withoutQuery.length > 1 ? withoutQuery.replace(/\/$/, '') : withoutQuery;
  return ROUTES[normalized] !== undefined ? ROUTES[normalized] : 'p404';
}

// Public paths map to page components. The route is supplied by the server so
// every URL renders meaningful HTML before JavaScript loads.
const PAGES = {
  home: Home,
  product: Product,
  how: HowItWorks,
  retailers: ForRetailers,
  brands: ForBrands,
  salesapp: SalesApp,
  custexp: CustomerExperience,
  backoffice: BackOffice,
  clienteling: Clienteling,
  capture: SalesCapture,
  demand: DemandIntelligence,
  collab: Collaboration,
  integrations: Integrations,
  pricing: Pricing,
  resources: Resources,
  about: About,
  help: Help,
  account: CreateAccount,
  requestaccess: RequestAccess,
  login: Login,
  article: Article,
  legal: Legal,
  walkthrough: Walkthrough,
  meetingbooked: MeetingBooked,
  contact: Contact,
  p404: NotFound,
};

class AppShell extends React.Component {
  constructor(props) {
    super(props);
    this.state = { route: routeForPath(props.initialPath), menu: false, dd: '', forms: {},
      pricingUsers: AXY_PRICING.includedUsers, pricingBusinessUnits: 1, pricingLocations: 1, pricingAnnouncementsEnabled: false, pricingAnnouncementUnits: 1, pricingMessagingEnabled: false, pricingAiImageInterested: false, pricingFreeDetail: 0, pricingFuture: [false, false, false, false, false], pricingFormOpen: false, pricingLastPayload: null };
  }

  ROUTES = ROUTES;

  componentDidMount() {
    this._onRouteChange = () => {
      const r = routeForPath(window.location.pathname);
      this.setState({ route: r, menu: false, dd: '' }, () => {
        try {
          const targetId = decodeURIComponent(window.location.hash.slice(1));
          const target = targetId ? document.getElementById(targetId) : null;
          if (target) {
            window.requestAnimationFrame(() => target.scrollIntoView({ block: 'start' }));
          } else {
            window.scrollTo(0, 0);
          }
        } catch {}
      });
    };
    window.addEventListener('popstate', this._onRouteChange);
    this._onRouteChange();
  }
  componentWillUnmount() { window.removeEventListener('popstate', this._onRouteChange); }
  // ---- Pricing calculator (pure) ----
  _pricingCalc() {
    const s = this.state;
    return calculateMonthlyPricing({ totalUsers: s.pricingUsers, totalBusinessUnits: s.pricingBusinessUnits, totalLocations: s.pricingLocations, announcements: s.pricingAnnouncementsEnabled, messaging: s.pricingMessagingEnabled });
  }
  _pricingRecommendation(c) {
    const s = this.state;
    const ann = s.pricingAnnouncementsEnabled, msg = s.pricingMessagingEnabled, ai = s.pricingAiImageInterested;
    if (c.users === AXY_PRICING.includedUsers && c.businessUnits === 1 && c.locations === 1 && !ann && !msg && !ai) return 'AXY Free is the right starting point for this setup.';
    return 'This is a custom AXY setup.';
  }
  _pricingPayload() {
    const s = this.state, c = this._pricingCalc();
    const toolNames = ['AI Product Suggestions', 'Pricing & Offer Builder', 'Targets', 'Budgets', 'Dashboards'];
    return {
      users: c.users, businessUnits: c.businessUnits, locations: c.locations,
      modules: { announcements: s.pricingAnnouncementsEnabled, messaging: s.pricingMessagingEnabled },
      estimatedMonthlyTotal: c.customMonthlyTotal,
      futureToolsInterest: toolNames.filter((_, i) => s.pricingFuture[i]),
      recommendation: this._pricingRecommendation(c)
    };
  }
  _scrollTo(id) { try { const el = document.getElementById(id); if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - 72, behavior: 'smooth' }); } catch {} }
  _resExplore() { this._scrollTo('axy-res-start'); }
  _pStep(key, delta, min) { this.setState(p => { const v = Math.max(min, (p[key] | 0) + delta); const next = { [key]: v }; if (key === 'pricingBusinessUnits' && p.pricingAnnouncementUnits > v) next.pricingAnnouncementUnits = v; return next; }); }
  _pAnnStep(delta) { this.setState(p => ({ pricingAnnouncementUnits: Math.min(Math.max(1, (p.pricingAnnouncementUnits | 0) + delta), Math.max(1, p.pricingBusinessUnits | 0)) })); }
  renderVals() {
    const s = this.state;
    const keys = ['home','product','how','retailers','brands','salesapp','backoffice','custexp','clienteling','capture','demand','collab','integrations','pricing','resources','about','walkthrough','meetingbooked','contact','help','account','requestaccess','login','article','legal','p404'];
    const vals = {};
    keys.forEach(k => { vals['is_' + k] = s.route === k; });
    // ---- Pricing calculator wiring ----
    const freeBub = (active) => active
      ? 'cursor:pointer; text-align:left; background:#fff; color:#1F2B4D; border:1.5px solid #2C8C99; border-radius:11px; padding:11px 15px; font-size:13px; font-weight:700; box-shadow:0 6px 16px rgba(44,140,153,.14); transition:all .18s;'
      : 'cursor:pointer; text-align:left; background:#fff; color:#42506e; border:1px solid #E4E8EF; border-radius:11px; padding:11px 15px; font-size:13px; font-weight:600; transition:all .18s;';
    const ftCard = (active) => active
      ? 'cursor:pointer; text-align:left; background:#EFF7F8; border:1.5px solid #2C8C99; border-radius:14px; padding:18px; transition:all .18s;'
      : 'cursor:pointer; text-align:left; background:#fff; border:1px solid #E4E8EF; border-radius:14px; padding:18px; transition:all .18s;';
    const ftPill = (active) => active
      ? 'flex-shrink:0; font-size:10.5px; font-weight:700; color:#fff; background:#2C8C99; border-radius:20px; padding:4px 10px; white-space:nowrap;'
      : 'flex-shrink:0; font-size:10.5px; font-weight:700; color:#2C8C99; background:#EAF6F7; border-radius:20px; padding:4px 10px; white-space:nowrap;';
    const toggleBtn = (on) => on
      ? 'flex-shrink:0; padding:9px 16px; background:#2C8C99; color:#fff; border:1.5px solid #2C8C99; border-radius:9px; font-size:12.5px; font-weight:700; cursor:pointer;'
      : 'flex-shrink:0; padding:9px 16px; background:#fff; color:#32415C; border:1.5px solid #D8DEE8; border-radius:9px; font-size:12.5px; font-weight:700; cursor:pointer;';
    const pc = this._pricingCalc();
    vals.pUsers = pc.users; vals.pBU = pc.businessUnits; vals.pLocations = pc.locations;
    vals.pAddUsers = pc.additionalUsers; vals.pAddUserCost = pc.additionalUserCost;
    vals.pAddBU = pc.additionalBusinessUnits; vals.pAddBUCost = pc.additionalBusinessUnitCost;
    vals.pAddLocations = pc.additionalLocations; vals.pAddLocationCost = pc.additionalLocationCost;
    vals.pAnnCost = pc.announcementsCost; vals.pMsgCost = pc.messagingCost;
    vals.pTotal = pc.customMonthlyTotal; vals.pTotalLabel = '\u20AC' + pc.customMonthlyTotal + '/month';
    vals.pRec = this._pricingRecommendation(pc);
    vals.pHasAddUsers = pc.additionalUsers > 0; vals.pHasAddBU = pc.additionalBusinessUnits > 0;
    vals.pAnnOn = s.pricingAnnouncementsEnabled; vals.pMsgOn = s.pricingMessagingEnabled; vals.pAiOn = s.pricingAiImageInterested;
    vals.pAnnAria = s.pricingAnnouncementsEnabled ? 'true' : 'false';
    vals.pMsgAria = s.pricingMessagingEnabled ? 'true' : 'false';
    vals.pAiAria = s.pricingAiImageInterested ? 'true' : 'false';
    vals.pAnnToggleStyle = toggleBtn(s.pricingAnnouncementsEnabled); vals.pAnnToggleLabel = s.pricingAnnouncementsEnabled ? 'Enabled' : 'Add';
    vals.pMsgToggleStyle = toggleBtn(s.pricingMessagingEnabled); vals.pMsgToggleLabel = s.pricingMessagingEnabled ? 'Enabled' : 'Add';
    vals.pAiToggleStyle = toggleBtn(s.pricingAiImageInterested); vals.pAiToggleLabel = s.pricingAiImageInterested ? 'Interested \u2713' : "I'm interested";
    vals.pUsersInc = () => this._pStep('pricingUsers', 1, AXY_PRICING.includedUsers);
    vals.pUsersDec = () => this._pStep('pricingUsers', -1, AXY_PRICING.includedUsers);
    vals.pBUInc = () => this._pStep('pricingBusinessUnits', 1, 1);
    vals.pBUDec = () => this._pStep('pricingBusinessUnits', -1, 1);
    vals.pLocationsInc = () => this._pStep('pricingLocations', 1, 1);
    vals.pLocationsDec = () => this._pStep('pricingLocations', -1, 1);
    vals.pAnnToggle = () => this.setState(p => ({ pricingAnnouncementsEnabled: !p.pricingAnnouncementsEnabled }));
    vals.pMsgToggle = () => this.setState(p => ({ pricingMessagingEnabled: !p.pricingMessagingEnabled }));
    vals.pAiToggle = () => this.setState(p => ({ pricingAiImageInterested: !p.pricingAiImageInterested }));
    vals.pScrollBuild = () => this._scrollTo('axy-pricing-builder');
    vals.pFormOpen = () => {
      const pricingLastPayload = this._pricingPayload();
      this.setState({ pricingFormOpen: true, pricingLastPayload }, () => this._scrollTo('axy-pricing-request'));
    };
    vals.pFormShown = s.pricingFormOpen;
    vals.pInquirySnapshot = s.pricingLastPayload;
    for (let i = 0; i < 9; i++) {
      vals['pf_' + i] = s.pricingFreeDetail === i;
      vals['pFree' + i + 'Style'] = freeBub(s.pricingFreeDetail === i);
      vals['pFreeAria' + i] = s.pricingFreeDetail === i ? 'true' : 'false';
      vals['pFreeGo' + i] = ((n) => () => this.setState({ pricingFreeDetail: n }))(i);
    }
    for (let i = 0; i < 5; i++) {
      const on = !!s.pricingFuture[i];
      vals['pFtOn' + i] = on;
      vals['pFt' + i + 'Style'] = ftCard(on);
      vals['pFt' + i + 'PillStyle'] = ftPill(on);
      vals['pFt' + i + 'Label'] = on ? 'Interested \u2713' : "I'm interested";
      vals['pFtAria' + i] = on ? 'true' : 'false';
      vals['pFtToggle' + i] = ((n) => () => this.setState(p => { const a = p.pricingFuture.slice(); a[n] = !a[n]; return { pricingFuture: a }; }))(i);
    }
    vals.resExplore = () => this._resExplore();
    return Object.assign(vals, {
      ddProduct: s.dd === 'product', ddResources: s.dd === 'resources',
      ddProductOn: () => this.setState({ dd: 'product' }),
      ddResourcesOn: () => this.setState({ dd: 'resources' }),
      ddOff: () => this.setState({ dd: '' }),
      menuOpen: s.menu, menuLabel: s.menu ? '✕ Close' : '☰ Menu',
      toggleMenu: () => this.setState(p => ({ menu: !p.menu })),
      formWalk: !!s.forms.walk, formWalkOff: !s.forms.walk, formAccountOff: !s.forms.account, formLoginOff: !s.forms.login, formNewsOff: !s.forms.news, submitWalk: () => this.setState(p => ({ forms: { ...p.forms, walk: true } })),
      formAccount: !!s.forms.account, submitAccount: () => this.setState(p => ({ forms: { ...p.forms, account: true } })),
      formLogin: !!s.forms.login, submitLogin: () => this.setState(p => ({ forms: { ...p.forms, login: true } })),
      formNews: !!s.forms.news, submitNews: () => this.setState(p => ({ forms: { ...p.forms, news: true } }))
    });
  }

  render() {
    const v = this.renderVals();
    const Page = PAGES[this.state.route];
    return (
      <>
        <SiteHeader {...v} />
        <div style={{ minHeight: '70vh' }}>
          {Page ? <Page {...v} /> : null}
        </div>
        <SiteFooter {...v} />
      </>
    );
  }
}

export default function App({ initialPath = '/' }) {
  return (
    <I18nProvider initialLocale={localeFromPath(initialPath)}>
      <AppShell initialPath={initialPath} />
      <AnalyticsConsent />
    </I18nProvider>
  );
}
