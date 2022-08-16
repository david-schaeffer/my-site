import React from 'react';
import Sidebar from './Sidebar';
import styled from 'styled-components';

const LayoutStyles = styled.div`
	min-height: 100vh;
	overflow: hidden;
	background-color: var(--bg);
	transition: all 0.3s ease;
`;

export default function Layout(props) {
	return (
		<LayoutStyles>
			<Sidebar />
			<main>{props.children}</main>
		</LayoutStyles>
	);
}
