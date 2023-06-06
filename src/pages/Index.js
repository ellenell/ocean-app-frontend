import React from 'react';
import { Link } from 'react-router-dom';
import underwaterImage from '../images/ivan-bandura-2FEE6BR343k-unsplash.jpg';

const colorPrimary = '#05445E';
const linkColor = '#D4F1F4'


const mainDiv = {
  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.3)), url(${underwaterImage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  padding: '20px',
};

const titleStyle = {
  fontSize: '24px',
  fontWeight: 'bold',
  marginBottom: '10px',
  marginTop: '50px',
  textDecoration: 'none',
};

const listItemStyle = {
  position: 'relative',
  color: linkColor,
  paddingLeft: '0px', // Adjust the padding value as needed
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
  width: '15%',
  height: 'auto',
  marginBottom: '10px',
};

const h2Div = {
  color: linkColor,
  fontSize: '60px',
  fontWeight: 'bold',
  marginBottom: '20px',
  textShadow: '5px 5px 5px rgba(0, 0, 0, 0.5)',
  textDecoration: 'underline'
}

const Index = (props) => {
  const loaded = () => {
    return (
      <div style={mainDiv}> 
      <h2 style={h2Div}> YOUR OCEAN BLOG</h2>
      <ul>
        {props.blog.map((blog) => (
          <li key={blog._id} className="blog" style={listItemStyle}>
            <span style={bulletStyle}></span>
            <Link to={`/blog/${blog._id}`}>
              <h1 style={titleStyle}>{blog.name}</h1>
            </Link>
            <h3>{formatDate(blog.by)}</h3>
            <h3>{formatDate(blog.date)}</h3>
            <img src={blog.image} alt={blog.name} style={imageStyle} />
            <h3>{blog.title}</h3>
          </li>
        ))}
      </ul>
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
