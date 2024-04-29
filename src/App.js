import React from "react";

import { Route, Switch } from "react-router-dom";

import "./styles.css";

import NavBar from "./components/NavBar";

import About from "./components/About";

import JoinWithUs from "./components/JoinWithUs";

import MediaCoverage from "./components/MediaCoverage";

import Reports from "./components/Reports";

import Home from "./components/Home";

import Popup from "./components/CSRPartners";

import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
      <Route exact path="/" component={Home} />
        <Route exact path="/About" component={About} />
        <Route exact path="/Reports" component={Reports} />
        <Route exact path="/JoinWithUs" component={JoinWithUs} />
        <Route exact path="/MediaCoverage" component={MediaCoverage} />
      </Switch>
      <Home />
      <Popup />
      <Footer />
    </div>
  );
}

export default App;
