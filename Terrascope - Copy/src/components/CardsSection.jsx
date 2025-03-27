import React from "react";
import "../styles/CardsSection.css";
import image1 from "../assets/images/cardImg1.svg";
import image2 from "../assets/images/cardImg2.png";
import image3 from "../assets/images/cardImg3.svg";
import image4 from "../assets/images/cardImg4.svg";
import cardHeart from "../assets/images/cardHeart.svg";

const CardsSection = () => {
  return (
    <div className="cards-container">
      {/* First Row */}
      <div className="cards-row">
        <div className="card">
          <p className="card-title">Average compensation</p>
          <h2>$1M to $2M</h2>
        </div>
        <div className="card">
          <p className="card-title">Asbestos trust funds hold</p>
          <h2>$30 Billion,</h2>
          <p className="card-subtitle">as of 2025</p>
        </div>
        <div className="card">
          <p className="card-title">Each year</p>
          <h2>2,000 +</h2>
          <p className="card-subtitle">people receive compensation</p>
        </div>
      </div>

      {/* Second Row */}
      <div className="cards-row">
        <div
          className="image-card"
          style={{ backgroundImage: `url(${image1})` }}
        ></div>
        <div
          className="image-card"
          style={{ backgroundImage: `url(${image2})` }}
        ></div>
        <div
          className="image-card"
          style={{ backgroundImage: `url(${image3})` }}
        ></div>
        <div
          className="image-card card4"
          style={{ backgroundImage: `url(${image4})` }}
        ></div>
        <div className="purple-card">
          <h3 style={{color:'#ffff'}}>Want to know more about Mesothelioma Cancer?</h3>
          <a href="#" className="learn-more">Learn More ➜</a>
          <img style={{position:'absolute', right:'62px', marginTop:'20px'}} src={cardHeart} alt="heart" className="card-heart" />
        </div>
      </div>
    </div>
  );
};

export default CardsSection; 