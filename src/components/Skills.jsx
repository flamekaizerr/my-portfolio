import React from 'react';
import './Skills.css';

const skills = [
  { category: "Frontend", items: ["React", "Vite", "JavaScript (ES6+)", "HTML5/CSS3", "Tailwind CSS"] },
  { category: "Backend", items: ["Python", "FastAPI", "Node.js", "Express", "REST APIs"] },
  { category: "AI & Data", items: ["Hugging Face", "PyTorch", "NLP", "Pandas", "Scikit-Learn"] },
  { category: "Tools & DevOps", items: ["Git/GitHub", "Docker", "SQLite/SQLAlchemy", "Vercel", "Linux"] }
];

const Skills = () => {
  return (
    <section id="skills">
      <h2 className="section-title">My <span className="text-gradient">Arsenal</span></h2>
      <div className="skills-grid">
        {skills.map((skillGroup, index) => (
          <div key={index} className="skill-card glass-panel">
            <h3>{skillGroup.category}</h3>
            <div className="skill-tags">
              {skillGroup.items.map((skill, i) => (
                <span key={i} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
