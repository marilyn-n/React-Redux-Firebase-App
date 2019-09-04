import React from 'react';
import ProjectDetails from './ProjectDetails';

const ProjectSummary = () => {
  return (
    <div>
      <div className="card mb-2">
        <div className="card-body">
          <h5 className="card-title">Project title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
        <div className="card-body">
          <span className="card-link">3rd September, 3am</span>
        </div>
        <ProjectDetails/>
      </div>
      
    </div>
  )
}

export default ProjectSummary;