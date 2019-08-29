import styled from 'styled-components'
import { Link } from 'gatsby'

const BlogItemStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.stone};
`
const BlogItemMediaStyled = styled.div`
  height: 250px;
  width: 100%;

  img {
    width: 100%;
    max-height: 100%;
  }
`

const BlogItemContentStyled = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.stone};
  color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.gutter.m};
`

const BlogItemDateStyled = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`

const BlogItemTitleStyled = styled.div`
  width: 100%;
  margin-bottom: ${({ theme }) => theme.gutter.m};
`

const BlogItemDescStyled = styled.div`
  width: 100%;
`

const BlogItemActionStyled = styled(Link)`
  position: relative;
  width: 100%;
  padding: ${({ theme }) => theme.gutter.m};
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  text-decoration: none;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  text-transform: uppercase;
  text-align: center;
  overflow: hidden;

  &:before {
    content: 'Click';
    position: absolute;
    top: -100%;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.tertiary};
    transition: ${({ theme }) => theme.transitions.box};
  }

  &:hover {
    &:before {
      top: 0%;
    }
  }
`

export {
  BlogItemStyled,
  BlogItemMediaStyled,
  BlogItemContentStyled,
  BlogItemDateStyled,
  BlogItemTitleStyled,
  BlogItemDescStyled,
  BlogItemActionStyled
}
