import React, { Component } from 'react';
import Notifications from './Notifications';
import ProjectList from '../projects/ProjectList';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';

export class Dashboard extends Component {
  render() {
    const projects = this.props.projects
    const { auth, notifications } = this.props

    if (!auth.uid) return <Redirect to={'/signin'} />

    return (
      <div className="dashboard container">
          <div className="row my-3">
            <div className="project-list col col-sm-6 col-md-6">
              <ProjectList projects={projects}/>
            </div>
            <div className="notifications col col-sm-6 col-md-5 offset-md-1">
              <Notifications notifications={notifications}/>
            </div>
          </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    projects: state.firestore.ordered.projects || state.project.projects,
    auth: state.firebase.auth,
    notifications: state.firebase.ordered.notifications
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'projects', orderBy: ['createdAt', 'desc'] },
    { collection: 'notifications', limit: 3, orderBy: ['time', 'desc'] }

  ])
)(Dashboard);

