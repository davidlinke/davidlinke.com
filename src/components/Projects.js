import React from 'react';
import projects from '../data/projects.json';

const Projects = () => {
	return (
		<div className='outerContainer projectsContainer'>
			<div className='innerContainer'>
				<h2>Projects</h2>

				<div className='allProjects'>
					{projects.map((project, index) => {
						return (
							<div key={`project${index}`} className='individualProject'>
								<h4>{project.name}</h4>
								<p>{project.description}</p>
								<video
									className='projectVideo'
									src={project.video}
									playsInline='playsInline'
									muted='muted'
									autoPlay='autoPlay'
									loop='loop'
								></video>
								<h3>Tech Used</h3>
								<ul>
									{project.tech.map((technology, i) => {
										return <li key={`tech${index}_${i}`}>{technology}</li>;
									})}
								</ul>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default Projects;
