import React from 'react'
import line from '../../assets/Divider.png'
import '../AboutSym/AboutSym.css'

import aboutpicture from '../../assets/AboutPics.png'

function AboutSym() {
  return (
    <>
    <div className='main-container1'>
    {/* <img className='dividr' src={line} alt=''></img>
    
    <img className='dividr1' src={line} alt=''></img>
    
    <img className='dividr2' src={line} alt=''></img>
    
    <img className='dividr3' src={line} alt=''></img> */}
    <div className='container2' style={{display:'block'}}>
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
       
       {/* <img className='divider1' src={line} alt=''></img>
       
       <img className='divider2' src={line} alt=''></img>
       <img className='dividerA' src={line} alt=''></img>
       <img className='divider3' src={line} alt=''></img> */}
{/* 
    <img className='dividr' src={line} alt=''></img>
    
    <img className='dividr1' src={line} alt=''></img>
    
    <img className='dividr2' src={line} alt=''></img>
    
    <img className='dividr3' src={line} alt=''></img> */}
{/*     
  
       
       <img className='divider' src={line} alt=''></img>
       
       <img className='divider' src={line} alt=''></img>
       
       <img className='divider' src={line} alt=''></img> */}
    </>
  )
}

export default AboutSym