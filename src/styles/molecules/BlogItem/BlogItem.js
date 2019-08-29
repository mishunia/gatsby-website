import React, { Component } from 'react'
import {
  BlogItemStyled,
  BlogItemMediaStyled,
  BlogItemContentStyled,
  BlogItemDateStyled,
  BlogItemTitleStyled,
  BlogItemDescStyled,
  BlogItemActionStyled
} from './styles'
import Heading from '../../atoms/Heading/Heading'
import Paragraph from '../../atoms/Paragraph/Paragraph'
import { Link } from 'gatsby'

const BlogItem = () => {
  return (
    <BlogItemStyled>
      <BlogItemMediaStyled>
        <img src="http://media.giphy.com/media/HqcbuVr2aUtMc/giphy.gif" />
      </BlogItemMediaStyled>
      <BlogItemContentStyled>
        <BlogItemDateStyled>
          <Paragraph p3>26.06.2019</Paragraph>
        </BlogItemDateStyled>
        <BlogItemTitleStyled>
          <Heading h4>Blog post title</Heading>
        </BlogItemTitleStyled>
        <BlogItemDescStyled>
          <Paragraph p3>
            Desc of blog post. Desc of blog post. Desc of blog post. Desc of
            blog post. Desc of blog post.
          </Paragraph>
        </BlogItemDescStyled>
      </BlogItemContentStyled>
      <BlogItemActionStyled to="/">Read more</BlogItemActionStyled>
    </BlogItemStyled>
  )
}

export default BlogItem
