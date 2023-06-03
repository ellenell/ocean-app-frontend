import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const headerStyle = {
  display: 'flex',
  justifyContent: 'center', // Center the content horizontally
  alignItems: 'center', // Center the content vertically
  color: 'white',
  height: '3rem',
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
  marginBottom: '10px', 
  letterSpacing: '.5px',
  transition: 'transform 0.3s ease-in-out',
  
};

const hoverStyles = {
  opacity: 0.8,
  transform: 'scale(0.9)',
};

const Header = () => {
  const [hoveredButton, setHoveredButton] = useState(null);

  const handleButtonHover = (buttonName) => {
    setHoveredButton(buttonName);
  };

  const handleButtonLeave = () => {
    setHoveredButton(null);
  };

  const getButtonStyle = (buttonName) => {
    if (hoveredButton === buttonName) {
      return { ...buttonStyle, ...hoverStyles };
    }
    return buttonStyle;
  };

  const h1Style = {
    ...buttonStyle,
    fontSize: '2rem',
    margin: '0',
  };

  return (
    <div className="header" style={headerStyle}>
      <div>
      <h1 style={h1Style}>SeaSense</h1>
        <Link to="/">
          <button
            style={getButtonStyle('home')}
            onMouseEnter={() => handleButtonHover('home')}
            onMouseLeave={handleButtonLeave}
          >
            Home
          </button>
        </Link>
        <Link to="/signin">
          <button
            style={getButtonStyle('signin')}
            onMouseEnter={() => handleButtonHover('signin')}
            onMouseLeave={handleButtonLeave}
          >
            Sign-In
          </button>
        </Link>
        <Link to="/register">
          <button
            style={getButtonStyle('register')}
            onMouseEnter={() => handleButtonHover('register')}
            onMouseLeave={handleButtonLeave}
          >
            Register
          </button>
        </Link>
        <Link to="/blog-index">
          <button
            style={getButtonStyle('blog')}
            onMouseEnter={() => handleButtonHover('blog')}
            onMouseLeave={handleButtonLeave}
          >
            Blog
          </button>
        </Link>
      </div>
    </div>
  );
};


export default Header;
