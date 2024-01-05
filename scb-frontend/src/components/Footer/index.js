import React from 'react';
import './Footer.css';

import mainlogo from '../assets/Asset 13@4x-8.png'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
        <img className='footer-logo1' src={mainlogo} alt=''></img>
        </div>
        <nav className="footer-nav">
          <ul>
            <h3 className="nav-heading">Information</h3>
            <li><a href="#">Introduction</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms & Conditions</a></li>
          </ul>
          <ul>
            <h3 className="nav-heading">Conference Secretariat</h3>
            <li><a href="#">Department Of Oral Medicine
And Radiology</a></li>

          </ul>
        
      
      <div className="footer-contact">
      <h3 className="nav-heading">Contact Us</h3>
        <p>
          Department of Oral Medicine and Radiology,<br />
          SCB Dental College and Hospital, Manglabag, 753001, Cuttack.
        </p>
        <p>
          Phone – +91 9777492429<br />
          Email Us at – ooocuttack2024@gmail.com
        </p>
      </div>
      </nav>
      </div>
    </footer>
  );
};

export default Footer;
