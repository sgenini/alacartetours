import React, { Component } from 'react';

import NavbarFR from "../Navbar/NavbarFR";
import HomeFR from "../Home/HomeFR";
import AboutFR from "../About/AboutFR";
import IncentivesFR from "../Incentives/IncentivesFR";
import ConventionsFR from "../Conventions/ConventionsFR";
import TourFR from "../Tour/TourFR";
import FITFR from "../FIT/FITFR";
import ContactFR from "../Contact/ContactFR";
import FooterFR from "../Footer/FooterFR";


class MasterFR extends Component {
  render() {
    return (
      <div className="MasterFR">
        <NavbarFR />
        <HomeFR />
        <AboutFR />
        <IncentivesFR />
        <ConventionsFR />
        <TourFR />
        <FITFR />
        <ContactFR />
        <FooterFR />
      </div>
    );
  }
}

export default MasterFR;
