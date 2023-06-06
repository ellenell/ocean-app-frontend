import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const headerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
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
  fontSize: '1.5rem',
  margin: '1rem 1rem 0 0',
  color: 'white',
  backgroundColor: 'transparent',
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

  const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    padding: '0 1rem', // Adjust the padding to create more space
  };

  const h1Style = {
    fontSize: '2rem',
    margin: '0',
    color: 'white',
    textShadow: '1px 1px 2px black',
    marginLeft: '1rem',
  };

  const centerStyle = {
    flex: 1,
    textAlign: 'center',
  };

  const rightAlignStyle = {
    textAlign: 'right',
    whiteSpace: 'nowrap',
    flex: 'none', // Added to prevent the register button from taking up extra space
  };

  return (
    <div className="header" style={headerStyle}>
      <div style={containerStyle}>
        <div style={h1Style}>
        <Link to="/about">
            <button
              style={getButtonStyle('about')}
              onMouseEnter={() => handleButtonHover('about')}
              onMouseLeave={handleButtonLeave}
            >
              SeaSense
            </button>
          </Link>
        </div>
        <div style={centerStyle}>
          <Link to="/">
            <button
              style={getButtonStyle('home')}
              onMouseEnter={() => handleButtonHover('home')}
              onMouseLeave={handleButtonLeave}
            >
              HOME
            </button>
          </Link>

          <Link to="/daily-weather">
            <button
              style={getButtonStyle('daily-weather')}
              onMouseEnter={() => handleButtonHover('daily-weather')}
              onMouseLeave={handleButtonLeave}
            >
              DAILY WEATHER
            </button>
          </Link>
          <Link to="/surfing-weather">
            <button
              style={getButtonStyle('surfing-weather')}
              onMouseEnter={() => handleButtonHover('surfing-weather')}
              onMouseLeave={handleButtonLeave}
            >
              SURFING
            </button>
          </Link>
          
          <Link to="/kayaking-weather">
            <button
              style={getButtonStyle('kayaking')}
              onMouseEnter={() => handleButtonHover('kayaking')}
              onMouseLeave={handleButtonLeave}
            >
              KAYAKING
            </button>
          </Link>

          <Link to="/snorkeling-weather">
            <button
              style={getButtonStyle('snorkeling')}
              onMouseEnter={() => handleButtonHover('snorkeling')}
              onMouseLeave={handleButtonLeave}
            >
              SNORKELING
            </button>
          </Link>

          <Link to="/sailing-weather">
            <button
              style={getButtonStyle('sailing-weather')}
              onMouseEnter={() => handleButtonHover('sailing-weather')}
              onMouseLeave={handleButtonLeave}
            >
              SAILING
            </button>
          </Link>

          <Link to="/blog-index">
            <button
              style={getButtonStyle('blog')}
              onMouseEnter={() => handleButtonHover('blog')}
              onMouseLeave={handleButtonLeave}
            >
              BLOG
            </button>
          </Link>
        </div>
        <div style={rightAlignStyle}>
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
        </div>
      </div>
    </div>
  );
};

export default Header;
