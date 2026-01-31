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
        // Using your specific Railway URL and the /api/track-visit route we added to server.py
        await fetch('https://portfolio-production-9e46.up.railway.app/api/track-visit');
      } catch (error) {
        // We use console.log so the user doesn't see any errors if tracking fails
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
