import React from 'react';
import './reg.css'
import LogoSection from '../Logo-Section';
import NavBar from '../Nav-Bar';
import Header from '../Header';
import qrImagePath from './scan-sbi.png';

const QRCodeCard = () => {
     // Replace with actual QR code image path
    const googleFormLink = 'https://docs.google.com/forms/d/e/1FAIpQLSfVleDrDHSd0wu6gfTJt3i-lObjNc8sYzjWhwyyK-g7gsFVSQ/viewform'; // Replace with Google Form link
  
    return (
      <div className="qr-code-card">
        <img src={qrImagePath} alt="QR Code" />
        <p>SCAN THE QR TO MAKE YOUR PAYMENT</p>
        <a href={googleFormLink} target="_blank" className="button">
          Fill Registration Form
        </a>
      </div>
    );
  };

const RegistrationTable = () => {
  return (
    <div>
        <LogoSection></LogoSection>
        <NavBar></NavBar>
        <Header></Header>
        <h1 className='mainregister'>Registration Details</h1>
      <table>
        <thead>
          <tr>
            <th>Registration Category</th>
            <th>Early Bird (up to 31st Dec 2023)</th>
            <th>1st Call (up to Feb 29 2024)</th>
            <th>Spot</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>PG Student Delegate without Banquet</td>
            <td>₹3540<br />₹3000 + 18% GST included</td>
            <td>₹4720<br />₹4000 + 18% GST included</td>
            <td>₹5900<br />₹5000 + 18% GST included</td>
          </tr>
          <tr>
            <td>PG Student Delegate with Banquet</td>
            <td>₹5310<br />₹4500 + 18% GST included</td>
            <td>₹6490<br />₹5500 + 18% GST included</td>
            <td>₹7080<br />₹6000 + 18% GST included</td>
          </tr>
          <tr>
            <td>Faculty Delegate</td>
            <td>₹7080<br />₹6000 + 18% GST included</td>
            <td>₹8260<br />₹7000 + 18% GST included</td>
            <td>₹8850<br />₹7500 + 18% GST included</td>
          </tr>
          <tr>
            <td>Accompanying Person</td>
            <td>₹5310<br />₹4500 + 18% GST</td>
            <td>₹5310<br />₹4500 + 18% GST</td>
            <td>₹5310<br />₹4500 + 18% GST</td>
          </tr>
          <tr>
            <td>Foreign Delegates</td>
            <td>USD 200</td>
            <td>USD 250</td>
            <td>USD 300</td>
          </tr>
        </tbody>
      </table>
<div className='container posf'>
<div className="account-details-card">
      <h2 className='headacc'>ACCOUNT DETAILS</h2>
      <p>
        Beneficiary Name: INDIAN ACADEMY OF ORAL MEDICINE AND RADIOLOGY
      </p>
      <p>
        Beneficiary Address: Dept. Of Oral Medicine And Radiology, SCB Dental
        College & Hospital, Cuttack-753007
      </p>
      <p>Bank Account Number: 41904547939</p>
      <p>Name Of The Bank: STATE BANK OF INDIA (005760)</p>
      <p>Branch Name: SCB MEDICAL COLLEGE CAMPUS</p>
      <p>Account Type: Current Bank Account</p>
      <p>IFSC Code: SBIN0005760</p>
      <p>
        NOTE: Payment Should Be Completed Before Filling The Registration Form.
        Payment May Be Done Via UPI (BHIM, Phone PE, Google Pay, Pay TM), NEFT,
        Internet Banking Only
      </p>
    </div>
    <QRCodeCard></QRCodeCard>
</div>
     

      <div className="guidelines-container">
      <h2 className="guidelines-heading">Registration Is Mandatory For All Delegates</h2>
      <ul className="guidelines-list">
        <li>Registration Is Mandatory For All Delegates.</li>
        <li>
          The Conference Registration Includes:
          <ul>
            <li>Registration Kit</li>
            <li>Gift</li>
            <li>Conference Attendance Certificate (Not applicable for Spot Registration and accompanying persons. Children below 5 years of age are complimentary.)</li>
          </ul>
        </li>
        <li>
          Delegates Registering Via Spot Registration Will Not Be Permitted For:
          <ul>
            <li>Scientific Paper Presentation</li>
            <li>Poster Presentation</li>
          </ul>
        </li>
        <li>The Registration Fee Does Not Cover Accommodation And Transportation.</li>
        <li>Registration Fee Is Non-Transferable And Non-Refundable.</li>
        <li>
          Documents Required For Filling Up The Registration Form:
          <ul>
            <li>Soft Copy Of Passport Size Photograph (Jpeg Format)</li>
            <li>Transaction Details Screen Shot (Jpeg Format)</li>
          </ul>
        </li>
      </ul>
    </div>
    </div>
  );
};

export default RegistrationTable;
