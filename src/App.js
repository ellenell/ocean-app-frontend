import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

// Import components
import Header from './components/Header.js'
import Footer from './components/Footer.js'

// Import pages
import DailyWeather from './pages/DailyWeather.js';
import WeeklyWeather from './pages/WeeklyWeather.js';
import HomePage from './pages/HomePage.js'
import SurfingWeather from './pages/SurfingWeather.js'
import KayakingWeather from './pages/KayakingWeather.js'
import SnorkelWeather from './pages/SnorkelWeather.js'
import SailingWeather from './pages/SailingWeather.js';

// Import user pages
import SignIn from './pages/User Pages/SignIn.js';


function App() {
  const URL = `http://localhost:4000/`

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/daily-weather" element={<DailyWeather />} />
          <Route path="/weekly-weather" element={<WeeklyWeather />} />
          <Route path="/surfing-weather" element={<SurfingWeather />} />
          <Route path="/kayaking-weather" element={<KayakingWeather />} />
          <Route path="/snorkel-weather" element={<SnorkelWeather />} />
          <Route path="/sailing-weather" element={<SailingWeather />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}


export default App;
