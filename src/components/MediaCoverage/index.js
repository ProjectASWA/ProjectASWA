import "./index.css";

import { useEffect } from "react";
import { Link } from "react-router-dom";

const mediaCoveragesImagesObj = [
  {
    id: 1,
    imageUrl: "/Images/mediaCoverage1.jpg",
  },
  {
    id: 2,
    imageUrl: "/Images/mediaCoverage2.png",
  },
  {
    id: 3,
    imageUrl: "/Images/mediaCoverage3.jpg",
  },
  {
    id: 4,
    imageUrl: "/Images/mediaCoverage4.jpg",
  },
  {
    id: 5,
    imageUrl: "/Images/mediaCoverage5.jpg",
  },
  {
    id: 6,
    imageUrl: "/Images/mediaCoverage6.png",
  },
  {
    id: 7,
    imageUrl: "/Images/mediaCoverage7.jpg",
  },
  {
    id: 8,
    imageUrl: "/Images/mediaCoverage8.jpg",
  },
  {
    id: 9,
    imageUrl: "/Images/mediaCoverage9.jpg",
  }
];

const mediaCoveragesImagesObjwthLinks = [
  {
    id: 1,
    imageUrl: "/Images/mediaCoverage10.png",
    link: "https://epaper.navatelangana.com/Home/FullPage?eid=38&edate=16/06/2024&pgid=116316"
  }
];

const MediaCoverage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div className="mediaCoverageContainer">
      <img
        src="/Images/BannerMediaCoverage.png"
        className="mediaCoverageImageBanner"
      />
      <div className="mediaCoverageImageContainer">
      {mediaCoveragesImagesObjwthLinks.map((eachImage) => {
          return (
            <div>
              <Link to={{ pathname: eachImage.link }} target="_blank">
              <img
                src={eachImage.imageUrl}
                className="mediaCoverageImageStyling"
              />
              </Link>
            </div>
          );
        })}        
        {mediaCoveragesImagesObj.map((eachImage) => {
          return (
            <div>
              <img
                src={eachImage.imageUrl}
                className="mediaCoverageImageStyling"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MediaCoverage;
