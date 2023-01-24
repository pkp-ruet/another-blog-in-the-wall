import BlogList from "./BlogList";
import Header from "./Header";
import Blog from "./Blog";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/another-blog-in-the-wall" element={<BlogList />} />
          <Route path="/another-blog-in-the-wall/blog" element={<Blog />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
