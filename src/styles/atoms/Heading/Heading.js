import styled, { css } from 'styled-components'
import { media } from '../../_base/Media'

const Heading = styled.h2`
  font-family: ${props => props.theme.fonts.base};
  font-size: ${props => props.theme.fontSizes.xxl};
  font-weight: ${props => props.theme.fontWeights.medium};
  line-height: ${props => props.theme.lineHeights.m};

  @media ${media.tablet} {
      font-size: ${props => props.theme.fontSizes.xxxl};
  }

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

      @media ${media.tablet} {
        font-size: ${props => props.theme.fontSizes.xxl};
      }
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

        @media ${media.tablet} {
          font-size: ${props => props.theme.fontSizes.m};
        }
      `}

`

export default Heading
