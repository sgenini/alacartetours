import React, { Component } from 'react';

import Navbar from "../Navbar/Navbar";
import Home from "../Home/Home";
import About from "../About/About";
import Incentives from "../Incentives/Incentives";
import Conventions from "../Conventions/Conventions";
import Tour from "../Tour/Tour";
import FIT from "../FIT/FIT";
import Contact from "../Contact/Contact";

import Footer from "../Footer/Footer";


class Master extends Component {
  render() {
    return (
      <div className="Master">
        <Navbar />
        <Home />
        <About />
        <Incentives />
        <Conventions />
        <Tour />
        <FIT />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default Master;
