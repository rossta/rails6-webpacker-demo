const { environment } = require('@rails/webpacker')

if (process.env.WEBPACK_ANALYZE === 'true') {
  const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
  environment.plugins.append('BundleAnalyzerPlugin', new BundleAnalyzerPlugin())
}

// environment.splitChunks(() => ({
//   optimization: {
//     usedExports: true,
//     splitChunks: {
//       chunks: 'all',
//       name: true,
//     },
//     runtimeChunk: 'single',
//   },
// }))

module.exports = environment
