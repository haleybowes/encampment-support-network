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
	siteMetadata: {
		title: `ESN Toronto`,
		description: `The Encampment Support Network is creating community, support and advocacy for our neighbours in encampments`,
		author: `@haleybowes`,
		siteUrl: `https://www.encampmentsupportnetwork.com/`,
	},
	plugins: [
		`gatsby-plugin-sitemap`,
		{
			resolve: `gatsby-plugin-styled-components`,
		},
		{
			resolve: `gatsby-source-contentful`,
			options: {
				spaceId: '3iqo0at97vma',
				accessToken: 'BCLs74EGS_UY3Xo8zPVphP4wZkXQBKHeT_bErEFmBiA',
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
	],
};
