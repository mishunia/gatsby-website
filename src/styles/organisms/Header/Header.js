import React from 'react'
import {
  HeaderStyled,
  HeaderInnerStyled,
  HeaderLogoStyled,
  HeaderContentStyled,
  HeaderContentNavStyled,
  HeaderContentActionStyled
} from './styles'
import Navigation from '../../molecules/Navigation/Navigation'
import { ModalProvider } from 'styled-react-modal'
import FancyModalButton from '../../organisms/Modal/Modal'
import styled from 'styled-components'

const SpecialModalBackground = styled.div`

  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 30;
  background-color: rgba(0, 0, 0, 0.5);

  align-items: center;

  justify-content: center;
  transition: 4s ease;
`


const Header = () => (
  <HeaderStyled>
    <HeaderInnerStyled>
      <HeaderLogoStyled>logo</HeaderLogoStyled>
      <HeaderContentStyled>
        <HeaderContentNavStyled>
          <Navigation />
        </HeaderContentNavStyled>
        <HeaderContentActionStyled>
          <ModalProvider backgroundComponent={SpecialModalBackground}>
            <FancyModalButton />
          </ModalProvider>
        </HeaderContentActionStyled>
      </HeaderContentStyled>
    </HeaderInnerStyled>
  </HeaderStyled>
)

export default Header
