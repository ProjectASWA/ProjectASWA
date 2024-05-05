import React, { useRef, useEffect, useState } from "react";
import ImpactCard from "../ImpactCard";
import "./index.css";
import { Link } from "react-router-dom";

const imagesArr = [
  {
    id: 1,
    image: "/Images/pinkbackground.png",
    count: 150,
    description: "Students Benefited",
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
    description: "Hunger Fulfilled",
  },
  {
    id: 4,
    image: "/Images/purplebackground.png",
    count: 3,
    description: "Active Members",
  },
];

const Impact = () => {
  const targetRef = useRef(null);
  const [isIntersected, setIsIntersected] = useState(false);

  useEffect(() => {
    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsIntersected(true);
          console.log("intersecting");
        }
      });
    };

    const observer = new IntersectionObserver(callback, { threshold: 0.5 });

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, []);

  return (
    <div className="arrangeCount">
      <h1 className="impact-heading">Our Impact</h1>
      <div className="column-container">
        <div className="arrangeBgContainer" ref={targetRef}>
          {isIntersected &&
            imagesArr.map((eachItem) => (
              <ImpactCard key={eachItem.id} details={eachItem} />
            ))}
          <div className="impact-button-container">
            <Link to="/ImpactReports">
              <button
                className="impact-button"
                onClick={() => {
                  console.log("hello");
                }}
              >
                KNOW MORE
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Impact;
