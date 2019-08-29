import styled from 'styled-components'
 import { Link } from 'gatsby'

const NavStyled = styled.nav`
  display: flex;
  align-items: center;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.dark3};
`

const NavListStyled = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin: 0;
  list-style-type: none;
  padding: 10px 0;
  width: 100%;
`

const NavListItemStyled = styled.li`
  color: red;
  margin-right: 20px;
  cursor: pointer;
`

const NavListItemLinkStyled = styled(Link)`
  color: white;
  text-transform: uppercase;
  transition: 0.3s ease;
  font-size: 12px;
  font-weight: 400;
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
  &.${props => props.activeClassName} {
    color: ${({ theme }) => theme.colors.primary};
  }
`

export { NavStyled, NavListStyled, NavListItemStyled, NavListItemLinkStyled }
