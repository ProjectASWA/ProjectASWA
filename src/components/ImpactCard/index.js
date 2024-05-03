import CountUp from "react-countup";
import "./index.css";

const ImpactCard = (props) => {
  const { details } = props;
  const { image } = details;
  return (
    <div
      className="backgroundStylingImage"
      style={{ backgroundImage: `url(${image})` }}
    >
      <h1 className="countUpAnimationHeading">
        <CountUp start={500} end={details.count} duration={0.8} />
        K+
      </h1>
      <p className="descriptionStyling">{details.description}</p>
    </div>
  );
};

export default ImpactCard