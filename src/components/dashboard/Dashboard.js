import React, { Component } from 'react';
import Notifications from './Notifications';
import ProjectList from '../projects/ProjectList';

export class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard container">
          <div className="row">
            <div className="project-list col col-sm-6 col-md-6">
              <ProjectList/>
            </div>
            <div className="notifications col col-sm-6 col-md-5 offset-md-1">
              <Notifications/>
            </div>
          </div>
      </div>
    );
  }
}

export default Dashboard;
