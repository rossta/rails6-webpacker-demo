const { environment } = require('@rails/webpacker')

if (process.env.WEBPACK_ANALYZE === 'true') {
  const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
  environment.plugins.append('BundleAnalyzerPlugin', new BundleAnalyzerPlugin())
}

module.exports = environment
