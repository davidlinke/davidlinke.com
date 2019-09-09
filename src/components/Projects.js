import React from 'react';
import projects from '../data/projects.json';
import GithubLogo from './imageComponents/GithubLogo';
import Browser from './Browser';

const Projects = () => {
	return (
		<div className='outerContainer projectsContainer'>
			<div className='innerContainer'>
				<h2>PROJECTS</h2>

				<div className='allProjects'>
					{projects.map((project, index) => {
						return (
							<div
								key={`project${index}`}
								className={`individualProject ${
									index % 2 === 0 ? 'leftProject' : 'rightProject'
								}`}
							>
								<div
									className={`videoContainer ${
										index % 2 === 0 ? 'leftVideo' : 'rightVideo'
									}`}
								>
									<Browser />
									<video
										className='projectVideo'
										src={project.video}
										playsInline='playsInline'
										muted='muted'
										autoPlay='autoPlay'
										loop='loop'
									></video>
								</div>
								<div
									className={`infoContainer ${
										index % 2 === 0 ? 'leftProjectInfo' : 'rightProjectInfo'
									}`}
								>
									<div className='projectTitleContainer'>
										<a
											href={project.url}
											target='_blank'
											rel='noopener noreferrer'
										>
											<h4 className='link projectTitle'>{project.name}</h4>
										</a>
										<a
											href={project.github}
											target='_blank'
											rel='noopener noreferrer'
										>
											<GithubLogo />
										</a>
									</div>
									<p className='projectDescription'>{project.description}</p>
									<h3>Tech Used:</h3>
									<ul className='techUsed'>
										{project.tech.map((technology, i) => {
											return <li key={`tech${index}_${i}`}>{technology}</li>;
										})}
									</ul>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default Projects;
