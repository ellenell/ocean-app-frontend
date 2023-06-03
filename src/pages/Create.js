import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = ({ createBlog }) => {
  const [newBlog, setNewBlog] = useState({
    date: "",
    name: "",
    image: "",
    description: "",
    typeofactivity: ""
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
      image: "",
      description: "",
      typeofactivity: ""
    });

    // Redirect to the Show page after creating the blog
    navigate("/blog-index");
  };

  return (
    <div>
      <h1>Create a Blog</h1>
      <form onSubmit={handleSubmit}>
      <input
          type="date"
          value={newBlog.date}
          id="start"
          name="date"
          min="2018-01-01"
          max="2050-12-31"
          onChange={handleChange}
        />
        <input
          type="text"
          name="name"
          value={newBlog.name}
          onChange={handleChange}
          placeholder="Name"
        />
        <input
          type="text"
          name="image"
          value={newBlog.image}
          onChange={handleChange}
          placeholder="Image URL"
        />
        <input
          type="text"
          name="description"
          value={newBlog.description}
          onChange={handleChange}
          placeholder="Description"
        />
        <select name="activity" id="activity" onChange={handleChange} value={newBlog.typeofactivity}>
          <option value="">Select Activity</option>
          <option value="surfing">Surfing</option>
          <option value="kayaking">Kayaking</option>
          <option value="sailing">Sailing</option>
          <option value="swimming">Swimming</option>
        </select>
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default Create;
