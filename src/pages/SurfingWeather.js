import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const mainDivStyle = {
  // backgroundImage: `url(${underwaterImage})`,
  backgroundColor: 'grey',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  padding: '20px',
}

const titleStyle = {
  fontSize: '50px',
  fontWeight: 'bold',
  marginBottom: '20px',
  color: 'white',
  textShadow: '5px 5px 5px rgba(0, 0, 0, 0.5)',
}

const paragraphStyle = {
  fontSize: '30px',
  color: 'white',
  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
}

const buttonStyle = {
  backgroundColor: 'blue',
  color: 'white',
  padding: '10px 20px',
  fontSize: '16px',
  marginBottom: '10px',
}

const decisionStyle = {
  fontSize: '70px',
  fontWeight: 'bold',
  marginBottom: '1px',
  color: 'white',
  textShadow: '5px 5px 5px rgba(0, 0, 0, 0.5)',
}

const explanationStyle = {
  fontSize: '50px',
  color: 'white',
  textShadow: '2px 2px 5px rgba(0, 0, 0, 0.5)',
}

const chartContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  border: '1px solid white',
  padding: '10px',
}

const tableStyle = {
  borderCollapse: 'collapse',
  width: '100%',
}

const thStyle = {
  borderBottom: '2px solid white',
  padding: '8px',
  textAlign: 'left',
}

const tdStyle = {
  borderBottom: '1px solid white',
  padding: '8px',
  textAlign: 'left',
}

const formStyle = {
  backgroundColor: 'black',
  color: 'white',
  fontSize: '20px',
  fontColor: 'white',
  width: '200px',
  height: '.5px',
  margin: '0 auto',
  padding: '20px 40px 20px',
  // boxShadow: '1px 1px 3px'
  fontWeight: 'bold',
  letterSpacing: '.5px',
}

const submitButton = {
  backgroundColor: 'black',
  color: 'white',
  fontSize: '20px',
  fontColor: 'white',
  width: '285px',
  height: '15px',
  padding: '15px 10px 20px',
  margin: '0 auto',
  cursor: 'pointer',
  transition: 'transform 0.3s ease-in-out',
  fontWeight: 'bold',
  letterSpacing: '.5px',
}



const hoverStyles = {
  transform: 'scale(0.9)',
  opacity: 0.8,
};


const SurfingWeather = () => {
  const [location, setLocation] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [hoveredButton, setHoveredButton] = useState(false); 

  const API_KEY = '03811f078e215996083861bf2f7eabf2';

  const handleButtonHover = () => {
    setHoveredButton(true);
  }
  
  const handleButtonLeave = () => {
    setHoveredButton(false);
  }

  const inputLocation = (event) => {
    setLocation(event.target.value);
  };

  const submitLocation = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=${API_KEY}`
      );
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.error(error);
    }
  };

  let surfingStatus = '';
  if (weatherData && weatherData.wind.speed > 20) {
    surfingStatus = (
      <>
        <h2 style={decisionStyle}>NO</h2>
        <h3 style={explanationStyle}>It is not safe to go surfing today</h3>
      </>
    );
  } else if (weatherData && weatherData.wind.speed <= 20) {
    surfingStatus = (
      <>
        <h2 style={decisionStyle}>YES</h2>
        <h3 style={explanationStyle}>It is safe to go surfing today</h3>
      </>
    );
  }

    return (
      <div className="SurfingWeather" style={mainDivStyle}>
      {weatherData ? (
        <>
          {surfingStatus}
          <h2 style={titleStyle}>Weather Conditions in {weatherData.name}:</h2>
          <div style={chartContainerStyle}>
            <table style={tableStyle}>
              <tbody>
                <tr>
                  <td style={tdStyle}>Wind Speed</td>
                  <td style={tdStyle}>{weatherData.wind.speed} mph</td>
                </tr>
                <tr>
                  <td style={tdStyle}>Wind Direction</td>
                  <td style={tdStyle}>{weatherData.wind.deg}°</td>
                </tr>
                <tr>
                  <td style={tdStyle}>Wind Gust</td>
                  <td style={tdStyle}>{weatherData.wind.gust} mph</td>
                </tr>
              </tbody>
            </table>
          </div>
        </>
      ) : (
          <>
            <h2 style={titleStyle}>Can I Go Surfing Today?</h2>
            <div className="SurfingDiv">
              <form onSubmit={submitLocation}>
                <input
                  style={formStyle}
                  type="text"
                  value={location}
                  onChange={inputLocation}
                  placeholder="Enter Your Location"
                />
                 <br />
                 <br />
                 <button
                  style={hoveredButton ? { ...submitButton, ...hoverStyles } : submitButton}
                  type="submit"
                  onMouseEnter={handleButtonHover}
                  onMouseLeave={handleButtonLeave}
                  >GO</button>
              </form>
            </div>
          </>
        )}
      </div>
    );
};

export default SurfingWeather;
