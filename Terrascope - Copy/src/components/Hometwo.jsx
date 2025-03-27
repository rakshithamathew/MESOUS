import React from "react";
import "../styles/Hometwo.css";
import Vector2 from "../assets/Vector2.png"; // Replace with actual image path
import Vector1 from "../assets/Vector1.png"; // Replace with actual image path

const Hometwo = () => {
  return (
    <div className="container">
      <div className="content">
        <div className="image-section">
          <img src={Vector2} alt="Senior Couple" className="image-large" />
          <img src={Vector1} alt="Family" className="image-small" />
        </div>
        <div className="text-section">
          <h1>
            <span className="italic">At 70,</span>
            <span className="bold">Everyday</span><br></br>
            <span className="italicMatter"> Matters</span>
          </h1>
          <p className="description">
            You’ve earned the right to comfort, clarity, and dignity. Whether it’s understanding
            your options or easing the stress,
          </p>
        </div>
      </div>

      <div className="form-container">
        <p className="form-heading">
          <em>We’re here to walk beside you every step of the way not just as professionals, but as people who care.</em>
        </p>
        <div style={{ display: 'flex' }}>
          <div style={{ flex: 1 }}>
            <label className="label1">First Name</label><br />
            <input type="text" className="input1" /><br />

            <label className="label1">Phone Number</label><br />
            <input type="text" className="input1" /><br />
          </div>

          <div style={{ flex: 1 }}>
            <label className="label1">Last Name</label><br />
            <input type="text" className="input1" /><br />

            <label className="label1">Email ID</label><br />
            <input type="email" className="input1" /><br />
          </div>
        </div>
        <button type="submit">Begin Here</button>

      </div>

    </div>
  );
};

export default Hometwo;
