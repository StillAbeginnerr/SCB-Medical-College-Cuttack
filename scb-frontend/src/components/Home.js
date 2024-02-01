import React from 'react'
import LogoSection from './Logo-Section'
import Footer from './Footer'
import NavBar from './Nav-Bar'
import Header from './Header'
import AboutSym from './Header/AboutSym'
import OrganisingCommittee from './Header/OrganisingCommittee'
import PlacesToExplore from './Header/PlacesToExplore'
import EventDetails from './Header/EventDetails'
import Brochure from '../../src/components/OOO.pdf'
import './home.css'
import downloadd from '../components/download.png'

function openWhatsApp() {
  const whatsappLink = "https://api.whatsapp.com/send/?phone=919777492429&text=Hello%2C%0D%0AI%27m+having+a+query&type=phone_number&app_absent=0";
  window.open(whatsappLink, '_blank');
}

function Home() {

  return (
    <div className='mainBody'>
      <LogoSection></LogoSection>
      <NavBar></NavBar>
      <Header></Header>
      <EventDetails />
      <AboutSym></AboutSym>
      <PlacesToExplore></PlacesToExplore>
      <OrganisingCommittee></OrganisingCommittee>
      <a href={Brochure} download><img className='whatsapps-btn' src={downloadd} style={{ width: '50px', height: '50px' }}></img></a>
      <img className='whatsapp-btn' src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" onClick={openWhatsApp} style={{ width: '50px', height: '50px' }}></img>
    </div>
  )
}

export default Home