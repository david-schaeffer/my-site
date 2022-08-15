import React from 'react';
import Sidebar from './Sidebar';
import styled from 'styled-components';

const LayoutStyles = styled.div`
	min-height: 100vh;
	overflow: hidden;
`;

export default function Layout({ children }) {
	return (
		<LayoutStyles>
			<Sidebar />
			<main>{children}</main>
		</LayoutStyles>
	);
}
