import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    open: true,
    host: true,
  },
  resolve: {
    alias: {
      "@/pages": path.resolve("src/pages"),
      "@/layouts": path.resolve("src/layouts"),
      "@/routes": path.resolve("src/routes"),
      "@/components": path.resolve("src/components"),
      "@/icons": path.resolve("src/assets/icons"),
      "@/images": path.resolve("src/assets/images"),
      "@/ui": path.resolve("src/components/ui"),
      "@/website": path.resolve("src/components/website"),
      "@/config": path.resolve("src/config"),
      "@/locales": path.resolve("src/locales"),
    },
  },
  plugins: [react(), svgr()],
});
