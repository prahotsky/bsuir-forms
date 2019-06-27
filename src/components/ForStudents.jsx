import React from "react";
import "../styles/forStudents.css";
import { connect } from "react-redux";
import ShowListItem from "./ShowListItem";

const ForStudents = ({ tests }) => {
  return (
    <div className="flex column borders choose-test-container margin-top--medium">
      <h3 style={{ borderBottom: "1px solid lightgrey" }}>Выберите тест:</h3>
      {tests && tests.length ? (
        tests.map((test, index) => (
          <ShowListItem key={index} testName={test.name} id={index} />
        ))
      ) : (
        <div style={{ textAlign: "center" }}>Нету доступных тестов</div>
      )}
    </div>
  );
};

export default connect(({ tests }) => ({
  tests: tests
}))(ForStudents);
