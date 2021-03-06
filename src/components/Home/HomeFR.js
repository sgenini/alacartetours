import React, { Component } from "react";
import { MDBIcon, MDBView, MDBMask } from "mdbreact";

import transparent from "../../assets/images/backgrounds/transparent.png";
import "./home.css";

import BackgroundSlideshow from 'react-background-slideshow';
 
import goldengate from '../../assets/images/backgrounds/goldengate.jpg';
import lasvegas from '../../assets/images/backgrounds/lasvegas.jpg';
import nyc from '../../assets/images/backgrounds/nyc2.jpg';
import deathvalley from '../../assets/images/backgrounds/deathvalley.jpg';
import sanfrancisco from '../../assets/images/backgrounds/sanfrancisco.jpg';

class HomeFR extends Component {
  scrollToAbout = () => {
    document.getElementById("about").scrollIntoView({ behavior: "smooth" });
    this.setState({ isOpen: false });
  }
  
  render() {
    return (
      <section id="home" className="home-page animated fadeIn" style={{opacity: "1", borderBottom: "3px solid white"}}>
        <header>
          <MDBView src={transparent}>
            <MDBMask overlay="white-light" className="flex-center flex-column text-white text-center">
              <div className="animated fadeIn">
                <BackgroundSlideshow images={[ goldengate, nyc, deathvalley, sanfrancisco, lasvegas ]} animationDelay={7000} startAt={0} style={{ zIndex: "-99", position: "relative" }} />
              </div>
              <div className="mt-5" style={{ zIndex: "2", position:"relative" }}>
                <h1 className="animated fadeIn mx-3 main-heading">Vos partenaires aux États-Unis</h1>
                <hr className="animated fadeIn" style={{ backgroundColor: "white", width: "70%", height: "2px", opacity: ".9", boxShadow: ".3vh .3vh 25px #000000" }}/>
                <h1 className="animated fadeIn" style={{ opacity: .9, textShadow: ".3vh .3vh 25px #000000" }}><MDBIcon icon="angle-down" onClick={this.scrollToAbout} /></h1>
              </div>
            </MDBMask>
          </MDBView>
        </header>
      </section>
    );
  }
}

export default HomeFR;