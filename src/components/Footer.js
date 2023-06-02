import React from 'react'

const Footer = () => {
  const footerStyle = {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 2rem',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    color: 'white',
    height: '2rem',
    bottom: 0,
    left: 0,
    position: 'fixed',
    justifyContent: 'right',
    zIndex: 1,
    transition: '0.3s',
  };

  return (
    <div style={footerStyle}>
      <h1>Footer</h1>
    </div>
  );
};

export default Footer;
