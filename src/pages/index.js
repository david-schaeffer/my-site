import React from 'react';
import styled from 'styled-components';

const HeroSection = styled.section`
	height: 100vh;
	display: flex;
	align-items: center;
	transition: all 0.3s ease;

	@media screen and (min-width: 1024px) {
		margin-left: 180px;
	}
`;

const HeroWrapper = styled.div`
	width: 100vw;
	box-sizing: border-box;
	padding: 2rem;
`;

const Title = styled.h1`
	color: var(--text);
	font-family: var(--display);
	font-weight: 800;
	letter-spacing: 0.2rem;
	margin: 0 auto 0 0;
	transition: all 0.3s ease;
	font-size: 2.8rem;
	width: 380px;

	@media screen and (min-width: 468px) {
		font-size: 3.5rem;
		width: 420px;
	}

	@media screen and (min-width: 668px) {
		width: auto;
	}

	@media screen and (min-width: 768px) {
		font-size: 4rem;
	}

	@media screen and (min-width: 1024px) {
		font-size: 4rem;
	}
`;

const Tagline = styled.p`
	color: var(--text_2);
	font-family: var(--copy);
	font-size: 1.3rem;
	margin: 0;
	transition: all 0.3s ease;
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
	margin-top: 1rem;
	height: 0.8rem;
	width: 10rem;
	background-color: var(--accent);
	transition: all 0.3s ease;

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
	height: 100vh;
	display: flex;
	align-items: center;
	transition: all 0.3s ease;
	background-color: var(--accent);

	@media screen and (min-width: 1024px) {
		margin-left: 180px;
	}
`;

const ExpSection = styled.section`
	height: 100vh;
	display: flex;
	align-items: center;
	transition: all 0.3s ease;
	background-color: var(--bg);

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
