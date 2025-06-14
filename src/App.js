import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [animate, setAnimate] = useState(false);

  const playSound = () => {
    new Audio('/assets/click.mp3').play();
  };

  const increase = () => {
    playSound();
    setCount(count + 1);
  };

  const decrease = () => {
    playSound();
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const reset = () => {
    playSound();
    setCount(0);
  };

  useEffect(() => {
    setAnimate(true);
    const timeout = setTimeout(() => setAnimate(false), 400);
    return () => clearTimeout(timeout);
  }, [count]);

  // ✅ Updated return section with circle-box
  return (
    <div className="App">
      <div className="circle-box">
        <h1>😊✌️😊</h1>
        <h1> React Counter App</h1>
        <h2 className={animate ? 'bounce' : ''}>Count: {count}</h2>

        <div className="buttons">
          <button onClick={increase}>➕ Increase</button>
          <button onClick={decrease}>➖ Decrease</button>
          <button onClick={reset}>🔁 Reset</button>
        </div>
      </div>
    </div>
  );
}

export default App;


