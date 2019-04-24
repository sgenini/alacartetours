import React, { Component } from "react";
import { MDBRow, MDBCol, MDBCard, MDBIcon, MDBContainer, MDBView, MDBMask, MDBBtn } from "mdbreact";

import grandcanyon from "../../assets/images/grandcanyon.jpg";

class Incentives extends Component {
  scrollToConventions = () => {
    document.getElementById("conventions").scrollIntoView({ behavior: "smooth" });
    this.setState({ isOpen: false });
  }

  render() {
    return (
      <section id="incentives" className="about-page animated fadeIn" style={{opacity: "1", borderBottom: "3px solid white"}}>
        <header>
          <MDBView src={grandcanyon}>
            <MDBMask overlay="black-slight" className="flex-center flex-column text-center">
              <MDBContainer className="mt-5" style={{width:"100%", minHeight: "75vh", overflow: "auto"}}>
                <h1 className="main-heading" style={{ textShadow: ".3vh .3vh 25px #00000088", marginTop: "45px" }}>Incentives</h1>
                <MDBCard className="shadow-box-example hoverable mt-4 mb-4 py-2" style={{ opacity: .95 }}>
                  <MDBRow className="mx-auto">
                    <MDBCol lg="12" className="mx-auto">
                      <MDBRow className="mt-3 mb-2 mx-4" >
                        <h5 className="mx-auto mb-3">Our Incentive department takes special pride in designing unique incentive group itineraries.</h5>
                        <h5 className="mx-auto mb-3">We are 100% committed to working closely with you to create remarkable and unforgettable trips that will ensure your client’s satisfaction and contribute to your company’s lasting success.</h5>
                      </MDBRow>
                    </MDBCol>
                  </MDBRow> 
                  <MDBRow className="text-left">
                    <MDBCol lg="8" className="mx-auto">
                      <h5 className="mx-5 mb-2">We will:</h5>
                    </MDBCol>
                  </MDBRow>
                  <MDBRow>
                    <MDBCol lg="7" className="mx-auto">
                      <ul className="text-left mx-3">
                        <li className="mb-0">Design custom incentive programs</li>
                        <li className="mb-0">Suggest unique hotels & venues</li>
                        <li className="mb-0">Arrange transportation</li>
                        <li className="mb-0">Plan delicious meals</li>
                        <li>Organize unforgettable and unique American experiences: helicopter flight, jeep excursion, river rafting, horseback riding, classic car rally, hot air balloon ride, sailing trip, motorcycle tours and much more!</li>
                      </ul>
                    </MDBCol>
                  </MDBRow>
                  <MDBRow className="mx-auto">
                    <MDBCol lg="12" className="mx-auto">
                      <MDBRow className="mt-3 mb-3 mx-4" >
                        <h5 className="mx-3 mb-3">To show you a little about how we work, we’ve included an excerpt from an actual incentive proposal. This product is unique and crafted in close collaboration with our clients:</h5>
                        <MDBBtn outline color="mdb-color" className="mx-auto" href="/miami" target="_blank"><strong>Incentive in Miami</strong></MDBBtn>
                      </MDBRow>
                    </MDBCol>
                  </MDBRow> 
                  <MDBRow className="mx-auto"><h1 className="animated fadeIn" style={{ opacity: .9, color: "#757575" }}><MDBIcon icon="angle-down" onClick={this.scrollToConventions} /></h1></MDBRow>
                </MDBCard>
              </MDBContainer>
            </MDBMask>
          </MDBView>
        </header>
      </section>
    )
  }
}

export default Incentives;