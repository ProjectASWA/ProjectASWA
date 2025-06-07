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
import OurImpact from "./components/OurImpact";
import Footer from "./components/Footer";
import OurProjects1 from "./components/OurProjects1"; // Add this import
import donate from "./components/donate";
import Redirect from './components/register';

import "./styles.css";

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
          <Route exact path="/bloodconnect" component={DonateProject} />
          <Route exact path="/HomeVisits" component={HomeVisits} />
          <Route exact path="/join-us/become-a-member" component={Volunteer} />
          <Route exact path="/pdf" component={PdfComponent} />
          <Route exact path="/OurImpact" component={OurImpact} />      
          <Route exact path="/ImpactSummary" component={OurImpact} />      
          <Route exact path="/donate" component={donate} />
          <Route exact path="/ourProjects1" component={OurProjects1} />
          <Route exact path="/register" component={Redirect} /> {/* Add this route */}
          {/* Add this route */}
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
