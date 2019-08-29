import React from 'react'
import {
  FooterStyled,
  FooterInnerStyled,
  FooterTopStyled,
  FooterTopBoxStyled,
  FooterBotStyled
} from './styles'
import AddressItem from '../../molecules/AddressItem/AddressItem'
import Paragraph from '../../atoms/Paragraph/Paragraph'

const Footer = () => (
  <FooterStyled>
    <FooterTopStyled>
      <FooterInnerStyled>
        <FooterTopBoxStyled>
          <AddressItem />
        </FooterTopBoxStyled>
      </FooterInnerStyled>
    </FooterTopStyled>
    <FooterBotStyled>
      <Paragraph p3 center>
        @copy2019 Moroz Michał
      </Paragraph>
    </FooterBotStyled>
  </FooterStyled>
)

export default Footer
