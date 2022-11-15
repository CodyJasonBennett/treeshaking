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
  plugins: [
    {
      name: 'vite-fallback',
      generateBundle(_options, bundle) {
        if (bundle['index-vite.js'].code === '\n') {
          this.emitFile({ type: 'asset', fileName: 'index-vite.js', source: '' })
        }
      },
    },
  ],
})
