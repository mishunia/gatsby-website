import React from 'react'
import {
  InnerStyled,
  SectionStyled,
  GridList,
  GridListItem
} from '../../Styles'
import SectionHead from '../../molecules/SectionHead/SectionHead'
import BlogItem from '../../molecules/BlogItem/BlogItem'

const BlogList = () => (
  <SectionStyled>
    <InnerStyled>
      <SectionHead
        sectionHeadTitle="Blog list"
        sectionHeadDesc="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua2"
      />
      <GridList grid4>
        <BlogItem />
      </GridList>
    </InnerStyled>
  </SectionStyled>
)

export default BlogList
