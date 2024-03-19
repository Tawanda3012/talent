/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import profilesData from "../Data/profiles.json";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ProfilePage.css"
import SkillsData from "../Data/SkillsData";
import Experience from "../Components/Misc/Expeience";
import Projects from "../Components/Misc/Projects";
const ProfilePage = () => {
  const { id } = useParams();
  const profile = profilesData[id - 1];

  const [expHeading] = useState([
    {
      icon: require("../Assets/Images/apple.png"),
      name: 'Software Development Sr. Instructor',
      role: 'uncommon.org',
      id: 1
    },
    {
      icon: require("../Assets/Images/apple.png"),
      name: 'Harare, Zimbabwe',
      role: 'January 2022 - Present',
      id: 2
    },
  ])
  if (!profile) return <div>Profile not found</div>;

  return (
    <>
      <div className="container-fluid" id="profilePage">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-4 innerProfilePage">
            <img src={profile.image} alt={`Image ${profile.id}`} className="img-fluid" />
            <h1>{profile.name}</h1>
            <p>{profile.role}</p>
            <button type="button" className="btn btn-primary">Get In Touch</button>
          </div>
          <div className="col-12 col-sm-12 col-md-8">

            <div className="bio container">
              <h2>Bio</h2>
              <p>
                Certified Google Cloud Developer with 5 years of experience in the technology education industry.
                Enthusiastic learner interested in building software for innovative companies that think outside the box.Eager
                to leverage experience in Cloud technologies and software development instructing to contribute toambitious
                projects and drive organizational growth.
              </p>
              <div className="skills">
                <h2>Skills</h2>
                <div className="row">
                  <SkillsData />
                </div>
              </div>
            </div>

            <div className="expirence mt-5">
              <div className="container row">
                <div className="innerExpe row">
                  <h2 className="mb-4">Experience</h2>
                  {expHeading.map((exper) => (
                    <div className="col-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6" key={exper.id}>
                      <div className="d-flex">
                        <img src={exper.icon} alt="logo" className="img-fluid" />
                        <div className="row">
                          <h4>{exper.name}</h4>
                          <p>{exper.role}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                  <div className="col-12">
                    <div className="container">
                      <p>Trained unemployed young adults for employment in the technology industry.</p>
                      <ul>
                        <li>Oversaw all coding education at the Uncommon.org Innovation Hub in Dzivarasekwa.</li>
                        <li>Oversaw all coding education at the Uncommon.org Innovation Hub in Dzivarasekwa.</li>
                        <li>Oversaw all coding education at the Uncommon.org Innovation Hub in Dzivarasekwa.</li>
                        <li>Oversaw all coding education at the Uncommon.org Innovation Hub in Dzivarasekwa.</li>
                      </ul>
                      <div className="row">
                        {expHeading.map((exper) => (
                          <div className="col-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6" key={exper.id}>
                            <div className="d-flex">
                              <img src={exper.icon} alt="icon" />
                              <div className="row">
                                <h4>{exper.name}</h4>
                                <p>{exper.role}</p>
                              </div>
                            </div>
                          </div>
                        ))}

                      </div>
                    </div>
                  </div>
                </div>

                <Experience />
                <Projects />
              </div>

            </div>

          </div>

        </div>
      </div>

    </>
  );
};

export default ProfilePage;
