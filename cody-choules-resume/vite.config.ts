import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
    },
  },
  server: {
    // Set DISABLE_HMR=true to disable hot module replacement when needed (e.g. remote file sync).
    hmr: process.env.DISABLE_HMR !== 'true',
  },
});
