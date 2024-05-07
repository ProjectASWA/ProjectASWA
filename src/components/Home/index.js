import CarouselImages from "../Carousel";

import CSRPartners from "../CSRPartners";

import Impact from "../OurImpact";

import Testimonials from "../Testimonials";

import MobileTestimonials from "../MobileTestimonials";

import AboutUsHomeSection from "../AboutUsHome";

import OurProjects1 from "../OurProjects1";

import "./index.css";

// import AnimatedFlexCards from "../AnimatedFlexCards";

const Home = () => {
  return (
    <div className="home-container">
      <CarouselImages />
      <AboutUsHomeSection />
      <Impact />
      <OurProjects1 />

      <div className="testimonials-large-devices">
        <Testimonials />
      </div>
      <div className="testimonials-small-devices">
        <MobileTestimonials />
      </div>
      <CSRPartners />
    </div>
  );
};

export default Home;
