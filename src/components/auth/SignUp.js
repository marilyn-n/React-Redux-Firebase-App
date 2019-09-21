import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { signUp } from '../../store/actions/authActions';

class SignUp extends Component {
  state = {
    email: '',
    password: '',
    firstName: '',
    lastName: ''
  }
  
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signUp(this.state);    
  }

  render() {
    const { auth, authError } = this.props;
    if (auth.uid) return <Redirect to={'/'} />

    return (
      <div className="container col-md-4 offset-md-4 jumbotron mt-5">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label>Name</label>
              <input type="text" className="form-control" id="firstName" onChange={this.handleChange} aria-describedby="lastNameHelp" placeholder="Enter your name"/>
            </div>
            <div className="form-group">
              <label>Last Name</label>
              <input type="text" className="form-control" id="lastName" onChange={this.handleChange} aria-describedby="lastNameHelp" placeholder="Enter your last name"/>
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
            <div className="text-center">
              <button type="submit" className="btn btn-primary">Sign up</button>
            </div>
            <div className="text-danger text-center">
              { authError ? <p>{authError}</p> : null }  
            </div>
          </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (newUser) => dispatch(signUp(newUser))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
