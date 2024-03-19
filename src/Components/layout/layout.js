/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from 'react';
import Image from "../../Assets/Images/Frame.png";
import DonationForm from '../DonationForm/DonationForm';
import "./layout.css";
 

function Layout() {
  const [showDonationForm, setShowDonationForm] = useState(false);
  const [donationAmount, setDonationAmount] = useState(0);
  const [donationMessage, setDonationMessage] = useState('');
  const minDonationAmount = 5;

  const handleDonationClick = () => setShowDonationForm(true);

  const handleDonationMessageChange = (event) => setDonationMessage(event.target.value);

  const handleDonationAmountChange = (event) => setDonationAmount(parseInt(event.target.value, 10));

  const handleDonationSubmit = (event) => {
    event.preventDefault();
    console.log(`Donating ${donationAmount} with message: ${donationMessage}`);
    setShowDonationForm(false);
    setDonationAmount(0);
    setDonationMessage('');
  }

  const handleBackButtonClick = () => setShowDonationForm(false);

  return (
    <div className="">
      <div className="stories container">
        <div className="stories-images">
          <img src={Image} alt="Image description" />
          <img src={Image} alt="Image description" />
          <img src={Image} alt="Image description" />
          <img src={Image} alt="Image description" />
          <img src={Image} alt="Image description" />
        </div>
        <h2>uncommon stories start with people like you.</h2>
        {showDonationForm && (
          <div className="donation-form-overlay">
            <div className="donation-form">
              <button onClick={handleBackButtonClick}>Back</button>
              <DonationForm
                onClose={() => setShowDonationForm(false)}
                onDonationAmountChanged={handleDonationAmountChange}
                onDonationMessageChanged={handleDonationMessageChange}
                onDonationSubmit={handleDonationSubmit}
                donationAmount={donationAmount}
                donationMessage={donationMessage}
                minDonationAmount={minDonationAmount}
                required={true}
              />
            </div>
          </div>
        )}
        <div className="stories-donation">
          <button onClick={handleDonationClick}>Donate</button>
        </div>
      </div>
    </div>
  );
}

export default Layout;