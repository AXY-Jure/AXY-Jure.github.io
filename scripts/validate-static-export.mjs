import assert from "node:assert/strict";
import { access, readFile, readdir } from "node:fs/promises";
import { dirname, extname, join } from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = join(dirname(fileURLToPath(import.meta.url)), "..");
const outputRoot = join(projectRoot, "out");
const requiredFiles = [
  "index.html",
  "pricing/index.html",
  "book-a-walkthrough/index.html",
  "meeting-booked/index.html",
  "help/index.html",
  "login/index.html",
  "legal/index.html",
  "robots.txt",
  "sitemap.xml",
  "CNAME",
  ".nojekyll",
];

for (const path of requiredFiles) await access(join(outputRoot, path));

assert.equal((await readFile(join(outputRoot, "CNAME"), "utf8")).trim(), "axy.net");
const home = await readFile(join(outputRoot, "index.html"), "utf8");
const meetingBooked = await readFile(join(outputRoot, "meeting-booked/index.html"), "utf8");
const help = await readFile(join(outputRoot, "help/index.html"), "utf8");
const helpMain = help.match(/<main data-screen-label="Help Centre">[\s\S]*?<\/main>/)?.[0];
assert.match(home, /G-WTT8L3MJTV/);
for (const consentField of ["analytics_storage", "ad_storage", "ad_user_data", "ad_personalization"]) {
  assert.match(home, new RegExp(`${consentField}[^,}]*denied`));
}
assert.match(home, /ads_data_redaction['"]?\s*,\s*true/);
assert.match(home, /og:image/);
assert.match(home, /surface-sales-app\.jpg/);
assert.match(home, /id="nav-mobile-btn"/);
assert.match(meetingBooked, /rel="canonical" href="https:\/\/axy\.net\/meeting-booked\/"/);
assert.match(meetingBooked, /name="robots" content="noindex, nofollow"/);
assert.equal([...help.matchAll(/href="#product-support"/g)].length, 6);
assert.match(help, /7108a1d1-9b04-49ed-84fc-b7c7123e0767/);
assert.match(help, /data-portal-id="148359284"/);
assert.match(help, /mailto:support@axy\.net/);
assert.match(help, /rel="canonical" href="https:\/\/axy\.net\/help\/"/);
assert.doesNotMatch(help, /name="robots" content="noindex/);
assert.ok(helpMain);
assert.doesNotMatch(helpMain, /href="\/article\/?(?:[?#][^"]*)?"/);

const htmlFiles = [];
async function collectHtml(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) await collectHtml(path);
    else if (entry.name.endsWith(".html")) htmlFiles.push(path);
  }
}
await collectHtml(outputRoot);

const references = new Set();
for (const htmlFile of htmlFiles) {
  const html = await readFile(htmlFile, "utf8");
  for (const match of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
    if (match[1].startsWith("/")) references.add(match[1].split(/[?#]/)[0]);
  }
}

for (const reference of references) {
  const relative = reference === "/" ? "index.html" : reference.slice(1);
  const target = extname(relative) ? relative : join(relative, "index.html");
  await access(join(outputRoot, target));
}

const cssDirectory = join(outputRoot, "_next", "static", "chunks");
const css = (
  await Promise.all(
    (await readdir(cssDirectory))
      .filter((name) => name.endsWith(".css"))
      .map((name) => readFile(join(cssDirectory, name), "utf8")),
  )
).join("\n");
assert.match(css, /#nav-mobile-btn/);
assert.match(css, /@media\s*\(max-width:\s*1100px\)/);

const scripts = (
  await Promise.all(
    (await readdir(cssDirectory))
      .filter((name) => name.endsWith(".js"))
      .map((name) => readFile(join(cssDirectory, name), "utf8")),
  )
).join("\n");
assert.match(scripts, /Reject optional/);
assert.match(scripts, /Accept analytics/);
assert.match(scripts, /☰ Menu/);
assert.match(scripts, /✕ Close/);
assert.match(scripts, /axy-analytics-consent-v1/);
assert.match(scripts, /googletagmanager\.com\/gtag\/js/);
assert.match(scripts, /allow_google_signals/);
assert.match(scripts, /allow_ad_personalization_signals/);
assert.doesNotMatch(
  `${home}\n${scripts}`,
  /connect\.facebook\.net|fbevents|\bfbq\b|snap\.licdn\.com|linkedin insight|googleadservices|doubleclick\.net|googlesyndication|GTM-[A-Z0-9]+|AW-[0-9]+/i,
);
for (const eventName of [
  "form_view",
  "form_start",
  "form_step",
  "generate_lead",
  "form_error",
  "create_account_click",
  "pricing_cta_click",
  "walkthrough_started",
  "walkthrough_booked",
]) {
  assert.match(scripts, new RegExp(eventName));
}

console.log(`Validated ${htmlFiles.length} HTML files and ${references.size} internal static references.`);
