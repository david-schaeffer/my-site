import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faCircleHalfStroke } from '@fortawesome/free-solid-svg-icons';
import ThemeToggler from 'gatsby-plugin-dark-mode/ThemeToggler';

const SidebarWrapper = styled.nav`
	width: 180px;
	height: 100vh;
	position: fixed;
	top: 0;
	left: 0;
	background-color: var(--bg_2);
	display: grid;
	grid-template-rows: repeat(3, 1fr);
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
	font-family: var(--copy);
	font-size: 1.3rem;
	color: var(--text_2);
	text-decoration: none;
	padding: 1rem 0;
	border-bottom: 2px solid var(--nav_div);

	&:hover {
		color: var(--accent);
	}

	&:last-child {
		border: none;
	}
`;

const NavBottom = styled.div`
	box-sizing: border-box;
	display: grid;
	grid-template-columns: 3fr 2fr;
	width: 90px;
	margin: auto;
`;

const SocialLinks = styled.div`
	border-right: 2px solid var(--nav_div);
	display: flex;
	align-items: center;
	justify-content: right;

	svg {
		width: 20px;
		height: 20px;
		margin-right: 0.6rem;
		color: var(--text_2);
	}

	svg:hover {
		color: var(--accent);
	}
`;

const DarkModeToggle = styled.div`
	svg {
		width: 20px;
		height: 20px;
		color: var(--text_2);
		margin-left: 0.6rem;
	}

	svg:hover {
		color: var(--accent);
		cursor: pointer;
	}
`;

export default function Sidebar() {
	return (
		<SidebarWrapper>
			<LogoWrapper>
				{/* <Link to='/'>
					{useTheme().id === 'dark' ? (
						<StaticImage src='../images/logo.png' alt='site logo' />
					) : (
						<StaticImage src='../images/logo2.png' alt='site logo' />
					)}
				</Link> */}
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
					<ThemeToggler>
						{({ theme, toggleTheme }) => (
							<FontAwesomeIcon
								icon={faCircleHalfStroke}
								onClick={() =>
									theme === 'dark' ? toggleTheme('light') : toggleTheme('dark')
								}
							/>
						)}
					</ThemeToggler>
				</DarkModeToggle>
			</NavBottom>
		</SidebarWrapper>
	);
}
