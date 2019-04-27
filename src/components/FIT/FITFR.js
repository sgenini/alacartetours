import React, { Component } from "react";
import { MDBRow, MDBCol, MDBCard, MDBIcon, MDBContainer, MDBView, MDBMask, MDBBtn } from "mdbreact";

import nyc from "../../assets/images/backgrounds/nyc.jpg";

class FITFR extends Component {
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
                        <h5 className="mx-auto"><strong>Notre département FIT (voyage pour individuels) sera heureux de répondre à toute demande de prestations pour vos voyages sur l'ensemble du territoire américain.</strong></h5>
                      </MDBRow>
                    </MDBCol>
                  </MDBRow> 
                  <MDBRow className="text-left mt-2">
                    <MDBCol xl="3" className="mx-auto px-4">
                      <h5 className="ml-5 mb-2">Nous gérons pour nos clients les services suivants :</h5>
                      <ul className="text-left mx-3">
                        <li className="mb-0">Hébergement</li>
                        <li className="mb-0">Accueil à l'aéroport et transfert à l'hôtel</li>
                        <li className="mb-0">Location de véhicule</li>
                        <li className="mb-0">Transport aérien</li>
                        <li className="mb-0">Réservation de spectacles et d'excursions</li>
                      </ul>
                    </MDBCol>
                    <MDBCol xl="9" className="mx-auto px-4">
                      <h5 className="text-left">Lors de vos demandes, merci de nous communiquer les détails suivants :</h5>
                      <MDBRow>
                        <MDBCol xl="6" className="mb-1">
                          <p><strong><MDBIcon icon="hotel" /> Hébergement:</strong></p>
                            <ul className="text-left mx-3">
                              <li className="mb-0">Dates exactes du voyage</li>
                              <li className="mb-0">Port d'entrée et de sortie (Aéroports)</li>
                              <li className="mb-0">Destination ou thèmes désirés (Parcs Nationaux, Parcs d'Attractions)</li>
                              <li className="mb-0">Un nom et un prénom au moins par chambre et le nombre de lits désirés</li>
                              <li className="mb-0">Répartition par chambre avec l'âge des enfants partageant la chambre des parents</li>
                            </ul>
                        </MDBCol>
                        <MDBCol xl="6">
                          <MDBRow className="mb-0">
                            <p><strong><MDBIcon icon="car" /> Location de véhicule:</strong></p>
                              <ul className="text-left mx-3">
                                <li className="mb-0">Type de voiture souhaité (ou capacité du véhicule, nombre de passagers)</li>
                                <li className="mb-0">Date, lieu et heure de la prise de possession (préciser centre ville ou aéroport)</li>
                                <li className="mb-0">Date, lieu et heure de retour (préciser centre ville ou aéroport)</li>
                              </ul>
                          </MDBRow>
                          <MDBRow className="mt-0">
                            <p><strong><MDBIcon icon="plane" /> Transport aérien:</strong></p>
                              <ul className="text-left mx-3">
                                <li className="mb-0">Dates exactes et destinations</li>
                                <li className="mb-0">Nombre de billets demandés (adulte, enfant, date de naissance)</li>
                              </ul>
                          </MDBRow>
                        </MDBCol>
                        <MDBCol xl="4">
                        </MDBCol>
                      </MDBRow>
                    </MDBCol>
                  </MDBRow>
                  <MDBRow className="mb-0 mt-0 mx-4" >
                    <p className="mx-3 mb-2">Merci de noter également que nous pouvons proposer toutes sortes de prestations annexes telles que : survols en hélicoptère, visite des parcs nationaux et métropoles, excursions diverses comprenant Jeep, montgolfière, hydravion, bateau, bayous, croisières, rafting, randonnées équestres, spectacles, musées, etc...</p>
                    <MDBBtn href="/FITFR-request" outline size="md" color="blue" target="_blank" className="mx-auto mt-0">Questionnez Nous</MDBBtn>
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

export default FITFR;