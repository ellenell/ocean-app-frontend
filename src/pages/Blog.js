import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Index from "../pages/Index";
import Show from "../pages/Show";
import Create from "../pages/Create";

const Blog = (props) => {
  const [blog, setBlog] = useState(null);

  const URL = 'http://localhost:4000/blog';

  const getBlog = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    console.log(data.data)
    setBlog(data.data);
  };


  const createBlog = async (blog) => {
    // make post request to create blog
    await fetch(URL, { 
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(blog),
    });
    // update list of blogs
    getBlog();
  };

  useEffect(() => {
    getBlog()
  }, []);

  return (
    <main>
      <Routes>
        <Route path="/blogindex" element={<Index blog={blog} createBlog={createBlog}/>}/>
        <Route path="/blog/create" element={<Create createBlog={createBlog} />} />
        <Route path="/blog/:id" element={<Show/>}/>
      </Routes>
    </main>
  );
}

export default Blog;
