import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar glass-panel">
      <div className="nav-brand">Khalid <span className="text-gradient">Khan</span></div>
      <ul className="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
      </ul>
      <div className="nav-socials">
        <a href="https://github.com/flamekaizerr" target="_blank" rel="noreferrer"><Github size={20} /></a>
        <a href="https://linkedin.com" target="_blank" rel="noreferrer"><Linkedin size={20} /></a>
        <a href="mailto:kkhalidkhan23@gmail.com"><Mail size={20} /></a>
      </div>
    </nav>
  );
};

export default Navbar;
