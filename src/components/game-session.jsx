import Button from "./button";

function GameSession({ question }) {
  return (
    <div>
      Hier kommt eigentliches Game
      <div className="buttonbar">
        {question.answers.map((answer, index) => {
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
    </div>
  );
}

export default GameSession;
