import { nanoid } from "nanoid";
import React, { useState } from "react";
import "../styles.css";

const Question = ({ question, increaseScore }) => {
  console.log(question);
  const [clicked, setClicked] = useState(false);

  const answersArray = [
    ...question.incorrect_answers,
    question.correct_answer
  ].sort((a, b) => 0.5 - Math.random());

  const handleClick = (evt) => {
    console.log(evt.target.value);
    evt.target.value === question.correct_answer && increaseScore();
  };

  const decode = (string) =>
    string.replaceAll("&quot;", '"').replaceAll("&#039;", "'");

  const buttons = answersArray.map((answer) => (
    <button
      onClick={(evt) => handleClick(evt)}
      key={nanoid()}
      value={decode(answer)}
    >
      {decode(answer)}
    </button>
  ));

  return (
    <div>
      <h3>{decode(question.question)}</h3>

      <div className="flex-buttons">{buttons}</div>
      <hr />
    </div>
  );
};

export default Question;
