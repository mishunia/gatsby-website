import React from 'react'
import styled from 'styled-components'
import { loader } from './../../_base/Animations'

const PreloaderWrapperStyled = styled.div`
  position: fixed;
  background-color: ${({ theme }) => theme.colors.dark2};
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
`

const PreloaderStyled = styled.div`
  position: relative;
`

const PreloaderAnimationStyled = styled.div`
  border: 5px solid ${({ theme }) => theme.colors.tertiary};
  border-top-color: ${({ theme }) => theme.colors.primary};
  border-top-style: groove;
  height: calc(${({ theme }) => theme.gutter.l} * 5);
  width: calc(${({ theme }) => theme.gutter.l} * 5);
  border-radius: 100%;
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  animation: ${loader} 1s linear infinite;
`

const Preloader = () => (
  <PreloaderWrapperStyled>
    <PreloaderStyled>
      <PreloaderAnimationStyled />
    </PreloaderStyled>
  </PreloaderWrapperStyled>
)

export default Preloader
