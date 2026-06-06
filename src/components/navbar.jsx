import React from 'react'

export default function Navbar({ activeSection, onSectionChange, sections }){
	return (
		<>
			{sections.map((section)=>(
				<button
					type="button"
					className={activeSection === section.id ? 'active' : ''}
					key={section.id}
					onClick={()=>onSectionChange(section.id)}
				>
					{section.label}
				</button>
			))}
			<a href="/resume.pdf" target="_blank" rel="noreferrer">Resume</a>
		</>
	)
}
