require('dotenv').config({
	path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
	siteMetadata: {
		title: `David Schaeffer: Portfolio`,
		description: `A personal portfolio.`,
		author: `@dschaeffer`,
		siteUrl: `https://www.dschaeffer.com`,
	},
	plugins: [
		`gatsby-plugin-netlify`,
		`gatsby-plugin-use-dark-mode`,
		`gatsby-plugin-image`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-source-contentful`,
			options: {
				spaceId: `9rfs6i5wbcz2`,
				accessToken: process.env.CONTENTFUL_API_KEY,
			},
		},
		{
			resolve: `gatsby-plugin-google-fonts`,
			options: {
				fonts: [
					`Russo+One`,
					`Ubuntu+Mono`,
					`IBM+Plex+Mono:400,400i`,
					`IBM+Plex+Sans:100,100i,400,400i,700,700i`,
					`IBM+Plex+Sans+Condensed:400,400i`,
					`IBM+Plex+Serif:400,400i`,
				],
				display: 'swap',
			},
		},
	],
};
