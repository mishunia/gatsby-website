import React from 'react'
import {
  NewsletterSectionStyled,
  NewsletterSectionMaskStyled,
  NewsletterSectionFiguresStyled,
  NewsletterSectionContainerStyled,
  NewsletterSectionHeadStyled,
  NewsletterSectionContentStyled
} from './styles'
import SectionHead from '../../molecules/SectionHead/SectionHead'
import Newsletter from '../../molecules/Newsletter/Newsletter'
import FigureWrapStyled from '../../atoms/Figure/FigureWrapStyled'
import { SquareStyled } from '../../atoms/Figure/SquareStyled'
import CircleStyled from '../../atoms/Figure/CircleStyled'

const NewsletterSection = () => (
  <NewsletterSectionStyled>
    <NewsletterSectionMaskStyled>
      <NewsletterSectionFiguresStyled>
        <FigureWrapStyled topPosition="20%" leftPosition="40%" animSpeed="10s">
          <SquareStyled />
        </FigureWrapStyled>
        <FigureWrapStyled topPosition="10%" leftPosition="90%" animSpeed="10s">
          <CircleStyled />
        </FigureWrapStyled>
        <FigureWrapStyled topPosition="70%" leftPosition="50%" animSpeed="15s">
          <CircleStyled medium />
        </FigureWrapStyled>
        <FigureWrapStyled topPosition="50%" leftPosition="10%" animSpeed="10s">
          <CircleStyled />
        </FigureWrapStyled>
        <FigureWrapStyled topPosition="10%" leftPosition="10%" animSpeed="12s">
          <SquareStyled />
        </FigureWrapStyled>
        <FigureWrapStyled topPosition="60%" leftPosition="90%" animSpeed="10s">
          <SquareStyled />
        </FigureWrapStyled>
      </NewsletterSectionFiguresStyled>
    </NewsletterSectionMaskStyled>
    <NewsletterSectionContainerStyled>
      <NewsletterSectionHeadStyled>
        <SectionHead
          sectionHeadTitle="Newsletter"
          sectionHeadDesc="Lorem ipsum lorem ipsum lorem ipsum lorem ipsum? Lorem ipsum lorem ipsum lorem ipsum lorem ipsum? Lorem ipsum lorem ipsum lorem ipsum lorem ipsum?"
        />
      </NewsletterSectionHeadStyled>
      <NewsletterSectionContentStyled>
        <Newsletter />
      </NewsletterSectionContentStyled>
    </NewsletterSectionContainerStyled>
  </NewsletterSectionStyled>
)

export default NewsletterSection
