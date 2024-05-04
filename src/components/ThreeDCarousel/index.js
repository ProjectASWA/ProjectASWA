// import React from 'react';
// import { useSpring, animated } from 'react-spring';
// import Carousel from 'react-spring-3d-carousel';
// import { config } from 'react-spring';

// const images = [
//   {
//     key: 1,
//     content: <img src="/Images/Environment.png" alt="Image 1" />,
//   },
//   {
//     key: 2,
//     content: <img src="Environment2.png" alt="Image 2" />,
//   },
//   {
//     key: 3,
//     content: <img src="/Images/Environment.png" alt="Image 1" />,
//   }
//   // Add more images as needed
// ];

// const MyCarousel = () => {
//   const [index, setIndex] = React.useState(0);
//   const onClick = (index) => {
//     setIndex(index);
//   };

//   const props = useSpring({
//     from: { opacity: 0 },
//     to: { opacity: 1 },
//     config: config.molasses,
//   });

//   return (
//     <animated.div style={props}>
//       <Carousel
//         slides={images}
//         goToSlide={index}
//         offsetRadius={2}
//         showNavigation={true}
//         animationConfig="config.default"
//       />
//     </animated.div>
//   );
// };

// export default MyCarousel;
