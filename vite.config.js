import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist'
  },
  optimizeDeps: {
    include: ["tsparticles", "react-tsparticles"],
  },
  server: {
    hmr: {
      overlay: false,
    },
  },
  base: './', // ✅ Add this for relative routing in production
})
