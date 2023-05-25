import React, { useState } from 'react';

const DailyWeather = () => {
  const [location, setLocation] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const API_KEY = '03811f078e215996083861bf2f7eabf2';

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

  const formatTime = (timestamp) => {
    const date = new Date(timestamp * 1000);
    const options = { hour: '2-digit', minute: '2-digit', hour12: true };
    return date.toLocaleTimeString(undefined, options);
  };

  return (
    <div className="Header">
      <h2>Today's Weather</h2>
      <div className="Weatherform">
        <form onSubmit={submitLocation}>
          <input
            type="text"
            value={location}
            onChange={inputLocation}
            placeholder="Location"
          />
          <button type="submit">See Weather</button>
        </form>
        {weatherData && (
          <div>
            <h2>{weatherData.name} Weather is: </h2>
            <p>Temperature: {Math.round(weatherData.main.temp)}°F</p>
            <p>Feels Like: {Math.round(weatherData.main.feels_like)}°F</p>
            <p>Min Temperature: {Math.round(weatherData.main.temp_min)}°F</p>
            <p>Max Temperature: {Math.round(weatherData.main.temp_max)}°F</p>
            <p>Pressure: {weatherData.main.pressure} hPa</p>
            <p>Humidity: {weatherData.main.humidity}%</p>
            <p>Wind Speed: {weatherData.wind.speed} mph</p>
            <p>Wind Direction: {weatherData.wind.deg}°</p>
            <p>Cloud Coverage: {weatherData.clouds.all}%</p>
            {weatherData.rain && <p>Rain Volume: {weatherData.rain['1h']} in</p>}
            {weatherData.snow && <p>Snow Volume: {weatherData.snow['1h']} in</p>}
            <p>Visibility: {weatherData.visibility / 1609} miles</p>
            <p>Country: {weatherData.sys.country}</p>
            <p>Sunrise: {formatTime(weatherData.sys.sunrise)}</p>
            <p>Sunset: {formatTime(weatherData.sys.sunset)}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DailyWeather;
