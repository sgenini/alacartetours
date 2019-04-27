import React from "react";
import {  MDBRow, MDBCol, MDBCard, MDBCardBody, MDBIcon, MDBBtn, MDBInput, MDBContainer, MDBView, MDBMask } from "mdbreact";

import logo from "../../assets/images/logo/logo2.png";
import palmtrees from "../../assets/images/backgrounds/palmtrees.jpg";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      subject: "",
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
      <section id="contact" className="contact-page" style={{opacity: ".9", minHeight: "100%"}}>
        <MDBView src={palmtrees}>
          <MDBMask overlay="black-light" className="flex-center flex-column text-center">
            <MDBContainer style={{width:"100%", minHeight: "75vh", overflow: "auto"}}> 
              <MDBCard className="shadow-box-example hoverable mt-5 mb-3">
                <form id="contact-form" action="https://formspree.io/sgenini@gmail.com" method="POST" >
                  <MDBRow>
                    <MDBCol lg="4">
                      <MDBCardBody className="contact text-center h-100 black-text">
                        <h3 className="my-4 pb-2" color="#FFFFFF"><strong style={{fontFamily: "'Crimson Text', serif"}} >Contact Information</strong></h3>
                        <ul className="text-lg-center list-unstyled">
                          <li>
                            <p>
                              <MDBIcon icon="phone" className="pr-2" />Phone<br/>
                              1 (510) 658-6877
                            </p>
                          </li>
                          <li>
                            <p>
                              <MDBIcon icon="fax" className="pr-2" />Fax<br/>
                              1 (510) 217-2345
                            </p>
                          </li>
                          <li>
                            <p>
                              <MDBIcon icon="envelope" className="pr-2" />Email<br/>
                              <a href="mailto:info@alacartetours.com" style={{ color: "black", textDecorationLine: "underline" }}>info@alacartetours.com</a>
                            </p>
                          </li>
                        </ul>
                        <hr className="my-4" style={{width: 250}} />
                        <img src={logo} alt="logo" height="150" className="my-auto mx-auto" />
                      </MDBCardBody>
                    </MDBCol>
                    <MDBCol lg="7" className="mx-auto">
                      <MDBCardBody className="form ml-auto">
                        <h3 className="mt-4 mb-3 text-lg-center" color="#FFFFFF">
                          <strong style={{fontFamily: "'Crimson Text', serif", textTransform: "capitalize"}} >Fill in the form to send us an email</strong>
                        </h3>
                        <MDBRow>
                          <MDBCol md="6">
                            <div className="md-form mb-0" style={{marginTop: "-20px"}}>
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
                            <div className="md-form mb-0" style={{marginTop: "-20px"}}>
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
                          <MDBCol md="12">
                            <div className="md-form mb-0" style={{marginTop: "-20px"}}>
                              <MDBInput
                                type="text"
                                id="form-contact-subject"
                                label="Subject"
                                value={this.state.subject}
                                onChange={ e => this.setState({ subject: e.target.value })}
                                name="subject"
                              />
                            </div>
                          </MDBCol>
                        </MDBRow>
                        <MDBRow>
                          <MDBCol md="12">
                            <div className="md-form mb-0" style={{marginTop: "-20px"}}>
                              <MDBInput
                                type="textarea"
                                id="form-contact-message"
                                label="Message"
                                rows="9"
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