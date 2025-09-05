import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Set the correct base path for GitHub Pages project site
  // https://vitejs.dev/guide/static-deploy.html#github-pages
  base: '/rutuja-jadhav-portfolio/',
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
