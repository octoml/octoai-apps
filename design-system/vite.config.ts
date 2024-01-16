import { defineConfig } from 'vite';
import path from 'node:path';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [
    dts({
      insertTypesEntry: true,
      rollupTypes: true,
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src/'),
    },
  },
  build: {
    lib: {
      entry: [path.resolve(__dirname, 'index.html'), path.resolve(__dirname, 'tailwind.config.ts')],
      name: '@octoml/demo-design-system',
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      external: ['tailwindcss', 'tailwindcss/defaultTheme'],
    },
  },
});
