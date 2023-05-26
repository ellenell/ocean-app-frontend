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
        <h2>IS IT OCEAN TIME?</h2>
        <p>What can I do in the ocean today?</p>
        <Link to="/kayaking-weather">
          <button style={buttonStyle}>KAYAKING?</button>
        </Link>
        <Link to="/surfing-weather">
          <button style={buttonStyle}>SURFING?</button>
        </Link>
        <Link to="/snorkel-weather">
          <button style={buttonStyle}>SNORKELING?</button>
        </Link>
        <Link to="/sailing-weather">
          <button style={buttonStyle}>SAILING?</button>
        </Link>
        <br>
        </br>
        <br>
        </br>
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
