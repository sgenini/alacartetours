import React from "react";
import { MDBContainer, MDBFooter } from "mdbreact";

const Footer = () => {
  return (
    <MDBFooter color="black" className="font-small border-top border-light sticky" style={{opacity: ".9"}}>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
        <p className="text-uppercase mb-0"><strong>&copy; {new Date().getFullYear()} A La Carte Tours</strong></p>
        <a href="https://github.com/sgenini" target="_blank" rel="noopener noreferrer"> GitHub</a> | 
        <a href="https://www.linkedin.com/in/stephanegenini/" target="_blank" rel="noopener noreferrer"> LinkedIn</a> | 
        <a href="https://twitter.com/stephanegenini" target="_blank" rel="noopener noreferrer"> Twitter </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default Footer;