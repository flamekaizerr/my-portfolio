import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText('kkhalidkhan23@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">
        <h2 className="greeting">Hello, I'm</h2>
        <h1 className="name">Khalid Khan</h1>
        <h3 className="title text-gradient">ML & Full-Stack Developer</h3>
        <p className="description">
          I build robust, scalable web applications powered by state-of-the-art machine learning models. 
          Bridging the gap between cutting-edge AI and beautiful, responsive user interfaces.
        </p>
        <div className="hero-buttons">
          <a href="#projects" className="btn btn-primary">
            View Projects <ArrowRight size={18} />
          </a>
          <button onClick={handleCopyEmail} className="btn btn-secondary glass-panel">
            {copied ? 'Email Copied! ✅' : 'Copy Email'}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
