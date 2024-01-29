import React from 'react'

import LogoSection from '../../Logo-Section'
import NavBar from '../../Nav-Bar'
import Header from '../../Header'

import './aomsi.css'
import doc1 from './Dr.-Vikash-Dupar.jpg';
import doc2 from './Dr.-Girish-Rao.jpg';



function AOMSI() {
  return (
    <>
      <LogoSection></LogoSection>
      <NavBar></NavBar>
      <Header></Header>
      <h1 className='aomsi-heading' style={{ textAlign: 'center' }}>AOMSI Committee</h1>

      <div className='outerContainer'>
        <div className='innerContainer'>
          <div className='containerAOMSI pd-1'>
            <img src={doc1} alt=''></img>
            <button className='btn-css-aomsi'>DR. VIKAS DHUPAR <br></br>
              President</button>
          </div>
          <div className='containerAOMSI pd-1'>
            <img src={doc2} alt=''></img>
            <button className='btn-css-aomsi'>DR. S. GIRISH RAO<br></br>
              President</button>
          </div>
        </div>

      </div>
      <br />
      <br />
      {/* <div className='container'>
      <h1 className='aomsi-heading' style={{textAlign:'center'}}>AOMSI Committee</h1>
      <div className='Doctor'>
<img src={doc1} alt=''></img>
<div className='name-card1'>
      <button className='btn-css-aomsi'>DR. VIKAS DHUPAR <br></br>
      President</button>
    </div>
      </div>
      <div className='Doctor'>
      <img src={doc2} alt=''></img>
      <div className='name-card1'>
      <button className='btn-css-aomsi'>DR. S. GIRISH RAO<br></br>
      Honourable Secretary</button>
    </div>
      </div>
    </div> */}
    </>
  )
}

export default AOMSI