import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';

const ProjectDetails = (props) => {
  const { project, auth } = props;
  if (!auth.uid) return <Redirect to={'/signin'}/>

  if (project) {
    return (
      <div className="container project-details">
        <div className="card">
          <div className="card-header">
          { project.title }
          </div>
          <div className="card-body">
            <p className="card-text">{ project.content }</p>
            <span className="btn btn-primary">Go somewhere</span>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">By { project.authorFirstName } { project.authorLastName }</li>
          </ul>
        </div> 
      </div>
      
    )
  } else {
    return (
      <div className="container project-details text-center">
        <div> Nothing found yet </div>
      </div>
    )
  }
}

const mapStateTopProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const projects = state.firestore.data.projects;
  const project = projects ?  projects[id] : null
  return {
    project: project,
    auth: state.firebase.auth
  }
}

export default compose(
  connect(mapStateTopProps),
  firestoreConnect([
    { collection: 'projects'}
  ])
)(ProjectDetails);
