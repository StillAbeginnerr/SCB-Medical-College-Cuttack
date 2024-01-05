import React from 'react'
import LogoSection from '../Logo-Section'
import NavBar from '../Nav-Bar'
import Header from '../Header'
import { Card } from 'react-bootstrap'

import './contact.css'


function Contact() {
  return (
    <>
       <LogoSection></LogoSection>
   <NavBar></NavBar>
   <Header></Header>
   <div className='container'>
   <h1 className='contactheading'>Details</h1>
   <div className='maincard'>
   <Card className='maincard-1'>
      
      <Card.Body className='classbody'>
        <Card.Title>VENUE</Card.Title>
        <Card.Text>
        SCB MEDICAL COLLEGE
& HOSPITAL,<br></br> CUTTACK, ODISHA
        </Card.Text>
        
      </Card.Body>
    </Card>
    <Card className='maincard-1'>
     
      <Card.Body className='classbody-2'>
        <Card.Title>MAIL US AT</Card.Title>
        <Card.Text>
        ooocuttack2024@gmail.com
        </Card.Text>
        
      </Card.Body>
    </Card>
    <Card className='maincard-1'>
     
      <Card.Body className='classbody-2'>
        <Card.Title>CALL US AT</Card.Title>
        <Card.Text>
        +91 9777492429 (ADMIN)
        </Card.Text>
      
      </Card.Body>
    </Card>
   </div>
   </div>

    </>
  )
}

export default Contact