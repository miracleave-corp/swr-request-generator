import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["./src/index.ts"],
  splitting: false,
  target: "node22",
  clean: true,
  minify: false,
});
