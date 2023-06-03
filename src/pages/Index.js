import React from 'react';
import { useState } from "react";
import {Link} from "react-router-dom"



const Index = (props) => {
  console.log(props,"props here")
  // loaded function
  const loaded = () => {
    return props.blog.map((blog) => (
      <div key={blog._id} className="blog">
        <Link to={`/blog/${blog._id}`}><h1>{blog.name}</h1></Link>
        <h3>{formatDate(blog.date)}</h3>
        <img src={blog.image} alt={blog.name} />
        <h3>{blog.title}</h3>
      </div>
    ));
  };

  const loading = () => {
    return <h1>Loading</h1>;
  };

  const formatDate = (dateString) => {
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric"
    };
    const formattedDate = new Date(dateString).toLocaleDateString("en-US", options);
    return formattedDate;
  };

  return (props.blog ? loaded() : loading());
}

export default Index
