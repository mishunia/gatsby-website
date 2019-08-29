import React from 'react'
import {
  InnerStyled,
  SectionStyled,
  GridList,
  GridListItem
} from '../../Styles'
import Pricing from '../../molecules/Pricing/Pricing'
import SectionHead from '../../molecules/SectionHead/SectionHead'

const PricingPlan = () => (
  <SectionStyled>
    <InnerStyled>
      <SectionHead
        sectionHeadTitle="Pricing Plan"
        sectionHeadDesc="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
      />
      <GridList grid3>
        <GridListItem>
          <Pricing />
        </GridListItem>
        <GridListItem>
          <Pricing />
        </GridListItem>
        <GridListItem>
          <Pricing />
        </GridListItem>
      </GridList>
    </InnerStyled>
  </SectionStyled>
)

export default PricingPlan
