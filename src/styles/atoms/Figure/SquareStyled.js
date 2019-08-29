import styled, { css } from 'styled-components'
import { rotate } from '../../_base/Animations'

const SquareStyled = styled.div`
  display: block;
  width: 92px;
  height: 92px;
  border: 25px solid ${({ theme }) => theme.colors.tertiary};
  background-color: transparent;
  animation: ${rotate} 2s linear infinite;

  /* sizes */
  ${({ big }) =>
    big &&
    css`
      width: 166px;
      height: 166px;
      border-width: 34px;
    `}

  /* colors */
  ${({ blue }) =>
    blue &&
    css`
      border-color: ${({ theme }) => theme.colors.secondary};
    `}

`

export { SquareStyled }
