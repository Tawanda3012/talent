/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import profilesData from "../../Data/profiles.json";
import './ProfileGrid.css'

const ProfileGrid = () => {
  const [fetchedProfilesData, setFetchedProfilesData] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [industryFilter, setIndustryFilter] = useState("");

  useEffect(() => {
    setFetchedProfilesData(profilesData);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();

    const filteredProfiles = profilesData.filter((profile) => {
      const matchesName = profile.name
        .toLowerCase()
        .includes(searchKeyword.toLowerCase());
      const matchesRole = profile.role
        .toLowerCase()
        .includes(searchKeyword.toLowerCase());
      const matchesIndustry =
        industryFilter === "" ||
        profile.role.toLowerCase().includes(industryFilter.toLowerCase());
      return (matchesName || matchesRole) && matchesIndustry;
    });

    setFetchedProfilesData(filteredProfiles);
  };
  return (
    <div className="container">
      <div className="talent">
        <h2>find top tech talent</h2>
        <div className="talent-filter">
          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Search by name or role"
              value={searchKeyword}
              onChange={(e) => setSearchKeyword(e.target.value)}
            />

            <select
              value={industryFilter}
              onChange={(e) => setIndustryFilter(e.target.value)}
            >
              <option value="">All Industries</option>
              <option value="Google ">Google </option>
              <option value="UX-UI">UX-UI</option>
              <option value="education">Education</option>
              {/* Add more industry options */}
            </select>

            <button type="submit" onClick={handleSearch}>
              Search
            </button>
          </form>
        </div>
      </div>
      <div className="row">
        {fetchedProfilesData.map((profile, index) => (
          <div key={index} className="col-md-3 mb-4 mt-5">
            <Link
              to={`/profile/${profile.id}`}
              style={{ textDecoration: "none" }}
            >
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
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileGrid;
