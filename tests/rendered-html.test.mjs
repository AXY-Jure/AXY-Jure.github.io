import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import { calculateMonthlyPricing } from "../src/config/billing.js";

const readOutput = (path) => readFile(new URL(`../out/${path}`, import.meta.url), "utf8");
const readSource = (path) => readFile(new URL(`../${path}`, import.meta.url), "utf8");

test("exports direct clean routes with page-specific metadata", async () => {
  const pricing = await readOutput("pricing/index.html");
  const walkthrough = await readOutput("book-a-walkthrough/index.html");
  const contact = await readOutput("contact/index.html");
  const meetingBooked = await readOutput("meeting-booked/index.html");

  assert.match(pricing, /AXY Pricing/);
  assert.match(walkthrough, /Book an AXY Walkthrough/);
  assert.match(contact, /Contact AXY/);
  assert.match(meetingBooked, /AXY Walkthrough Booked/);
  assert.match(meetingBooked, /Your AXY walkthrough is booked/);
  assert.match(meetingBooked, /rel="canonical" href="https:\/\/axy\.net\/meeting-booked\/"/);
  assert.match(meetingBooked, /name="robots" content="noindex, nofollow"/);
});

test("publishes canonical sitemap URLs that match trailing-slash routing", async () => {
  const sitemap = await readOutput("sitemap.xml");
  const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);

  assert.equal(urls.length, 21);
  assert.ok(urls.includes("https://axy.net/"));
  assert.ok(!urls.includes("https://axy.net"));
  assert.ok(urls.every((url) => url.endsWith("/")));
  assert.ok(!urls.some((url) => url.includes("meeting-booked")));
});

test("embeds the HubSpot contact form and meeting scheduler with fallbacks", async () => {
  const contact = await readOutput("contact/index.html");
  const walkthrough = await readOutput("book-a-walkthrough/index.html");

  assert.match(contact, /30aa0bca-d54a-4174-9901-ba6ee7119191/);
  assert.match(contact, /2MKoLytVKQXSZAbpu5xGRkQ/);
  assert.match(walkthrough, /axy-tailored-walkthrough-30-minutes\?embed=true/);
  assert.match(walkthrough, /meetings-eu1\.hubspot\.com\/jure-malalan\/axy-tailored-walkthrough-30-minutes/);
  assert.match(walkthrough, /id="schedule"[^>]*>\s*<iframe/);
});

test("publishes a focused Product Support Help Centre without fake article links", async () => {
  const help = await readOutput("help/index.html");
  const helpMain = help.match(/<main data-screen-label="Help Centre">[\s\S]*?<\/main>/)?.[0];
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
  assert.equal([...header.matchAll(/href="\/help"/g)].length, 2);
  assert.equal([...header.matchAll(/Help &amp; Support/g)].length, 2);
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
  assert.match(pricing, /Five one-time trial image generations/);
  assert.match(pricing, /Announcements — €20\/month per organization/);
  assert.match(pricing, /Messaging — €19\/month per organization/);
  assert.match(pricing, /20 image credits/);
  assert.match(pricing, /50 image credits/);
  assert.match(pricing, /100 image credits/);
  assert.match(pricing, /€20/);
  assert.match(pricing, /€40/);
  assert.match(pricing, /€70/);
  assert.match(pricing, /VAT treatment is confirmed during secure Stripe Checkout/);
  assert.doesNotMatch(pricing, /AXY Starter|Request this plan|Send plan request/);
});

test("calculates the approved €103 example and charges announcements once", () => {
  const example = calculateMonthlyPricing({ totalUsers: 2, totalBusinessUnits: 2, announcements: true, messaging: true });
  const manyUnits = calculateMonthlyPricing({ totalUsers: 1, totalBusinessUnits: 5, announcements: true });
  assert.equal(example.customMonthlyTotal, 103);
  assert.equal(example.announcementsCost, 20);
  assert.equal(manyUnits.announcementsCost, 20);
});

test("uses the live AXY app for registration and login", async () => {
  const pages = [await readOutput("index.html"), await readOutput("pricing/index.html")];
  for (const page of pages) {
    assert.match(page, /https:\/\/app\.axy\.net\/onboarding/);
    assert.match(page, /https:\/\/app\.axy\.net\/authentication/);
    assert.doesNotMatch(page, /href="\/(create-account|login)"/);
  }
});

test("keeps analytics denied until consent", async () => {
  const home = await readOutput("index.html");

  assert.match(home, /G-WTT8L3MJTV/);
  assert.match(home, /analytics_storage[^]*denied/);
  assert.doesNotMatch(home, /googletagmanager\.com\/gtag\/js/);
});
