import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

export default function About() {
	return (
		<section id='about' className='section'>
			<div className='about--wrapper section-wrapper'>
				<h3 className='about--title section-title'>about me</h3>
				<p className='about--info'>
					<span className='accent-text'>Hello!</span> My name is David
					Schaeffer, and I'm studying Computer Science and Behavioral
					Neuroscience in the honors program at Northeastern University.
					<br />
					<br />
					My love for coding began when I made my first program in MIT's{' '}
					<a
						href='https://scratch.mit.edu/'
						rel='noopener noreferrer'
						target='_blank'
					>
						Scratch
					</a>{' '}
					programming language (a randomly-generated math test!). Now, as I
					enter my second year of study, I'm interested particularly in the
					intersection of artificial and natural intelligence, the development
					of ethical software, and the use of technology to improve quality of
					life.
					<br />
					<br />
					I'm never one to shy away from a challenge, and I constantly strive to
					learn more and improve my skills. Recently, I delved into front end
					development, using tools such as Gatsby, CSS, and Netlify to create
					this website.
					<br />
					<br />
					Outside my studies, you can find me singing with the{' '}
					<a
						href='https://www.nunoreasters.com/'
						rel='noopener noreferrer'
						target='_blank'
					>
						Nor'easters
					</a>
					, experimenting in the kitchen, or exploring Boston.
				</p>
				<div className='about--image'>
					<StaticImage
						className='img hover'
						src='../../assets/images/me-sqr.jpg'
						alt='Headshot'
						placeholder='tracedSVG'
						layout='constrained'
					/>
				</div>
			</div>
		</section>
	);
}
