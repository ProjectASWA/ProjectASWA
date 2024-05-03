// import "./index.css";
// import { Component } from "react";

// import TestimonialsCard from "../TestimonialsCard";

// import HorizontalLines from "../HorizontalLines";

// import MobileTestimonials from "../MobileTestimonials";
// class Testimonials extends Component {
//   render() {
//     return (
//       <div className="Testimonials-container">
//         <h1 className="Testimonials-heading">Testimonials</h1>
//         <div className="laptop-testimonials">
//           <TestimonialsCard />
//           <HorizontalLines />
//           <TestimonialsCard />
//         </div>

//         <div className="mobile-testimonials">
//           <MobileTestimonials />
//         </div>
//       </div>
//     );
//   }
// }

// export default Testimonials;


import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import './index.css'

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
    
  }
  return (
    <div className="slider-container-large-screen hideContainerInMobile">
      <h1 className='testimonials-heading-large'>Testimonials</h1>
      <Slider style={{ width: '90%' }} {...settings}>
        <div className='arrangeResizeCardTestimonial'>
          <div className='arrange-testimonial-large'>
          <div>
              <img className = "testimonialImageLarge" src = "/Images/TanikellaBharani.png" alt = "Image 1" />
          </div>
          <div>
            <img className = "fontSizeQuotes" src = "/Images/double-quotes-l.1024x786.png"/>
            <p className='paraQuotesLarge'>
            ASWA is doing a great service by motivating govt. school children to
                    have affection and love towards arts, education, life and created a
                    platform to exhibit their skills. ASWA started like a drop of water
                    7yrs ago, is currently flowing like a canal and can turn into a
                    river & spreads out vastly.
            </p>
            <h1 className='testimonials-title-large'>
            - Shri Tanikella Bharani Actor, Poet & Director
            </h1>
          </div>
          </div>
          
        </div>
        <div>
          <div className='arrange-testimonial-large'>
          <div>
              <img className = "testimonialImageLarge" src = "/Images/Tammareddy.png" alt = "Image 1" />
          </div>
          <div>
            <img className = "fontSizeQuotes" src = "/Images/double-quotes-l.1024x786.png"/>
            <p className='paraQuotesLarge'>
            Pleased to meet ASWA team, the approach of ASWA in crafting young children who are studying at government school, 
                    by conducting classes is appreciable. 
                    More research has to be done in this area to bring change in education system and make it stress free.
            </p>
            <h1 className='testimonials-title-large'>
            - Shri Tammareddy Bharadwaj
                    Producer & Director.
            </h1>
          </div>
          </div>
          
        </div>
        <div className='arrangeResizeCardTestimonial'>
          <div className='arrange-testimonial-large'>
          <div>
              <img className = "testimonialImageLarge" src = "/Images/ShriSirivennela.png" alt = "Image 1" />
          </div>
          <div>
            <img className = "fontSizeQuotes" src = "/Images/double-quotes-l.1024x786.png"/>
            <p className='paraQuotesLarge'>
            Delighted to meet and greet ASWA members who are doing great service.
                     I have been reflecting my thoughts through my songs in order to bring change in the society; glad that they activates are also striving for the same. 
                    Work on root cause of the problems and fix them for better society.
            </p>
            <h1 className='testimonials-title-large'>
            - Padma Shri Sirivennela Seetharama Sastry Lyricist & Poet
            </h1>
          </div>
          </div>
          
        </div>
        <div className='arrangeResizeCardTestimonial'>
          <div className='arrange-testimonial-large'>
          <div>
              <img className = "testimonialImageLarge" src = "/Images/LakshmiNarayana.png" alt = "Image 1" />
          </div>
          <div>
            <img className = "fontSizeQuotes" src = "/Images/double-quotes-l.1024x786.png"/>
            <p className='paraQuotesLarge'>
            ASWA’s philosophy of Giving back to society which is reason for your progress
                         and serving to society is not social service it our social responsibility should 
                         be followed by everyone, My hearty congratulations on completing of 10 Years
                          journey and wishing all the best.
            </p>
            <h1 className='testimonials-title-large'>
            - Shri V V Lakshmi Narayana
  Ex. JD CBI
            </h1>
          </div>
          </div>
  
        </div>
      </Slider>
    </div>
  )
}



export default Testimonials