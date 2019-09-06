import React, { Component } from 'react';
import Notifications from './Notifications';
import ProjectList from '../projects/ProjectList';
import { connect } from 'react-redux';

export class Dashboard extends Component {
  render() {
    const projects = this.props.projects

    return (
      <div className="dashboard container">
          <div className="row">
            <div className="project-list col col-sm-6 col-md-6">
              <ProjectList projects={projects}/>
            </div>
            <div className="notifications col col-sm-6 col-md-5 offset-md-1">
              <Notifications/>
            </div>
          </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    projects: state.project.projects
  }
}

export default connect(mapStateToProps)(Dashboard);
