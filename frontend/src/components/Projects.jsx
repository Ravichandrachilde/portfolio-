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
      description: 'Developed an interpretable ML model using XGBoost and SHAP achieving 75.6% accuracy, enabling loan officers to make faster, data-driven decisions while maintaining regulatory transparency requirements. SHAP analysis revealed that credit history and income stability were top approval factors, providing actionable insights to help applicants understand rejection reasons and improve future applications - potentially reducing manual review time by 40%.',
      techStack: ['XGBoost', 'SHAP', 'Docker', 'Streamlit', 'HuggingFace Spaces', 'Python'],
      metrics: ['75.6% Accuracy', 'Interpretable AI', '40% Faster Review'],
      github: 'https://github.com/Ravichandrachilde',
      demo: null,
      image: 'https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?w=800&q=80'
    },
    {
      title: 'Fact-Check News Detector',
      description: 'Fine-tuned DistilBERT model to classify news with over 95% accuracy (F1-score) on a dataset of 44k+ articles. Developed a hybrid verification pipeline by integrating the Google Fact Check API to validate recent news, reducing false positives and improving model predictions. Managed the full model lifecycle, from data preprocessing to containerization with Docker and deployment on HuggingFace Spaces for real-time model serving.',
      techStack: ['DistilBERT', 'NLP', 'Google Fact Check API', 'Docker', 'Streamlit', 'HuggingFace Hub', 'Python'],
      metrics: ['95% F1-Score', '44k+ Articles', 'Real-time Inference'],
      github: 'https://github.com/Ravichandrachilde',
      demo: null,
      image: 'https://images.unsplash.com/photo-1738739905706-2cc26e57f67d?w=800&q=80'
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