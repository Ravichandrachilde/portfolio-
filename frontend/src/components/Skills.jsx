import React from 'react';
import { Code, Database, BarChart3, Cloud, Container, GitBranch } from 'lucide-react';
import '../styles/skills.css';

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: 'Programming',
      skills: ['Python', 'SQL']
    },
    {
      icon: Database,
      title: 'ML & Data Science',
      skills: ['NumPy', 'pandas', 'Scikit-Learn', 'PyTorch', 'NLP', 'XGBoost', 'SHAP']
    },
    {
      icon: BarChart3,
      title: 'Visualization',
      skills: ['Matplotlib', 'Seaborn', 'Power BI', 'Tableau']
    },
    {
      icon: Cloud,
      title: 'Cloud Platforms',
      skills: ['AWS SageMaker', 'AWS EC2', 'AWS S3', 'Azure', 'HuggingFace Spaces']
    },
    {
      icon: Container,
      title: 'DevOps & MLOps',
      skills: ['Docker', 'Kubernetes', 'Jenkins', 'Git', 'GitHub']
    },
    {
      icon: GitBranch,
      title: 'Tools & Frameworks',
      skills: ['Streamlit', 'FastAPI', 'Maven', 'SonarQube', 'CloudWatch']
    }
  ];

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <div className="text-center mb-48">
          <div className="label-text mb-16">TECHNICAL EXPERTISE</div>
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="body-large" style={{ maxWidth: '700px', margin: '0 auto' }}>
            Comprehensive toolkit for end-to-end machine learning and data science projects
          </p>
        </div>
        
        <div className="skills-grid grid grid-3">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div key={index} className="skill-card card">
                <div className="skill-icon-wrapper">
                  <IconComponent size={32} className="skill-icon" />
                </div>
                <h3 className="skill-title">{category.title}</h3>
                <div className="skill-list">
                  {category.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="skill-item">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;