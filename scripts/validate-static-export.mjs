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
assert.match(home, /G-WTT8L3MJTV/);
assert.match(home, /analytics_storage[^]*denied/);
assert.match(home, /og:image/);
assert.match(home, /surface-sales-app\.jpg/);
assert.match(home, /id="nav-mobile-btn"/);

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
assert.match(scripts, /axy-analytics-consent-v1/);
assert.match(scripts, /googletagmanager\.com\/gtag\/js/);

console.log(`Validated ${htmlFiles.length} HTML files and ${references.size} internal static references.`);
