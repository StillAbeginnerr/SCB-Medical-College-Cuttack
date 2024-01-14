import React from 'react'

import LogoSection from '../../Logo-Section'
import NavBar from '../../Nav-Bar'
import Header from '../../Header'

import { Container } from 'react-bootstrap';
import { Col,Row } from 'react-bootstrap';

import Doctor1A from '../../assets/DoctorPhotos/OOO/Prof.-Dr.-Surya-Narayan-Das.jpg';
import Doctor2A from '../../assets/DoctorPhotos/OOO/Dr-Indu-Bhushan-kar.jpg';
import Doctor3A from '../../assets/DoctorPhotos/OOO/Dr.-Sanat-Bhuyan.jpg';
import Doctor4A from '../../assets/DoctorPhotos/OOO/Dr__Jayanta_Kumar_Dash.jpg';
import Doctor5A from '../../assets/DoctorPhotos/OOO/Dr_-Prasenjeet-Mohanty.jpg';
import Doctor6A from '../../assets/DoctorPhotos/OOO/Dr__sudhansu_s_mishra.jpg';
import Doctor7A from '../../assets/DoctorPhotos/OOO/Dr__Soumendra_Sarangi.jpg';
import Doctor8A from '../../assets/DoctorPhotos/OOO/Dr__Neeta_Mohanty.jpg';
import Doctor9A from '../../assets/DoctorPhotos/OOO/Dr__aswini_Kumar_kar.jpg';
import Doctor16A from '../../assets/DoctorPhotos/OOO/Dr__sangram_Patro.jpg';
import Doctor17A from '../../assets/DoctorPhotos/OOO/Dr__suryakant_das.jpg';
import Doctor18A from '../../assets/DoctorPhotos/OOO/Dr__asish_barik.jpg';
import Doctor19A from '../../assets/DoctorPhotos/OOO/Dr__subash_Ch_raj.jpg';
import Doctor20A from '../../assets/DoctorPhotos/OOO/dr__jugojyoti_pathi.jpg';
// import Doctor15A from '../../assets/DoctorPhotos/IAOMR/15.png';
// import Doctor16A from '../../assets/DoctorPhotos/IAOMR/16.jpg';
// import Doctor17A from '../../assets/DoctorPhotos/IAOMR/17.jpg';
// import Doctor18A from '../../assets/DoctorPhotos/IAOMR/18.jpg';
// import Doctor19A from '../../assets/DoctorPhotos/IAOMR/19.jpg';
// import Doctor20A from '../../assets/DoctorPhotos/IAOMR/20.jpg';
// import Doctor21A from '../../assets/DoctorPhotos/IAOMR/21.jpg';
// import Doctor22A from '../../assets/DoctorPhotos/IAOMR/22.jpg';
// // import Doctor23A from '../../assets/DoctorPhotos/IAOMR/23.jpg';
// import Doctor24A from '../../assets/DoctorPhotos/IAOMR/24.jpg';
// import Doctor25A from '../../assets/DoctorPhotos/IAOMR/25.jpg';
// import Doctor26A from '../../assets/DoctorPhotos/IAOMR/26.jpg';
import line from '../../assets/Divider.png'

import iaomrlogo from '../../assets/DoctorPhotos/IAOMR/IAOMR__1_-removebg-preview.png'


import './ooex.css'

