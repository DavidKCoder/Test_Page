import React from "react";
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBContainer
} from "mdbreact";
import style from "./Carousel.module.css";

const CarouselPage = () => {
  return (
    <div className={style.carousel}>
      <MDBContainer>
        <MDBCarousel
          activeItem={1}
          length={3}
          showControls={true}
          showIndicators={true}
          className="z-depth-1"
          // autoplay={true}
          slide
        >
          <MDBCarouselInner>
            <MDBCarouselItem itemId="1">
              <MDBView className={style.img}>
                <img
                  className="d-block w-100"
                  src="/Img/img1.jpg"
                  alt="First slide"
                />
              </MDBView>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="2">
              <MDBView className={style.img}>
                <img
                  className="d-block w-100"
                  src="/Img/img2.jpg"
                  alt="Second slide"
                />
              </MDBView>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="3">
              <MDBView className={style.img}>
                <img
                  className="d-block w-100"
                  src="/Img/img3.jpg"
                  alt="Third slide"
                />
              </MDBView>
            </MDBCarouselItem>
          </MDBCarouselInner>
        </MDBCarousel>
      </MDBContainer>
    </div>
  );
};

export default CarouselPage;
