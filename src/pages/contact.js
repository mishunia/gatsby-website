import React from 'react'
import Layout from '../layout/Layout'
import Hero from '../styles/organisms/Hero/Hero'
import About from '../styles/organisms/About/About'
import ContactMap from '../styles/organisms/ContactMap/ContactMap'
import Contact from '../styles/organisms/Contact/Contact'

class ContactPage extends React.Component {
  render() {
    return (
      <Layout>
        <Hero
          title="Contact page"
          desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud Lorem ipsum dolor sit amet."
          firstButton="Lorem"
          secondButton="Ipsum"
        />
        <About
          sectionHeadTitle="Contact us"
          sectionHeadDesc="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
          desc=" Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Address Lorem ipsum 128 / 23. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Address Lorem ipsum 128 / 23. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          button="Call 999 999 999"
        />
        <ContactMap />
        <Contact />
      </Layout>
    )
  }
}

export default ContactPage
