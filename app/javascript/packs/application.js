// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
import "core-js/stable"
import "regenerator-runtime/runtime"
// import '../stylesheets/application'
window.jQuery = $
window.$      = $

import 'leaflet'
import 'leaflet.timeline'

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("trix")
require("@rails/actiontext")
require("jquery")
import "bootstrap"
import 'bootstrap/dist/js/bootstrap'

document.addEventListener("turbolinks:load", () => {
  $('[data-toggle="tooltip"]').tooltip()
  $('[data-toggle="popover"]').popover()
})


// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)

console.log('application.js loaded')
