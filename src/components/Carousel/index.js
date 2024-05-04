import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./index.css";

const CustomPrevArrow = ({ onClick }) => (
  <button className = "buttonStylingPrevious" onClick={onClick}>
    <img src = "/Images/Vector.png"/>
  </button>
);

const CustomNextArrow = ({ onClick }) => (
  <button className = "buttonStylingNext" onClick={onClick}>
    <img src = "/Images/RightArrow.png"/>
  </button>
);

const CarouselImages = () => {
  return (
    <Carousel
    renderArrowPrev={(onClickHandler, hasPrev, label) =>
      hasPrev && <CustomPrevArrow onClick={onClickHandler} />
    }
    renderArrowNext={(onClickHandler, hasNext, label) =>
      hasNext && <CustomNextArrow onClick={onClickHandler} />
    }
      interval={2000}
      infiniteLoop
      dynamicHeight = {true}
      showStatus={false}
    >
      <div className="customCarousel5">
      </div>
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
      <div className="customCarouselTextContainer">
          <h1 className="carouselHeading carousel3Heading carousel4Heading">Spreading Joy & Compassion</h1>
              <p className="carouselDescription carousel3SideHeading carousel4SideHeading">Bringing happiness to the doorsteps of the elderly and orphaned through regular home visits.</p>
              <button className = "knowMoreCarousel buttonUpp">Know More</button>
          </div>
      </div>
      
      {/* Add more carousel items as needed */}
    </Carousel>
  );
};

export default CarouselImages;
