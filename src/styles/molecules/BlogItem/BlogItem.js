import React, { Component } from 'react'
import { StaticQuery, graphql } from 'gatsby'
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
import { GridListItem } from '../../Styles'
import { Link } from 'gatsby'

const BlogItem = () => (
  <StaticQuery
    query={graphql`
      query {
        post {
          posts {
            id
            title
            description
            category
            date
            thumb
          }
        }
      }
    `}
    render={({ post: { posts } }) => (
      <>
        {posts.map(post => (
          <GridListItem>
            <BlogItemStyled>
              <BlogItemMediaStyled>
                <img src={post.thumb} />
              </BlogItemMediaStyled>
              <BlogItemContentStyled>
                <BlogItemDateStyled>
                  <Paragraph p3>{post.date}</Paragraph>
                </BlogItemDateStyled>
                <BlogItemTitleStyled>
                  <Heading h4>{post.title}</Heading>
                </BlogItemTitleStyled>
                <BlogItemDescStyled>
                  <Paragraph p3>{post.description}</Paragraph>
                </BlogItemDescStyled>
              </BlogItemContentStyled>
              <BlogItemActionStyled to="/">Read more</BlogItemActionStyled>
            </BlogItemStyled>
          </GridListItem>
        ))}
      </>
    )}
  />
)

export default BlogItem
