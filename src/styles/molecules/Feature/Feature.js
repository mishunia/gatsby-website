import React, { Component } from 'react'
import styled from 'styled-components'
import Heading from '../../atoms/Heading/Heading'
import Paragraph from '../../atoms/Paragraph/Paragraph'
import featureImg from '../../../assets/images/feature-img-1.png'

const FeatureStyled = styled.div`
  position: relative;
  max-width: 360px;
  /* border: 1px solid #000; */
  padding: 30px 28px 39px;
  transition: ${({ theme }) => theme.transitions.box};
  background-color: ${({ theme }) => theme.colors.white};

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.primary};
    /* background-color: ${({ activeColor, theme }) =>
      activeColor ? theme[activeColor] : 'white'}; */
    height: 10px;
  }

  &:hover {
    box-shadow: ${({ theme }) => theme.shadows.box};
  }
`
const FeatureIcoStyled = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 36px;

  img {
    width: 100%;
    max-width: 50px;
    height: 50px;
  }
`

const FeatureTitleStyled = styled.div`
  margin-bottom: 36px;
`

const FeatureContentStyled = styled.div`
  width: 100%;
`

const Feature = () => {
  return (
    <FeatureStyled>
      <FeatureIcoStyled>
        <img src={featureImg} />
      </FeatureIcoStyled>
      <FeatureTitleStyled>
        <Heading h4 center>
          Unique Design
        </Heading>
      </FeatureTitleStyled>
      <FeatureContentStyled>
        <Paragraph p3 center>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamc
        </Paragraph>
      </FeatureContentStyled>
    </FeatureStyled>
  )
}

export default Feature
