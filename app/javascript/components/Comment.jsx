import React from 'react'

export default function({ author, body }) {
  return (
    <div style={{backgroundColor: 'gainsboro', padding: '1em'}}>
      <b>{author}</b> said a new Comment: {body}
    </div>
  )
}
