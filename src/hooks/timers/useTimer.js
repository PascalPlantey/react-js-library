import { useCallback, useState } from 'react';

import useInterval from './useInterval';

/**
 * Sends a render every interval ms until initialTime comes to zero
 * @param {number} secondsUntilStop Number of seconds to wait before stopping
 * @returns {useTimerResult} { remainingTime, working, toggle, reset }
 * @memberof Hooks#
 */
const useTimer = (secondsUntilStop, immediately = true) => {
  const [remainingTime, setRemainingTime] = useState(secondsUntilStop);

  // Get a const function to avoid side effects on toggle & reset
  const intervalFn = useCallback(() => {
    setRemainingTime(prev => Math.max(prev - 1, 0));
  }, []);

  const { working, toggle, stop, start } = useInterval(intervalFn, 1000, immediately);

  working && remainingTime === 0 && stop();                       // Stop interval if timer is consumed

  // Toggle only if some time is left
  const handleToggle = useCallback(() => remainingTime > 0 && toggle(), [remainingTime, toggle]);

  // Reset to initial parameters (secondsUntilStop && immediately)
  const handleReset = useCallback(() => {
    setRemainingTime(secondsUntilStop);
    if (!working && immediately)
      start();
  }, [secondsUntilStop, working, immediately, start]);

  return({
    working,
    remainingTime,
    toggle: handleToggle,
    reset: handleReset
  });
};

/* Debug with -----------------------------------------------*
  const resultDesc = {
    type: 'object',
    values: [
      { name: 'working', type: 'boolean' },
      { name: 'remainingTime', type: 'number' },
      { name: 'toggle', type: 'function' },
      { name: 'reset', type: 'function' }
    ]
  };

  const res = useCheckHook('hook', useTimer, resultDesc, 5);
*/

export default useTimer;