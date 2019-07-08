module.exports = {
  siteMetadata: {
    title: `The Leading Commercial Real Estate Consultancy Firm in the Philippines.`,
    description: `The Leading Commercial Real Estate Consultancy Firm in the Philippines.`,
    author: `Innotech Department`,
    keywords:
      'Available Spaces for Lease in Davao City, Available Space for Rent in Davao. Downtown Space for Lease/Rent, Office Space for Lease/Rent in Davao City, Real Estate in Davao City, Available for Rent in Davao City, Commercial Space in Davao City, Property Developments in Davao, Real Estate Davao City, Land Values in Davao, Urban Davao, Spaces in Davao City, For rent Mindanao, Davao City Expansion, Offices in Davao City, Commercial Lots in Davao City, Commercial Lot for Lease in Davao City, Lots for Lease in Davao City',
  },
  plugins: [
    {
      resolve: `gatsby-plugin-styled-components`,
    },
    {
      resolve: `gatsby-plugin-antd`,
      options: {
        style: true,
      },
    },
    {
      resolve: `gatsby-plugin-less`,
      options: {
        javascriptEnabled: true,
        modifyVars: {
          'primary-color': '#00264c',
          'border-radius-base': '0px',
          'font-size-base': '16px',
        },
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: './src/images/logo.png',

        // WebApp Manifest Configuration
        appName:
          'PRIME Philippines | The Leading Commercial Real Estate Consultancy Firm in the Philippines.', // Inferred with your package.json
        appDescription:
          'The Leading Commercial Real Estate Consultancy Firm in the Philippines.',
        developerName: 'Innotech Department',
        lang: 'en-US',
        background: '#fff',
        theme_color: '#003366',
        start_url: '/',

        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: true,
          opengraph: true,
          twitter: false,
          yandex: false,
          windows: false,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Lato', 'Open Sans', 'Droid Sans', 'Droid Serif'],
        },
      },
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/data/`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
