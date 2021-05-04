import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLink'
import SignedOutLinks from './SignedOutLink'
import { connect } from "react-redux";

const Navbar = (props) => {
  const { auth, profile } = props;
  const links = auth.uid ? <SignedInLinks profile={profile} /> : <SignedOutLinks />;
  // const LoadedNavBar = auth.isLoaded ? links : null

  return (
    <nav className="nav-wrapper" style={{ background: "rgba(0,0,0,0.95)" }}>
      <div className="container">
        <Link to='/' className="brand-logo">320Blog</Link>
        {auth.isLoaded && links}
      </div>
    </nav>
  )
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
}

export default connect(mapStateToProps)(Navbar)