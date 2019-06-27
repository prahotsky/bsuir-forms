import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Index from "./components/Index";
import ForTeachers from "./components/ForTeachers";
import ForStudents from "./components/ForStudents";
import Test from "./components/Test";
import "./styles/helpers.css";

function App() {
  return (
    <Router>
      <Route exact path="/" component={Index} />
      <Route path="/forTeachers" component={ForTeachers} />
      <Route path="/forStudents" component={ForStudents} />
      <Route path="/test/:id" component={Test} />
    </Router>
  );
}

export default App;
