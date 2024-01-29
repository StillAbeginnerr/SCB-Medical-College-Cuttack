import React from 'react'

import LogoSection from '../../Logo-Section'
import NavBar from '../../Nav-Bar'
import Header from '../../Header'

import { Container } from 'react-bootstrap';
import { Col, Row } from 'react-bootstrap';

import Doctor1AX from '../../assets/CoreCommittee/Dr. Shweta Mishra (1).JPG';
import Doctor2AX from '../../assets//CoreCommittee/Dr. Pinali Das (1).JPG';
import Doctor3AX from '../../assets/CoreCommittee/Dr. Ekagrata Mishra (1).JPG';
import Doctor4AX from '../../assets/CoreCommittee/Dr. Pooja Bohidar (1).JPG';
import Doctor5AX from '../../assets/CoreCommittee/Dr. BDSJ Krishnapriya .JPG';
import Doctor6AX from '../../assets/CoreCommittee/Dr. Romali Panda (1).JPG';
import Doctor7AX from '../../assets/CoreCommittee/Dr. Sharmila Senapati .JPG';
import Doctor8AX from '../../assets/CoreCommittee/Dr. Ajo Babu George (1).JPG';
import Doctor9AX from '../../assets/CoreCommittee/Dr. Sebati Murmu (2).JPG';
import Doctor10AX from '../../assets/CoreCommittee/Dr. Shruti Dash.JPG';
import Doctor11AX from '../../assets/CoreCommittee/Dr. Krishna Satpathy (1).jpg';
import Doctor12AX from '../../assets/CoreCommittee/Dr. Miraculie G Athisayakani (1).jpg';
import Doctor13AX from '../../assets/CoreCommittee/Dr. Shelly Rai (1).JPG';
import Doctor14AX from '../../assets/CoreCommittee/Dr. Sonia Mundu (1).JPG';
import Doctor15AX from '../../assets/CoreCommittee/Dr. Dirangzuele Hau (1).JPG';
import Doctor16AX from '../../assets/CoreCommittee/Dr. Basudha Bera (1).JPG';
import Doctor17AX from '../../assets/CoreCommittee/Dr. Sambit Kumar Sadual.JPG';
import Doctor18AX from '../../assets/CoreCommittee/Dr. Motikala Pandab .JPG';
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


import './core.css'

