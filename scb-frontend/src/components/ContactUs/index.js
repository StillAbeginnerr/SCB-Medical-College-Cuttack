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
      <h1 className='contactHeader'>Details</h1>
      <div className='contactContainer'>
        <div className='contactCard'>
          <p className='titleContact'>VENUE</p>
          <p className='textContact'>SCB MEDICAL COLLEGE
            & HOSPITAL,<br></br> CUTTACK, ODISHA</p>

        </div>
        <div className='contactCard'>
          <p className='titleContact'>MAIL US AT</p>
          <p className='textContact'>ooocuttack2024@gmail.com</p>

        </div>
        <div className='contactCard'>
          <p className='titleContact'>CALL US AT</p>
          <p className='textContact'>+91 9777492429 (ADMIN)</p>

        </div>

      </div>
      {/* <div className='container'>
        <h1 className='contactheading'>Details</h1>
        <div className='maincard'>
          <Card className='maincard-1'>

            <Card.Body className='classbody'>
              <Card.Title>VENUE</Card.Title>
              <Card.Text className='cardtext'>
                SCB MEDICAL COLLEGE
                & HOSPITAL,<br></br> CUTTACK, ODISHA
              </Card.Text>

            </Card.Body>
          </Card>
          <Card className='maincard-1'>

            <Card.Body className='classbody-2'>
              <Card.Title>MAIL US AT</Card.Title>
              <Card.Text className='cardtext'>
                ooocuttack2024@gmail.com
              </Card.Text>

            </Card.Body>
          </Card>
          <Card className='maincard-1'>

            <Card.Body className='classbody-2'>
              <Card.Title>CALL US AT</Card.Title>
              <Card.Text >
                +91 9777492429 (ADMIN)
              </Card.Text>

            </Card.Body>
          </Card>
        </div>
      </div> */}

    </>
  )
}

export default Contact