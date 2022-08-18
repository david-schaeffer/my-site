import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faCircleHalfStroke } from '@fortawesome/free-solid-svg-icons';
import ThemeToggler from 'gatsby-plugin-dark-mode/ThemeToggler';

const MenuButton = styled.div`
	position: fixed;
	top: 2rem;
	left: 2rem;
	z-index: 1;
	cursor: pointer;

	@media screen and (min-width: 1024px) {
		display: none;
	}

	div {
		height: 5px;
		margin-bottom: 6px;
		background-color: var(--text);
		transition: all 0.3s ease;
	}
`;

const TopBar = styled.div`
	width: 50px;

	transform: ${(props) =>
		props.show ? 'rotate(45deg) translate(0px, 16px)' : 'none'};
`;

const MiddleBar = styled.div`
	width: 30px;

	opacity: ${(props) => (props.show ? 0 : '100%')};
`;

const BottomBar = styled.div`
	width: ${(props) => (props.show ? '50px' : '40px')};

	transform: ${(props) =>
		props.show ? 'rotate(-45deg) translate(0px, -16px)' : 'none'};
`;

const SidebarWrapper = styled.nav`
	width: 180px;
	height: 100vh;
	position: fixed;
	top: 0;
	left: 0;
	background-color: var(--bg_2);
	display: grid;
	grid-template-rows: repeat(3, 1fr);
	align-items: center;
	justify-items: center;
	transition: all 0.3s ease;

	@media screen and (max-width: 1024px) {
		width: 100vw;
		left: ${(props) => (props.show ? 0 : '-100vw')};
	}
`;

const LogoWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	a {
		text-decoration: none;
	}
`;

const Initials = styled.h1`
	color: var(--text);
	font-family: var(--display);
	font-size: 4.5rem;
	letter-spacing: -0.2rem;
	margin: 0;
`;

const Underline = styled.div`
	background-color: var(--accent);
	margin-top: -0.3rem;
	height: 0.8rem;
`;

const NavLinks = styled.div`
	display: flex;
	flex-direction: column;
`;

const NavLink = styled((props) => <Link {...props} />)`
	border-bottom: 2px solid var(--nav_div);
	color: var(--text_2);
	font-family: var(--copy);
	text-align: center;
	font-size: 1.3rem;
	width: 8rem;
	text-decoration: none;
	padding: 1rem 0;
	transition: all 0.3s ease;

	@media screen and (max-width: 1024px) {
		width: 10rem;
	}

	&:hover {
		color: var(--accent);
	}

	&:last-child {
		border: none;
	}
`;

const NavBottom = styled.div`
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
		transition: all 0.3s ease;
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
		transition: all 0.3s ease;
		cursor: pointer;
	}

	svg:hover {
		color: var(--accent);
	}
`;

function Logo() {
	return (
		<Link to='/'>
			<Initials>DS</Initials>
			<Underline />
		</Link>
	);
}

export default function Sidebar() {
	const [showMenu, setShowMenu] = useState(false);

	function toggleMenu() {
		setShowMenu(!showMenu);
	}

	return (
		<>
			<MenuButton onClick={toggleMenu}>
				<TopBar show={showMenu} />
				<MiddleBar show={showMenu} />
				<BottomBar show={showMenu} />
			</MenuButton>
			<SidebarWrapper show={showMenu}>
				<LogoWrapper onClick={toggleMenu}>
					<Logo />
				</LogoWrapper>
				<NavLinks>
					<NavLink to='/about' onClick={toggleMenu}>
						about
					</NavLink>
					<NavLink to='/experience' onClick={toggleMenu}>
						experience
					</NavLink>
					<NavLink to='/contact' onClick={toggleMenu}>
						contact
					</NavLink>
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
					<DarkModeToggle id='darkModeToggle'>
						<ThemeToggler>
							{({ theme, toggleTheme }) => (
								<FontAwesomeIcon
									icon={faCircleHalfStroke}
									onClick={() =>
										theme === 'dark'
											? toggleTheme('light')
											: toggleTheme('dark')
									}
								/>
							)}
						</ThemeToggler>
					</DarkModeToggle>
				</NavBottom>
			</SidebarWrapper>
		</>
	);
}
