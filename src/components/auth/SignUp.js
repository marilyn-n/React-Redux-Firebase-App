import React, { Component } from 'react';

class SignUp extends Component {
  state = {
    email: '',
    password: '',
    name: '',
    lastName: ''
  }
  
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    
  }

  render() {
    return (
      <div className="container col-md-6 offset-md-3">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input type="name" className="form-control" id="name" onChange={this.handleChange} aria-describedby="nameHelp" placeholder="Enter your name"/>
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input type="last-name" className="form-control" id="lastName" onChange={this.handleChange} aria-describedby="lastNameHelp" placeholder="Enter your last name"/>
          </div>
          <div className="form-group">
            <label>Email address</label>
            <input type="email" className="form-control" id="email" onChange={this.handleChange} aria-describedby="emailHelp" placeholder="Enter email"/>
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" className="form-control" id="password" onChange={this.handleChange} placeholder="Password"/>
          </div>
          <button type="submit" className="btn btn-primary">Sign up</button>
        </form>
      </div>
    );
  }
}

export default SignUp;
