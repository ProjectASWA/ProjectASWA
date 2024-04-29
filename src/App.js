import React from "react";

import { Route, Switch } from "react-router-dom";

import "./styles.css";

import NavBar from "./components/NavBar";

import About from "./components/About";

import JoinWithUs from "./components/JoinWithUs";

import MediaCoverage from "./components/MediaCoverage";

import Reports from "./components/Reports";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/About" component={About} />
        <Route exact path="/JoinWithUs" component={JoinWithUs} />
        <Route exact path="/MediaCoverage" component={MediaCoverage} />
        <Route exact path="/Reports" component={Reports} />
      </Switch>
    </div>
  );
}

export default App;
