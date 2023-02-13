/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `David Le Portfolio`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    'gatsby-plugin-sass',
    {
      resolve: '@mkitio/gatsby-theme-password-protect',
      options: {
        password: 'redvelvet',
      },
    },
  ],
};
