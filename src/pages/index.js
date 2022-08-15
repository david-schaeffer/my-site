import React from 'react';
import styled from 'styled-components';

const HomepageStyles = styled.section`
	height: 100vh;
	padding-right: auto;
	display: flex;
	flex-direction: column;
	justify-content: center;
`;

const HeroWrapper = styled.div`
	margin-right: auto;
`;

const Title = styled.h1`
	color: ${({ theme }) => theme.color.text};
	font-family: ${({ theme }) => theme.font.display};
	font-weight: 800;
	letter-spacing: 0.2rem;
	line-height: 4rem;
	margin: 0 auto 0 0;
	font-size: 4rem;
`;

const Tagline = styled.p`
	color: ${({ theme }) => theme.color.text_2};
	font-family: ${({ theme }) => theme.font.copy};
	font-size: 1.5rem;
	margin: 0;
`;

export default function Home() {
	return (
		<HomepageStyles>
			<HeroWrapper>
				<Title>DAVID SCHAEFFER</Title>
				<Tagline>
					Computer Science & Behavioral Neuroscience at Northeastern University
				</Tagline>
			</HeroWrapper>
		</HomepageStyles>
	);
}
