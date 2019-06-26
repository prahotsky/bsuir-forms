import React from "react";
import { Link } from "react-router-dom";
import "../styles/styles.css";

const Index = () => {
  return (
    <ul className="index-menu">
      <li>
        <Link to="/forTeachers">Преподавателям</Link>
      </li>
      <li>
        <p>Студентам</p>
      </li>
    </ul>
  );
};

export default Index;
