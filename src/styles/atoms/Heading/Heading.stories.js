import React from 'react'
import { storiesOf } from '@storybook/react'
import Heading from './Heading'

storiesOf('Atoms/Heading', module)
  .add('H1', () => <Heading>Heading 1</Heading>)
  .add('H2', () => <Heading h2>Heading 2</Heading>)
  .add('H3', () => <Heading h3>Heading 3</Heading>)
  .add('H4', () => <Heading h4>Heading 4</Heading>)
