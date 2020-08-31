// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
import 'core-js/stable'
import 'regenerator-runtime/runtime'

import moment from 'moment'
import ujs from '@rails/ujs'

import consumer from '../src/channels/consumer'
import ApplicationController from '../src/controllers/application/application_controller'

import '../src/initializers'
import '../src/application'

ujs.start()

console.log('application.js', 'loaded at', moment().toString())
console.log('application.js', 'actioncable consumer', consumer)
console.log('application.js', 'application controller', ApplicationController)
