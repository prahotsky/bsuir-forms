import React from "react";
import { Link } from "react-router-dom";

const ShowListItem = ({ testName, id }) => {
  return (
    <Link to={"/test/" + id}>
      <div className="borders margin-top--medium delete-item pointer text-center">
        {testName}
      </div>
    </Link>
  );
};

export default ShowListItem;
