import "./index.css";
import { Component } from "react";
import TestimonialsCard from "../TestimonialsCard";
import HorizontalLines from "../HorizontalLines";

class Testimonials extends Component {
  render() {
    return (
      <div className="Testimonials-container">
        <TestimonialsCard />
        <HorizontalLines />
        <TestimonialsCard />
      </div>
    );
  }
}

export default Testimonials;
