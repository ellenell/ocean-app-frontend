import React from 'react';
import { Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Import components
import Header from './components/Header.js'
import Footer from './components/Footer.js'

// Import pages
import DailyWeather from './pages/DailyWeather.js';
import WeeklyWeather from './pages/WeeklyWeather.js';
import HomePage from './pages/HomePage.js'


function App() {
  // const URL = URL TO BE ADDED 

  return (
    <div className="App">
      < Header />
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/daily-weather" element={<DailyWeather />} />
        <Route path="/weekly-weather" element={<WeeklyWeather />} />
      </Routes> 
      < Footer />
    </div>
  );
}

export default App;
