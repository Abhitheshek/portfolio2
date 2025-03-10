import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  build: {
    chunkSizeWarningLimit: 1600, // Increase the warning limit (default is 500 KB)
  },
  plugins: [react()],
})
