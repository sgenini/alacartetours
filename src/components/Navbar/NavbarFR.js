import React, { Component } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBIcon } from "mdbreact";

import "./navbar.css";
import logo from "../../assets/images/logo2.png";

class NavbarFR extends Component {
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

  scrollToTech = () => {
    document.getElementById("tech").scrollIntoView({ behavior: "smooth" });
    this.setState({ isOpen: false });
  }

  scrollToResume = () => {
    document.getElementById("resume").scrollIntoView({ behavior: "smooth" });
    this.setState({ isOpen: false });
  }

  scrollToProjects = () => {
    document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
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
              <MDBNavLink className="font-nunito text-uppercase rounded" to="/fr/#home" onClick={this.scrollToHome}>Accueil</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink className="font-nunito text-uppercase rounded" to="/fr/#about" onClick={this.scrollToAbout}>Qui Sommes-Nous?</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink className="font-nunito text-uppercase rounded" to="/fr/#incentives" onClick={this.scrollToIncentives}>Incentives</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink className="font-nunito text-uppercase rounded" to="/fr/#conventions" onClick={this.scrollToConventions}>Conventions</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem> 
              <MDBNavLink className="font-nunito text-uppercase rounded" to="/fr/#tour" onClick={this.scrollToTour}>Tour & Travel</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem> 
              <MDBNavLink className="font-nunito text-uppercase rounded" to="/fr/#FIT" onClick={this.scrollToFIT}>FIT</MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
          <MDBNavbarNav right>
            <MDBNavItem>
              <MDBNavLink className="font-nunito text-uppercase rounded" to="/fr/#contact" onClick={this.scrollToContact}><MDBIcon far icon="comment" className="pr-2" />Contact</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink className="waves-effect waves-light font-nunito text-uppercase rounded" to="/" onClick={this.scrollToHome}><MDBIcon icon="globe-americas" className="pr-2" />EN</MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    );
  }
}

export default NavbarFR;