import React, { Component } from "react";
import { MDBRow, MDBCol, MDBCard, MDBIcon, MDBContainer, MDBView, MDBMask } from "mdbreact";

import TourPhotos from "./TourPhotos";

import hawaii from "../../assets/images/backgrounds/hawaii.jpg";

class Tour extends Component {
  scrollToFIT = () => {
    document.getElementById("FIT").scrollIntoView({ behavior: "smooth" });
    this.setState({ isOpen: false });
  }

  render() {
    return (
      <section id="tour" className="tour-page animated fadeIn" style={{opacity: "1", borderBottom: "3px solid white"}}>
        <header>
          <MDBView src={hawaii}>
            <MDBMask overlay="black-slight" className="flex-center flex-column text-center">
              <MDBContainer className="mt-5" style={{width:"100%", minHeight: "75vh", overflow: "auto"}}>
                <h1 className="main-heading" style={{ textShadow: ".3vh .3vh 25px #00000088", marginTop: "45px" }}>Tour & Travel</h1>
                <hr className="animated fadeIn" style={{ backgroundColor: "white", width: "25%", height: "2px", opacity: ".9", boxShadow: ".3vh .3vh 25px #000000", marginTop: "-5px" }}/>
                <MDBCard className="shadow-box-example hoverable mt-4 mb-4 py-2" style={{ opacity: .95 }}>
                  <MDBRow className="mx-auto">
                    <MDBCol lg="12" className="mx-auto">
                      <MDBRow className="mt-3 mb-2 mx-4" >
                        <h5 className="mx-auto mb-3"><strong>A La Carte Tours offers a variety of tour and travel programs in the US’ most popular destinations:</strong></h5>
                        <h5 className="mx-auto mb-3">The Far West, San Francisco, Los Angeles, Hawaii, New York, Las Vegas, Miami, etc.</h5>
                      </MDBRow>
                    </MDBCol>
                  </MDBRow> 
                  <MDBRow className="text-left">
                    <MDBCol xl="6" className="mx-auto pt-2 px-5">
                      <TourPhotos />
                    </MDBCol>
                    <MDBCol xl="5" className="mx-auto pr-5 mt-3">
                      <h5 className="mx-5 mb-2">We will assist you with:</h5>
                      <ul className="text-left mx-3">
                        <li className="mb-0">Trip itinerary design</li>
                        <li className="mb-0">Hotel recommendation and booking</li>
                        <li className="mb-0">Restaurant & activities suggestions</li>
                        <li className="mb-0">Airport transfers</li>
                        <li>Talented multilingual tour directors</li>
                      </ul>
                    </MDBCol>
                  </MDBRow>
                  <MDBRow className="mx-auto mt-4"><h1 className="animated fadeIn" style={{ opacity: .9, color: "#757575" }}><MDBIcon icon="angle-down" onClick={this.scrollToFIT} /></h1></MDBRow>
                </MDBCard>
              </MDBContainer>
            </MDBMask>
          </MDBView>
        </header>
      </section>
    )
  }
}

export default Tour;