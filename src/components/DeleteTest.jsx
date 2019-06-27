import React, { useState } from "react";
import { deleteTest } from "../actions/index";
import { Snackbar } from "@material-ui/core";

import DeleteListItem from "./DeleteListItem";
import { connect } from "react-redux";

const DeleteTest = ({ tests, deleteTest }) => {
  const [snackBar, setSnackBar] = useState(false);

  const onDeleteTest = id => () => {
    console.log("heere", id);
    deleteTest(id);
    setSnackBar(true);
  };

  return (
    <div className="flex column">
      {tests && tests.length ? (
        tests.map((test, id) => (
          <DeleteListItem
            key={id}
            onDeleteTest={onDeleteTest(id)}
            testName={test.name}
          />
        ))
      ) : (
        <div className="margin-top--medium text-center">Тесты отсутствуют</div>
      )}
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center"
        }}
        open={snackBar}
        onClose={() => setSnackBar(false)}
        autoHideDuration={1000}
        ContentProps={{
          "aria-describedby": "message-id"
        }}
        message={<span id="message-id">Тест удален</span>}
      />
    </div>
  );
};

export default connect(
  ({ tests }) => ({ tests: tests }),
  { deleteTest }
)(DeleteTest);
