// import React, { useEffect } from "react";

// import {
//   BrowserRouter as Router,
//   Route,
//   Switch,
//   useLocation,
// } from "react-router-dom";

// import NavBar from "./components/NavBar";

// import About from "./components/About";

// import JoinWithUs from "./components/JoinWithUs";

// import MediaCoverage from "./components/MediaCoverage";

// import Reports from "./components/Reports";

// import Home from "./components/Home";

// import Education from "./components/Education";

// import Environment from "./components/Environment";

// import AnnamParabrahmam from "./components/AnnamParabrahmam";

// import DonateProject from "./components/DonateProject";

// import HomeVisits from "./components/HomeVisits";

// // import "../public/fonts/Satoshi_Complete/Fonts/WEB/css/satoshi.css";

// import Volunteer from "./components/Volunteer";

// import PdfComponent from "./components/PdfComponent";

// import ImpactReports from "./components/ImpactReports";

// import Footer from "./components/Footer";

// import VisionAndMission from "./components/VisionAndMission";

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <Route
//           render={({ location }) => {
//             if (location.pathname !== "/pdf") return <NavBar />;
//           }}
//         />
//         <Switch>
//           <Route exact path="/" component={Home} />
//           <Route exact path="/About" component={About} />
//           <Route exact path="/JoinWithUs" component={JoinWithUs} />
//           <Route exact path="/MediaCoverage" component={MediaCoverage} />
//           <Route exact path="/Reports" component={Reports} />
//           <Route exact path="/Education" component={Education} />
//           <Route exact path="/AnnamParabrahmam" component={AnnamParabrahmam} />
//           <Route exact path="/Environment" component={Environment} />
//           <Route exact path="/DonateProject" component={DonateProject} />
//           <Route exact path="/HomeVisits" component={HomeVisits} />
//           <Route exact path="/volunteer" component={Volunteer} />
//           <Route exact path="/pdf" component={PdfComponent} />
//           <Route exact path="/impactReports" component={ImpactReports} />
//           <Route exact path="Volunteer" component={Volunteer} />
//           <Route exact path="/VisionAndMission" component={VisionAndMission} />
//         </Switch>
//         <Route
//           render={({ location }) => {
//             if (location.pathname !== "/pdf") return <Footer />;
//           }}
//         />
//       </div>
//     </Router>
//   );
// }

// export default App;

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import NavBar from "./components/NavBar";
import About from "./components/About";
import JoinWithUs from "./components/JoinWithUs";
import MediaCoverage from "./components/MediaCoverage";
import Reports from "./components/Reports";
import Home from "./components/Home";
import Education from "./components/Education";
import Environment from "./components/Environment";
import AnnamParabrahmam from "./components/AnnamParabrahmam";
import DonateProject from "./components/DonateProject";
import HomeVisits from "./components/HomeVisits";
import Volunteer from "./components/Volunteer";
import PdfComponent from "./components/PdfComponent";
import ImpactReports from "./components/ImpactReports";
import Footer from "./components/Footer";
import VisionAndMission from "./components/VisionAndMission";

function App() {
  return (
    <Router>
      <div className="App">
        <Route
          render={({ location }) => {
            if (location.pathname !== "/pdf") return <NavBar />;
          }}
        />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about/:section?" component={About} />
          <Route exact path="/JoinWithUs" component={JoinWithUs} />
          <Route exact path="/MediaCoverage" component={MediaCoverage} />
          <Route exact path="/Reports" component={Reports} />
          <Route exact path="/Education" component={Education} />
          <Route exact path="/AnnamParabrahmam" component={AnnamParabrahmam} />
          <Route exact path="/Environment" component={Environment} />
          <Route exact path="/DonateProject" component={DonateProject} />
          <Route exact path="/HomeVisits" component={HomeVisits} />
          <Route exact path="/volunteer" component={Volunteer} />
          <Route exact path="/pdf" component={PdfComponent} />
          <Route exact path="/impactReports" component={ImpactReports} />
        </Switch>
        <Route
          render={({ location }) => {
            if (location.pathname !== "/pdf") return <Footer />;
          }}
        />
      </div>
    </Router>
  );
}

export default App;
