import React from 'react';
import projects from '../data/projects.json';
import GithubLogo from './imageComponents/GithubLogo';
import Browser from './Browser';

const Projects = () => {
    return (
        <div className='outer-container'>
            <div className='inner-container'>
                <h2>PROJECTS</h2>

                <div className='all-projects'>
                    {projects.map((project, index) => {
                        return (
                            <div key={`project${index}`} className={`individual-project ${index % 2 === 0 ? 'left-project' : 'right-project'}`}>
                                <div className={`video-container ${index % 2 === 0 ? 'left-video' : 'right-video'}`}>
                                    <Browser />
                                    <video className='project-video' src={project.video} playsInline='playsInline' muted='muted' autoPlay='autoPlay' loop='loop'></video>
                                </div>
                                <div className={`info-container ${index % 2 === 0 ? 'left-project-info' : 'right-project-info'}`}>
                                    <div className='project-title-container'>
                                        <a href={project.url} target='_blank' rel='noopener noreferrer'>
                                            <h4 className='link project-title'>{project.name}</h4>
                                        </a>
                                        <a href={project.github} target='_blank' rel='noopener noreferrer'>
                                            <GithubLogo />
                                        </a>
                                    </div>
                                    <p className='project-description'>{project.description}</p>
                                    <h3>Tech Used:</h3>
                                    <ul className='tech-used'>
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
