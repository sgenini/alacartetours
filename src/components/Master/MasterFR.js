import React, { Component } from 'react';

import NavbarFR from "../Navbar/NavbarFR";
import HomeFR from "../Home/HomeFR";
import AboutFR from "../About/AboutFR";
import IncentivesFR from "../Incentives/IncentivesFR";
import FooterFR from "../Footer/FooterFR";


class MasterFR extends Component {
  render() {
    return (
      <div className="MasterFR">
        <NavbarFR />
        <HomeFR />
        <AboutFR />
        <IncentivesFR />
        <FooterFR />
      </div>
    );
  }
}

export default MasterFR;
