import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Uphead from "./components/Uphead";
import Home from "./components/Home";
import About from "./components/About";
import Cnt from "./components/Cnt";
import Downfooter from "./components/Downfooter";
import Gallery from "./components/Gallery";
import BlogDetails from "./components/BlogDetails";
import Blog from "./components/Blog";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Uphead />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/cnt" element={<Cnt />} />
            <Route path="/Gallery" element={<Gallery />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogDetails />} />
            
          </Routes>
        </div>
        <Downfooter />
      </Router>
    </div>
  );
}

export default App;
