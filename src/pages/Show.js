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
      <br>
      </br>
      <br>
      </br>
      <Link to="/blog/create">Create a Blog</Link>

    </div>
  );
};

export default Show;
