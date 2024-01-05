import React from 'react'
// import Card from 'react-bootstrap/Card';

// import Doctor1 from '../../assets/DoctorPhotos/1.png';
// import Doctor2 from '../../assets/DoctorPhotos/2.png';
// import Doctor3 from '../../assets/DoctorPhotos/3.png';
// import Doctor4 from '../../assets/DoctorPhotos/4.png';
// import Doctor5 from '../../assets/DoctorPhotos/5.png';
// import Doctor6 from '../../assets/DoctorPhotos/6.png';
// import Doctor7 from '../../assets/DoctorPhotos/7.png';
// import Doctor8 from '../../assets/DoctorPhotos/8.png';
// import Doctor9 from '../../assets/DoctorPhotos/9.png';
// import Doctor10 from '../../assets/DoctorPhotos/10.png';
// import Doctor11 from '../../assets/DoctorPhotos/11.png';
import DoctorA from '../../assets/DoctorPhotos/Dr.-Chaitanya-Babu-N.jpg';
import DoctorB from '../../assets/DoctorPhotos/Dr.-Nadeem-Jeddy.jpg';

import './iaomp.css'
import Header from '../../Header';
import LogoSection from '../../Logo-Section';
import NavBar from '../../Nav-Bar';

function IAOMP() {
  return (
   <>
   <LogoSection></LogoSection>
   <NavBar></NavBar>
   <Header></Header>
   <div className='MainContainer'>
    
{/* 
    level1-1 */}
  

       {/* thirdlevel3 */}
       <div className='main-container'>
        {/* <h1 className='iaomp-head'>IAOMP Committee</h1> */}
       <div className='second-leveliaomp'>
        <div className='PosDistance1'>
        <img className='PhotoPos-2' src={DoctorA} alt=''></img>
       <div className='name-card'>
        <button className='btn-css'>DR. N CHAITANYA BABU<br></br>
        President</button>
       </div>
        </div>
        <div className='PosDistance1'>
        <img className='PhotoPos-2' src={DoctorB} alt=''></img>
       <div className='name-card'>
        <button className='btn-css'>DR. NADEEM JEDDY<br></br>
        Honourable Secretary</button>
       </div>
        </div>
        
       </div>
       </div>
     
   </div>
   </>
  )
}

export default IAOMP;