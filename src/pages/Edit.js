import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Edit = () => {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    date: '',
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
  };

  return (
    <div>
      <h1>Edit Blog</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="date"
          value={formData.date}
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
          
        />
        <input
          type="text"
          name="by"
          value={formData.by}
          onChange={handleChange}
          placeholder="Author"
          
        />
        <input
          type="text"
          name="image"
          value={formData.image}
          onChange={handleChange}
          placeholder="Image URL"
        />
        <input
          type="text"
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Description of Event"
        />
        <select name="typeOfActivity" id="typeOfActivity" onChange={handleChange} value={formData.typeOfActivity}>
          <option value="">Select Activity</option>
          <option value="Surfing">Surfing</option>
          <option value="Kayaking">Kayaking</option>
          <option value="Sailing">Sailing</option>
          <option value="Swimming">Snorkeling</option>
        </select>
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default Edit;
