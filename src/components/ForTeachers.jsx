import React, { useState } from "react";
import "../styles/styles.css";
import CreateTest from "./CreateTest";
import DeleteTest from "./DeleteTest";

const ForTeachers = () => {
  const [view, setView] = useState(null);
  return (
    <>
      <ul className="index-menu">
        <li
          onClick={() => setView("create")}
          className={view === "create" ? "active" : ""}
        >
          <p>Создать тест</p>
        </li>
        {/* <li
          onClick={() => setView("edit")}
          className={view === "edit" ? "active" : ""}
        >
          <p>Редактировать тест</p>
        </li> */}
        <li
          onClick={() => setView("delete")}
          className={view === "delete" ? "active" : ""}
        >
          <p>Удалить тест</p>
        </li>
      </ul>
      {view === "create" && <CreateTest setView={setView} />}
      {view === "delete" && <DeleteTest setView={setView} />}
    </>
  );
};

export default ForTeachers;
