import React from 'react'
import './App.css';

// Import components
import Header from './components/Header.js'
import Footer from './components/Footer.js'

// Import pages
import DailyWeather from './pages/DailyWeather.js'
import WeeklyWeather from './pages/WeeklyWeather.js'


function App() {
  // const URL = URL TO BE ADDED 

  return (
    <div className="App">
      < Header />
      < Home /> 
      < DailyWeather />
      < WeeklyWeather />
      < Footer />
    </div>
  );
}

export default App;
