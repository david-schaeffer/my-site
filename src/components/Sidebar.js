import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faCircleHalfStroke } from '@fortawesome/free-solid-svg-icons';

const MenuButton = styled.div`
	display: none;
	position: fixed;
	top: 2rem;
	left: 2rem;
	height: 35px;
	width: 50px;
	z-index: 3;
	cursor: pointer;

	@media screen and (max-width: 1024px) {
		display: grid;
		grid-template-rows: repeat(3, 1fr);
	}
`;

const TopBar = styled.div`
	height: 5px;
	width: 50px;
	background-color: var(--text);
	transition: all 0.3s ease;

	transform: ${(props) =>
		props.show ? 'rotate(45deg) translate(0px, 16px)' : 'none'};
`;

const MiddleBar = styled.div`
	height: 5px;
	width: 30px;
	background-color: var(--text);
	transition: all 0.3s ease;

	opacity: ${(props) => (props.show ? 0 : '100%')};
`;

const BottomBar = styled.div`
	height: 5px;
	width: ${(props) => (props.show ? '50px' : '40px')};
	background-color: var(--text);
	transition: all 0.3s ease;

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
	width: 90px;
	height: 90px;
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
	font-weight: 800;
	font-size: 4.5rem;
	letter-spacing: -0.2rem;
	margin: 0;
`;

const Underline = styled.div`
	margin-top: -0.3rem;
	height: 0.8rem;
	width: 100%;
	background-color: var(--accent);
`;

const NavLinks = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const NavLink = styled((props) => <Link {...props} />)`
	text-align: center;
	width: 8rem;
	font-family: var(--copy);
	font-size: 1.3rem;
	color: var(--text_2);
	text-decoration: none;
	padding: 1rem 0;
	border-bottom: 2px solid var(--nav_div);
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
						<FontAwesomeIcon icon={faCircleHalfStroke} />
					</DarkModeToggle>
				</NavBottom>
			</SidebarWrapper>
		</>
	);
}
