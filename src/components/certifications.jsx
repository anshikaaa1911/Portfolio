import React from 'react'

const certifications = [
	'Functional Data Structures and Algorithms',
	'Deloitte Data Analytics Virtual Experience Program',
	'Agentic AI and Generative AI applications'
]

export default function Certifications(){
	return (
		<div>
			<h3>Certifications</h3>
			<div className="certifications-list">
				{certifications.map((certification)=>(
					<div className="certification-card" key={certification}>
						<p>{certification}</p>
					</div>
				))}
			</div>
		</div>
	)
}
