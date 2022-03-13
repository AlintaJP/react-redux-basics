import React, { useState, useEffect } from 'react';
import ProgressBar from './components/progress-bar/progress-bar.component';
import './App.css';

function App() {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const intevalId = setInterval(() => {
      setValue((prevState) => {
        let newState = prevState + 10;

        if (newState >= 100) {
          newState = 100;
          clearInterval(intevalId);
        }

        return newState;
      });
    }, 1000);
  }, []);

  return (
    <div className="progress-bar-wrapper">
      <span className="progress-bar-label">The progress bar</span>
      <ProgressBar value={value} />
    </div>
  );
}
export default App;
