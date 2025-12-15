import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';
import '../styles/experience.css';

const Experience = () => {
  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        <div className="text-center mb-48">
          <div className="label-text mb-16">PROFESSIONAL BACKGROUND</div>
          <h2 className="section-title">Work Experience</h2>
        </div>
        
        <div className="experience-content">
          <div className="experience-card card">
            <div className="experience-header">
              <div className="experience-title-group">
                <Briefcase size={24} className="experience-icon" />
                <div>
                  <h3 className="experience-role">AWS DevOps Intern</h3>
                  <div className="experience-company">Smartgig</div>
                </div>
              </div>
              <div className="experience-date">
                <Calendar size={18} />
                <span>Mar 2022 — Aug 2022</span>
              </div>
            </div>
            
            <div className="experience-description">
              <ul className="experience-list">
                <li>
                  Provided support to the DevOps team in managing AWS resources including EC2, S3, IAM, and CloudWatch, 
                  assisting with day-to-day cloud operations
                </li>
                <li>
                  Supported build and deployment pipelines using Jenkins, helping troubleshoot failed builds and ensuring 
                  smooth CI/CD workflows
                </li>
                <li>
                  Assisted in containerizing applications using Docker, and supported deployment to Kubernetes clusters 
                  for testing environments
                </li>
                <li>
                  Helped monitor infrastructure using CloudWatch, and documented alerts, metrics, and resolution steps 
                  for internal runbooks
                </li>
              </ul>
            </div>
            
            <div className="tech-stack">
              <span className="tech-badge">AWS EC2</span>
              <span className="tech-badge">AWS S3</span>
              <span className="tech-badge">IAM</span>
              <span className="tech-badge">CloudWatch</span>
              <span className="tech-badge">Jenkins</span>
              <span className="tech-badge">Docker</span>
              <span className="tech-badge">Kubernetes</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;