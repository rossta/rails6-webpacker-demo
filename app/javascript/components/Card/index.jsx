import React from 'react'

import myImage from '../../images/me.jpg'

const styles = {
  backgroundColor: 'aliceblue',
  width: '50vh',
  height: '50vh',
  padding: 5,
  backgroundImage: `url(${myImage})`,
  backgroundSize: '50vh'
}

export default function ({ title }) {
  return (
    <div style={styles}>
      Hello {title}!
    </div>
  )
}
