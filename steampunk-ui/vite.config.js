// vite.config.js in project root

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  root: './',
  publicDir: 'steampunk-ui/public',
  build: {
    outDir: 'dist',
  },
})
