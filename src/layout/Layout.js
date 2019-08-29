import React from 'react'
import { ThemeProvider } from 'styled-components'
import { Global, Theme } from '../styles/Styles'
import Header from '../styles/organisms/Header/Header'
import Footer from '../styles/organisms/Footer/Footer'

const Layout = ({ children }) => (
  <React.Fragment>
    <ThemeProvider theme={Theme}>
      <>
        <Global />
        <Header />
        <main>{children}</main>
        <Footer />
      </>
    </ThemeProvider>
  </React.Fragment>
)

export default Layout
