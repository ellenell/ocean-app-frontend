import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import backgroundImage from '../images/ivan-bandura-2FEE6BR343k-unsplash.jpg';


const inputStyle = {
  marginBottom: "10px",
  padding: "5px",
  width: "50%",
  fontSize: "16px",
  borderRadius: "3px",
  border: "1px solid #ccc",
  textAlign: "left", 
  verticalAlign: "top", 
  
};

const borderCreate = {
  width: 'fit-content', 
  margin: '0 auto', 
  padding: '5px', 
  boxSizing: 'content-box', 
  border: '3px solid rgba(0, 0, 0)',
  backdropFilter: 'blur(5px)',
  backgroundColor: 'rgba(0, 0, 0, 0.3)',
};

const descriptionStyle = {
  marginBottom: "10px",
  width: "50%",
  height: '70px',
  fontSize: "16px",
  borderRadius: "3px",
  border: "1px solid #ccc",
  verticalAlign: "top", 
};

const selectStyle = {
  marginBottom: "10px",
  padding: "5px",
  width: "51%",
  fontSize: "16px",
  borderRadius: "3px",
  border: "1px solid #ccc",
  backgroundColor: "#fff",
  verticalAlign: "top", 
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

const h1Style = {
  color: 'white',
  fontSize: '50px',
  fontWeight: 'bold',
  marginTop: '60px',
  marginBottom: '20px',
  textDecoration: 'none',
  textShadow: '1px 3px 5px rgba(0, 0, 0)',
  letterSpacing: '1.5px',
}

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

const Edit = () => {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    date: '',
    by: '',
    name: '',
    image: '',
    description: '',
    typeOfActivity: ''
  });

  useEffect(() => {
    // Fetch the existing blog post data from the backend API
    fetch(`http://localhost:4000/blog/edit/${id}`)
      .then(response => response.json())
      .then(data => {
        setFormData(data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [id]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send the updated blog post data to the backend API
    fetch(`http://localhost:4000/blog/edit/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        // Redirect to the show page for the updated blog post
        window.location.href = `/blog/${id}`;
      })
      .catch(error => {
        console.log(error);
      });
      

    }


   

  return (
    <div style={mainDiv}>
    <div style={borderCreate}>
      <h1 style={h1Style}>Edit Blog</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="date"
          value={formData.date}
          style={inputStyle}
          id="start"
          name="date"
          min="2018-01-01"
          max="2050-12-31"
          onChange={handleChange}
        />
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Blog Title"
          style={inputStyle}
          
        />
        <input
          type="text"
          name="by"
          value={formData.by}
          onChange={handleChange}
          placeholder="Author"
          style={inputStyle}
          
        />
        <input
          type="text"
          name="image"
          value={formData.image}
          onChange={handleChange}
          placeholder="Image URL"
          style={inputStyle}
        />
        <input
          type="text"
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Description of Event"
          style={descriptionStyle}
        />
        <br>
        </br>
        <select style={selectStyle} name="typeOfActivity" id="typeOfActivity" onChange={handleChange} value={formData.typeOfActivity}>
          <option value="">Select Activity</option>
          <option value="Surfing">Surfing</option>
          <option value="Kayaking">Kayaking</option>
          <option value="Sailing">Sailing</option>
          <option value="Swimming">Snorkeling</option>
        </select>
        <br>
        </br>
        <br>
        </br>
        <button type="submit" style={buttonStyle}>Update</button>
      </form>
    </div>
    </div>

  );
};

export default Edit;
