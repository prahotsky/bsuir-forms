import React, { useState } from "react";

const StudentAnswer = ({
  answer,
  index,
  setNonClick,
  rightAnswersCounter,
  setRightAnswerCounter,
  answersCounter,
  setAnswersCounter
}) => {
  const [rightAnswer, setRightAnswer] = useState(null);
  const onAnswerClick = () => {
    setAnswersCounter(answersCounter + 1);
    setNonClick(true);
    if (answer.checked) {
      setRightAnswer(true);
      setRightAnswerCounter(rightAnswersCounter + 1);
    } else {
      setRightAnswer(false);
    }
  };
  return (
    <div
      onClick={onAnswerClick}
      className={
        rightAnswer === null
          ? "borders margin-left--large pointer margin-top--medium"
          : rightAnswer === true
          ? "borders-green margin-left--large pointer margin-top--medium"
          : "borders-red margin-left--large pointer margin-top--medium"
      }
    >
      {index}.{answer.value}
    </div>
  );
};

export default StudentAnswer;
