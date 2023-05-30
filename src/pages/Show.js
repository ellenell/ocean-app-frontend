import {useParams} from "react-router-dom"

const Show = (props) => {
  const params = useParams()
  const id = params.id;
  const blog = props.blog;
  const blogs = blog.find((p) => p._id === id);

  return (
    <div className="blogs">
      <h1>{blogs.name}</h1>
      <h2>{blogs.title}</h2>
      <img src={blogs.image} alt={blogs.name} />
    </div>
  );
}

export default Show;
