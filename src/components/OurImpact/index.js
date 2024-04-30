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
  return (
    <div className="arrangeCount">
      <h1 className="impact-heading">Our Impact</h1>
      <div className="arrangeBgContainer">
        {imagesArr.map((eachItem) => {
          let a;
          return <ImpactCard key={eachItem.id} details={eachItem} />;
        })}
      </div>
    </div>
  );
};

export default Impact;
