import React from 'react';
import { NavLink } from 'react-router-dom';

const SignInLinks = () => {
    return (
      <ul className="nav justify-content-end">
        <li className="nav-item">
          <NavLink to="/" className="nav-link">New Project</NavLink>
        </li>
        <li className="nav-item dropdown">
          <NavLink to="/" className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            MN
          </NavLink>
          <div className="dropdown-menu boots-dropdown" aria-labelledby="navbarDropdownMenuLink">
            <NavLink to="/" className="dropdown-item">Action</NavLink>
            <NavLink to="/" className="dropdown-item">Another action</NavLink>
            <NavLink to="/" className="dropdown-item">Something else here</NavLink>
          </div>
        </li>
        <li className="nav-item">
          <NavLink to="/" className="nav-link">Log Out</NavLink>
        </li>
      </ul>
    );
}

export default SignInLinks;