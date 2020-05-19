import React from 'react'

export default function({ author, body }) {
  return (
    <div>
      <b>{author}</b> published a new Post: {body}
    </div>
  )
}
