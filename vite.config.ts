import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // base: 'portfolio-v2O', 
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'framer-motion': ['framer-motion'],
        },
      },
    },
    chunkSizeWarningLimit: 1000,
  },
});
