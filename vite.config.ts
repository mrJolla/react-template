import svg from '@neodx/svg/vite';
import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import viteTsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  build: {
    outDir: './build',
  },
  plugins: [
    react(),
    viteTsconfigPaths(),
    svg({
      fileName: '{name}.{hash:8}.svg',
      group: true,
      metadata: {
        path: 'src/shared/types/icon.ts',
        runtime: {
          viewBox: true,
        },
      },
      output: 'public/imgs/svg-sprites',
      root: 'assets/icons',
    }),
  ],
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
