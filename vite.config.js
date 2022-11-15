import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    modulePreload: false,
    target: 'es2020',
    rollupOptions: {
      output: {
        entryFileNames: '[name]-vite.js',
      },
    },
  },
})
