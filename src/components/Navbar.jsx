import React from 'react';
import { Github, Mail } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar glass-panel">
      <div className="nav-brand">Khalid <span className="text-gradient">Khan</span></div>
      <ul className="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="nav-socials">
        <a href="https://github.com/flamekaizerr" target="_blank" rel="noreferrer" title="GitHub"><Github size={20} /></a>
        <a href="mailto:kkhalidkhan23@gmail.com" title="Email Me"><Mail size={20} /></a>
      </div>
    </nav>
  );
};

export default Navbar;
