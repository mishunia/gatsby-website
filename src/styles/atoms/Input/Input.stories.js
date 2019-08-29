import React from 'react'
import { storiesOf } from '@storybook/react'
import Input from './Input'

storiesOf('Atoms/Input', module)
  .add('Default', () => <Input type="text" placeholder="Default text input" />)
  .add('Newsletter', () => <Input placeholder="Search input" newsletter />)
  .add('Textarea ', () => (
    <Input as="textarea" placeholder="Textarea input" textarea />
  ))
