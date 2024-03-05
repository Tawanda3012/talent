import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import profilesData from './profiles.json';

const ProfileGrid = () => {
  return (
    <div className="container">
      <div className="row">
        {profilesData.map((profile, index) => (
          <div key={index} className="col-md-4">
            <div className="card">
              <img src={profile.image} className="card-img-top" alt={profile.name} />
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
}

export default ProfileGrid;
