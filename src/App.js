import { Route, Routes } from "react-router-dom";
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

      {/* <NavBar /> */}
      <Routes>
        <Route path = "/" element = {<Home />} />
        {/* <Route path="/about" element={<About />} />
        <Route path="/JoinWithUs" element={<JoinWithUs />} />
        <Route path="/MediaCoverage" element={<MediaCoverage />} />
        <Route path="/Reports" element={<Reports />} /> */}
      </Routes>
    </div>
  );
}

export default App;
