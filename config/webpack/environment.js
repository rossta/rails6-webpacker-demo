const path = require('path')
const { environment } = require('@rails/webpacker')

environment.loaders.append('global-var', {
  test: /src\/exposed-var/,
  use: [{
    loader: 'expose-loader',
    options: 'exposedVar'
  }]
})
module.exports = environment
