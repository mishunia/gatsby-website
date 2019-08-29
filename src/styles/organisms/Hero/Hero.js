import React from 'react'
import { InnerStyled } from '../../Styles'
import {
  HeroStyled,
  HeroMaskStyled,
  HeroMaskContentStyled,
  HeroContainerStyled,
  HeroContainerInnerStyled,
  HeroContainerContentStyled
} from './styles'
import { InfoBlock } from '../../molecules/InfoBlock/InfoBlock'
import FigureWrapStyled from '../../atoms/Figure/FigureWrapStyled'
import { SquareStyled } from '../../atoms/Figure/SquareStyled'
import CircleStyled from '../../atoms/Figure/CircleStyled'
import backgroundImg from '../../../assets/images/hero-phone-img.png'

const Hero = props => (
  <HeroStyled secondary>
    <HeroMaskStyled>
      <HeroMaskContentStyled bgImg={backgroundImg}>
        <FigureWrapStyled topPosition="0%" leftPosition="90%" animSpeed="10s">
          <CircleStyled />
        </FigureWrapStyled>
        <FigureWrapStyled topPosition="10%" leftPosition="80%" animSpeed="12s">
          <SquareStyled />
        </FigureWrapStyled>
        <FigureWrapStyled topPosition="15%" leftPosition="90%" animSpeed="8s">
          <SquareStyled blue />
        </FigureWrapStyled>
        <FigureWrapStyled topPosition="70%" leftPosition="5%" animSpeed="10s">
          <CircleStyled big />
        </FigureWrapStyled>
      </HeroMaskContentStyled>
    </HeroMaskStyled>
    <HeroContainerStyled>
      <HeroContainerInnerStyled>
        <HeroContainerContentStyled>
          <InfoBlock
            title={props.title}
            desc={props.desc}
            firstButton={props.firstButton}
            secondButton={props.secondButton}
          />
        </HeroContainerContentStyled>
      </HeroContainerInnerStyled>
    </HeroContainerStyled>
  </HeroStyled>
)

export default Hero
