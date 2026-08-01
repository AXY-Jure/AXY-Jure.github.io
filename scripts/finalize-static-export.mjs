import { access, copyFile, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = join(dirname(fileURLToPath(import.meta.url)), "..");
const outputRoot = join(projectRoot, "out");

await access(join(outputRoot, "index.html"));
await copyFile(join(projectRoot, "CNAME"), join(outputRoot, "CNAME"));
await writeFile(join(outputRoot, ".nojekyll"), "");
