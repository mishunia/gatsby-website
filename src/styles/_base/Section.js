import styled, { css } from 'styled-components'

const SectionStyled = styled.section`
  padding: ${props => props.theme.gutter.xxl} 0;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};

  ${({ gray }) =>
    gray &
    css`
      background-color: red;
    `};
`

const SectionContentStyled = styled.div`
  position: relative;
  padding-top: 20px;

  display: flex;
  flex-direction: column;

  ${({ medium }) =>
    medium &
    css`
      padding-top: 40px;
    `}

  ${({ big }) =>
    big &
    css`
      padding-top: 80px;
    `}
`

export { SectionStyled, SectionContentStyled }
