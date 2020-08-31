import consumer from '../channels/consumer'

import application from '../application'
import { definitionsFromContext } from 'stimulus/webpack-helpers'

const context = require.context('../../src/controllers/welcome', true, /\.js$/)
application.load(definitionsFromContext(context))

import WelcomeController from '../../src/controllers/welcome/welcome_controller'

console.log('welcome.js', 'loaded at', new Date().toString())
console.log('welcome.js', 'actioncable consumer', consumer)
console.log('welcome.js', 'welcome controller', WelcomeController)
