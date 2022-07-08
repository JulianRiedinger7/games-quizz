import React from "react";

const Intro = ({ startGame }) => {
  return (
    <div>
      <h1>Quizzical</h1>
      <p>Let's see how much you know about videogames</p>
      <button className="btn" onClick={startGame}>
        Start Quiz
      </button>
    </div>
  );
};

export default Intro;
