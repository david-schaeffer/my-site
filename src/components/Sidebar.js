import React from 'react';
import styled from 'styled-components';
import { useTheme } from 'styled-components';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

const SidebarWrapper = styled.nav`
	width: 180px;
	height: 100vh;
	position: fixed;
	top: 0;
	left: 0;
	background-color: ${({ theme }) => theme.color.bg_2};
	display: grid;
	grid-template-rows: 240px auto 240px;
	transition: all 0.3s ease;
	@media screen and (max-width: 1024px) {
		left: -180px;
	}
`;

const LogoWrapper = styled.div`
	width: 90px;
	margin: 45px auto auto auto;
	display: flex;
	align-items: center;
	justify-content: center;
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
	width: 80%;
	font-size: 1.3rem;
	color: ${({ theme }) => theme.color.text_2};
	text-decoration: none;
	padding: 1rem 0;
	transition: color 0.3s ease;
	border-bottom: 2px solid ${({ theme }) => theme.color.nav_div};

	&:hover {
		color: ${({ theme }) => theme.color.accent};
	}

	&:last-child {
		border: none;
	}
`;

const SocialLinks = styled.div`
	height: 20px;
`;

const DarkModeToggle = styled.div`
	height: 20px;
`;

export default function Sidebar() {
	console.log(useTheme().id);
	return (
		<SidebarWrapper>
			<LogoWrapper>
				<Link to='/'>
					{useTheme().id === 'dark' ? (
						<StaticImage src='../images/logo.png' alt='site logo' />
					) : (
						<StaticImage src='../images/logo2.png' alt='site logo' />
					)}
				</Link>
			</LogoWrapper>
			<NavLinks>
				<NavLink to='/about'>about</NavLink>
				<NavLink to='/experience'>experience</NavLink>
				<NavLink to='/contact'>contact</NavLink>
				<NavLink href='#'>resume</NavLink>
				{/* MAKE THIS DOWNLOADABLE RESUME OR VIEW IN BROWSER? */}
			</NavLinks>
			<NavBottom>
				<SocialLinks>SocialLinks</SocialLinks>
				<DarkModeToggle>ModeToggle</DarkModeToggle>
			</NavBottom>
		</SidebarWrapper>
	);
}
