import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const BlogList = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Make the request
    fetch("https://another-blog-qi6m.onrender.com/blogs")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>
          <h2>{item.title}</h2>
          <button
            onClick={() =>
              navigate("/another-blog-in-the-wall/blog", { state: { item } })
            }
          >
            View Post
          </button>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
