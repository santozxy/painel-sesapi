/* eslint-disable @typescript-eslint/no-explicit-any */
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { TanStackRouterVite } from "@tanstack/router-vite-plugin";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), TanStackRouterVite()],
  resolve: {
    alias: {
      "@pages": "/src/pages",
      "@components": "/src/components",
      "@utils": "/src/utils",
      "@domain": "/src/domain",
      "@assets": "/src/assets",
      "@hooks": "/src/hooks",
      "@services": "/src/services",
      "@api": "/src/api",
    },
  },
  build: {
    chunkSizeWarningLimit: 800,
  },
});
