import React from "react";
import { Link } from "react-router-dom"; // Assuming you're using React Router for navigation
import "./Header.css"; // Custom CSS file for styles

const Header = () => {
  return (
    <header className="header-container">
      <nav className="navbar">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
        </ul>
      </nav>

      <section className="hero">
        <div className="hero-content">
          <h1>AI-Powered Sign Language Translator</h1>
          <p>Breaking communication barriers with technology. Learn, communicate, and connect using sign language!</p>
          <button className="cta-btn">Get Started</button>
        </div>
        <div className="hero-video">
          <video src="your-video-url.mp4" autoPlay muted loop></video>
        </div>
      </section>
    </header>
  );
};

export default Header;
