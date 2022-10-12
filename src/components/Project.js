import React from 'react';

function Project(props) {
    const projects = props.projects;

    return (
        <div className='project-list'>
            {projects.map((project) => (
                <div className='project-item' key={project.id}>
                    <div className='card'>
                    <div className='project-details'>
                        <h3 className='project-title'>{project.title}</h3>
                        <a href={project.repoLink} target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-github fa-3x"></i></a>
                    </div>
                    <img src={project.image} alt={project.title + 'image'}></img>
                    <a href={project.deployLink} target="_blank" rel="noopener noreferrer"><div className='deploy-link'></div></a>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Project;