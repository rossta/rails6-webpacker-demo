const { environment } = require('@rails/webpacker')
const webpack = require('webpack')

if (process.env.WEBPACK_ANALYZE === "true") {
  const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
  environment.plugins.append('BundleAnalyzerPlugin', new BundleAnalyzerPlugin())
}

// Exposes "Cropper" as window.Cropper in the global scope
environment.loaders.append('cropperjs', {
  test: require.resolve('cropperjs/dist/cropper.common.js'),
  loader: 'expose-loader',
  options: {
    exposes: ['Cropper'],
  },
})

// Provides "Packs.application" in the global scope; any modules
// exported from the application pack will be available as
// "Packs.application[moduleName]"
environment.config.merge({
  output: {
    library: ['Packs', '[name]'],
    libraryTarget: 'window'
  }
})

module.exports = environment
