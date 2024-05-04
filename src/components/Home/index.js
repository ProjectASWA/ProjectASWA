import OurProjects from "../OurProjects";

import CarouselImages from "../Carousel";

import CSRPartners from "../CSRPartners";

import Footer from "../Footer";

import Impact from "../OurImpact";

import Testimonials from "../Testimonials";

import MobileTestimonials from "../MobileTestimonials";

import AboutUsHomeSection from "../AboutUsHome";

import OurProjects1 from "../OurProjects1";

// import AnimatedFlexCards from "../AnimatedFlexCards";

const Home = () => {
  return (
    <>
      <CarouselImages />
      <AboutUsHomeSection />
      <Impact />
      <OurProjects1 />
      
      <CSRPartners />
      <Testimonials />
      <MobileTestimonials />
      <Footer />
    </>
  );
};

export default Home;
