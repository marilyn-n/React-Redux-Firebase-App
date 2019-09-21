import React from 'react';
import { NavLink } from 'react-router-dom';
import SignInLinks from './SignInLinks';
import SignOutLinks from './SignOutLinks';
import { connect } from 'react-redux';

const Sidebar = (props) => {
  const { auth, profile } = props;
  
    const links = auth.uid ? <SignInLinks profile={profile}/> : <SignOutLinks/>
    return (
      <div>
        <ul className="navbar bg-dark boots-navbar">
          <li className="nav-item">
            <NavLink to="/" className="nav-link">Dashboard</NavLink>
          </li>
          { links }
        </ul>
      </div>
    );
}

const mapStateToProps = (state) => {
  console.log(state, 'navbar state');
  
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
}

export default connect(mapStateToProps, null)(Sidebar);
