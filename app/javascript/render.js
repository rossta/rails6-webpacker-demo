import ReactDOM from 'react-dom'

export default function (component) {
  document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(
      component,
      document.body.appendChild(document.createElement('div')),
    )
  })
}
