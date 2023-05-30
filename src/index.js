import React from "react";
import ReactDOM from "react-dom";
// IMPORT ROUTER
import { BrowserRouter as Router } from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { useState } from "react";
import { Link } from "react-router-dom";

function Index(props) {
  // state to hold formData
  const [newForm, setNewForm] = useState({
    name: "",
    image: "",
    title: "",
  });

  // handleChange function for form
  const handleChange = (event) => {
    setNewForm({ ...newForm, [event.target.name]: event.target.value });
  };

  // handle submit function for form
  const handleSubmit = (event) => {
    event.preventDefault();
    props.createBlog(newForm);
    setNewForm({
      name: "",
      image: "",
      title: "",
    });
  };

  // loaded function
  const loaded = () => {
    return props.blog.map((blog) => (
      <div key={blog._id} className="blog">
        <Link to={`/blog/${blog._id}`}>
          <h1>{blog.name}</h1>
        </Link>
        <img src={blog.image} alt={blog.name} />
        <h3>{blog.title}</h3>
      </div>
    ));
  };

  const loading = () => {
    return <h1>Loading...</h1>;
  };
  return (
    <section>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newForm.name}
          name="name"
          placeholder="name"
          onChange={handleChange}
        />
        <input
          type="text"
          value={newForm.image}
          name="image"
          placeholder="image URL"
          onChange={handleChange}
        />
        <input
          type="text"
          value={newForm.title}
          name="title"
          placeholder="title"
          onChange={handleChange}
        />
        <input type="submit" value="Create Blog" />
      </form>
      {props.blog ? loaded() : loading()}
    </section>
  );
}

export default Index;


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
