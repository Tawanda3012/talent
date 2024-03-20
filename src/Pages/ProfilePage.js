/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import { useParams } from "react-router-dom";
import profilesData from "../Data/profiles.json";
import"./ProfilePage.css";

const ProfilePage = () => {
  const { id } = useParams();
  const profile = profilesData[id - 1];

  if (!profile) return <div>Profile not found</div>;

  return (
    <div className='container' >
      <div className='main-profile '>
      <img src={profile.image} alt={`Image ${profile.id}`} />
      <p>{profile.role}</p>
      <h4>{profile.name}</h4>
      <button>Get In Touch</button>
    </div>
    </div>
  );
};

export default ProfilePage;