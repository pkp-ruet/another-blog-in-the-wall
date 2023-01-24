import { useLocation } from "react-router-dom";

const Blog = () => {
  const location = useLocation();
  const item = location.state.item;
  return (
    <div>
      <h2>{item.title}</h2>
      <p>{item.content}</p>
    </div>
  );
};

export default Blog;
