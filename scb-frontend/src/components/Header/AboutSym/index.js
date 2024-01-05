import React from 'react'
import line from '../../assets/Divider.png'
import '../AboutSym/AboutSym.css'

import aboutpicture from '../../assets/AboutPics.png'

function AboutSym() {
  return (
    <>
    <div className='main-container1'>
    <div className='container' style={{display:'block'}}>
    <h1 className='about-head'>ABOUT SYMPOSIUM</h1>

    <span>
    <p className='about-para'>The Silver City of India takes immense pride in organizing the 21st National OOO <br></br>
        Symposium which is hosted by SCB Dental College and Hospital. The conference is
        <br></br> being organized under the patronage of the Indian Academy of Oral Medicine and<br></br>
         Radiology (IAOMR) in collaboration with the Association of Oral and Maxillofacial<br></br>
          Surgeons of India (AOMSI) and the Indian Association of Oral and Maxillofacial<br></br> Pathologists (IAOMP).
</p>
    </span>

   
{/* <button>Know More</button> */}
        

    </div>
    <img className='aboutpicture' src={aboutpicture}></img>
    </div>
{/*     
    <img className='divider' src={line} alt=''></img>
       
       <img className='divider' src={line} alt=''></img>
       
       <img className='divider' src={line} alt=''></img>
       
       <img className='divider' src={line} alt=''></img> */}
    </>
  )
}

export default AboutSym