import React from 'react';
import { Github, Linkedin, Mail, Download } from 'lucide-react';
import '../styles/footer.css';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleDownloadResume = () => {
    // Open Google Drive link in new tab
    window.open('https://drive.google.com/file/d/1oVSzYVs-8S-NVSHOl40Ri5qpuP9RABn0/view?usp=drive_link', '_blank');
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-main">
            <div className="footer-brand">
              <div className="footer-logo">RCS</div>
              <p className="footer-tagline">
                Data Scientist & ML Engineer
              </p>
              <p className="footer-description">
                Building intelligent solutions with machine learning and data science
              </p>
            </div>
            
            <div className="footer-links">
              <div className="footer-section">
                <h4 className="footer-title">Quick Links</h4>
                <ul className="footer-list">
                  <li><a href="#about">About</a></li>
                  <li><a href="#skills">Skills</a></li>
                  <li><a href="#experience">Experience</a></li>
                  <li><a href="#projects">Projects</a></li>
                  <li><a href="#contact">Contact</a></li>
                </ul>
              </div>
              
              <div className="footer-section">
                <h4 className="footer-title">Connect</h4>
                <ul className="footer-list">
                  <li>
                    <a href="https://github.com/Ravichandrachilde" target="_blank" rel="noopener noreferrer">
                      GitHub
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/ravi-chandra-sekhar-931a86348/" target="_blank" rel="noopener noreferrer">
                      LinkedIn
                    </a>
                  </li>
                  <li>
                    <a href="mailto:ravichandu.musuluri@gmail.com">
                      Email
                    </a>
                  </li>
                </ul>
              </div>
              
              <div className="footer-section">
                <h4 className="footer-title">Resources</h4>
                <button onClick={handleDownloadResume} className="footer-resume-btn">
                  <Download size={16} />
                  Download Resume
                </button>
              </div>
            </div>
          </div>
          
          <div className="footer-bottom">
            <div className="footer-social">
              <a href="https://github.com/Ravichandrachilde" target="_blank" rel="noopener noreferrer" className="footer-social-link">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/ravi-chandra-sekhar-931a86348/" target="_blank" rel="noopener noreferrer" className="footer-social-link">
                <Linkedin size={20} />
              </a>
              <a href="mailto:ravichandu.musuluri@gmail.com" className="footer-social-link">
                <Mail size={20} />
              </a>
            </div>
            
            <div className="footer-copyright">
              © {currentYear} Ravi Chandra Sekhar. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;