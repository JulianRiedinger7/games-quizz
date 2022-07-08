import { nanoid } from "nanoid";
import React, { useState } from "react";
import Question from "./Question";

const GameScreen = ({ questions }) => {
  const [checked, setChecked] = useState(false);
  const [score, setScore] = useState(0);

  const increaseScore = () => {
    setScore((prevScore) => prevScore + 1);
  };

  const handleCheckClick = () => {
    setChecked((prevChecked) => !prevChecked);
  };

  return (
    <div>
      <h1>Game Screen</h1>
      {questions.results.map((question) => (
        <Question
          key={nanoid()}
          question={question}
          increaseScore={increaseScore}
        />
      ))}
      {checked ? (
        <h2>
          You scored {score}/{questions.results.length} correct answers
        </h2>
      ) : (
        <button onClick={handleCheckClick} className="btn">
          Check Answers
        </button>
      )}
    </div>
  );
};

export default GameScreen;
