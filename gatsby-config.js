/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: { title: "trybes news and magazine" },
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `bzzofa8aaoh9`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: `NpHbkM6bAKyhtDMc8Y4heT3X70LB2wkaFHRzB_CxUcs`,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
};
