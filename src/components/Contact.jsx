import React, { useState } from 'react';
import { Github, Mail, ArrowUp } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText('kkhalidkhan23@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact">
      <h2 className="section-title">Get In <span className="text-gradient">Touch</span></h2>
      <div className="contact-wrapper glass-panel">
        <p className="contact-subtitle">
          I'm actively looking for opportunities. Whether you have a project in mind, 
          a job opening, or just want to connect — my inbox is always open.
        </p>
        <button onClick={handleCopyEmail} className="contact-email-btn btn btn-primary">
          <Mail size={20} />
          {copied ? 'Email Copied to Clipboard!' : 'kkhalidkhan23@gmail.com'}
        </button>
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
