import React, { useState } from "react";
import "./index.css";

import wiproImage from "../../Images/Wipro.png";

export default function Modal() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    <>
      <div className="csr-partners-container">
<<<<<<< HEAD
        <img src={"/Images/HyderbadRunner.png"} />
        <img src={"/Images/Atma.png"} />
        <img src={"/Images/CENT.png"} />
        <img src={"/Images/IIITHyderbad.png"} />
        <img src={"/Images/wipro.png"} />
=======
        <img src={wiproImage} />
        <img src="" />
        <img src="" />
        <img src="" />
        <img src="" />
>>>>>>> e745828b00e29f8453b71f90cb1d7d34c1824b99
      </div>
      <button onClick={toggleModal} className="btn-modal">
        Open
      </button>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2>Hello Modal</h2>
            <div className="modal-image-container">
              <img src="" />
              <img src="" />
              <img src="" />
              <img src="" />
              <img src="" />
              <img src="" />
              <img src="" />
              <img src="" />
              <img src="" />
              <img src="" />
            </div>
            <button className="close-modal" onClick={toggleModal}>
              CLOSE
            </button>
          </div>
        </div>
      )}
      <p></p>
    </>
  );
}
