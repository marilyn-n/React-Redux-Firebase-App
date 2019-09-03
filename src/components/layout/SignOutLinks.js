import React from 'react';
import { Link } from 'react-router-dom';

const SignOutLinks = () => {
    return (
      <ul className="nav justify-content-end">
        <li className="nav-item">
          <Link to="/" className="nav-link">Signup</Link>
        </li>
        <li className="nav-item">
          <Link to="/" className="nav-link">Login</Link>
        </li>
      </ul>
      
    );
}

export default SignOutLinks;