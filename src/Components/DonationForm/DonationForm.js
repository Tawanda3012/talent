import React, { useState } from "react";

function DonationForm({ onClose }) {
  const [donationAmount, setDonationAmount] = useState(0);

  const handleDonationChange = (event) => {
    setDonationAmount(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle donation submission logic here
    // For example, send donation amount to backend
    console.log("Donation submitted:", donationAmount);
    // Close the form after submission
    onClose();
  }

  return (
    <div className="donation-form">
      <form onSubmit={handleSubmit}>
        <label htmlFor="donationAmount">Amount:</label>
        <input
          type="number"
          id="donationAmount"
          value={donationAmount}
          onChange={handleDonationChange}
        />
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" />
        <button type="submit">Submit Donation</button>
      </form>
    </div>
  );
}

export default DonationForm;