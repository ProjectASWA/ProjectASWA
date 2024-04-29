// import React, { useState } from "react";
// import "./index.css";

// export default function Modal() {
//   const [modal, setModal] = useState(false);

//   const toggleModal = () => {
//     setModal(!modal);
//   };

//   if (modal) {
//     document.body.classList.add("active-modal");
//   } else {
//     document.body.classList.remove("active-modal");
//   }

//   return (
//     <>
//       <div className="csr-partners-container">
//         <img src={"/Images/HyderbadRunner.png"} />
//         <img src={"/Images/Atma.png"} />
//         <img src={"/Images/CENT.png"} />
//         <img src={"/Images/IIITHyderbad.png"} />
//         <img src={"/Images/wipro.png"} />
//       </div>
//       <button onClick={toggleModal} className="btn-modal">
//         Know More
//       </button>

//       {modal && (
//         <div className="modal">
//           <div onClick={toggleModal} className="overlay"></div>
//           <div className="modal-content">
//             <h2>Hello Modal</h2>
//             <div className="modal-image-container">
//               <img className="csr-image" src={"/Images/AndraWelfare.jpg"} />
//               <img className="csr-image" src={"/Images/JoyOfReading.png"} />
//               <img
//                 className="csr-image"
//                 src={"/Images/VishwakarmaInstitutes.png"}
//               />
//               <img
//                 className="csr-image"
//                 src={"/Images/MangalagriCottons.png"}
//               />
//               <img className="csr-image" src={"/Images/parag.png"} />
//               <img className="csr-image" src={"/Images/CBIT.jpg"} />
//               <img className="csr-image" src={"/Images/NitPatna.jpg"} />
//               <img className="csr-image" src={"/Images/BookWorm.png"} />
//               <img
//                 className="csr-image"
//                 src={"/Images/sphoortiFoundation.png"}
//               />
//               <img className="csr-image1" src={"/Images/ManchiPusthakam.png"} />
//             </div>
//             <button className="close-modal" onClick={toggleModal}>
//               CLOSE
//             </button>
//           </div>
//         </div>
//       )}
//       <p></p>
//     </>
//   );
// }
