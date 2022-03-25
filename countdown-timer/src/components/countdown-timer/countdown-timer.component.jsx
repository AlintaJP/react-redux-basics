import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import {
  getMs, getHours, getMinutes, getSeconds,
} from '../../helpers/timeHelper';

import './countdown-timer.styles.scss';

function CountdownTimer({ children, onComplete, settings }) {
  const [ms, setMs] = useState(getMs(settings));

  useEffect(() => {
    const intervalId = setInterval(() => {
      setMs(ms - 1000);
    }, 1000);

    if (ms === 0) {
      clearInterval(intervalId);
      onComplete();
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [onComplete, ms]);

  return (
    <div className="countdown-timer">{children(getHours(ms), getMinutes(ms), getSeconds(ms))}</div>
  );
}

CountdownTimer.propTypes = {
  children: PropTypes.func.isRequired,
  onComplete: PropTypes.func,
  settings: PropTypes.objectOf(PropTypes.object()),
};

export default CountdownTimer;
