module.exports = {
  siteMetadata: {
    title: 'Gatsby Storybook Starter'
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-favicon',
      options: {
        logo: './src/assets/logos/icon.png',
        injectHTML: true
        // WebApp Manifest Configuration
      }
    },
    {
      resolve: 'gatsby-source-graphql',
      options: {
        typeName: 'POST',
        fieldName: 'post',
        url:
          'https://api-euwest.graphcms.com/v1/cjzwkqzyj1w1v01c282fd7loa/master'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/`,
        name: 'src'
      }
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-offline',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-styled-components'
  ]
}
