import React from 'react';
import { Link } from 'react-router-dom';

const headerStyle = {
  display: 'grid',
  gridTemplateRows: 'auto 1fr',
  color: 'white',
  height: '3rem',
  alignItems: 'center',
  position: 'fixed',
  width: '100%',
  top: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.7)',
  zIndex: 999,
  padding: '0 2rem',
  textShadow: '1px 1px 2px black',
};

const buttonStyle = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '1.5rem',
  padding: '3px 15px',
  marginTop: '10px',
  margin: '1rem 1rem 0 0',
  color: 'white',
  backgroundColor: 'black',
  borderRadius: '15px',
  textAlign: 'center',
  textDecoration: 'none',
  opacity: 1,
  border: 'none',
  cursor: 'pointer',
  textShadow: '1px 1px 2px black',
  marginTop: '30px',
  letterSpacing: '.5px',
  transition: 'transform 0.3s ease-in-out',
};

const hoverStyles = {
  opacity: 0.8,
  transform: 'scale(0.9)',
};

const Header = () => {
  return (
    <div className="header" style={headerStyle}>
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
        <Link to="/blog-index">
          <button style={buttonStyle}>Blog</button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
