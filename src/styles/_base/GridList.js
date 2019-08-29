import styled, { css } from 'styled-components'
import { media } from './Media'

const GridList = styled.ul`
  display: flex;
  flex-wrap: wrap;

  padding: 30px 0;
  /* margin-right: -10px;
  margin-left: -10px; */

  list-style-type: none;
  width: 100%;
  margin: 0 auto;

  @media ${media.tablet} {
    margin-right: -10px;
    margin-left: -10px;
    width: calc(100% + 20px);
  }

  ${({ grid3 }) =>
    grid3 &&
    css`
      justify-content: space-between;

      ${GridListItem} {
        width: 100%;
        margin-bottom: ${({ theme }) => theme.gutter.xl}
      }

      @media ${media.laptop} {
        ${GridListItem} {
        width: calc(33% - 20px);
        margin-bottom: 0;
      }
      }

      /* ${GridListItem} {
        width: calc(33% - 20px);
      } */
    `};

  ${({ grid4 }) =>
    grid4 &&
    css`
      justify-content: space-between;

      ${GridListItem} {
        width: 100%;
        height: 100%;
      }

      @media ${media.laptop} {
        ${GridListItem} {
          width: calc(25% - 20px);
        }
      }
    `};
`

const GridListItem = styled.li`
  display: flex;
  /* justify-content: center;
  align-items: center; */
  margin-bottom: 20px;
`

export { GridList, GridListItem }
