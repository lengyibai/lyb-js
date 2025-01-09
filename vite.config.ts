import { defineConfig } from "vite";

export default defineConfig({
  server: {
    host: "0.0.0.0",
    port: 3000,
  },

  build: {
    outDir: "umd",
    lib: {
      formats: ["umd"],
      entry: "main.ts",
      name: "LibJs",
      fileName: () => `lyb.js`,
    },
  },
});
