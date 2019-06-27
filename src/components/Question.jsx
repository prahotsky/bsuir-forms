import React, { useState, useEffect } from "react";
import AnswerVariant from "./AnswerVariant";
import { TextField, FormLabel, RadioGroup } from "@material-ui/core";
import { AddCircle, Delete } from "@material-ui/icons";
import { removeByKey } from "../helpers/utils";
import uuid from "uuid";

import "../styles/createTest.css";

const Question = ({
  onAddQuestion,
  onChangeQuestion,
  onDeleteQuestion,
  questionNum,
  onAddAnswerToQuestion
}) => {
  const [answers, setAnswersData] = useState({
    [uuid.v4()]: { checked: false }
  });
  const onAddAnswer = () => {
    setAnswersData({ ...answers, [uuid.v4()]: { checked: false } });
  };

  const onDeleteAnswer = id => () => {
    setAnswersData(removeByKey(answers, id));
  };

  const onChangeAnswer = id => e => {
    const {
      target: { value }
    } = e;
    setAnswersData({ ...answers, [id]: { ...answers[id], value: value } });
  };

  const onCheckAnswer = id => (e, checked) => {
    setAnswersData({ ...answers, [id]: { ...answers[id], checked: checked } });
  };

  useEffect(() => {
    onAddAnswerToQuestion({ ...answers });
  }, [answers, onAddAnswerToQuestion]);

  return (
    <div className="margin-left--medium">
      <div className="borders margin-bottom--medium margin-top--medium relative">
        <FormLabel
          style={{
            display: "inline-block",
            marginTop: "35px",
            marginRight: "10px"
          }}
        >
          {questionNum}
        </FormLabel>
        <TextField
          id="question"
          className="question"
          label="Вопрос"
          margin="normal"
          variant="outlined"
          onChange={onChangeQuestion}
          required={true}
        />
        <AddCircle className="add-btn pointer" onClick={onAddQuestion} />
        <Delete className="delete-btn pointer" onClick={onDeleteQuestion} />
      </div>
      <RadioGroup className="borders margin-left--large">
        {Object.keys(answers).map((answerId, answerNum) => (
          <AnswerVariant
            key={answerId}
            answerNum={answerNum + 1}
            onChangeAnswer={onChangeAnswer(answerId)}
            onAddAnswer={onAddAnswer}
            onDeleteAnswer={onDeleteAnswer(answerId)}
            onCheckAnswer={onCheckAnswer(answerId)}
          />
        ))}
      </RadioGroup>
    </div>
  );
};

export default Question;
