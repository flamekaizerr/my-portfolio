import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { moreProjects } from '../data/moreProjects';
import './Projects.css';

const featuredProjects = [
  {
    title: "AI Sentiment Analyzer",
    description: "A production-ready, full-stack machine learning app featuring real-time Sentiment Analysis, Emotion Detection, and Named Entity Recognition. Built with 3 Hugging Face Transformer models, a FastAPI backend, and a React glassmorphism UI. Containerized with Docker and deployed live.",
    tags: ["React", "FastAPI", "Hugging Face", "SQLite", "Docker", "Vercel"],
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1000&auto=format&fit=crop",
    liveLink: "https://ai-sentiment-analyzer-tau.vercel.app/",
    githubLink: "https://github.com/flamekaizerr/ai-sentiment-analyzer"
  },
  {
    title: "Project #2 (Placeholder)",
    description: "Currently brainstorming the next big application. It will likely feature complex state management, modern cloud architecture, and a gorgeous UI. [FUTURE AI AGENT: When the user builds their next project, replace this placeholder with the real project details.]",
    tags: ["TBD", "React", "Cloud"],
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000&auto=format&fit=crop",
    liveLink: "#",
    githubLink: "#"
  }
];

const Projects = () => {
  return (
    <section id="projects">
      {/* ── Featured Projects ── */}
      <h2 className="section-title">Featured <span className="text-gradient">Projects</span></h2>
      <div className="projects-grid">
        {featuredProjects.map((project, index) => (
          <div key={index} className="project-card glass-panel">
            <div
              className="project-image"
              style={{ backgroundImage: `url(${project.image})` }}
            />
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag, i) => (
                  <span key={i} className="ptag">{tag}</span>
                ))}
              </div>
              <div className="project-links">
                {project.liveLink !== '#' && (
                  <a href={project.liveLink} target="_blank" rel="noreferrer" className="btn btn-primary plink-btn">
                    Live Demo <ExternalLink size={15} />
                  </a>
                )}
                <a href={project.githubLink} target="_blank" rel="noreferrer" className="btn btn-secondary glass-panel plink-btn">
                  Source <Github size={15} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ── More Work ── */}
      {moreProjects.length > 0 && (
        <>
          <div className="more-work-divider">
            <span>More Work</span>
          </div>
          <div className="more-grid">
            {moreProjects.map((project, index) => (
              <div key={index} className="more-card glass-panel">
                <div className="more-card-header">
                  <h4>{project.title}</h4>
                  <a href={project.githubLink} target="_blank" rel="noreferrer">
                    <Github size={18} />
                  </a>
                </div>
                <div className="project-tags" style={{ marginTop: '1rem' }}>
                  {project.tags.map((tag, i) => (
                    <span key={i} className="ptag">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </section>
  );
};

export default Projects;
