import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
export default defineConfig({
   optimizeDeps: {
    include: ['esm-dep > cjs-dep'],
  },
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
      },
    },
  },
  
  // ...
});