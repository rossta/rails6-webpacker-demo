import flatpickr from "flatpickr"

document.addEventListener("DOMContentLoaded", () => {
  flatpickr("#date-input", {
      enableTime: true,
      dateFormat: "Y-m-d H:i",
  })
})
