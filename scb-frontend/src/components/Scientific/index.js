import React from 'react';
import LogoSection from '../Logo-Section';
import NavBar from '../Nav-Bar';
import Header from '../Header';
import '../Scientific/scientific.css'

const SymposiumGuidelines = () => {
 const guidelines = [
   "Registration for the 21st National OOO Symposium 2024 is mandatory for submission of abstract for scientific Paper/Poster.",
   "Scientific Paper/ Poster presentations are open for Faculty and Post-Graduate Trainees.",
   "Registered participants can make only one presentation, either paper or poster.",
   "A presentation should have a single author. No co-authors allowed.",
   "Structured abstract for original research and non-structured abstract for case report, review and poster should be submitted. Word limit for abstract is 250 words. Times New Roman Font size – 14 for HEADINGS and 12 for the content.",
   "Abstract is to be submitted in MS word format in the google form link mentioned in the website.",
   "Paper presentation should be made in MS Powerpoint 2016 (or higher version).",
   "The paper/poster should not contain the name of the presenter or name of the guide or the name of the institution (for impartial assessment).",
   "Posters should be submitted in the form of E-posters only in JPEG format at a minimum resolution of 600 dpi and in 16:9 aspect ratio (Landscape mode). It should contain the Registration ID at the top right corner.",
   "Authors of the poster have to present during the poster display session. The time slot for the poster will be intimated to the authors beforehand.",
   "Presentation time is 6 +2 minutes for students. For faculty allotted time will be 8+2 minutes.",
   "Time allotted for Poster presentation: 5 minutes (3 min for presentation and 2 min for discussion).",
   "Strict adherence to the time limit should be followed.",
   "It is mandatory to submit your final presentation online for the poster/paper before the given last date.",
   "Last date for submission of final presentation is 31st January 2024.",
   "The decision of the scientific committee will be final.",
 ];

 return (
   <>
   <LogoSection></LogoSection>
    <NavBar></NavBar>
    <Header></Header>
    <div className="guidelines-container">
      <h2 className="guidelines-heading">Symposium Guidelines</h2>
      <ul className="guidelines-list">
        {guidelines.map((guideline, index) => (
          <li key={index}>{guideline}</li>
        ))}
      </ul>
    </div></>
    
 );
};

export default SymposiumGuidelines;
