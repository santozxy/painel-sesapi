/* eslint-disable @typescript-eslint/no-explicit-any */
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/painel",
  plugins: [react()],
  resolve: {
    alias: {
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
