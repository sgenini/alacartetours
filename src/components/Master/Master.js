import React, { Component } from 'react';

import Navbar from "../Navbar/Navbar";
import Home from "../Home/Home";
import About from "../About/About";
import Incentives from "../Incentives/Incentives";

import Footer from "../Footer/Footer";


class Master extends Component {
  render() {
    return (
      <div className="Master">
        <Navbar />
        <Home />
        <About />
        <Incentives />
        <Footer />
      </div>
    );
  }
}

export default Master;
