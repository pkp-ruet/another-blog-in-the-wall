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
    <div>
      <div className="container">
        {data.map((item) => (
          <button
            key={item.id}
            className="card"
            onClick={() =>
              navigate(`/blog/${item._id}`, { state: { id: item._id } })
            }
          >
            <img src={item.imgUrl} alt={item.title} className="card-image" />
            <div className="card-text">
              <h2 className="title">{item.title}</h2>
              <p className="description">{item.description}</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
