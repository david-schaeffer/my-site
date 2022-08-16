import React from 'react';
import Sidebar from './Sidebar';
import styled from 'styled-components';

const LayoutStyles = styled.div`
	min-height: 100vh;
	overflow: hidden;
	background-color: var(--bg);
`;

export default function Layout(props) {
	console.log(props);

	return (
		<LayoutStyles>
			<Sidebar />
			<main>{props.children}</main>
		</LayoutStyles>
	);
}
