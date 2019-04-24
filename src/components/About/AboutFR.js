import React, { Component } from "react";
import { MDBRow, MDBCol, MDBCard, MDBIcon, MDBContainer, MDBView, MDBMask } from "mdbreact";

import transparent from "../../assets/images/transparent.png";
import logo from "../../assets/images/logo2.png";

class AboutFR extends Component {
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
                      <h1 className="mt-0 mb-0 mr-auto" color="#FFFFFF"><strong><strong style={{fontFamily: "'Crimson Text', serif"}}>Bienvenue!</strong></strong></h1>
                    </MDBCol>
                  </MDBRow> 
                  <MDBRow className="mx-auto">
                    <MDBCol lg="12" className="mx-auto">
                      <MDBRow className="mb-0 mx-5" >
                        <h5 className="mx-auto">A La Carte Tours, entreprise basée en Californie depuis avril 1987, offre ses services réceptifs de qualité sur l’ensemble des États-Unis.</h5>
                      </MDBRow>
                      <MDBRow className="mx-auto">
                        <MDBCol lg="6" className="text-center mx-auto">
                          <MDBRow>
                            <MDBCol lg="11" className="mx-auto mb-3">
                              <MDBIcon icon="globe-americas" className="mb-2" style={{ fontSize: "30px", color: "#757575" }}/>
                              <p>Depuis plus de 30 ans, notre personnel multilingue professionnel et notre clientèle fidèle ont sans aucun doute contribué à notre succès.</p>
                            </MDBCol>
                          </MDBRow>
                          <MDBRow>
                            <MDBCol lg="11" className="mx-auto mb-3">
                              <MDBIcon icon="calendar-alt" className="mb-2" style={{ fontSize: "30px", color: "#757575" }}/>
                              <p>Spécialisés dans les services "de groupe" sur mesure, nous disposons également d'un département “FIT” (voyages pour individuels). Notre gamme de services s'étend de la journée d'excursion locale à des circuits de plusieurs semaines traversant tous les États-Unis.</p>
                            </MDBCol>
                          </MDBRow>
                          <MDBRow>
                            <MDBCol lg="11" className="mx-auto mb-3">
                              <MDBIcon icon="concierge-bell" className="mb-2" style={{ fontSize: "30px", color: "#757575" }}/>
                              <p>A La Carte Tours se spécialise tout particulièrement en voyages personnalisés et satisfait toutes les demandes de prestations aussi diverses que variées de notre clientèle. Nous répondrons rapidement à votre demande avec un devis précis, compétitif et en français !</p>
                            </MDBCol>
                          </MDBRow>
                        </MDBCol>
                        <MDBCol lg="6" className="text-center mx-auto">
                          <MDBRow>
                            <MDBCol lg="11" className="mx-auto mb-3">
                              <MDBIcon icon="map-marked-alt" className="mb-2" style={{ fontSize: "30px", color: "#757575" }}/>
                              <p><strong style={{ color: "red" }}>Needs translation check:</strong> Au cours des dernières années, notre département des conventions a considérablement grandi et nous sommes en mesure d’offrir nos services pour les grands congrès organisés aux États-Unis.</p>
                            </MDBCol>
                          </MDBRow>
                          <MDBRow>
                            <MDBCol lg="11" className="mx-auto mb-3">
                              <MDBIcon icon="file-invoice-dollar" className="mb-2" style={{ fontSize: "30px", color: "#757575" }}/>
                              <p>Grâce à nos relations commerciales privilégiées et aux tarifs avantageux négociés avec nos fournisseurs, vous recevrez les tarifs les plus compétitifs du secteur. Notre expérience et notre expertise sur le marché du tourisme américain nous permettent d’élaborer pour vous des programmes avec les hôtels, restaurants et excursions les plus récents et adéquats à chaque destination.</p>
                            </MDBCol>
                          </MDBRow>
                          <MDBRow>
                            <MDBCol lg="11" className="mx-auto mb-3">
                              <MDBIcon icon="users" className="mb-2" style={{ fontSize: "30px", color: "#757575" }}/>
                              <p>Toute l'équipe de A La Carte Tours est prête à vous assister dans l’élaboration et la gestion de tous vos projets américains.</p>
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

export default AboutFR;