import React from 'react';
import styled from 'styled-components';

const HeroSection = styled.section`
	height: 100vh;
	display: flex;
	align-items: center;
	background-color: var(--bg);
	transition: all 0.3s ease;

	@media screen and (min-width: 1024px) {
		margin-left: 180px;
	}
`;

const HeroWrapper = styled.div`
	width: 100%;
	padding: 2rem;
`;

const Title = styled.h1`
	color: var(--text);
	font-family: var(--display);
	letter-spacing: 0.2rem;
	margin: 0;
	font-size: 2.8rem;
	width: 380px;

	@media screen and (min-width: 468px) {
		font-size: 3.5rem;
		width: 420px;
	}

	@media screen and (min-width: 668px) {
		width: 100%;
	}

	@media screen and (min-width: 768px) {
		font-size: 4rem;
	}
`;

const Tagline = styled.p`
	color: var(--text_2);
	font-family: var(--copy);
	font-size: 1.3rem;
	width: 300px;

	@media screen and (min-width: 468px) {
		font-size: 1.6rem;
		width: 340px;
	}

	@media screen and (min-width: 668px) {
		width: 540px;
	}

	@media screen and (min-width: 768px) {
		font-size: 1.7rem;
		width: 580px;
	}
`;

const AccentBar = styled.div`
	background-color: var(--accent);
	margin-top: 1rem;
	height: 0.8rem;
	width: 10rem;

	@media screen and (min-width: 468px) {
		height: 1rem;
		width: 13rem;
	}

	@media screen and (min-width: 768px) {
		height: 1rem;
		width: 13.5rem;
	}
`;

const AboutSection = styled.section`
	background-color: var(--accent);
	height: 100vh;
	display: flex;
	align-items: center;

	@media screen and (min-width: 1024px) {
		margin-left: 180px;
	}
`;

const ExpSection = styled.section`
	background-color: var(--bg);
	height: 100vh;
	display: flex;
	align-items: center;

	@media screen and (min-width: 1024px) {
		margin-left: 180px;
	}
`;

export default function Home() {
	return (
		<>
			<HeroSection>
				<HeroWrapper>
					<Title>DAVID SCHAEFFER</Title>
					<Tagline>
						Computer Science & Behavioral Neuroscience at Northeastern
						University
					</Tagline>
					<AccentBar />
				</HeroWrapper>
			</HeroSection>
			<AboutSection>
				<h1>About</h1>
			</AboutSection>
			<ExpSection>
				<h1>Experience</h1>
			</ExpSection>
		</>
	);
}
