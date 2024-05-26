import "./App.css";
import { useState } from "react";
import Slider from "react-slick";
import leaderHomeVisits from '../assets/leaderHomeVisits.jpg'
// import leaderHomeVisits from '../../../public/Images/leaderHomeVisits.jpg'
// import Environment3 from '../../../public/Images/schooleducation5lg.png'
// import homeVisitsMobile1 from '../../public/Images/schooleducation5lg.png'
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const images = [ "/Images/homeVisitsGallery1.png","/Images/homeVisitsGallery2.png","/Images/homeVisitsGallery3.png","/Images/homeVisitsGallery4.png" ];

function HomeVisitsLaptopCarousel() {
  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <FaArrowRight />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <FaArrowLeft />
      </div>
    );
  };

  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    lazyLoad: true,
    speed: 500,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
  };

  return (
    <div className="AppHomeVisits">
      <Slider {...settings}>
        {images.map((img, idx) => (
          <div className={idx === imageIndex ? "slideHomeVisits activeSlideHomeVisits" : "slideHomeVisits"}>
            <img className = "homeVisitsLargeScreenImage" src={img} alt={img} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default HomeVisitsLaptopCarousel;
