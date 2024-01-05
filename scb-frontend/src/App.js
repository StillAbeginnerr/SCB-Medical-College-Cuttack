import React from "react";
import Home from "./components/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import IAOMP from "./components/Committee/IAOMP";
import IAOMR from "./components/Committee/IAOMR";
import SymposiumGuidelines from "./components/Scientific";
import SponsorshipTable from "./components/Trade/SponsorshipDetails";
import Footer from "./components/Footer";
import Contact from "./components/ContactUs";
import RegistrationTable from "./components/Registration";
import AOMSI from "./components/Committee/AOMSI";

function App() {
  return (
    <>
    <Router>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/iaomr" element={<IAOMR />} />
        <Route path="/iaomp" element={<IAOMP />} />
        <Route path="/aomsi" element={<AOMSI />} />
        <Route path="/registration" element={<RegistrationTable />} />
        <Route path="/Guidelines" element={<SymposiumGuidelines />} />
        <Route path="/sponsor" element={<SponsorshipTable />} />
        <Route path="/ContactUs" element={<Contact />} />
        {/* Add more routes as needed */}
      </Routes>
      <Footer />
    </Router>
    {/* <Home></Home> */}
    {/* <AOMSI></AOMSI> */}
    {/* <IAOMP></IAOMP> */}
    {/* <IAOMR></IAOMR> */}
  {/* <Contact></Contact> */}
  {/* <SponsorshipTable></SponsorshipTable> */}
  {/* <SymposiumGuidelines></SymposiumGuidelines> */}
  {/* <RegistrationTable></RegistrationTable> */}
   {/* <Footer></Footer> */}
    {/* <Routes>
      <Route path='/IAOMP' element={<IAOMP></IAOMP>}></Route>
    </Routes>
    </Router> */}
    </>
  );
}

export default App;
