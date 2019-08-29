import React from 'react'
import { storiesOf } from '@storybook/react'
import CircleStyled from './CircleStyled'

import SquareStyled from './SquareStyled'

storiesOf('Atoms/Figures/Circles', module)
  .add('Circle small', () => <CircleStyled />)
  .add('Circle medium', () => <CircleStyled medium />)
  .add('Circle big', () => <CircleStyled big />)

storiesOf('Atoms/Figures/Squares', module)
  .add('Square small', () => <SquareStyled />)
  .add('Square big', () => <SquareStyled big />)
