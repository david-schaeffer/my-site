import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const StyledCursor = styled.div`
	width: 40px;
	height: 40px;
	border: 2px solid white;
	border-radius: 100%;
	position: fixed;
	transform: translate(-50%, -50%);
	pointer-events: none;
	z-index: 9999;
	mix-blend-mode: difference;
	transition: none;

	left: ${(props) => `${props.x}px`};
	top: ${(props) => `${props.y}px`};
`;

export default function Cursor() {
	const [pos, setPos] = useState({ x: 0, y: 0 });

	useEffect(() => {
		addEventListeners();
		return () => removeEventListeners();
	}, []);

	const addEventListeners = () => {
		document.addEventListener('mousemove', onMouseMove);
	};

	const removeEventListeners = () => {
		document.removeEventListener('mousemove', onMouseMove);
	};

	const onMouseMove = (e) => {
		setPos({ x: e.clientX, y: e.clientY });
	};

	return <StyledCursor x={pos.x} y={pos.y} />;
}
