import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { readFile } from "node:fs/promises";
import test from "node:test";
import { calculateMonthlyPricing } from "../src/config/billing.js";

const readOutput = (path) => readFile(new URL(`../out/${path}`, import.meta.url), "utf8");
const readSource = (path) => readFile(new URL(`../${path}`, import.meta.url), "utf8");

test("exports direct clean routes with page-specific metadata", async () => {
  const pricing = await readOutput("pricing/index.html");
  const walkthrough = await readOutput("book-a-walkthrough/index.html");
  const contact = await readOutput("contact/index.html");
  const requestAccess = await readOutput("request-access/index.html");
  const legacyCreateAccount = await readOutput("create-account/index.html");
  const meetingBooked = await readOutput("meeting-booked/index.html");

  assert.match(pricing, /AXY Pricing/);
  assert.match(walkthrough, /Book an AXY Walkthrough/);
  assert.match(contact, /Contact AXY/);
  assert.match(requestAccess, /Request Beta Access \| AXY/);
  assert.match(requestAccess, /Request access for your company/);
  assert.match(requestAccess, /4f886154-36e1-4044-bf3d-6e74a88bb643/);
  assert.match(legacyCreateAccount, /Request access for your company/);
  assert.match(legacyCreateAccount, /name="robots" content="noindex, nofollow"/);
  assert.match(meetingBooked, /AXY Walkthrough Booked/);
  assert.match(meetingBooked, /Your AXY walkthrough is booked/);
  assert.match(meetingBooked, /rel="canonical" href="https:\/\/axy\.net\/meeting-booked\/"/);
  assert.match(meetingBooked, /name="robots" content="noindex, nofollow"/);
});

test("publishes canonical sitemap URLs that match trailing-slash routing", async () => {
  const sitemap = await readOutput("sitemap.xml");
  const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);

  assert.equal(urls.length, 84);
  assert.ok(urls.includes("https://axy.net/"));
  assert.ok(urls.includes("https://axy.net/it/"));
  assert.ok(urls.includes("https://axy.net/de/pricing/"));
  assert.ok(urls.includes("https://axy.net/fr/for-retailers/"));
  assert.ok(urls.includes("https://axy.net/fr/request-access/"));
  assert.ok(!urls.includes("https://axy.net"));
  assert.ok(!urls.some((url) => url.includes("/en/")));
  assert.ok(urls.every((url) => url.endsWith("/")));
  assert.ok(!urls.some((url) => url.includes("meeting-booked")));
  assert.ok(!urls.some((url) => url.includes("create-account")));
  assert.ok(!urls.includes("https://axy.net/legal/"));
});

