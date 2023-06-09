import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import backgroundImage from '../images/ivan-bandura-2FEE6BR343k-unsplash.jpg';

const colorPrimary = '#05445E';
const linkColor = '#75E6DA';

const mainDiv = {
  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${backgroundImage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  // padding: '5px',
  color: 'white',
};

const h1Style = {
  fontSize: '60px',
  // fontWeight: 'bold',
  marginTop: '100px',
  textDecoration: 'none',
  textShadow: '1px 1px 5px rgba(0, 0, 0, 1)',
  letterSpacing: '1px',
  justifyContent: 'left',
};

const imageStyle = {
  width: '20%',
  height: 'auto',
  marginBottom: '10px',
};

const h2Style = {
  color: 'white',
  fontSize: '20px',
  textShadow: '1px 1px 5px rgba(0, 0, 0, 1)',
  letterSpacing: '1px',
  paddingLeft: '400px',
  paddingRight: '400px',
  // marginRight: '100px',
  // marginLeft: '100px',
  lineSpacing: '50px'
};

const linkDiv = {
  color: 'white',
  // padding: '10px 10px',
  fontSize: '18px',
  marginBottom: '10px',
  display: 'inline-block',
  margin: '20px',
  transition: 'transform 0.3s',
  textShadow: '1px 1px 1px rgba(0, 0, 0, 1)',
  letterSpacing: '1px',
  textDecoration: 'none'
};

const buttonStyle = {
  backgroundColor: 'rgba(0, 0, 0, 0.7)',
  color: 'white',
  padding: '5px 5px',
  fontSize: '14px',
  marginBottom: '5px',
  display: 'inline-block',
  width: '180px',
  textAlign: 'center',
  margin: '10px',
  transition: 'transform 0.3s',
  textShadow: '1px 1px 1px rgba(0, 0, 0)',
  letterSpacing: '1.5px',
};

const hoverButtonStyle = {
  ...buttonStyle,
  transform: 'scale(0.9)',
  opacity: 0.8,
  backgroundColor: 'rgba(0, 0, 0, 0.9)',
};

const borderBlog = {
  width: 'fit-content', 
  // margin: '0 auto', 
  // padding: '5px', 
  boxSizing: 'content-box', 
  border: '3px solid rgba(0, 0, 0)',
  backdropFilter: 'blur(5px)',
  backgroundColor: 'rgba(0, 0, 0, 0.3)',
};

const Show = (props) => {
  const [hoveredButton, setHoveredButton] = useState(null);
  const params = useParams();
  const id = params.id;
  const blog = props.blog;
  const blogs = blog && blog.find((p) => p._id === id);

  if (!blogs) {
    return <p>Loading</p>;
  }

  const handleDelete = () => {
    // trying to send a DELETE request to your backend API
    fetch(`http://localhost:4000/blog/${blogs._id}`, {
      method: 'DELETE'
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // Redirect to other page
        window.location.href = '/blog-index';
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const optionsForDate = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  };
  const formattedDate = new Date(blogs.date).toLocaleDateString("en-US", optionsForDate);

  const handleMouseEnter = (buttonName) => {
    setHoveredButton(buttonName);
  };

  const handleMouseLeave = () => {
    setHoveredButton(null);
  };

  return (
    <div style={mainDiv} className="blogs">
      <div style={borderBlog}>
      <h1 style={h1Style}>{blogs.name}</h1>
      <img style={imageStyle} src={blogs.image} alt={blogs.name} />
      <br />
      <h2 style={h2Style}>Date: {formattedDate}</h2>
      <h2 style={h2Style}>Author: {blogs.by}</h2>
      <h2 style={h2Style}>{blogs.description}</h2>
      </div>
      <br />
      <div style={linkDiv}>
        <Link to={`/blog/edit/${blogs._id}`}>
          <button
            style={hoveredButton === 'edit' ? hoverButtonStyle : buttonStyle}
            onMouseEnter={() => handleMouseEnter('edit')}
            onMouseLeave={handleMouseLeave}
          >
            Edit This Blog
          </button>
        </Link>
        <Link to="/blog/create">
          <button
            style={hoveredButton === 'create' ? hoverButtonStyle : buttonStyle}
            onMouseEnter={() => handleMouseEnter('create')}
            onMouseLeave={handleMouseLeave}
          >
            Create a New Blog
          </button>
        </Link>
        <br />
        <button
          onClick={handleDelete}
          style={hoveredButton === 'delete' ? hoverButtonStyle : buttonStyle}
          onMouseEnter={() => handleMouseEnter('delete')}
          onMouseLeave={handleMouseLeave}
        >
          Delete This Blog
        </button>
      </div>
    </div>
  );
};

export default Show;
