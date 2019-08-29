import React from 'react'
import Layout from '../layout/Layout'
import Hero from '../styles/organisms/Hero/Hero'
import NewsletterSection from '../styles/organisms/NewsletterSection/NewsletterSection'
import GetApp from '../styles/organisms/GetApp/GetApp'
import Features from '../styles/organisms/Features/Features'
import PricingPlan from '../styles/organisms/PricingPlan/PricingPlan'
import About from '../styles/organisms/About/About'
import Contact from '../styles/organisms/Contact/Contact'
import Accordionalt from '../styles/molecules/Accordion/Accordionalt'

class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <Hero
          title="It’s All About Promoting Your Business"
          desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud"
          firstButton="Download app"
          secondButton="Discover More"
        />
        <About
          sectionHeadTitle="About"
          sectionHeadDesc="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
          desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud"
          button="Download app"
        />
        <GetApp />
        <Features />
        <PricingPlan />
        <NewsletterSection />
        <Contact />
        {/* <Accordionalt /> */}
      </Layout>
    )
  }
}

export default IndexPage
