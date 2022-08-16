import React from 'react';
import styled, { useTheme } from 'styled-components';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faCircleHalfStroke } from '@fortawesome/free-solid-svg-icons';

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

const NavBottom = styled.div`
	display: grid;
	grid-template-columns: 3fr 2fr;
	align-items: center;
	justify-content: center;
	width: 80%;
	margin: auto;
`;

const SocialLinks = styled.div`
	border-right: 3px solid ${({ theme }) => theme.color.nav_div};
	display: flex;
	align-items: center;
	justify-content: right;

	svg {
		width: 20px;
		height: 20px;
		margin-right: 0.6rem;
		color: ${({ theme }) => theme.color.text_2};
		transition: all 0.3s ease;
	}

	svg:hover {
		color: ${({ theme }) => theme.color.accent};
	}
`;

const DarkModeToggle = styled.div`
	svg {
		width: 20px;
		height: 20px;
		color: ${({ theme }) => theme.color.text_2};
		margin-left: 0.6rem;
		transition: all 0.3s ease;
	}

	svg:hover {
		color: ${({ theme }) => theme.color.accent};
		cursor: pointer;
	}
`;

export default function Sidebar() {
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
				<SocialLinks>
					<a
						href='https://www.linkedin.com/in/d-schaeffer/'
						target='_blank'
						rel='noreferrer'
					>
						<FontAwesomeIcon icon={faLinkedinIn} />
					</a>
					<a
						href='https://github.com/dbschaeffer29/'
						target='_blank'
						rel='noreferrer'
					>
						<FontAwesomeIcon icon={faGithub} />
					</a>
				</SocialLinks>
				<DarkModeToggle>
					<FontAwesomeIcon icon={faCircleHalfStroke} />
				</DarkModeToggle>
			</NavBottom>
		</SidebarWrapper>
	);
}
