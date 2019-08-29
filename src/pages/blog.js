import React from 'react'
import Layout from '../layout/Layout'
import Hero from '../styles/organisms/Hero/Hero'
import BlogList from '../styles/organisms/BlogList/BlogList'
import NewsletterSection from '../styles/organisms/NewsletterSection/NewsletterSection'
import Contact from '../styles/organisms/Contact/Contact'

class BlogPage extends React.Component {
  render() {
    return (
      <Layout>
        <Hero
          title="Blog"
          desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud Lorem ipsum dolor sit amet."
          firstButton="Lorem"
          secondButton="Ipsum"
        />
        <BlogList />
        <NewsletterSection />
        <Contact />
      </Layout>
    )
  }
}

export default BlogPage
