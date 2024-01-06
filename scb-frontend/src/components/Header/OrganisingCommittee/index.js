import React from 'react'
// import Card from 'react-bootstrap/Card';

import Doctor1 from '../../assets/DoctorPhotos/1.png';
import Doctor2 from '../../assets/DoctorPhotos/2.png';
import Doctor3 from '../../assets/DoctorPhotos/3.png';
import Doctor4 from '../../assets/DoctorPhotos/4.png';
import Doctor5 from '../../assets/DoctorPhotos/5.png';
import Doctor6 from '../../assets/DoctorPhotos/6.png';
import Doctor7 from '../../assets/DoctorPhotos/7.png';
import Doctor8 from '../../assets/DoctorPhotos/8.png';
import Doctor9 from '../../assets/DoctorPhotos/9.png';
import Doctor10 from '../../assets/DoctorPhotos/10.png';
import Doctor11 from '../../assets/DoctorPhotos/11.png';
import Doctor12 from '../../assets/DoctorPhotos/12.png';
import Doctor13 from '../../assets/DoctorPhotos/13.png';
import Doctor14 from '../../assets/DoctorPhotos/14.png';
import Doctor15 from '../../assets/Dr. Sthitaprajna lenka.jpg'
import Doctor16 from '../../assets/Dr. J P raiguru.jpg'

import line from '../../assets/Divider.png'
import './oc.css'

function OrganisingCommittee() {
  return (
   <>
   <div className='MainContainer'>
    <h1 className='OCHeading12'>ORGANISING COMMITTEE</h1>
{/* 
    level1-1 */}
    <div className='first-levelA'>
       <img className='PhotoPos' src={Doctor1} alt=''></img>
       <div className='name-card'>
        <button className='btn-cssA'>DR. FAKIR MOHAN DEBTA <br></br>
ORGANISING CHAIRMAN</button>
       </div>
       </div>
       <div className='second-levelA'>
        <div className='PosDistance1A'>
        <img className='PhotoPos-2' src={Doctor2} alt=''></img>
       <div className='name-card'>
        <button className='btn-css'>DR. NIRANJAN MISHRA <br></br>
        ORGANISING CO-CHAIRMAN</button>
       </div>
        </div>
        <div className='PosDistance1A'>
        <img className='PhotoPos-2' src={Doctor3} alt=''></img>
       <div className='name-card'>
        <button className='btn-css'>DR. SANGAMESH N.C. <br></br>
        ORGANISING CO-CHAIRMAN</button>
       </div>
        </div>
        <div className='PosDistance1A'>
        <img className='PhotoPos-2' src={Doctor4} alt=''></img>
       <div className='name-card'>
        <button className='btn-css'>DR. SATYA RANJAN MISHRA<br></br>
        ORGANISING CO-CHAIRMAN</button>
       </div>
        </div>
       </div>


       
       
{/* third-level1 */}
<div className='second-levelA'>
 
  <div className='PosDistance1AB posmob'>
    <img className='PhotoPos-2' src={Doctor5} alt=''></img>
    <div className='name-card'>
      <button className='btn-css'>Dr. SHREEYAM MOHAPATRA<br></br>
       SECRETARY</button>
    </div>
  </div>
  
</div>

{/* newlevel */}
<div className='second-levelA'>
  <div className='PosDistance1A'>
    <img className='PhotoPos-2A' src={Doctor15} alt=''></img>
    <div className='name-card'>
      <button className='btn-css'>Dr. Sthitaprajna lenka<br></br>
      JOINT SECRETARY</button>
    </div>
  </div>
  <div className='PosDistance1A'>
    <img className='PhotoPos-2A' src={Doctor6} alt=''></img>
    <div className='name-card'>
      <button className='btn-css'>DR. SHADAB ALI BAIG <br></br>
      JOINT SECRETARY</button>
    </div>
  </div>
  <div className='PosDistance1A'>
    <img className='PhotoPos-2A' src={Doctor7} alt=''></img>
    <div className='name-card'>
      <button className='btn-css'>DR. ABIKSHYEET PANDA <br></br>
      JOINT SECRETARY</button>
    </div>
  </div>
</div>

{/* third-level2 */}
<div className='Third-Level-3A'>
  <div className='PosDistanceAC'>
    <img className='PhotoPos-3A' src={Doctor8} alt=''></img>
    <div className='name-card'>
      <button className='btn-css-dAC'>DR. KUNAL AGARWAL <br></br>
      SCIENTIFIC CHAIRMAN</button>
    </div>
  </div>
  
  </div>
{/* 
thirdlevelMain */}
<div className='Third-Level-2A'>
  <div className='PosDistanceAF'>
    <img className='PhotoPos-2A' src={Doctor16} alt=''></img>
    <div className='name-card'>
      <button className='btn-css-d'>Dr. J P raiguru<br></br>
      Scientific Co Chairman</button>
    </div>
  </div>
  <div className='PosDistanceAF'>
    <img className='PhotoPos-3A' src={Doctor9} alt=''></img>
    <div className='name-card'>
      <button className='btn-css-d'>DR. RACHNA RATH <br></br>
      SCIENTIFIC CHAIRMAN</button>
    </div>
  </div>
  <div className='PosDistanceAF'>
    <img className='PhotoPos-3A' src={Doctor10} alt=''></img>
    <div className='name-card'>
      <button className='btn-css-d'>DR. SWARNAV PATNAIK <br></br>
      SCIENTIFIC CO-CHAIRMAN</button>
    </div>
  </div>
  <div className='PosDistanceAF'>
    <img className='PhotoPos-3A' src={Doctor11} alt=''></img>
    <div className='name-card'>
      <button className='btn-css-d'>DR. GYANA RANJAN SAHOO <br></br>
      SCIENTIFIC CO-CHAIRMAN</button>
    </div>
  </div>
</div>

{/* thirdlevel3 */}
<div className='second-levelD'>
  <div className='PosDistance1AD'>
    <img className='PhotoPos-2C' src={Doctor12} alt=''></img>
    <div className='name-card'>
      <button className='btn-css-d'>DR. DEBAJYOTI BARDHAN <br></br>
      TREASURER</button>
    </div>
  </div>
</div>
<div className='second-levelA'>
 
  <div className='PosDistance1A'>
    <img className='PhotoPos-3A' src={Doctor13} alt=''></img>
    <div className='name-card'>
      <button className='btn-css'>DR. PRIYANKA DEBTA <br></br>
      PRE-CONFERENCE CHAIRMAN</button>
    </div>
  </div>
  <div className='PosDistance1AD'>
    <img className='PhotoPos-3A' src={Doctor14} alt=''></img>
    <div className='name-card'>
      <button className='btn-css'>Dr. SHUBHANGI PAREEK <br></br>
      PRE-CONFERENCE CHAIRMAN</button>
    </div>
  </div>
</div>


   </div>
   </>
  )
}

export default OrganisingCommittee