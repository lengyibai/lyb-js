import { defineConfig } from "vite";

export default defineConfig({
  build: {
    minify: false,
    outDir: "../npm",
    lib: {
      formats: ["umd"],
      entry: "main.ts",
      name: "LibJs",
      fileName: () => `lyb.js`,
    },
  },
});
