import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { singOut } from '../../store/actions/authActions';
import { connect } from 'react-redux';

const SignInLinks = (props) => {
  console.log(props, '**pp');
  
    return (
      <ul className="nav justify-content-end">
        <li className="nav-item">
          <NavLink to="/create" className="nav-link">New Project</NavLink>
        </li>
        <div className="dropdown">
        <button className="btn btn-dark dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          MN
        </button>
          <div className="dropdown-menu boots-dropdown" aria-labelledby="navbarDropdownMenuLink">
            <Link to="/" className="dropdown-item">Action</Link>
            <Link to="/" className="dropdown-item">Another action</Link>
            <a href="-" className="dropdown-item" onClick={props.singOut}>Sign out</a>
          </div>
        </div>
      </ul>
    );
}

const mapDispatchToProps = (dispatch) => {
  return {
    singOut: () => dispatch(singOut())
  }
}

export default connect(null, mapDispatchToProps)(SignInLinks);