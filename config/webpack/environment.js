const { environment } = require('@rails/webpacker')
const webpack = require('webpack')

environment.loaders.append('gmap4rails', {
  test: /gmaps_google/,
  use: [
    {
      loader: 'imports-loader',
      options: 'this=>window',
    },
  ],
})

environment.plugins.append(
  'lodash',
  new webpack.ProvidePlugin({
    _: 'lodash',
  })
)

module.exports = environment
