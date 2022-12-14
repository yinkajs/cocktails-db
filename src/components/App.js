import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";

// import pages
import Home from "../pages/Home";
import About from "../pages/About";
import SingleCocktail from "../pages/SingleCocktail";
import Error from "../pages/Error";

// import components
import Navbar from "./Navbar";
import Sidebar from "./SideBar";
import { useGlobalContext } from "../context";

function App() {
  const { isSideBarOpen } = useGlobalContext();
  if (isSideBarOpen) document.body.classList.add("no-scroll");
  else document.body.classList.remove("no-scroll");

  return (
    <BrowserRouter>
      <Navbar />
      <Sidebar />
      <ScrollToTop smooth={true} className="scrollToTop" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cocktail/:id" element={<SingleCocktail />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
