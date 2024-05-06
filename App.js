import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [buttons, setButtons] = useState(Array(3).fill(0));
  const [secretNumber, setSecretNumber] = useState(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    startGame();
  }, []);

  const startGame = () => {
    const newNumbers = buttons.map(() => Math.floor(Math.random() * 101));
    setButtons(newNumbers);
    const secret = newNumbers[Math.floor(Math.random() * newNumbers.length)];
    setSecretNumber(secret);
    console.log("Secret Number is: ", secret); // For debugging
  };

  const onClick = (number) => {
    if (number === secretNumber) {
      setMessage(`Yes, it was ${secretNumber}`);
      startGame();
    } else {
      setMessage("Try again!");
    }
  };

  return (
    <div className="App">
      <h1>Guess the Secret Number</h1>
      <div className="button-container">
        {buttons.map((number, index) => (
          <button key={index} className={`button${index + 1}`} onClick={() => onClick(number)}>
            {number}
          </button>
        ))}
      </div>
      <p className="answer">{message}</p>
    </div>
  );
}

export default App;
