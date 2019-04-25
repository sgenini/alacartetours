import React, { Component } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBIcon } from "mdbreact";

import "./navbar.css";
import logo from "../../assets/images/logo/logo2.png";

class Navbar extends Component {
  state = {
    isOpen: false
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }

  closeDropdown = () => {
    this.setState({ isOpen: false });
  }

  redirectGithub = () => {
    window.open("https://github.com/sgenini", "_blank");
  }

  redirectLinkedIn = () => {
    window.open("https://www.linkedin.com/in/stephanegenini/", "_blank");
  }

  redirectTwitter = () => {
    window.open("https://twitter.com/stephanegenini", "_blank");
  }

  redirectMailTo = () => {
    window.open("mailto:contact@stephanegenini.com");
  }

  scrollToHome = () => {
    document.getElementById("home").scrollIntoView({ behavior: "smooth" });
    this.setState({ isOpen: false });
  }

  scrollToAbout = () => {
    document.getElementById("about").scrollIntoView({ behavior: "smooth" });
    this.setState({ isOpen: false });
  }

  scrollToIncentives = () => {
    document.getElementById("incentives").scrollIntoView({ behavior: "smooth" });
    this.setState({ isOpen: false });
  }

  scrollToConventions = () => {
    document.getElementById("conventions").scrollIntoView({ behavior: "smooth" });
    this.setState({ isOpen: false });
  }

  scrollToTour = () => {
    document.getElementById("tour").scrollIntoView({ behavior: "smooth" });
    this.setState({ isOpen: false });
  }

  scrollToFIT = () => {
    document.getElementById("FIT").scrollIntoView({ behavior: "smooth" });
    this.setState({ isOpen: false });
  }

  scrollToContact = () => {
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
    this.setState({ isOpen: false });
  }

  render() {
    return (
      <MDBNavbar className="shadow-box-example border-bottom border-light animated fadeIn" expand="xl" light style={{backgroundColor: "rgba(255,255,255,.75)"}} scrolling fixed="top">
        <MDBNavbarBrand>
          <strong className="font-nunito text-uppercase">
              <img src={logo} alt="logo" height="40" /> A La Carte Tours</strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav left>
            <MDBNavItem>
              <MDBNavLink className="font-nunito text-uppercase rounded" to="/#home" onClick={this.scrollToHome}>Home</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink className="font-nunito text-uppercase rounded" to="/#about" onClick={this.scrollToAbout}>About</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink className="font-nunito text-uppercase rounded" to="/#incentives" onClick={this.scrollToIncentives}>Incentives</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink className="font-nunito text-uppercase rounded" to="/#conventions" onClick={this.scrollToConventions}>Conventions</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem> 
              <MDBNavLink className="font-nunito text-uppercase rounded" to="/#tour" onClick={this.scrollToTour}>Tour & Travel</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem> 
              <MDBNavLink className="font-nunito text-uppercase rounded" to="/#FIT" onClick={this.scrollToFIT}>FIT</MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
          <MDBNavbarNav right>
            <MDBNavItem>
              <MDBNavLink className="font-nunito text-uppercase rounded" to="/#contact" onClick={this.scrollToContact}><MDBIcon far icon="comment" className="pr-2" />Contact</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink className="waves-effect waves-light font-nunito text-uppercase rounded" to="/fr" onClick={this.scrollToHome}><MDBIcon icon="globe-europe" className="pr-2" />Fr</MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    );
  }
}

export default Navbar;