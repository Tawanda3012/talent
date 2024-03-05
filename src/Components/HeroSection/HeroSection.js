import React from "react";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-section-text">
        <h1>Join the uncommon way to hire</h1>
        <p>
          At Uncommon, we train unemployed young adults surviving on less than
          $5 per day for the technology workforce.
        </p>
        <p>We can change lives, one job at a time.</p>
      </div>

      <div className="hero-section-image">
        <img src="../../Assets/Images/Frame 114 (1).png" alt="Uncommon Hero Section" />
      </div>
    </section>
  );
};

export default HeroSection;
