import React from 'react';
import '../styles/Navbar.css';
import phoneVector1 from '../assets/phone-vector-1.svg';
import phoneVector2 from '../assets/phone-vector-2.svg';
import phoneVector3 from '../assets/phone-vector-3.svg';

const Navbar = () => {
  return (
    <div className="navbar">
      <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
      <div className="logo-container">
        <h1 className="logo">Logo</h1>
      </div>

      <div className="nav-links">
        <span className="nav-item">Home</span>
        <span className="nav-item">Mesothelioma</span>
        <span className="nav-item">About us</span>
      </div>
      </div>
      
      <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
      <div className="contact-container">
        <div className="phone-icon-container">
          <div className="phone-circle">
            <div className="phone-icon">
              <img src={phoneVector1} alt="Phone Icon" className="vector-1" />
              <img src={phoneVector2} alt="Phone Icon" className="vector-2" />
              <img src={phoneVector3} alt="Phone Icon" className="vector-3" />
            </div>
          </div>
        </div>
        <div className="phone-info">
          <p className="call-text">Call Us For Help</p>
          <p className="phone-number">2625151485</p>
        </div>
      </div>
      <div className="claim-button">
        <span>Claim Form</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar; 