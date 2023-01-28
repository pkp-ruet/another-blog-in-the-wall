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
          <Route path="/" element={<BlogList />} />
          <Route path="/blog/:id" element={<Blog />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
