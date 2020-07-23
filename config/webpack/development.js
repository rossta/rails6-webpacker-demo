process.env.NODE_ENV = process.env.NODE_ENV || 'development'

const environment = require('./environment')

console.log('Loading config/webpack/development.js...')

module.exports = environment.toWebpackConfig()

