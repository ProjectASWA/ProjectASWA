import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./styles.css";
import NavBar from "./components/NavBar";
import About from "./components/About";
import JoinWithUs from "./components/JoinWithUs";
import MediaCoverage from "./components/MediaCoverage";
import Reports from "./components/Reports";
import Home from "./components/Home";
// import { About, Contact, Home, Services } from "./components";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/JoinWithUs" component={JoinWithUs} />
          <Route path="/MediaCoverage" component={MediaCoverage} />
          <Route path="/Reports" component={Reports} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
