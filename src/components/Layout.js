import React from 'react';
import Sidebar from './Sidebar';
import styled from 'styled-components';

const LayoutStyles = styled.div`
	min-height: 100vh;
	overflow: hidden;
	margin-left: 240px;
	@media screen and (max-width: 1024px) {
		margin-left: 30px;
	}
`;

export default function Layout({ children }) {
	return (
		<LayoutStyles>
			<Sidebar />
			<main>{children}</main>
		</LayoutStyles>
	);
}
