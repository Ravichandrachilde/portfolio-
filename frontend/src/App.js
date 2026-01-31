import React, { useEffect } from 'react';
import { Analytics } from "@vercel/analytics/react";
import './App.css';
import './styles/portfolio.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // 1. Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';

    // 2. Track Visitor Location
    const trackVisitor = async () => {
      try {
        /* IMPORTANT: We use a relative path here. 
          Vercel sees '/api/railway/' and uses the 'vercel.json' rule 
          to proxy this to your Railway backend.
        */
        await fetch('/api/railway/track-visit');
      } catch (error) {
        console.log("Analytics ping skipped");
      }
    };

    trackVisitor();
  }, []);

  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
      <Footer />
      
      <Analytics /> 
    </div>
  );
}

export default App;
