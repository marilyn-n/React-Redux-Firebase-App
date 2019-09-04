import React, { Component } from 'react';

class CreateProject extends Component {
  state = {
    title: '',
    content: ''
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state)
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }


  render() {
    return (
      <div className="container col-md-6 offset-md-3 create-project">
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
          <div className="form-group row">
            <div className="col-sm-10">
              <button type="submit" className="btn btn-primary">Create</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default CreateProject;
