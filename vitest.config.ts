import { defineConfig } from "vitest/config";
import { fileURLToPath } from "node:url";

export default defineConfig({
  resolve: { alias: { "@": fileURLToPath(new URL("./src", import.meta.url)) } },
  oxc: { jsx: { runtime: "automatic" } },
  test: {
    environment: "jsdom",
    setupFiles: ["./src/test/setupTests.js"],
    globals: true,
    exclude: ["node_modules/**", ".next/**", "user_read_only_context/**"],
  },
});
