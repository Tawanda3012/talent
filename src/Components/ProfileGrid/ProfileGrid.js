/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import profilesData from "../../Data/profiles.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faIndustry } from "@fortawesome/free-solid-svg-icons";
import "./ProfileGrid.css";





const industries = [
  { value: "Google", label: "Google" },
  { value: "UX-UI", label: "UX-UI" },
  { value: "education", label: "Education" },
  // Add more industry options as needed
];

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
    <div className="container" id="talentSection">
      <div className="talent">
        <h2>find top tech talent</h2>
        <div className="talent-filter">
          <form onSubmit={handleSearch} className="search-form">
            <div className="search-input">
              <input
                type="text"
                placeholder="Name or Keyword"
                value={searchKeyword}
                onChange={(e) => setSearchKeyword(e.target.value)}
              />
              <button type="submit" onClick={handleSearch}>
                <FontAwesomeIcon icon={faSearch} />
              </button>
            </div>

            {/* <button type="submit" onClick={handleSearch}>
                <FontAwesomeIcon icon={faIndustry} />
              </button> */}

            <select
              value={industryFilter}
              onChange={(e) => setIndustryFilter(e.target.value)}
            >
              <option value="">
                <FontAwesomeIcon icon={faIndustry} /> Industries
              </option>
              {industries.map((industry) => (
                <option key={industry.value} value={industry.value}>
                  {industry.label}
                </option>
              ))}
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
          // added responsive design for mobile view
          <div key={index} className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 col-xxl-3 mb-4 mt-5">
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
