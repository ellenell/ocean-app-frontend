import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = ({ createBlog }) => {
  const [newBlog, setNewBlog] = useState({
    name: "",
    image: "",
    title: ""
  });
  const navigate = useNavigate();

  const handleChange = (event) => {
    setNewBlog({ ...newBlog, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createBlog(newBlog);
    setNewBlog({
      name: "",
      image: "",
      title: ""
    });

    // Redirect to the Show page after creating the blog
    navigate("/blog-index");
  };

  return (
    <div>
      <h1>Create Blog</h1>
      <form onSubmit={handleSubmit}>
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
          name="title"
          value={newBlog.title}
          onChange={handleChange}
          placeholder="Title"
        />
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default Create;
