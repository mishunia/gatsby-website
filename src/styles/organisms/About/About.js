import React from 'react'
import { InnerStyled, SectionStyled, SectionContentStyled } from '../../Styles'
import SectionHead from '../../molecules/SectionHead/SectionHead'
import { InfoBlockSmall } from '../../molecules/InfoBlock/InfoBlock'
import FigureWrapStyled from '../../atoms/Figure/FigureWrapStyled'
import { SquareStyled } from '../../atoms/Figure/SquareStyled'
import CircleStyled from '../../atoms/Figure/CircleStyled'

const About = props => (
  <SectionStyled>
    <InnerStyled>
      <SectionHead
        sectionHeadTitle={props.sectionHeadTitle}
        sectionHeadDesc={props.sectionHeadDesc}
      />
      <SectionContentStyled style={{ marginTop: '80px' }} medium>
        <InfoBlockSmall desc={props.desc} button={props.button} />
        <FigureWrapStyled topPosition="-10%" leftPosition="80%" animSpeed="0s">
          <CircleStyled big />
        </FigureWrapStyled>
      </SectionContentStyled>
    </InnerStyled>
  </SectionStyled>
)

export default About
