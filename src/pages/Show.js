import React from "react";
import { Link, useParams } from "react-router-dom";

const Show = (props) => {
  const params = useParams();
  const id = params.id;
  const blog = props.blog;
  const blogs = blog && blog.find((p) => p._id === id);

  if (!blogs) {
    return <p>Loading...</p>;
  }

  return (
    <div className="blogs">
      <h1>{blogs.name}</h1>
      <h2>{blogs.title}</h2>
      <img src={blogs.image} alt={blogs.name} />

      <Link to="/blog/create">Create a Blog</Link>

    </div>
  );
};

export default Show;
