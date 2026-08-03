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

const ROUTES = { '': 'home', '/': 'home', '/product': 'product', '/sales-app': 'salesapp', '/back-office': 'backoffice', '/customer-experience': 'custexp', '/integrations': 'integrations', '/how-it-works': 'how', '/for-retailers': 'retailers', '/for-brands': 'brands', '/use-cases/retail-clienteling': 'clienteling', '/use-cases/in-store-sales-capture': 'capture', '/use-cases/product-demand-intelligence': 'demand', '/use-cases/retailer-brand-collaboration': 'collab', '/pricing': 'pricing', '/resources': 'resources', '/about': 'about', '/book-a-walkthrough': 'walkthrough', '/contact': 'contact', '/help': 'help', '/create-account': 'account', '/login': 'login', '/article': 'article', '/legal': 'legal' };

const TITLES = { home: 'Turn every store interaction into sales intelligence', product: 'Product Overview', salesapp: 'Sales App', backoffice: 'Back Office', custexp: 'Customer Experience', integrations: 'Integrations', how: 'How AXY Works', retailers: 'AXY for Retailers', brands: 'AXY for Manufacturers & Brands', clienteling: 'Retail Clienteling', capture: 'In-Store Sales Capture', demand: 'Product Demand Intelligence', collab: 'Retailer–Brand Collaboration', pricing: 'Pricing', resources: 'Resources', about: 'About AXY', walkthrough: 'Book a Walkthrough', contact: 'Contact AXY', help: 'Help Centre', account: 'Create Free Account', login: 'Log In', article: 'Insights & Guides', legal: 'Legal', p404: 'Page not found' };

