import React from 'react'
import { action } from '@storybook/addon-actions'
import Hello from './index'

export default {
  title: 'Hello',
  component: Hello,
}

export const Click = () => <Hello onClick={action('clicked')} />

export const Named = () => <Hello name={'Rails Friend'} />
