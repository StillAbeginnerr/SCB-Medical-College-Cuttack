import React from 'react'
import './eventdetails.css'

import element1 from '../../assets/element1.png'
import element2 from '../../assets/element2.png'
import element3 from '../../assets/element3.png'
import line from '../../assets/Divider.png'

import twologos from '../EventDetails/twologos.png'
import twologoo from '../EventDetails/WhatsApp Image 2024-01-07 at 10.04.08 PM.jpeg'
import twologooA from '../../assets/IAOMR.png'
function EventDetails() {
  return (
    <>
    <div className='EventSchedule'>
    <div className='elements-main'>
    <img className='element' src={element1} alt=''/>
    <h6 className='para1'>ORAL FRONTIERS:<br></br>
UNITING EXPERTISE AND
UNVEILING THE POTENTIAL
</h6>
    </div>
    <div className='elements-main'>
    <img className='element' src={element2} alt=''/>
    <h6 className='para1'>Event Date:<br></br>
8th-10th March 2024
</h6>
    </div>
    <div className='elements-main'>
    <img className='element' src={element3} alt=''/>
    <h6 className='para1'>Venue:<br></br>
SCB Medical College and Hospital
</h6>
    </div>
   
  </div>
  <div className='container1'>
  <img className='twologos' src={twologos} alt=''></img>
  {/* <img className='twologoo' src={twologoo} alt=''></img>
  <img className='twologoo-1' src={twologooA} alt=''></img> */}
  </div>
 
         <div>
         {/* <img className='divider' src={line} alt=''></img> */}
       
       {/* <img className='divider1' src={line} alt=''></img>
       
       <img className='divider2' src={line} alt=''></img>
       
       <img className='divider3' src={line} alt=''></img> */}
         </div>
    
       </>
  )
}

export default EventDetails