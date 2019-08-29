import styled, { css } from 'styled-components'

const Heading = styled.h1`
  font-family: ${props => props.theme.fonts.base};
  font-size: ${props => props.theme.fontSizes.xxxl};
  font-weight: ${props => props.theme.fontWeights.medium};
  line-height: ${props => props.theme.lineHeights.m};

   /* align */
  ${({ center }) =>
    center &&
    css`
      text-align: center;
    `}

  ${({ right }) =>
    right &&
    css`
      text-align: right;
    `}

/* alts */

  ${({ h2 }) =>
    h2 &&
    css`
      font-size: ${props => props.theme.fontSizes.xxl};
      font-weight: ${props => props.theme.fontWeights.bold};
    `}

  ${({ h3 }) =>
    h3 &&
    css`
      font-size: ${props => props.theme.fontSizes.xl};
    `}

    ${({ h4 }) =>
      h4 &&
      css`
        font-size: ${props => props.theme.fontSizes.m};
        font-weight: ${props => props.theme.fontWeights.bold};
      `}

`

export default Heading
