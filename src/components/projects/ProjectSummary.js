import React from 'react';

const ProjectSummary = ({ project }) => { 
  return (
    <div>
      <div className="card mb-2" key={project.id}>
        <div className="card-body">
          <h5 className="card-title">{ project.title }</h5>
          <p className="card-text">{ project.content }</p>
        </div>
        <div className="card-body">
          <span className="card-text d-block">By: { project.authorFirstName }</span>
        </div>
      </div>
      
    </div>
  )
}

export default ProjectSummary;