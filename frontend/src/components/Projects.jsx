import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import '../styles/projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Fact-Check News Detector',
      description: 'Fine-tuned DistilBERT model to classify news with over 95% accuracy (F1-score) on a dataset of 44k+ articles. Integrated Google Fact Check API to build a hybrid verification pipeline that validated post-2021 news and reduced false positives. Deployed an interactive Streamlit app on HuggingFace Spaces for real-time inference.',
      techStack: ['DistilBERT', 'NLP', 'Google Fact Check API', 'Docker', 'Streamlit', 'HuggingFace Hub', 'Python'],
      metrics: ['95% F1-Score', '44k+ Articles', 'Real-time Inference'],
      github: 'https://github.com/Ravichandrachilde',
      demo: null,
      image: 'https://images.unsplash.com/photo-1738739905706-2cc26e57f67d?w=800&q=80'
    },
    {
      title: 'Stock Anomaly Detector',
      description: 'Built an anomaly detection system combining PyTorch LSTM Autoencoder and Scikit-learn Isolation Forest to identify both subtle patterns and sharp outliers in live financial data. Implemented a full MLOps pipeline on HuggingFace Hub, versioning model artifacts and streaming them directly into the live app for reproducibility.',
      techStack: ['PyTorch', 'LSTM Autoencoder', 'Isolation Forest', 'Scikit-learn', 'Docker', 'Streamlit', 'HuggingFace Hub'],
      metrics: ['Real-time Detection', 'Dual Algorithm Approach', 'MLOps Pipeline'],
      github: 'https://github.com/Ravichandrachilde',
      demo: null,
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80'
    },
    {
      title: 'Loan Approval Predictor',
      description: 'Built an interpretable ML model using XGBoost and SHAP to predict loan approvals, achieving 75.6% test accuracy while ensuring decision transparency. Developed and deployed a containerized Streamlit application on HuggingFace Spaces with an interactive UI for model predictions.',
      techStack: ['XGBoost', 'SHAP', 'Docker', 'Streamlit', 'HuggingFace Spaces', 'Python'],
      metrics: ['75.6% Accuracy', 'Interpretable AI', 'Production Deployed'],
      github: 'https://github.com/Ravichandrachilde',
      demo: null,
      image: 'https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?w=800&q=80'
    },
    {
      title: 'Customer Churn Prediction',
      description: 'Implemented a customer churn prediction system on telecom data (~7K customers) using ML models (XGBoost, Random Forest, Logistic Regression), achieving ~81% accuracy. Performed EDA and feature engineering to uncover churn drivers such as contract type, tenure, and internet services, improving model interpretability.',
      techStack: ['XGBoost', 'Random Forest', 'Logistic Regression', 'Python', 'pandas', 'Scikit-learn', 'Matplotlib', 'Seaborn'],
      metrics: ['81% Accuracy', '7K Customers', 'Feature Engineering'],
      github: 'https://github.com/Ravichandrachilde',
      demo: null,
      image: 'https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?w=800&q=80'
    }
  ];

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <div className="text-center mb-48">
          <div className="label-text mb-16">PORTFOLIO</div>
          <h2 className="section-title">Featured Projects</h2>
          <p className="body-large" style={{ maxWidth: '700px', margin: '0 auto' }}>
            End-to-end machine learning projects showcasing expertise in model development, deployment, and MLOps
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