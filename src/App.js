import React, { useEffect, useState } from 'react';
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
import Register from './pages/User Pages/Register.js';
import Index from "./pages/Index.js";
import Create from "./pages/Create.js";
import Show from "./pages/Show.js";
import Edit from "./pages/Edit.js"

import About from "./pages/About.js"

function App() {
  const URL = `http://localhost:4000/`

  const [blog, setBlog] = useState(null);

  const getBlog = async () => {
    const response = await fetch(`${URL}blog`);
    const data = await response.json();
    console.log(data.data)
    setBlog(data.data);
  };

  const createBlog = async (newBlog) => {
    const response = await fetch(`${URL}blog/create`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newBlog),
    });
    if (response.ok) {
      getBlog();
    } else {
      console.error("Failed to create blog");
    }
  };

  useEffect(() => {
    getBlog();
  }, []);

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
          <Route path="/snorkeling-weather" element={<SnorkelWeather />} />
          <Route path="/sailing-weather" element={<SailingWeather />} />
          {/* <Route path="/signin" element={<SignIn />} />
          <Route path="/register" element={<Register />} /> */}
          <Route path="/blog-index" element={<Index blog={blog} createBlog={createBlog} />} />
          <Route path="/blog/create" element={<Create createBlog={createBlog} />} />
          <Route path="/blog/:id" element={<Show blog={blog} />} />
          <Route path="/blog/edit/:id" element={<Edit blog={blog} />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
