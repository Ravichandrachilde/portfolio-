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
                  <h3 className="experience-role">Data Science Intern</h3>
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
                  Performed exploratory data analysis on customer behavior datasets (500K+ records) using Python 
                  (Pandas, NumPy), identifying data quality issues and patterns that guided feature selection for 
                  predictive modeling projects
                </li>
                <li>
                  Built baseline classification models to predict customer churn/engagement, achieving 75% accuracy 
                  through iterative feature engineering and model tuning under guidance of senior data scientists
                </li>
                <li>
                  Created automated data quality monitoring reports tracking key metrics and distributions, helping 
                  the team detect anomalies early and maintain reliable datasets for analytics dashboards
                </li>
              </ul>
            </div>
            
            <div className="tech-stack">
              <span className="tech-badge">Python</span>
              <span className="tech-badge">pandas</span>
              <span className="tech-badge">NumPy</span>
              <span className="tech-badge">EDA</span>
              <span className="tech-badge">Classification Models</span>
              <span className="tech-badge">Data Quality</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;