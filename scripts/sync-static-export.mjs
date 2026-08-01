import { access, cp, readdir } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = join(dirname(fileURLToPath(import.meta.url)), "..");
const outputRoot = join(projectRoot, "out");

await access(join(outputRoot, "index.html"));

for (const entry of await readdir(outputRoot)) {
  await cp(join(outputRoot, entry), join(projectRoot, entry), {
    recursive: true,
    force: true,
  });
}
