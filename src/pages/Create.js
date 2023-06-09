import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import backgroundImage from '../images/ivan-bandura-2FEE6BR343k-unsplash.jpg';


const Create = ({ createBlog }) => {
  const [newBlog, setNewBlog] = useState({
    date: "",
    name: "",
    by: "",
    image: "",
    description: "",
    typeOfActivity: ""
  });
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewBlog({ ...newBlog, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createBlog(newBlog);
    setNewBlog({
      date: "",
      name: "",
      by: "",
      image: "",
      description: "",
      typeOfActivity: "",
    });

    // Redirect to the Show page after creating the blog
    navigate("/blog-index");
  };

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
    verticalAlign: "top", // Align text to the top
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

  return (
    <div style={mainDiv}>
    <div style={borderCreate}>
      <h1 style={h1Style}>Create a New Blog Post</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="date"
          value={newBlog.date}
          id="start"
          name="date"
          min="2018-01-01"
          max="2050-12-31"
          onChange={handleChange}
          style={inputStyle}
        />
        <input
          type="text"
          name="name"
          value={newBlog.name}
          onChange={handleChange}
          placeholder="Blog Title"
          style={inputStyle}
        />
        <input
          type="text"
          name="by"
          value={newBlog.by}
          onChange={handleChange}
          placeholder="Author"
          style={inputStyle}
        />
        <input
          type="text"
          name="image"
          value={newBlog.image}
          onChange={handleChange}
          placeholder="Image URL"
          style={inputStyle}
        />
        <input
          type="text"
          name="description"
          style={descriptionStyle}
          value={newBlog.description}
          onChange={handleChange}
          placeholder="Description of Event"
        />
        <select
          name="typeOfActivity"
          id="typeOfActivity"
          onChange={handleChange}
          value={newBlog.typeOfActivity}
          style={selectStyle}
        >
          <option value="Surfing">Select Activity</option>
          <option value="Surfing">Surfing</option>
          <option value="Kayaking">Kayaking</option>
          <option value="Sailing">Sailing</option>
          <option value="Swimming">Snorkeling</option>
        </select>
        <br>
        </br>

        <button type="submit" style={buttonStyle}>Create</button>
      </form>
    </div>
    </div> 
  );
};

export default Create;
