import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { singOut } from '../../store/actions/authActions';
import { connect } from 'react-redux';

const SignInLinks = (props) => {
    return (
      <nav className="navbar navbar-expand-md">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon">
            lll
          </span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <NavLink to="/" className="nav-link">Dashboard</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/create" className="nav-link">New Project</NavLink>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link" onClick={props.singOut}>Sign out</a>
            </li>
            { props.profile.initials ? <li className="nav-item initials">{props.profile.initials}</li> : ''}
            
          </ul>
        </div>
      </nav>
    );
}

const mapDispatchToProps = (dispatch) => {
  return {
    singOut: () => dispatch(singOut())
  }
}

export default connect(null, mapDispatchToProps)(SignInLinks);