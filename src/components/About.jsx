import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about">
      <h2 className="section-title">About <span className="text-gradient">Me</span></h2>
      <div className="about-content glass-panel">
        <div className="about-text">
          <p>
            I am a highly motivated Computer Science professional holding an <strong>M.Tech degree</strong>. 
            My passion lies at the intersection of complex algorithms and beautiful user experiences.
          </p>
          <br />
          <p>
            Unlike traditional backend engineers, I believe that powerful Artificial Intelligence is useless 
            if it isn't accessible. That's why I specialize in building complete, end-to-end applications — 
            from fine-tuning Hugging Face Transformers and designing scalable APIs with FastAPI, to crafting 
            stunning, responsive glassmorphism interfaces in React.
          </p>
          <br />
          <p>
            When I'm not coding, I'm constantly learning about the latest advancements in LLMs and modern 
            web architecture. I'm currently looking for opportunities where I can leverage my full-stack AI skills 
            to build impactful products.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
