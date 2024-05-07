import Slider from "react-slick";
import { Carousel } from "react-responsive-carousel";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./index.css";

const CustomPrevArrow = ({ onClick }) => (
  <button className="buttonStylingPreviousTestimonials" onClick={onClick}>
    <img src="/Images/testimonialPreviousArrow.png" />
  </button>
);

const CustomNextArrow = ({ onClick }) => (
  <button className="buttonStylingNextTestimonials" onClick={onClick}>
    <img src="/Images/RightArrowTestimonial.png" />
  </button>
);

const Testimonials = () => {
  const CustomArrow = ({ onClick, className, icon }) => {
    return (
      <div className={className} onClick={onClick}>
        {icon}
      </div>
    );
  };
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="slider-container-large-screen hideContainerInMobile">
      <h1 className="testimonials-heading-large">Testimonials</h1>
      <Carousel
        renderArrowPrev={(onClickHandler, hasPrev, label) =>
          hasPrev && <CustomPrevArrow onClick={onClickHandler} />
        }
        renderArrowNext={(onClickHandler, hasNext, label) =>
          hasNext && <CustomNextArrow onClick={onClickHandler} />
        }
        interval={2000}
        infiniteLoop
        showStatus={false}
        dots={false}
      >
        <div className="arrangeTestimonialsRow">
          <div>
            <img
              className="testimonialImageLarge"
              src="/Images/TanikellaBharani.png"
              alt="Image 1"
            />
          </div>
          <div className="contentsTestimonialLarge">
            <div className="divQuotesContainer">
              <img
                className="fontSizeQuotes"
                src="/Images/double-quotes-l.1024x786.png"
              />
            </div>
            <p className="paraQuotesLarge">
              ASWA is doing a great service by motivating govt. school children
              to have affection and love towards arts, education, life and
              created a platform to exhibit their skills. ASWA started like a
              drop of water 7yrs ago, is currently flowing like a canal and can
              turn into a river & spreads out vastly.
            </p>
            <h1 className="testimonials-title-large">
              - Shri Tanikella Bharani <br></br>Actor, Poet & Director
            </h1>
          </div>
        </div>
        <div className="arrangeTestimonialsRow">
          <div>
            <img
              className="testimonialImageLarge"
              src="/Images/Tammareddy.png"
              alt="Image 1"
            />
          </div>
          <div className="contentsTestimonialLarge">
            <div className="divQuotesContainer">
              <img
                className="fontSizeQuotes"
                src="/Images/double-quotes-l.1024x786.png"
              />
            </div>

            <p className="paraQuotesLarge">
              Pleased to meet ASWA team, the approach of ASWA in crafting young
              children who are studying at government school, by conducting
              classes is appreciable. More research has to be done in this area
              to bring change in education system and make it stress free.
            </p>
            <h1 className="testimonials-title-large">
              - Shri Tammareddy Bharadwaj<br></br> Producer & Director.
            </h1>
          </div>
        </div>
        <div className="arrangeTestimonialsRow">
          <div>
            <img
              className="testimonialImageLarge"
              src="/Images/ShriSirivennela.png"
              alt="Image 1"
            />
          </div>
          <div className="contentsTestimonialLarge">
            <div className="divQuotesContainer">
              <img
                className="fontSizeQuotes"
                src="/Images/double-quotes-l.1024x786.png"
              />
            </div>

            <p className="paraQuotesLarge">
              Delighted to meet and greet ASWA members who are doing great
              service. I have been reflecting my thoughts through my songs in
              order to bring change in the society; glad that they activates are
              also striving for the same. Work on root cause of the problems and
              fix them for better society.
            </p>
            <h1 className="testimonials-title-large">
              - Padma Shri Sirivennela Seetharama Sastry<br></br> Lyricist & Poet
            </h1>
          </div>
        </div>
        <div className="arrangeTestimonialsRow">
          <div>
            <img
              className="testimonialImageLarge"
              src="/Images/LakshmiNarayana.png"
              alt="Image 1"
            />
          </div>
          <div className="contentsTestimonialLarge">
            <div className="divQuotesContainer">
              <img
                className="fontSizeQuotes"
                src="/Images/double-quotes-l.1024x786.png"
              />
            </div>

            <p className="paraQuotesLarge">
              ASWA’s philosophy of Giving back to society which is reason for
              your progress and serving to society is not social service it our
              social responsibility should be followed by everyone, My hearty
              congratulations on completing of 10 Years journey and wishing all
              the best.
            </p>
            <h1 className="testimonials-title-large">
              - Shri V V Lakshmi Narayana<br></br> Ex. JD CBI
            </h1>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Testimonials;
