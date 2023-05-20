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
          <p>Temperature: {Math.round(weatherData.main.temp)}° F</p>
          <p>Description: {weatherData.weather[0].description}</p>
        </div>
      )}
    </div>

        
      </div>


  );
}

export default DailyWeather;