function OOOAdvisor() {
return (
<>
<LogoSection></LogoSection>
<NavBar></NavBar>
<Header></Header>
<div className='MainContainer'>
    
    {/* 
        level1-1 */}
      
    
           {/* thirdlevel3 */}
           <div className='iaomr-container'>
            <div className='second-le'>
            <h1 className='iaomr-para'>
    OOO Executive Advisors</h1>
            </div>
            
    
    <Container>
            <Row>
            <div className='containn'>
              <Col>
                <div className='second-level'>
                  <div className='PosDistance-iaomrleftcorner'>
                    <img className='PhotoPos-1A' src={Doctor1A} alt='' />
                    <div className='name-card'>
                      <button className='btn-css-iaomr'>PROF. DR. SURYA NARAYAN DAS</button>
                    </div>
                  </div>
                  <div className='PosDistance-iaomr-center'>
                    <img className='PhotoPos-1A' src={Doctor2A} alt='' />
                    <div className='name-card'>
                      <button className='btn-css-iaomr-2'>PROF. DR. INDUBHUSAN KAR</button>
                    </div>
                  </div>
                  <div className='PosDistance-rightcorner'>
                    <img className='PhotoPos-1A' src={Doctor3A} alt='' />
                    <div className='name-card'>
                      <button className='btn-css-iaomr'>PROF. DR. SANATH KUMAR BHUYAN</button>
                    </div>
                  </div>
                </div>
              </Col>
              </div>
            </Row>
          

          </Container>
    

    
    
          <Container><Row><Col> 
          <div className='second-l'><h1 className='iaomr-paraQR'>
    Board of Advisors</h1></div>
            </Col></Row></Container>
          {/* Lines */}
          {/* <img className='dividra' src={line} alt='' />
          <img className='dividr1a' src={line} alt='' />
          <img className='dividr2a' src={line} alt='' />
          <img className='dividr3a' src={line} alt='' /> */}
    
          {/* Second Second-level div */}
          <Container>
            <Row>
            <div className='containn'>
              <Col>
                <div className='second-level'>
                  <div className='PosDistance-iaomrleftcorner'>
                    <img className='PhotoPos-1A' src={Doctor4A} alt='' />
                    <div className='name-card'>
                      <button className='btn-css-iaomr'>PROF DR. JAYANT DASH</button>
                    </div>
                  </div>
                  <div className='PosDistance-iaomr-center'>
                    <img className='PhotoPos-1A' src={Doctor5A} alt='' />
                    <div className='name-card'>
                      <button className='btn-css-iaomr'>PROF DR. PRASENJEET MOHANTY</button>
                    </div>
                  </div>
                  <div className='PosDistance-rightcorner'>
                    <img className='PhotoPos-1A' src={Doctor6A} alt='' />
                    <div className='name-card'>
                      <button className='btn-css-iaomr'>PROF DR. SUDHANSU S. MISHRA</button>
                    </div>
                  </div>
                </div>
              </Col>
              </div>
            </Row>
          </Container>
    
          {/* Lines */}
          {/* <img className='dividra' src={line} alt='' />
          <img className='dividr1a' src={line} alt='' />
          <img className='dividr2a' src={line} alt='' />
          <img className='dividr3a' src={line} alt='' /> */}
    
          {/* Third Second-level div */}
          <Container>
            <Row>
            <div className='containn'>
              <Col>
                <div className='second-level'>
                  <div className='PosDistance-iaomrleftcorner'>
                    <img className='PhotoPos-1A' src={Doctor7A} alt='' />
                    <div className='name-card'>
                      <button className='btn-css-iaomr'>PROF DR. SOUMENDRA SARANGI</button>
                    </div>
                  </div>
                  <div className='PosDistance-iaomr-center'>
                    <img className='PhotoPos-1A' src={Doctor8A} alt='' />
                    <div className='name-card'>
                      <button className='btn-css-iaomr'>PROF DR. NEETA MOHANTY</button>
                    </div>
                  </div>
                  <div className='PosDistance-rightcorner'>
                    <img className='PhotoPos-1A' src={Doctor9A} alt='' />
                    <div className='name-card'>
                      <button className='btn-css-iaomr'>PROF DR. ASWINI KUMAR KAR</button>
                    </div>
                  </div>
                </div>
              </Col>
              </div>
            </Row>
          </Container>
    
          {/* Lines */}
          {/* <img className='dividra' src={line} alt='' />
          <img className='dividr1a' src={line} alt='' />
          <img className='dividr2a' src={line} alt='' />
          <img className='dividr3a' src={line} alt='' /> */}
    
          {/* Fourth Second-level div */}
      
      
    
    
    
          {/* Sixth Second-level div */}
          <Container>
            <Row>
            <div className='containn'>
              <Col>
                <div className='second-level'>
                  <div className='PosDistance-iaomrleftcorner'>
                    <img className='PhotoPos-1A' src={Doctor16A} alt='' />
                    <div className='name-card'>
                      <button className='btn-css-iaomr'>PROF DR. SANGRAM PATRO</button>
                    </div>
                  </div>
                  <div className='PosDistance-iaomr-center'>
                    <img className='PhotoPos-1A' src={Doctor17A} alt='' />
                    <div className='name-card'>
                      <button className='btn-css-iaomr'>PROF DR. SURYAKANTA DAS</button>
                    </div>
                  </div>
                  <div className='PosDistance-rightcorner'>
                    <img className='PhotoPos-1A' src={Doctor18A} alt='' />
                    <div className='name-card'>
                      <button className='btn-css-iaomr'>DR. ASISH BARIK</button>
                    </div>
                  </div>
                </div>
              </Col>
              </div>
            </Row>
          </Container>
    
          {/* Lines */}
          {/* <img className='dividra' src={line} alt='' />
          <img className='dividr1a' src={line} alt='' />
          <img className='dividr2a' src={line} alt='' />
          <img className='dividr3a' src={line} alt='' /> */}
    
          {/* Seventh Second-level div */}
          <Container>
            <Row>
            <div className='containn'>
              <Col>
                <div className='second-level'>
                  <div className='PosDistance-iaomrleftcorner'>
                    <img className='PhotoPos-1A' src={Doctor19A} alt='' />
                    <div className='name-card'>
                      <button className='btn-css-iaomr'>DR. SUBASH CHANDRA RAJ</button>
                    </div>
                  </div>
                  <div className='PosDistance-iaomr-center'>
                    <img className='PhotoPos-1A' src={Doctor20A} alt='' />
                    <div className='name-card'>
                      <button className='btn-css-iaomr'>DR. JUGOJYOTI PATHI</button>
                    </div>
                  </div>
                </div>
              </Col>
              </div>
            </Row>
          </Container>
    
          {/* Lines */}
          {/* <img className='dividra' src={line} alt='' />
          <img className='dividr1a' src={line} alt='' />
          <img className='dividr2a' src={line} alt='' />
          <img className='dividr3a' src={line} alt='' /> */}
    
          {/* Eighth Second-level div */}
          
          </div>
          </div>
          
</>
)
}

export default OOOAdvisor