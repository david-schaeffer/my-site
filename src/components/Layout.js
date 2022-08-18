import React from 'react';
import Sidebar from './Sidebar';
import Cursor from './Cursor';
import '../assets/main.css';

export default function Layout({ children }) {
	return (
		<>
			<Sidebar />
			<main>{children}</main>
			<Cursor />
		</>
	);
}
