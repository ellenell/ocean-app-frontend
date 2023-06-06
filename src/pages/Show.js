import React from "react";
import { Link, useParams } from "react-router-dom";

const colorPrimary = '#05445E';
const linkColor = '#75E6DA'


const Show = (props) => {
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


  return (
    <div className="blogs">
      <h1>{blogs.name}</h1>
      <h2>{formattedDate}</h2>
      <h2>Author: {blogs.by}</h2>
      <h2>{blogs.description}</h2>
      <h2>{blogs.typeOfActivity}</h2>
      <img src={blogs.image} alt={blogs.name} />
      <br />
      <br />
      
      <Link to={`/blog/edit/${blogs._id}`}>Edit This Blog</Link>
      <br />
      <Link to="/blog/create">Create a New Blog</Link>
      <br />
      <button onClick={handleDelete}>Delete This Blog</button>
    </div>
  );
};

export default Show;
