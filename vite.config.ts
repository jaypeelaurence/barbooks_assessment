import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      pages: path.resolve("src/pages/"),
      src: path.resolve("src/"),
      utils: path.resolve("src/utils"),
      ui: path.resolve("src/ui"),
      modules: path.resolve("src/modules"),
      assets: path.resolve("src/assets"),
      hooks: path.resolve("src/hooks"),
    },
  },
});
