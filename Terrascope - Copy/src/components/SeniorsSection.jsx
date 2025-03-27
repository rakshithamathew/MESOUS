import React from 'react';
import '../styles/SeniorsSection.css';
import SeniorImage from '../assets/images/seniorImgSvg.svg';
import heart from '../assets/images/heartsvg.svg';

const SeniorsSection = () => {
  return (
    <section className="seniors-section">
      <div className="seniors-background">
        <div className="seniors-content">
          <h2 className="seniors-title">For Our Seniors: <img src={heart} alt="Heart" className="heart-icon" /></h2>
          <h3 className="seniors-subtitle">A Lifetime of Hard Work Shouldn't Lead to This</h3>
          <div style={{display: 'flex'}}>
          <div className="seniors-text">
            <p>
              A lifetime of hard work, providing for family, serving the country, and building a future never came with a warning. No one knew that something as small as a fibre in the air could change everything.
            </p>
            <p>
              Mesothelioma most often affects senior citizens, with nearly two-thirds of cases diagnosed in individuals over 65. It can remain dormant for 20 to 60 years before symptoms appear, making it more common in older adults.
            </p>
            <p>
              A senior's prognosis with mesothelioma can be affected by several factors, including age, overall health before diagnosis, and the treatment options available based on their condition. As a result, seniors with mesothelioma may have a more serious outlook compared to younger patients.
            </p>
          </div>
          <div className="seniors-image-container">
            <img src={SeniorImage} alt="Senior patient" className="seniors-image" />
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeniorsSection; 