import { readFileSync, existsSync } from "node:fs";
import { describe, it, expect } from "vitest";

const files = ["index.html", "src/pages/Home.jsx", "src/components/profile/TvImage.jsx", "src/components/Nav.jsx"];
const names = [...new Set(files.flatMap(f =>
  readFileSync(f, "utf8").match(/[\w-]+\.(?:webp|png|jpe?g|svg)\b/g) ?? []
))].filter(n => n !== "og-image.png"); // og-image is an absolute URL, out of scope

describe("page images", () => {
  it("every image the page references exists in public/", () => {
    for (const n of names) {
      expect(existsSync(`public/images/${n}`) || existsSync(`public/${n}`), n).toBe(true);
    }
  });

  it("home page images are webp", () => {
    expect(names.filter(n => n.endsWith(".png") && n !== "favicon-sage.png")).toEqual([]);
  });
});
