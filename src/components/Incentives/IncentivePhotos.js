import React from "react";
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from
"mdbreact";

import classic from "../../assets/images/incentives/classic.jpg";
import hollywood from "../../assets/images/incentives/hollywood.jpg";
import horse2 from "../../assets/images/incentives/horse2.jpg";
import motorcycle from "../../assets/images/incentives/motorcycle.jpg";
import universal from "../../assets/images/incentives/universal.jpg";
import watertaxi from "../../assets/images/incentives/watertaxi.jpg";

const IncentivePhotos = () => {
  return (
    <MDBContainer>
      <MDBCarousel
      activeItem={1}
      length={6}
      showControls={true}
      showIndicators={true}
      className="z-depth-1"
    >
      <MDBCarouselInner>
        <MDBCarouselItem itemId="1">
          <MDBView>
            <img
              className="d-block w-100"
              src={hollywood}
              alt="Hollywood Sign"
            />
          <MDBMask overlay="black-slight" />
          </MDBView>
          <MDBCarouselCaption>
            <p>Hollywood Helicopter Tour</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="2">
          <MDBView>
            <img
              className="d-block w-100"
              src={classic}
              alt="Classic Cars With Palm Trees"
            />
          <MDBMask overlay="black-slight" />
          </MDBView>
          <MDBCarouselCaption>
            <p>Classic Car Tour</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="3">
          <MDBView>
            <img
              className="d-block w-100"
              src={horse2}
              alt="Group on Horseback on Mountain"
            />
          <MDBMask overlay="black-slight" />
          </MDBView>
          <MDBCarouselCaption>
            <p>Horseback Riding Tour</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="4">
          <MDBView>
            <img
              className="d-block w-100"
              src={motorcycle}
              alt="Group of Motorcyclists"
            />
          <MDBMask overlay="black-slight" />
          </MDBView>
          <MDBCarouselCaption>
            <p>Motorcycle Tour</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="5">
          <MDBView>
            <img
              className="d-block w-100"
              src={universal}
              alt="Universal Studios Statue"
            />
          <MDBMask overlay="black-slight" />
          </MDBView>
          <MDBCarouselCaption>
            <p>Universal Studios</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="6">
          <MDBView>
            <img
              className="d-block w-100"
              src={watertaxi}
              alt="Watertaxi Under Bridge"
            />
          <MDBMask overlay="black-slight" />
          </MDBView>
          <MDBCarouselCaption>
            <p>Watertaxi in NYC</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
      </MDBCarouselInner>
    </MDBCarousel>
    </MDBContainer>
  );
}

export default IncentivePhotos;