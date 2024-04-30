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
      <h1>
        <CountUp start={0} end={details.count} duration={5} />
        K+
      </h1>
      <p className="descriptionStyling">{details.description}</p>
    </div>
  );
};

export default ImpactCard;
