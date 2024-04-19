/* eslint-disable @typescript-eslint/no-explicit-any */
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { TanStackRouterVite } from "@tanstack/router-vite-plugin";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/painel",
  plugins: [react(), TanStackRouterVite()],
  resolve: {
    alias: {
      "@pages": "/src/pages",
      "@components": "/src/components",
      "@utils": "/src/utils",
      "@services": "/src/services",
      "@assets": "/src/assets",
    },
  },
  build: {
    cssCodeSplit: false,
    chunkSizeWarningLimit: 800,
  },
});
