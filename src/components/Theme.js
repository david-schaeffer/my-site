import React from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { Normalize } from 'styled-normalize';

const darkTheme = {
	color: {
		bg: '1f1f1f',
		bg_2: '303030',
		text: 'ffffff',
		text_2: 'cccccc',
		nav_div: '1f1f1f',
		accent: '66ccff',
	},
	// font: {

	// }
};

const lightTheme = {
	color: {
		bg: 'ffffff',
		bg_2: 'dbdbdb',
		text: '1f1f1f',
		text_2: '333333',
		nav_div: 'b3b3b3',
		accent: '0088cc',
	},
	// font: {

	// }
};

const GlobalStyles = createGlobalStyle`
  body {
    margin: none;
  }
`;

export default function Theme() {
	return (
		<ThemeProvider theme={darkTheme}>
			<GlobalStyles />
			<Normalize />
			{children}
		</ThemeProvider>
	);
}
