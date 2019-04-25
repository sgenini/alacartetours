import React from "react";
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from
"mdbreact";

import empirestate from "../../assets/images/tour/empirestate.jpg";
import goldengatebridge from "../../assets/images/tour/goldengatebridge.jpg";
import hawaiisurfboards from "../../assets/images/tour/hawaiisurfboards.jpg";
import hollywoodsign from "../../assets/images/tour/hollywoodsign.jpg";
import honolulusurf from "../../assets/images/tour/honolulusurf.jpg";
import lasvegasstrip from "../../assets/images/tour/lasvegasstrip.jpg";
import miamibeach from "../../assets/images/tour/miamibeach.jpg";
import miaminight from "../../assets/images/tour/miaminight.jpg";
import newyork from "../../assets/images/tour/newyork.jpg";
import sanfrancisco from "../../assets/images/tour/sanfrancisco.jpg";
import santamonica from "../../assets/images/tour/santamonica.jpg";
import yosemite from "../../assets/images/tour/yosemite.jpg";

const TourPhotos = () => {
  return (
    <MDBContainer>
      <MDBCarousel
      activeItem={1}
      length={12}
      showControls={true}
      showIndicators={true}
      className="z-depth-1"
    >
      <MDBCarouselInner>
        <MDBCarouselItem itemId="1">
          <MDBView>
            <img
              className="d-block w-100"
              src={empirestate}
              alt="New York City"
            />
          <MDBMask overlay="black-slight" />
          </MDBView>
          <MDBCarouselCaption>
            <p>New York, NY</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="2">
          <MDBView>
            <img
              className="d-block w-100"
              src={goldengatebridge}
              alt="Golden Gate Bridge"
            />
          <MDBMask overlay="black-slight" />
          </MDBView>
          <MDBCarouselCaption>
            <p>San Francisco, CA</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="3">
          <MDBView>
            <img
              className="d-block w-100"
              src={hawaiisurfboards}
              alt="Colorful Surfboards"
            />
          <MDBMask overlay="black-slight" />
          </MDBView>
          <MDBCarouselCaption>
            <p>Hilo, HI</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="4">
          <MDBView>
            <img
              className="d-block w-100"
              src={hollywoodsign}
              alt="Hollywood Sign"
            />
          <MDBMask overlay="black-slight" />
          </MDBView>
          <MDBCarouselCaption>
            <p>Hollywood, CA</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="5">
          <MDBView>
            <img
              className="d-block w-100"
              src={honolulusurf}
              alt="Surfer riding wave"
            />
          <MDBMask overlay="black-slight" />
          </MDBView>
          <MDBCarouselCaption>
            <p>Honolulu, HI</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="6">
          <MDBView>
            <img
              className="d-block w-100"
              src={lasvegasstrip}
              alt="Las Vegas Strip"
            />
          <MDBMask overlay="black-slight" />
          </MDBView>
          <MDBCarouselCaption>
            <p>Las Vegas, NV</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="7">
          <MDBView>
            <img
              className="d-block w-100"
              src={miamibeach}
              alt="Beach in Miami"
            />
          <MDBMask overlay="black-slight" />
          </MDBView>
          <MDBCarouselCaption>
            <p>Miami, FL</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="8">
          <MDBView>
            <img
              className="d-block w-100"
              src={miaminight}
              alt="Miami at night"
            />
          <MDBMask overlay="black-slight" />
          </MDBView>
          <MDBCarouselCaption>
            <p>Miami, FL</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="9">
          <MDBView>
            <img
              className="d-block w-100"
              src={newyork}
              alt="Brooklyn Bridge"
            />
          <MDBMask overlay="black-slight" />
          </MDBView>
          <MDBCarouselCaption>
            <p>New York, NY</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="10">
          <MDBView>
            <img
              className="d-block w-100"
              src={sanfrancisco}
              alt="San Francisco"
            />
          <MDBMask overlay="black-slight" />
          </MDBView>
          <MDBCarouselCaption>
            <p>San Francisco, CA</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="11">
          <MDBView>
            <img
              className="d-block w-100"
              src={santamonica}
              alt="Santa Monica"
            />
          <MDBMask overlay="black-slight" />
          </MDBView>
          <MDBCarouselCaption>
            <p>Santa Monica, CA</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="12">
          <MDBView>
            <img
              className="d-block w-100"
              src={yosemite}
              alt="Yosemite"
            />
          <MDBMask overlay="black-slight" />
          </MDBView>
          <MDBCarouselCaption>
            <p>Yosemite, CA</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
      </MDBCarouselInner>
    </MDBCarousel>
    </MDBContainer>
  );
}

export default TourPhotos;