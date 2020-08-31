import { Controller } from 'stimulus'

export default class extends Controller {
  static targets = ['message']

  connect() {
    console.log('welcome_controller.js', 'connected!')
  }

  greet() {
    console.log('Hello, Stimulus! from WelcomeController', this.message)
  }

  get message() {
    return this.messageTarget.value
  }
}
