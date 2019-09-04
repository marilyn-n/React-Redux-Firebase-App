import React, { Component } from 'react';

class SignIn extends Component {
  state = {
    email: '',
    password: ''
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
      <div className="signin jumbotron">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Email address</label>
            <input type="email" className="form-control" id="email" onChange={this.handleChange} aria-describedby="emailHelp" placeholder="Enter email"/>
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" className="form-control" id="password" onChange={this.handleChange} placeholder="Password"/>
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
