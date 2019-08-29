import React from 'react'
import Layout from '../layout/Layout'
import Hero from '../styles/organisms/Hero/Hero'
import Contact from '../styles/organisms/Contact/Contact'
import NewsletterSection from '../styles/organisms/NewsletterSection/NewsletterSection'
import AboutText from '../styles/organisms/AboutText/AboutText'

class AboutPage extends React.Component {
  render() {
    return (
      <Layout>
        <Hero
          title="About page"
          desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud Lorem ipsum dolor sit amet."
          firstButton="Lorem"
          secondButton="Ipsum"
        />
        <AboutText />
        <NewsletterSection />
        <Contact />
      </Layout>
    )
  }
}

export default AboutPage
