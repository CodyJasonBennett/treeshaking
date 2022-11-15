const { nodeResolve } = require('@rollup/plugin-node-resolve')

module.exports = {
  input: './src/index.js',
  plugins: [nodeResolve()],
  output: {
    file: './dist/index-rollup.js',
  },
}
