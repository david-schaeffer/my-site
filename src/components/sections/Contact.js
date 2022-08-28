import React, { useState } from 'react';
import { navigate } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function encode(data) {
	return Object.keys(data)
		.map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
		.join('&');
}

export default function Contact() {
	const [formData, setFormData] = useState({});

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const form = e.target;
		fetch('/', {
			method: 'POST',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body: encode({
				'form-name': form.getAttribute('name'),
				...formData,
			}),
		})
			.then(() => navigate(form.getAttribute('action')))
			.catch((error) => alert(error));
	};

	return (
		<section id='contact' className='section'>
			<div className='contact--section section-wrapper'>
				<div className='contact--form_wrapper'>
					<h3 className='section-title'>get in touch</h3>
					<p className='contact--blurb'>
						If you've got questions, comments, or just want to say hi, my inbox
						is always open. Send me a message and I'll get back to you as soon
						as I can!
					</p>
					<form
						className='contact--form'
						name='Contact Form'
						method='post'
						action='/success'
						netlify-honeypot='bot-field'
						netlify
						onSubmit={handleSubmit}
					>
						{/* vv FOR NETLIFY vv */}
						<input type='hidden' name='form-name' value='Contact Form' />
						<input
							type='hidden'
							name='subject'
							value='New submission from portfolio contact form'
						/>
						{/* ^^ FOR NETLIFY ^^ */}
						<div className='name-wrapper'>
							<label className='contact--label'>
								<input
									className='contact--name form-field hover'
									type='text'
									name='name'
									placeholder='name'
									required
									onChange={handleChange}
								/>
							</label>
						</div>
						<div className='email-wrapper'>
							<label className='contact--label'>
								<input
									className='contact--email form-field hover'
									type='email'
									name='email'
									placeholder='email'
									required
									onChange={handleChange}
								/>
							</label>
						</div>
						<div className='message-wrapper'>
							<label className='contact--label'>
								<textarea
									className='contact--message form-field hover'
									name='message'
									placeholder='message'
									required
									onChange={handleChange}
								/>
							</label>
						</div>
						<div className='submit-wrapper'>
							<button className='contact--submit hover' type='submit'>
								send
							</button>
						</div>
					</form>
				</div>
				<div className='contact--social_wrapper'>
					<p className='contact--blurb'>
						Feel free to reach out on my other platforms:
					</p>
					<div className='contact--social_links'>
						<a
							href='https://www.linkedin.com/in/d-schaeffer/'
							target='_blank'
							rel='noreferrer'
						>
							<FontAwesomeIcon
								className='contact--social_link'
								icon={faLinkedinIn}
							/>
						</a>
						<a
							href='https://github.com/dbschaeffer29/'
							target='_blank'
							rel='noreferrer'
						>
							<FontAwesomeIcon
								className='contact--social_link'
								icon={faGithub}
							/>
						</a>
						<a
							href='mailto:contact@dschaeffer.com'
							target='_blank'
							rel='noreferrer'
						>
							<FontAwesomeIcon
								className='contact--social_link'
								icon={faEnvelope}
							/>
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}
