import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import viteTsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: './build',
  },
  plugins: [react(), viteTsconfigPaths()],
  resolve: {
    alias: {
      src: '/src',
    },
  },
  root: './',
  server: {
    open: true,
  },
});
