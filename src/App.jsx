import "./App.css";
import Navigation from "./components/navigation";
import GameSession from "./components/game-session";
import Greeting from "./components/greeting";

//Beispiel Frage
const question1 = {
  question: "Welcher Begriff kommt als erstes im ICAO-Buchstabieralphabet?",
  answers: ["Alpha", "Bravo", "Charlie"],
  correctAnswer: "Alpha",
};

function App() {
  return (
    <div className="App">
      <Navigation />
      <header className="App-header">
        <img src="/vite.svg" className="App-logo" alt="logo"></img>
        <h1>Willkommen beim WISS-Quiz</h1>
        <h2>{question1.question}</h2>
      </header>

      <GameSession question={question1} />
      <Greeting name="Player 456" />
    </div>
  );
}

export default App;
