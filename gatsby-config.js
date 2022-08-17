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
		`gatsby-plugin-dark-mode`,
		{
			resolve: `gatsby-plugin-google-fonts`,
			options: {
				fonts: [`Russo+One`, `Ubuntu+Mono`],
				display: 'swap',
			},
		},
	],
};
