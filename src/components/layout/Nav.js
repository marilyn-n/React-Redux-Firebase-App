import React from 'react';
import { Link } from 'react-router-dom';
import SignInLinks from './SignInLinks';
import SignOutLinks from './SignOutLinks';


const Sidebar = () => {
    return (
      <div>
        <ul className="navbar bg-dark boots-navbar">
          <li className="nav-item">
            <Link to="/" className="nav-link">Dashboard</Link>
          </li>
          <SignInLinks/>
          <SignOutLinks/>
        </ul>
      </div>
    );
}

export default Sidebar;
