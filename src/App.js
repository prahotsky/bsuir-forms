import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Index from "./components/Index";
import ForTeachers from "./components/ForTeachers";
import "./styles/helpers.css";

function App() {
  return (
    <Router>
      <Route exact path="/" component={Index} />
      <Route path="/forTeachers" component={ForTeachers} />
    </Router>
  );
}

export default App;
