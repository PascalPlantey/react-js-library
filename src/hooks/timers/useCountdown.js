import { useRef } from 'react';

import useTimer from './useTimer';

/**
 * Execute a function after initialSeconds has elapsed
 * @param {function} callback Function to execute when time has elapsed : () => void
 * @param {number} initialSeconds Number of seconds before callback is executed
 * @param {boolean} immediately Start countdown immediately or after toggle()/reset() is called
 * @returns {useTimerResult} { remainingTime, working, toggle, reset }
 * @memberof Hooks#
 */
const useCountdown = (action, runAfterSeconds, immediately = true) => {
  const { working, remainingTime, toggle, reset } = useTimer(runAfterSeconds, immediately);
  const done = useRef(false);                           // callback action executed?

  const handleToggle = useCallback(() => done.current === false && toggle(), [toggle]);

  const handleReset = useCallback(() => {
    reset();
    done.current = false;
  }, [reset]);

  // Execute the action when time has elapsed
  if (remainingTime === 0 && !done.current) {
    isFunction(action) && action();
    done.current = true;
  }

  return({
    working,
    remainingTime,
    toggle: handleToggle,
    reset: handleReset,
  });
};

/* Debug with
 * const resultDesc = {
 *   type: 'object',
 *   values: [
 *     { name: 'working', type: 'boolean' },
 *     { name: 'remainingTime', type: 'number' },
 *     { name: 'toggle', type: 'function' },
 *     { name: 'reset', type: 'function' }
 *   ]
 * };
 */

export default useCountdown;