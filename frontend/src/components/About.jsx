import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import '../styles/about.css';

const About = () => {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <div className="about-grid">
          <div className="about-content">
            <div className="label-text mb-16">ABOUT ME</div>
            <h2 className="section-title">Building Intelligent Solutions</h2>
            <div className="body-text mb-24">
              <p className="mb-16">
                I'm a Data Scientist and ML Engineer with a Master's degree in Information Technology from Concordia University. 
                My passion lies in transforming complex data into actionable insights and building scalable machine learning solutions.
              </p>
              <p className="mb-16">
                With hands-on experience in the complete ML lifecycle, I specialize in developing, containerizing, and deploying 
                production-ready models. My work spans from exploratory data analysis to deploying containerized applications on 
                cloud platforms like AWS and HuggingFace Spaces.
              </p>
              <p>
                I'm eager to apply my skills in data analysis, MLOps, and predictive modeling to solve real-world problems and 
                deliver measurable impact for organizations in the US market.
              </p>
            </div>
            
            <div className="education-section">
              <h3 className="subsection-title mb-24">Education</h3>
              <div className="education-item mb-24">
                <div className="education-header">
                  <h4 className="education-title">Master of Science in Information Technology</h4>
                  <span className="education-date">May 2023 — Aug 2024</span>
                </div>
                <div className="education-details">
                  <span className="education-school">Concordia University, St. Paul, MN</span>
                  <span className="education-gpa">GPA: 3.75</span>
                </div>
              </div>
              
              <div className="education-item">
                <div className="education-header">
                  <h4 className="education-title">Bachelor of Technology in Computer Science</h4>
                  <span className="education-date">Jun 2018 — Apr 2022</span>
                </div>
                <div className="education-details">
                  <span className="education-school">K L University</span>
                  <span className="education-gpa">GPA: 3.58</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="about-sidebar">
            <div className="info-card card">
              <h3 className="subsection-title mb-24">Contact Information</h3>
              <div className="info-item">
                <MapPin size={20} className="info-icon" />
                <div>
                  <div className="label-text">LOCATION</div>
                  <div className="body-text">Minneapolis, Minnesota</div>
                </div>
              </div>
              <div className="info-item">
                <Mail size={20} className="info-icon" />
                <div>
                  <div className="label-text">EMAIL</div>
                  <a href="mailto:ravichandu.musuluri@gmail.com" className="body-text link">
                    ravichandu.musuluri@gmail.com
                  </a>
                </div>
              </div>
              <div className="info-item">
                <Phone size={20} className="info-icon" />
                <div>
                  <div className="label-text">PHONE</div>
                  <a href="tel:+17638435914" className="body-text link">
                    +1 (763) 843-5914
                  </a>
                </div>
              </div>
            </div>
            
            <div className="certification-card card mt-24">
              <h3 className="subsection-title mb-24">Certifications</h3>
              <div className="cert-item">
                <div className="cert-name">Microsoft Azure Fundamentals</div>
                <div className="cert-date">Issued: October 2022</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;