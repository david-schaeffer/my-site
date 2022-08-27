import React from 'react';
import resumeLight from '../assets/documents/resume-light.pdf';
import resumeDark from '../assets/documents/resume-dark.pdf';

export default function Resume() {
	return (
		<section id='resume' className='section'>
			<div className='resume--wrapper section-wrapper'>
				<h3 className='section-title'>resume</h3>
				<p className='body-text'>
					This page is under construction right now. Check back soon for an
					update!
					<br />
					<br />
					In the meantime, you can pick up a downloadable copy of my resume
					below:
				</p>
				<div className='resume--link_wrapper'>
					<a
						className='resume--link'
						rel='noopener noreferrer'
						href={resumeLight}
						target='_blank'
					>
						→ light version
					</a>
					<a
						className='resume--link'
						rel='noopener noreferrer'
						href={resumeDark}
						target='_blank'
					>
						→ dark version
					</a>
				</div>
			</div>
		</section>
	);
}
