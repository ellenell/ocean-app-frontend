import { useState } from "react";
import {Link} from "react-router-dom"

const Index = (props) => {

  // loaded function
  const loaded = () => {
    return props.blog.map((blog) => (
      <div key={blog._id} className="blog">
        <Link to={`/blog/${blog._id}`}><h1>{blog.name}</h1></Link>
        <img src={blog.image} alt={blog.name} />
        <h3>{blog.title}</h3>
      </div>
    ));
  };

  const loading = () => {
    return <h1>Loading...</h1>;
  };
  return (props.blog ? loaded() : loading());
}

export default Index
