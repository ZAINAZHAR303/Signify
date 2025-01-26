import React from 'react'
import './About.css';
import Footer from '../../components/Footer';
export const AboutUs = () => {
  return (
    <>
    
    <div className="about-page">
      <div className="about-container">
        <div className="card">
          <img src="loyd.webp" alt="loyd" className="card-img" />
          <div className="card-content">
            <h2>Loyed Kirimi</h2>
            <p><h2>Ai/Backend Developer</h2></p>
          </div>
        </div>

        <div className="card">
          <img src="zain.jpeg" alt="Zain" className="card-img" />
          <div className="card-content">
            <h2>Zain Azhar</h2>
            <p> <h2>Software Engineer <br />Frontend Developer</h2></p>
          </div>
        </div>

        <div className="card">
          <img src="nerd.webp" alt="nerd" className="card-img" />
          <div className="card-content">
            <h2>Tinos Noé ANAGO</h2>
            <p><h2>CEO and Data scientist</h2></p>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  )
}
