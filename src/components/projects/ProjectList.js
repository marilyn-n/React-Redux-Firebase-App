import React, { Component } from 'react';
import ProjectSummary from '../projects/ProjectSummary';

export class ProjectList extends Component {
  render() {
    return (
      <div className="projects-list">
        <ProjectSummary/>
        <ProjectSummary/>
        <ProjectSummary/>
      </div>
    );
  }
}

export default ProjectList;
