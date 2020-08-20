const config = require('./src/constants/site-config');

module.exports = {
  siteMetadata: {
    title: config.siteTitle,
    description: config.siteDescription,
    siteUrl: config.siteUrl,
  },
  plugins: [
    `gatsby-plugin-preact`,
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-lodash',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-purgecss',
      options: {
        whitelist: ['header', 'mobilemenu', 'nav-icon1'],
        whitelistPatternsChildren: [
          /^ti-/,
          /^fa-/,
          /^ttm-btn/,
          /^ttm-icon/,
          /^ttm-tabs/,
          /^ttm-tab/,
          /^c-timeline/,
          /^flaticon/,
          /^ttm-/,
          /^hamburger/,
          /^navbar/,
        ],
        purgeOnly: [
          '/main.scss',
          '/shortcode.scss',
          '/bootstrap.min.css',
          '/animate.css',
          '/slick.css',
          '/fontawesome.min.css',
        ],
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Poppins`,
            variants: ['400', '600', '700'],
          },
          {
            family: `Playfair Display`,
            variants: [`400`, `700`],
          },
        ],
      },
    },
    `gatsby-plugin-preload-fonts`,
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-catch-links', // This plugin intercepts all local links that have not been created in React using gatsby-link, and replaces their behavior with that of the gatsby-link navigate.
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
    },
    {
      resolve: '@prismicio/gatsby-source-prismic-graphql',
      options: {
        repositoryName: 'esesrl', // required
        previews: false, // optional, default: true
      },
    },
    `gatsby-plugin-netlify`,
    // {
    //   resolve: 'gatsby-plugin-webpack-bundle-analyser-v2',
    //   options: {},
    // },
  ],
};
