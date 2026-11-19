import { readFileSync, writeFileSync } from "node:fs";
import { pathToFileURL } from "node:url";
import { resolve } from "node:path";

const MARK = "<!--app-html-->";
const { render } = await import(pathToFileURL(resolve("dist-ssr/entry-server.js")).href);
const file = resolve("dist/index.html");
const html = readFileSync(file, "utf8");
if (html.split(MARK).length !== 2) {
  console.error(`prerender: expected ${MARK} exactly once in dist/index.html`);
  process.exit(1);
}
const out = html.replace(MARK, () => render("/"));
writeFileSync(file, out);
console.log(`prerender: dist/index.html ${Buffer.byteLength(out)} bytes`);
