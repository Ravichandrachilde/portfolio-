import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import '../styles/projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Customer Churn Prediction',
      description: 'Developed an XGBoost classification model on 440k+ customer records achieving 94% accuracy and 0.90 precision, enabling proactive retention of high-risk customers before they churn. Implemented SHAP for model interpretability, uncovering that high support call frequency was the #1 churn driver; recommended targeted interventions that could potentially reduce churn by 15-20% based on model predictions.',
      techStack: ['XGBoost', 'SHAP', 'Python', 'pandas', 'Scikit-learn', 'Matplotlib', 'Seaborn'],
      metrics: ['94% Accuracy', '0.90 Precision', '440k+ Records'],
      github: 'https://github.com/Ravichandrachilde',
      demo: null,
      image: 'https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?w=800&q=80'
    },
    {
      title: 'Stock Anomaly Detector',
      description: 'Built a hybrid anomaly detection system to identify unusual trading patterns in real-time, enabling traders to respond 30-40% faster to market irregularities compared to manual monitoring. Reduced false positive alerts by 25% through dynamic model retraining during market volatility, allowing analysts to focus on genuine anomalies and make more confident trading decisions.',
      techStack: ['PyTorch', 'LSTM Autoencoder', 'Isolation Forest', 'Scikit-learn', 'Docker', 'Streamlit', 'HuggingFace Hub'],
      metrics: ['30-40% Faster Response', '25% Fewer False Positives', 'Real-time Detection'],
      github: 'https://github.com/Ravichandrachilde',
      demo: null,
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80'
    },
    {
      title: 'Loan Approval Predictor',
      description: 'Developed loan approval classifier achieving 99.5% accuracy using Random Forest and XGBoost; engineered loan-to-income ratio and aggregated asset features to reduce multicollinearity while maintaining business interpretability. Resolved class imbalance through stratified sampling and class weighting; validated model generalizability by comparing train vs. test performance across 3 algorithms on 4,200+ applications. Deployed interactive loan prediction app to Hugging Face Spaces using Streamlit and Docker; integrated SHAP analysis to provide explainable risk assessments for business stakeholders.',
      techStack: ['XGBoost', 'Random Forest', 'SHAP', 'pandas', 'Streamlit', 'Docker', 'HuggingFace Spaces'],
      metrics: ['99.5% Accuracy', '4,200+ Applications', 'Explainable AI'],
      github: 'https://github.com/Ravichandrachilde',
      demo: null,
      image: 'https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?w=800&q=80'
    }
  ];

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <div className="text-center mb-48">
          <div className="label-text mb-16">PORTFOLIO</div>
          <h2 className="section-title">Featured Projects</h2>
          <p className="body-large" style={{ maxWidth: '700px', margin: '0 auto' }}>
            End-to-end machine learning projects showcasing EDA, Modelling, Explainability and Deployment
          </p>
        </div>
        
        <div className="projects-grid grid grid-2">
          {projects.map((project, index) => (
            <div key={index} className="project-card card">
              <div className="project-image-wrapper">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="project-image"
                />
              </div>
              
              <div className="project-content">
                <div className="project-number">{String(index + 1).padStart(2, '0')}</div>
                
                <h3 className="project-title">{project.title}</h3>
                
                <p className="project-description body-text">
                  {project.description}
                </p>
                
                <div className="project-metrics">
                  {project.metrics.map((metric, idx) => (
                    <div key={idx} className="metric-badge">
                      {metric}
                    </div>
                  ))}
                </div>
                
                <div className="tech-stack">
                  {project.techStack.map((tech, idx) => (
                    <span key={idx} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="project-links">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="project-link"
                  >
                    <Github size={18} />
                    View Code
                  </a>
                  {project.demo && (
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="project-link"
                    >
                      <ExternalLink size={18} />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;