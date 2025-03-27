import React from "react";
import "../styles/Quote.css";
import leftSvg from "../assets/images/left.svg";
import rightSvg from "../assets/images/left.svg";

const Quote = () => {
  return (
    <div className="quote-container">
      <div className="quote-content">
        <img src={leftSvg} alt="left" className="quote-icon" />
        <img src={rightSvg} alt="right" className="quote-icon" />
      </div>
      <p style={{position:'absolute', width:'70%', color:'#2E4A7D', fontSize:'20px'}}>
        Decades ago, asbestos was everywhere on job sites, in homes, even in
        military uniforms. No one knew the dangers. No one said it could
        remain in the body for years, silently causing harm.
      </p>
    </div>
  );
};

export default Quote; 