import { useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";

const Blog = () => {
  const [item, setItem] = useState([]);
  const location = useLocation();
  const id = location.state.id;
  useEffect(() => {
    // Make the request
    fetch(`http://localhost:3030/blog/${id}`)
      .then((response) => response.json())
      .then((item) => setItem(item))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div style={{ textAlign: "center", margin: "0 auto" }}>
      <h2 style={{ marginTop: "50px" }}>{item.title}</h2>
      <p
        style={{ margin: "20px auto" }}
        dangerouslySetInnerHTML={{ __html: item.content }}
      />
    </div>
  );
};

export default Blog;
