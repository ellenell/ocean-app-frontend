import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import underwaterImage from '../images/ivan-bandura-2FEE6BR343k-unsplash.jpg';

import '../fonts/fonts.css';

const colorPrimary = '#05445E';
const linkColor = '#D4F1F4'


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
  fontFamily: 'oceanName',
  
};

const titleStyle = {
  fontSize: '24px',
  fontWeight: 'bold',
  marginBottom: '10px',
  marginTop: '30px',
  textDecoration: 'none',
  color: 'white',
  textShadow: '3px 5px 5px rgba(0, 0, 0)',
  letterSpacing: '1.5px',
};

const linkStyle = {
  textDecoration: 'none',
};

const listItemStyle = {
  position: 'relative',
  color: 'white',
  listStyleType: 'none',
};

const bulletStyle = {
  position: 'absolute',
  top: '50%',
  left: '0',
  transform: 'translateY(-50%)',
  content: '""',
  width: '8px',
  height: '8px',
  borderRadius: '50%',
  backgroundColor: 'red',
};

const subtitleStyle = {
  fontSize: '16px',
  fontStyle: 'italic',
  marginBottom: '5px',
};

const imageStyle = {
  width: '40%',
  height: 'auto',
  marginBottom: '10px',
};

const h2Div = {
  color: 'white',
  fontSize: '70px',
  fontWeight: 'bold',
  marginBottom: '20px',
  textDecoration: 'underline',
  textShadow: '1px 3px 5px rgba(0, 0, 0)',
  letterSpacing: '1.5px',
}

const lineStyle = {
  borderBottom: '3px dashed white',
};

const createButton = {
  color: 'white',
  fontSize: '25px',
  marginBottom: '10px',
  display: 'inline-block',
  margin: '20px',
  transition: 'transform 0.3s',
  textShadow: '1px 5px 5px rgba(0, 0, 0, 1)',
  letterSpacing: '1px',
  textDecoration: 'none'
};

const buttonStyle = {
  backgroundColor: 'rgba(0, 0, 0, 0.7)',
  color: 'white',
  padding: '5px 5px',
  fontSize: '20px',
  marginBottom: '5px',
  display: 'inline-block',
  width: '225px',
  textAlign: 'center',
  margin: '10px',
  transition: 'transform 0.3s',
  textShadow: '1px 5px 5px rgba(0, 0, 0)',
  letterSpacing: '1.5px',
};

const hoverButtonStyle = {
  ...buttonStyle,
  transform: 'scale(0.9)',
  opacity: 0.8,
  backgroundColor: 'rgba(0, 0, 0, 0.9)',
};


const Index = (props) => {

  const [hoveredButton, setHoveredButton] = useState(null);
  const loaded = () => {


    const handleMouseEnter = (buttonName) => {
      setHoveredButton(buttonName);
    };
    
    const handleMouseLeave = () => {
      setHoveredButton(null);
    };
    return (
      <div style={mainDiv}> 
      <h2 style={h2Div}> YOUR OCEAN BLOG</h2>
      <ul>
        {props.blog.map((blog) => (
          <li key={blog._id} className="blog" style={listItemStyle}>
            <span></span>
            <Link to={`/blog/${blog._id}`} style={linkStyle}>
              <h1 style={titleStyle}
                onMouseEnter={(e) => (e.target.style.color = linkColor)}
                onMouseLeave={(e) => (e.target.style.color = 'white')}
              >{blog.name}</h1>
            </Link>
            <h3>{formatDate(blog.by)}</h3>
            <h3>{formatDate(blog.date)}</h3>
            <img src={blog.image} alt={blog.name} style={imageStyle} />
            <h3>{blog.title}</h3>
            <div style={lineStyle}></div>
          </li>
        ))}
      </ul>
      <div style={createButton}> 
      <Link to="/blog/create">
          <button
            style={hoveredButton === 'create' ? hoverButtonStyle : buttonStyle}
            onMouseEnter={() => handleMouseEnter('create')}
            onMouseLeave={handleMouseLeave}
          >
            Create a New Blog
          </button>
        </Link>
      </div>
      </div>
    );
  };

  const loading = () => {
    return <h1>Loading</h1>;
  };

  const formatDate = (dateString) => {
    const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };

    const date = new Date(dateString);
    const formattedDate = isNaN(date) ? '' : date.toLocaleDateString('en-US', options);
    return formattedDate;
  };

  return props.blog ? loaded() : loading();
};

export default Index;
