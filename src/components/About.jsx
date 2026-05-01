import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about">
      <h2 className="section-title">About <span className="text-gradient">Me</span></h2>
      <div className="about-content glass-panel">
        <div className="about-text">
          <p>
            I am a Computer Science postgraduate holding an <strong>M.Tech degree</strong>, 
            with a strong foundation in complex algorithms, data structures, and software engineering principles.
          </p>
          <br />
          <p>
            During my postgraduate journey, I discovered a passion for applied AI — specifically, 
            making powerful machine learning models accessible through clean, well-designed web interfaces. 
            I taught myself the full modern stack: <strong>React</strong> for expressive frontends, 
            <strong> FastAPI</strong> for high-performance Python backends, and 
            <strong> Hugging Face Transformers</strong> for state-of-the-art NLP.
          </p>
          <br />
          <p>
            I build complete, production-ready applications — not just toy demos. Every project I ship 
            has a live URL, a clean codebase on GitHub, and is containerized for the cloud. 
            I am actively looking for opportunities where I can bring this technical curiosity, 
            deep theoretical knowledge, and full-stack execution to a real-world product team.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
