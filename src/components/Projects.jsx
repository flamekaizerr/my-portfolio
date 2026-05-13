import React, { useState } from 'react';
import { ExternalLink, Github, ChevronDown, ChevronUp } from 'lucide-react';
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
    title: "AI Resume Analyzer",
    description: "A full-stack resume screening platform that compares resumes against job descriptions, detects skill gaps, scores fit across multiple dimensions, and delivers concise recruiter-style improvement suggestions.",
    tags: ["React", "FastAPI", "Hugging Face", "Transformers", "SQLite", "Vercel"],
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=1000&auto=format&fit=crop",
    liveLink: "https://ai-resume-analyzer-three-eosin.vercel.app",
    githubLink: "https://github.com/flamekaizerr/ai-resume-analyzer"
  },
  {
    title: "AI Meeting Audio Summarizer",
    description: "Upload meeting audio, generate accurate transcripts using Groq Whisper, summarize discussions, and extract actionable items with OpenRouter Gemma in a polished, responsive dashboard.",
    tags: ["React", "FastAPI", "Supabase", "Groq Whisper", "OpenRouter", "Docker"],
    image: "https://images.unsplash.com/photo-1555597673-b21d5c935865?q=80&w=1000&auto=format&fit=crop",
    liveLink: "https://frontend-flax-three-43.vercel.app",
    githubLink: "https://github.com/flamekaizerr/ai-meeting-summarizer"
  },
  {
    title: "Taskflow",
    description: "A full-stack task and project management app where teams share a board to track projects and tickets. Features a role-based system with admins and members, JWT authentication, and a clean React UI backed by a FastAPI + SQLite backend.",
    tags: ["React", "FastAPI", "SQLAlchemy", "SQLite", "JWT", "Railway", "Vercel"],
    image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?q=80&w=1000&auto=format&fit=crop",
    liveLink: "https://taskflow-three-murex.vercel.app",
    githubLink: "https://github.com/flamekaizerr/taskflow"
  }
];

const Projects = () => {
  const [showAllMoreProjects, setShowAllMoreProjects] = useState(false);
  const visibleMoreProjects = showAllMoreProjects ? moreProjects : moreProjects.slice(0, 6);

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
            {visibleMoreProjects.map((project, index) => (
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
          
          {moreProjects.length > 6 && (
            <div className="show-more-wrapper">
              <button 
                onClick={() => setShowAllMoreProjects(!showAllMoreProjects)} 
                className="btn btn-secondary glass-panel show-more-btn"
              >
                {showAllMoreProjects ? (
                  <>Show Less <ChevronUp size={16} /></>
                ) : (
                  <>Show All {moreProjects.length} Projects <ChevronDown size={16} /></>
                )}
              </button>
            </div>
          )}
        </>
      )}
    </section>
  );
};

export default Projects;
