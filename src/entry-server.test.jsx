// @vitest-environment node
import { test, expect } from "vitest";
import { render } from "./entry-server";

test("renders the home page without a browser", () => {
  const html = render("/");
  expect(html).toContain("Marven Luis");
  expect(html).toContain("build. break. repeat.");
  expect(html).toMatch(/Marven.{1,6}s work/);
});
