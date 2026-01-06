import React from 'react';
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';
import '../styles/hero.css';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownloadResume = () => {
    // Open Google Drive link in new tab
    window.open('https://drive.google.com/file/d/1oVSzYVs-8S-NVSHOl40Ri5qpuP9RABn0/view?usp=drive_link', '_blank');
  };

  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="hero-content">
          <div className="hero-label label-text">DATA SCIENTIST & ML ENGINEER</div>
          <h1 className="hero-title fade-in-up">
            Ravi Chandra
            <br />
            <span className="accent-text">Sekhar</span>
          </h1>
          <p className="hero-description body-large">
            Data Scientist with expertise in Python, SQL, and Statistical Analysis. Proven ability to 
            derive actionable business insights through EDA and predictive modeling, delivering end-to-end 
            ML solutions.
          </p>
          <div className="hero-actions">
            <button onClick={() => scrollToSection('projects')} className="btn btn-primary">
              View Projects
              <ArrowRight className="btn-icon" size={20} />
            </button>
            <button onClick={handleDownloadResume} className="btn btn-outline">
              <Download size={20} />
              Download Resume
            </button>
          </div>
          <div className="hero-social">
            <a href="https://github.com/Ravichandrachilde" target="_blank" rel="noopener noreferrer" className="social-link">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/ravi-chandra-sekhar-931a86348/" target="_blank" rel="noopener noreferrer" className="social-link">
              <Linkedin size={24} />
            </a>
            <a href="mailto:ravichandu.musuluri@gmail.com" className="social-link">
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;