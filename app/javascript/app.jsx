import React from 'react'
import ReactDOM from 'react-dom'

import Card from './components/Card'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Card title="My Card" />,
    document.body.appendChild(document.createElement('div')),
  )
})
