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
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Elit duis
					tristique sollicitudin nibh sit amet commodo. Non arcu risus quis
					varius quam quisque id. Tellus rutrum tellus pellentesque eu tincidunt
					tortor aliquam nulla facilisi.
					<br />
					<br />
					Eu non diam phasellus vestibulum lorem sed risus ultricies tristique.
					Malesuada proin libero nunc consequat interdum varius sit amet mattis.
					Consequat mauris nunc congue nisi vitae suscipit tellus. Mattis enim
					ut tellus elementum sagittis.
					<br />
					<br />
					Sed velit dignissim sodales ut. Sagittis eu volutpat odio facilisis
					mauris sit. Sit amet risus nullam eget felis eget nunc lobortis
					mattis. In arcu cursus euismod quis viverra nibh.
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