test("exports localized pages with language metadata and reciprocal hreflang", async () => {
  const italian = await readOutput("it/index.html");
  const germanPricing = await readOutput("de/pricing/index.html");
  const frenchRetailers = await readOutput("fr/for-retailers/index.html");

  assert.match(italian, /<html lang="it"/);
  assert.match(germanPricing, /<html lang="de"/);
  assert.match(frenchRetailers, /<html lang="fr"/);
  assert.match(germanPricing, /rel="canonical" href="https:\/\/axy\.net\/de\/pricing\/"/);
  assert.match(frenchRetailers, /rel="canonical" href="https:\/\/axy\.net\/fr\/for-retailers\/"/);
  for (const language of ["en", "it", "de", "fr", "x-default"]) {
    assert.match(germanPricing, new RegExp('hrefLang="' + language + '"'));
  }
  assert.match(germanPricing, /AXY Preise|AXY-Preise/);
  assert.match(italian, /interazioni|vendita|retail/i);
  assert.doesNotMatch(germanPricing, /name="robots" content="noindex/);
});

test("publishes the localized beta-access form in every supported language", async () => {
  const pages = [
    ["request-access/index.html", "en", "Request access for your company", "4f886154-36e1-4044-bf3d-6e74a88bb643"],
    ["it/request-access/index.html", "it", "Richiedi l’accesso per la tua azienda", "477e375c-d55c-4347-aca1-b7ec796673d2"],
    ["de/request-access/index.html", "de", "Zugang für Ihr Unternehmen anfragen", "aa5c8708-feaa-490d-a428-4d8f61bbd8cd"],
    ["fr/request-access/index.html", "fr", "Demandez l’accès pour votre entreprise", "2de3e45b-ab88-4d37-8c07-b0497a8eac4d"],
  ];

  for (const [path, locale, heading, formId] of pages) {
    const page = await readOutput(path);
    assert.match(page, new RegExp(`<html lang="${locale}"`));
    assert.match(page, new RegExp(heading));
    assert.match(page, new RegExp(formId));
    assert.match(page, /href="\/(?:it\/|de\/|fr\/)?legal#privacy-policy"/);
  }
});

test("publishes a click-to-play homepage video with sound controls", async () => {
  const home = await readOutput("index.html");
  const video = home.match(/<video[^>]*aria-label="AXY platform overview"[^>]*>/)?.[0];
  const heroIndex = home.indexOf("Sell better. Stock smarter.");
  const videoIndex = home.indexOf('<video aria-label="AXY platform overview"');

  assert.ok(video);
  assert.ok(heroIndex >= 0);
  assert.ok(videoIndex > heroIndex);
  assert.match(home, /Already have an account\?/);
  assert.match(video, /controls=""/);
  assert.match(video, /playsInline=""/);
  assert.match(video, /preload="metadata"/);
  assert.match(video, /poster="\/videos\/axy-main-promo-poster\.webp"/);
  assert.doesNotMatch(video, /autoPlay|autoplay|muted/);
  assert.match(home, /<source src="\/videos\/axy-main-promo\.mp4" type="video\/mp4"\/>/);
});

test("publishes three selectable homepage operating stages with matching AXY visuals", async () => {
  const home = await readOutput("index.html");
  const start = home.indexOf("Capture. Continue. Understand.");
  const end = home.indexOf("See AXY from every side of the retail relationship.", start);
  const section = home.slice(start, end);

  assert.ok(start >= 0);
  assert.ok(end > start);
  assert.match(section, /role="tablist"[^>]*aria-label="AXY operating model stages"[^>]*aria-orientation="vertical"/);
  assert.equal([...section.matchAll(/<button[^>]*role="tab"/g)].length, 3);
  assert.equal([...section.matchAll(/aria-controls="home-stage-panel-[0-2]"/g)].length, 3);
  assert.equal([...section.matchAll(/role="tabpanel"/g)].length, 3);
  assert.equal([...section.matchAll(/aria-labelledby="home-stage-tab-[0-2]"/g)].length, 3);
  assert.equal([...section.matchAll(/aria-selected="true"/g)].length, 1);
  assert.equal([...section.matchAll(/aria-selected="false"/g)].length, 2);
  assert.match(section, /Capture the work as it happens/);
  assert.match(section, /Keep the relationship moving/);
  assert.match(section, /Understand what the activity means/);
  assert.match(section, /src="\/images\/home-clean\/sales-context\.webp"/);
  assert.match(section, /src="\/images\/home-clean\/post-visit\.webp"/);
  assert.match(section, /src="\/images\/home-clean\/mobile-analytics\.webp"/);
  assert.equal([...section.matchAll(/class="home-clean__iphone-mockup"/g)].length, 2);
});

test("publishes the six supplied product artworks with their existing destinations", async () => {
  const product = await readOutput("product/index.html");
  const start = product.indexOf("Explore the AXY products.");
  const end = product.indexOf("Everything AXY connects across your retail business.", start);
  const section = product.slice(start, end);
  const cards = [
    ["hv27", "sales-app.webp", "Sales App", "/sales-app"],
    ["hv28", "sales-catalogue.webp", "Sales Catalogue", "/sales-app"],
    ["hv29", "back-office.webp", "Back Office", "/back-office"],
    ["hv30", "customer-app.webp", "Customer App", "/customer-experience"],
    ["hv31", "partner-network.webp", "Partner Network", "/for-brands"],
    ["hv32", "alfred-ai.webp", "Alfred AI", "/how-it-works"],
  ];

  assert.ok(start >= 0);
  assert.ok(end > start);
  assert.equal([...section.matchAll(/src="\/images\/product-bubbles\/[^"]+\.webp"/g)].length, 6);
  for (const [hoverClass, image, label, href] of cards) {
    const card = section.match(new RegExp(`<a href="${href}/?" class="${hoverClass}"[^>]*>[\\s\\S]*?</a>`))?.[0];
    assert.ok(card);
    assert.match(card, new RegExp(`src="/images/product-bubbles/${image}"`));
    assert.match(card, new RegExp(label));
  }
});

test("publishes the redesigned Customer App journey with the supplied artwork", async () => {
  const customerExperience = await readOutput("customer-experience/index.html");
  const page = customerExperience.match(/<main[^>]*data-screen-label="Customer Experience"[^>]*>[\s\S]*?<\/main>/)?.[0];
  const artwork = [
    "/images/customer-app/connected-stores-phone.webp",
    "/images/customer-app/guided-catalogue-phone.webp",
    "/images/customer-app/product-library-hand.webp",
    "/images/customer-app/product-library-phone.webp",
    "/images/customer-app/store-continuity.webp",
    "/images/customer-app/taste-profile-phone.webp",
  ];
  assert.ok(page);
  const assetSources = [...page.matchAll(/<img[^>]*\bsrc="(\/images\/(?:customer-app|for-retailers)\/[^"]+\.webp)"[^>]*>/g)]
    .map((match) => match[1]);

  assert.match(customerExperience, /rel="canonical" href="https:\/\/axy\.net\/customer-experience\/"/);
  assert.doesNotMatch(customerExperience, /name="robots" content="noindex/);
  assert.match(page, /Everything you buy, love and explore, all in one place\./);
  assert.match(page, /Give customers one place to continue every retail relationship\./);
  assert.equal(assetSources.length, 8);
  assert.deepEqual([...new Set(assetSources)].sort(), artwork.sort());
  assert.equal(assetSources.filter((source) => source.endsWith("product-library-hand.webp")).length, 2);
  assert.equal(assetSources.filter((source) => source.endsWith("product-library-phone.webp")).length, 2);

  assert.equal([...page.matchAll(/href="\/book-a-walkthrough\/?#schedule"/g)].length, 2);
  assert.equal([...page.matchAll(/href="\/for-retailers\/?"/g)].length, 2);
  assert.equal([...page.matchAll(/href="\/sales-app\/?"/g)].length, 1);
});

test("publishes the visual About story with AXY mobile screens", async () => {
  const about = await readOutput("about/index.html");
  const page = about.match(/<main[^>]*data-screen-label="About AXY"[^>]*>[\s\S]*?<\/main>/)?.[0];
  const visualSources = [
    "/images/about/vip-room.webp",
    "/images/about/customer-consultation.webp",
    "/images/about/product-craft.webp",
    "/images/about/sales-app-customer-overview.webp",
    "/images/about/customer-app-home.webp",
    "/images/about/mobile-analytics.webp",
    "/images/about/jure-malalan.webp",
  ];

  assert.ok(page);
  assert.match(about, /rel="canonical" href="https:\/\/axy\.net\/about\/"/);
  assert.doesNotMatch(about, /name="robots" content="noindex/);
  assert.equal([...page.matchAll(/<h1\b/g)].length, 1);
  assert.match(page, /Built on the shop floor, not in a slide deck\./);
  assert.match(page, /Jure Malalan · Founder, AXY/);
  assert.equal([...page.matchAll(/data-device-mockup="iphone"/g)].length, 3);
  assert.doesNotMatch(page, /Photo:/);
  assert.doesNotMatch(page, /ey\.com/);
  for (const source of visualSources) {
    assert.match(page, new RegExp(`src="${source.replaceAll("/", "\\/")}"`));
  }
  assert.equal([...page.matchAll(/href="\/book-a-walkthrough\/?#schedule"/g)].length, 2);
  assert.equal([...page.matchAll(/href="\/how-it-works\/?"/g)].length, 2);
});

test("publishes the visual How It Works journey with five connected stages", async () => {
  const howItWorks = await readOutput("how-it-works/index.html");
  const page = howItWorks.match(/<main[^>]*data-screen-label="How AXY Works"[^>]*>[\s\S]*?<\/main>/)?.[0];
  const artwork = [
    "/images/how-it-works/hero-retail-guidance.webp",
    "/images/how-it-works/capture-scan.webp",
    "/images/how-it-works/act-suggestion.webp",
    "/images/how-it-works/continue-customer.webp",
    "/images/home-clean/mobile-analytics.webp",
    "/images/how-it-works/customer-at-home.webp",
  ];

  assert.ok(page);
  assert.match(howItWorks, /rel="canonical" href="https:\/\/axy\.net\/how-it-works\/"/);
  assert.doesNotMatch(howItWorks, /name="robots" content="noindex/);
  assert.match(page, /data-analytics-location="how_it_works"/);
  assert.equal([...page.matchAll(/<h1\b/g)].length, 1);
  assert.match(page, /How AXY turns everyday retail activity into connected action\./);
  assert.match(page, /Connection does not mean unrestricted access\./);
  assert.match(page, /A customer wants a product that is not currently available\./);

  for (let index = 0; index < 5; index += 1) {
    assert.match(page, new RegExp(`id="axy-how-s${index}"`));
    assert.match(page, new RegExp(`href="#axy-how-s${index}"`));
  }
  for (const source of artwork) {
    assert.match(page, new RegExp(`src="${source.replaceAll("/", "\\/")}"`));
  }

  assert.equal([...page.matchAll(/<details/g)].length, 7);
  assert.equal([...page.matchAll(/href="\/book-a-walkthrough\/?#schedule"/g)].length, 3);
  assert.match(page, /href="\/request-access\/?"/);
  assert.doesNotMatch(page, /Select a stage to jump to it|End-to-end walkthrough:|<video/);
  assert.doesNotMatch(page, /same-model-title|Same model, different work|The connected pattern continues across the product lifecycle/);
});

test("publishes a focused Sales App journey from customer context to next action", async () => {
  const salesApp = await readOutput("sales-app/index.html");
  const page = salesApp.match(/<main[^>]*data-screen-label="Sales App"[^>]*>[\s\S]*?<\/main>/)?.[0];
  const artwork = [
    "/images/sales-app/guided-conversation.webp",
    "/images/sales-app/capture-scan.webp",
    "/images/sales-app/suggested-product.webp",
    "/images/sales-app/next-action.webp",
    "/images/sales-app/availability.webp",
    "/images/sales-app/mobile-analytics.webp",
  ];

  assert.ok(page);
  assert.match(salesApp, /rel="canonical" href="https:\/\/axy\.net\/sales-app\/"/);
  assert.doesNotMatch(salesApp, /name="robots" content="noindex/);
  assert.match(page, /data-analytics-location="sales_app"/);
  assert.equal([...page.matchAll(/<h1\b/g)].length, 1);
  assert.match(page, /Know who to contact\. What to suggest\. What to do next\./);
  assert.match(page, /The Sales App answers three practical questions\./);
  assert.match(page, /AXY proposes\./);
  assert.match(page, /The salesperson reviews the context and decides\./);
  assert.equal([...page.matchAll(/<details/g)].length, 4);

  for (const source of artwork) {
    assert.match(page, new RegExp(`src="${source.replaceAll("/", "\\/")}"`));
  }

  assert.equal([...page.matchAll(/href="\/request-access\/?"/g)].length, 2);
  assert.equal([...page.matchAll(/href="\/for-retailers\/?"/g)].length, 2);
  assert.match(page, /href="\/book-a-walkthrough\/?#schedule"/);
  assert.match(page, /data-analytics-event="pricing_cta_click"/);
  assert.match(page, /data-analytics-cta-name="view_pricing_sales_app"/);
  assert.doesNotMatch(page, /sales-wide-home|sales-wide-customer|axy-followup-task|Opportunity detected/);
});

test("publishes Back Office as the connected management and data hub", async () => {
  const backOffice = await readOutput("back-office/index.html");
  const page = backOffice.match(/<main[^>]*data-screen-label="Back Office"[^>]*>[\s\S]*?<\/main>/)?.[0];
  const artwork = [
    "/images/back-office/hero-management-hub.webp",
    "/images/back-office/product-record.webp",
    "/images/back-office/orders.webp",
    "/images/back-office/performance.webp",
  ];

  assert.ok(page);
  assert.match(backOffice, /rel="canonical" href="https:\/\/axy\.net\/back-office\/"/);
  assert.doesNotMatch(backOffice, /name="robots" content="noindex/);
  assert.match(page, /data-analytics-location="back_office"/);
  assert.equal([...page.matchAll(/<h1\b/g)].length, 1);
  assert.match(page, /Manage the business behind every sale\./);
  assert.match(page, /Every operational record stays in its business context\./);
  assert.match(page, /Add an approved partner catalogue without rebuilding it in Excel\./);
  assert.match(page, /Start with the overview\. Open the record behind it\./);
  assert.match(page, /Keep each business unit accurate\. Publish from approved content\./);
  assert.match(page, /Connect your systems once\. Reduce separate partner integrations\./);
  assert.equal([...page.matchAll(/<details/g)].length, 6);

  for (const source of artwork) {
    assert.match(page, new RegExp(`src="${source.replaceAll("/", "\\/")}"`));
  }

  assert.equal([...page.matchAll(/href="\/request-access\/?"/g)].length, 2);
  assert.equal([...page.matchAll(/href="\/book-a-walkthrough\/?#schedule"/g)].length, 2);
  assert.equal([...page.matchAll(/href="\/integrations\/?"/g)].length, 2);
  assert.match(page, /href="\/for-retailers\/?"/);
  assert.match(page, /href="\/for-brands\/?"/);
  assert.doesNotMatch(page, /Know what changed|Begin with the next useful decision|attention-overview|backoffice-wide-|Alfred Brener Stieglitz|Before AXY|With AXY/);
});

test("publishes Integrations as one shared standard without implying native connectors", async () => {
  const integrations = await readOutput("integrations/index.html");
  const page = integrations.match(/<main[^>]*data-screen-label="Integrations"[^>]*>[\s\S]*?<\/main>/)?.[0];
  const approvedLogoSources = [
    "/images/integrations/logos/salesforce.webp",
    "/images/integrations/logos/microsoft-dynamics-365.svg",
    "/images/integrations/logos/odoo.svg",
  ];
  const architecture = page?.match(/<figure[^>]*data-integration-architecture="shared-model"[^>]*>[\s\S]*?<\/figure>/)?.[0];

  assert.ok(page);
  assert.ok(architecture);
  assert.match(integrations, /rel="canonical" href="https:\/\/axy\.net\/integrations\/"/);
  assert.doesNotMatch(integrations, /name="robots" content="noindex/);
  assert.match(page, /data-analytics-location="integrations"/);
  assert.equal([...page.matchAll(/<h1\b/g)].length, 1);
  assert.match(page, /Connect once\. Exchange through one standard\./);
  assert.match(architecture, /Many systems\. One agreed structure between companies\./);
  assert.match(architecture, /AXY shared exchange model: mapping, validation and permissions/);
  assert.equal([...architecture.matchAll(/data-architecture-node="system"/g)].length, 5);
  assert.equal([...architecture.matchAll(/data-architecture-node="network"/g)].length, 5);
  assert.match(architecture, /ERP and accounting/);
  assert.match(architecture, /Authorised retailers/);
  assert.match(architecture, /Each source keeps its authority\.<\/strong>/);
  assert.doesNotMatch(page, /integration-network-hero\.webp/);
  assert.match(page, /Stop rebuilding the same integration for every partner\./);
  assert.match(page, /Standard at the core\. Flexible at the edge\./);
  assert.match(page, /approved improvements enter AXY’s monthly release cycle/);
  assert.match(page, /Logos do not imply endorsement, partnership, certification or an off-the-shelf connector/);

  for (const source of approvedLogoSources) {
    assert.match(page, new RegExp(`src="${source.replaceAll("/", "\\/")}"`));
  }

  assert.equal([...page.matchAll(/<details/g)].length, 8);
  assert.equal([...page.matchAll(/href="\/book-a-walkthrough\/?#schedule"/g)].length, 2);
  assert.match(page, /href="\/back-office\/?"/);
  assert.match(page, /href="\/for-retailers\/?"/);
  assert.match(page, /href="\/for-brands\/?"/);
  assert.doesNotMatch(page, /\b(?:AVAILABLE|IN VALIDATION|PLANNED)\b|No unverified logo wall/);
  assert.doesNotMatch(page, /images\/integrations\/logos\/(?:sap|oracle|netsuite|hubspot|shopify|woocommerce)/i);
});

test("keeps redesigned pages free of presentation-board section dividers", async () => {
  const [retailers, brands, customerStyles, retailerStyles, brandStyles] = await Promise.all([
    readOutput("for-retailers/index.html"),
    readOutput("for-brands/index.html"),
    readSource("src/styles/customer-experience.css"),
    readSource("src/styles/for-retailers.css"),
    readSource("src/styles/for-brands.css"),
  ]);

  assert.doesNotMatch(retailers, /\bfr-divider\b/);
  assert.doesNotMatch(brands, /\bfb-divider\b/);
  assert.doesNotMatch(retailerStyles, /\.fr-divider\s*\{/);
  assert.doesNotMatch(brandStyles, /\.fb-divider\s*\{/);

  const customerSectionRules = customerStyles.match(/\.cax-section\s*\{[^}]*\}/g) ?? [];
  assert.ok(customerSectionRules.length >= 1);
  for (const rule of customerSectionRules) {
    assert.doesNotMatch(rule, /border-(?:top|bottom)(?:-width)?\s*:/);
  }
});

test("publishes a concise Brands story from in-store signals to product decisions", async () => {
  const brands = await readOutput("for-brands/index.html");
  const page = brands.match(/<main[^>]*data-screen-label="For Brands"[^>]*>[\s\S]*?<\/main>/)?.[0];
  const brandsStyles = await readSource("src/styles/for-brands.css");
  const artwork = [
    "/images/home-clean/customer-trying-item.webp",
    "/images/for-brands/product-intelligence.webp",
    "/images/back-office/product-record.webp",
    "/images/back-office/orders.webp",
    "/images/for-brands/permission-model.webp",
  ];

  assert.ok(page);
  assert.match(brands, /rel="canonical" href="https:\/\/axy\.net\/for-brands\/"/);
  assert.doesNotMatch(brands, /name="robots" content="noindex/);
  assert.match(page, /data-analytics-location="for_brands"/);
  assert.equal([...page.matchAll(/<section\b/g)].length, 8);
  assert.equal([...page.matchAll(/<h1\b/g)].length, 1);
  assert.match(page, /Know what happens after sell-in\./);
  assert.match(page, /Make every connected retailer easier to support\./);
  assert.match(page, /Respond while product interest is still active\./);
  assert.match(page, /Turn store activity into clearer product decisions\./);
  assert.match(page, /Share the workflow—not the retailer/);
  const ordersSection = page.match(/<section[^>]*aria-labelledby="availability-title"[^>]*>[\s\S]*?<\/section>/)?.[0];
  assert.ok(ordersSection);
  assert.match(ordersSection, /data-device-mockup="desktop"/);
  assert.match(ordersSection, /class="fb-orders-mockup__screen"[\s\S]*?src="\/images\/back-office\/orders\.webp"/);
  assert.equal([...page.matchAll(/<details/g)].length, 4);
  assert.equal([...page.matchAll(/href="\/book-a-walkthrough\/?#schedule"/g)].length, 2);
  assert.equal([...page.matchAll(/href="\/integrations\/?"/g)].length, 2);

  for (const source of artwork) {
    assert.match(page, new RegExp(`src="${source.replaceAll("/", "\\/")}"`));
  }

  assert.doesNotMatch(page, /catalogue-grid|warranty-overview|backoffice-wide-reorder|partner-network-display|systems-layer/);
  assert.doesNotMatch(page, /From emerging brands to international retail networks|Built from retail reality|Align the network\. Act on demand\. Keep control\.|Understand early product reactions before committing more inventory/);
  assert.doesNotMatch(page, /retail-product-presentation|brand-content-laptop/);

  for (const decoration of [
    "fb-visibility-stack",
    "fb-demand-alert",
    "fb-lifecycle-card",
    "fb-flow-label",
    "fb-metric-grid",
    "fb-partner-statuses",
    "fb-browser-frame",
  ]) {
    assert.doesNotMatch(page, new RegExp(`\\b${decoration}\\b`));
    assert.doesNotMatch(brandsStyles, new RegExp(`\\.${decoration}\\b`));
  }
});

test("publishes an honest, concise Resources hub around the real clienteling guide", async () => {
  const resources = await readOutput("resources/index.html");
  const page = resources.match(/<main[^>]*data-screen-label="Resources"[^>]*>[\s\S]*?<\/main>/)?.[0];

  assert.ok(page);
  assert.match(resources, /rel="canonical" href="https:\/\/axy\.net\/resources\/"/);
  assert.doesNotMatch(resources, /name="robots" content="noindex/);
  assert.match(page, /data-analytics-location="resources"/);
  assert.equal([...page.matchAll(/<section\b/g)].length, 5);
  assert.equal([...page.matchAll(/<h1\b/g)].length, 1);
  assert.match(page, /Practical guidance for the work behind better retail\./);
  assert.match(page, /Retail clienteling: from the store visit to the next action\./);
  assert.match(page, /Jure Malalan · Updated 14 July 2026 · 7 min read/);
  assert.equal([...page.matchAll(/href="\/article\/?"/g)].length, 1);
  assert.match(page, /href="\/use-cases\/in-store-sales-capture\/?"/);
  assert.match(page, /href="\/use-cases\/product-demand-intelligence\/?"/);
  assert.match(page, /href="\/use-cases\/retailer-brand-collaboration\/?"/);
  assert.match(page, /href="\/integrations\/?"/);
  assert.match(page, /href="\/for-retailers\/?"/);
  assert.match(page, /href="\/for-brands\/?"/);
  assert.equal([...page.matchAll(/href="\/book-a-walkthrough\/?#schedule"/g)].length, 1);
  assert.match(page, /src="\/images\/home-clean\/products-on-table\.webp"/);
  assert.match(page, /src="\/images\/how-it-works\/capture-scan\.webp"/);
  assert.match(page, /alt="Selected products arranged on a presentation table during a retail visit"/);
  assert.match(page, /alt="A retail specialist using a phone while presenting a product"/);
  assert.doesNotMatch(page, /Practical tools|Latest insights|Recently published and updated|AXY Retail Team|Explore expert guides|CHECKLIST|WORKFLOW/);
});

test("publishes the clienteling guide as a semantic editorial long-read", async () => {
  const renderedArticle = await readOutput("article/index.html");
  const page = renderedArticle.match(/<main[^>]*data-screen-label="Article: Retail Clienteling"[^>]*>[\s\S]*?<\/main>/)?.[0];

  assert.ok(page);
  assert.match(page, /^<main[^>]*>\s*<article>/);
  assert.match(renderedArticle, /rel="canonical" href="https:\/\/axy\.net\/article\/"/);
  assert.doesNotMatch(renderedArticle, /name="robots" content="noindex/);
  assert.match(page, /data-analytics-location="article"/);
  assert.equal([...page.matchAll(/<h1\b/g)].length, 1);
  assert.match(page, /Retail clienteling: why CRM records are not enough\./);
  assert.match(page, /src="\/images\/article\/clienteling-context\.webp"/);
  assert.match(page, /alt="A retail specialist presenting an unbranded watch while a customer considers it at the counter"/);
  assert.match(page, /<time dateTime="2026-06-18">Published 18 June 2026<\/time>/);
  assert.match(page, /<time dateTime="2026-07-14">Updated 14 July 2026<\/time>/);
  assert.match(page, /7 min read/);

  for (const id of ["meaning", "before-sale", "next-action", "measure", "framework", "axy-workflow", "questions"]) {
    assert.match(page, new RegExp(`id="${id}"`));
    assert.match(page, new RegExp(`href="#${id}"`));
  }

  assert.equal([...page.matchAll(/<details/g)].length, 4);
  assert.equal([...page.matchAll(/href="\/book-a-walkthrough\/?#schedule"/g)].length, 1);
  assert.match(page, /href="\/use-cases\/in-store-sales-capture\/?"/);
  assert.match(page, /href="\/use-cases\/product-demand-intelligence\/?"/);
  assert.match(page, /href="\/how-it-works\/?"/);
  assert.match(page, /href="\/sales-app\/?"/);
  assert.doesNotMatch(page, /href="\/article\/?"/);
  assert.doesNotMatch(page, /How to create a retail follow-up process employees actually use|Products shown versus products sold: what management can learn|Continue reading/);
});

test("embeds the HubSpot contact form and meeting scheduler with fallbacks", async () => {
  const contact = await readOutput("contact/index.html");
  const walkthrough = await readOutput("book-a-walkthrough/index.html");

  assert.match(contact, /30aa0bca-d54a-4174-9901-ba6ee7119191/);
  assert.match(contact, /2MKoLytVKQXSZAbpu5xGRkQ/);
  assert.match(walkthrough, /axy-tailored-walkthrough-30-minutes\?embed=true/);
  assert.match(walkthrough, /meetings-eu1\.hubspot\.com\/jure-malalan\/axy-tailored-walkthrough-30-minutes/);
  assert.match(walkthrough, /id="schedule"[^>]*>[\s\S]*?Open mobile scheduling[\s\S]*?<iframe/);
});

test("publishes a focused Product Support Help Centre without fake article links", async () => {
  const help = await readOutput("help/index.html");
  const helpMain = help.match(/<main[^>]*data-screen-label="Help Centre"[^>]*>[\s\S]*?<\/main>/)?.[0];
  const topicLinks = [...help.matchAll(/href="#product-support"/g)];

  assert.ok(helpMain);
  assert.equal(topicLinks.length, 6);
  for (const topic of [
    "Account &amp; Access",
    "Products &amp; Catalog",
    "Sales &amp; Customers",
    "Orders, Transfers &amp; Warranty",
    "Billing &amp; Subscription",
    "Integrations &amp; Other",
  ]) {
    assert.match(help, new RegExp(topic));
  }
  assert.match(help, /id="product-support"/);
  assert.match(help, /7108a1d1-9b04-49ed-84fc-b7c7123e0767/);
  assert.match(help, /data-portal-id="148359284"/);
  assert.match(help, /mailto:support@axy\.net/);
  assert.match(help, /reply to that email thread instead of opening a duplicate request/);
  assert.match(help, /Do not include passwords, access codes, payment-card details/);
  assert.match(help, /rel="canonical" href="https:\/\/axy\.net\/help\/"/);
  assert.doesNotMatch(help, /name="robots" content="noindex/);
  assert.doesNotMatch(helpMain, /href="\/article\/?(?:[?#][^"]*)?"/);
});

test("keeps Product Support operational data outside the analytics lifecycle", async () => {
  const supportEmbed = await readSource("src/components/HubSpotSupportFormEmbed.jsx");
  const forbiddenAnalyticsHooks = [
    "trackAnalyticsEvent",
    "createHubSpotFormLifecycleTracker",
    "legacyHubSpotFormEventName",
    "CONSENT_CHANGED_EVENT",
    "generate_lead",
    "form_view",
    "form_start",
    "form_step",
    "form_error",
    "gtag",
    "dataLayer",
    "addEventListener",
    "postMessage",
  ];

  for (const hook of forbiddenAnalyticsHooks) {
    assert.doesNotMatch(supportEmbed, new RegExp(hook));
  }
  assert.doesNotMatch(
    supportEmbed,
    /firstname|lastname|email|company|vat|country|subject|description|business_impact|file_name/i,
  );
});

test("exposes Help & Support through keyboard-accessible desktop and mobile navigation", async () => {
  const header = await readSource("src/components/SiteHeader.jsx");

  assert.match(header, /<button[^>]*className="hv203 axy-nav-dropdown-trigger"/);
  assert.match(header, /aria-expanded=\{ddResources\}/);
  assert.match(header, /aria-controls="resources-menu"/);
  assert.match(header, /onClick=\{ddResources \? ddOff : ddResourcesOn\}/);
  assert.match(header, /event\.key !== 'Escape'/);
  assert.equal([...header.matchAll(/href=\{hrefForLocale\('\/help'\)\}/g)].length, 2);
  assert.equal([...header.matchAll(/t\('common\.nav\.helpSupport'\)/g)].length, 2);
  assert.match(header, /id="nav-mobile-btn"[^>]*type="button"[^>]*aria-expanded=\{menuOpen\}/);
});

test("meeting CTAs open directly on the scheduling calendar", async () => {
  const routes = [
    "index.html",
    "for-retailers/index.html",
    "for-brands/index.html",
    "integrations/index.html",
    "pricing/index.html",
  ];

  for (const route of routes) {
    const page = await readOutput(route);
    assert.doesNotMatch(page, /href="\/book-a-walkthrough"/);
    assert.match(page, /href="\/book-a-walkthrough#schedule"/);
  }
});

test("publishes the approved free plan, calculator and AI image packages", async () => {
  const pricing = await readOutput("pricing/index.html");

  assert.match(pricing, /AXY Free/);
  assert.match(pricing, /The first two users and first business unit are always included/);
  assert.match(pricing, /Two users included; then €15\/month for each additional user/);
  assert.doesNotMatch(pricing, /First administrator|One administrator/);
  assert.match(pricing, /Five one-time trial image generations/);
  assert.match(pricing, /Announcements — €20\/month per organization/);
  assert.match(pricing, /Messaging — €19\/month per organization/);
  assert.match(pricing, /20 image credits/);
  assert.match(pricing, /50 image credits/);
  assert.match(pricing, /100 image credits/);
  assert.match(pricing, /€20/);
  assert.match(pricing, /€<!-- -->40/);
  assert.match(pricing, /€<!-- -->70/);
  assert.match(pricing, /VAT treatment is confirmed during secure Stripe Checkout/);
  assert.doesNotMatch(pricing, /AXY Starter|Request this plan|Send plan request/);
});

test("includes two free users and charges additions only from the third user", () => {
  const free = calculateMonthlyPricing();
  const belowMinimum = calculateMonthlyPricing({ totalUsers: 1 });
  const example = calculateMonthlyPricing({ totalUsers: 3, totalBusinessUnits: 2, announcements: true, messaging: true });
  const manyUnits = calculateMonthlyPricing({ totalUsers: 1, totalBusinessUnits: 5, announcements: true });
  assert.equal(free.users, 2);
  assert.equal(free.additionalUsers, 0);
  assert.equal(free.additionalUserCost, 0);
  assert.equal(belowMinimum.users, 2);
  assert.equal(example.additionalUsers, 1);
  assert.equal(example.customMonthlyTotal, 103);
  assert.equal(example.announcementsCost, 20);
  assert.equal(manyUnits.announcementsCost, 20);
});

test("uses the beta-access request for registration CTAs and the live AXY app for login", async () => {
  const pages = [await readOutput("index.html"), await readOutput("pricing/index.html")];
  for (const page of pages) {
    assert.match(page, /href="\/request-access\/?"/);
    assert.match(page, /https:\/\/app\.axy\.net\/authentication/);
    assert.doesNotMatch(page, /href="\/(create-account|login)"/);
  }
});

test("publishes the live Privacy Policy, Terms and cookie disclosure", async () => {
  const legal = await readOutput("legal/index.html");
  const approvedLegalModules = await Promise.all([
    "src/screens/legal-content/privacy-1.js",
    "src/screens/legal-content/privacy-2.js",
    "src/screens/legal-content/privacy-3.js",
    "src/screens/legal-content/privacy-4.js",
    "src/screens/legal-content/terms-1.js",
    "src/screens/legal-content/terms-2.js",
    "src/screens/legal-content/terms-3.js",
  ].map(readSource));
  const approvedLegalDigest = createHash("sha256")
    .update(approvedLegalModules.map((module) => module.replace(/\r\n/g, "\n").trimEnd()).join("\n"))
    .digest("hex");
  const page = legal.match(/<main[^>]*id="top"[^>]*class="axy-legal-page"[^>]*>[\s\S]*?<\/main>/)?.[0];

  assert.ok(page);
  assert.equal(approvedLegalDigest, "30fa3734bd4e77398309676e828c6e983cd49b976d3c2cb1a2b3a1be8470a188");
  assert.match(legal, /<title>AXY Privacy Policy and Terms &amp; Conditions \| AXY<\/title>/);
  assert.match(legal, /name="description" content="AXY Privacy Policy and Terms &amp; Conditions for the AXY platform and applications\."/);
  assert.match(legal, /rel="canonical" href="https:\/\/axy\.net\/legal\/"/);
  assert.match(legal, /name="robots" content="noindex, nofollow"/);
  assert.equal([...page.matchAll(/<h1\b/g)].length, 1);
  assert.match(page, /<article[^>]*id="privacy-policy"[^>]*aria-labelledby="privacy-policy-title"/);
  assert.match(page, /<article[^>]*id="terms-and-conditions"[^>]*aria-labelledby="terms-title"/);
  assert.match(page, /id="cookies-and-similar-technologies">Cookies and Similar Technologies/);
  assert.match(page, /XY Sales d\.o\.o\., Zagreb/);
  assert.match(page, /OIB: 31868998641/);
  assert.match(page, /Stripe, Infobip, HubSpot, Google, Cloudflare, Backblaze and GitHub/);
  assert.match(page, /governed by and construed in accordance with the laws of the Republic of Croatia/);
  assert.match(page, /mailto:jure@axy\.net/);
  assert.match(legal, /href="\/legal#privacy-policy"/);
  assert.match(legal, /href="\/legal#terms-and-conditions"/);
  assert.match(legal, /href="\/legal#cookies-and-similar-technologies"[^>]*>(?:Cookie Policy|Learn more)<\/a>/);
  assert.doesNotMatch(page, /under final legal review/);
  assert.doesNotMatch(legal, /href="\/legal#cookies"/);
});

test("keeps analytics denied until consent", async () => {
  const home = await readOutput("index.html");

  assert.match(home, /G-WTT8L3MJTV/);
  assert.match(home, /analytics_storage[^]*denied/);
  assert.doesNotMatch(home, /googletagmanager\.com\/gtag\/js/);
});

test("keeps narrow-phone layout fixes scoped and regression-protected", async () => {
  const [
    mobileCss,
    globalCss,
    appGlobals,
    resourcesCss,
    walkthrough,
    clienteling,
    salesCapture,
    demandIntelligence,
    collaboration,
  ] = await Promise.all([
    readSource("src/styles/mobile.css"),
    readSource("src/styles/global.css"),
    readSource("app/globals.css"),
    readSource("src/styles/resources.module.css"),
    readSource("src/screens/Walkthrough.jsx"),
    readSource("src/screens/Clienteling.jsx"),
    readSource("src/screens/SalesCapture.jsx"),
    readSource("src/screens/DemandIntelligence.jsx"),
    readSource("src/screens/Collaboration.jsx"),
  ]);

  assert.match(appGlobals, /@import "\.\.\/src\/styles\/global\.css";\s*@import "\.\.\/src\/styles\/mobile\.css";/);
  assert.doesNotMatch(globalCss, /@import "\.\/mobile\.css"/);
  assert.match(mobileCss, /@media \(max-width: 600px\)/);
  assert.match(mobileCss, /@media \(max-width: 360px\)/);
  assert.match(mobileCss, /\.site-header__mobile-menu[\s\S]*height: calc\(100dvh - 64px\)/);
  assert.match(mobileCss, /\.site-footer__grid[\s\S]*grid-template-columns: 1fr !important/);
  assert.match(mobileCss, /\.axy-walkthrough-page #schedule iframe[\s\S]*display: none !important/);
  assert.match(mobileCss, /\[data-screen-label\] summary[\s\S]*min-height: 52px/);
  assert.match(resourcesCss, /\.heroFigure img\s*\{[\s\S]*aspect-ratio: 4 \/ 3;\s*height: auto;/);
  assert.match(walkthrough, /\{copy\.mobileSchedule\}/);

  for (const source of [clienteling, salesCapture, demandIntelligence, collaboration]) {
    assert.doesNotMatch(source, /minWidth: "300px"/);
  }
  assert.match(demandIntelligence, /width: "min\(320px, 100%\)"/);
  assert.match(collaboration, /className="collaboration-workflow"/);
});
