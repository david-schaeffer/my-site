import React, { useEffect, useState } from 'react';

export default function Cursor() {
	const [pos, setPos] = useState({ x: 0, y: 0 });
	const [hidden, setHidden] = useState(false);
	const [clicked, setClicked] = useState(false);
	const [linkHover, setLinkHover] = useState(false);

	useEffect(() => {
		addEventListeners();
		handleLinkHoverEvents();
		return () => removeEventListeners();
	});

	const handleLinkHoverEvents = () => {
		document.querySelectorAll('a').forEach((el) => {
			el.addEventListener('mouseover', () => setLinkHover(true));
			el.addEventListener('mouseout', () => setLinkHover(false));
		});

		document.querySelectorAll('.hover').forEach((el) => {
			el.addEventListener('mouseover', () => setLinkHover(true));
			el.addEventListener('mouseout', () => setLinkHover(false));
		});
	};

	const addEventListeners = () => {
		document.addEventListener('mousemove', onMouseMove);
		document.addEventListener('mouseenter', onMouseEnter);
		document.addEventListener('mouseleave', onMouseLeave);
		document.addEventListener('mousedown', onMouseDown);
		document.addEventListener('mouseup', onMouseUp);
	};

	const removeEventListeners = () => {
		document.removeEventListener('mousemove', onMouseMove);
		document.removeEventListener('mouseenter', onMouseEnter);
		document.removeEventListener('mouseleave', onMouseLeave);
		document.removeEventListener('mousedown', onMouseDown);
		document.removeEventListener('mouseup', onMouseUp);
	};

	const onMouseMove = (e) => {
		setPos({ x: e.clientX, y: e.clientY });
	};

	const onMouseLeave = () => {
		setHidden(true);
	};

	const onMouseEnter = () => {
		setHidden(false);
	};

	const onMouseDown = () => {
		setClicked(true);
	};

	const onMouseUp = () => {
		setClicked(false);
	};

	return (
		<div
			className={`cursor${hidden ? ' cursor--hidden' : ''}${
				clicked ? ' cursor--clicked' : ''
			}${linkHover ? ' cursor--link_hovered' : ''}`}
			style={{
				left: `${pos.x}px`,
				top: `${pos.y}px`,
			}}
		/>
	);
}
