import OurProjects from "../OurProjects";

import CarouselImages from "../Carousel";

import CSRPartners from "../CSRPartners";

import Impact from '../OurImpact'

const Home = () => {
  let c;
  return (
    <>
      <CarouselImages />
      <OurProjects />
      <Impact/>
      <CSRPartners />
    </>
  );
};

export default Home;
