module.exports = {
	siteMetadata: {
		title: `site`,
		siteUrl: `https://www.yourdomain.tld`,
	},
	plugins: [
		{
			resolve: `gatsby-plugin-styled-components`,
			options: {
				ssr: true,
				// displayName: false,
				// minify: false
			},
		},
		`gatsby-plugin-image`,
		`gatsby-plugin-sharp`,
		`gatsby-transformer-sharp`,
		`gatsby-plugin-dark-mode`,
		`gatsby-plugin-netlify`,
		{
			resolve: `gatsby-plugin-google-fonts`,
			options: {
				fonts: [`Russo+One`, `Ubuntu+Mono`],
				display: 'swap',
			},
		},
	],
};
