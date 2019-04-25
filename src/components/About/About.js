import React, { Component } from "react";
import { MDBRow, MDBCol, MDBCard, MDBIcon, MDBContainer, MDBView, MDBMask } from "mdbreact";

import transparent from "../../assets/images/backgrounds/transparent.png";
import logo from "../../assets/images/logo/logo2.png";

class About extends Component {
  scrollToIncentives = () => {
    document.getElementById("incentives").scrollIntoView({ behavior: "smooth" });
    this.setState({ isOpen: false });
  }

  render() {
    return (
      <section id="about" className="about-page animated fadeIn" style={{opacity: "1", borderBottom: "3px solid white"}}>
        <header>
          <MDBView src={transparent}>
            <MDBMask overlay="black-slight" className="flex-center flex-column text-center">
              <MDBContainer className="mt-5" style={{width:"100%", minHeight: "75vh", overflow: "auto"}}>
                <MDBCard className="shadow-box-example hoverable mt-4 mb-4 py-2" style={{ opacity: .95 }}>
                  <MDBRow className="mx-auto">
                    <MDBCol lg="12" className="mx-auto">
                      <img src={logo} alt="A La Carte Tours Logo"/>
                    </MDBCol>
                  </MDBRow> 
                  <MDBRow>
                    <MDBCol lg="4" className="mx-auto">
                      <h1 className="mt-0 mb-0 mr-auto" color="#FFFFFF"><strong><strong style={{fontFamily: "'Crimson Text', serif"}}>Welcome!</strong></strong></h1>
                    </MDBCol>
                  </MDBRow> 
                  <MDBRow className="mx-auto mt-0">
                    <MDBCol lg="12" className="mx-auto">
                      <MDBRow className="mb-2 mt-0 mx-4" >
                        <h5 className="mx-auto">A La Carte Tours, based in California since 1987, provides quality receptive services for all U.S. destinations.</h5>
                      </MDBRow>
                      <MDBRow className="mx-auto">
                        <MDBCol lg="6" className="text-center mx-auto">
                          <MDBRow>
                            <MDBCol lg="11" className="mx-auto mb-3">
                              <MDBIcon icon="globe-americas" className="mb-2" style={{ fontSize: "30px", color: "#757575" }}/>
                              <p>A La Carte Tours is located in the San Francisco Bay Area, the tourism capital of the American West. We are proud to have been in operation providing receptive services for more than 31 years. Without a doubt, our professional multilingual staff and our loyal clientele have contributed to our growing success.</p>
                            </MDBCol>
                          </MDBRow>
                          <MDBRow>
                            <MDBCol lg="11" className="mx-auto mb-3">
                              <MDBIcon icon="calendar-alt" className="mb-2" style={{ fontSize: "30px", color: "#757575" }}/>
                              <p>Specializing in tailor-made "group" services, we also have a very busy "individual reservations" department. Our line of services ranges from local day trips to multi-week itineraries across North America.</p>
                            </MDBCol>
                          </MDBRow>
                          <MDBRow>
                            <MDBCol lg="11" className="mx-auto mb-3">
                              <MDBIcon icon="concierge-bell" className="mb-2" style={{ fontSize: "30px", color: "#757575" }}/>
                              <p>The name of our company is indeed our mission statement, emphasizing a flexibility at every step of the way. Let our multilingual team handle all aspects of your clients’ trip from itinerary conception to the reservation of all services.</p>
                            </MDBCol>
                          </MDBRow>
                        </MDBCol>
                        <MDBCol lg="6" className="text-center mx-auto">
                          <MDBRow>
                            <MDBCol lg="11" className="mx-auto mb-3">
                              <MDBIcon icon="map-marked-alt" className="mb-2" style={{ fontSize: "30px", color: "#757575" }}/>
                              <p>Over the last few years, our Conventions department has grown considerably, and we are able to offer our services for major conventions held throughout the U.S.</p>
                            </MDBCol>
                          </MDBRow>
                          <MDBRow>
                            <MDBCol lg="11" className="mx-auto mb-3">
                              <MDBIcon icon="file-invoice-dollar" className="mb-2" style={{ fontSize: "30px", color: "#757575" }}/>
                              <p>With our privileged business relationships and negotiated rates with our suppliers, you are assured to receive the most competitive rates in the industry. Thanks to our experience and expertise in the U.S. tourism market you will receive programs with the most current hotels, restaurants and excursions at each destination. We will respond promptly to your request with a precise and competitive estimate.</p>
                            </MDBCol>
                          </MDBRow>
                          <MDBRow>
                            <MDBCol lg="11" className="mx-auto mb-3">
                              <MDBIcon icon="users" className="mb-2" style={{ fontSize: "30px", color: "#757575" }}/>
                              <p>The entire team at A La Carte Tours is ready to assist you in the planning and implementation of all your American projects. We look forward to hearing from you soon!</p>
                            </MDBCol>
                          </MDBRow>
                        </MDBCol>
                      </MDBRow>
                    </MDBCol>
                  </MDBRow> 
                  <MDBRow className="mx-auto"><h1 className="animated fadeIn" style={{ opacity: .9, color: "#757575" }}><MDBIcon icon="angle-down" onClick={this.scrollToIncentives} /></h1></MDBRow>
                </MDBCard>
              </MDBContainer>
            </MDBMask>
          </MDBView>
        </header>
      </section>
    )
  }
}

export default About;