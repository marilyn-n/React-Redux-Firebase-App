import React from 'react';
import ProjectSummary from './ProjectSummary';
import { Link } from 'react-router-dom';

const ProjectList = ({projects}) => {
    const projectsList = projects.map(project => {
      console.log(project.createdAt, 'aqui');
      
      return (
        <Link to={'project/' + project.id} key={ project.id }>
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
