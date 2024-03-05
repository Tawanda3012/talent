import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./HeroSection.css";
import hero from "../../Assets/Images/Frame.png";
import google from "../../Assets/Images/google.png"

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
        <div className="col-md-6 ">
          <div className="hero-section-image">
            <img src={hero} alt="Description" />
          </div>
        </div>
      </div>

      <div className="trusted-companies ">
         <h2>trusted by organizations big and small</h2>
         <div className="company-logo row ">
           
           <img src={google} alt="google logo" />
           <img src={google} alt="google logo" />
           <img src={google} alt="google logo" />
           <img src={google} alt="google logo" />
           <img src={google} alt="google logo" />
         </div>
      </div>
     
    </section>
  );
};

export default HeroSection;
