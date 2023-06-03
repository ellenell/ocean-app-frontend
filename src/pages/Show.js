import React from "react";
import { Link, useParams } from "react-router-dom";

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
    fetch(`http://localhost:4000/blog/blog/${blogs._id}`, {
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
      <h2>{blogs.description}</h2>
      <h2>{blogs.typeofactivity}</h2>
      <img src={blogs.image} alt={blogs.name} />
      <br />
      <br />
      
      <Link to={`/blog/edit/${blogs._id}`}>Edit Blog</Link>
      <br />
      <button onClick={handleDelete}>Delete Blog</button>
      <br />
      <Link to="/blog/create">Create a Blog</Link>
    </div>
  );
};

export default Show;
