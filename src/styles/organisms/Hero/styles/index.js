import styled, { css } from 'styled-components'

const HeroStyled = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 860px;
  background-color: ${({ theme }) => theme.colors.dark3};
  color: ${({ theme }) => theme.colors.white};

  ${({ secondary }) =>
    secondary &
    css`
      height: 500px;
    `};
`

const HeroMaskStyled = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`

const HeroMaskContentStyled = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-image: url(${({ bgImg }) => bgImg});
  background-repeat: no-repeat;
  background-size: 450px;
  background-position-x: 90%;
  background-position-y: 70%;
`

const HeroContainerStyled = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`

const HeroContainerInnerStyled = styled.div`
  max-width: ${props => props.theme.size.inner};
  padding: 0 ${props => props.theme.gutter.l};
  width: 100%;
  height: 100%;
  margin: 0 auto;

  display: flex;
  align-items: center;
  padding: 50px 0;
`

const HeroContainerContentStyled = styled.div`
  width: 100%;
  color: ${({ theme }) => theme.colors.white};
`

export {
  HeroStyled,
  HeroMaskStyled,
  HeroMaskContentStyled,
  HeroContainerStyled,
  HeroContainerInnerStyled,
  HeroContainerContentStyled
}
