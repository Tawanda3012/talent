/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import { useParams } from "react-router-dom";
import profilesData from "../Data/profiles.json";

const ProfilePage = () => {
  const { id } = useParams();
  const profile = profilesData[id - 1];

  if (!profile) return <div>Profile not found</div>;

  return (
    <div className='container' >
      
      <h1>{profile.name}</h1>
      <img src={profile.image} alt={`Image ${profile.id}`} />
      <p>{profile.role}</p>
    </div>
  );
};

export default ProfilePage;