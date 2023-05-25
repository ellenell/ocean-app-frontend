import React from 'react';
import { Link, Router } from 'react-router-dom';

function HomePage() {
  const mainDivStyle = {
    backgroundColor: 'lightblue',
    padding: '20px',
    marginBottom: '20px',
  };

  const buttonStyle = {
    backgroundColor: 'orange',
    color: 'white',
    padding: '10px 20px',
    fontSize: '16px',
  }

  return (
    <div className="homepage">
      <div style={mainDivStyle}>
        <h2>OCEAN TIME?</h2>
        <Link to="/kayaking-weather">
          <button style={buttonStyle}>Can I go kayaking today?</button>
        </Link>
        <Link to="/surfing-weather">
          <button style={buttonStyle}>Can I go surfing today?</button>
        </Link>
        <Link to="/daily-weather">
          <button style={buttonStyle}>What is today's overall weather?</button>
          </Link>
          <Link to="/weekly-weather">
          <button style={buttonStyle}>What is the weather forecast this week?</button>
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
