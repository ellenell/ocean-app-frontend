import React from 'react';
import { Link } from 'react-router-dom';

import underwaterImage from '../images/underwater-2615376_1280.jpg';

const mainDivStyle = {
  backgroundImage: `url(${underwaterImage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  padding: '20px',
};

const titleStyle = {
  fontSize: '60px',
  fontWeight: 'bold',
  marginBottom: '20px',
  color: 'white',
  textShadow: '5px 5px 5px rgba(0, 0, 0, 0.5)',
};

const paragraphStyle = {
  fontSize: '30px',
  color: 'white',
  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
};

const buttonStyle = {
  backgroundColor: 'blue',
  color: 'white',
  padding: '10px 20px',
  fontSize: '16px',
  marginBottom: '10px',
};

function HomePage() {


  return (
    <div className="homepage" style={mainDivStyle}>
      <div>
        <h2 style={titleStyle}>SeaSense</h2>
        <p style={paragraphStyle}>What can I do in the ocean today?</p>
        <Link to="/surfing-weather">
          <button style={buttonStyle}>SURFING?</button>
        </Link>
        <Link to="/kayaking-weather">
          <button style={buttonStyle}>KAYAKING?</button>
        </Link>
        <Link to="/snorkel-weather">
          <button style={buttonStyle}>SNORKELING?</button>
        </Link>
        <Link to="/sailing-weather">
          <button style={buttonStyle}>SAILING?</button>
        </Link>
        <br />
        <br />
        <Link to="/daily-weather">
          <button style={buttonStyle}>TODAY'S OVERALL FORECAST</button>
        </Link>
        <Link to="/weekly-weather">
          <button style={buttonStyle}>WEEKLY FORECAST</button>
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
