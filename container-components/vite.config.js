import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/current-user': 'http://localhost:9090',
      '/users': {
        target: 'http://localhost:9090',
        rewrite: (path) => path.replace(/^\/users/, '/users'),
      },
    },
  },
});
