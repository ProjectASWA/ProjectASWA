import "./index.css";
import { Component } from "react";

import TestimonialsCard from "../TestimonialsCard";

import HorizontalLines from "../HorizontalLines";

import MobileTestimonials from "../MobileTestimonials";
class Testimonials extends Component {
  render() {
    return (
      <div className="Testimonials-container">
        <h1 className="Testimonials-heading">Testimonials</h1>
        <div className="laptop-testimonials">
          <TestimonialsCard />
          <HorizontalLines />
          <TestimonialsCard />
        </div>

        <div className="mobile-testimonials">
          <MobileTestimonials />
        </div>
      </div>
    );
  }
}

export default Testimonials;
