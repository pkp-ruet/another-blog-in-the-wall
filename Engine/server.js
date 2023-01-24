// Import the Express library
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3030;
app.use(bodyParser.json());
app.use(cors({ origin: true }));

mongoose.connect("mongodb://localhost:27017/another-blog-in-the-wall", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const blogSchema = new mongoose.Schema({
  title: String,
  content: String,
  author: String,
});
const Blog = mongoose.model("Blog", blogSchema);

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.post("/post", (req, res) => {
  const blog = new Blog({
    title: req.body.title,
    content: req.body.content,
    author: req.body.author,
  });
  blog
    .save()
    .then((data) => {
      res.send(`Post saved: ${data}`);
    })
    .catch((err) => {
      res.status(500).send("Error saving post");
    });
  res.send(`This is the blog ${blog}`);
});

app.get("/blogs", (req, res) => {
  Blog.find()
    .then((blogs) => {
      res.json(blogs);
    })
    .catch((err) => {
      res.status(500).send("Error getting blogs");
    });
});

// Start the server on a specific port
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
