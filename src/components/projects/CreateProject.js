import React, { Component } from 'react';
import { createProject } from '../../store/actions/projectActions';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class CreateProject extends Component {

  state = {
    title: '',
    content: ''
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createProject(this.state)
    this.props.history.push('/');
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to={'/signin'} />
    
    return (
      <div className="container col-md-6 offset-md-3 create-project my-3">
        <div className="card">
          <div className="card-body">
            <h5>Create new project</h5>
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor="title" className="col-form-label">Title</label>
                <input type="text" className="form-control" id="title" onChange={this.handleChange} placeholder="Title"/>
              </div>
              <div className="form-group">
                <label htmlFor="content">Content</label>
                <textarea className="form-control" id="content" rows="3" onChange={this.handleChange} placeholder="Add Content"></textarea>
              </div>
              <div className="form-group text-center">
                  <button type="submit" className="btn btn-primary">Create</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createProject: (project) => dispatch(createProject(project))
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateProject);
