import React, { useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';

export default function Experience() {
	const [outerTab, setOuterTab] = useState(0);
	const [innerTab, setInnerTab] = useState(0);

	const query = useStaticQuery(graphql`
		query {
			allContentfulProject {
				nodes {
					title
					desc
					url
					id
				}
			}
			allContentfulCourse(sort: { fields: order }) {
				nodes {
					id
					desc
					title
				}
			}
		}
	`);

	const data =
		outerTab === 0
			? query.allContentfulProject.nodes
			: query.allContentfulCourse.nodes;

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
					</div>
					<div className='exp--inner_tabs'>
						{data.map((tab, index) => {
							return (
								<button
									type='button'
									className={`exp--tab inner hover${
										innerTab === index ? ' active' : ''
									}`}
									key={tab.id}
									onClick={() => setInnerTab(index)}
								>
									{tab.title}
								</button>
							);
						})}
					</div>
					<div className='exp--info'>
						<h3 className='exp--info_title'>{data[innerTab].title}</h3>
						<p className='exp--info_desc'>{data[innerTab].desc}</p>
						{outerTab === 0 && (
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