function Student() {
  return (
    <>
      <LogoSection></LogoSection>
      <NavBar></NavBar>
      <Header></Header>
      <div className='MainContainer'>
      <h1 className='headingCore pd-4'>Core Organising Committee</h1>

        <div className='outerContainer'>
          <div className='innerContainer'>
            <div className='containerCore pd-1'>
              <img className='imgCore' src={Doctor1AX} alt=''></img>
              <button className='btn-css-aomsi'>Dr. Shweta Mishra <br></br>
                President</button>
            </div>
            <div className='containerCore pd-1'>
              <img className='imgCore' src={Doctor2AX} alt=''></img>
              <button className='btn-css-aomsi'>Dr. Pinali Das<br></br>
                President</button>
            </div>
            <div className='containerCore pd-1'>
              <img className='imgCore' src={Doctor3AX} alt=''></img>
              <button className='btn-css-aomsi'>Dr. Ekagrata Mishra<br></br>
                President</button>
            </div>
          </div>

        </div>
        <div className='outerContainer'>
          <div className='innerContainer'>
            <div className='containerCore pd-1'>
              <img className='imgCore' src={Doctor4AX} alt=''></img>
              <button className='btn-css-aomsi'>Dr. Pooja Bohidar <br></br>
                President</button>
            </div>
            <div className='containerCore pd-1'>
              <img className='imgCore' src={Doctor5AX} alt=''></img>
              <button className='btn-css-aomsi'>Dr. BDSJ Krishna Priya<br></br>
                President</button>
            </div>
            <div className='containerCore pd-1'>
              <img className='imgCore' src={Doctor6AX} alt=''></img>
              <button className='btn-css-aomsi'>Dr. Romali Panda<br></br>
                President</button>
            </div>
          </div>
        </div>
        <div className='outerContainer'>
          <div className='innerContainer'>
            <div className='containerCore pd-1'>
              <img className='imgCore' src={Doctor7AX} alt=''></img>
              <button className='btn-css-aomsi'>Dr. Sharmila Senapati <br></br>
                President</button>
            </div>
            <div className='containerCore pd-1'>
              <img className='imgCore' src={Doctor8AX} alt=''></img>
              <button className='btn-css-aomsi'>Dr. Ajo Babu George<br></br>
                President</button>
            </div>
            <div className='containerCore pd-1'>
              <img className='imgCore' src={Doctor9AX} alt=''></img>
              <button className='btn-css-aomsi'>Dr. Sebati Murmu<br></br>
                President</button>
            </div>
          </div>
        </div>
      </div>

      {/* 
        level1-1 */}


      {/* thirdlevel3 */}
      {/* <div className='core'>
            <div className='second-le'>
            <h1 className='core-c'>
  Core Organising Committee</h1>
            </div>
            
    
            <Container>
  <Row>
    <div className='containn'>
      <Col>
        <div className='second-level'>
          <div className='PosDistance-iaomrleftcorner'>
            <img className='PhotoPos-1A' src={Doctor1AX} alt='' />
            <div className='name-card'>
              <button className='btn-css-core'>Dr. Shweta Mishra</button>
            </div>
          </div>
          <div className='PosDistance-iaomr-center'>
            <img className='PhotoPos-1A' src={Doctor2AX} alt='' />
            <div className='name-card'>
              <button className='btn-css-core'>Dr. Pinali Das</button>
            </div>
          </div>
          <div className='PosDistance-rightcorner'>
            <img className='PhotoPos-1A' src={Doctor3AX} alt='' />
            <div className='name-card'>
              <button className='btn-css-core'>Dr. Ekagrata Mishra</button>
            </div>
          </div>
        </div>
      </Col>
    </div>
  </Row>
</Container>

<Container>
  <Row>
    <div className='containn'>
      <Col>
        <div className='second-level'>
          <div className='PosDistance-iaomrleftcorner'>
            <img className='PhotoPos-1A' src={Doctor4AX} alt='' />
            <div className='name-card'>
              <button className='btn-css-core'>Dr. Pooja Bohidar</button>
            </div>
          </div>
          <div className='PosDistance-iaomr-center'>
            <img className='PhotoPos-1A' src={Doctor5AX} alt='' />
            <div className='name-card'>
              <button className='btn-css-core'>Dr. BDSJ Krishna Priya</button>
            </div>
          </div>
          <div className='PosDistance-rightcorner'>
            <img className='PhotoPos-1A' src={Doctor6AX} alt='' />
            <div className='name-card'>
              <button className='btn-css-core'>Dr. Romali Panda</button>
            </div>
          </div>
        </div>
      </Col>
    </div>
  </Row>
</Container>

<Container>
  <Row>
    <div className='containn'>
      <Col>
        <div className='second-level'>
          <div className='PosDistance-iaomrleftcorner'>
            <img className='PhotoPos-1A' src={Doctor7AX} alt='' />
            <div className='name-card'>
              <button className='btn-css-core'>Dr. Sharmila Senapati</button>
            </div>
          </div>
          <div className='PosDistance-iaomr-center'>
            <img className='PhotoPos-1A' src={Doctor8AX} alt='' />
            <div className='name-card'>
              <button className='btn-css-core'>Dr. Ajo Babu George</button>
            </div>
          </div>
          <div className='PosDistance-rightcorner'>
            <img className='PhotoPos-1A' src={Doctor9AX} alt='' />
            <div className='name-card'>
              <button className='btn-css-core'>Dr. Sebati Murmu</button>
            </div>
          </div>
        </div>
      </Col>
    </div>
  </Row>
</Container> */}

      {/* Lines */}
      {/* <img className='dividra' src={line} alt='' />
          <img className='dividr1a' src={line} alt='' />
          <img className='dividr2a' src={line} alt='' />
          <img className='dividr3a' src={line} alt='' /> */}

      {/* Fourth Second-level div */}





      {/* Sixth Second-level div */}
      {/* <Container>
  <Row>
    <div className='containn'>
      <Col>
        <div className='second-level'>
          <div className='PosDistance-iaomrleftcorner'>
            <img className='PhotoPos-1A' src={Doctor10AX} alt='' />
            <div className='name-card'>
              <button className='btn-css-core'>Dr. Shruti Dash</button>
            </div>
          </div>
          <div className='PosDistance-iaomr-center'>
            <img className='PhotoPos-1A' src={Doctor11AX} alt='' />
            <div className='name-card'>
              <button className='btn-css-core'>Dr. Krishna Satpathy</button>
            </div>
          </div>
          <div className='PosDistance-rightcorner'>
            <img className='PhotoPos-1A' src={Doctor12AX} alt='' />
            <div className='name-card'>
              <button className='btn-css-core'>Dr. Miraculie G Athisayakani</button>
            </div>
          </div>
        </div>
      </Col>
    </div>
  </Row>
</Container>

<Container>
  <Row>
    <div className='containn'>
      <Col>
        <div className='second-level'>
          <div className='PosDistance-iaomrleftcorner'>
            <img className='PhotoPos-1A' src={Doctor13AX} alt='' />
            <div className='name-card'>
              <button className='btn-css-core'>Dr. Shelly Rai</button>
            </div>
          </div>
          <div className='PosDistance-iaomr-center'>
            <img className='PhotoPos-1A' src={Doctor14AX} alt='' />
            <div className='name-card'>
              <button className='btn-css-core'>Dr. Sonia Mundu</button>
            </div>
          </div>
          <div className='PosDistance-rightcorner'>
            <img className='PhotoPos-1A' src={Doctor15AX} alt='' />
            <div className='name-card'>
              <button className='btn-css-core'>Dr. Dirangzuele Hau</button>
            </div>
          </div>
        </div>
      </Col>
    </div>
  </Row>
</Container>

<Container>
  <Row>
    <div className='containn'>
      <Col>
        <div className='second-level'>
          <div className='PosDistance-iaomrleftcorner'>
            <img className='PhotoPos-1A' src={Doctor16AX} alt='' />
            <div className='name-card'>
              <button className='btn-css-core'>Dr. Basudha Bera</button>
            </div>
          </div>
          <div className='PosDistance-iaomr-center'>
            <img className='PhotoPos-1A' src={Doctor17AX} alt='' />
            <div className='name-card'>
              <button className='btn-css-core'>Dr. Sambit Kumar Sadual</button>
            </div>
          </div>
          <div className='PosDistance-rightcorner'>
            <img className='PhotoPos-1A' src={Doctor18AX} alt='' />
            <div className='name-card'>
              <button className='btn-css-core'>Dr. Motikala Pandab</button>
            </div>
          </div>
        </div>
      </Col>
    </div>
  </Row>
</Container>
          </div>
          </div> */}

    </>
  )
}

export default Student