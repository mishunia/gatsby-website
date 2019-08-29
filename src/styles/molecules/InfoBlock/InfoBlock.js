import React from 'react'
import styled, { css } from 'styled-components'
import Heading from '../../atoms/Heading/Heading'
import Paragraph from '../../atoms/Paragraph/Paragraph'
import Button from '../../atoms/Button/Button'

const InfoBlockStyled = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  color: #2c2d32;
  z-index: 2;

  ${({ hero }) =>
    hero &&
    css`
      color: white;
    `}
`

const InfoBlockTitleStyled = styled.div`
  margin-bottom: ${({ theme }) => theme.gutter.l};
  width: 100%;
  max-width: 620px;
`

const InfoBlockContentStyled = styled.div`
  margin-bottom: ${({ theme }) => theme.gutter.l};
  width: 100%;
  max-width: 560px;
`

const InfoBlockActionStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  max-width: 560px;

  ${Button} {
    margin-bottom: ${({ theme }) => theme.gutter.l};
    margin-right: ${({ theme }) => theme.gutter.l};
  }
`

const InfoBlock = props => (
  <InfoBlockStyled hero>
    <InfoBlockTitleStyled>
      <Heading>{props.title}</Heading>
    </InfoBlockTitleStyled>
    <InfoBlockContentStyled>
      <Paragraph>{props.desc}</Paragraph>
    </InfoBlockContentStyled>
    <InfoBlockActionStyled>
      <Button>{props.firstButton}</Button>
      <Button sec>{props.secondButton}</Button>
    </InfoBlockActionStyled>
  </InfoBlockStyled>
)

const InfoBlockSmall = props => (
  <InfoBlockStyled>
    <InfoBlockContentStyled>
      <Paragraph>{props.desc}</Paragraph>
    </InfoBlockContentStyled>
    <InfoBlockActionStyled>
      <Button>{props.button}</Button>
    </InfoBlockActionStyled>
  </InfoBlockStyled>
)

export { InfoBlock, InfoBlockSmall }
