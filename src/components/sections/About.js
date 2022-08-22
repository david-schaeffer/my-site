import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

export default function About() {
	return (
		<section id='about' className='about--section section'>
			<div className='about--wrapper'>
				<h3 className='about--title'>about me</h3>
				<p className='about--info'>
					<span className='accent-text'>Hello!</span> My name is David
					Schaeffer, and I'm studying Computer Science and Behavioral
					Neuroscience in the honors program at Northeastern University.
					<br />
					<br />
					Lorem ipsum dolor sit amet.
				</p>
				<div className='about--image'>
					<StaticImage
						src='../../assets/images/me.jpg'
						alt='Headshot'
						placeholder='tracedSVG'
						height={200}
						width={200}
						imgStyle={{
							borderRadius: '20px',
						}}
					/>
				</div>
			</div>
		</section>
	);
}
