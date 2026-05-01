import React from 'react';
import { ArrowRight, Download } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">
        <h2 className="greeting">Hello, I'm</h2>
        <h1 className="name">Khalid Khan</h1>
        <h3 className="title text-gradient">Full-Stack AI Engineer</h3>
        <p className="description">
          I build robust, scalable web applications powered by state-of-the-art machine learning models. 
          Bridging the gap between cutting-edge AI and beautiful, responsive user interfaces.
        </p>
        <div className="hero-buttons">
          <a href="#projects" className="btn btn-primary">
            View Projects <ArrowRight size={18} />
          </a>
          <a href="#" className="btn btn-secondary glass-panel">
            Download Resume <Download size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
