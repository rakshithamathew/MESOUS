import React from 'react';
import '../styles/LandingPage.css';
// Import images
import seniorImage from '../assets/images/hero-main.svg';
import seniorLifestyle from '../assets/images/test.svg';
import formDecoration from '../assets/images/test.svg';
import badge1 from '../assets/images/test.svg';
import badge2 from '../assets/images/test.svg';
import badge3 from '../assets/images/test.svg';
import footerDecoration from '../assets/images/test.svg';
import phoneVector1 from '../assets/phone-vector-1.svg';
import phoneVector2 from '../assets/phone-vector-2.svg';
import phoneVector3 from '../assets/phone-vector-3.svg';
import HeroSmallImg from '../assets/images/hero-small-img.svg';

const LandingPage = () => {
  return (
    <div className="landing-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Standing with Families Affected by Mesothelioma</h1>
          <p>We connect individuals and families impacted by mesothelioma or asbestos exposure with the nation's most trusted legal services, ensuring you secure the justice and support you rightfully deserve</p>
          <div className="hero-card">
            <div className="card-content">
              <div className="card-image">
                <img src={HeroSmallImg} alt="Support icon" />
              </div>
              <div className="card-text">
                <h3 style={{marginBottom: '10px'}}>We're Here for You!</h3>
                <p style={{marginBottom: '10px'}}>Let's discuss your legal options. We'll support you every step of the way.</p>
                <div className="card-button">
                  <button className="primary-button">Reach Out Today</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-image">
          <img src={seniorImage} alt="Happy senior couple getting Medicare advice" />
        </div>
      </section>


    </div>
  );
};

export default LandingPage; 