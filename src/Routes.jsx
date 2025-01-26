import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home"; // Assuming you have these page components
// import AboutUs from "./pages/AboutUs";
// import ContactUs from "./pages/ContactUs";
import Contact from "./pages/Contact/Contact";
import { AboutUs } from "./pages/about/AboutUs";
import Header from "./components/header/Header";

const AppRoutes = () => {
  return (
    <Router>
      <Header />
      {/* <Header /> Render the header component globally */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;