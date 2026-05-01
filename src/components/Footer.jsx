import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer glass-panel">
      <div className="footer-content">
        <div className="footer-left">
          <h3>Khalid Khan</h3>
          <p>Full-Stack AI Engineer</p>
        </div>
        <div className="footer-right">
          <p>© {new Date().getFullYear()} Khalid Khan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
