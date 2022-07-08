import "./styles.css";
import React, { useEffect, useState } from "react";
import Intro from "./components/Intro";
import GameScreen from "./components/GameScreen";

export default function App() {
  const [start, setStart] = useState(false);
  const [questions, setQuestions] = useState([]);

  const startGame = () => {
    setStart(true);
  };

  useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=10&category=15")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setQuestions(data);
      });
  }, []);

  return (
    <div>
      {!start && <Intro startGame={startGame} />}
      {start && <GameScreen questions={questions} />}
    </div>
  );
}
