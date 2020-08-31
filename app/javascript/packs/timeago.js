import moment from 'moment'

document.addEventListener('DOMContentLoaded', () => {
  const div = document.createElement('div')

  document.querySelectorAll('.timeago').forEach((el) => {
    const timestamp = el.dataset.timestamp

    el.textContent = moment(timestamp).fromNow()
  })
})

console.log('timeago.js', 'loaded at', moment().toString())
