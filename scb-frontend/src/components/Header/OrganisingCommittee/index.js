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

      <div>

      </div>
      <div className='MainContainer'>
        <img className='dividr' src={line} alt=''></img>

        <img className='dividr1' src={line} alt=''></img>

        <img className='dividr2' src={line} alt=''></img>

        <img className='dividr3' src={line} alt=''></img>
        <div className='ocHeading'>
          <h1 className='OCHeading12'>ORGANISING COMMITTEE</h1>
        </div>
        {/* 
    level1-1 */}

        {/* <Container><Row><Col>
      <div className='first-levelA'>
      <img className='PhotoPos-2' src={Doctor1} alt=''></img>
       <div className='name-card'>
        <button className='btn-cssA'>DR. FAKIR MOHAN DEBTA <br></br>
ORGANISING CHAIRMAN</button>
       </div></div></Col></Row></Container> */}

        <div>
        <div className='mainocContainer'>
          <div className='ocMembers'>
            <div className='ocMembersCard'>
              <img className='' src={Doctor1} alt=''></img>
              <div className='ocNameCard'>
                <button className='btn-cssA'>DR. FAKIR MOHAN DEBTA <br></br>
                  ORGANISING CHAIRMAN</button>
              </div>
            <div className='pd-1'></div>

              {/* <br></br>
              <br></br> */}
        <div className='pd-2'></div>

            </div>
          </div>
          <div className='otherOcMembers'>
            <div className='ocMembers'>
              <div className='ocMembersCard'>
                <img className='' src={Doctor2} alt=''></img>
                <div className='ocNameCard'>
                  <button className='btn-cssA'>DR. NIRANJAN MISHRA <br></br>
                  ORGANISING CO-CHAIRMAN</button>
                </div>
              </div>
            </div>
            <div className='pd-1'></div>
            <div className='ocMembers'>
              <div className='ocMembersCard'>
                <img className='' src={Doctor3} alt=''></img>
                <div className='ocNameCard'>
                  <button className='btn-cssA'>DR. SANGAMESH N.C. <br></br>
                  ORGANISING CO-CHAIRMAN</button>
                </div>
              </div>
            </div>
            <div className='pd-1'></div>
            <div className='ocMembers'>
              <div className='ocMembersCard'>
                <img className='' src={Doctor4} alt=''></img>
                <div className='ocNameCard'>
                  <button className='btn-cssA'>DR. SATYA RANJAN MISHRA<br></br>
                  ORGANISING CO-CHAIRMAN</button>
                </div>
              </div>
            </div>
            <div className='pd-1'></div>
          </div>
        </div>  
        </div>
        <div className='pd-2'></div>




        <img className='dividr' src={line} alt=''></img>

        <img className='dividr1' src={line} alt=''></img>

        <img className='dividr2' src={line} alt=''></img>

        <img className='dividr3' src={line} alt=''></img>
        {/* starting */}
        <Container>
        <div className='mainocContainer'>
          {/* <br />
          <br />
          <br /> */}
        <div className='pd-2'></div>

          <div className='otherOcMembers'>
            <div className='ocMembers'>
              <div className='ocMembersCard'>
                <img className='' src={Doctor5} alt=''></img>
                <div className='ocNameCard'>
                  <button className='btn-cssA'>Dr. SHREEYAM MOHAPATRA<br></br>
                SECRETARY</button>
                </div>
              </div>
            </div>
            <div className='pd-1'></div>
            <div className='ocMembers'>
              <div className='ocMembersCard'>
                <img className='PhotoPos-2A' src={Doctor15} alt=''></img>
                <div className='ocNameCard'>
                  <button className='btn-cssA'>Dr. Sthitaprajna lenka<br /></button>
                </div>
              </div>
            </div>
            <div className='pd-1'></div>
            <div className='ocMembers'>
              <div className='ocMembersCard'>
                <img className='' src={Doctor6} alt=''></img>
                <div className='ocNameCard'>
                  <button className='btn-cssA'>DR. SHADAB ALI BAIG <br /></button>
                </div>
              </div>
            </div>
            <div className='pd-1'></div>



          </div>
        </div>  
        </Container>
        <Container>
        <div className='mainocContainer'>
          {/* <br />
          <br />
          <br /> */}
        <div className='pd-2'></div>
          <div className='otherOcMembers'>
            <div className='ocMembers'>
              <div className='ocMembersCard'>
                <img className='' src={Doctor8} alt=''></img>
                <div className='ocNameCard'>
                  <button className='btn-cssA'>DR. KUNAL AGARWAL <br></br>
                    SCIENTIFIC CHAIRMAN</button>
                </div>
              </div>
            </div>
            <div className='pd-1'></div>
            <div className='ocMembers'>
              <div className='ocMembersCard'>
                <img className='PhotoPos-2A' src={Doctor16} alt=''></img>
                <div className='ocNameCard'>
                  <button className='btn-cssA'>Dr. J P raiguru<br></br>
                      Scientific Co Chairman</button>
                </div>
              </div>
            </div>
            <div className='pd-1'></div>
            <div className='ocMembers'>
              <div className='ocMembersCard'>
                <img className='' src={Doctor9} alt=''></img>
                <div className='ocNameCard'>
                  <button className='btn-cssA'>DR. RACHNA RATH <br></br>
                      SCIENTIFIC CHAIRMAN</button>
                </div>
              </div>
            </div>
            <div className='pd-1'></div>
            <div className='ocMembers'>
              <div className='ocMembersCard'>
                <img className='' src={Doctor10} alt=''></img>
                <div className='ocNameCard'>
                  <button className='btn-cssA'>DR. SWARNAV PATNAIK <br></br>
                      SCIENTIFIC CO-CHAIRMAN</button>
                </div>
              </div>
            </div>
            <div className='pd-1'></div>
          </div>
        </div>  
        </Container>
        <Container>
        <div className='mainocContainer'>
          {/* <br />
          <br />
          <br /> */}
        <div className='pd-2'></div>

          <div className='otherOcMembers'>
            <div className='ocMembers'>
              <div className='ocMembersCard'>
                <img className='' src={Doctor12} alt=''></img>
                <div className='ocNameCard'>
                  <button className='btn-cssA'>DR. DEBAJYOTI BARDHAN <br></br>
                TREASURER</button>
                </div>
              </div>
            </div>
            <div className='pd-1'></div>
            <div className='ocMembers'>
              <div className='ocMembersCard'>
                <img className='PhotoPos-2A' src={Doctor13} alt=''></img>
                <div className='ocNameCard'>
                  <button className='btn-cssA'>DR. PRIYANKA DEBTA <br></br>
                  PRE-CONFERENCE CHAIRMAN</button>
                </div>
              </div>
            </div>
            <div className='pd-1'></div>
            <div className='ocMembers'>
              <div className='ocMembersCard'>
                <img className='' src={Doctor14} alt=''></img>
                <div className='ocNameCard'>
                  <button className='btn-cssA'>Dr. SHUBHANGI PAREEK <br></br>
                  PRE-CONFERENCE CHAIRMAN</button>
                </div>
              </div>
            </div>
            <div className='pd-1'></div>
            
          </div>
        </div>  
        </Container>
        <div className='pd-2'></div>
        {/* <br />
        <br /> */}
      </div>
      <img className='dividr' src={line} alt=''></img>

      <img className='dividr1' src={line} alt=''></img>

      <img className='dividr2' src={line} alt=''></img>

      <img className='dividr3' src={line} alt=''></img>
    </>
  )
}

export default OrganisingCommittee