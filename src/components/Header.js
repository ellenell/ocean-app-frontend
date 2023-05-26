import React from 'react'
import { Link, Router } from 'react-router-dom';

const buttonStyle = {
  backgroundColor: 'red',
  color: 'white',
  padding: '10px 20px',
  fontSize: '16px',
}

const Header = () => {
  return (
<div className="homepage">
      <div>
        <Link to="/">
          <button style={buttonStyle}>Home</button>
        </Link>
        <Link to="/signin">
          <button style={buttonStyle}>Sign-In</button>
        </Link>
        <Link to="/register">
          <button style={buttonStyle}>Register</button>
        </Link>
      </div>
    </div>
  );
}

export default Header;
