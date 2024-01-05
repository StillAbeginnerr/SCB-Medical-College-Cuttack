import React from 'react';
import './sponsor.css'; // Import your CSS file
import LogoSection from '../../Logo-Section';
import NavBar from '../../Nav-Bar';
import Header from '../../Header';

const SponsorshipTable = () => {
  const sponsorshipData = [
    { type: 'Principal Sponsor', amount: '25 Lacs', benefits: 'Trade fair stall at prime location + 4 coupons for lunch for 2 days + 2 banquet coupons + Special mention in website and brochure + 1-min clip during guest lectures + Unlimited banner placements + 1 standee placement at venue entrance + Ad-inserts in registration' },
    { type: 'Co-Sponsor', amount: '15 Lacs', benefits: 'Trade fair stall + 2 coupons for lunch for 2 days + 1 banquet coupon + Special mention in website and brochure + 1-min clip during guest lectures + Limited banner placements + 1 standee placement at venue entrance + Ad-insert in registration kit' },
    { type: 'Academic Sponsor', amount: '10 Lacs', benefits: 'Trade fair stall + One 20 min lecture of choice + 2 coupons for lunch for 2 days + Special award on company\'s name + Special mention in website and brochure + 1-min clip during guest lectures + Limited banner placements + 1 standee placement at venue entrance' },
    { type: 'Privileged Sponsor', amount: '5 Lacs', benefits: 'Special award + Special mention in website and brochure + 2-min clip during guest lectures + Limited banner placements + 1 standee placement at venue entrance' },
    { type: 'Pre-conference Sponsor', amount: '2.5 Lacs', benefits: 'Trade fair stall + One pre-conference course of choice + 2 coupons for lunch for 2 days + Special mention in website and brochure + Limited banner placements + 1 standee placement at venue entrance' },
    { type: 'Trade Fair Stalls', amount: '70,000', benefits: 'Trade Fair Booth' },
  ];

  return (
    <>
    <LogoSection></LogoSection>
    <NavBar></NavBar>
    <Header></Header>
    <h1 className='mainHeadingSponsor'>Sponsorship Details</h1>
    <table className="sponsorship-table">
      <thead>
        <tr>
          <th>Type of Sponsorship</th>
          <th>Amount</th>
          <th>Assured Benefits</th>
        </tr>
      </thead>
      <tbody>
        {sponsorshipData.map((data, index) => (
          <tr key={index}>
            <td>{data.type}</td>
            <td>{data.amount}</td>
            <td>{data.benefits}</td>
          </tr>
        ))}
      </tbody>
    </table></>
    
  );
};

export default SponsorshipTable;
