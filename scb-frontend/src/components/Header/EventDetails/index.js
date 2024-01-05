import React from 'react'
import './eventdetails.css'

import element1 from '../../assets/element1.png'
import element2 from '../../assets/element2.png'
import element3 from '../../assets/element3.png'
import line from '../../assets/Divider.png'

import twologos from '../EventDetails/twologos.png'

function EventDetails() {
  return (
    <>
    <div className='EventSchedule'>
    <div className='elements-main'>
    <img className='element' src={element1} alt=''></img>
    <h6 className='para1'>ORAL FRONTIERS:<br></br>
UNITING EXPERTISE AND
UNVEILING THE POTENTIAL
</h6>
    </div>
    <div className='elements-main'>
    <img className='element' src={element2} alt=''></img>
    <h6 className='para1'>Event Date:<br></br>
8th-10th March 2024
</h6>
    </div>
    <div className='elements-main'>
    <img className='element' src={element3} alt=''></img>
    <h6 className='para1'>Venue:<br></br>
SCB Medical College and Hospital
</h6>
    </div>

  </div>
         
         <img className='twologos' src={twologos} alt=''></img>
         {/* <div>
         <img className='divider' src={line} alt=''></img>
       
       <img className='divider' src={line} alt=''></img>
       
       <img className='divider' src={line} alt=''></img>
       
       <img className='divider' src={line} alt=''></img>
         </div> */}
    
       </>
  )
}

export default EventDetails