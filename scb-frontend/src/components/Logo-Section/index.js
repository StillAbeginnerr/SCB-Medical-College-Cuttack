import React from 'react'
import './LogoSection.css'

import logoSCB from '../assets/Asset 13@4x-8.png';
import LogoIAOMR from '../assets/IAOMR.png';

function LogoSection() {
  return (
    <>
    <div className='container'>
    <img className='logoSCB' src={logoSCB} alt='LogoSCBCollege'></img>
    <div className='HeadingMain'>
    <h2 className='Heading'>21ST NATIONAL OOO SYMPOSIUM 2024</h2>
    <h3 className='DownHeading'>Oral Medicine and Radiology,<br></br>
SCB Dental College and Hospital, Cuttack.</h3>
    </div>
   
    <img className='logoIAOMR' src={LogoIAOMR} alt='LogoSCBCollege'></img>
    </div>

    </>
  )
}

export default LogoSection