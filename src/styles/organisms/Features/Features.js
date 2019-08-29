import React from 'react'
import {
  InnerStyled,
  SectionStyled,
  GridList,
  GridListItem
} from '../../Styles'
import Feature from '../../molecules/Feature/Feature'
import SectionHead from '../../molecules/SectionHead/SectionHead'

var divStyle = {
  background: '#F8F6F6'
}

const sectionDesc2 =
  'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua2'

const Features = () => (
  <SectionStyled style={divStyle}>
    <InnerStyled>
      <SectionHead sectionHeadTitle="Features" sectionHeadDesc={sectionDesc2} />
      <GridList grid3>
        <GridListItem>
          <Feature />
        </GridListItem>
        <GridListItem>
          <Feature />
        </GridListItem>
        <GridListItem>
          <Feature />
        </GridListItem>
        <GridListItem>
          <Feature />
        </GridListItem>
        <GridListItem>
          <Feature />
        </GridListItem>
        <GridListItem>
          <Feature />
        </GridListItem>
      </GridList>
    </InnerStyled>
  </SectionStyled>
)

export default Features
