const { environment } = require('@rails/webpacker')
const DashboardPlugin = require("webpack-dashboard/plugin");

if (process.env.WEBPACK_ANALYZE === "true") {
  const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
  environment.plugins.append('BundleAnalyzerPlugin', new BundleAnalyzerPlugin({
    openAnalyzer: false
  }))
}

environment.plugins.add('DashboardPlugin', new DashboardPlugin())

module.exports = environment