function routeForPath(pathname = '/') {
  const withoutQuery = pathname.split('?')[0].split('#')[0];
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
  login: Login,
  article: Article,
  legal: Legal,
  walkthrough: Walkthrough,
  contact: Contact,
  p404: NotFound,
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { route: routeForPath(props.initialPath), menu: false, dd: '', persp: 'retail', forms: {}, heroClip: 0, ccu: 0, ccuPaused: false, surf: 0, retail: 0, retailPaused: false, brand: 0, brandPaused: false,
      pricingUsers: 1, pricingBusinessUnits: 1, pricingAnnouncementsEnabled: false, pricingAnnouncementUnits: 1, pricingMessagingEnabled: false, pricingAiImageInterested: false, pricingFreeDetail: 0, pricingFuture: [false, false, false, false, false], pricingFormOpen: false, howStage: 0 };
  }

  // Local pricing configuration (single source of truth).
  PRICING = { additionalUser: 15, additionalBusinessUnit: 49, announcementsPerBusinessUnit: 20, messaging: 19 };

  ROUTES = ROUTES;

  TITLES = TITLES;

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
        } catch (e) {}
      });
      try { document.title = 'AXY — ' + (this.TITLES[r] || 'Page not found'); } catch (e) {}
    };
    window.addEventListener('popstate', this._onRouteChange);
    this._onRouteChange();
    this._ccuStart();
    this._retailStart();
    this._brandStart();
  }
  componentWillUnmount() { window.removeEventListener('popstate', this._onRouteChange); clearInterval(this._ccuTimer); clearInterval(this._retailTimer); clearInterval(this._brandTimer); }
  _ccuStart() { clearInterval(this._ccuTimer); if (this.state.ccuPaused) return; this._ccuTimer = setInterval(() => this.setState(p => ({ ccu: (p.ccu + 1) % 3 })), 5000); }
  _ccuSet(n) { this.setState({ ccu: n }); this._ccuStart(); }
  _retailStart() { clearInterval(this._retailTimer); if (this.state.retailPaused) return; this._retailTimer = setInterval(() => this.setState(p => ({ retail: (p.retail + 1) % 5 })), 5000); }
  _retailSet(n) { this.setState({ retail: n }); this._retailStart(); }
  _brandStart() { clearInterval(this._brandTimer); if (this.state.brandPaused) return; this._brandTimer = setInterval(() => this.setState(p => ({ brand: (p.brand + 1) % 5 })), 5000); }
  _brandSet(n) { this.setState({ brand: n }); this._brandStart(); }
  // ---- Pricing calculator (pure) ----
  _pricingCalc() {
    const s = this.state, P = this.PRICING;
    const users = Math.max(1, s.pricingUsers | 0);
    const businessUnits = Math.max(1, s.pricingBusinessUnits | 0);
    const additionalUsers = Math.max(0, users - 1);
    const additionalUserCost = additionalUsers * P.additionalUser;
    const additionalBusinessUnits = Math.max(0, businessUnits - 1);
    const additionalBusinessUnitCost = additionalBusinessUnits * P.additionalBusinessUnit;
    const announcementUnits = Math.min(Math.max(1, s.pricingAnnouncementUnits | 0), businessUnits);
    const announcementsCost = s.pricingAnnouncementsEnabled ? announcementUnits * P.announcementsPerBusinessUnit : 0;
    const messagingCost = s.pricingMessagingEnabled ? P.messaging : 0;
    const customMonthlyTotal = additionalUserCost + additionalBusinessUnitCost + announcementsCost + messagingCost;
    return { users, businessUnits, additionalUsers, additionalUserCost, additionalBusinessUnits, additionalBusinessUnitCost, announcementUnits, announcementsCost, messagingCost, customMonthlyTotal };
  }
  _pricingRecommendation(c) {
    const s = this.state;
    const ann = s.pricingAnnouncementsEnabled, msg = s.pricingMessagingEnabled, ai = s.pricingAiImageInterested;
    if (c.users === 1 && c.businessUnits === 1 && !ann && !msg && !ai) return 'AXY Free is the right starting point for this setup.';
    return 'This is a custom AXY setup.';
  }
  _pricingPayload() {
    const s = this.state, c = this._pricingCalc();
    const toolNames = ['AI Product Suggestions', 'Pricing & Offer Builder', 'Targets', 'Budgets', 'Dashboards'];
    return {
      users: c.users, businessUnits: c.businessUnits,
      modules: { announcements: s.pricingAnnouncementsEnabled, announcementUnits: s.pricingAnnouncementsEnabled ? c.announcementUnits : 0, messaging: s.pricingMessagingEnabled, aiImageGeneration: s.pricingAiImageInterested },
      estimatedMonthlyTotal: c.customMonthlyTotal,
      futureToolsInterest: toolNames.filter((_, i) => s.pricingFuture[i]),
      recommendation: this._pricingRecommendation(c)
    };
  }
  _scrollTo(id) { try { const el = document.getElementById(id); if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - 72, behavior: 'smooth' }); } catch (e) {} }
  _howGo(n) { this.setState({ howStage: n }, () => this._scrollTo('axy-how-s' + n)); }
  _resExplore() { this._scrollTo('axy-res-start'); }
  _pStep(key, delta, min) { this.setState(p => { const v = Math.max(min, (p[key] | 0) + delta); const next = { [key]: v }; if (key === 'pricingBusinessUnits' && p.pricingAnnouncementUnits > v) next.pricingAnnouncementUnits = v; return next; }); }
  _pAnnStep(delta) { this.setState(p => ({ pricingAnnouncementUnits: Math.min(Math.max(1, (p.pricingAnnouncementUnits | 0) + delta), Math.max(1, p.pricingBusinessUnits | 0)) })); }
  _pSubmit() {
    const payload = this._pricingPayload();
    try {
      const container = document.getElementById('axy-pricing-request');
      const value = (name) => container?.querySelector(`[name="${name}"]`)?.value?.trim() || 'Not provided';
      const modules = Object.entries(payload.modules).filter(([, enabled]) => enabled).map(([name]) => name).join(', ') || 'None selected';
      const body = ['AXY plan request', '', `Company: ${value('company')}`, `Contact: ${value('contact')}`, `Work email: ${value('email')}`, `Phone: ${value('phone')}`, `Country: ${value('country')}`, `Company type: ${value('companyType')}`, `Users: ${payload.users}`, `Business units: ${payload.businessUnits}`, `Selected modules: ${modules}`, `Estimated monthly total: €${payload.estimatedMonthlyTotal}`, `Future tool interest: ${payload.futureToolsInterest.join(', ') || 'None selected'}`, `Recommendation: ${payload.recommendation}`, `Notes: ${value('notes')}`].join('\n');
      window.location.href = `mailto:info@axy.net?subject=${encodeURIComponent('AXY plan request')}&body=${encodeURIComponent(body)}`;
    } catch (e) {}
    this.setState(p => ({ forms: { ...p.forms, pricingPlan: true }, pricingLastPayload: payload }));
  }
  _htStyle(active) {
    return active
      ? 'display:inline-flex; padding:11px 19px; border-radius:24px; font-size:13.5px; font-weight:700; cursor:pointer; background:#fff; color:#1F2B4D; border:1.5px solid #2C8C99; white-space:nowrap; box-shadow:0 6px 16px rgba(44,140,153,.18); transition:all .18s;'
      : 'display:inline-flex; padding:11px 19px; border-radius:24px; font-size:13.5px; font-weight:600; cursor:pointer; background:transparent; color:#4a5878; border:1.5px solid transparent; white-space:nowrap; transition:all .18s;';
  }

  renderVals() {
    const s = this.state;
    const keys = ['home','product','how','retailers','brands','salesapp','backoffice','custexp','clienteling','capture','demand','collab','integrations','pricing','resources','about','walkthrough','contact','help','account','login','article','legal','p404'];
    const vals = {};
    keys.forEach(k => { vals['is_' + k] = s.route === k; });
    const tab = (a) => a
      ? 'display:inline-flex; padding:10px 18px; border-radius:10px; font-size:13.5px; font-weight:700; cursor:pointer; background:#EFF7F8; color:#1F2B4D; border:1.5px solid #2C8C99;'
      : 'display:inline-flex; padding:10px 18px; border-radius:10px; font-size:13.5px; font-weight:600; cursor:pointer; background:#fff; color:#667085; border:1px solid #E4E8EF;';
    const ccuBub = (active, accent) => active
      ? 'cursor:pointer; background:rgba(255,255,255,.12); border:1.5px solid ' + accent + '; border-radius:16px; padding:17px 20px; transition:all .2s; box-shadow:0 12px 32px rgba(0,0,0,.22);'
      : 'cursor:pointer; background:rgba(255,255,255,.05); border:1px solid rgba(255,255,255,.13); border-radius:16px; padding:17px 20px; transition:all .2s;';
    const ccuDot = (active) => active
      ? 'width:26px; height:7px; border-radius:4px; background:#33D6A4; cursor:pointer; transition:all .25s;'
      : 'width:7px; height:7px; border-radius:4px; background:rgba(255,255,255,.28); cursor:pointer; transition:all .25s;';
    const retailCard = (active) => active
      ? 'cursor:pointer; display:flex; gap:14px; align-items:flex-start; background:#fff; border:1.5px solid #2C8C99; border-radius:13px; padding:14px 16px; box-shadow:0 12px 30px rgba(44,140,153,.16); transition:all .2s;'
      : 'cursor:pointer; display:flex; gap:14px; align-items:flex-start; background:#fff; border:1px solid #E7ECF2; border-radius:13px; padding:14px 16px; box-shadow:0 1px 2px rgba(31,43,77,.04); transition:all .2s;';
    const retailBadge = (active) => 'flex:none; width:34px; height:34px; border-radius:9px; font-family:\'Roboto Mono\',monospace; font-size:12px; font-weight:700; display:flex; align-items:center; justify-content:center; transition:all .2s; ' + (active ? 'background:#2C8C99; color:#fff;' : 'background:#EAF6F7; color:#1F7A87;');
    const retailDot = (active) => active
      ? 'width:26px; height:7px; border-radius:4px; background:#2C8C99; cursor:pointer; transition:all .25s;'
      : 'width:7px; height:7px; border-radius:4px; background:rgba(255,255,255,.28); cursor:pointer; transition:all .25s;';
    const surfTab = (active) => active
      ? 'display:inline-flex; align-items:center; gap:7px; padding:9px 15px; border-radius:22px; font-size:13px; font-weight:700; cursor:pointer; background:#32415C; color:#fff; border:1.5px solid #32415C; white-space:nowrap; box-shadow:0 8px 20px rgba(31,43,77,.18); transition:all .18s;'
      : 'display:inline-flex; align-items:center; gap:7px; padding:9px 15px; border-radius:22px; font-size:13px; font-weight:600; cursor:pointer; background:#fff; color:#42506e; border:1.5px solid #E4E8EF; white-space:nowrap; transition:all .18s;';
    const surfDot = (active) => active
      ? 'width:22px; height:7px; border-radius:4px; background:#32415C; cursor:pointer; transition:all .25s;'
      : 'width:7px; height:7px; border-radius:4px; background:#D4DBE6; cursor:pointer; transition:all .25s;';
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
    vals.pUsers = pc.users; vals.pBU = pc.businessUnits;
    vals.pAddUsers = pc.additionalUsers; vals.pAddUserCost = pc.additionalUserCost;
    vals.pAddBU = pc.additionalBusinessUnits; vals.pAddBUCost = pc.additionalBusinessUnitCost;
    vals.pAnnUnits = pc.announcementUnits; vals.pAnnCost = pc.announcementsCost; vals.pMsgCost = pc.messagingCost;
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
    vals.pUsersInc = () => this._pStep('pricingUsers', 1, 1);
    vals.pUsersDec = () => this._pStep('pricingUsers', -1, 1);
    vals.pBUInc = () => this._pStep('pricingBusinessUnits', 1, 1);
    vals.pBUDec = () => this._pStep('pricingBusinessUnits', -1, 1);
    vals.pAnnToggle = () => this.setState(p => { const on = !p.pricingAnnouncementsEnabled; return { pricingAnnouncementsEnabled: on, pricingAnnouncementUnits: on ? Math.max(1, p.pricingBusinessUnits | 0) : p.pricingAnnouncementUnits }; });
    vals.pAnnInc = () => this._pAnnStep(1);
    vals.pAnnDec = () => this._pAnnStep(-1);
    vals.pMsgToggle = () => this.setState(p => ({ pricingMessagingEnabled: !p.pricingMessagingEnabled }));
    vals.pAiToggle = () => this.setState(p => ({ pricingAiImageInterested: !p.pricingAiImageInterested }));
    vals.pScrollBuild = () => this._scrollTo('axy-pricing-builder');
    vals.pFormOpen = () => this.setState({ pricingFormOpen: true }, () => this._scrollTo('axy-pricing-builder'));
    vals.pFormShown = s.pricingFormOpen;
    vals.pSubmitted = !!s.forms.pricingPlan;
    vals.pFormEditable = s.pricingFormOpen && !s.forms.pricingPlan;
    vals.pSubmit = () => this._pSubmit();
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
    // ---- How It Works stepper ----
    const howStep = (active) => active
      ? 'display:inline-flex; align-items:center; gap:8px; padding:11px 18px; border-radius:24px; font-size:13px; font-weight:700; cursor:pointer; background:#32415C; color:#fff; border:1.5px solid #32415C; white-space:nowrap; box-shadow:0 8px 20px rgba(31,43,77,.18); transition:all .18s;'
      : 'display:inline-flex; align-items:center; gap:8px; padding:11px 18px; border-radius:24px; font-size:13px; font-weight:600; cursor:pointer; background:#fff; color:#42506e; border:1.5px solid #E4E8EF; white-space:nowrap; transition:all .18s;';
    for (let i = 0; i < 5; i++) {
      vals['howStep' + i + 'Style'] = howStep(s.howStage === i);
      vals['howGo' + i] = ((n) => () => this._howGo(n))(i);
    }
    vals.resExplore = () => this._resExplore();
    return Object.assign(vals, {
      ddProduct: s.dd === 'product', ddResources: s.dd === 'resources',
      ddProductOn: () => this.setState({ dd: 'product' }),
      ddResourcesOn: () => this.setState({ dd: 'resources' }),
      ddOff: () => this.setState({ dd: '' }),
      menuOpen: s.menu, menuLabel: s.menu ? '✕ Close' : '☰ Menu',
      toggleMenu: () => this.setState(p => ({ menu: !p.menu })),
      persp_retail: s.persp === 'retail', persp_brand: s.persp === 'brand', persp_customer: s.persp === 'customer',
      perspRetail: () => this.setState({ persp: 'retail' }),
      perspBrand: () => this.setState({ persp: 'brand' }),
      perspCustomer: () => this.setState({ persp: 'customer' }),
      perspRetailStyle: tab(s.persp === 'retail'), perspBrandStyle: tab(s.persp === 'brand'), perspCustomerStyle: tab(s.persp === 'customer'),
      ht0: () => this.setState({ heroClip: 0 }), ht1: () => this.setState({ heroClip: 1 }), ht2: () => this.setState({ heroClip: 2 }), ht3: () => this.setState({ heroClip: 3 }), ht4: () => this.setState({ heroClip: 4 }),
      ht0Style: this._htStyle(s.heroClip === 0), ht1Style: this._htStyle(s.heroClip === 1), ht2Style: this._htStyle(s.heroClip === 2), ht3Style: this._htStyle(s.heroClip === 3), ht4Style: this._htStyle(s.heroClip === 4),
      hc_0: s.heroClip === 0, hc_1: s.heroClip === 1, hc_2: s.heroClip === 2, hc_3: s.heroClip === 3, hc_4: s.heroClip === 4,
      ccu_0: s.ccu === 0, ccu_1: s.ccu === 1, ccu_2: s.ccu === 2,
      ccuGo0: () => this._ccuSet(0), ccuGo1: () => this._ccuSet(1), ccuGo2: () => this._ccuSet(2),
      ccuNext: () => this._ccuSet((s.ccu + 1) % 3),
      ccuPaused: s.ccuPaused, ccuPlayLabel: s.ccuPaused ? '▶' : '❚❚',
      ccuToggle: () => this.setState(p => ({ ccuPaused: !p.ccuPaused }), () => this._ccuStart()),
      retail_0: s.retail === 0, retail_1: s.retail === 1, retail_2: s.retail === 2, retail_3: s.retail === 3, retail_4: s.retail === 4,
      retailGo0: () => this._retailSet(0), retailGo1: () => this._retailSet(1), retailGo2: () => this._retailSet(2), retailGo3: () => this._retailSet(3), retailGo4: () => this._retailSet(4),
      retailNext: () => this._retailSet((s.retail + 1) % 5),
      retailPaused: s.retailPaused, retailPlayLabel: s.retailPaused ? '▶' : '❚❚',
      retailToggle: () => this.setState(p => ({ retailPaused: !p.retailPaused }), () => this._retailStart()),
      retailC0Style: retailCard(s.retail === 0), retailC1Style: retailCard(s.retail === 1), retailC2Style: retailCard(s.retail === 2), retailC3Style: retailCard(s.retail === 3), retailC4Style: retailCard(s.retail === 4),
      retailB0Style: retailBadge(s.retail === 0), retailB1Style: retailBadge(s.retail === 1), retailB2Style: retailBadge(s.retail === 2), retailB3Style: retailBadge(s.retail === 3), retailB4Style: retailBadge(s.retail === 4),
      retailD0Style: retailDot(s.retail === 0), retailD1Style: retailDot(s.retail === 1), retailD2Style: retailDot(s.retail === 2), retailD3Style: retailDot(s.retail === 3), retailD4Style: retailDot(s.retail === 4),
      brand_0: s.brand === 0, brand_1: s.brand === 1, brand_2: s.brand === 2, brand_3: s.brand === 3, brand_4: s.brand === 4,
      brandGo0: () => this._brandSet(0), brandGo1: () => this._brandSet(1), brandGo2: () => this._brandSet(2), brandGo3: () => this._brandSet(3), brandGo4: () => this._brandSet(4),
      brandNext: () => this._brandSet((s.brand + 1) % 5),
      brandPaused: s.brandPaused, brandPlayLabel: s.brandPaused ? '▶' : '❚❚',
      brandToggle: () => this.setState(p => ({ brandPaused: !p.brandPaused }), () => this._brandStart()),
      brandC0Style: retailCard(s.brand === 0), brandC1Style: retailCard(s.brand === 1), brandC2Style: retailCard(s.brand === 2), brandC3Style: retailCard(s.brand === 3), brandC4Style: retailCard(s.brand === 4),
      brandB0Style: retailBadge(s.brand === 0), brandB1Style: retailBadge(s.brand === 1), brandB2Style: retailBadge(s.brand === 2), brandB3Style: retailBadge(s.brand === 3), brandB4Style: retailBadge(s.brand === 4),
      brandD0Style: retailDot(s.brand === 0), brandD1Style: retailDot(s.brand === 1), brandD2Style: retailDot(s.brand === 2), brandD3Style: retailDot(s.brand === 3), brandD4Style: retailDot(s.brand === 4),
      surf_0: s.surf === 0, surf_1: s.surf === 1, surf_2: s.surf === 2, surf_3: s.surf === 3, surf_4: s.surf === 4,
      surfGo0: () => this.setState({ surf: 0 }), surfGo1: () => this.setState({ surf: 1 }), surfGo2: () => this.setState({ surf: 2 }), surfGo3: () => this.setState({ surf: 3 }), surfGo4: () => this.setState({ surf: 4 }),
      surfNext: () => this.setState(p => ({ surf: (p.surf + 1) % 5 })),
      surfPrev: () => this.setState(p => ({ surf: (p.surf + 4) % 5 })),
      surfT0Style: surfTab(s.surf === 0), surfT1Style: surfTab(s.surf === 1), surfT2Style: surfTab(s.surf === 2), surfT3Style: surfTab(s.surf === 3), surfT4Style: surfTab(s.surf === 4),
      surfD0Style: surfDot(s.surf === 0), surfD1Style: surfDot(s.surf === 1), surfD2Style: surfDot(s.surf === 2), surfD3Style: surfDot(s.surf === 3), surfD4Style: surfDot(s.surf === 4),
      ccuB0Style: ccuBub(s.ccu === 0, '#7fd4de'), ccuB1Style: ccuBub(s.ccu === 1, '#F3D9C8'), ccuB2Style: ccuBub(s.ccu === 2, '#9FEBD3'),
      ccuD0Style: ccuDot(s.ccu === 0), ccuD1Style: ccuDot(s.ccu === 1), ccuD2Style: ccuDot(s.ccu === 2),
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

export default App;
