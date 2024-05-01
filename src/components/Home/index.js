import OurProjects from "../OurProjects";

import CarouselImages from "../Carousel";

import CSRPartners from "../CSRPartners";

import Footer from "../Footer";

import Impact from "../OurImpact";
import Testimonials from "../Testimonials";

import AboutUsHomeSection from '../AboutUsHome'

import AnimatedFlexCards from '../CardsAnimation'

import MobileTestimonials from '../MobileTestimonials'

const Home = () => {
  return (
    <>
      <CarouselImages />
      <AboutUsHomeSection/>

      <Impact/>
      <OurProjects />
      <CSRPartners />
      <Testimonials />
      <MobileTestimonials/>
      <AnimatedFlexCards/>
      <Footer />
    </>
  );
};

export default Home;
