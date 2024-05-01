import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import TestimonialsCard from '../TestimonialsCard';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import "./index.css"
import '../TestimonialsCard/index.css'


const MobileTestimonials = () => {
  return (
    <Carousel
    autoPlay interval={2000} infiniteLoop dynamicHeight showStatus = {false}>
      <div className='customCarousel'>
            <div className = "TestimonialsCard-container">
                    <img
                src={"/Images/TanikellaBharani.png"}
                alt="image"
                className="TestimonialsCard-image-mobile"
                />
                <h1>Hello</h1>
            </div>
      </div>
      {/* <div className='customCarousel'>
      <h1>Image 2</h1>
      </div>
      <div className='customCarousel'>
      <h1>Image 3</h1>
      </div>
      <div className='customCarousel'>
      <h1>Image 4</h1>
      </div>
      <div className='customCarousel'>
      <h1>Image 5</h1>
      </div> */}
      {/* Add more carousel items as needed */}
    </Carousel>

    
    
    
  );
};

export default MobileTestimonials