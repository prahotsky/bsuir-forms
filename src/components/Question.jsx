import React from "react";
import { TextField, RadioGroup, Radio } from "@material-ui/core";

import "../styles/createTest.css";

const Question = () => {
  return (
    <>
      <TextField
        id="question"
        className="question"
        label="Вопрос"
        margin="normal"
        className="question"
      />
      <RadioGroup>
        <div>
          <Radio />
          <TextField
            id="question"
            className="question"
            label="Вариант ответа"
            margin="normal"
            className="question"
          />
        </div>
      </RadioGroup>
    </>
  );
};

export default Question;
