import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./HeroSection.css";
import hero from "../../Assets/Images/Frame.png";

const HeroSection = () => {
  return (
    <section className="hero-section container">
      <div className="row">
        <div className="col-md-6">
          <div className="hero-section-text">
            <h1>
              {" "}
              the <span>Uncommon</span>
              <br></br> way to hire
            </h1>
            <p>
              At Uncommon, we train unemployed young adults surviving on less
              than $5 per day for the technology workforce.
            </p>
            <p>We can change lives, one job at a time.</p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="hero-section-image">
            <img src={hero} alt="Description" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
