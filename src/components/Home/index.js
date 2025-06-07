import { useEffect } from "react";
import CarouselImages from "../Carousel";
import CSRPartners from "../CSRPartners";
import OurImpactHome from "../OurImpactHome";
import Testimonials from "../Testimonials";
import MobileTestimonials from "../MobileTestimonials";
import AboutUsHomeSection from "../AboutUsHome";
import OurProjects1 from "../OurProjects1";
import "./index.css";

// import AnimatedFlexCards from "../AnimatedFlexCards";

const Home = () => {
  useEffect(() => {
      // Scroll down smoothly by window height after page load
      window.scrollTo({ top: window.innerHeight, behavior: "smooth" });

      // After the scroll down is complete, scroll back to top
      const timeout = setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 900); // Adjust time as needed for your animation

      // Cleanup timeout on unmount
      return () => clearTimeout(timeout);
    }, []);  

  return (
    <div className="home-container">
      <CarouselImages />
      <AboutUsHomeSection />
      <OurImpactHome />
      <OurProjects1 />
      <div id="Testimonials">
        <div className="testimonials-large-devices">
          <Testimonials />
        </div>
        <div className="testimonials-small-devices">
          <MobileTestimonials />
        </div>
      </div>
      <CSRPartners />
    </div>
  );
};

export default Home;
