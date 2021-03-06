import React, { Component } from "react";
import { MDBRow, MDBCol, MDBCard, MDBIcon, MDBContainer, MDBView, MDBMask } from "mdbreact";

import interior from "../../assets/images/backgrounds/interior.jpg";

class Conventions extends Component {
  scrollToTour = () => {
    document.getElementById("tour").scrollIntoView({ behavior: "smooth" });
    this.setState({ isOpen: false });
  }

  render() {
    return (
      <section id="conventions" className="conventions-page animated fadeIn" style={{opacity: "1", borderBottom: "3px solid white"}}>
        <header>
          <MDBView src={interior}>
            <MDBMask overlay="black-slight" className="flex-center flex-column text-center">
              <MDBContainer className="mt-5" style={{width:"100%", minHeight: "75vh", overflow: "auto"}}>
                <h1 className="main-heading" style={{ textShadow: ".3vh .3vh 25px #00000088", marginTop: "45px" }}>Conventions</h1>
                <hr className="animated fadeIn" style={{ backgroundColor: "white", width: "25%", height: "2px", opacity: ".9", boxShadow: ".3vh .3vh 25px #000000", marginTop: "-5px" }}/>
                <MDBCard className="shadow-box-example hoverable mt-4 mb-4 py-2" style={{ opacity: .95 }}>
                  <MDBRow className="mx-auto">
                    <MDBCol lg="12" className="mx-auto">
                      <MDBRow className="mt-3 mb-2 mx-4" >
                        <h5 className="mx-auto mb-3"><strong>Each year A La Carte Tours works on international conventions and seminars taking place in the United States.</strong></h5>
                      </MDBRow>
                    </MDBCol>
                  </MDBRow> 
                  <MDBRow className="text-left">
                    <MDBCol xl="4" className="mx-auto px-4">
                      <h5 className="mx-5 mb-2">We provide services for:</h5>
                      <ul className="text-left mx-3">
                        <li className="mb-0">Lodging and restaurant reservations</li>
                        <li className="mb-0">Seminar and convention registration</li>
                        <li className="mb-0">Translation and interpretation services</li>
                        <li className="mb-0">Video recording & teleconferencing</li>
                        <li className="mb-0">Gala dinner organization</li>
                        <li className="mb-0">Private transportation (sedans, limousines, vans, motor-coaches, etc.)</li>
                        <li>Spousal programs (visits of major attractions, spa services, shopping trips, etc.)</li>
                      </ul>
                    </MDBCol>
                    <MDBCol xl="8" className="mx-auto px-5">
                      <h5 className="text-left">Some of the international conventions we have worked on:</h5>
                      <MDBRow>
                        <MDBCol xl="7" className="mb-3">
                          <p><strong>Medical Sector:</strong></p>
                          <p>AAN (Neurological), AAO (Ophthalmology), AASLD (Liver disease), ACC (Cardiology), ACR (College of Radiology), AES (Epilepsy), ADA (Diabetes), AGA (Gastroenterology), AHA (American Heart Association), APA (Psychiatric), ASCO (Clinical Oncology), ASDA (Sleep disorder), ASH (Hematology), ASH (Hypertension), ASTP (Transplant physicians), ASTRO (Therapeutic radiology and oncology), ATA (Thyroid), ATS (Thoracic), AUA (Urology), AVS (Vascular society), ICAAC (Antimicrobial agents and chemotherapy), NAMS (Menopause society), RSNA (Rheumatology), ASN (American Society of Nephrology) ... </p>
                        </MDBCol>
                        <MDBCol xl="5">
                          <p><strong>Other sectors:</strong></p>
                          <p>Air Conditioning & Refrigeration Show, Consumer Electronic Show in Las Vegas, Conexpo, Home Garden Show, INFOCOM, International Bakers Association, International Wine Council, Kitchen & Bath Show, N.A.A.B. (Broadcasters), National Restaurant Association, Rodeo Finals Championship, Rotary Club International, CES (Consumer Technology Association) ... </p>
                        </MDBCol>
                      </MDBRow>
                    </MDBCol>
                  </MDBRow>
                  <MDBRow className="mx-auto"><h1 className="animated fadeIn" style={{ opacity: .9, color: "#757575" }}><MDBIcon icon="angle-down" onClick={this.scrollToTour} /></h1></MDBRow>
                </MDBCard>
              </MDBContainer>
            </MDBMask>
          </MDBView>
        </header>
      </section>
    )
  }
}

export default Conventions;