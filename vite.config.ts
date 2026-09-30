import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  // GitHub Pages serves this project from /Airbnb-Clone/; keep root paths for local and Netlify builds.
  base: process.env.GITHUB_ACTIONS === 'true' ? '/Airbnb-Clone/' : '/',
  plugins: [react()],
})
