import React, { useState } from 'react';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faCircleHalfStroke } from '@fortawesome/free-solid-svg-icons';
import useDarkMode from 'use-dark-mode';

function Logo() {
	return (
		<Link to='/'>
			<h1 className='sidebar--logo_initials'>DS</h1>
			<div className='sidebar--logo_underline'></div>
		</Link>
	);
}

const DarkModeToggle = ({ className }) => {
	const darkMode = useDarkMode(true);

	return (
		<div className={className}>
			<FontAwesomeIcon
				className='sidebar--darkmode_toggle'
				icon={faCircleHalfStroke}
				onClick={darkMode.toggle}
			/>
		</div>
	);
};

export default function Sidebar() {
	const [showMenu, setShowMenu] = useState(false);

	function toggleMenu() {
		window.innerWidth < 1024 && setShowMenu(!showMenu);
	}

	console.log(showMenu);
	if (showMenu) {
		document.body.classList.add('lock-scroll');
	} else {
		document.body.classList.remove('lock-scroll');
	}

	return (
		<>
			<div className='sidebar--menu_btn' onClick={toggleMenu}>
				<div
					className={`sidebar--menu_bar top${showMenu ? ' top--shown' : ''}`}
				></div>
				<div
					className={`sidebar--menu_bar middle${
						showMenu ? ' middle--shown' : ''
					}`}
				></div>
				<div
					className={`sidebar--menu_bar bottom${
						showMenu ? ' bottom--shown' : ''
					}`}
				></div>
			</div>
			<nav
				className={`sidebar--wrapper${
					showMenu ? ' sidebar--wrapper_shown' : ''
				}`}
			>
				<div className='sidebar--logo_wrapper' onClick={toggleMenu}>
					<Logo />
				</div>
				<div className='sidebar--nav_links'>
					<Link className='sidebar--nav_link' to='/#about' onClick={toggleMenu}>
						about
					</Link>
					<Link
						className='sidebar--nav_link'
						to='/#experience'
						onClick={toggleMenu}
					>
						experience
					</Link>
					<Link
						className='sidebar--nav_link'
						to='/#contact'
						onClick={toggleMenu}
					>
						contact
					</Link>
					<a className='sidebar--nav_link' href='#'>
						resume
					</a>
					{/* MAKE THIS DOWNLOADABLE RESUME OR VIEW IN BROWSER? */}
				</div>
				<div className='sidebar--nav_bottom'>
					<div className='sidebar--social_links'>
						<a
							href='https://www.linkedin.com/in/d-schaeffer/'
							target='_blank'
							rel='noreferrer'
						>
							<FontAwesomeIcon
								className='sidebar--social_link'
								icon={faLinkedinIn}
							/>
						</a>
						<a
							href='https://github.com/dbschaeffer29/'
							target='_blank'
							rel='noreferrer'
						>
							<FontAwesomeIcon
								className='sidebar--social_link'
								icon={faGithub}
							/>
						</a>
					</div>
					<div className='hover'>
						<DarkModeToggle />
					</div>
				</div>
			</nav>
		</>
	);
}
