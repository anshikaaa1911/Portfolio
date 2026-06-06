import React from 'react'

const activities = [
	{
		title: 'JYC Literary and Debating Coordinator',
		detail: 'Serving as coordinator for the 2025-2026 session, supporting literary events, debate activities, and student participation.'
	},
	{
		title: 'Hackathon Participation',
		detail: 'Participated in multiple hackathons, collaborating on fast-paced problem solving, prototyping, and technical presentations.'
	},
	{
		title: 'MUN and Cultural Event Organization',
		detail: 'Actively participated in organizing Model United Nations events and cultural activities, fostering teamwork, communication, and event management skills.'
	},
	{
		title: 'Anchoring and Stage Management',
		detail: 'Anchored events and managed anchors, coordinating stage flow, speaker transitions, and audience engagement.'
	},
	{
		title: 'Debate Competitions',
		detail: 'Won multiple debate competitions, strengthening public speaking, critical thinking, and argumentation skills.'
	}
]

export default function CoCurricular(){
	return (
		<div>
			<h3>Co-curriculars</h3>
			<div className="co-curricular-list">
				{activities.map((activity)=>(
					<div className="co-curricular-card" key={activity.title}>
						<h4>{activity.title}</h4>
						<p>{activity.detail}</p>
					</div>
				))}
			</div>
		</div>
	)
}
