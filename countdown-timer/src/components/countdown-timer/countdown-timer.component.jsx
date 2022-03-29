import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import {
  getTotalSeconds, getHours, getMinutes, getSeconds,
} from '../../helpers/timeHelper';

import './countdown-timer.styles.scss';

function CountdownTimer({ children, onComplete, settings }) {
  const [secs, setSecs] = useState(getTotalSeconds(settings));

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setSecs(secs - 1);
    }, 1000);

    if (secs === 0) {
      clearTimeout(timeoutId);
      onComplete();
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [onComplete, secs]);

  return (
    <div className="countdown-timer">
      {children(getHours(secs), getMinutes(secs), getSeconds(secs))}
    </div>
  );
}

CountdownTimer.propTypes = {
  children: PropTypes.func.isRequired,
  onComplete: PropTypes.func,
  settings: PropTypes.shape({
    hours: PropTypes.number,
    minutes: PropTypes.number,
    seconds: PropTypes.number,
  }),
};

export default CountdownTimer;
