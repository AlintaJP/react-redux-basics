import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';

import './countdown-timer.styles.scss';

const defaultRemainingTime = {
  hours: '00',
  minutes: '00',
  seconds: '00',
};

const start = Date.now();

function CountdownTimer({ time, onComplete }) {
  const [remainingTime, setRemainingTime] = useState(defaultRemainingTime);

  const startTimer = useCallback(() => {
    const intervalId = setInterval(() => {
      const now = Date.now();
      let { hours, minutes, seconds } = time;
      const countDownMs = start + (hours * 60 * 60 * 1000 + minutes * 60 * 1000 + seconds * 1000);
      const distance = countDownMs - now;

      seconds = Math.floor((distance % (1000 * 60)) / 1000);
      minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

      const twoDigitHours = hours >= 10 ? hours : `0${hours}`;
      const twoDigitMinutes = minutes >= 10 ? minutes : `0${minutes}`;
      const twoDigitSeconds = seconds >= 10 ? seconds : `0${seconds}`;

      if (distance < 0) {
        setRemainingTime(defaultRemainingTime);
        clearInterval(intervalId);
        onComplete();
      } else {
        setRemainingTime({
          hours: twoDigitHours,
          minutes: twoDigitMinutes,
          seconds: twoDigitSeconds,
        });
      }
      return intervalId;
    }, 1000);
  }, [onComplete, time]);

  useEffect(() => {
    const intervalId = startTimer();
    return () => {
      clearInterval(intervalId);
    };
  }, [startTimer]);

  return (
    <div className="countdown-timer">
      <span>{remainingTime.hours}</span>
      <span>hours</span>
      <span>{remainingTime.minutes}</span>
      <span>minutes</span>
      <span>{remainingTime.seconds}</span>
      <span>seconds</span>
    </div>
  );
}

CountdownTimer.propTypes = {
  time: PropTypes.shape({
    hours: PropTypes.number,
    minutes: PropTypes.number,
    seconds: PropTypes.number,
  }).isRequired,
  onComplete: PropTypes.func,
};

export default CountdownTimer;
