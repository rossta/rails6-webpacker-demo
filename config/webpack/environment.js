const { environment } = require('@rails/webpacker')
const webpack = require('webpack')

if (process.env.WEBPACK_ANALYZE === "true") {
  const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
  environment.plugins.append('BundleAnalyzerPlugin', new BundleAnalyzerPlugin())
}

environment.plugins.append('jQuery', new webpack.ProvidePlugin({
  "jQuery": "jquery",
  "$": "jquery"
}))

module.exports = environment
