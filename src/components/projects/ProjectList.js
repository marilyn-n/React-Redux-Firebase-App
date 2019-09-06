import React from 'react';
import ProjectSummary from './ProjectSummary';

const ProjectList = ({projects}) => {
    const projectsList = projects.map(item => {
      return (
        <ProjectSummary project={item} projectKey={item.id}  key={item.id}/>
      )
    })    
    
    return (
      <div className="projects-list">
        { projectsList }
      </div>
    );
}

export default ProjectList;
