import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import mainImage from '../images/ingrid-salmanca-Y6OKbIFe4Z0-unsplash.jpg';

import '../fonts/fonts.css';

const mainDivStyle = {
  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.3)), url(${mainImage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  padding: '20px',
  letterSpacing: '1px',
};

const titleStyle = {
  fontSize: '50px',
  fontWeight: 'bold',
  marginBottom: '45px',
  color: 'white',
  textShadow: '4px 1px 3px rgba(0, 0, 0, 0.5)',
  letterSpacing: '1px',
};

const titleStyle3 = {
  fontSize: '30px',
  fontWeight: 'bold',
  marginBottom: '10px',
  marginTop: '10px',
  color: 'white',
  textShadow: '4px 1px 3px rgba(0, 0, 0, 0.5)',
  textAlign: 'center',
  letterSpacing: '1px',
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

const decisionStyle = {
  fontSize: '70px',
  fontWeight: 'bold',
  marginBottom: '.1px',
  padding: '1px',
  color: 'white',
  textShadow: '5px 5px 5px rgba(0, 0, 0, 0.5)',
  letterSpacing: '1px',
};

const explanationStyle = {
  fontSize: '50px',
  color: 'white',
  textShadow: '2px 2px 5px rgba(0, 0, 0, 0.5)',
  letterSpacing: '1px',
};

const chartContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  border: '1px solid white',
  padding: '10px',
  textShadow: '4px 1px 3px rgba(0, 0, 0, 0.5)',
  letterSpacing: '1px',
};

const tableStyle = {
  borderCollapse: 'collapse',
  width: '100%',
  textAlign: 'center',
  textShadow: '4px 1px 3px rgba(0, 0, 0, 0.5)',
};

const thStyle = {
  borderBottom: '2px solid white',
  padding: '8px',
  textAlign: 'center',
};

const tdStyle = {
  borderBottom: '1px solid white',
  padding: '8px',
  textAlign: 'center',
  color: 'white',
  textShadow: '4px 1px 3px rgba(0, 0, 0, 0.5)',
  letterSpacing: '1px',
};

const formStyle = {
  backgroundColor: 'black',
  color: 'white',
  fontSize: '25px',
  width: '250px',
  height: '40px',
  margin: '0 auto',
  padding: '10px 20px',
  fontWeight: 'bold',
  letterSpacing: '.5px',
  border: 'none',
  borderRadius: '5px',
  letterSpacing: '1px',
  boxShadow: '1px 1px 3px rgba(0, 0, 0, 0.5)',
  '&::placeholder': {
    color: 'red',
    
  },
};

const submitButton = {
  backgroundColor: '#1f0083',
  color: 'white',
  fontSize: '25px',
  width: '80px',
  height: '60px',
  margin: '0 auto',
  padding: '10px 20px',
  cursor: 'pointer',
  transition: 'transform 0.3s ease-in-out',
  fontWeight: 'bold',
  letterSpacing: '.5px',
  border: 'none',
  borderRadius: '30px',
  boxShadow: '1px 1px 3px rgba(0, 0, 0, 0.5)',
  marginLeft: '30px',
  letterSpacing: '1px',
  textShadow: '1px 1px 5px rgba(0, 0, 0, 0.5)',
};

const refreshButtonStyle = {
  backgroundColor: 'rgba(0, 0, 0, 0.7)', 
  color: 'white',
  padding: '5px 5px',
  marginTop: '50px',
  fontSize: '15px',
  marginBottom: '10px',
  display: 'inline-block',
  width: '200px',
  textAlign: 'center',
  margin: '20px',
  transition: 'transform 0.3s',
  textShadow: '5px 5px 5px rgba(0, 0, 0,)',
  opacity: 0.8,
  letterSpacing: '1px',
};


const hoverStyles = {
  transform: 'scale(0.9)',
  opacity: 0.8,
};

const SailingWeather = () => {
  const [location, setLocation] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [hoveredButton, setHoveredButton] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const API_KEY = '03811f078e215996083861bf2f7eabf2';

  const handleButtonHover = () => {
    setHoveredButton(true);
  };

  const handleButtonLeave = () => {
    setHoveredButton(false);
  };

  const inputLocation = (event) => {
    setLocation(event.target.value);
  };

  const convertMetersToFeet = (meters) => {
    const feet = meters * 3.281;
    return Math.round(feet);
  };

  const submitLocation = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=${API_KEY}`
      );
      const data = await response.json();
      setWeatherData(data);
      setSubmitted(true);
    } catch (error) {
      console.error(error);
    }
  };

  const handleRefresh = () => {
    window.location.reload();
  };

  let sailingStatus = '';
  if (weatherData && weatherData.wind.speed > 20) {
    sailingStatus = (
      <>
        <h2 style={decisionStyle}>NO</h2>
        <h3 style={explanationStyle}>It is not safe to go sailing today</h3>
      </>
    );
  } else if (weatherData && weatherData.wind.speed <= 20) {
    sailingStatus = (
      <>
        <h2 style={decisionStyle}>YES</h2>
        <h3 style={explanationStyle}>It is safe to go sailing today </h3>
      </>
    );
  }

    return (
      <div className="SailingWeather" style={mainDivStyle}>
      {weatherData ? (
        <>
          {sailingStatus}

          <div style={chartContainerStyle}>
            <table style={tableStyle}>
              <tbody>
              <tr>
              <td style={{ ...tdStyle, textAlign: 'center' }} colSpan={2}>
          <h3 style={titleStyle3}>Weather Conditions in {weatherData.name}:</h3>
        </td>
              </tr>
                <tr>
                <td style={tdStyle}>Weather Description</td>
                <td style={tdStyle}>{weatherData.weather[0].description}</td>
              </tr>
                <tr>
                  <td style={tdStyle}>Wind Speed</td>
                  <td style={tdStyle}>{weatherData.wind.speed} mph</td>
                </tr>
                <tr>
                  <td style={tdStyle}>Wind Direction</td>
                  <td style={tdStyle}>{weatherData.wind.deg}°</td>
                </tr>
                <tr>
                <td style={tdStyle}>Temperature</td>
                <td style={tdStyle}>{weatherData.main.temp} °F</td>
              </tr>
              <tr>
                <td style={tdStyle}>Visibility</td>
                <td style={tdStyle}>{convertMetersToFeet(weatherData.visibility)} ft</td>
              </tr>
              </tbody>
            </table>
          </div>
        </>
      ) : (
        <>
          <h1 style={titleStyle}>Can I Go Sailing Today?</h1>
          <form onSubmit={submitLocation}>
            <input
              type="text"
              placeholder="Enter Location"
              style={formStyle}
              onChange={inputLocation}
            />
            <button
              type="submit"
              style={{ ...submitButton, ...(hoveredButton ? hoverStyles : {}) }}
              onMouseEnter={handleButtonHover}
              onMouseLeave={handleButtonLeave}
            >
              Go
            </button>
          </form>
        </>
      )}

      {weatherData && (
        <button style={refreshButtonStyle} onClick={handleRefresh}>
          Check Another Location 
        </button>
      )}

    </div>
  );
};

export default SailingWeather;
