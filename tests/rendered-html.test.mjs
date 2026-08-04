import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import { calculateMonthlyPricing } from "../src/config/billing.js";

const readOutput = (path) => readFile(new URL(`../out/${path}`, import.meta.url), "utf8");

test("exports direct clean routes with page-specific metadata", async () => {
  const pricing = await readOutput("pricing/index.html");
  const walkthrough = await readOutput("book-a-walkthrough/index.html");
  const contact = await readOutput("contact/index.html");

  assert.match(pricing, /AXY Pricing/);
  assert.match(walkthrough, /Book an AXY Walkthrough/);
  assert.match(contact, /Contact AXY/);
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
