const { environment } = require('@rails/webpacker')

// To view development bundle:
// $ WEBPACK_ANALYZE=true RAILS_ENV=development NODE_ENV=development bin/webpack
//
// To view production bundle:
// $ WEBPACK_ANALYZE=true RAILS_ENV=production NODE_ENV=production bin/webpack
//
// The development bundle will include the entire antd lib. The production build
// should tree-shake unused modules and will be significantly smaller.
//
if (process.env.WEBPACK_ANALYZE) {
  const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
  environment.plugins.append('BundleAnalyzerPlugin', new BundleAnalyzerPlugin())
}

module.exports = environment
