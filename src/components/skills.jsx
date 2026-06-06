import React from 'react'

const groups = [
	{
		title: 'Machine Learning',
		items: ['Feature Engineering', 'Model Evaluation', 'Regression', 'Classification', 'Clustering', 'CNNs', 'XceptionNet']
	},
	{
		title: 'Programming',
		items: ['Python', 'JavaScript', 'React', 'Node.js', 'REST APIs', 'MERN Stack', 'JWT Authentication', 'SQLite']
	},
	{
		title: 'Data and Tools',
		items: ['EDA', 'Statistics', 'Data Preprocessing', 'MongoDB', 'Mongoose', 'CSV/Excel Reports', 'GitHub', 'VS Code', 'Jupyter Notebooks', 'Google Colab', 'Figma', 'Canva','Tableau', 'Power BI']
	}
]

export default function Skills(){
	return (
		<div>
			<h3>Skills</h3>
			<div className="skills-list">
				{groups.map((group)=>(
					<div className="skill-group" key={group.title}>
						<h4>{group.title}</h4>
						<div>
							{group.items.map((item)=>(
								<span key={item}>{item}</span>
							))}
						</div>
					</div>
				))}
			</div>
		</div>
	)
}
