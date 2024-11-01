import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: './src/assets/svg', // Add your asset paths if necessary
          dest: 'assets',
        },
      ],
    }),
  ],
  test: {
    globals: true, // Use global test functions like 'describe' and 'it'
    environment: 'jsdom', // This simulates a browser environment
    setupFiles: './src/setupTests.ts', // Path to your setup file
  },
});
