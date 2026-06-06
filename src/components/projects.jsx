import React from 'react'

const projects = [
	{
		title: 'Behavioral Fraud Awareness Simulation Platform',
		desc: 'An interactive platform that simulates real-world cyber fraud scenarios and uses CNN-based deep learning models, including XceptionNet, to classify scams and improve user awareness.',
		tags: ['Deep Learning', 'CNN', 'XceptionNet', 'Cyber Fraud'],
		screenshot: '',
		demo: '#',
		code: 'https://github.com/anshikaaa1911/Behavioral-Fraud-Awareness---Simulation-Platform'
	},
	{
		title: 'College Marketplace with ML Recommendations',
		desc: 'A peer-to-peer student resale platform with an ML recommendation system built from user interaction and behavioral data to improve product discovery.',
		tags: ['Recommendation System', 'ML', 'Data Preprocessing', 'Marketplace'],
		screenshot: '',
		demo: '#',
		code: 'https://github.com/inshivank/College-Market-Place'
	},
	{
		title: 'Employee Goal Management Portal',
		desc: 'A MERN-based portal for goal setting, approvals, performance tracking, audit logs, user administration, role-based access, and CSV/Excel report exports.',
		tags: ['MERN', 'JWT', 'MongoDB', 'REST APIs'],
		screenshot: '',
		demo: '#',
		code: '#'
	},
	{
		title: 'GROWNET Trust-Based Community Platform',
		desc: 'A scalable community platform concept with trust scoring, SOS alerts, and recommendation features for safer, more reliable community interaction.',
		tags: ['Trust Scoring', 'Recommendations', 'Safety', 'Scalable Design'],
		screenshot: '',
		demo: '#',
		
	},
	{
		title: 'Student Result Analysis and Prediction System',
		desc: 'A student performance analytics project that predicts pass/fail outcomes using academic activity data. The project includes data generation, ETL, SQLite warehousing, machine learning, model visualization, and a static website ',
		tags: ['Machine Learning,Python,Scikit-Learn,Predictive Analytics,Data Analytics,ETL Pipeline,Data Visualization,Web Development'],
		screenshot: '',
		demo: '#',
		
	}
	
]

export default function Projects(){
	return (
		<div>
			<div className="section-heading">
				<h3>Projects</h3>
				<p>Featured AI, ML, and full-stack projects. Screenshot and live demo slots are ready for deployment updates.</p>
			</div>

			<div className="projects-grid">
				{projects.map((project, index)=> (
					<article className="project-card" key={project.title}>
						<div className="project-screenshot">
							{project.screenshot ? (
								<img src={project.screenshot} alt={`${project.title} screenshot`} />
							) : (
								<div className="screenshot-placeholder" aria-label={`${project.title} screenshot placeholder`}>
									<div className="browser-bar">
										<span></span>
										<span></span>
										<span></span>
									</div>
									<div className="placeholder-layout">
										<div></div>
										<div></div>
										<div></div>
									</div>
									<p>Project Screenshot {index + 1}</p>
								</div>
							)}
						</div>

						<div className="project-body">
							<h4>{project.title}</h4>
							<p>{project.desc}</p>

							<div className="project-tags">
								{project.tags.map((tag)=>(
									<span key={tag}>{tag}</span>
								))}
							</div>

							<div className="project-actions">
								<a className={project.demo === '#' ? 'disabled-link' : ''} href={project.demo} target="_blank" rel="noreferrer" aria-disabled={project.demo === '#'}>
									Live Demo
								</a>
								<a className={project.code === '#' ? 'secondary-link disabled-link' : 'secondary-link'} href={project.code} target="_blank" rel="noreferrer" aria-disabled={project.code === '#'}>
									Source Code
								</a>
							</div>
						</div>
					</article>
				))}
			</div>
		</div>
	)
}
