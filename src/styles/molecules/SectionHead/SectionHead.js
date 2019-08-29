import React from 'react'
import styled from 'styled-components'
import Heading from '../../atoms/Heading/Heading'
import Paragraph from '../../atoms/Paragraph/Paragraph'

const SectionHeadStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${({ theme }) => theme.gutter.m} 0;
  width: 100%;
  max-width: 530px;
  margin: 0 auto ${({ theme }) => theme.gutter.m};
`

const SectionHeadTitleStyled = styled.div`
  margin-bottom: ${({ theme }) => theme.gutter.m};
`

const SectionHeadDescStyled = styled.div`
  width: 100%;
  text-align: center;
`

const SectionHead = props => (
  <SectionHeadStyled>
    <SectionHeadTitleStyled>
      <Heading h2>{props.sectionHeadTitle}</Heading>
    </SectionHeadTitleStyled>
    <SectionHeadDescStyled>
      <Paragraph p3 center>
        {props.sectionHeadDesc}
      </Paragraph>
    </SectionHeadDescStyled>
  </SectionHeadStyled>
)

export default SectionHead
