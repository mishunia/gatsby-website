import React from 'react'
import { InnerStyled, SectionStyled, SectionContentStyled } from '../../Styles'
import Form from '../../molecules/Form/Form'
import SectionHead from '../../molecules/SectionHead/SectionHead'

const Contact = () => (
  <SectionStyled>
    <InnerStyled>
      <SectionHead
        sectionHeadTitle="Contact us"
        sectionHeadDesc="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
      />
      <SectionContentStyled style={{ alignItems: 'center' }}>
        <Form name="Name" surname="Surname" text="Text here..." />
      </SectionContentStyled>
    </InnerStyled>
  </SectionStyled>
)

export default Contact
