import React, { useEffect } from 'react';
import { Analytics } from "@vercel/analytics/react" // <--- 1. Add this import
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
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
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
      
      <Analytics /> {/* <--- 2. Add this component at the bottom */}
    </div>
  );
}

export default App;
