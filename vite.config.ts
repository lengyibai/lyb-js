import { defineConfig } from "vite";
import fs from "fs";
import path from "path";

export default defineConfig({
  plugins: [
    {
      name: "clean-dist",
      buildStart() {
        const distPath = path.resolve(__dirname, "dist");
        if (fs.existsSync(distPath)) {
          fs.rmSync(distPath, { recursive: true, force: true });
        }
      },
    },
  ],

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
