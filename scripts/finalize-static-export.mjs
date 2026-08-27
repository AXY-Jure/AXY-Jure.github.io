import { access, copyFile, readFile, readdir, writeFile } from "node:fs/promises";
import { dirname, join, relative, sep } from "node:path";
import { fileURLToPath } from "node:url";
import { DEFAULT_LOCALE, SUPPORTED_LOCALES } from "../src/i18n/config.js";

const projectRoot = join(dirname(fileURLToPath(import.meta.url)), "..");
const outputRoot = join(projectRoot, "out");

await access(join(outputRoot, "index.html"));
await copyFile(join(projectRoot, "CNAME"), join(outputRoot, "CNAME"));
await writeFile(join(outputRoot, ".nojekyll"), "");

async function htmlFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const absolutePath = join(directory, entry.name);
    if (entry.isDirectory()) files.push(...await htmlFiles(absolutePath));
    else if (entry.isFile() && entry.name.endsWith(".html")) files.push(absolutePath);
  }
  return files;
}

for (const file of await htmlFiles(outputRoot)) {
  const [prefix] = relative(outputRoot, file).split(sep);
  const locale = SUPPORTED_LOCALES.includes(prefix) && prefix !== DEFAULT_LOCALE ? prefix : DEFAULT_LOCALE;
  const html = await readFile(file, "utf8");
  const localizedHtml = html.replace(/<html\s+lang="[^"]*"/, `<html lang="${locale}"`);
  if (localizedHtml !== html) await writeFile(file, localizedHtml);
}
