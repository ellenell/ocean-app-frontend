import React from 'react'
import { Link } from "react-router-dom";

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
    <div style={mainDivStyle}>
      <h1>Can you surf today?</h1>
      <button type="Submit" style={buttonStyle}>Enter Location</button>
      <div>
      <Link to="/daily-weather" className="weather-link">
          Daily Weather
        </Link>
        <Link to="/weekly-weather" className="weather-link">
          Weekly Weather
        </Link>
      </div>
      </div>
  );
}

export default HomePage;
