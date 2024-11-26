import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(() => {
  return {
    base: '/tec',
    build: {
      outDir: 'dist',
    },
    plugins: [react()],
  };
});