import React from 'react';
import moment from 'moment';

const ProjectSummary = ({ project }) => { 
  return (
    <div>
      <div className="card mb-2" key={project.id}>
        <div className="card-body">
          <h5 className="card-title">{ project.title }</h5>
          <p className="card-text">{ project.content }</p>
        </div>
        <div className="card-body">
          <span className="card-text d-block">Posted by: { project.authorFirstName }</span>
          {/* <span className="card-link">{ moment(project.createdAt.toDate().toString()).calendar() }</span> */}
        </div>
      </div>
      
    </div>
  )
}

export default ProjectSummary;