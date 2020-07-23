process.env.NODE_ENV = process.env.NODE_ENV || 'development'

const environment = require('./environment')

throw new Error('in Test!')
module.exports = environment.toWebpackConfig()
