import React, { Component } from "react";
import "./index.css";

class CSRPartners extends Component {
  render() {
    return (
      <>
        
        <h1 className="csrPartnersHeading">CSR Partners</h1>
        <div className="marquee-container">
        <div className="marquee">
          {/* Duplicate the set of images */}
          
          {[...Array(2)].map((_, i) => (
            <React.Fragment key={i}>
              <img
                className="csr-image"
                src={"/Images/Arohyadhatri.jpeg"}
                alt="AndraWelfare"
              />
              <img
                className="csr-image"
                src={"/Images/Untitleddesign(1).png"}
                alt="JoyofReading"
              />
              <img
                className="csr-image"
                src={"/Images/Centeral_books.jpeg"}
                alt="VishwakarmaInstitutes"
              />
              <img
                className="csr-image"
                src={"/Images/Daksha.png"}
                alt="MangalagriCottons"
              />
              {/* <img
                className="csr-image"
                src={"/Images/parag.png"}
                alt="Parag"
              /> */}
              {/* <img className="csr-image" src={"/Images/CBIT.jpg"} alt="CBIT" /> */}
              {/* <img
                className="csr-image"
                src={"/Images/Give india.png"}
                alt="NITPatna"
              /> */}
              <img
                className="csr-image"
                src={"/Images/hydera_runners.jpg"}
                alt="BookWorm"
              />
              <img
                className="csr-image"
                src={"/Images/images_bkj.png"}
                alt="SphoortiFoundation"
              />
              <img
                className="csr-image"
                src={"/Images/images.jpeg"}
                alt="ManchiPusthakam"
              />
              <img
                className="csr-image"
                src={"/Images/jasthi.jpeg"}
                alt="HyderabadRunner"
              />
              <img
                className="csr-image"
                src={"/Images/Untitleddesign(1).png"}
                alt="Atma"
              />
              <img
                className="csr-image"
                src={"/Images/Untitleddesign(2).png"}
                alt="CENT"
              />
              <img
                className="csr-image"
                src={"/Images/Untitleddesign.png"}
                alt="IIIT Hyderabad"
              />
              <img
                className="csr-image"
                src={"/Images/sahajafoundation.jpeg"}
                alt="Wipro"
              />
            </React.Fragment>
          ))}
        </div>
      </div>
      </>
      
    );
  }
}

export default CSRPartners;
