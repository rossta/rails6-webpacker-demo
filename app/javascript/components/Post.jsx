import React from 'react'
import moment from 'moment'

export default function({ author, body }) {
  return (
    <div style={{backgroundColor: 'aliceblue', padding: '1em'}}>
      <b>{author}</b> published a new Post: {body}
      <div>This post was rendered at {moment().format('MMMM Do YYYY, h:mm:ss a')}</div>
    </div>
  )
}
