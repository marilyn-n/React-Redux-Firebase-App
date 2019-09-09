import React from 'react';
import { NavLink } from 'react-router-dom';
import SignInLinks from './SignInLinks';
import SignOutLinks from './SignOutLinks';
import { connect } from 'react-redux';


const Sidebar = () => {
    return (
      <div>
        <ul className="navbar bg-dark boots-navbar">
          <li className="nav-item">
            <NavLink to="/" className="nav-link">Dashboard</NavLink>
          </li>
          <SignInLinks/>
          <SignOutLinks/>
        </ul>
      </div>
    );
}

const mapStateToProps = (state) => {
  return {

  }
  
}

export default connect(mapStateToProps)(Sidebar);
