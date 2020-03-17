import React from 'react'

import Comment from 'components/Comment.jsx'
import Hello from 'components/Hello.jsx'
import Post from 'components/Post.jsx'

import render from './render'

render(<Hello name="React" />)
render(<Post author="Ross" body="I'm a Post component!" />)
render(<Comment author="Ross" body="I'm a Comment component!" />)
