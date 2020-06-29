import React from 'react'

import LargeParent from 'components/LargeParent.jsx'
import LargeChild from 'components/LargeChild.jsx'
import Hello from 'components/Hello.jsx'

import render from '../render'

render(
  <LargeParent name="Joe Sr">
    <Hello name="Silky" />
    <LargeChild name="Joe Jr" />
    <LargeChild name="Jane" />
    <LargeChild name="Jackie" />
  </LargeParent>
)
