import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../TestimonialsCard/index.css'
import './index.css'

function MobileTestimonials() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className = "mobile-testimonials-container-main">
        <h1 className = "testimonials-heading-mobile">Testimonials</h1>
        <Slider {...settings}  style = {{height: "max-content", paddingBottom: "10px"}}>
        <div style = {{height: '100%'}}>
            <div className='mobile-testimonials-card'>
                <img src="/Images/tanikella-bharani.avif" className = "image-mobile-testimonial" alt="Image 1" />
                <div className='mobile-testimonials-contents-container'>
                    <img
                    className="double-quotes-image mobile-quotes"
                    src={"/Images/double-quotes-l.1024x786.png"}
                    />
                    <p className="TestimonialsCard-description mobile-description">
                    ASWA is doing a great service by motivating govt. school children to
                    have affection and love towards arts, education, life and created a
                    platform to exhibit their skills. ASWA started like a drop of water
                    7yrs ago, is currently flowing like a canal and can turn into a
                    river & spreads out vastly.*”
                    </p>
                    <div className='mobile-testimonials-name-container'>
                    <p className="TestimonialsCard-name mobile-name-text">- Shri Tanikella Bharani Actor, Poet & Director</p>
                    </div>
                </div>
            </div>
      </div>
      <div style = {{height: '100%'}}>
            <div className='mobile-testimonials-card'>
                <img src="/Images/tammareddy.avif" className = "image-mobile-testimonial" alt="Image 1" />
                <div className='mobile-testimonials-contents-container'>
                    <img
                    className="double-quotes-image mobile-quotes"
                    src={"/Images/double-quotes-l.1024x786.png"}
                    />
                    <p className="TestimonialsCard-description mobile-description">
                    Pleased to meet ASWA team, the approach of ASWA in crafting young children who are studying at government school, 
                    by conducting classes is appreciable. 
                    More research has to be done in this area to bring change in education system and make it stress free.
                    </p>
                    <div className='mobile-testimonials-name-container'>
                    <p className="TestimonialsCard-name mobile-name-text">- Shri Tammareddy Bharadwaj
                    Producer & Director.</p>
                    </div>
                </div>
            </div>
      </div>
      <div style = {{height: '100%'}}>
            <div className='mobile-testimonials-card'>
                <img src="/Images/ShriSirivennela.jpg" className = "image-mobile-testimonial" alt="Image 1" />
                <div className='mobile-testimonials-contents-container'>
                    <img
                    className="double-quotes-image mobile-quotes"
                    src={"/Images/double-quotes-l.1024x786.png"}
                    />
                    <p className="TestimonialsCard-description mobile-description">
                    Delighted to meet and greet ASWA members who are doing great service.
                     I have been reflecting my thoughts through my songs in order to bring change in the society; glad that they activates are also striving for the same. 
                    Work on root cause of the problems and fix them for better society.
                    </p>
                    <div className='mobile-testimonials-name-container'>
                    <p className="TestimonialsCard-name mobile-name-text">- Padma Shri Sirivennela Seetharama Sastry Lyricist & Poet</p>
                    </div>
                </div>
            </div>
      </div>
      <div style = {{height: '100%'}}>
            <div className='mobile-testimonials-card'>
                <img src="/Images/jd.jpg" className = "image-mobile-testimonial" alt="Image 1" />
                <div className='mobile-testimonials-contents-container'>
                    <img
                    className="double-quotes-image mobile-quotes"
                    src={"/Images/double-quotes-l.1024x786.png"}
                    />
                    <p className="TestimonialsCard-description mobile-description">
                        ASWA’s philosophy of Giving back to society which is reason for your progress
                         and serving to society is not social service it our social responsibility should 
                         be followed by everyone, My hearty congratulations on completing of 10 Years
                          journey and wishing all the best.
                    </p>
                    <div className='mobile-testimonials-name-container'>
                    <p className="TestimonialsCard-name mobile-name-text">- Shri V V Lakshmi Narayana
                    Ex. JD CBI</p>
                    </div>
                </div>
            </div>
      </div>
    </Slider>
    </div>
  );
    
    
}

export default MobileTestimonials;
