import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';
import axios from 'axios';
import '../styles/contact.css';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await axios.post(`${API}/contact`, formData);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-info">
            <div className="label-text mb-16">GET IN TOUCH</div>
            <h2 className="section-title">Let's Work Together</h2>
            <p className="body-large mb-32">
              I'm actively seeking entry-level Data Science and ML Engineering roles in the United States. 
              Feel free to reach out for opportunities, collaborations, or just to connect!
            </p>
            
            <div className="contact-details">
              <div className="contact-detail-item">
                <div className="label-text">EMAIL</div>
                <a href="mailto:ravichandu.musuluri@gmail.com" className="contact-link">
                  ravichandu.musuluri@gmail.com
                </a>
              </div>
              
              <div className="contact-detail-item">
                <div className="label-text">PHONE</div>
                <a href="tel:+17638435914" className="contact-link">
                  +1 (763) 843-5914
                </a>
              </div>
              
              <div className="contact-detail-item">
                <div className="label-text">LOCATION</div>
                <div className="body-text">Minneapolis, Minnesota</div>
              </div>
            </div>
          </div>
          
          <div className="contact-form-wrapper card">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name" className="label-text">NAME *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="form-input"
                  placeholder="Your full name"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email" className="label-text">EMAIL *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="form-input"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="subject" className="label-text">SUBJECT *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="form-input"
                  placeholder="What's this about?"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message" className="label-text">MESSAGE *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="form-textarea"
                  placeholder="Tell me more..."
                />
              </div>
              
              <button 
                type="submit" 
                className="btn btn-primary"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                <Send className="btn-icon" size={18} />
              </button>
              
              {submitStatus === 'success' && (
                <div className="form-message success">
                  <CheckCircle size={20} />
                  <span>Message sent successfully! I'll get back to you soon.</span>
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="form-message error">
                  <span>Failed to send message. Please try again or email me directly.</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;