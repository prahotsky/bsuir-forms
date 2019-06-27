import React, { useEffect } from "react";
import { connect } from "react-redux";

const DeleteTest = ({ tests }) => {
  console.log(tests);
  return (
    <div className="flex column">
      {tests && tests.length ? (
        tests.map(test => <div>{test.name}</div>)
      ) : (
        <div className="margin-top--medium text-center">Тесты отсутствуют</div>
      )}
    </div>
  );
};

export default connect(
  ({ tests }) => ({ tests: tests }),
  null
)(DeleteTest);
