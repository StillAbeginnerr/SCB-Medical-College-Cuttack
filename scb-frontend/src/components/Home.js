import React from 'react'
import LogoSection from './Logo-Section'
import Footer from './Footer'
import NavBar from './Nav-Bar'
import Header from './Header'
import AboutSym from './Header/AboutSym'
import OrganisingCommittee from './Header/OrganisingCommittee'
import PlacesToExplore from './Header/PlacesToExplore'
import EventDetails from './Header/EventDetails'

function Home() {
  return (
    <>
 <LogoSection></LogoSection>
    <NavBar></NavBar>
    <Header></Header>
        {/* <EventDetails></EventDetails> */}
    <AboutSym></AboutSym>
    <PlacesToExplore></PlacesToExplore>
    <OrganisingCommittee></OrganisingCommittee>
    </>
  )
}

export default Home