import React from 'react';

function Footer() {
  return (
    <footer className="footer-container">
      {/* Footer Content */}
      <div className="footer-content">
        <p className="footer-text">© 2024 Sushant P. All rights reserved.</p>
        
        {/* Social Links */}
        <div className="footer-links">
          <a 
            href="https://www.linkedin.com/in/sushant-p-a105a9240/" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="LinkedIn"
            className="footer-link"
          >
            LinkedIn
          </a>
          <span className="footer-divider">|</span>
          <a 
            href="https://github.com/sush0677?tab=repositories" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="GitHub"
            className="footer-link"
          >
            GitHub
          </a>
          <span className="footer-divider">|</span>
          <a 
            href="https://lensstudio.snapchat.com/creator/soijLSzYV4vAnyYWhm8QaA" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="Snapchat"
            className="footer-link"
          >
            Snapchat
          </a>
          <span className="footer-divider">|</span>
          <a 
            href="https://www.youtube.com/channel/UChhvcgGTBrI9JLZFirWGPRw" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="YouTube"
            className="footer-link"
          >
            YouTube
          </a>
          <span className="footer-divider">|</span>
          <a 
            href="https://www.instagram.com/sushant16777/" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="Instagram"
            className="footer-link"
          >
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
