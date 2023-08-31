import { useRef } from 'react';

import useTimer from './useTimer';

/**
 * Execute a function after initialSeconds has elapsed
 * @param {function} callback Function to execute when time has elapsed : () => void
 * @param {number} initialSeconds Number of seconds before callback is executed
 * @param {boolean} immediately Start countdown immediately or after toggle()/restart() is called
 * @returns {useTimerResult} { remainingTime, working, toggle, restart }
 * @memberof Hooks#
 */
const useCountdown = (callback, initialSeconds, immediately = true) => {
  const { working, remainingTime, toggle, restart } = useTimer(initialSeconds, immediately);
  const done = useRef(false);

  const handleToggle = () => done.current === false && toggle();
  const handleRestart = () => {
    restart();
    done.current = false;
  };

  if (remainingTime === 0 && !done.current) {
    callback();
    done.current = true;
  }

  return({
    working,
    remainingTime,
    toggle: handleToggle,
    restart: handleRestart,
  });
};

export default useCountdown;