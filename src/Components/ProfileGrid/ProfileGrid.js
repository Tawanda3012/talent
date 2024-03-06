/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import profilesData from "../../Data/profiles.json";

const ProfileGrid = () => {
  const [fetchedProfilesData, setFetchedProfilesData] = useState([]);

  useEffect(() => {
    setFetchedProfilesData(profilesData); // Use the imported profilesData directly
  }, []);

  return (
    <div className="container">
      <div className="row">
        {fetchedProfilesData.map((profile, index) => (
          <div key={index} className="col-md-3 mb-4 mt-5">
            <div className="card">
              <img
                src={profile.image}
                className="card-img-top"
                alt={`Image ${profile.id}`}
                style={{ height: "200px", width: "100%" }}
              />
              <div className="card-body">
                <h5 className="card-title">{profile.name}</h5>
                <p className="card-text">{profile.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileGrid;