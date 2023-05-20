import React from 'react'
import './App.css';

// Import components
import Header from './components/Header.js'
import Footer from './components/Footer.js'

// Import pages
import Home from './pages/Home.js'
import DailyWeather from './pages/DailyWeather.js'


function App() {
  return (
    <div className="App">
      < Header />
      < Home /> 
      < DailyWeather />
      < Footer />
    </div>
  );
}

export default App;
