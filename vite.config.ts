import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  
  build: {
    outDir: 'dist',
    sourcemap: false,
    minify: 'esbuild',
    target: 'esnext',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          motion: ['framer-motion']
        }
      }
    }
  },
  
  optimizeDeps: {
    exclude: ['lucide-react'],
    include: ['react', 'react-dom', 'framer-motion']
  },
  
  esbuild: {
    logOverride: { 'this-is-undefined-in-esm': 'silent' }
  }
});
