import React, { useState } from 'react'
import Navbar from './navbar'
import Hero from './hero'
import About from './about'
import Projects from './projects'
import Skills from './skills'
import CoCurricular from './co-curricular'
import Certifications from './certifications'
import Contact from './contact'

const dashboardSections = [
	{ id: 'about', label: 'About', component: <About/> },
	{ id: 'projects', label: 'Projects', component: <Projects/> },
	{ id: 'skills', label: 'Skills', component: <Skills/> },
	{ id: 'co-curricular', label: 'Co-curriculars', component: <CoCurricular/> },
	{ id: 'certifications', label: 'Certifications', component: <Certifications/> },
	{ id: 'contact', label: 'Contact', component: <Contact/> }
]

export default function App(){
	const [activeSection, setActiveSection] = useState('about')
	const currentSection = dashboardSections.find((section)=>section.id === activeSection)

	return (
		<div>
			<div className="container">
				<header>
					<h2>Anshika Bharti</h2>
					<nav className="nav">
						<Navbar
							activeSection={activeSection}
							onSectionChange={setActiveSection}
							sections={dashboardSections}
						/>
					</nav>
				</header>

				<main>
					<section className="hero"><Hero/></section>

					<section id={activeSection} className="section dashboard-section">
						{currentSection?.component}
					</section>
				</main>
			</div>
		</div>
	)
}

