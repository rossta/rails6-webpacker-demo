    const { environment } = require('@rails/webpacker')

    environment.loaders.append('opentok-layout', {
      test: require.resolve('opentok-layout-js'),
      use: [{
        loader: 'expose-loader',
        options: 'initLayoutContainer'
      }]
    })

    module.exports = environment
