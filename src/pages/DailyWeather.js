import React, { useState } from 'react'


const DailyWeather = () => {
  const [location, setLocation] = useState('')
  const [weatherData, setWeatherData]
 = useState(null)
  const API_KEY = '03811f078e215996083861bf2f7eabf2'

  const inputLocation = (event) => {
    setLocation(event.target.value);
  };

  const submitLocation = (event) => {
    event.preventDefault();
    fetchDailyWeather();
  };

  const fetchDailyWeather = async () => {
    try {
      const response = await fetch (
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=${API_KEY}`
        );
      const data = await response.json();
      setWeatherData(data);
      } 
      catch (error) {
        
      console.error(error);

      }
    }

    const getCurrentDate = () => {
      const date = new Date();
      const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
      return date.toLocaleDateString(undefined, options);
    };

//  useEffect(() => {
//   const fetchWeatherData = async () => {
//     const options = {
//       method: "GET",
//       header: {

//       }
//     }
//   }
//  })
  return (
    <div className="Header">
      <div className ="Weatherform">
      <h1>Todays Weather</h1>
        <form onSubmit={submitLocation}>
          <input
            type="text"
            value={location}
            onChange={inputLocation}
            placeholder="Location"
        />
        <button type="Submit">See Weather</button>
        </form>
        {weatherData && (
        <div>
          <h2>Weather in {weatherData.name}</h2>
          <p>{getCurrentDate()}</p>
          <p>Temperature: {Math.round(weatherData.main.temp)}°F</p>
          <p>Feels Like: {Math.round(weatherData.main.feels_like)}°F</p>
            <p>Min Temperature: {Math.round(weatherData.main.temp_min)}°F</p>
            <p>Max Temperature: {Math.round(weatherData.main.temp_max)}°F</p>

          </div>
      )}
    </div>

        
      </div>


  );
}

export default DailyWeather;
