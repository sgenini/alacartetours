import React, { Component } from "react";
import { MDBRow, MDBCol, MDBCard, MDBIcon, MDBContainer, MDBView, MDBMask } from "mdbreact";

import sanfrancisco from "../../assets/images/sanfrancisco.jpg";
import myface from "../../assets/images/myface.png";

class About extends Component {
  scrollToTech = () => {
    document.getElementById("tech").scrollIntoView({ behavior: "smooth" });
    this.setState({ isOpen: false });
  }

  render() {
    return (
      <section id="about" className="about-page hoverable" style={{opacity: "1", borderBottom: "3px solid white"}}>
        <header>
          <MDBView src={sanfrancisco}>
            <MDBMask overlay="black-light" className="flex-center flex-column text-center">
              <MDBContainer className="mt-5" style={{width:"100%", minHeight: "75vh", overflow: "auto"}}>
                <MDBCard className="shadow-box-example hoverable mt-4 mb-4" style={{ opacity: .95 }}>
                  <MDBRow>
                    <MDBCol md="4" className="mt-5 mx-5">
                      <img className="img-thumbnail rounded-circle" alt="Stephane" src={myface} />
                    </MDBCol>
                    <MDBCol md="6" className="my-3 mx-4">
                      <MDBRow>
                        <h1 className="mt-5 mb-3 mr-auto" color="#FFFFFF"><strong><strong style={{fontFamily: "'Crimson Text', serif"}}>About Me</strong></strong></h1>
                      </MDBRow>
                      <MDBRow>
                        <h5 className="text-sm-left" color="#FFFFFF" style={{ lineHeight: 1.5 }}>I'm a full-stack web developer from Oakland, CA currently looking for full-time development opportunities. I initially earned my B.S. in Business Administration at the University of Southern California, but my interest in technology and passion for the digital space inspired me to pursue web development as a career. I've since earned a certificate from UC Berkeley Extension after completing their Full Stack Coding Boot Camp, having learned <span style={{ color: "#2668AF" }} onClick={this.scrollToTech}>the MERN stack</span>, and have been thoroughly enjoying the creativity and challenges inherent in the field!</h5>
                      </MDBRow>
                    </MDBCol>
                  </MDBRow> 
                  <MDBRow>
                    <MDBCol lg="8" className="mx-auto">
                      <hr className="my-4" style={{width: 250}} />
                      <h5>Connect with me!</h5> <br />
                      <ul className="list-inline text-center list-unstyled" style={{marginLeft: -5}} >
                        <li className="list-inline-item">
                          <a href="https://github.com/sgenini" target="_blank" rel="noopener noreferrer" className="p-2 fa-lg w-ic hoverable rounded" style={{color: "#212121"}} >
                            <MDBIcon fab icon="github-alt" />
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a href="https://www.linkedin.com/in/stephanegenini/" target="_blank" rel="noopener noreferrer" className="p-2 fa-lg w-ic hoverable rounded" style={{color: "#212121"}} >
                            <MDBIcon fab icon="linkedin-in" />
                          </a>
                        </li>
                        <li className="list-inline-item mb-4">
                          <a href="https://twitter.com/stephanegenini" target="_blank" rel="noopener noreferrer" className="p-2 fa-lg w-ic hoverable rounded" style={{color: "#212121"}} >
                            <MDBIcon fab icon="twitter" />
                          </a>
                        </li>
                      </ul>
                    </MDBCol>
                  </MDBRow>
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