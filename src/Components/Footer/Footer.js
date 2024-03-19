/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from 'react';
import './Footer.css';
import Layout from '../layout/layout';
import Image from "../../Assets/Images/Frame.png";
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
  const [email, setEmail] = useState('');
  const instagramUrl = "https://www.instagram.com/your-instagram-profile";
  const linkedinUrl = "https://www.linkedin.com/in/your-linkedin-profile";
  const blogUrl = "https://www.yourblog.com";

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic for handling the form submission here
    console.log('Email submitted: ', email);
  };

  return (
    <footer className="footer container">
      <Layout />
      <div className='row'>
        <div className='col-md-4'>
          <div className='contact-image'>
            <img src={Image} alt="Image description" className='img-fluid' />
            <FontAwesomeIcon icon={faInstagram} />
          </div>
        </div>
        <div className='col-md-8'>
          <div className='contact-email'>
            <div className='contact-links '>
              <a href={instagramUrl} target="_blank" rel="noopener noreferrer">
                {/* <FontAwesomeIcon icon={faInstagram} /> */} Instagram
              </a>
              <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
                {/* <FontAwesomeIcon icon={faLinkedin} /> */}LinkediN
              </a>
              <a href={blogUrl} target="_blank" rel="noopener noreferrer">
                Blog
              </a>
            </div>
            <h3>
              subscribe <br /> to our mailing list
            </h3>
            <div onSubmit={handleSubmit} className='fom' >
         
              <input
                type="email"
                id="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="Enter email"
                required
              />
              <button type="submit">Send</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;