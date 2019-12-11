const { environment } = require('@rails/webpacker')

const ImageminWebpWebpackPlugin = require("imagemin-webp-webpack-plugin");

environment.plugins.prepend('ImageWebpWebpackPlugin', new ImageminWebpWebpackPlugin({
  silent: false,
  detailedLogs: true
}))

const manifest = environment.plugins.get('Manifest')

const IMAGE_REGEXP = /\.(jpe?g|png)/;
manifest.hooks.customize.tap('ImageminWebpWebpackPlugin', function(entry, _original, manifest, _asset) {
  const { key, value } = entry
  const match = key.match(IMAGE_REGEXP)
  if (match) {
    manifest.set(key.replace(IMAGE_REGEXP, '.webp'), value.replace(IMAGE_REGEXP, '.webp'))
  }
});

module.exports = environment
