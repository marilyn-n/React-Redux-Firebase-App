import React from 'react';
import { NavLink } from 'react-router-dom';
import SignInLinks from './SignInLinks';
import SignOutLinks from './SignOutLinks';
import { connect } from 'react-redux';


const Sidebar = (props) => {
  const { auth } = props;
    const links = auth.uid ? <SignInLinks/> : <SignOutLinks/>
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
  return {
    auth: state.firebase.auth
  }
}

export default connect(mapStateToProps)(Sidebar);
