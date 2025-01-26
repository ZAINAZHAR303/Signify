import React from 'react'
import './About.css';
import Footer from '../../components/Footer';
export const AboutUs = () => {
  return (
    <>
    
    <div className="about-page">
      <div className="about-container">
        <div className="card">
          <img src="zubair.jpeg" alt="Zubair" className="card-img" />
          <div className="card-content">
            <h2>M Zubair Shehzad</h2>
            <p><h2>Backend Developer</h2></p>
          </div>
        </div>

        <div className="card">
          <img src="zain.jpeg" alt="Zain" className="card-img" />
          <div className="card-content">
            <h2>Zain Azhar</h2>
            <p> <h2>AI chatbot Developer <br />Data Scrapper</h2></p>
          </div>
        </div>

        <div className="card">
          <img src="Haseeb.jpeg" alt="Haseeb" className="card-img" />
          <div className="card-content">
            <h2>M Haseeb Younas</h2>
            <p><h2>Frontend Developer</h2></p>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  )
}
