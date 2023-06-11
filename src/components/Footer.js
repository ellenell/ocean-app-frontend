import React, { useState, useEffect } from 'react';
import '../fonts/fonts.css';

const Footer = () => {
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolledToBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight;
      setShowFooter(isScrolledToBottom);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const footerStyle = {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1px',
    paddingRight: '100px', 
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    font: '5px',
    color: 'white',
    height: '35px', 
    bottom: 0,
    left: 0,
    fontWeight: '100',
    position: 'fixed',
    justifyContent: 'right',
    zIndex: 1,
    transition: '0.3s',
    fontFamily: 'oceanName',
    visibility: showFooter ? 'visible' : 'hidden',
  };

  return (
    <div style={footerStyle}>
      <h1>By Eleanor Brow</h1>
    </div>
  );
};

export default Footer;
