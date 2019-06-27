import React from "react";
import {
  TextField,
  RadioGroup,
  Radio,
  FormLabel,
  Checkbox
} from "@material-ui/core";
import { AddCircle, Delete } from "@material-ui/icons";

const AnswerVariant = ({
  onAddAnswer,
  onChangeAnswer,
  onCheckAnswer,
  answerNum,
  onDeleteAnswer
}) => {
  return (
    <div className="answer-variant relative">
      <FormLabel className="align-self-center">{answerNum}</FormLabel>
      <div className="align-self-center">
        <Checkbox onChange={onCheckAnswer} />
      </div>
      <TextField
        id="question"
        className="question align-self-center"
        label="Вариант ответа"
        margin="normal"
        variant="outlined"
        onChange={onChangeAnswer}
        required={true}
      />
      <AddCircle className="add-btn pointer" onClick={onAddAnswer} />
      <Delete className="delete-btn pointer" onClick={onDeleteAnswer} />
    </div>
  );
};

export default AnswerVariant;
