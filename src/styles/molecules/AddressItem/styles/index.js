import styled from 'styled-components'
import CheckIcon from '../../../../assets/images/check-mark.svg'

const AddressItemListStyled = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0;
`

const AddressItemListChildStyled = styled.li`
  display: flex;
  margin-bottom: ${({ theme }) => theme.gutter.l};
  color: ${({ theme }) => theme.colors.white};
`

const AddressItemListChildIcoStyled = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-right: ${({ theme }) => theme.gutter.m};
  position: relative;

  &:before {
    position: absolute;
    background-image: url(${CheckIcon});
    background-repeat: no-repeat;
    width: 2em;
    height: 23px;
    background-size: 12px;
    left: 5px;
    top: 3px;
    content: '';
  }
`

const AddressItemListChildTxtStyled = styled.div`
  display: block;
`

export {
  AddressItemListStyled,
  AddressItemListChildStyled,
  AddressItemListChildIcoStyled,
  AddressItemListChildTxtStyled
}
