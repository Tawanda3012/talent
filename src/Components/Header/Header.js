import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';

const Header = () => {
  const navigate = useNavigate(); // Use useNavigate hook for navigation

  const handleJoinClick = () => {
    // Handle logic for joining the Uncommon team
    // For example, navigate to a join page or show a modal
    navigate('/join'); // Navigate to the join page or show a modal
  };

  const handleSearchClick = () => {
    // Scroll to the section where you want to display talent search
    const talentSection = document.getElementById('talentSection');
    talentSection.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="header container">
      <div className="header__logo">
        <h1 className="header__title">Uncommon</h1>
      </div>
      <nav className="header__navigation">
        <ul className="header__navigation-list">
          <li className="header__navigation-item" onClick={handleJoinClick}>Join</li>
          <li className="header__navigation-item" onClick={handleSearchClick}>Search for Talent</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;