import { Controller } from 'stimulus'

export default class extends Controller {
  static targets = ['message']

  connect() {
    console.log('application_controller.js', 'connected!')
  }

  greet() {
    console.log('Hello, Stimulus! from the ApplicationController', this.message)
  }

  get message() {
    return this.messageTarget.value
  }
}
