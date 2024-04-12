import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  build:{
    assetsDir: "painel/assets",
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@components": "/src/components",
      "@utils": "/src/utils",
      "@services": "/src/services",
      "@assets": "/src/assets",
    },
  },
})