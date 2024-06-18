import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  test: {
    environment: 'jsdom',
    globals: true,
    pool: 'forks',
    setupFiles: './test/setupTests.js',
  },
});
