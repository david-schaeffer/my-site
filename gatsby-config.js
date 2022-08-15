module.exports = {
	siteMetadata: {
		title: `site`,
		siteUrl: `https://www.yourdomain.tld`,
	},
	plugins: [
		'gatsby-plugin-styled-components',
		{
			resolve: `gatsby-plugin-google-fonts`,
			options: {
				fonts: [
					`Aldrich`,
					`Russo+One`,
					`Dhurjati`,
					`Ubuntu+Mono`,
					`Space+Mono`,
				],
				display: 'swap',
			},
		},
	],
};
