import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© {new Date().getFullYear()} Sunny. All rights reserved.</p>
        <div className="footer-socials">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="mailto:sunnykumar813011@gmail.com">Email</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;