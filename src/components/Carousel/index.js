import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./index.css";

const CarouselImages = () => {
  return (
    <Carousel
      
      interval={2000}
      infiniteLoop
      dynamicHeight
      showStatus={false}
    >
      <div className="customCarousel1">
          <div className="customCarouselTextContainer">
          <h1 className="carouselHeading">Building Brighter Futures</h1>
              <p className="carouselDescription">Providing quality education and career guidance to unlock potential and create opportunities.</p>
              <button className = "knowMoreCarousel">Know More</button>
          </div>
      </div>
      <div className="customCarousel2">
        <div className="customCarouselTextContainer">
            <h1 className="carouselHeading secondBannerHeading">Be a Lifesaver</h1>
                <p className="carouselDescription secondBannerSideHeading">Join our blood donation program and help ensure vital blood supplies for those in need.</p>
                <button className = "knowMoreCarousel">Know More</button>
        </div>
      </div>
      <div className="customCarousel3">
        <div className="customCarouselTextContainer">
          <h1 className="carouselHeading carousel3Heading">Greening Our Future</h1>
              <p className="carouselDescription carousel3SideHeading">Promoting environmental stewardship and conservation for a healthier, more sustainable world.</p>
              <button className = "knowMoreCarousel">Know More</button>
          </div>
      </div>
      <div className="customCarousel4">
        <h1>Image 4</h1>
      </div>
      <div className="customCarousel">
        <h1>Image 5</h1>
      </div>
      {/* Add more carousel items as needed */}
    </Carousel>
  );
};

export default CarouselImages;
