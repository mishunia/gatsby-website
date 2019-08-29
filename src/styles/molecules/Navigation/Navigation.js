import React from 'react'
import {
  NavStyled,
  NavListStyled,
  NavListItemStyled,
  NavListItemLinkStyled
} from './styles'

NavListItemLinkStyled.defaultProps = {
  activeClassName: 'active'
}

const Navigation = () => (
  <NavStyled>
    <NavListStyled>
      <NavListItemStyled>
        <NavListItemLinkStyled to="/">Home</NavListItemLinkStyled>
      </NavListItemStyled>
      <NavListItemStyled>
        <NavListItemLinkStyled to="/about">About</NavListItemLinkStyled>
      </NavListItemStyled>
      <NavListItemStyled>
        <NavListItemLinkStyled to="/blog">Blog</NavListItemLinkStyled>
      </NavListItemStyled>
      <NavListItemStyled>
        <NavListItemLinkStyled to="/contact">Contact</NavListItemLinkStyled>
      </NavListItemStyled>
    </NavListStyled>
  </NavStyled>
  // <div>e</div>
)

export default Navigation
