import "pikaday/css/pikaday.css"
import Pikaday from "pikaday"

export default class Datepicker {
  constructor(element, options) {
    if (options == null) { options = {} }

    // Store DOM element for reference
    this.element = element

    // Do not re-run on elements that already have datepickers
    if (this.element.datepicker === undefined) {
      options = Object.assign({},
        this.defaultOptions(),
        options
      )

      const picker = new Pikaday(options)

      // Store picker on element for reference
      this.element.datepicker = picker

      return picker
    } else {
      console.log("Datepicker already attached")
      return
    }
  }

  // Overridden by `options` in constructor
  defaultOptions() {
    return {
      field: this.element,
      format: "M/D/YYYY",
      bound: true,
      keyboardInput: false,
      showDaysInNextAndPreviousMonths: true,
      position: 'bottom left'
    }
  }
}
