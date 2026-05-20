import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

const githubPages = process.env.GITHUB_PAGES === 'true';

export default defineConfig({
  // "/" for Vercel/custom domain (/dev routes). Subpath for GitHub Pages project sites.
  base: githubPages ? '/codychoules.com.repo/' : '/',
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
    },
  },
  server: {
    hmr: process.env.DISABLE_HMR !== 'true',
  },
});
