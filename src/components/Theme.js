import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { Normalize } from 'styled-normalize';

const GlobalStyles = createGlobalStyle`
  * {
		margin: 0; 
		box-sizing: border-box;
		@media screen and (min-width: 1024px) {
			/* cursor: none; */
		}
	}

	:root {
		--copy: Ubuntu Mono;
		--display: Russo One;
	}
	
	body.light-mode {
		--bg: #ffffff;
		--bg_2: #dbdbdb;
		--text: #1f1f1f;
		--text_2: #333333;
		--nav_div: #b3b3b3;
		--accent: #0088cc;
  }

	body.dark-mode {
		--bg: #1f1f1f;
		--bg_2: #303030;
		--text: #ffffff;
		--text_2: #cccccc;
		--nav_div: #1f1f1f;
		--accent: #66ccff;
	}
`;

export default function Theme({ children }) {
	return (
		<>
			<GlobalStyles />
			<Normalize />
			{children}
		</>
	);
}
