import React, { useState } from "react";
import StudentAnswer from "./StudentAnswer";

const StudentQuestion = ({
  question,
  index,
  setRightAnswerCounter,
  rightAnswersCounter,
  setAnswersCounter,
  answersCounter
}) => {
  const [nonClick, setNonClick] = useState(false);
  return (
    <div
      className={
        nonClick
          ? "borders non-clickable margin-left--medium margin-top--medium"
          : "borders margin-left--medium margin-top--medium"
      }
    >
      {index}.{question.questionString}
      {question.answers &&
        Object.values(question.answers).length &&
        Object.values(question.answers).map((answer, index) => (
          <StudentAnswer
            answersCounter={answersCounter}
            setAnswersCounter={setAnswersCounter}
            rightAnswersCounter={rightAnswersCounter}
            setRightAnswerCounter={setRightAnswerCounter}
            setNonClick={setNonClick}
            key={index}
            index={index + 1}
            answer={answer}
          />
        ))}
    </div>
  );
};

export default StudentQuestion;
