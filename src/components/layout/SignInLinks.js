import React from 'react';
import { Link } from 'react-router-dom';

const SignInLinks = () => {
    return (
      <ul className="nav justify-content-end">
        <li className="nav-item">
          <Link to="/" className="nav-link">New Project</Link>
        </li>
        <li className="nav-item dropdown">
          <Link to="/" className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            MN
          </Link>
          <div className="dropdown-menu boots-dropdown" aria-labelledby="navbarDropdownMenuLink">
            <Link to="/" className="dropdown-item">Action</Link>
            <Link to="/" className="dropdown-item">Another action</Link>
            <Link to="/" className="dropdown-item">Sign out</Link>
          </div>
        </li>
      </ul>
    );
}

export default SignInLinks;