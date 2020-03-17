import React from 'react'
import ReactDOM from 'react-dom'

import Hello from 'components/Hello'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Hello name="React" />,
    document.body.appendChild(document.createElement('div')),
  )
})
