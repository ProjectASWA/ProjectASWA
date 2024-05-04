import { Carousel } from "react-responsive-carousel";
import './index.css'

const CustomPrevArrow = ({ onClick }) => (
    <button className = "buttonStylingPrevious homePreviousButton" onClick={onClick}>
      <img className = "leftButtonHomeVisitsNext" style={{ transform: 'rotate(180deg)' }} src = "/Images/RightArrowTestimonial.png"/>
    </button>
  );
  
  const CustomNextArrow = ({ onClick }) => (
    <button className = "buttonStylingNext homeNextButton rightButtonHomeVisitsNext" onClick={onClick}>
      <img src = "/Images/RightArrowTestimonial.png"/>
    </button>
  );

const MobileHomeVisitsCarousel = ()=>{
    return(
        <Carousel  swipeable = {true}
    renderArrowPrev={(onClickHandler, hasPrev, label) =>
      hasPrev && <CustomPrevArrow onClick={onClickHandler} />
    }
    renderArrowNext={(onClickHandler, hasNext, label) =>
      hasNext && <CustomNextArrow onClick={onClickHandler} />
    }
      interval={2000}
      infiniteLoop
      autoPlay 
      style={{ width: '20%', height: '100px' }}
      showThumbs={false}
    >
        <div className="imageStylingHomeVisits">
            <img className = "imageSrcHome" src = "/Images/homeVisitsMobile1.png"/>
        </div>
        <div className="imageStylingHomeVisits adjustSecondImageHome">
        <img className = "imageSrcHome" src = "/Images/homeVisitsMobile1.png"/>
        </div>
        <div className="imageStylingHomeVisits adjustSecondImageHome">
        <img className = "imageSrcHome" src = "/Images/homeVisitsMobile1.png"/>
        </div>
    </Carousel>
    )
}

export default MobileHomeVisitsCarousel;