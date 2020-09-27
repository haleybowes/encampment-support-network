/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: `gatsby-plugin-styled-components`,
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `3iqo0at97vma`,
        accessToken: `98GqtRMwsFYoRgknuRUablZq1k6ytK9cs2Va-CQN0M0`,
      },
    },
  ],
}
