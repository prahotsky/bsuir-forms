import React from "react";
import { Link } from "react-router-dom";
import "../styles/styles.css";
import CreateTest from "./CreateTest";

const ForTeachers = () => {
  return (
    <>
      <ul className="index-menu">
        <li>
          <p>Создать тест</p>
        </li>
        <li>
          <p>Редактировать тест</p>
        </li>
        <li>
          <p>Удалить тест</p>
        </li>
      </ul>
      <CreateTest />
    </>
  );
};

export default ForTeachers;
