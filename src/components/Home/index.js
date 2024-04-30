import OurProjects from "../OurProjects";

import CarouselImages from "../Carousel";

import CSRPartners from "../CSRPartners";

import Footer from "../Footer";

import Impact from "../OurImpact";
import Testimonials from "../Testimonials";

import AboutUsHomeSection from '../AboutUsHome'

const Home = () => {
  return (
    <>
      <CarouselImages />
      <AboutUsHomeSection/>

      <Impact/>
      <OurProjects />
      <Impact />
      <CSRPartners />
      <Testimonials />
      <Footer />
    </>
  );
};

export default Home;
