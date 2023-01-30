// Import the Express library
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const crypto = require("crypto");

const app = express();
const PORT = process.env.PORT || 3030;
app.use(bodyParser.json());
app.use(cors({ origin: true }));

mongoose.connect(
  "mongodb+srv://pkp:143012@clusterblog.u3ghxj1.mongodb.net/another-blog",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const blogSchema = new mongoose.Schema({
  _id: String,
  title: String,
  content: String,
  author: String,
});
const blogDataSchema = new mongoose.Schema({
  _id: String,
  title: String,
  imgUrl: String,
  description: String,
  publishedDate: String,
});
const Blog = mongoose.model("Blog", blogSchema);
const BlogData = mongoose.model("BlogData", blogDataSchema);

app.post("/post", (req, res) => {
  const id = crypto.randomBytes(16).toString("hex");
  const blogData = new BlogData({
    _id: id,
    title: req.body.title,
    imgUrl: req.body.imgUrl,
    description: req.body.description,
    publishedDate: req.body.publishedDate,
  });
  const blog = new Blog({
    _id: id,
    title: req.body.title,
    content: req.body.content,
    author: req.body.author,
  });
  blog.save(function (err, result) {
    if (err) {
      console.log(err);
    } else {
      console.log(result);
    }
  });

  blogData.save(function (err, result) {
    if (err) {
      console.log(err);
    } else {
      console.log(result);
    }
  });
  res.send(blog);
});

app.get("/allBlogDatas", (req, res) => {
  BlogData.find()
    .then((blogDatas) => {
      res.json(blogDatas);
    })
    .catch((err) => {
      res.status(500).send("Error getting blogs");
    });
});

app.get("/blog/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);
  Blog.findById(id)
    .then((blog) => {
      res.json(blog);
    })
    .catch((err) => {
      res.status(500).send("Error getting blogs");
    });
});

app.use(express.static(path.join(__dirname, "build")));
// Start the server on a specific port
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});
