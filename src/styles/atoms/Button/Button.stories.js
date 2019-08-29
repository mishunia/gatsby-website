import React from 'react'
import { storiesOf } from '@storybook/react'
import Button from './Button'

storiesOf('Atoms/Button', module)
  .add('Primary', () => <Button>Primary button</Button>)
  .add('Medium', () => <Button medium>Medium button</Button>)
  .add('Big', () => <Button big>Big button</Button>)
  .add('Sec', () => <Button sec>Sec button</Button>)
  .add('Tertiary', () => <Button ter>Tertiary button</Button>)
