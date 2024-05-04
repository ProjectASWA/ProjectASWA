import React from "react";

import { Route, Switch } from "react-router-dom";

import "./styles.css";

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

import HomeVisits from './components/HomeVisits'

function App() {
  return (
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
        <Route exact path = "/HomeVisits" component = {HomeVisits}/>
        <Route />
      </Switch>
    </div>
  );
}

export default App;
