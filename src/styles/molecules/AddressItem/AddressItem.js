import React from 'react'
import {
  AddressItemListStyled,
  AddressItemListChildStyled,
  AddressItemListChildIcoStyled,
  AddressItemListChildTxtStyled
} from './styles'
import Paragraph from '../../atoms/Paragraph/Paragraph'

const AddressItem = () => (
  <AddressItemListStyled>
    <AddressItemListChildStyled>
      <AddressItemListChildIcoStyled />

      <AddressItemListChildTxtStyled>
        <Paragraph p2>354 Spencer Underpass, South</Paragraph>
        <Paragraph p2>Aniyahfort, IA 99896-3428</Paragraph>
      </AddressItemListChildTxtStyled>
    </AddressItemListChildStyled>
    <AddressItemListChildStyled>
      <AddressItemListChildIcoStyled />

      <AddressItemListChildTxtStyled>
        <Paragraph p2>muel.kimone@hotmail.com</Paragraph>
        <Paragraph p2>johnna.orsilly@yahoo.com</Paragraph>
      </AddressItemListChildTxtStyled>
    </AddressItemListChildStyled>
    <AddressItemListChildStyled>
      <AddressItemListChildIcoStyled />

      <AddressItemListChildTxtStyled>
        <Paragraph p2>(229) 469-6358</Paragraph>
        <Paragraph p2>(226) 390-5707</Paragraph>
      </AddressItemListChildTxtStyled>
    </AddressItemListChildStyled>
  </AddressItemListStyled>
)

export default AddressItem
