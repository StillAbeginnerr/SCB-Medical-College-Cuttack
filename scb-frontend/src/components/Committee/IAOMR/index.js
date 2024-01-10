import React from 'react'
// import Card from 'react-bootstrap/Card';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Doctor1A from '../../assets/DoctorPhotos/IAOMR/1.jpg';
import Doctor2A from '../../assets/DoctorPhotos/IAOMR/2.jpg';
import Doctor3A from '../../assets/DoctorPhotos/IAOMR/3.jpg';
import Doctor4A from '../../assets/DoctorPhotos/IAOMR/4.jpg';
import Doctor5A from '../../assets/DoctorPhotos/IAOMR/5.jpg';
import Doctor6A from '../../assets/DoctorPhotos/IAOMR/6.jpeg';
import Doctor7A from '../../assets/DoctorPhotos/IAOMR/7.jpg';
import Doctor8A from '../../assets/DoctorPhotos/IAOMR/8.jpg';
import Doctor9A from '../../assets/DoctorPhotos/IAOMR/9.jpg';
import Doctor10A from '../../assets/DoctorPhotos/IAOMR/10.jpg';
import Doctor11A from '../../assets/DoctorPhotos/IAOMR/11.jpg';
import Doctor12A from '../../assets/DoctorPhotos/IAOMR/12.jpeg';
import Doctor13A from '../../assets/DoctorPhotos/IAOMR/13.jpg';
import Doctor14A from '../../assets/DoctorPhotos/IAOMR/14.jpg';
import Doctor15A from '../../assets/DoctorPhotos/IAOMR/15.png';
import Doctor16A from '../../assets/DoctorPhotos/IAOMR/16.jpg';
import Doctor17A from '../../assets/DoctorPhotos/IAOMR/17.jpg';
import Doctor18A from '../../assets/DoctorPhotos/IAOMR/18.jpg';
import Doctor19A from '../../assets/DoctorPhotos/IAOMR/19.jpg';
import Doctor20A from '../../assets/DoctorPhotos/IAOMR/20.jpg';
import Doctor21A from '../../assets/DoctorPhotos/IAOMR/21.jpg';
import Doctor22A from '../../assets/DoctorPhotos/IAOMR/22.jpg';
// import Doctor23A from '../../assets/DoctorPhotos/IAOMR/23.jpg';
import Doctor24A from '../../assets/DoctorPhotos/IAOMR/24.jpg';
import Doctor25A from '../../assets/DoctorPhotos/IAOMR/25.jpg';
import Doctor26A from '../../assets/DoctorPhotos/IAOMR/26.jpg';
import line from '../../assets/Divider.png'

import './iaomr.css'
import LogoSection from '../../Logo-Section';
import NavBar from '../../Nav-Bar';
import Header from '../../Header';

import iaomrlogo from '../../assets/DoctorPhotos/IAOMR/IAOMR__1_-removebg-preview.png'

