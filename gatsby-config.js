module.exports = {
	siteMetadata: {
		title: `site`,
		siteUrl: `https://www.yourdomain.tld`,
	},
	plugins: [
		`gatsby-plugin-styled-components`,
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
