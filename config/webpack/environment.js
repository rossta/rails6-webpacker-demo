const { environment } = require('@rails/webpacker')

if (process.env.WEBPACK_ANALYZE === "true") {
  const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
  environment.plugins.append('BundleAnalyzerPlugin', new BundleAnalyzerPlugin())
}

environment.loaders.append('chosen', {
  test: require.resolve('chosen-js'),
  use: [{
    loader: 'imports-loader',
    options: 'jQuery=jquery,$=jquery,this=>window',
  }],
})

module.exports = environment
