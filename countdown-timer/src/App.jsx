import React from 'react';
import './App.scss';
import { useAlert } from 'react-alert';
import CountdownTimer from './components/countdown-timer/countdown-timer.component';

function App() {
  const alert = useAlert();

  const onTimerCompleted = () => {
    alert.show('Time is over!');
  };

  const settings = {
    hours: 10,
    minutes: 10,
    seconds: 10,
  };

  return (
    <div className="app">
      <CountdownTimer settings={settings} onComplete={onTimerCompleted}>
        {(hours, minutes, seconds) => (
          <>
            <span>{hours}</span>
            <span>:</span>
            <span>{minutes}</span>
            <span>:</span>
            <span>{seconds}</span>
          </>
        )}
      </CountdownTimer>
    </div>
  );
}

export default App;
