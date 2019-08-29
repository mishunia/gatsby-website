import styled from 'styled-components'

const NewsletterSectionStyled = styled.div`
  position: relative;
  display: flex;
`

const NewsletterSectionMaskStyled = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  opacity: 0.4;
`

const NewsletterSectionFiguresStyled = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
`

const NewsletterSectionContainerStyled = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: ${({ theme }) => theme.gutter.xxl};
  background-color: ${({ theme }) => theme.colors.dark2};
`

const NewsletterSectionHeadStyled = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: ${({ theme }) => theme.gutter.xl};
  color: ${({ theme }) => theme.colors.white};
`

const NewsletterSectionContentStyled = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  z-index: 2;
`

export {
  NewsletterSectionStyled,
  NewsletterSectionMaskStyled,
  NewsletterSectionFiguresStyled,
  NewsletterSectionContainerStyled,
  NewsletterSectionHeadStyled,
  NewsletterSectionContentStyled
}
