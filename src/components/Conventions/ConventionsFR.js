import React, { Component } from "react";
import { MDBRow, MDBCol, MDBCard, MDBIcon, MDBContainer, MDBView, MDBMask, MDBBtn } from "mdbreact";

import interior from "../../assets/images/backgrounds/interior.jpg";

class ConventionsFR extends Component {
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
                        <h5 className="mx-auto mb-3"><strong>A La Carte Tours travaille chaque année sur de nombreux congrès internationaux se déroulant aux États-Unis.</strong></h5>
                      </MDBRow>
                    </MDBCol>
                  </MDBRow> 
                  <MDBRow className="text-left">
                    <MDBCol lg="5" className="mx-auto px-4">
                      <h5 className="mx-4 mb-2 text-center">Lors de conventions aux États-Unis nous gérons les prestations suivantes :</h5>
                      <ul className="text-left mx-3">
                        <li className="mb-0">Hébergement et restauration</li>
                        <li className="mb-0">Inscription au séminaire et au congrès</li>
                        <li className="mb-0">Services de traduction et d'interprétation</li>
                        <li className="mb-0">Enregistrement vidéo et téléconférence</li>
                        <li className="mb-0">Organisation de dîner de gala</li>
                        <li className="mb-0">Transport privé (berlines, limousines, vans, autocars, etc.)</li>
                        <li>Programmes de divertissement pour époux/se (visites des principales attractions, services spa, sorties shopping, etc.)</li>
                      </ul>
                    </MDBCol>
                    <MDBCol lg="7" className="mx-auto px-5">
                      <h5 className="text-left">Voici une liste non-exhaustive de conventions internationales sur lesquelles A La Carte Tours a travaillé :</h5>
                      <MDBRow>
                        <MDBCol lg="7" className="mb-3">
                          <p><strong>Secteur médical :</strong></p>
                          <p>AAN (Neurologie), AAO. (Ophtalmologie), AASLD (Liver disease), ACC (Cardiology), ACR (College of Radiology), AES (Epilepsie), ADA (Diabetes), AGA (Gastroentérologie), AHA (American Heart Association), APA (Psychiatrie), ASCO (Clinical Oncology), ASDA (Sleep disorder), ASH (Hématologie), ASHY (Hypertension), ASTP (Transplant physicians), ASTRO (Radiologie thérapeutique et oncologie), ATA (Thyroïde), ATS (Thoracic), AUA (Urology), AVS (Vascular society), ICAAC (Antimicrobial agents and chemotherapy), NAMS (Menopause society), RSNA (Radiological Society of North America)...</p>
                        </MDBCol>
                        <MDBCol lg="5">
                          <p><strong>Autres secteurs :</strong></p>
                          <p>Air Conditioning & Refrigeration Show, Comdex Las Vegas, Consumer Electronic Show, Home Garden Show, INFOCOM, International Bakers Association, International Wine Council, Kitchen & Bath Show, NAAB (Broadcasters), National Restaurant Association, Rodeo Finals Championship, Rotary Club International, CES (Consumer Technology Association) ... </p>
                        </MDBCol>
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

export default ConventionsFR;