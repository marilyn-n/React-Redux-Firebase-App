import React from 'react';
import ProjectSummary from './ProjectSummary';
import { Link } from 'react-router-dom';

const ProjectList = ({projects}) => {
    const projectsList = projects.map(project => {
      return (
        <Link to={'project/' + project.id} key={ project.id } className="text-decoration-none text-reset">
          <ProjectSummary project={project} projectKey={project.id}/>
        </Link>
      )
    })    
    
    return (
      <div className="projects-list">
        { projectsList }
      </div>
    );
}

export default ProjectList;
