import Dropdown from 'react-bootstrap/Dropdown';
import NavItem from 'react-bootstrap/NavItem';
import NavLink from 'react-bootstrap/NavLink';
import Nav from 'react-bootstrap/Nav'
import './navbar.css'
import React, { useRef } from 'react';
// import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
// import IAOMP from '../Committee/IAOMP';


function NavBar() {
  const linkRef = useRef(null); 
  const onMouseOver = () => {
    linkRef.current.style.color = 'orange';
  };
  
  const onMouseOut = () => {
    linkRef.current.style.color = 'white';
  };
  return (
    <>
    <div className='nav' style={{backgroundColor:'#149BFC',marginTop:'2rem'}}>
    <ul className='nav position-fix'>
    <Nav.Item style={{color:'white'}}>
    <Nav.Link
     ref={linkRef}
  style={{
    color: 'white',
    textDecoration: 'none',
    transition: 'color 0.3s',
  }}
 
  onMouseOver={onMouseOver}
  onMouseOut={onMouseOut}
  href="/"
>Home</Nav.Link>
      </Nav.Item>
    <Dropdown as={NavItem}>
    <Dropdown.Toggle style={{color:'white'}} as={NavLink}>Committee</Dropdown.Toggle>
    <Dropdown.Menu>
      <Dropdown.Item style={{backgroundColor:'#149BFC',color:'white'}} href="/iaomr">IAOMR</Dropdown.Item>
      <Dropdown.Item style={{backgroundColor:'#149BFC',color:'white'}} href="/iaomp">IAOMP</Dropdown.Item>
      <Dropdown.Item style={{backgroundColor:'#149BFC',color:'white'}} href="/aomsi">AOMSI</Dropdown.Item>
      <Dropdown.Item style={{backgroundColor:'#149BFC',color:'white'}}>OOO EXECUTIVE ADVISORS</Dropdown.Item>
      <Dropdown.Item style={{backgroundColor:'#149BFC',color:'white'}}>CORE ORGANISATION COMMITTEE</Dropdown.Item>
      <Dropdown.Item style={{backgroundColor:'#149BFC',color:'white'}}>OTHER COMMITTEE</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
   <Dropdown as={NavItem}>
   <Dropdown.Toggle style={{color:'white'}} as={NavLink} >Registration for Conference</Dropdown.Toggle>
   <Dropdown.Menu>
     <Dropdown.Item style={{backgroundColor:'#149BFC',color:'white'}} href="/registration">Registration Details</Dropdown.Item>
   </Dropdown.Menu>
 </Dropdown>
 <Nav.Item>
        <Nav.Link style={{color:'white'}} href="/Guidelines">Scientific Guidelines</Nav.Link>
      </Nav.Item>
 <Dropdown as={NavItem}>
   <Dropdown.Toggle style={{color:'white'}} as={NavLink}>Sponsor</Dropdown.Toggle>
   <Dropdown.Menu>
     <Dropdown.Item style={{backgroundColor:'#149BFC',color:'white'}}>Sponsor the Event</Dropdown.Item>
     <Dropdown.Item style={{backgroundColor:'#149BFC',color:'white'}} href="/sponsor">Sponsorship Details</Dropdown.Item>
   </Dropdown.Menu>
 </Dropdown>
 <Dropdown as={NavItem}>
   <Dropdown.Toggle style={{color:'white'}} as={NavLink}>Venue</Dropdown.Toggle>
   <Dropdown.Menu>
     <Dropdown.Item style={{backgroundColor:'#149BFC',color:'white'}}>About</Dropdown.Item>
     <Dropdown.Item style={{backgroundColor:'#149BFC',color:'white'}}>Directions</Dropdown.Item>
     <Dropdown.Item style={{backgroundColor:'#149BFC',color:'white'}}>Accomodation</Dropdown.Item>
   </Dropdown.Menu>
 </Dropdown>
 
 <Nav.Item>
        <Nav.Link style={{color:'white'}} href="/ContactUs">Contact Us</Nav.Link>
      </Nav.Item>
 </ul>
    </div>
   
  </>);
}

export default NavBar;