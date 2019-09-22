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
        <div className="navbar bg-dark boots-navbar">
          { links }
        </div>
      </div>
    );
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
}

export default connect(mapStateToProps, null)(Sidebar);
