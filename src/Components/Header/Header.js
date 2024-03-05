import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';

const Header = () => {
  const navigate = useNavigate(); // Use useNavigate hook for navigation
  const [showSearchInput, setShowSearchInput] = useState(false); // State to track whether search input should be displayed
  const [searchQuery, setSearchQuery] = useState(''); // State to store the search query

  const handleJoinClick = () => {
    // Handle logic for joining the Uncommon team
    // For example, navigate to a join page or show a modal
    navigate('/join'); // Navigate to the join page or show a modal
  };

  const handleSearchClick = () => {
    setShowSearchInput(true);
  };

  const handleSearchInputChange = (event) => {
    // Update the search query when the input value changes
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault(); // Prevent form submission
    // Perform search operation with the searchQuery
    console.log('Perform search with query:', searchQuery);
  };

  return (
    <header className="header container">
      <div className="header__logo">
        {/* <img src="/assets/images/logo.png" alt="Uncommon Logo" /> */}
        <h1 className="header__title">Uncommon</h1>
      </div>
      <nav className="header__navigation">
        <ul className="header__navigation-list">
          <li className="header__navigation-item" onClick={handleJoinClick}>Join</li>
          <li className="header__navigation-item" onClick={handleSearchClick}>Search for Talent</li>
        </ul>
      </nav>
      {showSearchInput && (
        <div className="header__search-input">
          <form onSubmit={handleSearchSubmit}>
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery} // Bind the search input value to the searchQuery state
              onChange={handleSearchInputChange}
            />
            <button type="submit">Search</button>
          </form>
        </div>
      )}
    </header>
  );
}

export default Header;