import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

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
});

test("contains only the approved pricing paths", async () => {
  const pricing = await readOutput("pricing/index.html");

  assert.match(pricing, /AXY Free/);
  assert.match(pricing, /Build Your Plan/);
  assert.doesNotMatch(pricing, /AXY Organization|Secure checkout is coming soon/);
});

test("keeps analytics denied until consent", async () => {
  const home = await readOutput("index.html");

  assert.match(home, /G-WTT8L3MJTV/);
  assert.match(home, /analytics_storage[^]*denied/);
  assert.doesNotMatch(home, /googletagmanager\.com\/gtag\/js/);
});
