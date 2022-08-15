import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const SidebarWrapper = styled.nav`
	width: 180px;
	height: 100vh;
	position: fixed;
	top: 0;
	left: 0;
	background-color: ${({ theme }) => theme.color.bg_2};
	display: grid;
	grid-template-rows: 240px auto 240px;
	@media screen and (max-width: 1024px) {
		display: none;
	}
`;

const LogoWrapper = styled.div`
	height: auto;
`;

const NavLinks = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const NavBottom = styled.div`
	height: auto;
`;

const NavLink = styled((props) => <Link {...props} />)`
	text-align: center;
	font-size: 1.3rem;
	color: ${({ theme }) => theme.color.text_2};
	text-decoration: none;
	padding: 1rem 0;
	transition: all 0.3s ease-in-out;

	&:hover {
		color: ${({ theme }) => theme.color.accent};
	}
`;

// const DivLine = styled.hr`
// 	margin: 0;
// 	width: 80%;
// `;

const SocialLinks = styled.div`
	height: 20px;
`;

const DarkModeToggle = styled.div`
	height: 20px;
`;

export default function Sidebar() {
	return (
		<SidebarWrapper>
			<LogoWrapper>
				<Link to='/'>LOGO</Link>
			</LogoWrapper>
			<NavLinks>
				<NavLink to='/about'>about</NavLink>
				{/* <DivLine /> */}
				<NavLink to='/experience'>experience</NavLink>
				{/* <DivLine /> */}
				<NavLink to='/contact'>contact</NavLink>
				{/* <DivLine /> */}
				<NavLink href='#'>resume</NavLink>
			</NavLinks>
			<NavBottom>
				<SocialLinks>SocialLinks</SocialLinks>
				<DarkModeToggle>ModeToggle</DarkModeToggle>
			</NavBottom>
		</SidebarWrapper>
	);
}
