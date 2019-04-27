import React, { Component } from "react";
import { MDBRow, MDBCol, MDBCard, MDBIcon, MDBContainer, MDBView, MDBMask, MDBBtn } from "mdbreact";

import nyc from "../../assets/images/backgrounds/nyc.jpg";

class FIT extends Component {
  scrollToContact = () => {
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
    this.setState({ isOpen: false });
  }

  render() {
    return (
      <section id="FIT" className="FIT-page animated fadeIn" style={{opacity: "1", borderBottom: "3px solid white"}}>
        <header>
          <MDBView src={nyc}>
            <MDBMask overlay="black-slight" className="flex-center flex-column text-center">
              <MDBContainer className="mt-5" style={{width:"100%", minHeight: "75vh", overflow: "auto"}}>
                <h1 className="main-heading" style={{ textShadow: ".3vh .3vh 25px #00000088", marginTop: "45px" }}>FIT</h1>
                <hr className="animated fadeIn" style={{ backgroundColor: "white", width: "25%", height: "2px", opacity: ".9", boxShadow: ".3vh .3vh 25px #000000", marginTop: "-5px" }}/>
                <MDBCard className="shadow-box-example hoverable mt-4 mb-4 py-2" style={{ opacity: .95 }}>
                  <MDBRow className="mx-auto">
                    <MDBCol lg="12" className="mx-auto">
                      <MDBRow className="mt-3 mx-4" >
                        <h5 className="mx-auto"><strong>Our FIT (Frequent Individual Traveler) department will be happy to respond to all requests to provide services for your clients anywhere in the United States.</strong></h5>
                      </MDBRow>
                    </MDBCol>
                  </MDBRow> 
                  <MDBRow className="text-left mt-2">
                    <MDBCol xl="3" className="mx-auto px-4">
                      <h5 className="mx-5 mb-2">We will arrange:</h5>
                      <ul className="text-left mx-3">
                        <li className="mb-0">Lodging</li>
                        <li className="mb-0">Meet and greet and transfer to hotel</li>
                        <li className="mb-0">Vehicle rental</li>
                        <li className="mb-0">Domestic flight reservations</li>
                        <li className="mb-0">Reservation of shows and excursions</li>
                      </ul>
                    </MDBCol>
                    <MDBCol xl="9" className="mx-auto px-5">
                      <h5 className="text-left">When making your FIT requests, please provide the following information:</h5>
                      <MDBRow>
                        <MDBCol xl="4" className="mb-1">
                          <p><strong><MDBIcon icon="hotel" /> Lodging:</strong></p>
                            <ul className="text-left mx-3">
                              <li className="mb-0">Exact travel dates</li>
                              <li className="mb-0">Port of entry and exit (airports)</li>
                              <li className="mb-0">Destination highlights (national parks, theme parks...)</li>
                              <li className="mb-0">Number of rooms, beds, names of guests</li>
                              <li className="mb-0">Ages of children</li>
                            </ul>
                        </MDBCol>
                        <MDBCol xl="4">
                          <p><strong><MDBIcon icon="car" /> Vehicle Rental:</strong></p>
                            <ul className="text-left mx-3">
                              <li className="mb-0">Car type</li>
                              <li className="mb-0">Date, place, and time of pick-up (please indicate downtown or airport)</li>
                              <li className="mb-0">Date, place, and time of return (please indicate downtown or airport)</li>
                            </ul>
                        </MDBCol>
                        <MDBCol xl="4">
                          <p><strong><MDBIcon icon="plane" /> Air Transportation:</strong></p>
                            <ul className="text-left mx-3">
                              <li className="mb-0">Exact dates and destinations (with suggested departure or arrival times)</li>
                              <li className="mb-0">Passenger names</li>
                              <li className="mb-0">Date of birth of passengers</li>
                            </ul>
                        </MDBCol>
                      </MDBRow>
                    </MDBCol>
                  </MDBRow>
                  <MDBRow className="mb-3 mx-4" >
                    <p className="mx-3 mb-2">Please note: we can offer a variety of additional services, such as: helicopter tours (national parks and cities), Jeep tours, hot-air balloon flight, hydroplane, boat cruises, bayou excursions, cruises, rafting, horseback riding, shows, museums, etc...</p>
                    <MDBBtn href="/FIT-request" outline size="md" color="blue" target="_blank" className="mx-auto">Request a Quote</MDBBtn>
                  </MDBRow>
                  <MDBRow className="mx-auto"><h1 className="animated fadeIn" style={{ opacity: .9, color: "#757575" }}><MDBIcon icon="angle-down" onClick={this.scrollToContact} /></h1></MDBRow>
                </MDBCard>
              </MDBContainer>
            </MDBMask>
          </MDBView>
        </header>
      </section>
    )
  }
}

export default FIT;