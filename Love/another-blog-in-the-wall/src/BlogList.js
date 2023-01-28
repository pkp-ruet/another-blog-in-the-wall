import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const BlogList = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Make the request
    fetch("http://localhost:3030/allBlogDatas")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="container">
      {data.map((item) => (
        <div className="card" key={item.id}>
          <h2>{item.title}</h2>
          <button
            onClick={() =>
              navigate(`/blog/${item._id}`, { state: { id: item._id } })
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
