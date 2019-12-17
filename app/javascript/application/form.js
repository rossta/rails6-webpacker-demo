// Normally, I would use the following import:
//
// import Datepicker from 'datepicker'
//
// but this app also demonstrates how to use the
// ProvidePlugin to make Datepicker available
// without imports

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('input[data-datepicker]').forEach((el) => {
    new Datepicker(el)
  })
})
