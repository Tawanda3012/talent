/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { useParams } from "react-router-dom";
import profilesData from "../Data/profiles.json";

const ProfilePage = () => {
  const { id } = useParams();
  const profile = profilesData[id - 1];

  if (!profile) return <div>Profile not found</div>;

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <img src={profile.image} alt={`Image ${profile.id}`} />
          <h1>{profile.name}</h1>
          <p>{profile.role}</p>
        </div>
        <div className="col-md-8">
          
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
