import styled, { css } from 'styled-components'

const CircleStyled = styled.div`
  display: block;
  width: 140px;
  height: 140px;
  border-radius: 50%;
  border: 50px solid ${({ theme }) => theme.colors.primary};
  background-color: transparent;

  /* sizes */
  ${({ medium }) =>
    medium &&
    css`
      width: 286px;
      height: 286px;
      border-width: 70px;
    `}

  ${({ big }) =>
    big &&
    css`
      width: 610px;
      height: 610px;
      border-width: 140px;
    `}

    /* colors */

    ${({ blue }) =>
      blue &&
      css`
        border-color: #2a1685;
      `}

`

export default CircleStyled
