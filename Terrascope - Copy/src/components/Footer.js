import React from 'react';
import '../styles/Footer.css';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-logo">
            <div className="logo-container">
              <h2>Logo</h2>
            </div>
          </div>
          
          <div className="footer-nav">
            <div className="nav-item">Home</div>
            <div className="nav-item">About us</div>
            <div className="nav-item">Mesothelioma</div>
          </div>
          
          <div className="footer-newsletter">
            <h3>Join our newsletter</h3>
            <div className="newsletter-form">
              <input type="email" placeholder="Enter email id" />
              <button type="submit">Subscribe</button>
            </div>
          </div>
        </div>
        
        <div className="separator"></div>
        
        <div className="footer-bottom">
          <div className="contact-info">
            <p>info@connect2attorney.com</p>
          </div>
          
          <div className="social-icons">
            <div className="social-icon"><FaFacebook /></div>
            <div className="social-icon"><FaTwitter /></div>
            <div className="social-icon"><FaInstagram /></div>
            <div className="social-icon"><FaLinkedin /></div>
          </div>
          
          <div className="copyright">
            <span className="copyright-symbol">©</span>
            <span className="copyright-year">2025.</span>
            <span className="copyright-text">All rights reserved</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 