import React from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { Normalize } from 'styled-normalize';

const dark = {
	id: 'dark',
	color: {
		bg: '#1f1f1f',
		bg_2: '#303030',
		text: '#ffffff',
		text_2: '#cccccc',
		nav_div: '#1f1f1f',
		accent: '#66ccff',
	},
	logo: '../images/logo.png',
	font: {
		display: 'Russo One',
		copy: 'Ubuntu Mono',
	},
};

const light = {
	id: 'light',
	color: {
		bg: '#ffffff',
		bg_2: '#dbdbdb',
		text: '#1f1f1f',
		text_2: '#333333',
		nav_div: '#b3b3b3',
		accent: '#0088cc',
	},
	logo: '../images/logo2.png',
	font: {
		display: 'Russo One',
		copy: 'Ubuntu Mono',
	},
};

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    background-color: ${({ theme }) => theme.color.bg};
    font-family: ${({ theme }) => theme.font.copy};
  }
`;

export default function Theme({ children }) {
	return (
		<ThemeProvider theme={dark}>
			<GlobalStyles />
			<Normalize />
			{children}
		</ThemeProvider>
	);
}
