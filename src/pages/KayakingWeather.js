import React, { useState } from 'react';

const KayakingWeather = () => {
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

  let kayakingStatus = '';
  if (weatherData && weatherData.wind.speed > 10) {
    kayakingStatus = (
      <>
        <h2>NO</h2> 
          <h3>It is not safe to go kayaking today</h3>
      </>
    );
  } else if (weatherData && weatherData.wind.speed <= 10) {
    kayakingStatus = (
      <>
      <h2>YES</h2> 
        <h3>It is safe to go kayaking today</h3>
    </>
  );
  
  }

  return (
    <div className="KayakingWeather">
      <h2>Can You Go Kayaking Today?</h2>
      <div className="KayakDiv">
        <form onSubmit={submitLocation}>
          <input
            type="text"
            value={location}
            onChange={inputLocation}
            placeholder="Location"
          />
          <button type="submit">Submit</button>
        </form>
        {weatherData && (
          <div>
            {kayakingStatus}
            <h2>Weather Conditions in {weatherData.name}: </h2>
            <p>Wind Speed: {weatherData.wind.speed} mph</p>
            <p>Wind Direction: {weatherData.wind.deg}°</p>
            <p>Wind Gust: {weatherData.wind.gust} mph</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default KayakingWeather;
