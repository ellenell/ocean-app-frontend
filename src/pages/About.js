import React, { useState } from 'react';
import underwaterImage from '../images/animals-g69a63112c_1280.jpg';
import '../fonts/fonts.css';


const mainDiv = {
  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${underwaterImage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  padding: '5px',
  
};

const AboutPage = () => {
  const containerStyle = {
    maxWidth: "600px",
    margin: "0 auto",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
    width: 'fit-content', 
    color: 'white',
    margin: '0 auto', 
    padding: '5px', 
    boxSizing: 'content-box', 
    border: '3px solid rgba(0, 0, 0)',
    backdropFilter: 'blur(5px)',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    textShadow: '1px 1px 5px rgba(0, 0, 0, 1)',
    fontFamily: 'oceanName',
  };

  const headingStyle = {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "40px",
    marginTop: '50px',
    fontFamily: 'oceanName',
  };

  const paragraphStyle = {
    fontSize: "18px",
    lineHeight: "1.5",
    marginBottom: "20px",
    fontFamily: 'oceanName',
  };

  return (
    <div style={mainDiv}> 
    <div style={containerStyle}>
      <h1 style={headingStyle}>About SeaSence</h1>
      <p style={paragraphStyle}>
        The ocean is a vast and mysterious body of water that covers more than
        70% of our planet's surface. It is home to an incredible diversity of
        marine life, ranging from tiny plankton to enormous whales. The ocean
        plays a crucial role in regulating the Earth's climate and is
        responsible for producing a significant portion of the oxygen we
        breathe. Its sheer size and depth hold countless wonders yet to be
        discovered, making it a constant source of fascination and exploration
        for scientists and adventurers alike.
      </p>

      <p style={paragraphStyle}>
        The ocean's beauty is truly awe-inspiring. Its crystal-clear turquoise
        waters, breathtaking coral reefs, and pristine sandy beaches attract
        millions of visitors every year. The rhythmic sound of crashing waves
        and the salty scent of the sea create a calming and rejuvenating
        atmosphere. Whether you're standing on a rocky cliff overlooking the
        vast expanse of the ocean or diving beneath its surface to explore
        vibrant underwater ecosystems, the ocean never fails to captivate with
        its stunning landscapes and vibrant marine biodiversity.
      </p>

      <p style={paragraphStyle}>
        However, the ocean is facing numerous challenges and threats. Pollution,
        overfishing, and climate change pose significant risks to its delicate
        balance. Plastic waste, oil spills, and chemical runoff from land-based
        activities degrade water quality and harm marine life. Rising ocean
        temperatures and acidification threaten coral reefs and other sensitive
        marine habitats. Protecting and preserving the ocean is essential for
        the well-being of our planet and future generations. Through sustainable
        practices, conservation efforts, and raising awareness, we can strive to
        ensure the health and longevity of this vital ecosystem.
      </p>
    </div>
    </div>
  );
};

export default AboutPage;
