import React, { Component } from 'react';

import NavbarFR from "../Navbar/NavbarFR";
import HomeFR from "../Home/HomeFR";
import AboutFR from "../About/AboutFR";
import IncentivesFR from "../Incentives/IncentivesFR";

import Footer from "../Footer/Footer";


class MasterFR extends Component {
  render() {
    return (
      <div className="MasterFR">
        <NavbarFR />
        <HomeFR />
        <AboutFR />
        <IncentivesFR />
        <Footer />
      </div>
    );
  }
}

export default MasterFR;
