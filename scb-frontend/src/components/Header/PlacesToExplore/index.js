import React from 'react'
import './PlacesToExplore.css'

import IMG1 from '../../assets/Puri Temple.jpg'
import IMG2 from '../../assets/Udayagiri and Khandagiri Caves 5.jpg'
import IMG3 from '../../assets/Chillika Lake.jpg'
import IMG4 from '../../assets/Book SATKOSIA TIGER RESERVE Tour Package - Hillstarholidays.png'
import IMG5 from '../../assets/Dhabaleswar.png'
import IMG6 from '../../assets/Dhauli Santi stupa.jpg'
import line from '../../assets/Divider.png'

function PlacesToExplore() {
  return (
    <>
    
<div className='main-container'>
    
    <h1 className='Heading-1'>Places To Explore</h1>
    <p className='Heading-para'>Odisha has a plethora of places to visit,<br></br>
        Go through our curated list of places to choose your comfort retreat.</p>
        <div className='Cardimg'>
<div className='placesCard'>
<img className='cardimg' src={IMG1} alt=''></img>
<img className='cardimg' src={IMG2} alt=''></img>
<img className='cardimg'src={IMG3} alt=''></img>
</div>
<div className='placesCard' style={{marginTop:'5rem'}}>
<img className='cardimg' src={IMG4} alt=''></img>
<img className='cardimg' src={IMG5} alt=''></img>
<img className='cardimg'src={IMG6} alt=''></img>
</div>

        </div>
        <img className='dividerAD' src={line} alt=''></img>
       
       {/* <img className='divider1' src={line} alt=''></img>
       
       <img className='divider2' src={line} alt=''></img>
       
       <img className='divider3' src={line} alt=''></img> */}
       {/* <img className='divider' src={line} alt=''></img>
       
       <img className='divider' src={line} alt=''></img>
       
       <img className='divider' src={line} alt=''></img>
       
       <img className='divider' src={line} alt=''></img> */}
</div>

    </>
  )
}

export default PlacesToExplore