import React, { useState, useEffect } from "react";

const BlogList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Make the request
    fetch("http://localhost:3000/blogs")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>
          <h2>{item.title}</h2>
          <p>{item.content}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
