import React from 'react'
import { storiesOf } from '@storybook/react'
import { InfoBlock } from './InfoBlock'

storiesOf('Molecules/InfoBlock', module).add('Hero homepage', () => (
  <div>
    <InfoBlock hero />
  </div>
))
