import { defineConfig } from 'vite';

export default defineConfig({
  esbuild: {
    jsx: 'automatic', // Enables automatic JSX runtime
  },
});
