import React from 'react';
import Sidebar from './Sidebar';
import Cursor from './Cursor';
import Footer from './Footer';
import '../assets/main.css';

const isMobile = () => {
	const ua = navigator.userAgent;
	return /Android|Mobi/i.test(ua);
};

export default function Layout({ children }) {
	return (
		<>
			<Sidebar />
			<main>{children}</main>
			<Footer />
			{typeof navigator !== 'undefined' && isMobile() ? '' : <Cursor />}
		</>
	);
}
