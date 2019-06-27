import React from "react";
import { Delete } from "@material-ui/icons";

import "../styles/deleteTest.css";

const DeleteListItem = ({ testName, onDeleteTest }) => {
  return (
    <>
      <div className="borders margin-top--medium delete-item relative">
        {testName}
        <Delete className="delete-btn-2 pointer" onClick={onDeleteTest} />
      </div>
    </>
  );
};

export default DeleteListItem;
