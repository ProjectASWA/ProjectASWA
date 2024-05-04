import React, { useRef, useEffect, useState } from "react";
import ImpactCard from "../ImpactCard";
import "./index.css";

const imagesArr = [
  {
    id: 1,
    image: "/Images/pinkbackground.png",
    count: 150,
    description: "Students Benifited",
  },
  {
    id: 2,
    image: "/Images/greenbackgroun.png",
    count: 12,
    description: "Lives Saved",
  },
  {
    id: 3,
    image: "/Images/brownbackground.png",
    count: 25,
    description: "Hungers fulfilled",
  },
  {
    id: 4,
    image: "/Images/purplebackground.png",
    count: 3,
    description: "Active Members",
  },
];

const Impact = () => {
  let c;

  const targetRefs = [useRef(null)];
  const [isIntersected, setisIntersected] = useState(false);
  useEffect(() => {
    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          let element = document.getElementById(entry.target.id);
          setisIntersected(!isIntersected);
          console.log("intersectinaksfjkj");
          // Perform action when the target element is on screen
        }
      });
    };

    const observer = new IntersectionObserver(callback, { threshold: 0.5 });

    // Observe each target element
    targetRefs.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      // Clean up by unobserving each target element
      targetRefs.forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, []);
  return (
    <div className="arrangeCount">
      <h1 className="impact-heading">Our Impact</h1>
      <div className="arrangeBgContainer" ref={targetRefs[0]}>
        {isIntersected ? (
          <>
            {imagesArr.map((eachItem) => {
              let a;
              return (
                <ImpactCard
                  isIntersected={isIntersected}
                  key={eachItem.id}
                  details={eachItem}
                />
              );
            })}
          </>
        ) : null}
      </div>
    </div>
  );
};

export default Impact;
