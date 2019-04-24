import React, { Component } from "react";
import { MDBContainer, MDBView, MDBMask, MDBBtn } from "mdbreact";

import construction from "../../assets/images/construction.jpg";

class NotFound extends Component {
  render() {
    return (
      <section id="incentives" className="about-page animated fadeIn" style={{opacity: "1"}}>
        <header>
          <MDBView src={construction}>
            <MDBMask overlay="black-slight" className="flex-center flex-column text-center">
              <MDBContainer className="mt-0 rounded" style={{width:"100%", minHeight: "75vh", overflow: "auto"}}>
                <div className="py-5 rounded hoverable" style={{ backgroundColor: "rgba(0,0,0,0.5)", marginTop: "35px" }}>
                  <h1 className="main-heading" style={{ textShadow: ".3vh .3vh 25px #00000088", textTransform: "none" }}>Uh, oh!</h1>
                  <h2 className="text-white mt-3 mx-3"><strong>This page doesn't exist, or is currently under construction.</strong></h2>
                  <h2 className="text-white mx-3">Please try again later.</h2>
                  <MDBBtn className="mb-3"outline size="md" color="white" href="/">Return Home</MDBBtn>
                  <hr className="animated fadeIn my-4" style={{ backgroundColor: "white", width: "40%", height: "2px", opacity: ".6", boxShadow: ".3vh .3vh 25px #000000" }}/>
                  <h2 className="text-white mx-3"><strong>Cette page n'exist pas, ou n'est actuellement en construction.</strong></h2>
                  <h2 className="text-white mx-3">Veuillez réessayer plus tard.</h2>
                  <MDBBtn outline size="md" color="white" href="/fr">Page d'Accueil</MDBBtn>
                </div>
              </MDBContainer>
            </MDBMask>
          </MDBView>
        </header>
      </section>
    )
  }
}

export default NotFound;