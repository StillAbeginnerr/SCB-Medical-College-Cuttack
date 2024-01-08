import Dropdown from 'react-bootstrap/Dropdown';
import NavItem from 'react-bootstrap/NavItem';
import NavLink from 'react-bootstrap/NavLink';
import Nav from 'react-bootstrap/Nav'
import './navbar.css'
// import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
// import IAOMP from '../Committee/IAOMP';


function NavBar() {
  return (
    <>
    <div className='nav' style={{backgroundColor:'#149BFC',marginTop:'2rem'}}>
    <ul className='nav position-fix'>
    <Nav.Item>
        <Nav.Link href="/">Home</Nav.Link>
      </Nav.Item>
    <Dropdown as={NavItem}>
    <Dropdown.Toggle as={NavLink}>Committee</Dropdown.Toggle>
    <Dropdown.Menu>
      <Dropdown.Item href="/iaomr">IAOMR</Dropdown.Item>
      <Dropdown.Item href="/iaomp">IAOMP</Dropdown.Item>
      <Dropdown.Item href="/aomsi">AOMSI</Dropdown.Item>
      <Dropdown.Item>OOO EXECUTIVE ADVISORS</Dropdown.Item>
      <Dropdown.Item>CORE ORGANISATION COMMITTEE</Dropdown.Item>
      <Dropdown.Item>OTHER COMMITTEE</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
   <Dropdown as={NavItem}>
   <Dropdown.Toggle as={NavLink} >Registration for Conference</Dropdown.Toggle>
   <Dropdown.Menu>
     <Dropdown.Item href="/registration">Registration Details</Dropdown.Item>
   </Dropdown.Menu>
 </Dropdown>
 <Nav.Item>
        <Nav.Link href="/Guidelines">Scientific Guidelines</Nav.Link>
      </Nav.Item>
 <Dropdown as={NavItem}>
   <Dropdown.Toggle as={NavLink}>Sponsor</Dropdown.Toggle>
   <Dropdown.Menu>
     <Dropdown.Item>Sponsor the Event</Dropdown.Item>
     <Dropdown.Item href="/sponsor">Sponsorship Details</Dropdown.Item>
   </Dropdown.Menu>
 </Dropdown>
 <Dropdown as={NavItem}>
   <Dropdown.Toggle as={NavLink}>Venue</Dropdown.Toggle>
   <Dropdown.Menu>
     <Dropdown.Item>About</Dropdown.Item>
     <Dropdown.Item>Directions</Dropdown.Item>
     <Dropdown.Item>Accomodation</Dropdown.Item>
   </Dropdown.Menu>
 </Dropdown>
 
 <Nav.Item>
        <Nav.Link href="/ContactUs">Contact Us</Nav.Link>
      </Nav.Item>
 </ul>
    </div>
   
  </>);
}

export default NavBar;