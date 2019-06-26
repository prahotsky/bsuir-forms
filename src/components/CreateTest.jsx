import React from "react";
import Question from "./Question";
import { Container, TextField } from "@material-ui/core";

import "../styles/createTest.css";

const CreateTest = () => {
  return (
    <Container>
      <form className="create-test-form">
        <TextField
          id="testName"
          label="Новый тест"
          margin="normal"
          variant="outlined"
          className="test-name"
        />
        <TextField
          id="summary"
          className="summary"
          label="Описание"
          margin="normal"
        />
        <Question />
      </form>
    </Container>
  );
};

export default CreateTest;
