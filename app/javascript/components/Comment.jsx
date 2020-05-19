import React from 'react'

export default function({ author, body }) {
  return (
    <div>
      <b>{author}</b> said a new Comment: {body}
    </div>
  )
}
