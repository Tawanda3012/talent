import React, { useState } from "react";
import DonationForm from "../DonationForm/DonationForm";

function Layout() {
  const [showDonationForm, setShowDonationForm] = useState(false);

  const handleDonationClick = () => {
    setShowDonationForm(true);
  }

  const handleCloseDonationForm = () => {
    setShowDonationForm(false);
  }

  return (
    <div className="container">
      <div className="stories">
        <div className="stories-images"></div>
        <h2>uncommon stories start with people like you.</h2>
        <div className="stories-donation">
          <button onClick={handleDonationClick}>Donate</button>
          {showDonationForm && <DonationForm onClose={handleCloseDonationForm} />}
        </div>
      </div>
    </div>
  );
}

export default Layout;