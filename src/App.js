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

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/About" component={About} />
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
          <Route path="/impactReports" component={ImpactReports} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
