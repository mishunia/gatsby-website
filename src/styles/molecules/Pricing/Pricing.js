import React, { Component } from 'react'
import styled from 'styled-components'
import { media } from '../../_base/Media'
import Heading from '../../atoms/Heading/Heading'
import Paragraph from '../../atoms/Paragraph/Paragraph'
import Button from '../../atoms/Button/Button'
import { List, ListItem } from '../../atoms/List/List'

const PricingStyled = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: 20px;
  padding: 30px;

  width: 100%;

  min-height: 460px;

  @media ${media.tablet} {
    max-width: 372px;
  }
`

const PricingTitleStyled = styled.div`
  margin-bottom: ${({ theme }) => theme.gutter.l};
  text-align: center;
`

const PricingValStyled = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: ${({ theme }) => theme.gutter.xxs};
`

const PricingInfoStyled = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: ${({ theme }) => theme.gutter.xl};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`

const PricingListStyled = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`

const PricingActionStyled = styled.div`
  position: absolute;
  bottom: -24px;
  left: 50%;
  transform: translateX(-50%);
`

const Pricing = () => (
  <PricingStyled>
    <PricingTitleStyled>
      <Heading as="h3" h4>
        Basic
      </Heading>
    </PricingTitleStyled>
    <PricingValStyled>
      <Paragraph p5>$00</Paragraph>
    </PricingValStyled>
    <PricingInfoStyled>
      <Paragraph as="span" p3>
        Limited Access
      </Paragraph>
    </PricingInfoStyled>
    <PricingListStyled>
      <List>
        <ListItem>100 MB Disk Space</ListItem>
        <ListItem>100 MB Disk Space</ListItem>
        <ListItem>100 MB Disk Space</ListItem>
        <ListItem>100 MB Disk Space</ListItem>
        <ListItem>100 MB Disk Space</ListItem>
      </List>
    </PricingListStyled>
    <PricingActionStyled>
      <Button medium>Get started</Button>
    </PricingActionStyled>
  </PricingStyled>
)

export default Pricing
