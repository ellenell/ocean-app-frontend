import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = ({ createBlog }) => {
  const [newBlog, setNewBlog] = useState({
    date: "",
    name: "",
    by: "",
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
      by: "",
      image: "",
      description: "",
      typeOfActivity: "",
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
          placeholder="Blog Title"
        />
          <input
          type="text"
          name="by"
          value={newBlog.by}
          onChange={handleChange}
          placeholder="Author"
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
          placeholder="Description of Event"
        />
    <select
      name="typeOfActivity"
      id="typeOfActivity"
      onChange={handleChange}
      value={newBlog.typeOfActivity}
    >
    <option value="Surfing">Select Activity</option>
    <option value="Surfing">Surfing</option>
    <option value="Kayaking">Kayaking</option>
    <option value="Sailing">Sailing</option>
    <option value="Swimming">Snorkeling</option>
    </select>

        <button type="submit">Create</button>
      </form>
    </div>
  );
};

// console.log(createBlog)

export default Create;
