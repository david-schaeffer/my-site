import React, { useState, useEffect } from 'react';
import { graphql, useStaticQuery } from 'gatsby';

export default function Experience() {
	const [outerTab, setOuterTab] = useState(0);
	const [outerTabWidth, setOuterTabWidth] = useState(0);
	const [innerTab, setInnerTab] = useState(0);
	const [innerTabWidth, setInnerTabWidth] = useState(0);
	const [windowWidth, setWindowWidth] = useState(0);

	const query = useStaticQuery(graphql`
		query {
			allContentfulProject {
				nodes {
					heading
					desc
					title
					url
				}
			}
			allContentfulCourse(sort: {order: ASC}) {
				nodes {
					desc
					heading
					title
				}
			}
		}
	`);

	const data =
		outerTab === 0
			? query.allContentfulProject.nodes
			: query.allContentfulCourse.nodes;

	useEffect(() => {
		setSizes();
		window.addEventListener('resize', setSizes);
	});

	function setSizes() {
		setWindowWidth(window.innerWidth);
		const outerTabEl = document.querySelector('.exp--tab.outer');
		const innerTabEl = document.querySelector('.exp--tab.inner');
		outerTabEl && setOuterTabWidth(outerTabEl.offsetWidth);
		innerTabEl && setInnerTabWidth(innerTabEl.offsetWidth);
	}

	return (
		<section id='experience' className='section'>
			<div className='exp--wrapper section-wrapper'>
				<h3 className='section-title'>my experience</h3>
				<div className='exp--table_wrapper'>
					<div className='exp--outer_tabs'>
						<button
							type='button'
							className={`exp--tab outer hover${
								outerTab === 0 ? ' active' : ''
							}`}
							onClick={() => {
								setOuterTab(0);
								setInnerTab(0);
							}}
						>
							Projects
						</button>
						<button
							type='button'
							className={`exp--tab outer hover${
								outerTab === 1 ? ' active' : ''
							}`}
							onClick={() => {
								setOuterTab(1);
								setInnerTab(0);
							}}
						>
							Courses
						</button>
						<div
							className='highlight-container'
							style={{
								left: `${
									windowWidth >= 768 ? 160 : outerTabWidth * outerTab
								}px`,
								top: `${windowWidth >= 768 ? 48 * outerTab : 46}px`,
								width: `${windowWidth >= 768 ? 2 : outerTabWidth}px`,
							}}
						>
							<div className='highlight-border'></div>
							<div className='highlight-arrow'></div>
						</div>
					</div>
					<div className='exp--inner_tabs'>
						{data.map((tab, index) => {
							return (
								<button
									type='button'
									className={`exp--tab inner hover${
										innerTab === index ? ' active' : ''
									}`}
									key={index}
									onClick={() => setInnerTab(index)}
								>
									{tab.title}
								</button>
							);
						})}
						<div
							className='highlight-container inner'
							style={{
								left: `${
									windowWidth >= 768 ? 177 : innerTabWidth * innerTab
								}px`,
								top: `${windowWidth >= 768 ? 48 * innerTab : 46}px`,
								width: `${windowWidth >= 768 ? 2 : innerTabWidth - 1}px`,
							}}
						>
							<div className='highlight-border'></div>
							<div className='highlight-arrow'></div>
						</div>
					</div>
					<div className='exp--info'>
						<h3 className='exp--info_title'>{data[innerTab].title}</h3>
						<p className='exp--info_desc'>{data[innerTab].desc}</p>
						{data[innerTab].url && (
							<a
								className='exp--info_url'
								href={data[innerTab].url}
								target='_blank'
								rel='noopener noreferrer'
							>
								→ visit site
							</a>
						)}
					</div>
				</div>
			</div>
		</section>
	);
}
