const { environment } = require('@rails/webpacker')

environment.loaders.append('chosen', {
  test: require.resolve('chosen-js'),
  use: [{
    loader: 'imports-loader',
    options: 'jQuery=jquery,$=jquery,this=>window',
  }],
})

module.exports = environment
