const { environment } = require('@rails/webpacker')
const webpack = require('webpack')

environment.plugins.append(
  'IgnoreMomentLocales',
  new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /(en-us|en-gb)/)
)

if (process.env.WEBPACK_ANALYZE === 'true') {
  const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
  environment.plugins.append('BundleAnalyzerPlugin', new BundleAnalyzerPlugin())
}

module.exports = environment
