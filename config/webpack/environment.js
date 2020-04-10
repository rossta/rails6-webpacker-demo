const { environment } = require('@rails/webpacker')

const WorkboxPlugin = require('workbox-webpack-plugin')

// resolve-url-loader must be used before sass-loader
environment.loaders.get('sass').use.splice(-1, 0, {
  loader: 'resolve-url-loader',
});

environment.plugins.append('GenerateSW', new WorkboxPlugin.InjectManifest({
  swSrc: "./app/javascript/service-worker.js",
  swDest: "../service-worker.js"
}))

// environment.plugins.append('InjectManifest', new WorkboxPlugin.InjectManifest({

// }))

module.exports = environment
