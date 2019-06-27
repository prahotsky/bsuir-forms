import React, { useState } from "react";
import { connect } from "react-redux";
import Question from "./Question";
import { Container, TextField, Button, Snackbar } from "@material-ui/core";
import { removeByKey } from "../helpers/utils";
import { createTest } from "../actions/index";
import uuid from "uuid";

import "../styles/createTest.css";

const CreateTest = ({ createTest, setView }) => {
  const [snackBar, setSnackBar] = useState(false);
  const [testName, setTestName] = useState("");
  const [testDescription, setTestDescription] = useState("");
  const [questions, setQuestion] = useState({
    [uuid.v4()]: { questionString: "" }
  });
  const onAddQuestion = () => {
    setQuestion({
      ...questions,
      [uuid.v4()]: { questionString: "", answers: {} }
    });
  };

  const onDeleteQuestion = id => () => {
    setQuestion(removeByKey(questions, id));
  };

  const onChangeQuestion = id => e => {
    const {
      target: { value }
    } = e;
    setQuestion({
      ...questions,
      [id]: { ...questions[id], questionString: value }
    });
  };

  const onChangeTestName = e => {
    setTestName(e.target.value);
  };

  const onAddAnswerToQuestion = questionId => answers => {
    setQuestion({
      ...questions,
      [questionId]: {
        ...questions[questionId],
        answers: { ...answers }
      }
    });
  };

  const onChangeTestDescription = e => {
    setTestDescription(e.target.value);
  };

  const onCreateTest = e => {
    e.preventDefault();
    createTest({
      name: testName,
      description: testDescription,
      questions: questions
    });
    setSnackBar(true);
    setTimeout(() => setView(null), 1500);
  };

  return (
    <Container>
      <form onSubmit={onCreateTest} className="create-test-form">
        <TextField
          id="testName"
          label="Новый тест"
          margin="normal"
          variant="outlined"
          className="test-name"
          onChange={onChangeTestName}
          required={true}
        />
        <TextField
          id="summary"
          className="summary"
          label="Описание"
          margin="normal"
          variant="outlined"
          onChange={onChangeTestDescription}
          required={true}
        />
        {Object.keys(questions).map((questionId, questionNum) => (
          <Question
            key={questionId}
            questionId={questionId}
            questionNum={questionNum + 1}
            onChangeQuestion={onChangeQuestion(questionId)}
            onDeleteQuestion={onDeleteQuestion(questionId)}
            onAddAnswerToQuestion={onAddAnswerToQuestion(questionId)}
            onAddQuestion={onAddQuestion}
          />
        ))}
        <Button variant="contained" className="create-test__btn" type="submit">
          Создать тест
        </Button>
      </form>
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
        message={<span id="message-id">Тест сохранен</span>}
      />
    </Container>
  );
};

export default connect(
  null,
  { createTest }
)(CreateTest);
