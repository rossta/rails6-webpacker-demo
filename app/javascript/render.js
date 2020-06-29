import ReactDOM from 'react-dom'

import ready from './ready'

export default function render(component) {
  ready(() => {
    ReactDOM.render(
      component,
      document.body.appendChild(document.createElement('div')),
    )
  })
}
