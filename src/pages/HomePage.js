import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import video from '../images/waves.mp4';
import '../fonts/fonts.css';

function HomePage() {
  const [hoveredButton, setHoveredButton] = useState(null);

  const mainDivStyle = {
    fontFamily: 'oceanName',
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    letterSpacing: '1px',
  };

  const videoStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    minWidth: '100%',
    minHeight: '100%',
    width: 'auto',
    height: 'auto',
    zIndex: -1,
  };

  const contentStyle = {
    position: 'relative',
    zIndex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    padding: '20px',
    color: 'white',
    textShadow: '2px 2px 5px rgba(0, 0, 0)',
    fontFamily: 'oceanName',
  };

  const buttonStyle = {
    backgroundColor: 'rgba(0, 0, 0, 0.7)', 
    color: 'white',
    padding: '10px 10px',
    fontSize: '18px',
    marginBottom: '10px',
    display: 'inline-block',
    width: '200px',
    textAlign: 'center',
    margin: '20px',
    transition: 'transform 0.3s',
    textShadow: '5px 5px 1px rgba(0, 0, 0)',
    letterSpacing: '1px',
    fontFamily: 'oceanName',
  };

  const hoverButtonStyle = {
    ...buttonStyle,
    transform: 'scale(0.9)',
    opacity: 0.8,
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
    textShadow: '5px 5px 1px rgba(0, 0, 0)',

  };

  const h2Style = {
    fontSize: '70px',
    fontWeight: 'bold',
    marginBottom: '20px',
    color: 'white',
    textShadow: '2px 2px 3px rgba(0, 0, 0)' ,
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  };

  const pStyle = {
    fontSize: '30px',
    color: 'white',
    textShadow: '1px 1px 5px rgba(0, 0, 0)',
  };

  const handleMouseEnter = (buttonName) => {
    setHoveredButton(buttonName);
  };

  const handleMouseLeave = () => {
    setHoveredButton(null);
  };

  return (
    <div className="homepage" style={mainDivStyle}>
      <video autoPlay muted loop style={videoStyle}>
        <source src={video} type="video/mp4" />
      </video>
      <div style={contentStyle}>
        <h2 style={h2Style}>SeaSense</h2>
        <p style={pStyle}>Choose Your Activity Below</p>
        <div>
        <Link to="/surfing-weather">
            <button
              style={hoveredButton === 'surfing' ? hoverButtonStyle : buttonStyle}
              onMouseEnter={() => handleMouseEnter('surfing')}
              onMouseLeave={handleMouseLeave}
            >
              SURFING
            </button>
          </Link>
          <Link to="/kayaking-weather">
            <button
              style={hoveredButton === 'kayaking' ? hoverButtonStyle : buttonStyle}
              onMouseEnter={() => handleMouseEnter('kayaking')}
              onMouseLeave={handleMouseLeave}
            >
              KAYAKING
            </button>
          </Link>
          <Link to="/snorkel-weather">
            <button
              style={hoveredButton === 'snorkeling' ? hoverButtonStyle : buttonStyle}
              onMouseEnter={() => handleMouseEnter('snorkeling')}
              onMouseLeave={handleMouseLeave}
            >
              SNORKELING
            </button>
          </Link>
          <Link to="/sailing-weather">
            <button
              style={hoveredButton === 'sailing' ? hoverButtonStyle : buttonStyle}
              onMouseEnter={() => handleMouseEnter('sailing')}
              onMouseLeave={handleMouseLeave}
            >
              SAILING
            </button>
          </Link>
        </div>
        <br />
        <br />
        <div>
          <Link to="/daily-weather">
          <button
              style={hoveredButton === 'daily' ? hoverButtonStyle : buttonStyle}
              onMouseEnter={() => handleMouseEnter('daily')}
              onMouseLeave={handleMouseLeave}
            >TODAY'S OVERALL FORECAST</button>
          </Link>
          <Link to="/weekly-weather">
          <button
              style={hoveredButton === 'weekly' ? hoverButtonStyle : buttonStyle}
              onMouseEnter={() => handleMouseEnter('weekly')}
              onMouseLeave={handleMouseLeave}
            >WEEKLY FORECAST</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
