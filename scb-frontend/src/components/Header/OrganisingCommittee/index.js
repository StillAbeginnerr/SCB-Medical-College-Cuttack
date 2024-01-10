import React from 'react'
// import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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
    <img className='dividr' src={line} alt=''></img>
    
    <img className='dividr1' src={line} alt=''></img>
    
    <img className='dividr2' src={line} alt=''></img>
    
    <img className='dividr3' src={line} alt=''></img>
    <h1 className='OCHeading12'>ORGANISING COMMITTEE</h1>
{/* 
    level1-1 */}
    
      <Container><Row><Col>
      <div className='first-levelA'>
      <img className='PhotoPos-2' src={Doctor1} alt=''></img>
       <div className='name-card'>
        <button className='btn-cssA'>DR. FAKIR MOHAN DEBTA <br></br>
ORGANISING CHAIRMAN</button>
       </div></div></Col></Row></Container>
   
       <Container>
      <Row>
        
        <Col><div className='PosDistance1AX'>
        <img className='PhotoPos-2' src={Doctor2} alt=''></img>
       <div className='name-card'>
        <button className='btn-cssA'>DR. NIRANJAN MISHRA <br></br>
        ORGANISING CO-CHAIRMAN</button>
       </div></div></Col>
        <Col><div className='PosDistance1AX'>
        <img className='PhotoPos-2' src={Doctor3} alt=''></img>
       <div className='name-card'>
        <button className='btn-cssA'>DR. SANGAMESH N.C. <br></br>
        ORGANISING CO-CHAIRMAN</button>
       </div></div></Col>
          <Col><div className='PosDistance1AX'>
        <img className='PhotoPos-2' src={Doctor4} alt=''></img>
       <div className='name-card'>
        <button className='btn-cssA'>DR. SATYA RANJAN MISHRA<br></br>
        ORGANISING CO-CHAIRMAN</button>
       </div>
        </div></Col>  
      </Row>
    </Container>

        


       <img className='dividr' src={line} alt=''></img>
    
    <img className='dividr1' src={line} alt=''></img>
    
    <img className='dividr2' src={line} alt=''></img>
    
    <img className='dividr3' src={line} alt=''></img>
       
       
{/* third-level1 */}
<div className='second-levelAZ'>
 <Container><Row><Col><div className='PosDistance1AB posmob'>
    <img className='PhotoPos-2' src={Doctor5} alt=''></img>
    <div className='name-card'>
      <button className='btn-cssA'>Dr. SHREEYAM MOHAPATRA<br></br>
       SECRETARY</button>
    </div>
  </div>
  </Col></Row></Container>
  
  
</div>


<Container>
<Row>
        <Col>
          <div className='PosDistanceC'>
            <img className='PhotoPos-2A' src={Doctor15} alt='' />
            <div className='name-card'>
              <button className='btn-cssA'>Dr. Sthitaprajna lenka<br /></button>
            </div>
          </div>
        </Col>
        <Col>
          <div className='PosDistanceC'>
            <img className='PhotoPos-2' src={Doctor6} alt='' />
            <div className='name-card'>
              <button className='btn-cssA'>DR. SHADAB ALI BAIG <br /></button>
            </div>
          </div>
        </Col>
        <Col>
          <div className='PosDistanceC'>
            <img className='PhotoPos-2' src={Doctor7} alt='' />
            <div className='name-card'>
              <button className='btn-cssA'>DR. ABIKSHYEET PANDA <br /></button>
            </div>
          </div>
        </Col>
      </Row>
</Container>
{/* newlevel */}
<div className='second-levelAZ'>
  
</div>

<img className='dividr' src={line} alt=''></img>
    
    <img className='dividr1' src={line} alt=''></img>
    
    <img className='dividr2' src={line} alt=''></img>
    
    <img className='dividr3' src={line} alt=''></img>
{/* third-level2 */}
<Container>
  <Row><Col>
  <div className='Third-Level-3A'>
  <div className='PosDistanceAC'>
    <img className='PhotoPos-2' src={Doctor8} alt=''></img>
    <div className='name-card'>
      <button className='btn-cssA'>DR. KUNAL AGARWAL <br></br>
      SCIENTIFIC CHAIRMAN</button>
    </div>
  </div>
  
  </div>
  </Col></Row>
</Container>

    <img className='dividr' src={line} alt=''></img>
    
    <img className='dividr1' src={line} alt=''></img>
    
    <img className='dividr2' src={line} alt=''></img>
    
    <img className='dividr3' src={line} alt=''></img>
{/* 
thirdlevelMain */}

  <Container>
    <Row>
      <Col  sm={6} md={4} lg={4} xl={3}>
      <div className='Third-Level-2A'>
      <div className='PosDistanceAF'>
    <img className='PhotoPos-2A' src={Doctor16} alt=''></img>
    <div className='name-card'>
      <button className='btn-cssA'>Dr. J P raiguru<br></br>
      Scientific Co Chairman</button>
    </div>
  </div>
  <div className='PosDistanceAF'>
    <img className='PhotoPos-2' src={Doctor9} alt=''></img>
    <div className='name-card'>
      <button className='btn-cssA'>DR. RACHNA RATH <br></br>
      SCIENTIFIC CHAIRMAN</button>
    </div>
  </div>
  <div className='PosDistanceAF'>
    <img className='PhotoPos-2' src={Doctor10} alt=''></img>
    <div className='name-card'>
      <button className='btn-cssA'>DR. SWARNAV PATNAIK <br></br>
      SCIENTIFIC CO-CHAIRMAN</button>
    </div>
  </div>
  <div className='PosDistanceAF'>
    <img className='PhotoPos-2' src={Doctor11} alt=''></img>
    <div className='name-card'>
      <button className='btn-cssA'>DR. GYANA RANJAN SAHOO <br></br>
      SCIENTIFIC CO-CHAIRMAN</button>
    </div>
  </div></div>
      </Col>
    </Row>
  </Container>

<img className='dividr' src={line} alt=''></img>
    
    <img className='dividr1' src={line} alt=''></img>
    
    <img className='dividr2' src={line} alt=''></img>
    
    <img className='dividr3' src={line} alt=''></img>
{/* thirdlevel3 */}
<div className='second-levelD'>
  <div className='PosDistance1AD'>
    <img className='PhotoPos-2' src={Doctor12} alt=''></img>
    <div className='name-card'>
      <button className='btn-cssA'>DR. DEBAJYOTI BARDHAN <br></br>
      TREASURER</button>
    </div>
  </div>
</div>
<Container><Row><Col>
<div className='second-levelA'>
 
  <div className='PosDistance1A'>
    <img className='PhotoPos-2' src={Doctor13} alt=''></img>
    <div className='name-card'>
      <button className='btn-cssA'>DR. PRIYANKA DEBTA <br></br>
      PRE-CONFERENCE CHAIRMAN</button>
    </div>
  </div>
  <div className='PosDistance1A'>
    <img className='PhotoPos-2' src={Doctor14} alt=''></img>
    <div className='name-card'>
      <button className='btn-cssA'>Dr. SHUBHANGI PAREEK <br></br>
      PRE-CONFERENCE CHAIRMAN</button>
    </div>
  </div>
</div>
</Col></Row></Container>



   </div>
    <img className='dividr' src={line} alt=''></img>
    
    <img className='dividr1' src={line} alt=''></img>
    
    <img className='dividr2' src={line} alt=''></img>
    
    <img className='dividr3' src={line} alt=''></img>
   </>
  )
}

export default OrganisingCommittee