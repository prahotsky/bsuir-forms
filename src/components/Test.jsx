import React, { useState } from "react";
import { connect } from "react-redux";
import {
  Container,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button
} from "@material-ui/core";
import StudentQuestion from "./StudentQuestion";

const Test = ({ match, tests }) => {
  const [rightAnswersCounter, setRightAnswerCounter] = useState(0);
  const [answersCounter, setAnswersCounter] = useState(0);
  console.log(rightAnswersCounter);
  console.log(answersCounter);
  const test = tests[match.params.id];
  console.log(Object.values(test.questions).length);
  return (
    <Container className="borders">
      <h2>{test.name}</h2>
      <p>{test.description}</p>
      {test.questions &&
        Object.values(test.questions).length &&
        Object.values(test.questions).map((question, index) => (
          <StudentQuestion
            answersCounter={answersCounter}
            setAnswersCounter={setAnswersCounter}
            rightAnswersCounter={rightAnswersCounter}
            setRightAnswerCounter={setRightAnswerCounter}
            key={index}
            index={index + 1}
            question={question}
          />
        ))}
      <Dialog
        // fullWidth={fullWidth}
        // maxWidth={maxWidth}
        open={Object.values(test.questions).length === answersCounter}
        // onClose={handleClose}
        aria-labelledby="max-width-dialog-title"
      >
        <DialogTitle id="max-width-dialog-title">Результаты</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Вы ответили правильно на {rightAnswersCounter} из{" "}
            {Object.values(test.questions).length} вопросов.
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </Container>
  );
};

export default connect(({ tests }) => ({ tests: tests }))(Test);
