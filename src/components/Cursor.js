import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const StyledCursor = styled.div`
	width: 40px;
	height: 40px;
	border: 2px solid var(--text);
	border-radius: 100%;
	position: fixed;
	pointer-events: none;
	z-index: 9999;
	transition: all 150ms ease;
	transition-property: opacity, transform, background-color;
	transform: translate(-50%, -50%);

	transform: ${({ linkHover }) =>
		linkHover && 'translate(-50%, -50%) scale(1.2)'};
	transform: ${({ clicked }) => clicked && 'translate(-50%, -50%) scale(0.9)'};

	background-color: ${({ clicked }) => clicked && 'var(--text)'};
	background-color: ${({ linkHover }) => linkHover && 'var(--text)'};

	opacity: ${({ hidden }) => (hidden ? 0 : 1)};
	opacity: ${({ linkHover }) => linkHover && '0.5'};

	left: ${(props) => `${props.x}px`};
	top: ${(props) => `${props.y}px`};

	@media screen and (max-width: 1024px) {
		display: none;
	}
`;

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
		const darkModeToggle = document.getElementById('darkModeToggle');

		darkModeToggle.addEventListener('mouseover', () => setLinkHover(true));
		darkModeToggle.addEventListener('mouseout', () => setLinkHover(false));
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
		<StyledCursor
			x={pos.x}
			y={pos.y}
			hidden={hidden}
			clicked={clicked}
			linkHover={linkHover}
		/>
	);
}
