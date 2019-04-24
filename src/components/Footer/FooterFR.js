import React from "react";
import { MDBContainer, MDBFooter, MDBIcon } from "mdbreact";

const FooterFR = () => {
  return (
    <MDBFooter color="black" className="font-small border-top border-light sticky" style={{opacity: ".9"}}>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
        <p className="text-uppercase mb-0"><strong>&copy; {new Date().getFullYear()} A La Carte Tours</strong></p>
        <a href="/contact">Contactez-Nous</a><br />
        <div style={{ fontSize: "25px" }}>
          <a className="mr-3" href="https://www.youtube.com/channel/UCy3uQ5RfYfnNJ1Yah23jPpw" target="_blank" rel="noopener noreferrer"><MDBIcon fab icon="youtube" /></a>
          <a className="mr-3" href="https://www.facebook.com/A-La-Carte-Tours-275819459700668" target="_blank" rel="noopener noreferrer"><MDBIcon fab icon="facebook" /></a>
          <a href="https://www.instagram.com/alacartetours/" target="_blank" rel="noopener noreferrer"><MDBIcon fab icon="instagram" /></a>
        </div>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterFR;