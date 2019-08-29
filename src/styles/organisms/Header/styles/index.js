import styled from 'styled-components'

const HeaderStyled = styled.header`
  height: 140px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.dark3};
  color: white;
`

const HeaderInnerStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: ${props => props.theme.size.inner};
  padding: 0 ${props => props.theme.gutter.l};
  width: 100%;
  height: 100%;
  margin: 0 auto;
`

const HeaderLogoStyled = styled.div`
  display: flex;
  width: 50%;
`

const HeaderContentStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 50%;
`

const HeaderContentNavStyled = styled.div`
  display: flex;
`
const HeaderContentActionStyled = styled.div`
  display: flex;
  margin-left: 40px;
`

export {
  HeaderStyled,
  HeaderInnerStyled,
  HeaderLogoStyled,
  HeaderContentStyled,
  HeaderContentNavStyled,
  HeaderContentActionStyled
}
