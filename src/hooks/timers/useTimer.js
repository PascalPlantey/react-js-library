import { useState } from 'react';

import useInterval from './useInterval';

/**
 * Sends a render every interval ms until initialTime comes to zero
 * @param {number} secondsUntilStop Number of seconds to wait before stopping
 * @returns {useTimerResult} { remainingTime, working, pause, resume, restart }
 * @memberof Hooks#
 */
const useTimer = (secondsUntilStop, immediately = true) => {
  const [remainingTime, setRemainingTime] = useState(secondsUntilStop);

  const [working, toggle] = useInterval(() => {
    setRemainingTime(prev => Math.max(prev - 1, 0));
  }, 1000, immediately);

  working && remainingTime === 0 && toggle();                       // Stop interval if timer is consumed

  const handleToggle = () => remainingTime > 0 && toggle();
  const handleRestart = () => setRemainingTime(secondsUntilStop);

  return({
    working,
    remainingTime,
    toggle: handleToggle,
    restart: handleRestart
  });
};

export default useTimer;