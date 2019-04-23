import React, { Component } from "react";

import logo from './logo.svg';
import './App.css';

class Default extends Component {
  render() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Under construction, check back soon! <span role="img" aria-label="fight-on">✌</span></p>
      </header>
      );
    }
  }

export default Default;