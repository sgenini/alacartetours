import React, { Component } from 'react';

import HomeFR from "../Home/HomeFR";
import NavbarFR from "../Navbar/NavbarFR";
import Footer from "../Footer/Footer";


class French extends Component {
  render() {
    return (
      <div className="French">
        <NavbarFR />
        <HomeFR />
        <Footer />
      </div>
    );
  }
}

export default French;
