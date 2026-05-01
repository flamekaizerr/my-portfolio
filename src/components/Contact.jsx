import React from 'react';
import { Github, Mail, ArrowUp } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact">
      <h2 className="section-title">Get In <span className="text-gradient">Touch</span></h2>
      <div className="contact-wrapper glass-panel">
        <p className="contact-subtitle">
          I'm actively looking for opportunities. Whether you have a project in mind, 
          a job opening, or just want to connect — my inbox is always open.
        </p>
        <a href="mailto:kkhalidkhan23@gmail.com" className="contact-email-btn btn btn-primary">
          <Mail size={20} />
          Send Me an Email
        </a>
        <p className="contact-direct-email">
          Or reach out directly at: <strong>kkhalidkhan23@gmail.com</strong>
        </p>
        <div className="contact-socials">
          <a href="https://github.com/flamekaizerr" target="_blank" rel="noreferrer" className="social-link">
            <Github size={20} />
            <span>github.com/flamekaizerr</span>
          </a>
        </div>
      </div>
      <div className="back-to-top">
        <a href="#hero" title="Back to top"><ArrowUp size={20} /></a>
      </div>
    </section>
  );
};

export default Contact;