function IAOMR() {
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
        <img className='iaomrlogo' src={iaomrlogo} alt=''></img>
        <h1 className='iaomr-para'>
IAOMR OFFICE BEARERS</h1>
        </div>
        

<Container>
        <Row>
        <div className='containn'>
          <Col>
            <div className='second-level'>
              <div className='PosDistance-iaomrleftcorner'>
                <img className='PhotoPos-1A' src={Doctor1A} alt='' />
                <div className='name-card'>
                  <button className='btn-css-iaomr'>DR. NEETA MISRA<br></br>PRESIDENT </button>
                </div>
              </div>
              <div className='PosDistance-iaomr-center'>
                <img className='PhotoPos-1A' src={Doctor2A} alt='' />
                <div className='name-card'>
                  <button className='btn-css-iaomr-2'>DR. SHIVAPRASAD S<br></br>HONOURABLE GENERAL SECRETARY</button>
                </div>
              </div>
              <div className='PosDistance-rightcorner'>
                <img className='PhotoPos-1A' src={Doctor3A} alt='' />
                <div className='name-card'>
                  <button className='btn-css-iaomr'>DR. K SRI KRISHNA<br></br>PRESIDENT ELECT</button>
                </div>
              </div>
            </div>
          </Col>
          </div>
        </Row>
      
      </Container>

      {/* Lines */}
      <img className='dividra' src={line} alt='' />
      <img className='dividr1a' src={line} alt='' />
      <img className='dividr2a' src={line} alt='' />
      <img className='dividr3a' src={line} alt='' />

      {/* Second Second-level div */}
      <Container>
        <Row>
        <div className='containn'>
          <Col>
            <div className='second-level'>
              <div className='PosDistance-iaomrleftcorner'>
                <img className='PhotoPos-1A' src={Doctor4A} alt='' />
                <div className='name-card'>
                  <button className='btn-css-iaomr'>DR. AVINASH TEJASVI M L<br></br>HEAD OFFICE TREASURER</button>
                </div>
              </div>
              <div className='PosDistance-iaomr-center'>
                <img className='PhotoPos-1A' src={Doctor5A} alt='' />
                <div className='name-card'>
                  <button className='btn-css-iaomr'>DR. SANDEEP PAGARE<br></br>VICE PRESIDENT </button>
                </div>
              </div>
              <div className='PosDistance-rightcorner'>
                <img className='PhotoPos-1A' src={Doctor6A} alt='' />
                <div className='name-card'>
                  <button className='btn-css-iaomr'>DR. ABHISHEK SINHA<br></br>VICE PRESIDENT</button>
                </div>
              </div>
            </div>
          </Col>
          </div>
        </Row>
      </Container>

      {/* Lines */}
      <img className='dividra' src={line} alt='' />
      <img className='dividr1a' src={line} alt='' />
      <img className='dividr2a' src={line} alt='' />
      <img className='dividr3a' src={line} alt='' />

      {/* Third Second-level div */}
      <Container>
        <Row>
        <div className='containn'>
          <Col>
            <div className='second-level'>
              <div className='PosDistance-iaomrleftcorner'>
                <img className='PhotoPos-1A' src={Doctor7A} alt='' />
                <div className='name-card'>
                  <button className='btn-css-iaomr'>DR. C SARAVANA BHARATHI<br></br>VICE PRESIDENT </button>
                </div>
              </div>
              <div className='PosDistance-iaomr-center'>
                <img className='PhotoPos-1A' src={Doctor8A} alt='' />
                <div className='name-card'>
                  <button className='btn-css-iaomr'>DR. SUNALI KHANNA<br></br>VICE PRESIDENT</button>
                </div>
              </div>
              <div className='PosDistance-rightcorner'>
                <img className='PhotoPos-1A' src={Doctor9A} alt='' />
                <div className='name-card'>
                  <button className='btn-css-iaomr'>DR. SRIDEVI KODURI<br></br>VICE PRESIDENT</button>
                </div>
              </div>
            </div>
          </Col>
          </div>
        </Row>
      </Container>

      {/* Lines */}
      <img className='dividra' src={line} alt='' />
      <img className='dividr1a' src={line} alt='' />
      <img className='dividr2a' src={line} alt='' />
      <img className='dividr3a' src={line} alt='' />

      {/* Fourth Second-level div */}
      <Container>
        <Row>
        <div className='containn'>
          <Col>
            <div className='second-levelC'>
              <div className='PosDistance-iaomrleftcornerA'>
                <img className='PhotoPos-1A' src={Doctor10A} alt='' />
                <div className='name-card'>
                  <button className='btn-css-iaomr-1'>DR. PRASHANTHI REDDY<br></br>HEAD OFFICE JOINT SECRETARY</button>
                </div>
              </div>
              <div className='PosDistance-rightcornerA'>
                <img className='PhotoPos-1A' src={Doctor11A} alt='' />
                <div className='name-card'>
                  <button className='btn-css-iaomr-1'>DR. ADIT SRIVASTAVA<br></br>HEAD OFFICE JOINT SECRETARY</button>
                </div>
              </div>
            </div>
          </Col>
          </div>
        </Row>
      </Container>

      {/* Lines */}
      <img className='dividra' src={line} alt='' />
      <img className='dividr1a' src={line} alt='' />
      <img className='dividr2a' src={line} alt='' />
      <img className='dividr3a' src={line} alt='' />

      {/* Fifth Second-level div */}
      <Container>
        <Row>
        <div className='containn'>
          <Col>
            <div className='second-levelB'>
              <div className='PosDistance-iaomrleftcorner'>
                <img className='PhotoPos-1B' src={Doctor12A} alt='' />
                <div className='name-card'>
                  <button className='btn-css-iaomr'>DR. MANISHA M KHORATE<br></br>EDITOR IN CHIEF</button>
                </div>
              </div>
              <div className='PosDistance-iaomr-center-2'>
                <img className='PhotoPos-1B' src={Doctor13A} alt='' />
                <div className='name-card'>
                  <button className='btn-css-iaomr'>DR. RAMAMURTHY T K<br></br>REGISTERED OFFICE SECRETARY</button>
                </div>
              </div>
              <div className='PosDistance-rightcorner-1'>
                <img className='PhotoPos-1B' src={Doctor14A} alt='' />
                <div className='name-card'>
                  <button className='btn-css-iaomr'>DR. DEEPAK T A<br></br>REGISTERED OFFICE TREASURER</button>
                </div>
              </div>
              <div className='PosDistance-rightcorner-2'>
                <img className='PhotoPos-1B' src={Doctor15A} alt='' />
                <div className='name-card'>
                  <button className='btn-css-iaomr'>DR. ASHOK L<br></br>REGISTERED OFFICE JOINT SECRETARY</button>
                </div>
              </div>
            </div>
          </Col>
          </div>
        </Row>
      </Container>

      {/* Lines */}
      <img className='dividra' src={line} alt='' />
      <img className='dividr1a' src={line} alt='' />
      <img className='dividr2a' src={line} alt='' />
      <img className='dividr3a' src={line} alt='' />



      <Container><Row><Col> 
      <div className='second-l'><h1 className='iaomr-para'>
Executive Committee </h1></div>
        </Col></Row></Container>

      {/* Sixth Second-level div */}
      <Container>
        <Row>
        <div className='containn'>
          <Col>
            <div className='second-level'>
              <div className='PosDistance-iaomrleftcorner'>
                <img className='PhotoPos-1A' src={Doctor16A} alt='' />
                <div className='name-card'>
                  <button className='btn-css-iaomr'>DR. G V PRAMOD</button>
                </div>
              </div>
              <div className='PosDistance-iaomr-center'>
                <img className='PhotoPos-1A' src={Doctor17A} alt='' />
                <div className='name-card'>
                  <button className='btn-css-iaomr'>DR. Y PAVAN KUMAR</button>
                </div>
              </div>
              <div className='PosDistance-rightcorner'>
                <img className='PhotoPos-1A' src={Doctor18A} alt='' />
                <div className='name-card'>
                  <button className='btn-css-iaomr'>DR. MALOTH KOTYA NAIK</button>
                </div>
              </div>
            </div>
          </Col>
          </div>
        </Row>
      </Container>

      {/* Lines */}
      <img className='dividra' src={line} alt='' />
      <img className='dividr1a' src={line} alt='' />
      <img className='dividr2a' src={line} alt='' />
      <img className='dividr3a' src={line} alt='' />

      {/* Seventh Second-level div */}
      <Container>
        <Row>
        <div className='containn'>
          <Col>
            <div className='second-level'>
              <div className='PosDistance-iaomrleftcorner'>
                <img className='PhotoPos-1A' src={Doctor19A} alt='' />
                <div className='name-card'>
                  <button className='btn-css-iaomr'>DR. T SARAVANAN</button>
                </div>
              </div>
              <div className='PosDistance-iaomr-center'>
                <img className='PhotoPos-1A' src={Doctor20A} alt='' />
                <div className='name-card'>
                  <button className='btn-css-iaomr'>DR. UTHKAL M P</button>
                </div>
              </div>
              <div className='PosDistance-rightcorner'>
                <img className='PhotoPos-1A' src={Doctor21A} alt='' />
                <div className='name-card'>
                  <button className='btn-css-iaomr'>DR. NIKHIL RAJ</button>
                </div>
              </div>
            </div>
          </Col>
          </div>
        </Row>
      </Container>

      {/* Lines */}
      <img className='dividra' src={line} alt='' />
      <img className='dividr1a' src={line} alt='' />
      <img className='dividr2a' src={line} alt='' />
      <img className='dividr3a' src={line} alt='' />

      {/* Eighth Second-level div */}
      <Container>
        <Row>
        <div className='containn'>
          <Col>
            <div className='second-level'>
              <div className='PosDistance-iaomrleftcorner'>
                <img className='PhotoPos-1A' src={Doctor22A} alt='' />
                <div className='name-card'>
                  <button className='btn-css-iaomr'>DR. RAMNARAYAN B K</button>
                </div>
              </div>
              <div className='PosDistance-iaomr-center'>
                <img className='PhotoPos-1A' src={Doctor24A} alt='' />
                <div className='name-card'>
                  <button className='btn-css-iaomr'>DR. RACHANA PRABHU</button>
                </div>
              </div>
              <div className='PosDistance-rightcorner'>
                <img className='PhotoPos-1A' src={Doctor25A} alt='' />
                <div className='name-card'>
                  <button className='btn-css-iaomr'>DR. RANJEETA MEHTA</button>
                </div>
              </div>
            </div>
          </Col>
          </div>
        </Row>
      </Container>

      {/* Lines */}
      <img className='dividra' src={line} alt='' />
      <img className='dividr1a' src={line} alt='' />
      <img className='dividr2a' src={line} alt='' />
      <img className='dividr3a' src={line} alt='' />

      {/* Ninth Second-level div */}
      <Container>
        <Row>
        <div className='containn'>
          <Col>
            <div className='second-level'>
              <div className='PosDistance-iaomr-center-3'>
                <img className='PhotoPos-1A' src={Doctor26A} alt='' />
                <div className='name-card'>
                  <button className='btn-css-iaomr'>DR. DEEPA M S</button>
                </div>
              </div>
            </div>
          </Col>
          </div>
        </Row>
      </Container>
</div>
       

       </div>
   </>
  )
}

export default IAOMR