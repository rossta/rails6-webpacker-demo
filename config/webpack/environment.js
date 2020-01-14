const { environment } = require('@rails/webpacker')
const webpack = require('webpack')

environment.plugins.append('Provide',
  new webpack.ProvidePlugin({
    $: 'jquery',
    jQuery: 'jquery',
    jquery: 'jquery',
    // 'window.Jquery': 'jquery',
    Popper: ['popper.js' ,'default'],
    L: 'leaflet' // didn't help
  }))


environment.splitChunks()

environment.plugins.append(
  'lodash',
  new webpack.ProvidePlugin({
    _: 'lodash',
  })
)

if (process.env.WEBPACK_ANALYZE === "true") {
  const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
  environment.plugins.append('BundleAnalyzerPlugin', new BundleAnalyzerPlugin())
}

module.exports = environment
