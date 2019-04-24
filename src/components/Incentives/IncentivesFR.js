import React, { Component } from "react";
import { MDBRow, MDBCol, MDBCard, MDBIcon, MDBContainer, MDBView, MDBMask, MDBBtn } from "mdbreact";

import grandcanyon from "../../assets/images/grandcanyon.jpg";

class IncentivesFR extends Component {
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
                        <p style={{ fontSize: 15 }} className="mx-auto mb-3">Notre département "Voyages d'Incentive" est de plus en plus sollicité, et nous apportons un soin tout particulier à l'établissement de ces voyages inédits.</p>
                        <p style={{ fontSize: 15 }} className="mx-auto mb-3">Nous nous engageons à concevoir des produits les plus originaux possibles tout en travaillant de concert avec vous afin d'élaborer des produits uniques et extraordinaires qui rentreront dans les budgets alloués et contribueront au succès de votre société.</p>
                      </MDBRow>
                    </MDBCol>
                  </MDBRow> 
                  <MDBRow className="text-left">
                    <MDBCol lg="8" className="mx-auto">
                      <p style={{ fontSize: 15 }} className="mx-5 mb-2">Nous nous engageons à :</p>
                    </MDBCol>
                  </MDBRow>
                  <MDBRow>
                    <MDBCol lg="7" className="mx-auto">
                      <ul className="text-left mx-3">
                        <li style={{ fontSize: 15 }} className="mb-0">Concevoir des programmes d'incentive personnalisés</li>
                        <li style={{ fontSize: 15 }} className="mb-0">Proposer des hôtels et des lieux uniques</li>
                        <li style={{ fontSize: 15 }} className="mb-0">Gérer les transports sur place</li>
                        <li style={{ fontSize: 15 }} className="mb-0">Planifier des repas délicieux</li>
                        <li style={{ fontSize: 15 }}>Organiser des expériences américaines inoubliables et uniques : vol en hélicoptère, excursion en jeep, rafting, équitation, visite en voitures de collection, balade en montgolfière, excursion en bateau, rallye en moto et bien plus encore !</li>
                      </ul>
                    </MDBCol>
                  </MDBRow>
                  <MDBRow className="mx-auto">
                    <MDBCol lg="12" className="mx-auto">
                      <MDBRow className="mt-3 mb-3 mx-4" >
                        <p style={{ fontSize: 15 }} className="mx-3 mb-3">Afin d’illustrer notre façon de travailler, nous avons inclus l'extrait d’une proposition pour un voyage incentive. Ce produit est unique et conçu en étroite collaboration avec nos clients :</p>
                        <MDBBtn outline color="mdb-color" className="mx-auto" href="/fr/miami" target="_blank"><strong>Voyage d'incentive à Miami</strong></MDBBtn>
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

export default IncentivesFR;