module.exports = {
	siteMetadata: {
		title: `David Schaeffer`,
		description: `A personal portfolio.`,
		siteUrl: `https://www.dschaeffer.com`,
	},
	plugins: [
		`gatsby-plugin-styled-components`,
		`gatsby-plugin-dark-mode`,
		`gatsby-plugin-netlify`,
		// {
		// 	resolve: `gatsby-plugin-google-fonts`,
		// 	options: {
		// 		fonts: [`Russo+One`, `Ubuntu+Mono`],
		// 		display: 'swap',
		// 	},
		// },
		{
			resolve: `gatsby-plugin-prefetch-google-fonts`,
			options: {
				fonts: [
					{
						family: `Russo One`,
					},
					{
						family: `Ubuntu Mono`,
						variants: [`400`, `700`],
					},
				],
			},
		},
	],
};
