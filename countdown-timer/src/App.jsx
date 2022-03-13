import React from 'react';
import './App.css';
import { useAlert } from 'react-alert';
import CountdownTimer from './components/countdown-timer/countdown-timer.component';

function App() {
  const alert = useAlert();

  const time = {
    hours: 2,
    minutes: 30,
    seconds: 30,
  };

  const onTimerCompleted = () => {
    alert.show('Time is over!');
  };

  return (
    <div className="App">
      <CountdownTimer time={time} onComplete={onTimerCompleted} />
    </div>
  );
}

export default App;
