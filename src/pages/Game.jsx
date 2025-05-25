/* import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Button from "./components/button";

//Beispiel Frage
const question1 = {
  question: "Welcher Begriff kommt als erstes im ICAO-Buchstabieralphabet?",
  answers: ["Alpha", "Bravo", "Charlie"],
  correctAnswer: "Alpha",
};

function Game() {
  return (
    <div>
      <div className="buttonbar">
        {question1.answers.map((answer, index) => {
          return (
            <Button
              key={index}
              text={answer}
              answerOnClick={() => {
                console.log(`Antwort ${index + 1}: ${answer} wurde geklickt`);
              }}
            />
          );
        })}
      </div>
      <button>Nächste Frage</button>
    </div>
  );
}

export default Game;
 */
