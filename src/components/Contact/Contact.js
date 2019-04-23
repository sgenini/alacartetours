import React from "react";
import {  MDBRow, MDBCol, MDBCard, MDBCardBody, MDBIcon, MDBBtn, MDBInput, MDBContainer, MDBView, MDBMask } from "mdbreact";

import logo from "../../assets/images/logo2-transparent.png";
import desk from "../../assets/images/desk.jpg";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      phone: "",
      company: "",
      message: "",
      error: null,
      mailSent: false
    }

  }

  handleFormSubmit( event ) {
    event.preventDefault();
    console.log(this.state);
  }

  render(){
    return (
      <section id="contact" className="contact-page mt-4" style={{opacity: ".9", minHeight: "100%", borderTop: "3px solid white"}}>
        <MDBView src={desk}>
          <MDBMask overlay="black-light" className="flex-center flex-column text-center">
            <MDBContainer style={{width:"100%", minHeight: "75vh", overflow: "auto"}}> 
              <MDBCard className="shadow-box-example hoverable mt-5 mb-3">
                <form id="contact-form" action="https://formspree.io/sgenini@gmail.com" method="POST" >
                  <MDBRow>
                    <MDBCol lg="7" className="mx-auto">
                      <MDBCardBody className="form ml-auto">
                        <h3 className="mt-4 mb-3 text-lg-center" color="#FFFFFF">
                          <MDBIcon far icon="comment" className="pr-2" />
                          <strong style={{fontFamily: "'Crimson Text', serif"}} >Get in touch with me</strong>
                        </h3>
                        <MDBRow>
                          <MDBCol md="6">
                            <div className="md-form mb-0">
                              <MDBInput
                                type="text"
                                id="form-contact-name"
                                label="Your name"
                                value={this.state.name}
                                onChange={ e => this.setState({ name: e.target.value })}
                                name="name"
                              />
                            </div>
                          </MDBCol>
                          <MDBCol md="6">
                            <div className="md-form mb-0">
                              <MDBInput
                                type="text"
                                id="form-contact-email"
                                label="Your email"
                                value={this.state.email}
                                onChange={ e => this.setState({ email: e.target.value })}
                                name="email"
                              />
                            </div>
                          </MDBCol>
                        </MDBRow>
                        <MDBRow>
                          <MDBCol md="6">
                            <div className="md-form mb-0">
                              <MDBInput
                                type="text"
                                id="form-contact-phone"
                                label="Your phone"
                                value={this.state.phone}
                                onChange={ e => this.setState({ phone: e.target.value })}
                                name="phone"
                              />
                            </div>
                          </MDBCol>
                          <MDBCol md="6">
                            <div className="md-form mb-0">
                              <MDBInput
                                type="text"
                                id="form-contact-company"
                                label="Your company"
                                value={this.state.company}
                                onChange={ e => this.setState({ company: e.target.value })}
                                name="company"
                              />
                            </div>
                          </MDBCol>
                        </MDBRow>
                        <MDBRow>
                          <MDBCol md="12">
                            <div className="md-form mb-0">
                              <MDBInput
                                type="textarea"
                                id="form-contact-message"
                                label="Your message"
                                rows="11"
                                style={{overflow: "auto"}}
                                value={this.state.message}
                                onChange={ e => this.setState({ message: e.target.value })}
                                name="message"
                              />
                              <MDBBtn rounded color="elegant" size="lg" type="submit">
                                <MDBIcon icon="paper-plane" className="mr-3" /> Send
                              </MDBBtn> <br />
                              <small>NOTE: You will be prompted to complete a CAPTCHA to avoid bot spam! <span role="img" aria-label="beep-boop">🤖</span></small>
                            </div>
                          </MDBCol>
                        </MDBRow>
                      </MDBCardBody>
                    </MDBCol>
                    <MDBCol lg="4">
                      <MDBCardBody className="contact text-center h-100 black-text">
                        <h3 className="my-4 pb-2" color="#FFFFFF"><strong style={{fontFamily: "'Crimson Text', serif"}} >Contact Information</strong></h3>
                        <ul className="text-lg-center list-unstyled">
                          <li>
                            <p>
                              <MDBIcon icon="map-marker-alt" className="pr-2" /><br/>
                              Oakland, CA 94705 USA
                            </p>
                          </li>
                          <li>
                            <p>
                              <MDBIcon icon="phone" className="pr-2" /><br/>Available Upon Request
                            </p>
                          </li>
                          <li>
                            <p>
                              <MDBIcon icon="envelope" className="pr-2" /><br/>
                              <a href="mailto:contact@stephanegenini.com" style={{ color: "black", textDecorationLine: "underline" }}>contact@stephanegenini.com</a>
                            </p>
                          </li>
                        </ul>
                        <hr className="my-4" style={{width: 250}} />
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
                        <img src={logo} alt="logo" height="250" className="my-auto" />
                      </MDBCardBody>
                    </MDBCol>
                  </MDBRow>
                </form>  
              </MDBCard>

            </MDBContainer>
          </MDBMask>
        </MDBView>
      </section>
    );
  }
}

export default Contact;