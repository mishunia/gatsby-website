import styled from 'styled-components'

const FooterStyled = styled.footer`
  width: 100%;
`

const FooterInnerStyled = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 100%;
  max-width: ${({ theme }) => theme.size.inner};
`

const FooterTopStyled = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.dark2};

  height: 300px;
`

const FooterTopBoxStyled = styled.div`
  display: flex;
  justify-content: flex-end;
`

const FooterBotStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  background-color: ${({ theme }) => theme.colors.dark3};
  color: ${({ theme }) => theme.colors.white};
`

export {
  FooterStyled,
  FooterInnerStyled,
  FooterTopStyled,
  FooterTopBoxStyled,
  FooterBotStyled
}
