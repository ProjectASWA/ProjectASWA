import React, { Component } from "react";
import "./index.css";

import OurProjectsCard from "../OurProjectsCard";

class AnimatedFlexCards extends Component {
  state = {
    firstCard: true,
    secondCard: false,
    thirdCard: false,
    fourthCard: false,
  };

  onClickConsole = (cardName) => {
    this.setState((prevState) => ({
      [cardName]: !prevState[cardName],
    }));
  };

  onClickConsole = () => {
    console.log("Hello World");
  };

  render() {
    const EducationCard = "Education";
    const EnvironmentCard = "Environment";
    const BloodConnect = "Blood Connect";
    const AnnamParabraham = "Annam Parabraham";
    const HomeVisits = "Home Visits";

    const { firstCard, secondCard, thirdCard, fourthCard } = this.state;
    console.log(firstCard, secondCard, thirdCard, fourthCard);
    return (
      <div className="wrapper">
        <div className="container">
          <input type="radio" name="slide" id="c1" defaultChecked />
          <label htmlFor="c1" className="card">
            <div className="row">
              <div className="icon">1</div>
              <div>
                <OurProjectsCard text={EducationCard} />
              </div>
            </div>
          </label>

          <input type="radio" name="slide" id="c2" />
          <label htmlFor="c2" className="card">
            <div className="row">
              <div className="icon">2</div>
              <div>
                <OurProjectsCard text={EnvironmentCard} />
              </div>
            </div>
          </label>

          <input type="radio" name="slide" id="c3" />
          <label htmlFor="c3" className="card">
            <div className="row">
              <div className="icon">3</div>
              <div>
                <OurProjectsCard text={BloodConnect} />
              </div>
            </div>
          </label>

          <input type="radio" name="slide" id="c4" />
          <label htmlFor="c4" className="card">
            <div className="row">
              <div className="icon">4</div>
              <div>
                <OurProjectsCard text={AnnamParabraham} />
              </div>
            </div>
          </label>

          <input type="radio" name="slide" id="c5" />
          <label htmlFor="c5" className="card">
            <div className="row">
              <div className="icon">5</div>
              <div>
                <OurProjectsCard text={HomeVisits} />
              </div>
            </div>
          </label>
        </div>
      </div>
    );
  }
}

export default AnimatedFlexCards;

// import React, { Component } from "react";
// import "./index.css";

// import OurProjectsCard from "../OurProjectsCard";

// class AnimatedFlexCards extends Component {
//   state = {
//     firstCard: true,
//     secondCard: false,
//     thirdCard: false,
//     fourthCard: false,
//   };

//   // Consolidate onClickConsole function
//   onClickConsole = () => {
//     console.log("Hello World");
//   };

//   render() {
//     const EducationCard = "Education";
//     const EnvironmentCard = "Environment";
//     const BloodConnect = "Blood Connect";
//     const AnnamParabraham = "Annam Parabraham";
//     const HomeVisits = "Home Visits";

//     const { firstCard, secondCard, thirdCard, fourthCard } = this.state;

//     return (
//       <div className="wrapper">
//         <div className="container">
//           {/* Input 1 */}
//           <input type="radio" name="slide" id="c1" defaultChecked />
//           <label htmlFor="c1" className="card">
//             <div className="row">
//               <div className="icon">1</div>
//               <div>
//                 <OurProjectsCard text={EducationCard} />
//                 <div className="description">
//                   <h4>Winter</h4>
//                   <p>Winter has so much to offer - creative activities</p>
//                 </div>
//               </div>
//             </div>
//           </label>

//           {/* Input 2 */}
//           <input type="radio" name="slide" id="c2" />
//           <label htmlFor="c2" className="card">
//             <div className="row">
//               <div className="icon">2</div>
//               <div>
//                 <OurProjectsCard text={EnvironmentCard} />
//                 <div className="description">
//                   <h4>Digital Technology</h4>
//                   <p>Gets better every day - stay tuned</p>
//                 </div>
//               </div>
//             </div>
//           </label>

//           {/* Input 3 */}
//           <input type="radio" name="slide" id="c3" />
//           <label htmlFor="c3" className="card">
//             <div className="row">
//               <div className="icon">3</div>
//               <div>
//                 <OurProjectsCard text={BloodConnect} />
//                 <div className="description">
//                   <h4>Globalization</h4>
//                   <p>Help people all over the world</p>
//                 </div>
//               </div>
//             </div>
//           </label>

//           {/* Input 4 */}
//           <input type="radio" name="slide" id="c4" />
//           <label htmlFor="c4" className="card">
//             <div className="row">
//               <div className="icon">4</div>
//               <div>
//                 <OurProjectsCard text={AnnamParabraham} />
//               </div>
//             </div>
//           </label>

//           {/* Input 5 */}
//           <input type="radio" name="slide" id="c5" />
//           <label htmlFor="c5" className="card">
//             <div className="row">
//               <div className="icon">5</div>
//               <div>
//                 <OurProjectsCard text={HomeVisits} />
//                 <div className="description">
//                   <h4>New technologies</h4>
//                   <p>Space engineering becomes more and more advanced</p>
//                 </div>
//               </div>
//             </div>
//           </label>
//         </div>
//       </div>
//     );
//   }
// }

// export default AnimatedFlexCards;
