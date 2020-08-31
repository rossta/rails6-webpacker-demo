const { environment } = require('@rails/webpacker')
const webpack = require('webpack')

environment.plugins.append(
  'IgnoreMomentLocales',
  new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /(en-us|en-gb)/)
)

environment.splitChunks((config) => {
  return {
    ...config,
    ...{
      optimization: {
        runtimeChunk: 'single',
        splitChunks: {
          chunks: 'all',
          name: true,
          cacheGroups: {
            vendors: {
              test: /[\\/]node_modules[\\/]/,
              priority: -10,
            },
            default: {
              minChunks: 2,
              priority: -20,
              reuseExistingChunk: true,
            },
          },
        },
      },
    },
  }
})

if (process.env.WEBPACK_ANALYZE === 'true') {
  const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
  environment.plugins.append('BundleAnalyzerPlugin', new BundleAnalyzerPlugin())
}

module.exports = environment
