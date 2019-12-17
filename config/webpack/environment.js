const { environment } = require('@rails/webpacker')
const webpack = require('webpack')
const {resolve} = require('path');

environment.plugins.append('Provide', new webpack.ProvidePlugin({
  Datepicker: [resolve('app/javascript/application/datepicker'), 'default']
}))

if (process.env.WEBPACK_ANALYZE === "true") {
  const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
  environment.plugins.append('BundleAnalyzerPlugin', new BundleAnalyzerPlugin())
}

module.exports = environment
