/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

require('dotenv').config({
	path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
	/* Your site config here */
	plugins: [
		{
			resolve: `gatsby-plugin-styled-components`,
		},
		{
			resolve: `gatsby-source-contentful`,
			options: {
				spaceId: process.env.CONTENTFUL_SPACE_ID,
				accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
			},
		},
		{
			resolve: 'gatsby-plugin-web-font-loader',
			options: {
				typekit: {
					id: 'qmd0wsw',
				},
			},
		},
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `The Encampment Support Network`,
				short_name: `ESN Toronto`,
				start_url: `/`,
				icon: `src/images/favicon.png`, // This path is relative to the root of the site.
			},
		},
		`gatsby-plugin-robots-txt`,
	],
};
