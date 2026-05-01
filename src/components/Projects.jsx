import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import './Projects.css';

const projects = [
  {
    title: "AI Sentiment Analyzer",
    description: "A full-stack, real-time AI text analysis application. Features Sentiment Analysis, Emotion Detection, and Named Entity Recognition using state-of-the-art Hugging Face models.",
    tags: ["React", "FastAPI", "Hugging Face", "SQLite", "Docker"],
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1000&auto=format&fit=crop", // Placeholder deep tech image
    liveLink: "https://ai-sentiment-analyzer-tau.vercel.app/",
    githubLink: "https://github.com/flamekaizerr/ai-sentiment-analyzer"
  },
  {
    title: "Upcoming Project #2",
    description: "Currently brainstorming the next big application. It will likely feature complex state management, real-time web sockets, and a gorgeous UI.",
    tags: ["React", "Node.js", "WebSockets"],
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000&auto=format&fit=crop",
    liveLink: "#",
    githubLink: "#"
  }
];

const Projects = () => {
  return (
    <section id="projects">
      <h2 className="section-title">Featured <span className="text-gradient">Projects</span></h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card glass-panel">
            <div className="project-image" style={{ backgroundImage: `url(${project.image})` }}></div>
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag, i) => (
                  <span key={i} className="ptag">{tag}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.liveLink} target="_blank" rel="noreferrer" className="btn btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>
                  Live Demo <ExternalLink size={16} />
                </a>
                <a href={project.githubLink} target="_blank" rel="noreferrer" className="btn btn-secondary glass-panel" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>
                  Source <Github size={16} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
